import chairs from '@/data/chairs'
import ChairCard from '@/components/ChairCard'
import React from 'react'
import { Icon } from '@/components/Icons'
import Link from 'next/link'

interface SearchParams {
  category?: string
}

const categoryTitles: Record<string, string> = {
  kitchen: 'Kitchen Chairs',
  bedroom: 'Bedroom Chairs',
  office: 'Office Chairs',
}

export default async function ShopAllPage({
  searchParams,
}: {
  searchParams?: Promise<SearchParams>
}) {
  const { category } = (await searchParams) ?? {}

  const filtered = category ? chairs.filter(c => c.category === category) : chairs
  const title = category ? categoryTitles[category] || 'Chairs' : 'Shop All'

  return (
    <section className="w-full py-20 lg:px-8">
      <div className="flex items-end justify-between flex-wrap mb-12 gap-4">
        <h1 className="text-4xl font-semibold whitespace-nowrap">{title}</h1>
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm px-4 w-fit py-2 rounded-full border border-black/20 bg-white shadow hover:bg-black hover:text-white transition cursor-pointer whitespace-nowrap"
        >
          <Icon name="arrow" size={18} className="-rotate-180" />
          Back to home
        </Link>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
        {filtered.map(chair => (
          <ChairCard key={chair.id} chair={chair} />
        ))}
      </div>
    </section>
  )
}
