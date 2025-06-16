import React from 'react'
import Image from 'next/image'
import categories from '@/data/categories.json'
import NavLink from '@/components/NavLink'
import Link from 'next/link'
import { Icon } from './Icons'

export default function Categories() {
  return (
    <section className="w-full py-16 px-4 lg:px-8">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl lg:text-4xl font-semibold">By Category</h2>
        <NavLink
          href="/shop"
          className="inline-flex items-center gap-2 text-sm px-4 w-fit py-2 rounded-full border border-black/20 bg-white shadow hover:bg-black hover:text-white transition cursor-pointer whitespace-nowrap !no-underline hover:!no-underline focus:!no-underline"
        >
          Shop all
          <Icon name="arrow" size={18} className="rotate-180" />
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
              className="w-full h-120 md:h-180 object-cover object-center transition-transform duration-500 group-hover:scale-105"
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
