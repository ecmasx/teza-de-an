import React from 'react'
import { Icon } from './Icons'
import Link from 'next/link'

export default function Hero() {
  return (
    <section
      className="relative w-full h-[calc(100vh-250px)] flex flex-col justify-end md:justify-center md:items-start rounded-[0.75rem] overflow-hidden mb-10"
      style={{
        backgroundImage: `url('/images/hero.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="relative z-10 w-full md:max-w-xl text-left text-black drop-shadow-xl p-6 md:p-0 md:mb-0 mb-6 md:ml-0 md:pl-12">
        <h1 className="text-3xl md:text-5xl font-semibold mb-4 leading-tight">
          They&apos;re best sellers
          <br />
          for a reason
        </h1>
        <p className="text-base md:text-lg mb-6 font-medium text-black/80">
          Try the scents everyone&apos;s talking about.
        </p>
        <Link
          href="/products"
          className="group w-fit px-6 py-3 bg-black text-white rounded-full text-base font-regular duration-300 transition flex items-center gap-8 hover:bg-white hover:text-black"
        >
          Shop now
          <Icon
            name="arrow"
            size={24}
            className="stroke-1 translate-y-0.1 transition-all duration-300"
          />
        </Link>
      </div>
      <div className="absolute inset-0 bg-white/30 pointer-events-none" />
    </section>
  )
}
