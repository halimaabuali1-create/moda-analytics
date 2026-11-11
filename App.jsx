import { useMemo, useState } from 'react'
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Cell,
} from 'recharts'
import { BRANDS, CATEGORY_COLOR, INSIGHTS, latestFor, total12, totalAll } from './data'

const fmt = (n) => n == null ? '—' : n.toLocaleString('en-GB')
const fmtM = (n) => n == null ? '—' : n >= 1_000_000 ? `${(n / 1_000_000).toFixed(1)}M` : fmt(n)
const pct = (current, previous) => previous ? ((current / previous - 1) * 100) : null
const fmtPct = (v) => v == null ? '—' : `${v > 0 ? '+' : ''}${v.toFixed(1)}%`

function Swatch({ category }) {
  return <span className="swatch" style={{ background: CATEGORY_COLOR[category] }} aria-hidden="true" />
}

function BrandLabel({ brand, onOpen }) {
  const latest = latestFor(brand)
  return (
    <button className="label label-button" onClick={() => onOpen(brand.id)}>
      <div className="label-top">
        <span className="label-cat"><Swatch category={brand.category} />{brand.category}</span>
        <span className="label-year">FY{String(latest.year).slice(-2)}</span>
      </div>
      <h3 className="label-name">{brand.name}</h3>
      <dl className="label-stats">
        <div><dt>Scope 1+2</dt><dd>{fmt(total12(latest))}</dd></div>
        <div><dt>Scope 3</dt><dd>{fmtM(latest.s3)}</dd></div>
      </dl>
      <div className="label-foot-row">
        <span className="label-foot">tCO₂e · official disclosure</span>
        <span className="profile-link">View profile →</span>
      </div>
    </button>
  )
}

