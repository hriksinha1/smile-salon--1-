import { useState } from 'react'
import { Menu, X, ChevronDown, Instagram, Facebook, MapPin, Phone, MessageCircle } from 'lucide-react'
import { site, nav, services, faqs, whyUs } from './data/site'
import { galleryIds } from './data/images'
import Picture from './components/Picture'
import Lightbox from './components/Lightbox'

const wa = site.whatsapp ? `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(site.enquiryMessage)}` : null
const wrap = 'mx-auto w-full max-w-[1280px] px-5 sm:px-10'

function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-40 border-b border-espresso/10 bg-ivory/95 backdrop-blur">
      <div className={`${wrap} flex h-[72px] items-center justify-between`}>
        <a href="#top" className="font-display text-xl font-semibold sm:text-2xl">Smile <em className="font-normal text-berry">Hair &amp; Beauty</em></a>
        <nav aria-label="Main" className="hidden items-center gap-8 font-medium md:flex">
          {nav.map(([l, id]) => <a key={id} href={`#${id}`} className="hover:underline underline-offset-4">{l}</a>)}
          <a href="#enquire" className="btn bg-espresso text-ivory">Enquire now</a>
        </nav>
        <button className="grid size-12 place-items-center md:hidden" aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      </div>
      {open && (
        <nav id="mobile-menu" aria-label="Mobile" onKeyDown={e => e.key === 'Escape' && setOpen(false)} className="border-t border-espresso/10 bg-ivory md:hidden">
          <div className={`${wrap} flex flex-col py-2`}>
            {nav.map(([l, id]) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)} className="flex min-h-12 items-center text-lg font-medium">{l}</a>)}
            <a href="#enquire" onClick={() => setOpen(false)} className="btn my-3 bg-berry text-white">Enquire now</a>
          </div>
        </nav>
      )}
    </header>
  )
}

function Hero() {
  return (
    <section id="top" className={`${wrap} grid items-center gap-10 py-10 md:grid-cols-2 md:gap-16 md:py-16`}>
      <div>
        {site.area && <p className="mb-5 text-sm font-semibold uppercase tracking-[.14em] text-berry">Salon · {site.area}</p>}
        <h1 className="font-display text-[clamp(42px,6vw,84px)] font-normal leading-[1.02] tracking-[-.025em]">Hair and beauty, <em className="text-berry">with a smile.</em></h1>
        <p className="mb-9 mt-7 max-w-[460px] text-lg">Come in, tell us what you have in mind, and we’ll take it from there. Browse what we offer, then send an enquiry whenever suits you.</p>
        <div className="flex flex-wrap gap-3"><a href="#enquire" className="btn bg-berry text-white">Book an appointment</a><a href="#services" className="btn border-[1.5px] border-espresso">Explore services</a></div>
      </div>
      <div className="grid grid-cols-[3fr_2fr] items-end gap-3 sm:gap-4">
        <Picture id="hero-salon" eager round /><Picture id="hero-salon-2" eager />
      </div>
    </section>
  )
}

function Trust() {
  const items = ['Hair and beauty services', 'Enquire by message or call', 'See recent work on Instagram']
  return <section aria-label="At a glance" className="bg-espresso py-7 text-ivory"><ul className={`${wrap} flex flex-col gap-2 font-medium sm:flex-row sm:justify-between`}>{items.map(i => <li key={i}>{i}</li>)}</ul></section>
}

function Services() {
  return (
    <section id="services" className={`${wrap} py-20 md:py-28`}>
      <div className="mb-12 flex flex-wrap items-end justify-between gap-6"><h2 className="h2 max-w-[560px]">What you can enquire about</h2><p className="max-w-[420px]">Broad categories for now. Individual services and prices appear once the salon confirms its menu.</p></div>
      <div className="grid gap-8 sm:grid-cols-2">
        {services.map(s => (
          <article key={s.id} className="border-t-2 border-espresso pt-5"><Picture id={s.img} className="mb-5" />
            <h3 className="font-display text-2xl font-semibold">{s.title}</h3><p className="mb-3 mt-2">{s.text}</p>
            <a href="#enquire" className="inline-flex min-h-11 items-center font-semibold text-berry underline-offset-4 hover:underline">Enquire about {s.title.toLowerCase()} →</a>
          </article>))}
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="bg-blush py-20 md:py-28">
      <div className={`${wrap} grid items-center gap-10 md:grid-cols-[5fr_6fr] md:gap-16`}>
        <Picture id="salon-interior" />
        <div><h2 className="h2 mb-6">A salon you’ll want to come back to</h2>
          <p className="mb-4">Smile Hair and Beauty is a hair and beauty salon. The team’s own story will be added here once the salon shares it.</p>
          <p>Until then, the best way to get a feel for the place is its Instagram and Facebook pages.</p></div>
      </div>
    </section>
  )
}

