import { useState, type AnchorHTMLAttributes, type PropsWithChildren, type ReactNode } from 'react'
import { ChevronDown, MapPin, MessageCircle, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'
import Picture from './Picture'

export function Button({
  children,
  className = '',
  variant = 'primary',
  to,
  ...props
}: PropsWithChildren<{
  variant?: 'primary' | 'secondary' | 'ghost'
  to?: string
  className?: string
}> & AnchorHTMLAttributes<HTMLAnchorElement>) {
  const base = 'inline-flex items-center justify-center gap-2 rounded-sm border text-base font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--color-focus)] disabled:cursor-not-allowed disabled:opacity-50 min-h-[48px] px-6'
  const variants = {
    primary: 'border-transparent bg-[var(--color-berry)] text-[var(--color-ivory)] hover:bg-[var(--color-berry-strong)]',
    secondary: 'border-[1.5px] border-[var(--color-espresso)] bg-transparent text-[var(--color-espresso)] hover:bg-[var(--color-surface)]',
    ghost: 'border-transparent bg-transparent text-[var(--color-berry)] hover:bg-[var(--color-surface)]',
  }
  const merged = `${base} ${variants[variant]} ${className}`

  if (to) {
    return (
      <Link to={to} className={merged} {...props}>
        {children}
      </Link>
    )
  }

  return (
    <a className={merged} {...props}>
      {children}
    </a>
  )
}

export function SectionHeading({ eyebrow, title, intro }: { eyebrow?: string; title: string; intro?: string }) {
  return (
    <div className="section-heading">
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2 className="h2">{title}</h2>
      {intro ? <p className="section-intro">{intro}</p> : null}
    </div>
  )
}

export function PageHero({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow?: string
  title: string
  intro?: string
  children?: ReactNode
}) {
  return (
    <section className="section page-hero">
      <div className="container grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
          <h1 className="display">{title}</h1>
          {intro ? <p className="lead">{intro}</p> : null}
          {children ? <div className="mt-6 flex flex-wrap gap-3">{children}</div> : null}
        </div>
      </div>
    </section>
  )
}

export function ServiceCard({ title, description, imageId, actionText, actionTo }: {
  title: string
  description: string
  imageId: string
  actionText: string
  actionTo: string
}) {
  return (
    <article className="card card-service">
      <Picture id={imageId} className="card-media" />
      <div className="card-body">
        <h3 className="h3">{title}</h3>
        <p className="body-copy">{description}</p>
        <Button to={actionTo} variant="ghost" className="mt-2 px-0">
          {actionText}
        </Button>
      </div>
    </article>
  )
}

export function ImageTile({ id, className = '' }: { id: string; className?: string }) {
  return <Picture id={id} className={`gallery-item ${className}`} />
}

export function FAQAccordion({ items }: { items: Array<{ q: string; a: string }> }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  return (
    <div className="faq-list">
      {items.map((item, index) => {
        const isOpen = openIndex === index
        const buttonId = `faq-button-${index}`
        const panelId = `faq-panel-${index}`
        return (
          <div className="faq-item" key={item.q}>
            <h3>
              <button
                id={buttonId}
                type="button"
                className="faq-button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                <span>{item.q}</span>
                <ChevronDown className={isOpen ? 'faq-chevron faq-chevron-open' : 'faq-chevron'} />
              </button>
            </h3>
            <div id={panelId} role="region" aria-labelledby={buttonId} hidden={!isOpen}>
              <p className="faq-answer">{item.a}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export function ContactLink({
  href,
  label,
  type,
  className = '',
}: {
  href: string
  label: string
  type: 'location' | 'phone' | 'message' | 'link'
  className?: string
}) {
  const icons = {
    location: MapPin,
    phone: Phone,
    message: MessageCircle,
    link: MessageCircle,
  }
  const Icon = icons[type]
  return (
    <a href={href} className={`contact-link ${className}`} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noreferrer' : undefined}>
      <Icon aria-hidden="true" size={18} />
      <span>{label}</span>
    </a>
  )
}

export function CTASection({ eyebrow, title, intro, children }: { eyebrow?: string; title: string; intro?: string; children?: ReactNode }) {
  return (
    <section className="cta-band">
      <div className="container cta-inner">
        <div>
          {eyebrow ? <p className="eyebrow eyebrow-light">{eyebrow}</p> : null}
          <h2 className="h2 h2-light">{title}</h2>
          {intro ? <p className="cta-copy">{intro}</p> : null}
        </div>
        {children ? <div className="cta-actions">{children}</div> : null}
      </div>
    </section>
  )
}
