// Single source of truth. Fields set to null are NOT published; fill them in when the client confirms them.
export const site = {
  name: 'Smile Hair and Beauty',
  area: null as string | null,
  phone: null as string | null,
  whatsapp: null as string | null,
  address: null as string | null,
  hours: null as string[] | null,
  mapsUrl: 'https://share.google/ZJe6rcdqnd9TAlfaQ',
  instagram: 'https://www.instagram.com/smilehairandbeauty/',
  facebook: 'https://www.facebook.com/deepkaursmilehairandbeautysalon/',
  enquiryMessage: 'Hello! I’d like to enquire about an appointment.',
}

export const nav = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'About', to: '/about' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Contact', to: '/contact' },
] as const

export const faqs = [
  {
    q: 'How do I enquire about an appointment?',
    a: 'Use the contact options on the site. The salon confirms availability; nothing is booked until they reply.',
  },
  {
    q: 'What are your prices?',
    a: 'Prices are set by the salon and will be listed once confirmed. Please ask when you enquire.',
  },
  {
    q: 'Where can I see recent work?',
    a: 'The salon shares its work on Instagram and Facebook, with links in the footer and contact page.',
  },
]

export const whyUs = [
  { title: 'Simple to enquire', detail: 'Message or call. No account, no forms to fill in.' },
  { title: 'See the work first', detail: 'Follow the salon’s Instagram and Facebook before you visit.' },
  { title: 'Hair and beauty together', detail: 'Browse both service categories in one place.' },
]

export const testimonials: Array<{ quote: string; name: string }> = []
