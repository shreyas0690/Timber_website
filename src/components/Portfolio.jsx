import { useState } from 'react'

const projects = [
  {
    title: 'Tree Removal',
    image: '/images/hero-forest.png',
    category: 'TIMBER SUPPLY',
    desc: 'Safe and efficient tree removal for residential & commercial properties.',
    num: '01'
  },
  {
    title: 'Timber Purchase',
    image: '/images/hero-timber.png',
    category: 'TIMBER SUPPLY',
    desc: 'Premium timber sourced from sustainably managed forests worldwide.',
    num: '02'
  },
  {
    title: 'Quality Logging',
    image: '/images/service-logging.png',
    category: 'SAWMILL & CUTTING',
    desc: 'Modern equipment with responsible and sustainable harvesting practices.',
    num: '03'
  },
  {
    title: 'Truck Shipping',
    image: '/images/hero-sawmill.png',
    category: 'LOGISTICS & DELIVERY',
    desc: 'Reliable nationwide delivery ensuring timber arrives in perfect condition.',
    num: '04'
  },
]

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('ALL')
  const filters = ['ALL', 'TIMBER SUPPLY', 'SAWMILL & CUTTING', 'WOODEN PACKAGING', 'LOGISTICS & DELIVERY']

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
