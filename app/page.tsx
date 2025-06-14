import Hero from '@/components/Hero'
import dynamic from 'next/dynamic'

const BestSellers = dynamic(() => import('@/components/BestSellers'))
const TryInAR = dynamic(() => import('@/components/TryInAR'))
const Categories = dynamic(() => import('@/components/Categories'))

export default function Home() {
  return (
    <>
      <Hero />
      <BestSellers />
      <TryInAR />
      <Categories />
    </>
  )
}
