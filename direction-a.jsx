/* Direction A v3 — EDITORIAL · warm naturals, all-serif, hireable
   Cream paper · brown ink · muted sage + clay accents · classic editorial grid */

const aPalette = {
  paper: '#f4ede0',          // warm off-white
  paperDeep: '#ebe2cf',      // section background
  paperAlt: '#e7dcc4',       // tertiary
  ink: '#3a2e22',            // brown ink (body)
  inkSoft: '#5b4a37',        // secondary text
  inkFaint: '#8b7a64',       // tertiary / labels
  rule: '#c9bda4',           // hairlines
  ruleSoft: '#d8cfb8',
  sage: '#6b7a5a',           // muted sage accent
  sageDeep: '#4f5d40',
  clay: '#9c6b4a',           // warm clay (links / italic accents)
  clayDeep: '#7a4f33',
};

const aFonts = {
  display: '"Cormorant Garamond", "EB Garamond", Georgia, serif',
  body: '"Source Serif 4", "Source Serif Pro", "EB Garamond", Georgia, serif',
  label: '"Source Serif 4", Georgia, serif',
};

function EditorialNav({ active }) {
  const items = ['Home', 'Projects', 'Research', 'Rosalind', 'About', 'Contact'];
  return (
    <header style={{
      borderBottom: `1px solid ${aPalette.rule}`,
      padding: '22px 64px 18px',
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      background: aPalette.paper,
      fontFamily: aFonts.body,
    }}>
      <div style={{ fontFamily: aFonts.display, fontSize: 22, color: aPalette.ink, letterSpacing: '0.01em', fontStyle: 'italic', fontWeight: 500 }}>
        Linda Mansour
      </div>
      <nav style={{ display: 'flex', gap: 30, fontSize: 13, fontFamily: aFonts.body }}>
        {items.map(i => (
          <span key={i} style={{
            color: i === active ? aPalette.clayDeep : aPalette.inkSoft,
            borderBottom: i === active ? `1px solid ${aPalette.clayDeep}` : 'none',
            paddingBottom: 2,
            letterSpacing: '0.04em',
          }}>{i}</span>
        ))}
      </nav>
      <div style={{ fontSize: 11, color: aPalette.inkFaint, letterSpacing: '0.16em', textTransform: 'uppercase', fontFamily: aFonts.label }}>
        UIC · Chicago
      </div>
    </header>
  );
}

function EditorialFooter() {
  return (
    <footer style={{
      borderTop: `1px solid ${aPalette.rule}`,
      padding: '28px 64px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      background: aPalette.paperDeep,
      fontFamily: aFonts.body,
      fontSize: 12,
      color: aPalette.inkFaint,
      marginTop: 'auto',
    }}>
      <span style={{ fontFamily: aFonts.display, fontStyle: 'italic', fontSize: 16, color: aPalette.inkSoft }}>
        Linda Mansour · MMXXVI
      </span>
      <span style={{ display: 'flex', gap: 20, letterSpacing: '0.04em' }}>
        <span>GitHub</span><span>LinkedIn</span><span>Email</span>
      </span>
    </footer>
  );
}

/* Small leaf glyph — single stroke serif ornament */
function LeafGlyph({ size = 28, color }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <path d="M16 4 C 22 8, 26 14, 26 22 C 26 26, 22 28, 16 28 C 10 28, 6 26, 6 22 C 6 14, 10 8, 16 4 Z"
            stroke={color || aPalette.sage} strokeWidth="1.2" fill="none" />
      <path d="M16 6 L 16 28" stroke={color || aPalette.sage} strokeWidth="1" />
    </svg>
  );
}

/* Section eyebrow — small caps label with rule */
function Eyebrow({ children, num }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 14, fontFamily: aFonts.label, fontSize: 11, color: aPalette.inkFaint, letterSpacing: '0.22em', textTransform: 'uppercase' }}>
      {num && <span style={{ fontStyle: 'italic', fontFamily: aFonts.display, fontSize: 13, color: aPalette.clayDeep, letterSpacing: 0, textTransform: 'none' }}>№ {num}</span>}
      <span style={{ flex: '0 0 30px', height: 1, background: aPalette.rule }}></span>
      <span>{children}</span>
    </div>
  );
}

