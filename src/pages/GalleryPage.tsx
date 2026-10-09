import { useState } from 'react'
import Lightbox from '../components/Lightbox'
import Picture from '../components/Picture'
import { Button, PageHero, SectionHeading } from '../components/Shared'
import { galleryIds } from '../data/images'

export default function GalleryPage() {
  const [selectedId, setSelectedId] = useState<string | null>(null)

  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Recent salon moments and inspiration."
        intro="Temporary images. Real photos of our work will replace these."
      >
        <Button to="/contact" variant="primary">
          Enquire about a service
        </Button>
      </PageHero>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Portfolio"
            title="A varied look at hair and beauty inspiration."
            intro="Use the gallery to browse the types of styling, treatment and editorial visuals that may inspire your next enquiry."
          />
          <div className="gallery-grid mt-10">
            {galleryIds.map((id, index) => (
              <button
                key={id}
                type="button"
                className={`gallery-card gallery-card-${index + 1}`}
                onClick={() => setSelectedId(id)}
                aria-label={`Open gallery image ${index + 1}`}
              >
                <Picture id={id} className="gallery-image" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {selectedId ? <Lightbox id={selectedId} onClose={() => setSelectedId(null)} /> : null}
    </>
  )
}
