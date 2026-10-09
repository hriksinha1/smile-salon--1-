// Temporary design artwork, NOT photos of the salon or its clients.
// To use a real photo: set `src` (a file in /public, e.g. '/img/hero.jpg', or a URL). Art is the fallback if it fails to load.
export type Img = { src?: string; alt: string; tone: 'blush'|'champagne'|'berry'|'espresso'; ratio: string; variant: number }
export const images: Record<string, Img> = {
  'hero-salon':{alt:'Temporary artwork: stylised portrait',tone:'blush',ratio:'3/4',variant:0},
  'hero-salon-2':{alt:'Temporary artwork: stylised comb and shears',tone:'champagne',ratio:'3/5',variant:1},
  'service-hair':{alt:'Temporary artwork for hair services',tone:'berry',ratio:'4/3',variant:2},
  'service-beauty':{alt:'Temporary artwork for beauty services',tone:'champagne',ratio:'4/3',variant:3},
  'salon-interior':{alt:'Temporary artwork for the salon interior',tone:'champagne',ratio:'4/5',variant:4},
  'gallery-01':{alt:'Temporary gallery artwork 1',tone:'blush',ratio:'3/4',variant:0},
  'gallery-02':{alt:'Temporary gallery artwork 2',tone:'berry',ratio:'1/1',variant:1},
  'gallery-03':{alt:'Temporary gallery artwork 3',tone:'champagne',ratio:'4/5',variant:2},
  'gallery-04':{alt:'Temporary gallery artwork 4',tone:'espresso',ratio:'1/1',variant:3},
  'gallery-05':{alt:'Temporary gallery artwork 5',tone:'blush',ratio:'3/4',variant:4},
}
export const galleryIds = ['gallery-01','gallery-02','gallery-03','gallery-04','gallery-05']
