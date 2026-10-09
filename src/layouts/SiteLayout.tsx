import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { NavLink, Outlet, useLocation } from 'react-router-dom'
import { site, nav } from '../data/site'

export default function SiteLayout() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setOpen(false)
    const main = document.querySelector('main')
    const h1 = document.querySelector('h1')

    if (location.hash) {
      const id = location.hash.replace('#', '')
      const next = document.getElementById(id)
      if (next) {
        const offset = 96
        const top = next.getBoundingClientRect().top + window.scrollY - offset
        window.scrollTo({ top, behavior: 'smooth' })
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
    }

    if (main) {
      main.setAttribute('tabindex', '-1')
      main.focus()
    } else if (h1) {
      h1.focus()
    }
  }, [location.pathname, location.hash])

  return (
    <>
      <a href="#page-main" className="skip-link">
        Skip to content
      </a>

      <header className="site-header">
        <div className="container nav-shell">
          <NavLink to="/" className="brand-link" end>
            Smile <span>Hair &amp; Beauty</span>
          </NavLink>

          <nav aria-label="Main navigation" className="main-nav">
            {nav.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
              >
                {item.label}
              </NavLink>
            ))}
            <NavLink to="/contact" className="btn btn-primary nav-cta">
              Enquire now
            </NavLink>
          </nav>

          <button
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="menu-button"
            onClick={() => setOpen((current) => !current)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {open ? (
          <nav id="mobile-menu" aria-label="Mobile navigation" className="mobile-nav">
            <div className="container mobile-nav-inner">
              {nav.map((item) => (
                <NavLink key={item.to} to={item.to} className="mobile-link" onClick={() => setOpen(false)}>
                  {item.label}
                </NavLink>
              ))}
              <NavLink to="/contact" className="btn btn-primary mobile-cta" onClick={() => setOpen(false)}>
                Enquire now
              </NavLink>
            </div>
          </nav>
        ) : null}
      </header>

      <main id="page-main" className="site-main">
        <Outlet />
      </main>

      <footer id="contact" className="site-footer">
        <div className="container footer-grid">
          <div>
            <p className="brand-footer">{site.name}</p>
            <p className="footer-copy">Hair and beauty salon.</p>
          </div>

          <div>
            <h2 className="footer-title">Visit</h2>
            {site.address ? <p className="footer-copy">{site.address}</p> : null}
            <a href={site.mapsUrl} className="inline-link" target="_blank" rel="noreferrer">
              Find us on Google Maps
            </a>
          </div>

          <div>
            <h2 className="footer-title">Contact</h2>
            {site.whatsapp ? (
              <a href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(site.enquiryMessage)}`} className="inline-link" target="_blank" rel="noreferrer">
                WhatsApp the salon
              </a>
            ) : null}
            {site.phone ? (
              <a href={`tel:${site.phone}`} className="inline-link">
                {site.phone}
              </a>
            ) : (
              <p className="footer-copy">Message the salon on Instagram or Facebook.</p>
            )}
            {site.hours && site.hours.length > 0 ? (
              <ul className="detail-list footer-hours">
                {site.hours.map((entry) => (
                  <li key={entry}>{entry}</li>
                ))}
              </ul>
            ) : null}
          </div>

          <div>
            <h2 className="footer-title">Follow</h2>
            <a href={site.instagram} className="inline-link" target="_blank" rel="noreferrer">
              Instagram
            </a>
            <a href={site.facebook} className="inline-link" target="_blank" rel="noreferrer">
              Facebook
            </a>
          </div>
        </div>

        <p className="container footer-meta">© {new Date().getFullYear()} {site.name}</p>
      </footer>
    </>
  )
}
