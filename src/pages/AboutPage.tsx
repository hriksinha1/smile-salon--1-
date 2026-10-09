import { Button, PageHero, SectionHeading } from '../components/Shared'
import Picture from '../components/Picture'

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Smile Hair and Beauty is a hair and beauty salon."
        intro="The space is designed to feel polished, relaxed and easy to visit. If you’re planning a service, it’s best to enquire first so the salon can help match you to the right appointment and treatment options."
      >
        <Button to="/services" variant="primary">
          Explore services
        </Button>
        <Button to="/gallery" variant="secondary">
          View recent work
        </Button>
      </PageHero>

      <section className="section">
        <div className="container about-grid">
          <div>
            <SectionHeading
              eyebrow="What to expect"
              title="A straightforward process, from first enquiry to visit."
            />
            <div className="stack-copy">
              <p>
                When you reach out, you can ask about the service or look you want to explore and confirm the best way to get in touch. The salon will reply using the contact options you prefer.
              </p>
              <p>
                Before you visit, it helps to check the salon’s social channels for recent work and current updates. If you’re unsure about a treatment, start with a message and the team can guide you next.
              </p>
              <p>
                Everyone is welcome to ask questions before booking, and the salon can advise on availability and next steps when they are able to reply.
              </p>
            </div>
          </div>
          <Picture id="salon-interior" className="about-side-image" />
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <SectionHeading eyebrow="Next steps" title="Find the right service, gallery or contact option." />
          <div className="action-row mt-8">
            <Button to="/services" variant="primary">Services</Button>
            <Button to="/gallery" variant="secondary">Gallery</Button>
            <Button to="/contact" variant="secondary">Contact</Button>
          </div>
        </div>
      </section>
    </>
  )
}
