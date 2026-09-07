/* Bioinformatics / research-tooling work, rendered in the #research section on
   the home page and expanded into a case study at /phylabeler.
   Screenshots live in  public/attachments/phylabeler/  — drop a file in there
   and the matching slot below picks it up. */

export interface ResearchProject {
  id: string;
  name: string;
  field: string;
  href: string;
  repo: string;
  tagline: string;
  desc: string;
  shot: string;        // full-size, used on the case study page
  cardShot: string;    // lighter 1600px copy, used on the home page card
  shotAlt: string;
  barLabel: string;
  points: string[];
  tags: string[];
  meta: string[];
  stats: [string, string][];
}

export const researchProjects: ResearchProject[] = [
  {
    id: 'phylabeler',
    name: 'PhyLabeler',
    field: 'Computational biology',
    href: '/phylabeler',
    repo: 'https://github.com/zawmbi/phylabeler',
    tagline: 'Where does the tree disagree with the taxonomy?',
    desc:
      'A desktop and command-line tool that checks a phylogenetic tree against the NCBI taxonomy and tells you which named groups are not monophyletic — and, for each one, the fewest sequences that would have to move to fix it. Roughly 6,300 lines of Python with no third-party runtime dependencies.',
    shot: '/attachments/phylabeler/hero.png',
    cardShot: '/attachments/phylabeler/card.png',
    shotAlt: 'PhyLabeler analysing a 232-tip plant tree: circular tree view on the right, broken-group results table below',
    barLabel: 'phylabeler — Rooted.tre · 2,892,390 taxa loaded',
    points: [
      'Reports one row per taxonomic group instead of one per tree node, so a group broken by a single rogue sequence appears once rather than at every nested node beneath it.',
      'Ranks broken groups by the true minimum number of tips that must move, searched over every candidate home clade — not the loose upper bound the obvious formula gives.',
      'Says when it does not know: where several tips would repair a group equally well, it names all of them rather than guessing one.',
      'Verified by a brute-force oracle that shares no code with the fast algorithm, plus planted-error recovery across hundreds of randomly generated trees.',
    ],
    tags: ['Python', 'Algorithms', 'NCBI Taxonomy', 'Newick', 'Tkinter', 'Stdlib only', 'MIT'],
    meta: ['Solo project', '2026', 'Open source'],
    stats: [
      ['2.9M', 'NCBI taxa indexed'],
      ['0', 'runtime dependencies'],
      ['10 / 22', 'conflicts traced to one tip'],
      ['5', 'independent proof checks'],
    ],
  },
];

/* ── /phylabeler case study ───────────────────────────────────────────── */

export const phylabeler = researchProjects[0];

export const phylabelerTechTags = [
  'Python 3',
  'Tkinter',
  'NCBI taxdump',
  'Newick / cladograms',
  'Set algorithms',
  'Streaming archive I/O',
  'Brute-force validation',
  'No dependencies',
];

/* ---- tab 1: the problem ---- */
export const phylabelerProblem = {
  lead:
    'A phylogenetic tree is built from sequence data. The taxonomy is built from a century of naming decisions. When the two disagree, someone has to work out where — and whether the disagreement is real biology, a contaminated sample, or a mislabelled sequence. Doing that by eye on a 232-tip tree is a long afternoon; doing it across a batch of trees is not realistic.',
  bet:
    'The bet: the useful unit is the taxonomic group, not the tree node — and the useful number is the fewest sequences that would have to move, not the count of intruders.',
};

export const phylabelerProblemPoints: [string, string][] = [
  [
    'The answer repeats itself',
    'Node-level output reports a broken group at every nested node beneath it. One conflict in Mesangiospermae becomes four consecutive identical-looking rows, and a real finding is buried in its own echoes.',
  ],
  [
    'The names do not line up',
    'Tip labels are sequence names; the taxonomy speaks in scientific names, synonyms, and ranks like "clade" and "no rank". Matching has to normalise, fall back to coarser ranks, and flag names that are ambiguous across unrelated taxa.',
  ],
  [
    'The obvious cost is wrong',
    'Taking the smaller of "intruders inside" and "members outside" looks like the answer and is only a loose upper bound. It scores the rosids at 59 tips when evicting one and gathering one other makes them a clade.',
  ],
];

export const phylabelerAudience: [string, string][] = [
  ['Systematists', 'Checking whether a published group survives contact with a new gene tree, and which sequence is responsible when it does not.'],
  ['Phylogenomics pipelines', 'Batch-screening hundreds of gene trees for contamination and mislabelled accessions before they reach a species-tree method.'],
  ['Students and reviewers', 'Seeing the conflict drawn on the tree, in colour, next to the table that explains it.'],
];

export const phylabelerGoals: [string, string][] = [
  ['One row per question', 'The report answers "is Fabaceae monophyletic here?" once, with the evidence attached.'],
  ['An honest cost', 'The difficulty of a group is the true minimum number of tips to move, computed over every candidate clade.'],
  ['Nothing silently dropped', 'Tips that match nothing are reported, never counted as intruders. Labels that will not fit are counted on screen rather than vanishing.'],
  ['Checkable by a sceptic', 'Every headline number can be re-derived by brute force, offline, without downloading the taxonomy.'],
];

