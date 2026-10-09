export type Service = {
  id: string
  title: string
  description: string
  imageId: string
}

export const services: Service[] = [
  {
    id: 'hair',
    title: 'Hair',
    description: 'Cuts, colour and styling tailored to the look you want.',
    imageId: 'service-hair',
  },
  {
    id: 'beauty',
    title: 'Beauty',
    description: 'Polish, finishing details and beauty treatments to help you feel ready.',
    imageId: 'service-beauty',
  },
]
