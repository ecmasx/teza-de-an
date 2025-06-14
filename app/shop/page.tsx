import chairs from '@/data/chairs.json'
import ChairCard from '@/components/ChairCard'
import NavLink from '@/components/NavLink'
import React from 'react'

interface SearchParams {
  category?: string
}

export default async function ShopAllPage({
  searchParams,
}: {
  searchParams?: Promise<SearchParams>
}) {
  const { category } = (await searchParams) ?? {}

  const filtered = category ? chairs.filter(c => c.category === category) : chairs

  return (
    <section className="w-full py-20 px-4 lg:px-8">
      <div className="flex items-end justify-between mb-12 gap-4">
        <h1 className="text-4xl font-semibold">Shop Chairs</h1>
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
