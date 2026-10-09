// Single source of truth. Fields set to null are NOT published; fill them in when the client confirms them.
export const site = {
  name: 'Smile Hair and Beauty',
  area: null as string | null,        // e.g. 'Leeds'
  phone: null as string | null,       // e.g. '+441234567890'
  whatsapp: null as string | null,    // digits only, e.g. '441234567890'
  address: null as string | null,
  hours: null as string[] | null,     // e.g. ['Mon–Sat 9:00–18:00']
  mapsUrl: 'https://share.google/ZJe6rcdqnd9TAlfaQ',
  instagram: 'https://www.instagram.com/smilehairandbeauty/',
  facebook: 'https://www.facebook.com/deepkaursmilehairandbeautysalon/',
  enquiryMessage: 'Hello! I’d like to enquire about an appointment.',
}
export const nav = [['Services','services'],['About','about'],['Gallery','gallery'],['Contact','contact']] as const
export const services = [
  { id:'service-hair', title:'Hair', text:'Cuts, colour and styling. The exact menu is confirmed by the salon.', img:'service-hair' },
  { id:'service-beauty', title:'Beauty', text:'Beauty treatments. The exact menu is confirmed by the salon.', img:'service-beauty' },
]
export const faqs = [
  { q:'How do I enquire about an appointment?', a:'Use the contact options below. The salon confirms availability; nothing is booked until they reply.' },
  { q:'What are your prices?', a:'Prices are set by the salon and will be listed once confirmed. Please ask when you enquire.' },
  { q:'Where can I see recent work?', a:'The salon shares its work on Instagram and Facebook; links are in the footer.' },
]
export const whyUs = [
  { t:'Simple to enquire', d:'Message or call. No account, no forms to fill in.' },
  { t:'See the work first', d:'Follow the salon’s Instagram and Facebook before you visit.' },
  { t:'Hair and beauty together', d:'Browse both service categories in one place.' },
]
