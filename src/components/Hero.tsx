import React from 'react'
import { Icon } from './Icons'
import Link from 'next/link'
import texts from '@/data/texts.json'
import BlinkEffect from './BlinkEffect'

export default function Hero() {
  return (
    <section
      className="relative w-full  min-h-dvh flex flex-col justify-end md:justify-center md:items-start rounded-2xl overflow-hidden my-6 shadow-xl"
      style={{
        backgroundImage: `url('/images/hero.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/30 to-white/10 z-0" />
      <div className="relative z-10 w-full md:max-w-2xl text-left text-white p-8 md:p-16 md:ml-0 md:pl-24">
        <div className="relative inline-block mb-4">
          <span className="inline-block px-4 py-1 bg-white/20 text-white/90 rounded-full text-xs font-semibold tracking-widest uppercase shadow backdrop-blur-sm border border-white/30">
            {texts.hero.badge}
          </span>
          <BlinkEffect />
        </div>

        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight drop-shadow-xl">
          {texts.hero.title.split('your life').map((part, index) =>
            index === 0 ? (
              <span key={index}>
                {part}
                <span className="text-primary-500">your life</span>
              </span>
            ) : (
              <span key={index}>{part}</span>
            ),
          )}
        </h1>
        <div className="flex items-center gap-3 mb-6">
          <p className="text-lg md:text-xl font-medium text-white/90">{texts.hero.subtitle}</p>
        </div>
        <Link
          href="/shop"
          className="group w-fit px-8 py-3 bg-black/80 text-white rounded-full text-lg font-semibold shadow-lg flex items-center gap-4 hover:bg-white hover:text-black border-1 border-black transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-black"
        >
          {texts.hero.cta}
          <Icon
            name="arrow"
            size={28}
            className="stroke-2 group-hover:translate-x-1 transition-transform duration-200"
          />
        </Link>
      </div>
      <div className="absolute inset-0 bg-white/10 pointer-events-none z-0" />
    </section>
  )
}