function ScopeChart({ brands }) {
  const sorted = brands.map((b) => ({ ...latestFor(b), name: b.name, category: b.category }))
    .sort((a, b) => b.s3 - a.s3)
  return (
    <div className="chart-wrap">
      <ResponsiveContainer width="100%" height={460}>
        <BarChart data={sorted} layout="vertical" margin={{ top: 4, right: 24, left: 4, bottom: 4 }} barCategoryGap={10}>
          <CartesianGrid horizontal={false} stroke="#E4DFD2" />
          <XAxis type="number" tickFormatter={fmtM} stroke="#8A8693" tick={{ fontFamily: 'IBM Plex Mono', fontSize: 11 }} axisLine={{ stroke: '#DDD8CC' }} tickLine={false} />
          <YAxis type="category" dataKey="name" width={118} stroke="#1C1B29" tick={{ fontFamily: 'Inter', fontSize: 13, fontWeight: 500 }} axisLine={false} tickLine={false} />
          <Tooltip formatter={(value) => [`${fmt(value)} tCO₂e`, 'Scope 3']} cursor={{ fill: 'rgba(28,27,41,0.04)' }} />
          <Bar dataKey="s3" radius={[0, 3, 3, 0]} maxBarSize={18}>
            {sorted.map((entry) => <Cell key={entry.name} fill={CATEGORY_COLOR[entry.category]} />)}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

function Legend() {
  return <div className="legend">{Object.entries(CATEGORY_COLOR).map(([label, color]) => (
    <span className="legend-item" key={label}><span className="swatch" style={{ background: color }} />{label}</span>
  ))}</div>
}

function BrandProfile({ brand, onBack }) {
  const latest = latestFor(brand)
  const previous = brand.history.length > 1 ? brand.history[brand.history.length - 2] : null
  const trend = brand.history.map((row) => ({ ...row, total12: total12(row), total: totalAll(row) }))
  const scope3Share = totalAll(latest) ? latest.s3 / totalAll(latest) * 100 : null

  return (
    <main className="profile-page">
      <button className="back-link" onClick={onBack}>← Back to database</button>
      <section className="profile-hero">
        <div>
          <p className="profile-kicker"><Swatch category={brand.category} /> {brand.category}</p>
          <h1>{brand.name}</h1>
          <p>{brand.parentCompany !== brand.name ? `${brand.parentCompany} · ` : ''}{brand.reportingPeriod}</p>
        </div>
        <div className="verified-box"><span>Last verified</span><strong>{brand.lastVerified}</strong></div>
      </section>

      <section className="profile-metrics">
        <div><span>Scope 1</span><strong>{fmt(latest.s1)}</strong><small>{previous ? fmtPct(pct(latest.s1, previous.s1)) + ' YoY' : 'tCO₂e'}</small></div>
        <div><span>Scope 2 MB</span><strong>{fmt(latest.s2)}</strong><small>{previous ? fmtPct(pct(latest.s2, previous.s2)) + ' YoY' : 'tCO₂e'}</small></div>
        <div><span>Scope 3</span><strong>{fmtM(latest.s3)}</strong><small>{previous ? fmtPct(pct(latest.s3, previous.s3)) + ' YoY' : 'tCO₂e'}</small></div>
        <div><span>Total GHG</span><strong>{fmtM(totalAll(latest))}</strong><small>{scope3Share ? `${scope3Share.toFixed(1)}% Scope 3` : 'tCO₂e'}</small></div>
      </section>

      <section className="profile-section profile-grid">
        <div className="profile-chart-card">
          <div className="profile-section-head"><h2>Emissions trajectory</h2><p>Reported and restated values available in the current dataset.</p></div>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={trend} margin={{ top: 10, right: 18, left: 0, bottom: 0 }}>
              <CartesianGrid stroke="#E4DFD2" vertical={false} />
              <XAxis dataKey="year" tick={{ fontFamily: 'IBM Plex Mono', fontSize: 11 }} />
              <YAxis tickFormatter={fmtM} tick={{ fontFamily: 'IBM Plex Mono', fontSize: 11 }} width={65} />
              <Tooltip formatter={(value) => `${fmt(value)} tCO₂e`} />
              <Line type="monotone" dataKey="s3" name="Scope 3" stroke="#1C1B29" strokeWidth={2.4} dot={{ r: 4 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <aside className="profile-notes">
          <div><span>Scope 3 boundary</span><p>{brand.scope3Boundary}</p></div>
          <div><span>Comparability</span><p>{brand.comparability}</p></div>
          <div><span>Source</span><p><a href={brand.sourceUrl} target="_blank" rel="noreferrer">{brand.source} ↗</a></p></div>
        </aside>
      </section>

      <section className="profile-section">
        <div className="profile-section-head"><h2>Year-by-year data</h2><p>Market-based Scope 2 where available.</p></div>
        <div className="data-table-wrap">
          <table className="data-table">
            <thead><tr><th>Year</th><th>Scope 1</th><th>Scope 2 MB</th><th>Scope 3</th><th>Total S1+2</th><th>Total GHG</th></tr></thead>
            <tbody>{brand.history.map((row) => <tr key={row.year}><td>{row.year}</td><td>{fmt(row.s1)}</td><td>{fmt(row.s2)}</td><td>{fmt(row.s3)}</td><td>{fmt(total12(row))}</td><td>{fmt(totalAll(row))}</td></tr>)}</tbody>
          </table>
        </div>
      </section>
    </main>
  )
}

export default function App() {
  const [filter, setFilter] = useState('All')
  const [selectedBrandId, setSelectedBrandId] = useState(null)
  const categories = ['All', 'Fast Fashion', 'Sportswear', 'Luxury']
  const visibleBrands = filter === 'All' ? BRANDS : BRANDS.filter((b) => b.category === filter)
  const selectedBrand = useMemo(() => BRANDS.find((b) => b.id === selectedBrandId), [selectedBrandId])

  if (selectedBrand) {
    return <div className="page"><header className="masthead"><div className="masthead-inner"><button className="brand-home" onClick={() => setSelectedBrandId(null)}>MA</button><nav className="masthead-nav"><button onClick={() => setSelectedBrandId(null)}>Database</button><a href="#methodology">Methodology</a></nav></div></header><BrandProfile brand={selectedBrand} onBack={() => setSelectedBrandId(null)} /><footer className="footer"><span>Moda Analytics · independent, unsponsored.</span><span>Data sourced from official corporate reports.</span></footer></div>
  }

  return (
    <div className="page">
      <header className="masthead">
        <div className="masthead-inner">
          <div className="masthead-mark">MA</div>
          <nav className="masthead-nav"><a href="#database">Database</a><a href="#insights">Insights</a><a href="#methodology">Methodology</a></nav>
        </div>
      </header>

      <main>
        <section className="hero">
          <p className="eyebrow"><span className="dot" /> Updated July 2026 · {BRANDS.length} brands · 2023–2024 core data</p>
          <h1>Fashion&rsquo;s carbon<br />footprint, <em>itemised.</em></h1>
          <p className="hero-dek">Moda Analytics tracks Scope 1, 2 and 3 emissions across fast fashion, sportswear and luxury, sourced from official corporate disclosures. Reporting differences and estimates are explicitly flagged.</p>
          <div className="hero-actions"><a className="btn btn-primary" href="#database">Explore the database</a><a className="btn btn-ghost" href="#methodology">Read the methodology</a></div>
        </section>

        <section className="stat-strip">
          <div className="stat"><span className="stat-num">{BRANDS.length}</span><span className="stat-label">brands with complete profile data</span></div>
          <div className="stat"><span className="stat-num">2+</span><span className="stat-label">years of core comparable data</span></div>
          <div className="stat"><span className="stat-num">3</span><span className="stat-label">fashion segments covered</span></div>
          <div className="stat"><span className="stat-num">100%</span><span className="stat-label">source-linked brand profiles</span></div>
        </section>

        <section className="section" id="database">
          <div className="section-head"><h2>The database</h2><p>Click a brand to open its emissions profile, reporting basis and source notes.</p></div>
          <div className="filters" role="tablist" aria-label="Filter brands by category">
            {categories.map((c) => <button key={c} role="tab" aria-selected={filter === c} className={`filter-btn ${filter === c ? 'is-active' : ''}`} onClick={() => setFilter(c)}>{c}</button>)}
          </div>
          <div className="label-grid">{visibleBrands.map((b) => <BrandLabel brand={b} key={b.id} onOpen={setSelectedBrandId} />)}</div>
        </section>

        <section className="section section-alt">
          <div className="section-head"><h2>Reported Scope 3 emissions by brand · 2024</h2><p>Company-reported Scope 3 totals. Reporting boundaries differ by brand, so use the profile caveats before making direct comparisons.</p></div>
          <Legend />
          <ScopeChart brands={BRANDS} />
          <p className="chart-note">Shein and Inditex include use-phase emissions in the Scope 3 totals currently captured. Other brand boundaries are being audited for standardisation.</p>
        </section>

        <section className="section" id="insights">
          <div className="section-head"><h2>Key insights</h2><p>What the current numbers actually show.</p></div>
          <div className="insight-grid">{INSIGHTS.map((item) => <article className="insight" key={item.mark}><span className="insight-mark">{item.mark}</span><div><h3>{item.title}</h3><p>{item.body}</p></div></article>)}</div>
        </section>

        <section className="section section-alt" id="methodology">
          <div className="method-card"><h2>How this data is compiled</h2><p>Every figure is traced to official annual reports, sustainability disclosures or corporate climate reporting. Scope 2 is market-based where available. Fiscal-year reporters are labelled individually, and Scope 3 boundary differences are surfaced rather than hidden.</p><a className="btn btn-primary" href="#database">Explore brand profiles</a></div>
        </section>
      </main>
      <footer className="footer"><span>Moda Analytics · independent, unsponsored.</span><span>Data sourced from official corporate reports.</span></footer>
    </div>
  )
}
