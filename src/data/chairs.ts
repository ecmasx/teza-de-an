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
    name: 'Classic Lounge Chair',
    src: '/modelsglb/1.glb',
    price: 1299,
    category: 'kitchen',
  },
  {
    id: 2,
    name: 'Scandinavian Armchair',
    src: '/modelsglb/2.glb',
    price: 1999,
    category: 'bedroom',
  },
  {
    id: 3,
    name: 'Minimalist Dining Chair',
    src: '/modelsglb/3.glb',
    price: 1099,
    category: 'kitchen',
  },
  {
    id: 9,
    name: 'Kids Study Chair',
    src: '/modelsglb/9.glb',
    price: 699,
    category: 'bedroom',
  },
  {
    id: 10,
    name: 'Foldable Event Chair',
    src: '/modelsglb/10.glb',
    price: 499,
    category: 'office',
  },
  {
    id: 11,
    name: 'Vintage Bar Chair',
    src: '/modelsglb/11.glb',
    price: 249,
    category: 'kitchen',
  },
  {
    id: 12,
    name: 'Recliner Comfort',
    src: '/modelsglb/12.glb',
    price: 329,
    category: 'bedroom',
  },
  {
    id: 13,
    name: 'Executive Leather Chair',
    src: '/modelsglb/13.glb',
    price: 399,
    category: 'office',
  },
  {
    id: 14,
    name: 'Gaming Racer Seat',
    src: '/modelsglb/14.glb',
    price: 289,
    category: 'bedroom',
  },
  {
    id: 15,
    name: 'Bean Bag Seat',
    src: '/modelsglb/15.glb',
    price: 159,
    category: 'bedroom',
  },
  {
    id: 16,
    name: 'Wooden High Chair',
    src: '/modelsglb/16.glb',
    price: 199,
    category: 'kitchen',
  },
  {
    id: 17,
    name: 'Cafe Bistro Chair',
    src: '/modelsglb/17.glb',
    price: 189,
    category: 'kitchen',
  },
  {
    id: 18,
    name: 'Spa Relax Chair',
    src: '/modelsglb/18.glb',
    price: 349,
    category: 'bedroom',
  },
  {
    id: 19,
    name: 'Outdoor Fold Chair',
    src: '/modelsglb/19.glb',
    price: 129,
    category: 'office',
  },
  {
    id: 20,
    name: 'Luxury Velvet Chair',
    src: '/modelsglb/20.glb',
    price: 459,
    category: 'bedroom',
  },
]

export default chairs
