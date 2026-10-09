import { Button, FAQAccordion, PageHero, SectionHeading, ServiceCard } from '../components/Shared'
import { faqs } from '../data/site'
import { services } from '../data/services'

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Hair and beauty services, tailored to what you want."
        intro="The salon offers a broad range of hair and beauty services. If you’d like to discuss a treatment, use the contact options below and the team can confirm the details with you."
      >
        <Button to="/contact" variant="primary">
          Enquire about a service
        </Button>
      </PageHero>

      <section className="section">
        <div className="container">
          <div className="card-grid services-grid">
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

      <section className="section section-alt faq-section">
        <div className="container faq-wrap">
          <SectionHeading eyebrow="Frequently asked" title="A few quick answers." />
          <FAQAccordion items={faqs} />
        </div>
      </section>
    </>
  )
}
