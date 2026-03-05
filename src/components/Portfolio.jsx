import { useState } from 'react'

const projects = [
  {
    title: 'Pine Timber Supply',
    image: '/images/Built_for_Industry/PineTimberSupply.jpeg',
    category: 'TIMBER SUPPLY',
    desc: 'Premium imported pine timber available in bulk with accurate CFT measurement and consistent grading for traders, builders, and manufacturers across India.',
    num: '01'
  },
  {
    title: 'Jungle Wood & Hardwood',
    image: '/images/Built_for_Industry/Jungle-woods.jpeg',
    category: 'TIMBER SUPPLY',
    desc: 'Reliable supply of jungle wood and hardwood suitable for construction, furniture, and industrial applications with dependable availability.',
    num: '02'
  },
  {
    title: 'Sawmill & Custom Cutting',
    image: '/images/Built_for_Industry/Sawmil.jpeg',
    category: 'SAWMILL & CUTTING',
    desc: 'Precision sawmill services delivering customized timber sizes, planks, and sleepers according to project and packaging requirements.',
    num: '03'
  },
  {
    title: 'Wooden Packaging Solutions',
    image: '/images/Built_for_Industry/Wooden_packeging.jpeg',
    category: 'WOODEN PACKAGING',
    desc: 'Strong wooden pallets, crates, and industrial packaging materials designed for machinery transport, exports, and heavy logistics.',
    num: '04'
  },
]

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('ALL')
  const filters = ['ALL', 'TIMBER SUPPLY', 'SAWMILL & CUTTING', 'WOODEN PACKAGING']

  const filtered = activeFilter === 'ALL'
    ? projects
    : projects.filter(p => p.category === activeFilter)

  return (
    <section id="portfolio" className="portfolio2">
      <div className="container">
        {/* Header row */}
        <div className="portfolio2__header">
          <div className="portfolio2__header-left">
            <span className="section-tag">OUR CAPABILITIES</span>
            <h2 className="section-title">Built for Industry.<br/>Delivered with Reliability.</h2>
          </div>
          <div className="portfolio2__header-right">
            <p className="portfolio2__intro">
              From timber sourcing and in-house sawmill processing to wooden packaging and bulk logistics, we support industrial and commercial requirements with consistent quality and dependable supply.
            </p>
            <div className="portfolio2__filters">
              {filters.map((f) => (
                <button
                  key={f}
                  className={`portfolio2__filter ${activeFilter === f ? 'portfolio2__filter--active' : ''}`}
                  onClick={() => setActiveFilter(f)}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Projects grid */}
        <div className="portfolio2__grid">
          {filtered.map((project, i) => (
            <div
              key={project.num}
              className={`portfolio2__item ${i === 0 && activeFilter === 'All' ? 'portfolio2__item--large' : ''}`}
            >
              <div className="portfolio2__card">
                <div className="portfolio2__card-img">
                  <img src={project.image} alt={project.title} loading="lazy" />
                </div>
                <div className="portfolio2__card-content">
                  <span className="portfolio2__card-num">{project.num}</span>
                  <div className="portfolio2__card-info">
                    <span className="portfolio2__card-cat">{project.category}</span>
                    <h3 className="portfolio2__card-title">{project.title}</h3>
                    <p className="portfolio2__card-desc">{project.desc}</p>
                  </div>
                  <a href="#" className="portfolio2__card-arrow" aria-label="View project">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M7 17L17 7M17 7H7M17 7v10"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="portfolio2__bottom">
          <div className="portfolio2__bottom-line" />
          <a href="#" className="portfolio2__view-all">
            View All Projects
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
        </div>
      </div>
    </section>
  )
}
