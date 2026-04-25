/* Direction B — Projects, Research, About */

/* ============================================================
   B2 — PROJECTS (Magazine asymmetric, terminal aesthetic)
   ============================================================ */
function B_Projects() {
  return (
    <div style={{ width: 1440, minHeight: 1800, background: bPalette.bg, color: bPalette.cream, fontFamily: bFonts.mono, position: 'relative', display: 'flex', flexDirection: 'column' }}>
      <TerminalNav active="Projects" />

      <section style={{ padding: '60px 80px 32px', borderBottom: `1px solid ${bPalette.rule}`, display: 'grid', gridTemplateColumns: '1fr 320px', gap: 40, alignItems: 'end' }}>
        <div>
          <div style={{ fontSize: 11, color: bPalette.moss, letterSpacing: '0.14em' }}>$ cd ~/projects && ls</div>
          <h1 style={{ fontFamily: bFonts.display, fontSize: 96, margin: '8px 0 0', fontWeight: 300, lineHeight: 0.95, color: bPalette.cream, letterSpacing: '-0.02em' }}>
            Programming<br/><span style={{ fontStyle: 'italic', color: bPalette.mossBright }}>Projects.</span>
          </h1>
        </div>
        <div style={{ fontSize: 12, color: bPalette.creamSoft, lineHeight: 1.7 }}>
          <span style={{ color: bPalette.faded }}>{'>'} </span>Always being updated. Most recent at <span style={{ color: bPalette.amber }}>github.com/zawmbi</span>. Clicking a card opens its case study.
        </div>
      </section>

      {/* Featured big tile */}
      <section style={{ padding: '40px 80px 32px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 28 }}>
          <div style={{ border: `1px solid ${bPalette.moss}`, background: bPalette.surface }}>
            <div style={{ padding: '10px 16px', borderBottom: `1px solid ${bPalette.rule}`, fontSize: 11, color: bPalette.faded, display: 'flex', justifyContent: 'space-between' }}>
              <span>// Featured · 01</span><span style={{ color: bPalette.moss }}>● Python</span>
            </div>
            <div style={{ padding: 32 }}>
              <h2 style={{ fontFamily: bFonts.display, fontSize: 64, margin: 0, fontWeight: 300, color: bPalette.mossBright, letterSpacing: '-0.02em', lineHeight: 1 }}>MissMap.py</h2>
              <p style={{ fontSize: 15, color: bPalette.creamSoft, lineHeight: 1.7, marginTop: 16, maxWidth: 620 }}>
                Pipeline mapping the availability of genetic sequence data across plant lineages. Automates retrieval, classification, and visualization of sequencing completeness for target clades.
              </p>
              <div style={{ marginTop: 22, display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                {['Python', 'NCBI', 'Bioinformatics', 'API'].map(t => (
                  <span key={t} style={{ padding: '4px 10px', border: `1px solid ${bPalette.moss}`, color: bPalette.moss, fontSize: 10 }}>{t}</span>
                ))}
              </div>
              <div style={{ marginTop: 28, display: 'flex', gap: 16, fontSize: 12 }}>
                <span style={{ color: bPalette.amber }}>→ Case Study</span>
                <span style={{ color: bPalette.faded }}>→ GitHub</span>
              </div>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <div style={{ border: `1px solid ${bPalette.rule}`, background: bPalette.bgAlt, padding: 18 }}>
              <div style={{ fontSize: 10, color: bPalette.faded }}>// 02 · Dec 2024</div>
              <h3 style={{ fontFamily: bFonts.display, fontSize: 26, margin: '6px 0 8px', fontWeight: 400, color: bPalette.amber }}>Wildfire Analysis</h3>
              <div style={{ fontSize: 11, color: bPalette.creamSoft, lineHeight: 1.6 }}>ML + viz on national wildfire data · Python · R</div>
            </div>
            <div style={{ border: `1px solid ${bPalette.rule}`, background: bPalette.bgAlt, padding: 18 }}>
              <div style={{ fontSize: 10, color: bPalette.faded }}>// 03 · Sept 2026</div>
              <h3 style={{ fontFamily: bFonts.display, fontSize: 26, margin: '6px 0 8px', fontWeight: 400, color: bPalette.mossBright }}>PicToBeat</h3>
              <div style={{ fontSize: 11, color: bPalette.creamSoft, lineHeight: 1.6 }}>Image → playlist · Spotify API · ML</div>
            </div>
          </div>
        </div>
      </section>

      {/* Asymmetric mid grid */}
      <section style={{ padding: '32px 80px' }}>
        <div style={{ fontSize: 11, color: bPalette.moss, letterSpacing: '0.14em', marginBottom: 18 }}>$ ls ./apps</div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr 1fr', gap: 24 }}>
          <div style={{ border: `1px solid ${bPalette.rule}`, background: bPalette.surface, padding: 20 }}>
            <div style={{ aspectRatio: '1/1', background: bPalette.bg, border: `1px solid ${bPalette.rule}`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: bPalette.faded, fontSize: 11 }}>[ ECG.png ]</div>
            <h4 style={{ fontFamily: bFonts.display, fontSize: 22, margin: '14px 0 4px', fontWeight: 400, color: bPalette.cream }}>ECG Classification</h4>
            <div style={{ fontSize: 10, color: bPalette.faded }}>MATLAB · GUI · 2024</div>
          </div>
          <div style={{ border: `1px solid ${bPalette.rule}`, background: bPalette.bgAlt, padding: 24 }}>
            <div style={{ aspectRatio: '16/9', background: `linear-gradient(135deg, ${bPalette.surface}, ${bPalette.bg})`, border: `1px solid ${bPalette.rule}`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: bPalette.faded, fontSize: 11 }}>[ Animal Restaurant UI ]</div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginTop: 16 }}>
              <h4 style={{ fontFamily: bFonts.display, fontSize: 30, margin: 0, fontWeight: 400, color: bPalette.amber }}>Animal Restaurant Tracker</h4>
              <span style={{ fontSize: 10, color: bPalette.faded }}>2026</span>
            </div>
            <p style={{ fontSize: 12, color: bPalette.creamSoft, lineHeight: 1.7, margin: '8px 0 0' }}>Flutter / Dart progress tracker · iOS + Android · pending App Store review</p>
          </div>
          <div style={{ border: `1px solid ${bPalette.rule}`, background: bPalette.surface, padding: 20 }}>
            <div style={{ aspectRatio: '1/1', background: bPalette.bg, border: `1px solid ${bPalette.rule}`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: bPalette.faded, fontSize: 11 }}>[ Portfolio ]</div>
            <h4 style={{ fontFamily: bFonts.display, fontSize: 22, margin: '14px 0 4px', fontWeight: 400, color: bPalette.cream }}>Portfolio Site</h4>
            <div style={{ fontSize: 10, color: bPalette.faded }}>React · 2026</div>
          </div>
        </div>
      </section>

      {/* Dense table — coursework */}
      <section style={{ padding: '48px 80px 100px', borderTop: `1px solid ${bPalette.rule}`, marginTop: 24 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '220px 1fr', gap: 60 }}>
          <div>
            <div style={{ fontSize: 11, color: bPalette.moss, letterSpacing: '0.14em' }}>$ ls ./coursework</div>
            <div style={{ fontFamily: bFonts.display, fontSize: 32, fontWeight: 300, marginTop: 8, color: bPalette.cream, letterSpacing: '-0.01em' }}>Data Structures<br/>& Algorithms</div>
            <div style={{ fontSize: 11, color: bPalette.faded, marginTop: 12 }}>// C · C++ · 12 entries</div>
          </div>
          <div style={{ border: `1px solid ${bPalette.rule}` }}>
            {[
              ['04', 'Elementary Cell Automation', 'C', '2024.09'],
              ['05', 'Dynamic Memory Food Web', 'C', '2024.09'],
              ['06', 'Evil Word Guessing Game', 'C', '2023.10'],
              ['07', 'Popular Vote Minimizer', 'C', '2023.10'],
              ['08', 'Shortest Word Ladder', 'C', '2023.11'],
              ['09', 'Escape the Labrynth', 'C', '2023.11'],
              ['10', 'Outlast the Baddies', 'C', '2023.12'],
              ['11', 'Library Management System', 'C++', '2023.09'],
              ['12', 'Mini Search Engine', 'C++', '2023.09'],
              ['13', 'Shape List Drawing Canvas', 'C++', '2023.10'],
              ['14', 'Hospital Priority Queue', 'C++', '2023.11'],
              ['15', 'Graphs', 'C++', '2023.11'],
              ['16', 'Hospital Database', 'MySQL', '2024.07'],
            ].map(([n, t, l, d], i) => (
              <div key={n} style={{ display: 'grid', gridTemplateColumns: '60px 1fr 100px 100px', alignItems: 'center', padding: '12px 18px', borderBottom: i === 12 ? 'none' : `1px solid ${bPalette.rule}`, fontSize: 13, background: i % 2 === 0 ? 'transparent' : bPalette.bgAlt }}>
                <span style={{ color: bPalette.faded, fontSize: 11 }}>{n}</span>
                <span style={{ color: bPalette.cream }}>{t}</span>
                <span style={{ color: bPalette.moss, fontSize: 11 }}>{l}</span>
                <span style={{ color: bPalette.faded, fontSize: 11, textAlign: 'right' }}>{d}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TerminalFooter />
    </div>
  );
}

/* ============================================================
   B3 — RESEARCH (field-notebook style, dark)
   ============================================================ */
function B_Research() {
  const entries = [
    { num: 'I', date: '2025.07', title: 'Botany 2025 — poster', loc: 'Palm Springs, CA', sup: 'Dr. Joseph Walker · UIC',
      body: 'Presented the MissMap pipeline at the conference. The poster traces sequence-coverage gaps across plant lineages and proposes a sampling strategy for closing them.',
      side: 'left', accent: bPalette.amber, plate: '[ Poster · 2025 ]' },
    { num: 'II', date: '2025.04—', title: 'MissMap pipeline', loc: 'github / zawmbi', sup: 'Independent · in progress',
      body: 'Computational pipeline mapping the availability of genetic sequence data across plant lineages. Leveraging NCBI GenBank, MissMap automates retrieval, classification, and visualization of sequencing completeness for target clades. Future work: data cleaning, ortholog detection, NCBI metadata filtering, clade-level summaries.',
      side: 'right', accent: bPalette.mossBright, plate: '[ Coverage Matrix ]' },
    { num: 'III', date: '2025.02', title: 'RNA from herbaria', loc: 'bioRxiv · 4th author', sup: 'Walker Lab · UIC',
      body: 'Study testing whether RNA suitable for transcriptomic analysis could be recovered from herbarium specimens. Demonstrated that mRNA remains biologically informative in many samples despite degradation, expanding the utility of historical plant collections for evolutionary and functional genomics. Featured on a podcast the day after publication.',
      side: 'left', accent: bPalette.cream, plate: '[ Manuscript ]' },
    { num: 'IV', date: '2024.06', title: 'Botany 2024 — first poster', loc: 'Undergraduate', sup: 'Dr. Joseph Walker · UIC',
      body: 'First independent research, examining whether plant tissue gene expression clusters by species or tissue type — revisiting Yang & Wang (2013) using RNA-Seq. Inspired by Brawand et al. (2011) and Mármol-Sánchez et al. (2023), also investigated whether expression profiles remain intact in silica-dried tissue. Results: PCA + heatmaps confirmed species-level clustering and showed that tissue preserved for six months retains usable expression patterns.',
      side: 'right', accent: bPalette.amber, plate: '[ Poster · 2024 ]' },
  ];

  return (
    <div style={{ width: 1440, minHeight: 1800, background: bPalette.bg, color: bPalette.cream, fontFamily: bFonts.mono, position: 'relative', display: 'flex', flexDirection: 'column' }}>
      <TerminalNav active="Research" />

      <section style={{ padding: '60px 80px 32px', borderBottom: `1px solid ${bPalette.rule}` }}>
        <div style={{ fontSize: 11, color: bPalette.moss, letterSpacing: '0.14em' }}>$ cat ~/research/log.md</div>
        <h1 style={{ fontFamily: bFonts.display, fontSize: 96, margin: '8px 0 0', fontWeight: 300, lineHeight: 0.95, color: bPalette.cream, letterSpacing: '-0.02em' }}>
          Research <span style={{ fontStyle: 'italic', color: bPalette.mossBright }}>Notebook.</span>
        </h1>
      </section>

      {entries.map((e, i) => (
        <article key={e.num} style={{
          padding: '50px 80px',
          borderBottom: i === entries.length - 1 ? 'none' : `1px dashed ${bPalette.rule}`,
          display: 'grid',
          gridTemplateColumns: e.side === 'left' ? '120px 1.2fr 1fr' : '1fr 1.2fr 120px',
          gap: 36,
        }}>
          {e.side === 'left' && (
            <aside style={{ fontSize: 10, color: bPalette.moss, lineHeight: 2, letterSpacing: '0.04em' }}>
              <div style={{ fontFamily: bFonts.display, fontSize: 64, fontWeight: 300, color: e.accent, lineHeight: 1, marginBottom: 14 }}>{e.num}</div>
              {e.date}<br/>
              <span style={{ color: bPalette.faded }}>{e.loc}</span><br/><br/>
              <span style={{ color: bPalette.faded }}>// Supervisor</span><br/>
              <span style={{ color: bPalette.creamSoft, fontSize: 12 }}>{e.sup}</span>
            </aside>
          )}
          {e.side === 'right' && (
            <div style={{ position: 'relative' }}>
              <div style={{ border: `1px solid ${bPalette.rule}`, background: bPalette.surface, padding: 14, transform: i % 2 === 0 ? 'rotate(-1.5deg)' : 'rotate(2deg)' }}>
                <div style={{
                  aspectRatio: '4/5',
                  background: bPalette.bg,
                  border: `1px solid ${bPalette.rule}`,
                  display: 'grid', gridTemplateColumns: 'repeat(10,1fr)', gridTemplateRows: 'repeat(12,1fr)', gap: 1, padding: 6,
                }}>
                  {Array.from({ length: 120 }).map((_, k) => {
                    const v = (Math.sin(k * 0.5 + i) + Math.cos(k * 0.3) + 2) / 4;
                    return <div key={k} style={{ background: v > 0.55 ? e.accent : v > 0.35 ? bPalette.moss : v > 0.2 ? bPalette.rule : 'transparent' }} />;
                  })}
                </div>
                <div style={{ marginTop: 8, fontSize: 9, color: bPalette.faded, letterSpacing: '0.14em' }}>Plate {e.num} · {e.plate}</div>
              </div>
            </div>
          )}
          <div>
            <h2 style={{ fontFamily: bFonts.display, fontSize: 40, margin: 0, fontWeight: 300, color: bPalette.cream, letterSpacing: '-0.01em', lineHeight: 1.05 }}>
              {e.title}
            </h2>
            <p style={{ fontSize: 14, color: bPalette.creamSoft, lineHeight: 1.75, marginTop: 18 }}>{e.body}</p>
            <div style={{ marginTop: 18, fontSize: 11, color: e.accent }}>
              → {e.side === 'left' ? 'View full poster' : 'Read paper'}
            </div>
          </div>
          {e.side === 'left' && (
            <div style={{ position: 'relative' }}>
              <div style={{ border: `1px solid ${bPalette.rule}`, background: bPalette.surface, padding: 14, transform: i % 2 === 0 ? 'rotate(1.8deg)' : 'rotate(-2deg)' }}>
                <div style={{
                  aspectRatio: '4/5',
                  background: bPalette.bg,
                  border: `1px solid ${bPalette.rule}`,
                  display: 'grid', gridTemplateColumns: 'repeat(10,1fr)', gridTemplateRows: 'repeat(12,1fr)', gap: 1, padding: 6,
                }}>
                  {Array.from({ length: 120 }).map((_, k) => {
                    const v = (Math.sin(k * 0.6 + i * 2) + Math.cos(k * 0.4) + 2) / 4;
                    return <div key={k} style={{ background: v > 0.55 ? e.accent : v > 0.35 ? bPalette.moss : v > 0.2 ? bPalette.rule : 'transparent' }} />;
                  })}
                </div>
                <div style={{ marginTop: 8, fontSize: 9, color: bPalette.faded, letterSpacing: '0.14em' }}>Plate {e.num} · {e.plate}</div>
              </div>
            </div>
          )}
          {e.side === 'right' && (
            <aside style={{ fontSize: 10, color: bPalette.moss, lineHeight: 2, letterSpacing: '0.04em' }}>
              <div style={{ fontFamily: bFonts.display, fontSize: 64, fontWeight: 300, color: e.accent, lineHeight: 1, marginBottom: 14 }}>{e.num}</div>
              {e.date}<br/>
              <span style={{ color: bPalette.faded }}>{e.loc}</span><br/><br/>
              <span style={{ color: bPalette.faded }}>// Supervisor</span><br/>
              <span style={{ color: bPalette.creamSoft, fontSize: 12 }}>{e.sup}</span>
            </aside>
          )}
        </article>
      ))}

      <TerminalFooter />
    </div>
  );
}

/* ============================================================
   B4 — ABOUT (Scrapbook collage, dark)
   ============================================================ */
function B_About() {
  return (
    <div style={{ width: 1440, minHeight: 1800, background: bPalette.bg, color: bPalette.cream, fontFamily: bFonts.mono, position: 'relative', display: 'flex', flexDirection: 'column' }}>
      <TerminalNav active="About" />

      {/* Hero asymmetric */}
      <section style={{ padding: '60px 80px 40px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40, alignItems: 'start', borderBottom: `1px solid ${bPalette.rule}` }}>
        <div style={{ paddingTop: 40 }}>
          <div style={{ fontSize: 11, color: bPalette.moss, letterSpacing: '0.14em' }}>$ cat about.md</div>
          <h1 style={{ fontFamily: bFonts.display, fontSize: 132, margin: '8px 0 0', fontWeight: 300, lineHeight: 0.9, color: bPalette.cream, letterSpacing: '-0.02em' }}>
            Hi, I'm<br/><span style={{ fontStyle: 'italic', color: bPalette.mossBright }}>Linda.</span>
          </h1>
          <p style={{ fontSize: 16, color: bPalette.creamSoft, lineHeight: 1.7, marginTop: 30, maxWidth: 480 }}>
            Post-bacc & researcher at UIC working in <span style={{ color: bPalette.amber }}>bioinformatics</span> for plant transcriptomics and phylogenomics. I write Python pipelines that ask which parts of the tree of life still need our attention.
          </p>
        </div>
        {/* Photo collage */}
        <div style={{ position: 'relative', height: 600 }}>
          <div style={{ position: 'absolute', top: 20, left: 40, width: 260, transform: 'rotate(-4deg)', border: `1px solid ${bPalette.rule}`, background: bPalette.surface, padding: 12 }}>
            <div style={{ aspectRatio: '1/1', background: `linear-gradient(135deg, ${bPalette.surface}, ${bPalette.bg})`, border: `1px solid ${bPalette.rule}`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: bPalette.faded, fontSize: 11 }}>[ Portrait — swap ]</div>
            <div style={{ marginTop: 6, fontSize: 11, color: bPalette.creamSoft, textAlign: 'center' }}>~ At the lab, '25</div>
          </div>
          <div style={{ position: 'absolute', top: 80, right: 30, width: 220, transform: 'rotate(6deg)', border: `1px solid ${bPalette.rule}`, background: bPalette.surface, padding: 10 }}>
            <div style={{ aspectRatio: '4/5', background: bPalette.moss, opacity: 0.7, display: 'flex', alignItems: 'center', justifyContent: 'center', color: bPalette.bg, fontSize: 11 }}>[ Palos Forest ]</div>
          </div>
          <div style={{ position: 'absolute', bottom: 40, left: 80, width: 200, transform: 'rotate(3deg)', border: `1px solid ${bPalette.rule}`, background: bPalette.surface, padding: 10 }}>
            <div style={{ aspectRatio: '3/2', background: bPalette.amber, opacity: 0.6, display: 'flex', alignItems: 'center', justifyContent: 'center', color: bPalette.bg, fontSize: 11 }}>[ Cats! ]</div>
          </div>
          <div style={{ position: 'absolute', bottom: 0, right: 80, width: 180, transform: 'rotate(-7deg)', border: `1px solid ${bPalette.rule}`, background: bPalette.surface, padding: 8 }}>
            <div style={{ aspectRatio: '1/1', background: bPalette.mossBright, opacity: 0.7, display: 'flex', alignItems: 'center', justifyContent: 'center', color: bPalette.bg, fontSize: 11 }}>[ Garden ]</div>
          </div>
          <div style={{ position: 'absolute', top: 0, right: 0 }}>
            <DNAColumn height={200} width={50} opacity={0.4} />
          </div>
        </div>
      </section>

      {/* Three asymmetric blocks */}
      <section style={{ padding: '60px 80px 40px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'start' }}>
        <div>
          <div style={{ fontSize: 11, color: bPalette.moss, letterSpacing: '0.14em', marginBottom: 16 }}>// The Work</div>
          <p style={{ fontSize: 22, lineHeight: 1.55, color: bPalette.cream, fontFamily: bFonts.display, fontWeight: 300, letterSpacing: '-0.005em' }}>
            I build Python pipelines — <span style={{ color: bPalette.mossBright, fontStyle: 'italic' }}>MissMap</span> being the current — that query NCBI metadata, resolve taxon synonyms, and map sequence type coverage across plant lineages.
          </p>
          <p style={{ fontSize: 14, lineHeight: 1.7, color: bPalette.creamSoft, marginTop: 22 }}>
            I also serve as a <span style={{ color: bPalette.amber }}>Populations & Communities Biology TA</span>. Seeking bioinformatics roles and a lab in computational phylogeny, genetics, or evolution.
          </p>
        </div>
        <div style={{ position: 'relative', height: 380 }}>
          <div style={{ position: 'absolute', top: 0, right: 0, width: 320, transform: 'rotate(2deg)', border: `1px solid ${bPalette.rule}`, background: bPalette.surface, padding: 12 }}>
            <div style={{ aspectRatio: '4/3', background: bPalette.surface, border: `1px solid ${bPalette.rule}`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: bPalette.creamSoft, fontSize: 11 }}>[ Presenting at Botany 2025 ]</div>
            <div style={{ marginTop: 8, fontSize: 11, color: bPalette.amber }}>~ Palm Springs · July '25</div>
          </div>
          <div style={{ position: 'absolute', bottom: 0, left: 0, width: 200, transform: 'rotate(-3deg)', border: `1px solid ${bPalette.rule}`, background: bPalette.surface, padding: 10 }}>
            <div style={{ aspectRatio: '1/1', background: bPalette.moss, opacity: 0.7, display: 'flex', alignItems: 'center', justifyContent: 'center', color: bPalette.bg, fontSize: 11 }}>[ TA — BIOS 120 ]</div>
          </div>
        </div>
      </section>

      {/* Off the screen — reversed asymmetric */}
      <section style={{ padding: '60px 80px 40px', background: bPalette.bgAlt, borderTop: `1px solid ${bPalette.rule}`, borderBottom: `1px solid ${bPalette.rule}`, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'start' }}>
        <div style={{ position: 'relative', height: 420, order: 1 }}>
          <div style={{ position: 'absolute', top: 0, left: 20, width: 240, transform: 'rotate(-3deg)', border: `1px solid ${bPalette.rule}`, background: bPalette.surface, padding: 10 }}>
            <div style={{ aspectRatio: '3/4', background: `repeating-linear-gradient(45deg, ${bPalette.amber}40, ${bPalette.amber}40 8px, ${bPalette.surface} 8px, ${bPalette.surface} 16px)`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: bPalette.creamSoft, fontSize: 11 }}>[ Jump rope ]</div>
            <div style={{ marginTop: 6, fontSize: 11, color: bPalette.moss, textAlign: 'center' }}>~ Still landing doubles</div>
          </div>
          <div style={{ position: 'absolute', bottom: 0, right: 20, width: 220, transform: 'rotate(5deg)', border: `1px solid ${bPalette.rule}`, background: bPalette.surface, padding: 10 }}>
            <div style={{ aspectRatio: '4/5', background: bPalette.moss, opacity: 0.7, display: 'flex', alignItems: 'center', justifyContent: 'center', color: bPalette.bg, fontSize: 11 }}>[ Figure skating ]</div>
          </div>
        </div>
        <div style={{ paddingTop: 30, order: 2 }}>
          <div style={{ fontSize: 11, color: bPalette.moss, letterSpacing: '0.14em', marginBottom: 16 }}>// Off the Screen</div>
          <p style={{ fontSize: 22, lineHeight: 1.55, color: bPalette.cream, fontFamily: bFonts.display, fontWeight: 300, letterSpacing: '-0.005em' }}>
            For a few years now I've committed myself to <span style={{ color: bPalette.mossBright, fontStyle: 'italic' }}>weightlifting</span>, calisthenics, and jump roping. Outside the gym — the nature paths Illinois has to offer, especially the <span style={{ color: bPalette.amber }}>Palos Forest Preserves</span>, or the various parks in and around Chicago.
          </p>
          <p style={{ fontSize: 14, lineHeight: 1.7, color: bPalette.creamSoft, marginTop: 22 }}>
            When the weather permits, I figure skate.
          </p>
        </div>
      </section>

      {/* At home */}
      <section style={{ padding: '60px 80px 80px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'start' }}>
        <div>
          <div style={{ fontSize: 11, color: bPalette.moss, letterSpacing: '0.14em', marginBottom: 16 }}>// At Home</div>
          <p style={{ fontSize: 22, lineHeight: 1.55, color: bPalette.cream, fontFamily: bFonts.display, fontWeight: 300, letterSpacing: '-0.005em' }}>
            Three cats. A garden. I cook and bake <span style={{ color: bPalette.mossBright, fontStyle: 'italic' }}>Middle Eastern</span> dishes and desserts with my mom — knafeh, baklava, ma'amoul.
          </p>
          <p style={{ fontSize: 14, lineHeight: 1.7, color: bPalette.creamSoft, marginTop: 22 }}>
            In idle hours: <span style={{ color: bPalette.amber }}>sudoku</span>, the classics, Plague Inc., and browsing Fragrantica for fragrance notes I can't afford.
          </p>
          <div style={{ marginTop: 30, fontSize: 13, color: bPalette.moss }}>
            <span style={{ color: bPalette.amber }}>↳</span> Thanks for reading. <span style={{ color: bPalette.faded }}>$ logout</span>
          </div>
        </div>
        <div style={{ position: 'relative', height: 420 }}>
          <div style={{ position: 'absolute', top: 0, right: 20, width: 240, transform: 'rotate(3deg)', border: `1px solid ${bPalette.rule}`, background: bPalette.surface, padding: 12 }}>
            <div style={{ aspectRatio: '1/1', background: bPalette.amber, opacity: 0.6, display: 'flex', alignItems: 'center', justifyContent: 'center', color: bPalette.bg, fontSize: 11 }}>[ Cats — the trio ]</div>
          </div>
          <div style={{ position: 'absolute', top: 180, left: 0, width: 280, transform: 'rotate(-2deg)', border: `1px solid ${bPalette.rule}`, background: bPalette.surface, padding: 12 }}>
            <div style={{ aspectRatio: '4/3', background: `repeating-linear-gradient(45deg, ${bPalette.moss}, ${bPalette.moss} 4px, ${bPalette.mossBright} 4px, ${bPalette.mossBright} 12px)`, opacity: 0.5, display: 'flex', alignItems: 'center', justifyContent: 'center', color: bPalette.bg, fontSize: 11 }}>[ Garden — tomatoes ]</div>
          </div>
        </div>
      </section>

      <TerminalFooter />
    </div>
  );
}

window.B_Projects = B_Projects;
window.B_Research = B_Research;
window.B_About = B_About;
