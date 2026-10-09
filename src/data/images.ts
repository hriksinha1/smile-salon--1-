export type ImageMeta = {
  id: string
  src: string
  srcSet?: string
  width: number
  height: number
  alt: string
  objectPosition?: string
  kind: 'temporary' | 'real'
  credit?: string
}

// Temporary photos are clearly marked as temporary and should eventually be replaced with salon-owned work.
export const images: Record<string, ImageMeta> = {
  'hero-salon': {
    id: 'hero-salon',
    src: '/images/hero/hero-salon.webp',
    srcSet: '/images/hero/hero-salon.webp 800w, /images/hero/hero-salon@2x.webp 1600w',
    width: 1200,
    height: 1600,
    alt: 'Temporary image of a woman having her hair styled in a studio.',
    objectPosition: 'center',
    kind: 'temporary',
    credit: 'Unsplash: Jasmine',
  },
  'hero-salon-2': {
    id: 'hero-salon-2',
    src: '/images/hero/hero-salon-2.webp',
    srcSet: '/images/hero/hero-salon-2.webp 800w, /images/hero/hero-salon-2@2x.webp 1600w',
    width: 800,
    height: 1200,
    alt: 'Temporary image of beauty tools and salon styling products.',
    objectPosition: 'center',
    kind: 'temporary',
    credit: 'Unsplash: Mikhail Nilov',
  },
  'service-hair': {
    id: 'service-hair',
    src: '/images/services/service-hair.webp',
    srcSet: '/images/services/service-hair.webp 800w, /images/services/service-hair@2x.webp 1200w',
    width: 1200,
    height: 900,
    alt: 'Temporary image of a stylist working on a client’s hair.',
    objectPosition: 'center',
    kind: 'temporary',
    credit: 'Unsplash: Karolina Grabowska',
  },
  'service-beauty': {
    id: 'service-beauty',
    src: '/images/services/service-beauty.webp',
    srcSet: '/images/services/service-beauty.webp 800w, /images/services/service-beauty@2x.webp 1200w',
    width: 1200,
    height: 900,
    alt: 'Temporary image of a beauty treatment and makeup styling session.',
    objectPosition: 'center',
    kind: 'temporary',
    credit: 'Unsplash: Maria Orlova',
  },
  'salon-interior': {
    id: 'salon-interior',
    src: '/images/about/salon-interior.webp',
    srcSet: '/images/about/salon-interior.webp 800w, /images/about/salon-interior@2x.webp 1200w',
    width: 1200,
    height: 1600,
    alt: 'Temporary image of an elegant salon interior.',
    objectPosition: 'center',
    kind: 'temporary',
    credit: 'Unsplash: Jp Valery',
  },
  'gallery-01': {
    id: 'gallery-01',
    src: '/images/gallery/gallery-01.webp',
    srcSet: '/images/gallery/gallery-01.webp 800w, /images/gallery/gallery-01@2x.webp 1200w',
    width: 900,
    height: 1200,
    alt: 'Temporary gallery image showing a woman with styled hair.',
    objectPosition: 'center',
    kind: 'temporary',
    credit: 'Unsplash: Alesia Kazantceva',
  },
  'gallery-02': {
    id: 'gallery-02',
    src: '/images/gallery/gallery-02.webp',
    srcSet: '/images/gallery/gallery-02.webp 800w, /images/gallery/gallery-02@2x.webp 1200w',
    width: 1000,
    height: 1000,
    alt: 'Temporary gallery image of a salon styling session and product detail.',
    objectPosition: 'center',
    kind: 'temporary',
    credit: 'Unsplash: Christina',
  },
  'gallery-03': {
    id: 'gallery-03',
    src: '/images/gallery/gallery-03.webp',
    srcSet: '/images/gallery/gallery-03.webp 800w, /images/gallery/gallery-03@2x.webp 1200w',
    width: 900,
    height: 1200,
    alt: 'Temporary gallery image of a finished beauty hairstyle.',
    objectPosition: 'center',
    kind: 'temporary',
    credit: 'Unsplash: Emma Bauso',
  },
  'gallery-04': {
    id: 'gallery-04',
    src: '/images/gallery/gallery-04.webp',
    srcSet: '/images/gallery/gallery-04.webp 800w, /images/gallery/gallery-04@2x.webp 1200w',
    width: 1000,
    height: 1000,
    alt: 'Temporary gallery square image of salon beauty details.',
    objectPosition: 'center',
    kind: 'temporary',
    credit: 'Unsplash: Alina Vilchenko',
  },
  'gallery-05': {
    id: 'gallery-05',
    src: '/images/gallery/gallery-05.webp',
    srcSet: '/images/gallery/gallery-05.webp 800w, /images/gallery/gallery-05@2x.webp 1200w',
    width: 900,
    height: 1200,
    alt: 'Temporary gallery image of a makeup and beauty styling session.',
    objectPosition: 'center',
    kind: 'temporary',
    credit: 'Unsplash: Frankie',
  },
  'gallery-06': {
    id: 'gallery-06',
    src: '/images/gallery/gallery-06.webp',
    srcSet: '/images/gallery/gallery-06.webp 800w, /images/gallery/gallery-06@2x.webp 1200w',
    width: 1200,
    height: 900,
    alt: 'Temporary gallery image of salon tools and stylists working together.',
    objectPosition: 'center',
    kind: 'temporary',
    credit: 'Unsplash: Goh Rhyyan',
  },
}

export const galleryIds = ['gallery-01', 'gallery-02', 'gallery-03', 'gallery-04', 'gallery-05', 'gallery-06']
