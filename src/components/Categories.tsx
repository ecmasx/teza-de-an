import React from 'react'
import Image from 'next/image'
import categories from '@/data/categories.json'
import NavLink from '@/components/NavLink'
import Link from 'next/link'

export default function Categories() {
  return (
    <section className="w-full py-16 px-4 lg:px-8">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl lg:text-4xl font-semibold">By Category</h2>
        <NavLink href="/shop" className="uppercase tracking-wide text-sm font-medium">
          Shop all
        </NavLink>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map(cat => (
          <Link
            key={cat.id}
            href={`/shop?category=${cat.slug}`}
            className="group relative rounded-xl overflow-hidden shadow block"
          >
            <Image
              src={cat.image}
              alt={cat.name}
              width={600}
              height={800}
              className="w-full h-96 sm:h-96 lg:h-[30rem] object-cover object-center transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="absolute inset-0 flex flex-col justify-between p-4 text-white">
              <h3 className="text-lg font-semibold">{cat.name}</h3>
              <span className="inline-flex bg-white text-black w-fit items-center text-xs px-4 py-2 rounded-full font-medium transition-colors group-hover:bg-black group-hover:text-white">
                Shop {cat.name}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