export const phylabelerPrinciples: [string, string][] = [
  ['Say when you do not know', 'With two sampled members of a group, the tree genuinely cannot say which one moved. Naming one would be a guess dressed as a finding.'],
  ['Read the bytes, not the filename', 'Input format is detected from magic bytes, so a taxdump saved under the wrong extension still works.'],
  ['Tests are not proof', 'Unit tests check the code does what its author expected. A separate oracle checks the answer is right.'],
];

/* ---- tab 2: what it does ---- */
export const phylabelerFeatures: [string, string][] = [
  ['Per-group conflict report', 'Broken groups sorted by tips-to-move, each labelled intruded, scattered, or both, with the intruding tips named inline.'],
  ['Ranked conflicting tips', 'Tips ordered by how many groups their removal would repair, so the one sequence worth checking first is at the top.'],
  ['Alternative repairs', 'When several tips fix a group equally well the cell reads "Cucurbita_pepo or 2 others", and selecting the row lists every option.'],
  ['Merged identical ranks', 'Where nested ranks contain exactly the same sampled tips the tree cannot separate them, so they share one expandable row.'],
  ['Tip-matching audit', 'Which labels failed to match, which matched only after dropping name tokens, and which are ambiguous across unrelated taxa.'],
  ['Two tree views', 'A rectangular cladogram and a circular fan. The bundled 232-tip tree takes nine screenfuls as a rectangle and under three as a circle.'],
  ['Non-overlapping labels', 'Bigger clades win the spot, shifted names get a leader line, and anything still unplaceable is counted beside the toggles.'],
  ['Batch and compressed input', 'Directories or archives of trees, gzipped Newick, and taxdump straight out of tar.gz or zip with no unpacking step.'],
  ['Labelled Newick out', 'Support values are preserved; labels are written as Fabaceae/98, or taxon-only or support-only on request.'],
];

/* ---- tab 3: the tour ────────────────────────────────────────────────
   Each slide falls back to a labelled placeholder until the file exists,
   so drop screenshots at these exact paths to fill them in. */
export const phylabelerTour = [
  { name: 'The full workspace', src: '/attachments/phylabeler/card.png', accent: 'var(--moss)' },
  { name: 'Circular fan view', src: '/attachments/phylabeler/tour-circular.png', accent: 'var(--moss)' },
  { name: 'Rectangular cladogram', src: '/attachments/phylabeler/tour-rectangular.png', accent: 'var(--clay)' },
  { name: 'Broken groups table', src: '/attachments/phylabeler/tour-broken-groups.png', accent: 'var(--plum)' },
  { name: 'Conflicting tips', src: '/attachments/phylabeler/tour-conflicting-tips.png', accent: 'var(--clay)' },
  { name: 'Tip matching audit', src: '/attachments/phylabeler/tour-tip-matching.png', accent: 'var(--moss-deep)' },
  { name: 'Selected clade, highlighted', src: '/attachments/phylabeler/tour-selected-clade.png', accent: 'var(--plum)' },
  { name: 'Built-in help', src: '/attachments/phylabeler/tour-help.png', accent: 'var(--moss)' },
  { name: 'The CLI and its report', src: '/attachments/phylabeler/tour-cli.png', accent: 'var(--clay)' },
  { name: 'validate.py passing', src: '/attachments/phylabeler/tour-validate.png', accent: 'var(--moss-deep)' },
];

/* ---- tab 4: under the hood ---- */
export const phylabelerTech: [string, string][] = [
  [
    'Taxonomy as a lookup table',
    'names.dmp and nodes.dmp are parsed into name → tax ID, tax ID → parent, and tax ID → rank maps and pickled to a cache. Names are keyed by a normalised form — lowercased, underscores as spaces, whitespace collapsed — so every tip resolution is a constant-time lookup rather than a scan of 2.9 million rows.',
  ],
  [
    'One streaming pass over the archive',
    'archive_io is the only module that touches input. It detects gzip, bz2, xz, tar, and zip from magic bytes rather than the extension, reads members out of the container without unpacking to disk, and refuses archive paths that would escape the target directory.',
  ],
  [
    'Bipartitions, not tree walks',
    'The Newick parser assigns every tip an index and every internal node a contiguous span, which turns "is this group a clade?" into an interval question over sets instead of a repeated traversal.',
  ],
  [
    'The minimum-repair search',
    'For each taxonomic group the engine evaluates every candidate home clade rather than assuming the MRCA, because the cheapest repair is often somewhere else entirely. Equally-cheap repairs are kept, capped, and surfaced as alternatives instead of collapsed into one answer.',
  ],
  [
    'A brute-force oracle',
    'validate.py re-derives the reported tips-to-move by exhaustive search over tip subsets, from a different representation of the tree, sharing no code with the fast path. It also plants a known error and checks the tool finds it, asserts input-independent invariants, and confirms Newick round-trips lose nothing.',
  ],
  [
    'A GUI with no dependencies',
    'The interface is Tkinter and the tree drawing is hand-rolled on a canvas — layout, zoom from 10% to 400%, the circular projection, and the label-collision pass that gives shifted names leader lines. Nothing outside the Python standard library is imported at runtime.',
  ],
];

export const phylabelerArch = [
  { title: 'NCBI taxdump', detail: 'tar.gz · zip · .dmp' },
  { title: 'taxonomy_db', detail: 'parse → index → pickle cache' },
  { title: 'tree_parser', detail: 'Newick → spans + tip index' },
  { title: 'monophyly', detail: 'per-group conflict + repair search' },
  { title: 'GUI / CLI', detail: 'tree view · tables · report' },
  { title: 'validate.py', detail: 'brute-force oracle' },
];
