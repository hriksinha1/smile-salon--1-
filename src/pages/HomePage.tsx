import { ArrowRight, Sparkles } from 'lucide-react'
import Picture from '../components/Picture'
import { Button, CTASection, FAQAccordion, SectionHeading, ServiceCard } from '../components/Shared'
import { galleryIds } from '../data/images'
import { services } from '../data/services'
import { faqs, site, testimonials, whyUs } from '../data/site'

const wa = site.whatsapp ? `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(site.enquiryMessage)}` : null

export default function HomePage() {
  return (
    <>
      <section className="section hero-shell">
        <div className="container hero-grid">
          <div>
            {site.area ? <p className="eyebrow">Salon · {site.area}</p> : null}
            <h1 className="display">
              Hair and beauty, <span className="display-accent">with a smile.</span>
            </h1>
            <p className="lead">
              Explore service categories, view recent work and contact the salon to enquire about an appointment.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button to="/contact" variant="primary">
                Enquire about an appointment
              </Button>
              <Button to="/services" variant="secondary">
                Explore services
              </Button>
            </div>
          </div>

          <div className="hero-image-grid" aria-label="Salon imagery">
            <Picture id="hero-salon" className="hero-card hero-card-tall" />
            <Picture id="hero-salon-2" className="hero-card hero-card-short" />
          </div>
        </div>
      </section>

      <section className="trust-band">
        <div className="container trust-row" aria-label="Highlights">
          <span>Hair and beauty services</span>
          <span>Enquire by message or call</span>
          <span>See recent work on Instagram</span>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="What to enquire about"
            title="Thoughtful salon care, from cut to finish."
            intro="The salon’s broad categories are listed here while the exact menu is confirmed directly with the team."
          />
          <div className="card-grid services-grid mt-10">
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                description={service.description}
                imageId={service.imageId}
                actionText={`Enquire about ${service.title.toLowerCase()}`}
                actionTo="/contact"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container about-preview-grid">
          <Picture id="salon-interior" className="about-preview-image" />
          <div>
            <SectionHeading
              eyebrow="About the salon"
              title="A welcoming space for hair and beauty care."
              intro="Smile Hair and Beauty is a hair and beauty salon focused on a relaxed, polished experience. The best way to understand the atmosphere is to visit the salon’s Instagram and Facebook pages before you enquire."
            />
            <div className="mt-6 flex flex-wrap gap-3">
              <Button to="/about" variant="primary">
                Learn more
              </Button>
              <Button to="/gallery" variant="secondary">
                View the gallery
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Recent work"
            title="A look at recent salon moments."
            intro="Temporary images are shown here while the salon updates its real portfolio."
          />
          <div className="gallery-preview-grid mt-10">
            {galleryIds.slice(0, 6).map((id, index) => (
              <div key={id} className={`gallery-preview-item item-${index + 1}`}>
                <Picture id={id} className="gallery-preview-image" />
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Button to="/gallery" variant="secondary">
              View full gallery
            </Button>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <SectionHeading eyebrow="Why enquire" title="Simple, honest next steps." />
          <div className="card-grid reasons-grid mt-10">
            {whyUs.map((item) => (
              <div key={item.title} className="info-card">
                <Sparkles size={20} className="icon-accent" />
                <h3 className="h3">{item.title}</h3>
                <p className="body-copy">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {testimonials.length > 0 ? (
        <section className="section">
          <div className="container">
            <SectionHeading eyebrow="Testimonials" title="What clients say" />
            <div className="card-grid testimonials-grid mt-10">
              {testimonials.map((item) => (
                <blockquote key={item.name} className="quote-card">
                  <p>“{item.quote}”</p>
                  <footer>{item.name}</footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <CTASection
        eyebrow="Start the conversation"
        title="Ready when you are."
        intro="Tell the salon which service you’re interested in and your preferred day. Nothing is booked until the team replies."
      >
        {wa ? (
          <Button href={wa} target="_blank" rel="noreferrer" variant="primary">
            WhatsApp us
          </Button>
        ) : null}
        <Button to="/contact" variant="secondary">
          See contact details
        </Button>
      </CTASection>

      <section className="section faq-section">
        <div className="container faq-wrap">
          <SectionHeading eyebrow="Good to know" title="Helpful answers before you enquire." />
          <FAQAccordion items={faqs} />
        </div>
      </section>
    </>
  )
}
