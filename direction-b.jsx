/* Direction B — Botanical Terminal
   Deep forest backgrounds, cream foreground, monospace-driven, asymmetric grid */

const bPalette = {
  bg: '#1c1814',
  bgAlt: '#252019',
  surface: '#2e2820',
  cream: '#ede4d0',
  creamSoft: '#c8bea5',
  moss: '#8a8266',
  mossBright: '#b5a886',
  amber: '#c9986a',
  rule: '#3a3328',
  faded: '#7a7060',
};

const bFonts = {
  mono: '"JetBrains Mono", "Courier New", monospace',
  display: '"Fraunces", "Old Standard TT", Georgia, serif',
  body: '"JetBrains Mono", "Courier New", monospace',
};

function TerminalNav({ active }) {
  const items = ['Home', 'Projects', 'Research', 'Rosalind', 'About', 'Contact'];
  return (
    <header style={{
      borderBottom: `1px solid ${bPalette.rule}`,
      padding: '14px 48px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      fontFamily: bFonts.mono,
      background: bPalette.bg,
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
        <div style={{ width: 28, height: 28, border: `1px solid ${bPalette.moss}`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: bPalette.moss, fontSize: 14 }}>※</div>
        <div style={{ fontSize: 13, color: bPalette.cream, letterSpacing: '0.04em' }}>
          <span style={{ color: bPalette.faded }}>~/</span>Linda.Mansour
          <span style={{ color: bPalette.amber, marginLeft: 8 }}>●</span>
        </div>
      </div>
      <nav style={{ display: 'flex', gap: 4, fontSize: 12 }}>
        {items.map(i => (
          <span key={i} style={{
            padding: '6px 12px',
            color: i === active ? bPalette.bg : bPalette.creamSoft,
            background: i === active ? bPalette.moss : 'transparent',
            border: `1px solid ${i === active ? bPalette.moss : 'transparent'}`,
            letterSpacing: '0.02em',
          }}>{i === active ? `[${i}]` : i}</span>
        ))}
      </nav>
      <div style={{ fontSize: 11, color: bPalette.faded, fontFamily: bFonts.mono }}>UIC · Chicago</div>
    </header>
  );
}

function TerminalFooter() {
  return (
    <footer style={{
      borderTop: `1px solid ${bPalette.rule}`,
      padding: '14px 48px',
      display: 'flex',
      justifyContent: 'space-between',
      fontFamily: bFonts.mono,
      fontSize: 11,
      color: bPalette.faded,
      marginTop: 'auto',
    }}>
      <span>$ linda --version 2026.04 · all systems nominal</span>
      <span>GitHub · LinkedIn · Email</span>
    </footer>
  );
}

/* DNA strand visual — vertical column of pixel rungs */
function DNAColumn({ height = 600, width = 60, opacity = 0.5 }) {
  const rungs = Math.floor(height / 24);
  return (
    <svg width={width} height={height} style={{ opacity }} viewBox={`0 0 ${width} ${height}`}>
      {Array.from({ length: rungs }).map((_, i) => {
        const y = i * 24 + 8;
        const phase = (i * 0.55) % (Math.PI * 2);
        const x1 = width / 2 + Math.sin(phase) * (width / 2 - 8);
        const x2 = width / 2 - Math.sin(phase) * (width / 2 - 8);
        return (
          <g key={i}>
            <rect x={x1 - 3} y={y} width={6} height={6} fill={bPalette.moss} />
            <rect x={x2 - 3} y={y} width={6} height={6} fill={bPalette.mossBright} />
            <line x1={x1} y1={y + 3} x2={x2} y2={y + 3} stroke={bPalette.faded} strokeWidth="1" strokeDasharray="2 2" />
          </g>
        );
      })}
    </svg>
  );
}

/* ============================================================
   B1 — HOME (Terminal asymmetric)
   ============================================================ */
function B_Home() {
  return (
    <div style={{ width: 1440, minHeight: 1800, background: bPalette.bg, color: bPalette.cream, fontFamily: bFonts.mono, position: 'relative', display: 'flex', flexDirection: 'column' }}>
      <TerminalNav active="Home" />

      {/* Hero — text left, DNA right */}
      <section style={{ padding: '80px 80px 40px', display: 'grid', gridTemplateColumns: '1fr 100px 1fr', gap: 40, alignItems: 'start', borderBottom: `1px solid ${bPalette.rule}` }}>
        <div>
          <div style={{ fontSize: 11, color: bPalette.moss, letterSpacing: '0.14em' }}>$ whoami</div>
          <h1 style={{ fontFamily: bFonts.display, fontSize: 120, margin: '8px 0 0', fontWeight: 300, lineHeight: 0.95, color: bPalette.cream, letterSpacing: '-0.02em' }}>
            Linda<br/>
            <span style={{ fontStyle: 'italic', color: bPalette.mossBright }}>Mansour.</span>
          </h1>
          <div style={{ fontSize: 13, color: bPalette.creamSoft, marginTop: 24, maxWidth: 480, lineHeight: 1.7 }}>
            <span style={{ color: bPalette.faded }}>// </span>Bioinformatics · plant transcriptomics<br/>
            <span style={{ color: bPalette.faded }}>// </span>Building <span style={{ color: bPalette.amber }}>MissMap</span> at UIC — mapping<br/>
            <span style={{ color: bPalette.faded }}>// </span>sequence-coverage gaps across plant lineages<br/>
            <span style={{ color: bPalette.faded }}>// </span>TA · BIOS 120 · seeking PhD · Fall 2026
          </div>
          <div style={{ marginTop: 28, display: 'flex', gap: 8 }}>
            {['View Projects →', 'Read Research', 'Contact'].map((t, i) => (
              <span key={t} style={{ padding: '8px 14px', border: `1px solid ${i === 0 ? bPalette.moss : bPalette.rule}`, color: i === 0 ? bPalette.moss : bPalette.creamSoft, fontSize: 12, letterSpacing: '0.04em' }}>{t}</span>
            ))}
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <DNAColumn height={440} width={60} opacity={0.85} />
        </div>
        <div style={{ paddingTop: 60 }}>
          {/* Stats / specimen card */}
          <div style={{ border: `1px solid ${bPalette.rule}`, background: bPalette.surface }}>
            <div style={{ padding: '10px 14px', borderBottom: `1px solid ${bPalette.rule}`, fontSize: 11, color: bPalette.faded, display: 'flex', justifyContent: 'space-between' }}>
              <span>~ specimen.json</span>
              <span style={{ color: bPalette.amber }}>● Live</span>
            </div>
            <div style={{ padding: 18, fontSize: 12, lineHeight: 1.9 }}>
              <div><span style={{ color: bPalette.faded }}>"role":</span> <span style={{ color: bPalette.amber }}>"Post-bacc + Researcher"</span>,</div>
              <div><span style={{ color: bPalette.faded }}>"lab":</span> <span style={{ color: bPalette.amber }}>"Walker · UIC"</span>,</div>
              <div><span style={{ color: bPalette.faded }}>"tools":</span> [<span style={{ color: bPalette.mossBright }}>"Python","R","NCBI"</span>],</div>
              <div><span style={{ color: bPalette.faded }}>"focus":</span> <span style={{ color: bPalette.amber }}>"Phylogenomics"</span>,</div>
              <div><span style={{ color: bPalette.faded }}>"current":</span> <span style={{ color: bPalette.amber }}>"MissMap.py"</span>,</div>
              <div><span style={{ color: bPalette.faded }}>"applying":</span> <span style={{ color: bPalette.amber }}>"PhD 2026"</span></div>
            </div>
          </div>
          <div style={{ marginTop: 20, fontSize: 11, color: bPalette.faded }}>
            <span style={{ color: bPalette.moss }}>›</span> Last commit · <span style={{ color: bPalette.cream }}>2 days ago</span> · MissMap/synonyms.py
          </div>
        </div>
      </section>

      {/* Featured work — asymmetric */}
      <section style={{ padding: '60px 80px 40px' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 36 }}>
          <div>
            <div style={{ fontSize: 11, color: bPalette.moss, letterSpacing: '0.14em' }}>$ ls -la ./featured</div>
            <h2 style={{ fontFamily: bFonts.display, fontSize: 56, margin: '8px 0 0', fontWeight: 300, color: bPalette.cream, letterSpacing: '-0.01em' }}>Selected Work</h2>
          </div>
          <span style={{ fontSize: 11, color: bPalette.faded }}>[19 entries] →</span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 24 }}>
          {/* Big tile */}
          <div style={{ border: `1px solid ${bPalette.rule}`, background: bPalette.surface, position: 'relative', overflow: 'hidden' }}>
            <div style={{ padding: '10px 16px', borderBottom: `1px solid ${bPalette.rule}`, fontSize: 11, color: bPalette.faded, display: 'flex', justifyContent: 'space-between' }}>
              <span>missmap.py · Python</span>
              <span style={{ color: bPalette.moss }}>● Ongoing</span>
            </div>
            <div style={{ padding: 32, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 28, alignItems: 'center' }}>
              <div>
                <h3 style={{ fontFamily: bFonts.display, fontSize: 44, margin: 0, fontWeight: 300, color: bPalette.mossBright, letterSpacing: '-0.01em' }}>MissMap</h3>
                <p style={{ fontSize: 13, color: bPalette.creamSoft, lineHeight: 1.6, marginTop: 14 }}>
                  Python pipeline querying NCBI metadata, resolving taxon synonyms, and mapping sequence type coverage (rbcL, matK, ITS) across plant lineages.
                </p>
                <div style={{ marginTop: 18, display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                  {['Python', 'NCBI', 'Phylo', 'Data-Viz'].map(t => (
                    <span key={t} style={{ padding: '3px 8px', border: `1px solid ${bPalette.moss}`, color: bPalette.moss, fontSize: 10 }}>{t}</span>
                  ))}
                </div>
              </div>
              <div style={{
                aspectRatio: '1/1',
                display: 'grid', gridTemplateColumns: 'repeat(16,1fr)', gridTemplateRows: 'repeat(16,1fr)', gap: 1,
                background: bPalette.bg, padding: 6, border: `1px solid ${bPalette.rule}`,
              }}>
                {Array.from({ length: 256 }).map((_, i) => {
                  const v = (Math.sin(i * 0.42) + Math.cos(i * 0.31) + 2) / 4;
                  return <div key={i} style={{ background: v > 0.6 ? bPalette.mossBright : v > 0.4 ? bPalette.moss : v > 0.2 ? bPalette.rule : 'transparent' }} />;
                })}
              </div>
            </div>
          </div>
          {/* Side stack */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            {[
              { title: 'Wildfire Analysis', tags: 'Python · R · ML', date: 'Dec 2024', accent: bPalette.amber },
              { title: 'PicToBeat', tags: 'Python · Spotify API', date: 'Sept 2026', accent: bPalette.mossBright },
              { title: 'ECG Classification', tags: 'MATLAB · GUI', date: 'Nov 2024', accent: bPalette.creamSoft },
            ].map(p => (
              <div key={p.title} style={{ border: `1px solid ${bPalette.rule}`, background: bPalette.bgAlt, padding: 16 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 10, color: bPalette.faded }}>
                  <span>{p.tags}</span><span>{p.date}</span>
                </div>
                <h4 style={{ fontFamily: bFonts.display, fontSize: 22, margin: '8px 0 0', fontWeight: 400, color: p.accent }}>{p.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News log */}
      <section style={{ padding: '40px 80px 100px', borderTop: `1px solid ${bPalette.rule}`, background: bPalette.bgAlt, display: 'grid', gridTemplateColumns: '180px 1fr', gap: 60 }}>
        <div>
          <div style={{ fontSize: 11, color: bPalette.moss, letterSpacing: '0.14em' }}>$ tail -f news.log</div>
          <div style={{ fontFamily: bFonts.display, fontSize: 36, fontWeight: 300, marginTop: 8, color: bPalette.cream, letterSpacing: '-0.01em' }}>Recent News</div>
        </div>
        <div>
          {[
            { date: '2025.04.25', body: <>Approaching the end of post-bacc at UIC. <span style={{ color: bPalette.amber }}>PhyLabeler</span> is functional. Building <span style={{ color: bPalette.amber }}>monitr.xyz</span> · pitching · two iOS apps under App Store review. Still TA-ing BIOS 120.</> },
            { date: '2025.10.12', body: <>Started a Recent News log. Shipping <span style={{ color: bPalette.amber }}>PicToBeat</span> + <span style={{ color: bPalette.amber }}>Animal Restaurant Tracker</span> alongside MissMap. Applying to PhD programs · Fall 2026. Yay!</> },
          ].map((n, i) => (
            <div key={i} style={{ display: 'grid', gridTemplateColumns: '120px 1fr', gap: 24, padding: '20px 0', borderBottom: i === 0 ? `1px dashed ${bPalette.rule}` : 'none' }}>
              <div style={{ fontSize: 11, color: bPalette.moss }}>{n.date}</div>
              <p style={{ fontSize: 14, lineHeight: 1.7, margin: 0, color: bPalette.creamSoft }}>{n.body}</p>
            </div>
          ))}
        </div>
      </section>

      <TerminalFooter />
    </div>
  );
}

window.B_Home = B_Home;
window.bPalette = bPalette;
window.bFonts = bFonts;
window.TerminalNav = TerminalNav;
window.TerminalFooter = TerminalFooter;
window.DNAColumn = DNAColumn;