function Gallery() {
  const [open, setOpen] = useState<string | null>(null)
  return (
    <section id="gallery" className={`${wrap} py-20 md:py-28`}>
      <h2 className="h2 mb-3">Recent work</h2>
      <p className="mb-10 max-w-[560px] text-sm">Placeholder artwork, not the salon’s real work. Real photos replace these when supplied.</p>
      <ul className="columns-2 gap-3 sm:gap-4 lg:columns-3">
        {galleryIds.map((id, i) => (
          <li key={id} className="mb-3 break-inside-avoid sm:mb-4">
            <button className="block w-full overflow-hidden transition-opacity hover:opacity-90" aria-label={`Open gallery image ${i + 1}`} onClick={() => setOpen(id)}><Picture id={id} /></button>
          </li>))}
      </ul>
      {open && <Lightbox id={open} onClose={() => setOpen(null)} />}
    </section>
  )
}

function Why() {
  return (
    <section className="bg-espresso py-20 text-ivory"><div className={wrap}>
      <h2 className="h2 mb-10">Why people choose us</h2>
      <div className="grid gap-10 sm:grid-cols-3">{whyUs.map(w => <div key={w.t}><h3 className="mb-2 text-xl font-semibold text-champagne">{w.t}</h3><p>{w.d}</p></div>)}</div>
    </div></section>
  )
}

function Enquiry() {
  return (
    <section id="enquire" className={`${wrap} py-24 md:py-32`}>
      <h2 className="h2 mb-5 max-w-[760px] text-[clamp(36px,5vw,72px)]">Ready when you are. <em className="text-berry">Just say hello.</em></h2>
      <p className="mb-8 max-w-[520px]">Tell the salon which service you’re interested in and your preferred day. They’ll reply to confirm; nothing is booked until they do.</p>
      <div className="flex flex-wrap gap-3">
        {wa && <a href={wa} className="btn bg-berry text-white" target="_blank" rel="noreferrer">WhatsApp us</a>}
        {site.phone && <a href={`tel:${site.phone}`} className="btn border-[1.5px] border-espresso">Call the salon</a>}
        {!wa && !site.phone && <a href="#contact" className="btn bg-berry text-white">See how to reach us</a>}
      </div>
    </section>
  )
}

function FAQ() {
  const [open, setOpen] = useState<number | null>(0)
  return (
    <section id="faq" className="bg-blush py-20"><div className="mx-auto max-w-[820px] px-5 sm:px-10">
      <h2 className="h2 mb-6 text-[clamp(30px,3.4vw,44px)]">Good to know</h2>
      <div className="border-b border-espresso">{faqs.map((f, i) => (
        <div key={f.q} className="border-t border-espresso">
          <h3><button id={`faq-b${i}`} aria-expanded={open === i} aria-controls={`faq-p${i}`} onClick={() => setOpen(open === i ? null : i)} className="flex min-h-14 w-full items-center justify-between gap-4 text-left text-lg font-semibold">{f.q}<ChevronDown className={`shrink-0 transition-transform ${open === i ? 'rotate-180' : ''}`} /></button></h3>
          <div id={`faq-p${i}`} role="region" aria-labelledby={`faq-b${i}`} hidden={open !== i}><p className="pb-4">{f.a}</p></div>
        </div>))}</div>
    </div></section>
  )
}

function Footer() {
  const h = 'mb-3 text-sm font-semibold uppercase tracking-[.12em] text-champagne'
  return (
    <footer id="contact" className="bg-espresso pb-10 pt-16 text-ivory">
      <div className={`${wrap} grid gap-10 sm:grid-cols-2 lg:grid-cols-4`}>
        <div><p className="mb-3 font-display text-2xl font-semibold">{site.name}</p><p>Hair and beauty salon.</p></div>
        <div><h2 className={h}>Visit</h2>
          {site.address && <p className="mb-2 flex gap-2"><MapPin className="mt-1 size-4 shrink-0" />{site.address}</p>}
          <a href={site.mapsUrl} className="inline-flex min-h-11 items-center underline" target="_blank" rel="noreferrer">Find us on Google Maps</a></div>
        <div><h2 className={h}>Contact</h2>
          {wa && <a href={wa} className="flex min-h-11 items-center gap-2 underline"><MessageCircle className="size-4" />WhatsApp</a>}
          {site.phone && <a href={`tel:${site.phone}`} className="flex min-h-11 items-center gap-2 underline"><Phone className="size-4" />{site.phone}</a>}
          {site.hours && <ul className="mt-2">{site.hours.map(x => <li key={x}>{x}</li>)}</ul>}
          {!wa && !site.phone && <p>Message the salon on Instagram or Facebook.</p>}</div>
        <div><h2 className={h}>Follow</h2>
          <a href={site.instagram} className="flex min-h-11 items-center gap-2 underline" target="_blank" rel="noreferrer"><Instagram className="size-4" />Instagram</a>
          <a href={site.facebook} className="flex min-h-11 items-center gap-2 underline" target="_blank" rel="noreferrer"><Facebook className="size-4" />Facebook</a></div>
      </div>
      <p className={`${wrap} mt-12 text-sm opacity-80`}>© {new Date().getFullYear()} {site.name}</p>
    </footer>
  )
}

export default function App() {
  return (<><a href="#services" className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:bg-ivory focus:p-3">Skip to content</a><Header /><main><Hero /><Trust /><Services /><About /><Gallery /><Why /><Enquiry /><FAQ /></main><Footer /></>)
}
