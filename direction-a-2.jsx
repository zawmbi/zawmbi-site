/* Direction A v3 — Projects, Research, About (EDITORIAL) */

/* ============================================================
   A2 — PROJECTS (Editorial index)
   ============================================================ */
function A_Projects() {
  return (
    <div style={{ width: 1440, minHeight: 1800, background: aPalette.paper, color: aPalette.ink, fontFamily: aFonts.body, display: 'flex', flexDirection: 'column' }}>
      <EditorialNav active="Projects" />

      <section style={{ padding: '64px 80px 40px', borderBottom: `1px solid ${aPalette.rule}` }}>
        <Eyebrow num="II">Programming Projects</Eyebrow>
        <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 60, alignItems: 'end', marginTop: 20 }}>
          <h1 style={{ fontFamily: aFonts.display, fontSize: 128, fontWeight: 400, margin: 0, lineHeight: 0.95, color: aPalette.ink, letterSpacing: '-0.02em' }}>
            Selected <em style={{ color: aPalette.clayDeep }}>work.</em>
          </h1>
          <p style={{ fontFamily: aFonts.body, fontSize: 16, lineHeight: 1.7, color: aPalette.inkSoft, margin: 0, fontStyle: 'italic' }}>
            Always being updated. Most recent listings at <span style={{ color: aPalette.clayDeep, fontStyle: 'normal' }}>github.com/zawmbi</span>. Tap any title for the full case.
          </p>
        </div>
      </section>

      {/* Featured */}
      <section style={{ padding: '48px 80px 32px' }}>
        <article style={{ borderTop: `2px solid ${aPalette.ink}`, paddingTop: 28, display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 56 }}>
          <div>
            <Eyebrow num="Feature">Bioinformatics · Ongoing</Eyebrow>
            <h2 style={{ fontFamily: aFonts.display, fontSize: 88, fontWeight: 400, margin: '14px 0 18px', lineHeight: 0.95, letterSpacing: '-0.02em', color: aPalette.ink }}>
              MissMap<span style={{ color: aPalette.clayDeep, fontStyle: 'italic' }}>.py</span>
            </h2>
            <p style={{ fontFamily: aFonts.body, fontSize: 17, lineHeight: 1.7, color: aPalette.inkSoft, margin: 0 }}>
              A pipeline mapping the availability of genetic sequence data across plant lineages. Automates retrieval, classification, and visualization of sequencing completeness for target clades.
            </p>
            <div style={{ marginTop: 22, display: 'flex', gap: 8, flexWrap: 'wrap', fontFamily: aFonts.body, fontSize: 12 }}>
              {['Python', 'NCBI', 'Bioinformatics', 'Data Visualization'].map(t => (
                <span key={t} style={{ padding: '4px 10px', border: `1px solid ${aPalette.rule}`, color: aPalette.inkSoft, fontStyle: 'italic' }}>{t}</span>
              ))}
            </div>
            <div style={{ marginTop: 28, fontFamily: aFonts.body, fontSize: 14, display: 'flex', gap: 22 }}>
              <span style={{ color: aPalette.clayDeep, borderBottom: `1px solid ${aPalette.clayDeep}`, paddingBottom: 2 }}>Read the case study</span>
              <span style={{ color: aPalette.inkFaint }}>View on GitHub</span>
            </div>
          </div>
          <div>
            <div style={{ aspectRatio: '4/3', background: aPalette.paperDeep, border: `1px solid ${aPalette.rule}`, padding: 16 }}>
              <div style={{ width: '100%', height: '100%', display: 'grid', gridTemplateColumns: 'repeat(20,1fr)', gridTemplateRows: 'repeat(15,1fr)', gap: 1 }}>
                {Array.from({ length: 300 }).map((_, i) => {
                  const v = (Math.sin(i * 0.42) + Math.cos(i * 0.31) + 2) / 4;
                  return <div key={i} style={{ background: v > 0.7 ? aPalette.sageDeep : v > 0.5 ? aPalette.sage : v > 0.3 ? aPalette.clay : aPalette.ruleSoft, opacity: v > 0.3 ? 1 : 0.5 }} />;
                })}
              </div>
            </div>
            <div style={{ marginTop: 10, fontFamily: aFonts.label, fontSize: 11, color: aPalette.inkFaint, letterSpacing: '0.18em', textTransform: 'uppercase' }}>
              Fig. I — Sequence coverage matrix
            </div>
          </div>
        </article>
      </section>

      {/* Three-up */}
      <section style={{ padding: '32px 80px 48px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 36 }}>
          {[
            { num: '02', tag: 'Data Science · Dec 2024', title: 'Wildfire Analysis', body: 'Machine-learning and visualization on national wildfire records, with interactive maps.', stack: 'Python · R · scikit-learn' },
            { num: '03', tag: 'Music · Sept 2026', title: 'PicToBeat', body: 'Image-feature pipeline turning photographs into mood-matched Spotify playlists.', stack: 'Python · Spotify API' },
            { num: '04', tag: 'Mobile · 2026', title: 'Animal Restaurant Tracker', body: 'Flutter progress tracker; iOS + Android, currently in App Store review.', stack: 'Flutter · Dart' },
          ].map(p => (
            <article key={p.num} style={{ borderTop: `1px solid ${aPalette.rule}`, paddingTop: 18 }}>
              <Eyebrow num={p.num}>{p.tag}</Eyebrow>
              <h3 style={{ fontFamily: aFonts.display, fontSize: 32, fontWeight: 400, margin: '12px 0 10px', color: aPalette.ink, letterSpacing: '-0.01em' }}>{p.title}</h3>
              <p style={{ fontFamily: aFonts.body, fontSize: 14, lineHeight: 1.7, color: aPalette.inkSoft, margin: 0 }}>{p.body}</p>
              <div style={{ marginTop: 12, fontFamily: aFonts.body, fontStyle: 'italic', fontSize: 12, color: aPalette.inkFaint }}>{p.stack}</div>
            </article>
          ))}
        </div>
      </section>

      {/* Coursework table */}
      <section style={{ padding: '48px 80px 96px', background: aPalette.paperDeep, borderTop: `1px solid ${aPalette.rule}` }}>
        <div style={{ display: 'grid', gridTemplateColumns: '260px 1fr', gap: 60 }}>
          <div>
            <Eyebrow num="III">Coursework</Eyebrow>
            <h3 style={{ fontFamily: aFonts.display, fontSize: 40, fontWeight: 400, margin: '14px 0 10px', letterSpacing: '-0.01em', color: aPalette.ink, lineHeight: 1.05 }}>
              Data Structures<br/><em style={{ color: aPalette.sageDeep }}>& Algorithms</em>
            </h3>
            <p style={{ fontFamily: aFonts.body, fontSize: 13, lineHeight: 1.7, color: aPalette.inkFaint, fontStyle: 'italic' }}>
              Selected exercises and assignments — C, C++, MySQL.
            </p>
          </div>
          <div>
            {[
              ['04', 'Elementary Cell Automation', 'C', 'Sept 2024'],
              ['05', 'Dynamic Memory Food Web', 'C', 'Sept 2024'],
              ['06', 'Evil Word Guessing Game', 'C', 'Oct 2023'],
              ['07', 'Popular Vote Minimizer', 'C', 'Oct 2023'],
              ['08', 'Shortest Word Ladder', 'C', 'Nov 2023'],
              ['09', 'Escape the Labrynth', 'C', 'Nov 2023'],
              ['10', 'Outlast the Baddies', 'C', 'Dec 2023'],
              ['11', 'Library Management System', 'C++', 'Sept 2023'],
              ['12', 'Mini Search Engine', 'C++', 'Sept 2023'],
              ['13', 'Shape List Drawing Canvas', 'C++', 'Oct 2023'],
              ['14', 'Hospital Priority Queue', 'C++', 'Nov 2023'],
              ['15', 'Hospital Database', 'MySQL', 'July 2024'],
            ].map(([n, t, l, d], i) => (
              <div key={n} style={{ display: 'grid', gridTemplateColumns: '50px 1fr 100px 120px', alignItems: 'baseline', padding: '14px 0', borderBottom: `1px solid ${aPalette.ruleSoft}`, fontFamily: aFonts.body, fontSize: 15 }}>
                <span style={{ color: aPalette.inkFaint, fontFamily: aFonts.display, fontStyle: 'italic' }}>№ {n}</span>
                <span style={{ color: aPalette.ink }}>{t}</span>
                <span style={{ color: aPalette.clayDeep, fontStyle: 'italic' }}>{l}</span>
                <span style={{ color: aPalette.inkFaint, textAlign: 'right' }}>{d}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <EditorialFooter />
    </div>
  );
}

/* ============================================================
   A3 — RESEARCH (Editorial features)
   ============================================================ */
function A_Research() {
  const entries = [
    { num: 'I', date: 'July 2025', title: 'Botany 2025 — Conference Poster', loc: 'Palm Springs, California', sup: 'Dr. Joseph Walker · UIC',
      body: 'Presented the MissMap pipeline at the conference. The poster traces sequence-coverage gaps across plant lineages and proposes a sampling strategy for closing them.', side: 'left' },
    { num: 'II', date: 'April 2025 —', title: 'MissMap Pipeline', loc: 'Independent · in progress', sup: 'github.com/zawmbi',
      body: 'A computational pipeline mapping the availability of genetic sequence data across plant lineages. Leveraging NCBI GenBank, MissMap automates retrieval, classification, and visualization of sequencing completeness for target clades. Future work: data cleaning, ortholog detection, NCBI metadata filtering, clade-level summaries.', side: 'right' },
    { num: 'III', date: 'February 2025', title: 'RNA from Herbarium Specimens', loc: 'bioRxiv · fourth author', sup: 'Walker Lab · UIC',
      body: 'A study testing whether RNA suitable for transcriptomic analysis could be recovered from herbarium specimens. Demonstrated that mRNA remains biologically informative in many samples despite degradation, expanding the utility of historical plant collections for evolutionary and functional genomics.', side: 'left' },
    { num: 'IV', date: 'June 2024', title: 'Botany 2024 — First Poster', loc: 'Undergraduate', sup: 'Dr. Joseph Walker · UIC',
      body: 'First independent research, examining whether plant tissue gene expression clusters by species or tissue type — revisiting Yang & Wang (2013) using RNA-Seq. Results: PCA and heatmaps confirmed species-level clustering and showed that tissue preserved for six months retains usable expression patterns.', side: 'right' },
  ];

  return (
    <div style={{ width: 1440, minHeight: 1800, background: aPalette.paper, color: aPalette.ink, fontFamily: aFonts.body, display: 'flex', flexDirection: 'column' }}>
      <EditorialNav active="Research" />

      <section style={{ padding: '64px 80px 40px', borderBottom: `1px solid ${aPalette.rule}` }}>
        <Eyebrow num="III">Research Notebook</Eyebrow>
        <h1 style={{ fontFamily: aFonts.display, fontSize: 128, fontWeight: 400, margin: '20px 0 0', lineHeight: 0.95, color: aPalette.ink, letterSpacing: '-0.02em' }}>
          Field <em style={{ color: aPalette.sageDeep }}>notes.</em>
        </h1>
        <p style={{ fontFamily: aFonts.display, fontSize: 22, fontStyle: 'italic', color: aPalette.inkSoft, margin: '20px 0 0', maxWidth: 720, lineHeight: 1.4 }}>
          Phylogenetics, transcriptomics, and the slow work of mapping what we know and what we don't.
        </p>
      </section>

      {entries.map((e, i) => (
        <article key={e.num} style={{
          padding: '56px 80px',
          borderBottom: i === entries.length - 1 ? 'none' : `1px solid ${aPalette.ruleSoft}`,
          display: 'grid',
          gridTemplateColumns: e.side === 'left' ? '180px 1fr 320px' : '320px 1fr 180px',
          gap: 48,
          background: i % 2 === 0 ? 'transparent' : aPalette.paperDeep,
        }}>
          {e.side === 'left' && (
            <aside style={{ fontFamily: aFonts.body, fontSize: 13, color: aPalette.inkSoft, lineHeight: 1.8 }}>
              <div style={{ fontFamily: aFonts.display, fontSize: 80, fontStyle: 'italic', color: aPalette.clayDeep, lineHeight: 1, marginBottom: 16, fontWeight: 400 }}>{e.num}</div>
              <div style={{ fontFamily: aFonts.label, fontSize: 11, color: aPalette.inkFaint, letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: 8 }}>Date</div>
              <div>{e.date}</div>
              <div style={{ fontFamily: aFonts.label, fontSize: 11, color: aPalette.inkFaint, letterSpacing: '0.18em', textTransform: 'uppercase', marginTop: 18, marginBottom: 8 }}>Venue</div>
              <div style={{ fontStyle: 'italic' }}>{e.loc}</div>
              <div style={{ fontFamily: aFonts.label, fontSize: 11, color: aPalette.inkFaint, letterSpacing: '0.18em', textTransform: 'uppercase', marginTop: 18, marginBottom: 8 }}>Supervisor</div>
              <div>{e.sup}</div>
            </aside>
          )}
          {e.side === 'right' && (
            <figure style={{ margin: 0 }}>
              <div style={{ aspectRatio: '4/5', background: aPalette.paperDeep, border: `1px solid ${aPalette.rule}`, padding: 12 }}>
                <div style={{ width: '100%', height: '100%', display: 'grid', gridTemplateColumns: 'repeat(10,1fr)', gridTemplateRows: 'repeat(12,1fr)', gap: 1 }}>
                  {Array.from({ length: 120 }).map((_, k) => {
                    const v = (Math.sin(k * 0.5 + i) + Math.cos(k * 0.3) + 2) / 4;
                    return <div key={k} style={{ background: v > 0.65 ? aPalette.sageDeep : v > 0.45 ? aPalette.sage : v > 0.25 ? aPalette.clay : aPalette.ruleSoft, opacity: v > 0.25 ? 1 : 0.4 }} />;
                  })}
                </div>
              </div>
              <figcaption style={{ marginTop: 10, fontFamily: aFonts.label, fontSize: 11, color: aPalette.inkFaint, letterSpacing: '0.18em', textTransform: 'uppercase' }}>
                Plate {e.num} — Specimen
              </figcaption>
            </figure>
          )}
          <div>
            <h2 style={{ fontFamily: aFonts.display, fontSize: 52, fontWeight: 400, margin: 0, lineHeight: 1.05, letterSpacing: '-0.015em', color: aPalette.ink }}>
              {e.title}
            </h2>
            <p style={{ fontFamily: aFonts.body, fontSize: 17, lineHeight: 1.75, color: aPalette.inkSoft, marginTop: 22 }}>{e.body}</p>
            <div style={{ marginTop: 22, fontFamily: aFonts.body, fontSize: 14, color: aPalette.clayDeep, fontStyle: 'italic' }}>
              {e.side === 'left' ? 'View full poster →' : 'Read paper →'}
            </div>
          </div>
          {e.side === 'left' && (
            <figure style={{ margin: 0 }}>
              <div style={{ aspectRatio: '4/5', background: aPalette.paperDeep, border: `1px solid ${aPalette.rule}`, padding: 12 }}>
                <div style={{ width: '100%', height: '100%', display: 'grid', gridTemplateColumns: 'repeat(10,1fr)', gridTemplateRows: 'repeat(12,1fr)', gap: 1 }}>
                  {Array.from({ length: 120 }).map((_, k) => {
                    const v = (Math.sin(k * 0.6 + i * 2) + Math.cos(k * 0.4) + 2) / 4;
                    return <div key={k} style={{ background: v > 0.65 ? aPalette.sageDeep : v > 0.45 ? aPalette.sage : v > 0.25 ? aPalette.clay : aPalette.ruleSoft, opacity: v > 0.25 ? 1 : 0.4 }} />;
                  })}
                </div>
              </div>
              <figcaption style={{ marginTop: 10, fontFamily: aFonts.label, fontSize: 11, color: aPalette.inkFaint, letterSpacing: '0.18em', textTransform: 'uppercase' }}>
                Plate {e.num} — Specimen
              </figcaption>
            </figure>
          )}
          {e.side === 'right' && (
            <aside style={{ fontFamily: aFonts.body, fontSize: 13, color: aPalette.inkSoft, lineHeight: 1.8 }}>
              <div style={{ fontFamily: aFonts.display, fontSize: 80, fontStyle: 'italic', color: aPalette.clayDeep, lineHeight: 1, marginBottom: 16, fontWeight: 400 }}>{e.num}</div>
              <div style={{ fontFamily: aFonts.label, fontSize: 11, color: aPalette.inkFaint, letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: 8 }}>Date</div>
              <div>{e.date}</div>
              <div style={{ fontFamily: aFonts.label, fontSize: 11, color: aPalette.inkFaint, letterSpacing: '0.18em', textTransform: 'uppercase', marginTop: 18, marginBottom: 8 }}>Venue</div>
              <div style={{ fontStyle: 'italic' }}>{e.loc}</div>
              <div style={{ fontFamily: aFonts.label, fontSize: 11, color: aPalette.inkFaint, letterSpacing: '0.18em', textTransform: 'uppercase', marginTop: 18, marginBottom: 8 }}>Supervisor</div>
              <div>{e.sup}</div>
            </aside>
          )}
        </article>
      ))}

      <EditorialFooter />
    </div>
  );
}

/* ============================================================
   A4 — ABOUT (Editorial profile)
   ============================================================ */
function A_About() {
  return (
    <div style={{ width: 1440, minHeight: 1800, background: aPalette.paper, color: aPalette.ink, fontFamily: aFonts.body, display: 'flex', flexDirection: 'column' }}>
      <EditorialNav active="About" />

      {/* Hero */}
      <section style={{ padding: '64px 80px 56px', borderBottom: `1px solid ${aPalette.rule}`, display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 60, alignItems: 'end' }}>
        <div>
          <Eyebrow num="IV">A profile</Eyebrow>
          <h1 style={{ fontFamily: aFonts.display, fontSize: 144, fontWeight: 400, margin: '20px 0 0', lineHeight: 0.92, color: aPalette.ink, letterSpacing: '-0.02em' }}>
            Hi, I'm<br/><em style={{ color: aPalette.clayDeep }}>Linda.</em>
          </h1>
          <p style={{ fontFamily: aFonts.display, fontSize: 24, fontStyle: 'italic', color: aPalette.inkSoft, lineHeight: 1.4, marginTop: 32, maxWidth: 560 }}>
            Post-baccalaureate researcher at UIC working in <span style={{ color: aPalette.sageDeep, fontStyle: 'normal' }}>bioinformatics</span> for plant transcriptomics and phylogenomics.
          </p>
        </div>
        <figure style={{ margin: 0 }}>
          <div style={{ aspectRatio: '4/5', background: aPalette.paperDeep, border: `1px solid ${aPalette.rule}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: aFonts.body, fontStyle: 'italic', color: aPalette.inkFaint, fontSize: 14 }}>
            [ Portrait — to be added ]
          </div>
          <figcaption style={{ marginTop: 10, fontFamily: aFonts.label, fontSize: 11, color: aPalette.inkFaint, letterSpacing: '0.18em', textTransform: 'uppercase' }}>
            At the lab — 2025
          </figcaption>
        </figure>
      </section>

      {/* The Work */}
      <section style={{ padding: '64px 80px 48px', display: 'grid', gridTemplateColumns: '260px 1fr 320px', gap: 56 }}>
        <div>
          <Eyebrow>Chapter I</Eyebrow>
          <h2 style={{ fontFamily: aFonts.display, fontSize: 44, fontWeight: 400, margin: '14px 0 0', letterSpacing: '-0.01em', lineHeight: 1.05, color: aPalette.ink }}>
            The <em style={{ color: aPalette.sageDeep }}>Work</em>
          </h2>
        </div>
        <div>
          <p style={{ fontFamily: aFonts.body, fontSize: 19, lineHeight: 1.7, color: aPalette.ink, margin: 0 }}>
            I build Python pipelines — <em style={{ color: aPalette.clayDeep }}>MissMap</em> being the current — that query NCBI metadata, resolve taxon synonyms, and map sequence-type coverage (rbcL, matK, ITS) across plant lineages.
          </p>
          <p style={{ fontFamily: aFonts.body, fontSize: 16, lineHeight: 1.75, color: aPalette.inkSoft, marginTop: 22 }}>
            Alongside research I serve as a <em>Populations & Communities Biology</em> teaching assistant at UIC. I'm seeking bioinformatics roles and a PhD lab in computational phylogeny, genetics, or evolution.
          </p>
        </div>
        <figure style={{ margin: 0 }}>
          <div style={{ aspectRatio: '4/3', background: aPalette.paperDeep, border: `1px solid ${aPalette.rule}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: aFonts.body, fontStyle: 'italic', color: aPalette.inkFaint, fontSize: 12 }}>
            [ Botany 2025 — presenting ]
          </div>
          <figcaption style={{ marginTop: 10, fontFamily: aFonts.label, fontSize: 11, color: aPalette.inkFaint, letterSpacing: '0.18em', textTransform: 'uppercase' }}>
            Palm Springs · July 2025
          </figcaption>
        </figure>
      </section>

      {/* Off the Screen */}
      <section style={{ padding: '64px 80px 48px', background: aPalette.paperDeep, borderTop: `1px solid ${aPalette.rule}`, borderBottom: `1px solid ${aPalette.rule}`, display: 'grid', gridTemplateColumns: '320px 1fr 260px', gap: 56 }}>
        <figure style={{ margin: 0 }}>
          <div style={{ aspectRatio: '3/4', background: aPalette.paper, border: `1px solid ${aPalette.rule}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: aFonts.body, fontStyle: 'italic', color: aPalette.inkFaint, fontSize: 12 }}>
            [ Palos Forest ]
          </div>
          <figcaption style={{ marginTop: 10, fontFamily: aFonts.label, fontSize: 11, color: aPalette.inkFaint, letterSpacing: '0.18em', textTransform: 'uppercase' }}>
            Out walking — autumn
          </figcaption>
        </figure>
        <div>
          <p style={{ fontFamily: aFonts.body, fontSize: 19, lineHeight: 1.7, color: aPalette.ink, margin: 0 }}>
            For a few years now I've committed myself to <em style={{ color: aPalette.clayDeep }}>weightlifting</em>, calisthenics, and jump roping. Outside the gym — the nature paths Illinois has to offer, especially the <em>Palos Forest Preserves</em>, or the parks in and around Chicago.
          </p>
          <p style={{ fontFamily: aFonts.body, fontSize: 16, lineHeight: 1.75, color: aPalette.inkSoft, marginTop: 22 }}>
            When the weather permits, I figure skate.
          </p>
        </div>
        <div style={{ paddingTop: 60 }}>
          <Eyebrow>Chapter II</Eyebrow>
          <h2 style={{ fontFamily: aFonts.display, fontSize: 44, fontWeight: 400, margin: '14px 0 0', letterSpacing: '-0.01em', lineHeight: 1.05, color: aPalette.ink, textAlign: 'right' }}>
            Off the <em style={{ color: aPalette.sageDeep }}>Screen</em>
          </h2>
        </div>
      </section>

      {/* At Home */}
      <section style={{ padding: '64px 80px 96px', display: 'grid', gridTemplateColumns: '260px 1fr 320px', gap: 56 }}>
        <div>
          <Eyebrow>Chapter III</Eyebrow>
          <h2 style={{ fontFamily: aFonts.display, fontSize: 44, fontWeight: 400, margin: '14px 0 0', letterSpacing: '-0.01em', lineHeight: 1.05, color: aPalette.ink }}>
            At <em style={{ color: aPalette.sageDeep }}>Home</em>
          </h2>
        </div>
        <div>
          <p style={{ fontFamily: aFonts.body, fontSize: 19, lineHeight: 1.7, color: aPalette.ink, margin: 0 }}>
            Three cats. A garden. I cook and bake <em style={{ color: aPalette.clayDeep }}>Middle Eastern</em> dishes and desserts with my mom — knafeh, baklava, ma'amoul.
          </p>
          <p style={{ fontFamily: aFonts.body, fontSize: 16, lineHeight: 1.75, color: aPalette.inkSoft, marginTop: 22 }}>
            In idle hours: <em>sudoku</em>, the classics, Plague Inc., and browsing Fragrantica for fragrance notes I can't afford.
          </p>
          <div style={{ marginTop: 36, fontFamily: aFonts.display, fontSize: 18, fontStyle: 'italic', color: aPalette.clayDeep }}>
            Thanks for reading. <span style={{ color: aPalette.inkFaint }}>— L.M.</span>
          </div>
        </div>
        <figure style={{ margin: 0 }}>
          <div style={{ aspectRatio: '4/3', background: aPalette.paperDeep, border: `1px solid ${aPalette.rule}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: aFonts.body, fontStyle: 'italic', color: aPalette.inkFaint, fontSize: 12 }}>
            [ The trio — three cats ]
          </div>
          <figcaption style={{ marginTop: 10, fontFamily: aFonts.label, fontSize: 11, color: aPalette.inkFaint, letterSpacing: '0.18em', textTransform: 'uppercase' }}>
            At home
          </figcaption>
        </figure>
      </section>

      <EditorialFooter />
    </div>
  );
}

window.A_Projects = A_Projects;
window.A_Research = A_Research;
window.A_About = A_About;
