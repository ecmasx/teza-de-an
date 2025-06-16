'use client'

import React, { useMemo } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Scrollbar } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/scrollbar'
import NavLink from '@/components/NavLink'
import chairs from '@/data/chairs'
import ChairCard from '@/components/ChairCard'
import { Icon } from './Icons'

type Chair = {
  id: number
  name: string
  src: string
  price: number
}

const TOP_SELLERS_LIMIT = 6

const initialModels: Chair[] = chairs.slice(0, TOP_SELLERS_LIMIT)

export default function BestSellers() {
  return (
    <section className="w-full py-16">
      <div className="flex items-center justify-between mb-8 px-2 lg:px-0">
        <h2 className="text-3xl lg:text-4xl font-semibold">Best Sellers</h2>
        <NavLink
          href="/shop"
          className="inline-flex items-center gap-2 text-sm px-4 w-fit py-2 rounded-full border border-black/20 bg-white shadow hover:bg-black hover:text-white transition cursor-pointer whitespace-nowrap !no-underline hover:!no-underline focus:!no-underline"
        >
          Shop all
          <Icon name="arrow" size={18} />
        </NavLink>
      </div>
      <Swiper
        className="best-sellers-swiper"
        modules={useMemo(() => [Scrollbar], [])}
        scrollbar={{ draggable: true }}
        noSwipingClass="no-swipe"
        spaceBetween={24}
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
      >
        {initialModels.map(model => (
          <SwiperSlide key={model.id}>
            <ChairCard chair={model} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}