/* ============================================================
   A1 — HOME (Editorial cover)
   ============================================================ */
function A_Home() {
  return (
    <div style={{ width: 1440, minHeight: 1800, background: aPalette.paper, color: aPalette.ink, fontFamily: aFonts.body, display: 'flex', flexDirection: 'column' }}>
      <EditorialNav active="Home" />

      {/* Masthead — large editorial cover */}
      <section style={{ padding: '72px 80px 56px', borderBottom: `1px solid ${aPalette.rule}`, position: 'relative' }}>
        {/* Top strip */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', fontFamily: aFonts.label, fontSize: 11, color: aPalette.inkFaint, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 40, paddingBottom: 14, borderBottom: `1px solid ${aPalette.ruleSoft}` }}>
          <span>Volume I · Portfolio · 2026</span>
          <span style={{ fontFamily: aFonts.display, fontSize: 14, fontStyle: 'italic', textTransform: 'none', letterSpacing: 0, color: aPalette.inkSoft }}>
            Bioinformatics · Phylogenetics · Software
          </span>
          <span>Chicago, Illinois</span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: 60, alignItems: 'end' }}>
          <div>
            <h1 style={{
              fontFamily: aFonts.display,
              fontSize: 168,
              fontWeight: 400,
              margin: 0,
              lineHeight: 0.92,
              color: aPalette.ink,
              letterSpacing: '-0.02em',
            }}>
              Linda<br/>
              <span style={{ fontStyle: 'italic', color: aPalette.clayDeep }}>Mansour.</span>
            </h1>
          </div>
          <LeafGlyph size={80} color={aPalette.sage} />
        </div>

        {/* Subtitle row */}
        <div style={{ marginTop: 48, display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 80, alignItems: 'start' }}>
          <p style={{ fontFamily: aFonts.display, fontSize: 30, lineHeight: 1.35, color: aPalette.inkSoft, fontWeight: 400, margin: 0, fontStyle: 'italic', letterSpacing: '-0.005em' }}>
            A post-baccalaureate researcher writing Python pipelines that ask which corners of the tree of life still need our attention — and the code to find out.
          </p>
          <div style={{ paddingTop: 8 }}>
            <div style={{ fontFamily: aFonts.label, fontSize: 11, color: aPalette.inkFaint, letterSpacing: '0.22em', textTransform: 'uppercase', marginBottom: 14 }}>Currently</div>
            <div style={{ fontFamily: aFonts.body, fontSize: 15, lineHeight: 1.7, color: aPalette.ink }}>
              Building <em style={{ color: aPalette.clayDeep }}>MissMap</em>, a Python pipeline mapping plant sequence-coverage gaps. Teaching <em>BIOS 120</em> at UIC. Applying to PhD programs for Fall 2026.
            </div>
            <div style={{ marginTop: 24, display: 'flex', gap: 18, fontFamily: aFonts.body, fontSize: 13 }}>
              <span style={{ color: aPalette.clayDeep, borderBottom: `1px solid ${aPalette.clayDeep}`, paddingBottom: 2 }}>View Projects →</span>
              <span style={{ color: aPalette.inkSoft, borderBottom: `1px solid ${aPalette.rule}`, paddingBottom: 2 }}>Read Research</span>
              <span style={{ color: aPalette.inkSoft, borderBottom: `1px solid ${aPalette.rule}`, paddingBottom: 2 }}>Get in Touch</span>
            </div>
          </div>
        </div>
      </section>

      {/* "In this issue" — featured work */}
      <section style={{ padding: '64px 80px 48px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 40 }}>
          <div>
            <Eyebrow num="01">Selected Work</Eyebrow>
            <h2 style={{ fontFamily: aFonts.display, fontSize: 56, fontWeight: 400, margin: '14px 0 0', color: aPalette.ink, letterSpacing: '-0.01em' }}>
              In this <em style={{ color: aPalette.sageDeep }}>issue</em>
            </h2>
          </div>
          <span style={{ fontFamily: aFonts.body, fontSize: 13, color: aPalette.inkFaint, fontStyle: 'italic' }}>
            Nineteen entries — see the full index →
          </span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: 48 }}>
          {/* Lead article */}
          <article style={{ borderTop: `2px solid ${aPalette.ink}`, paddingTop: 24 }}>
            <Eyebrow num="Feature">Bioinformatics · 2025—</Eyebrow>
            <h3 style={{ fontFamily: aFonts.display, fontSize: 64, fontWeight: 400, margin: '14px 0 16px', lineHeight: 1, letterSpacing: '-0.015em', color: aPalette.ink }}>
              MissMap<span style={{ color: aPalette.clayDeep, fontStyle: 'italic' }}>.py</span>
            </h3>
            <p style={{ fontFamily: aFonts.body, fontSize: 16, lineHeight: 1.7, color: aPalette.inkSoft, margin: 0 }}>
              A Python pipeline querying NCBI metadata, resolving taxon synonyms, and mapping sequence-type coverage — rbcL, matK, ITS — across plant lineages. Presented at Botany 2025; in active development for clade-level summaries.
            </p>
            {/* Coverage matrix placeholder */}
            <div style={{ marginTop: 28, padding: 20, background: aPalette.paperDeep, border: `1px solid ${aPalette.rule}` }}>
              <div style={{ display: 'grid', gridTemplateColumns: '120px 1fr', gap: 20, alignItems: 'center' }}>
                <div style={{ aspectRatio: '1/1', display: 'grid', gridTemplateColumns: 'repeat(12,1fr)', gridTemplateRows: 'repeat(12,1fr)', gap: 1 }}>
                  {Array.from({ length: 144 }).map((_, i) => {
                    const v = (Math.sin(i * 0.42) + Math.cos(i * 0.31) + 2) / 4;
                    return <div key={i} style={{ background: v > 0.7 ? aPalette.sageDeep : v > 0.5 ? aPalette.sage : v > 0.3 ? aPalette.clay : aPalette.ruleSoft, opacity: v > 0.3 ? 1 : 0.5 }} />;
                  })}
                </div>
                <div>
                  <div style={{ fontFamily: aFonts.label, fontSize: 11, color: aPalette.inkFaint, letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: 8 }}>Fig. I — Sequence coverage</div>
                  <div style={{ fontFamily: aFonts.body, fontSize: 13, color: aPalette.inkSoft, lineHeight: 1.6, fontStyle: 'italic' }}>
                    Heat-mapped completeness across a sample of plant clades. Darker cells indicate denser GenBank representation.
                  </div>
                </div>
              </div>
            </div>
            <div style={{ marginTop: 22, fontFamily: aFonts.body, fontSize: 13, display: 'flex', gap: 16 }}>
              <span style={{ color: aPalette.clayDeep, fontStyle: 'italic' }}>Read the case study →</span>
              <span style={{ color: aPalette.inkFaint }}>github.com/zawmbi/MissMap</span>
            </div>
          </article>

          {/* Side column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
            {[
              { num: '02', tag: 'Data Science · 2024', title: 'Wildfire Analysis', body: 'Machine-learning and visualization on national wildfire records — Python and R, with interactive maps.', stack: 'Python · R · scikit-learn' },
              { num: '03', tag: 'Music · 2026',         title: 'PicToBeat',         body: 'Image-feature pipeline that turns photographs into mood-matched Spotify playlists.', stack: 'Python · Spotify API' },
              { num: '04', tag: 'Mobile · 2026',        title: 'Animal Restaurant Tracker', body: 'Flutter progress tracker for the mobile game; iOS and Android, in App Store review.', stack: 'Flutter · Dart' },
            ].map(p => (
              <article key={p.num} style={{ borderTop: `1px solid ${aPalette.rule}`, paddingTop: 18 }}>
                <Eyebrow num={p.num}>{p.tag}</Eyebrow>
                <h4 style={{ fontFamily: aFonts.display, fontSize: 28, fontWeight: 400, margin: '10px 0 8px', color: aPalette.ink, letterSpacing: '-0.005em' }}>
                  {p.title}
                </h4>
                <p style={{ fontFamily: aFonts.body, fontSize: 14, lineHeight: 1.65, color: aPalette.inkSoft, margin: 0 }}>{p.body}</p>
                <div style={{ marginTop: 10, fontFamily: aFonts.body, fontStyle: 'italic', fontSize: 12, color: aPalette.inkFaint }}>{p.stack}</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Currently — three column dispatch */}
      <section style={{ padding: '48px 80px 56px', background: aPalette.paperDeep, borderTop: `1px solid ${aPalette.rule}`, borderBottom: `1px solid ${aPalette.rule}` }}>
        <Eyebrow num="02">Dispatches</Eyebrow>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 48, marginTop: 24 }}>
          {[
            { kicker: 'Building',  title: 'MissMap',  body: 'Pipeline querying NCBI for sequence-coverage gaps across plant clades. Presented at Botany 2025.' },
            { kicker: 'Teaching',  title: 'BIOS 120', body: 'Teaching assistant for Populations & Communities Biology at UIC, third semester.' },
            { kicker: 'Seeking',   title: 'PhD 2026', body: 'Applying to programs in computational phylogeny, genetics, and evolution. Open to bioinformatics roles.' },
          ].map((c, i) => (
            <div key={i}>
              <div style={{ fontFamily: aFonts.display, fontStyle: 'italic', fontSize: 16, color: aPalette.clayDeep, marginBottom: 8 }}>{c.kicker}</div>
              <h4 style={{ fontFamily: aFonts.display, fontSize: 36, fontWeight: 400, margin: '0 0 14px', letterSpacing: '-0.01em', color: aPalette.ink }}>{c.title}</h4>
              <p style={{ fontFamily: aFonts.body, fontSize: 14, lineHeight: 1.7, color: aPalette.inkSoft, margin: 0 }}>{c.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Recent news — dated entries */}
      <section style={{ padding: '64px 80px 96px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '280px 1fr', gap: 60 }}>
          <div>
            <Eyebrow num="03">Recent News</Eyebrow>
            <h3 style={{ fontFamily: aFonts.display, fontSize: 44, fontWeight: 400, margin: '14px 0 12px', letterSpacing: '-0.01em', color: aPalette.ink, lineHeight: 1.05 }}>
              Updates from <em style={{ color: aPalette.sageDeep }}>the desk</em>
            </h3>
            <p style={{ fontFamily: aFonts.body, fontSize: 13, lineHeight: 1.65, color: aPalette.inkFaint, fontStyle: 'italic' }}>
              A running log — most recent at top.
            </p>
          </div>
          <div>
            {[
              { date: '25 April 2025', body: <>Approaching the end of post-bacc at UIC. <em>PhyLabeler</em> is functional and ready for expansion. Building <em>monitr.xyz</em>, pitching, and two iOS apps under App Store review. Still TA-ing BIOS 120.</> },
              { date: '12 October 2025', body: <>Started a recent-news log to centralize updates. Shipping <em>PicToBeat</em> and <em>Animal Restaurant Tracker</em> alongside MissMap. Applying to PhD programs for Fall 2026.</> },
            ].map((n, i) => (
              <article key={i} style={{ display: 'grid', gridTemplateColumns: '160px 1fr', gap: 28, padding: '24px 0', borderBottom: i === 0 ? `1px solid ${aPalette.ruleSoft}` : 'none' }}>
                <div style={{ fontFamily: aFonts.display, fontStyle: 'italic', fontSize: 15, color: aPalette.clayDeep, paddingTop: 4 }}>{n.date}</div>
                <p style={{ fontFamily: aFonts.body, fontSize: 16, lineHeight: 1.75, color: aPalette.ink, margin: 0 }}>{n.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <EditorialFooter />
    </div>
  );
}

window.A_Home = A_Home;
window.aPalette = aPalette;
window.aFonts = aFonts;
window.EditorialNav = EditorialNav;
window.EditorialFooter = EditorialFooter;
window.LeafGlyph = LeafGlyph;
window.Eyebrow = Eyebrow;
