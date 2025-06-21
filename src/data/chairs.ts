export interface Chair {
  id: number
  name: string
  src: string
  price: number
  category: 'kitchen' | 'bedroom' | 'office'
}

const chairs: Chair[] = [
  {
    id: 1,
    name: 'Scaun Lounge Clasic',
    src: '/modelsglb/1.glb',
    price: 1299,
    category: 'kitchen',
  },
  {
    id: 2,
    name: 'Fotoliu Scandinav',
    src: '/modelsglb/2.glb',
    price: 1999,
    category: 'bedroom',
  },
  {
    id: 3,
    name: 'Scaun de Masă Minimalist',
    src: '/modelsglb/3.glb',
    price: 1099,
    category: 'kitchen',
  },
  {
    id: 9,
    name: 'Scaun de Studiu pentru Copii',
    src: '/modelsglb/9.glb',
    price: 699,
    category: 'bedroom',
  },
  {
    id: 10,
    name: 'Scaun Pliabil pentru Evenimente',
    src: '/modelsglb/10.glb',
    price: 499,
    category: 'office',
  },
  {
    id: 11,
    name: 'Scaun de Bar Vintage',
    src: '/modelsglb/11.glb',
    price: 249,
    category: 'kitchen',
  },
  {
    id: 12,
    name: 'Fotoliu Relaxare',
    src: '/modelsglb/12.glb',
    price: 329,
    category: 'bedroom',
  },
  {
    id: 13,
    name: 'Scaun Executiv din Piele',
    src: '/modelsglb/13.glb',
    price: 399,
    category: 'office',
  },
  {
    id: 14,
    name: 'Scaun Gaming Racing',
    src: '/modelsglb/14.glb',
    price: 289,
    category: 'bedroom',
  },
  {
    id: 15,
    name: 'Puf Bean Bag',
    src: '/modelsglb/15.glb',
    price: 159,
    category: 'bedroom',
  },
  {
    id: 16,
    name: 'Scaun Înalt din Lemn',
    src: '/modelsglb/16.glb',
    price: 199,
    category: 'kitchen',
  },
  {
    id: 17,
    name: 'Scaun Bistro Cafe',
    src: '/modelsglb/17.glb',
    price: 189,
    category: 'kitchen',
  },
  {
    id: 18,
    name: 'Scaun Spa Relaxare',
    src: '/modelsglb/18.glb',
    price: 349,
    category: 'bedroom',
  },
  {
    id: 19,
    name: 'Scaun Pliabil Exterior',
    src: '/modelsglb/19.glb',
    price: 129,
    category: 'office',
  },
  {
    id: 20,
    name: 'Scaun Luxury din Catifea',
    src: '/modelsglb/20.glb',
    price: 459,
    category: 'bedroom',
  },
]

export default chairs
