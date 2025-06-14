import React from 'react'
import chairs from '@/data/chairs.json'
import NavLink from '@/components/NavLink'
import ChairCard from '@/components/ChairCard'

export const metadata = { title: 'Shop All Chairs' }

export default function ShopAllPage({ searchParams }: { searchParams?: { category?: string } }) {
  const filtered = searchParams?.category
    ? chairs.filter(c => c.category === searchParams.category)
    : chairs
  const title = searchParams?.category
    ? `${searchParams.category.charAt(0).toUpperCase()}${searchParams.category.slice(1)} Chairs`
    : 'All Chairs'
  return (
    <section className="w-full py-20 px-4 lg:px-8">
      <div className="flex items-end justify-between mb-12 gap-4">
        <h1 className="text-4xl font-semibold">{title}</h1>
        <NavLink href="/" className="text-sm mb-2 inline-block">
          Back to home
        </NavLink>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
        {filtered.map(chair => (
          <ChairCard key={chair.id} chair={chair} showQR={false} />
        ))}
      </div>
    </section>
  )
}
