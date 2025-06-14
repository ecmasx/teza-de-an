import chairs from '@/data/chairs.json'
import ChairCard from '@/components/ChairCard'
import NavLink from '@/components/NavLink'
import React from 'react'

interface PageProps {
  params: { slug: string }
}

export async function generateMetadata({ params }: PageProps) {
  return { title: `${params.slug.charAt(0).toUpperCase()}${params.slug.slice(1)} Chairs` }
}

export default function CategoryPage({ params }: PageProps) {
  const filtered = chairs.filter(c => c.category === params.slug)
  const title = `${params.slug.charAt(0).toUpperCase()}${params.slug.slice(1)} Chairs`
  return (
    <section className="w-full py-20 px-4 lg:px-8">
      <div className="flex items-end justify-between mb-12 gap-4">
        <h1 className="text-4xl font-semibold">{title}</h1>
        <NavLink href="/shop" className="text-sm mb-2 inline-block">
          ← All chairs
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
