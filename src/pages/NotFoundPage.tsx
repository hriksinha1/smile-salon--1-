import { Button, PageHero } from '../components/Shared'

export default function NotFoundPage() {
  return (
    <PageHero
      eyebrow="Page not found"
      title="This page isn’t here right now."
      intro="Try heading back to the homepage or explore the main salon pages below."
    >
      <Button to="/" variant="primary">
        Back to home
      </Button>
      <Button to="/services" variant="secondary">
        View services
      </Button>
    </PageHero>
  )
}
