import { useState } from 'react'

const services = [
  {
    num: '01',
    title: 'Timber Supply',
    desc: 'We supply premium pine timber sourced through reliable channels, ensuring uniform grading and regular availability for bulk and ongoing requirements.',
    image: '/images/service-logging.png',
    features: ['Premium Pine Timber', 'Uniform Grading', 'Bulk Availability']
  },
  {
    num: '02',
    title: 'Sawmill & Custom Sizes',
    desc: 'With in-house sawmill facilities, we cut timber into customized sizes including planks and sleepers as per client specifications.',
    image: '/images/hero-sawmill.png',
    features: ['In-House Sawmill', 'Custom Planks & Sleepers', 'Client-Spec Cutting']
  },
  {
    num: '03',
    title: 'Packaging & Delivery',
    desc: 'We also provide wooden packaging solutions and coordinate bulk logistics to ensure safe and timely delivery across India.',
    image: '/images/hero-packaging.jpg',
    features: ['Wooden Packaging', 'Bulk Logistics', 'Pan-India Delivery']
  },
]

export default function Services() {
  const [active, setActive] = useState(0)

  return (
    <section id="services" className="srv">
      {/* Dark background */}
      <div className="srv__bg">
        {services.map((s, i) => (
          <div
            key={i}
            className={`srv__bg-img ${i === active ? 'srv__bg-img--active' : ''}`}
            style={{ backgroundImage: `url(${s.image})` }}
          />
        ))}
        <div className="srv__bg-overlay" />
      </div>

      <div className="container srv__container">
        {/* Left - heading & tabs */}
        <div className="srv__left">
          <span className="section-tag srv__tag">What We Do</span>
          <h2 className="srv__title">Expert Timber<br/>Solutions For<br/>Every Need</h2>
          <p className="srv__subtitle">
            Backed by over a century of generational experience in the timber business, S.A Global Venture delivers premium pine, jungle wood, and hardwood solutions with consistent quality, accurate grading, and bulk availability across India.
          </p>

          {/* Service tabs */}
          <div className="srv__tabs">
            {services.map((s, i) => (
              <button
                key={i}
                className={`srv__tab ${i === active ? 'srv__tab--active' : ''}`}
                onClick={() => setActive(i)}
              >
                <span className="srv__tab-num">{s.num}</span>
                <span className="srv__tab-title">{s.title}</span>
                <span className="srv__tab-arrow">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Right - active service detail */}
        <div className="srv__right">
          {services.map((s, i) => (
            <div key={i} className={`srv__detail ${i === active ? 'srv__detail--active' : ''}`}>
              <div className="srv__detail-img">
                <img src={s.image} alt={s.title} loading="lazy" />
                <div className="srv__detail-num">{s.num}</div>
              </div>
              <div className="srv__detail-body">
                <h3 className="srv__detail-title">{s.title}</h3>
                <p className="srv__detail-desc">{s.desc}</p>
                <div className="srv__detail-features">
                  {s.features.map((f, fi) => (
                    <span key={fi} className="srv__detail-feature">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                      {f}
                    </span>
                  ))}
                </div>
                <a href="#" className="srv__detail-link">
                  Learn More
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17L17 7M17 7H7M17 7v10"/></svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
