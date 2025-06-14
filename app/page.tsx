import Hero from '@/components/Hero'
import dynamic from 'next/dynamic'

const BestSellers = dynamic(() => import('@/components/BestSellers'))

export default function Home() {
  return (
    <>
      <Hero />
      <BestSellers />
    </>
  )
}
