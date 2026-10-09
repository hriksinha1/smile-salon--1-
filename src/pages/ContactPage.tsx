import { Instagram, Facebook, MapPin, Phone, MessageCircle } from 'lucide-react'
import { Button, ContactLink, PageHero, SectionHeading } from '../components/Shared'
import { site } from '../data/site'

const whatsappUrl = site.whatsapp ? `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(site.enquiryMessage)}` : null

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Get in touch and ask about your next appointment."
        intro="Reach out in the way that suits you best. The salon can confirm availability and next steps before anything is booked."
        imageId="salon-interior"
      >
        {whatsappUrl ? (
          <Button href={whatsappUrl} target="_blank" rel="noreferrer" variant="primary">
            WhatsApp the salon
          </Button>
        ) : null}
      </PageHero>

      <section className="section">
        <div className="container contact-panel">
          <div>
            <SectionHeading eyebrow="How to enquire" title="Start with a message or a call." />
            <div className="stack-copy">
              <p>
                If you’re ready to ask about a service, send a message through WhatsApp, Instagram or Facebook. When phone and WhatsApp details are unavailable, the salon directs enquiries to social messaging instead of a fake booking form.
              </p>
            </div>
            <div className="contact-links mt-8">
              {whatsappUrl ? (
                <ContactLink href={whatsappUrl} label="WhatsApp the salon" type="message" />
              ) : null}
              {site.phone ? <ContactLink href={`tel:${site.phone}`} label={site.phone} type="phone" /> : null}
              {site.instagram ? <ContactLink href={site.instagram} label="Instagram" type="link" /> : null}
              {site.facebook ? <ContactLink href={site.facebook} label="Facebook" type="link" /> : null}
              {!site.phone && !whatsappUrl ? (
                <div className="contact-fallback">
                  <MessageCircle size={18} aria-hidden="true" />
                  <span>Message the salon on Instagram or Facebook instead.</span>
                </div>
              ) : null}
            </div>
          </div>

          <aside className="contact-card">
            {site.address ? (
              <div className="contact-item">
                <MapPin size={18} />
                <div>
                  <h3 className="h3">Visit</h3>
                  <p>{site.address}</p>
                  {site.mapsUrl ? (
                    <a href={site.mapsUrl} target="_blank" rel="noreferrer" className="inline-link">
                      Open Google Maps
                    </a>
                  ) : null}
                </div>
              </div>
            ) : null}

            {site.hours && site.hours.length > 0 ? (
              <div className="contact-item">
                <div>
                  <h3 className="h3">Hours</h3>
                  <ul className="detail-list">
                    {site.hours.map((entry) => (
                      <li key={entry}>{entry}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : null}

            {site.area ? (
              <div className="contact-item">
                <div>
                  <h3 className="h3">Area</h3>
                  <p>{site.area}</p>
                </div>
              </div>
            ) : null}
          </aside>
        </div>
      </section>
    </>
  )
}
