import chairs from '@/data/chairs'
import ChairCard from '@/components/ChairCard'
import React from 'react'
import { Icon } from '@/components/Icons'
import Link from 'next/link'
import texts from '@/data/texts.json'

interface CategoryPageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: CategoryPageProps) {
  const { slug } = await params
  const categoryTitle =
    texts.categoryTitles[slug as keyof typeof texts.categoryTitles] ||
    `${slug.charAt(0).toUpperCase()}${slug.slice(1)} ${texts.pages.chairs}`
  return { title: categoryTitle }
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params
  const filtered = chairs.filter(c => c.category === slug)
  const title =
    texts.categoryTitles[slug as keyof typeof texts.categoryTitles] ||
    `${slug.charAt(0).toUpperCase()}${slug.slice(1)} ${texts.pages.chairs}`

  return (
    <section className="w-full py-20 px-4 lg:px-8">
      <div className="flex items-end justify-between mb-12 gap-4">
        <h1 className="text-4xl font-semibold">{title}</h1>
        <Link
          href="/shop"
          className="inline-flex items-center gap-2 text-sm px-4 w-fit py-2 rounded-full border border-black/20 bg-white shadow hover:bg-black hover:text-white transition cursor-pointer whitespace-nowrap"
        >
          <Icon name="arrow" size={18} className="-rotate-180" />
          {texts.pages.allChairs}
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
