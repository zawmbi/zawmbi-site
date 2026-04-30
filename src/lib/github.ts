/**
 * Build-time GitHub data fetchers.
 *
 * Called from Astro frontmatter (server-side, at `astro build`). Anonymous
 * requests are limited to 60/hr/IP; provide GITHUB_TOKEN env to raise to
 * 5000/hr if your build environment hits the limit.
 *
 * All helpers fail soft: if the API errors out, they return empty/neutral
 * data so the build never fails because of upstream issues.
 */

const GH = 'https://api.github.com';
const USER = 'zawmbi';
const TOKEN = process.env.GITHUB_TOKEN;

const headers: Record<string, string> = {
  Accept: 'application/vnd.github+json',
  'X-GitHub-Api-Version': '2022-11-28',
  'User-Agent': 'zawmbi-site-build',
};
if (TOKEN) headers.Authorization = `Bearer ${TOKEN}`;

async function gh<T>(path: string, fallback: T): Promise<T> {
  try {
    const res = await fetch(`${GH}${path}`, { headers });
    if (!res.ok) {
      console.warn(`[github] ${path} → ${res.status}`);
      return fallback;
    }
    return (await res.json()) as T;
  } catch (err) {
    console.warn(`[github] ${path} →`, err);
    return fallback;
  }
}

export interface Repo {
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  pushed_at: string;
  stargazers_count: number;
  forks_count: number;
  fork: boolean;
  archived: boolean;
  private: boolean;
}

export interface CommitSummary {
  sha: string;
  short: string;
  message: string;
  url: string;
  author: string;
  date: string; // ISO
  repo: string;
}

export interface PushEvent {
  date: string;
  repo: string;
  commits: number;
}

export interface LanguageStat {
  name: string;
  bytes: number;
  pct: number;
}

export interface DayBucket {
  date: string; // YYYY-MM-DD
  count: number;
}

export async function fetchRepos(): Promise<Repo[]> {
  const repos = await gh<Repo[]>(`/users/${USER}/repos?per_page=100&sort=pushed&type=owner`, []);
  return repos.filter((r) => !r.fork && !r.archived);
}

export async function fetchLatestCommit(): Promise<CommitSummary | null> {
  const repos = await fetchRepos();
  if (repos.length === 0) return null;
  const top = repos[0];
  const commits = await gh<any[]>(`/repos/${top.full_name}/commits?per_page=1`, []);
  if (commits.length === 0) return null;
  const c = commits[0];
  return {
    sha: c.sha,
    short: c.sha.slice(0, 7),
    message: (c.commit?.message ?? '').split('\n')[0],
    url: c.html_url,
    author: c.commit?.author?.name ?? USER,
    date: c.commit?.author?.date ?? top.pushed_at,
    repo: top.name,
  };
}

export async function fetchPublicEvents(): Promise<any[]> {
  return gh<any[]>(`/users/${USER}/events/public?per_page=100`, []);
}

/**
 * Build a daily commit count for the last `days` days, using public push events.
 * Returns oldest → newest.
 */
export async function fetchActivityHeatmap(days = 84): Promise<DayBucket[]> {
  const events = await fetchPublicEvents();
  const buckets = new Map<string, number>();

  // initialise contiguous days
  const today = new Date();
  today.setUTCHours(0, 0, 0, 0);
  for (let i = days - 1; i >= 0; i--) {
    const d = new Date(today);
    d.setUTCDate(d.getUTCDate() - i);
    buckets.set(d.toISOString().slice(0, 10), 0);
  }

  for (const ev of events) {
    if (ev.type !== 'PushEvent') continue;
    const day = ev.created_at?.slice(0, 10);
    if (!day || !buckets.has(day)) continue;
    const count = ev.payload?.commits?.length ?? 1;
    buckets.set(day, (buckets.get(day) ?? 0) + count);
  }

  return Array.from(buckets.entries()).map(([date, count]) => ({ date, count }));
}

export async function fetchLanguageStats(maxRepos = 8): Promise<LanguageStat[]> {
  const repos = (await fetchRepos()).slice(0, maxRepos);
  const totals = new Map<string, number>();

  await Promise.all(
    repos.map(async (r) => {
      const langs = await gh<Record<string, number>>(`/repos/${r.full_name}/languages`, {});
      for (const [name, bytes] of Object.entries(langs)) {
        totals.set(name, (totals.get(name) ?? 0) + bytes);
      }
    }),
  );

  const total = Array.from(totals.values()).reduce((a, b) => a + b, 0);
  if (total === 0) return [];

  return Array.from(totals.entries())
    .map(([name, bytes]) => ({ name, bytes, pct: (bytes / total) * 100 }))
    .sort((a, b) => b.bytes - a.bytes);
}

export interface RecentEvent {
  type: string;
  repo: string;
  date: string;
  detail: string;
}

export async function fetchRecentActivity(limit = 8): Promise<RecentEvent[]> {
  const events = await fetchPublicEvents();
  const out: RecentEvent[] = [];
  for (const ev of events) {
    if (out.length >= limit) break;
    const repo = ev.repo?.name?.split('/')?.[1] ?? '?';
    let detail = '';
    if (ev.type === 'PushEvent') {
      const n = ev.payload?.commits?.length ?? 0;
      const head = ev.payload?.commits?.[0]?.message?.split('\n')[0] ?? '';
      detail = `${n} commit${n === 1 ? '' : 's'} · ${head}`;
    } else if (ev.type === 'CreateEvent') {
      detail = `created ${ev.payload?.ref_type ?? 'ref'}${ev.payload?.ref ? ` ${ev.payload.ref}` : ''}`;
    } else if (ev.type === 'PullRequestEvent') {
      detail = `${ev.payload?.action ?? 'updated'} PR · ${ev.payload?.pull_request?.title ?? ''}`;
    } else if (ev.type === 'IssuesEvent') {
      detail = `${ev.payload?.action ?? 'updated'} issue · ${ev.payload?.issue?.title ?? ''}`;
    } else if (ev.type === 'WatchEvent') {
      detail = 'starred';
    } else if (ev.type === 'ForkEvent') {
      detail = `forked → ${ev.payload?.forkee?.full_name ?? ''}`;
    } else {
      detail = ev.type.replace(/Event$/, '').toLowerCase();
    }
    out.push({
      type: ev.type,
      repo,
      date: ev.created_at,
      detail,
    });
  }
  return out;
}

/** Format ISO date as relative ("3 days ago", "an hour ago"). */
export function relativeTime(iso: string): string {
  const then = new Date(iso).getTime();
  const now = Date.now();
  const sec = Math.max(1, Math.round((now - then) / 1000));
  if (sec < 60) return `${sec}s ago`;
  const min = Math.round(sec / 60);
  if (min < 60) return `${min}m ago`;
  const hr = Math.round(min / 60);
  if (hr < 24) return `${hr}h ago`;
  const days = Math.round(hr / 24);
  if (days < 30) return `${days} day${days === 1 ? '' : 's'} ago`;
  const months = Math.round(days / 30);
  if (months < 12) return `${months} month${months === 1 ? '' : 's'} ago`;
  const years = Math.round(months / 12);
  return `${years} year${years === 1 ? '' : 's'} ago`;
}
