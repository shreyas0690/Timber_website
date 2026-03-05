import { useState } from 'react'

const products = [
  {
    name: 'Wooden Crate',
    image: '/images/Our Product/Wooden_Crate.jpeg',
    desc: 'Durable wooden crates designed for safe packaging and transport of industrial goods. Custom sizes available on request.'
  },
  {
    name: 'Wooden Pine Pallet',
    image: '/images/Our Product/Wooden_Pine_Pallet.jpeg',
    desc: 'High-quality pine pallets built for heavy-duty logistics and warehousing. Reliable and long-lasting.'
  },
  {
    name: 'Radiata Pine Wood',
    image: '/images/Our Product/Raidiate_Pine_Wood.jpg',
    desc: 'Premium imported Radiata Pine timber, ideal for construction, furniture, and industrial applications.'
  },
  {
    name: 'Jungle Wood & Mix Wood',
    image: '/images/Our Product/Jungle_Wood.jpeg',
    desc: 'A versatile selection of jungle wood and mixed hardwood species, suitable for heavy-duty structural and commercial use.'
  },
]

function QuickView({ product, onClose, onQuoteClick }) {
  return (
    <div className="qv" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="qv__card">
        <button className="qv__close" onClick={onClose}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6L6 18M6 6l12 12"/>
          </svg>
        </button>
        <div className="qv__img">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="qv__info">
          <h3 className="qv__title">{product.name}</h3>
          <p className="qv__desc">{product.desc}</p>
          <button className="qv__add" onClick={() => { onQuoteClick(); onClose() }}>
            Request A Quote
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default function Products({ onQuoteClick }) {
  const [hovered, setHovered] = useState(null)
  const [quickView, setQuickView] = useState(null)

  return (
    <section id="products" className="prod">
      <div className="container">
        {/* Header */}
        <div className="prod__header">
          <div>
            <span className="section-tag">Products</span>
            <h2 className="section-title">Our Products</h2>
          </div>
        </div>

        {/* Products grid */}
        <div className="prod__grid">
          {products.map((product, i) => (
            <div
              key={i}
              className={`prod__card ${hovered !== null && hovered !== i ? 'prod__card--dim' : ''}`}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Image */}
              <div className="prod__card-img">
                <img src={product.image} alt={product.name} loading="lazy" />

                {/* Hover actions */}
                <div className="prod__actions">
                  <button className="prod__action-btn" onClick={() => setQuickView(i)} aria-label="Quick view">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>
                    </svg>
                  </button>
                </div>

                {/* Request A Quote overlay */}
                <button
                  className="prod__add-btn"
                  onClick={() => onQuoteClick && onQuoteClick()}
                >
                  Request A Quote
                </button>
              </div>

              {/* Body */}
              <div className="prod__card-body">
                <h3 className="prod__card-title">{product.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick View Modal */}
      {quickView !== null && (
        <QuickView product={products[quickView]} onClose={() => setQuickView(null)} onQuoteClick={onQuoteClick} />
      )}
    </section>
  )
}
