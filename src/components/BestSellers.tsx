'use client'

import React, { useMemo, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Scrollbar, Navigation } from 'swiper/modules'
import { Swiper as SwiperType } from 'swiper'
import 'swiper/css'
import 'swiper/css/scrollbar'
import 'swiper/css/navigation'
import NavLink from '@/components/NavLink'
import chairs from '@/data/chairs'
import ChairCard from '@/components/ChairCard'
import { Icon } from './Icons'
import texts from '@/data/texts.json'

type Chair = {
  id: number
  name: string
  src: string
  price: number
}

const TOP_SELLERS_LIMIT = 6

const initialModels: Chair[] = chairs.slice(0, TOP_SELLERS_LIMIT)

export default function BestSellers() {
  const swiperRef = useRef<SwiperType | null>(null)
  const [swiperReady, setSwiperReady] = useState(false)
  const [isBeginning, setIsBeginning] = useState(true)
  const [isEnd, setIsEnd] = useState(false)

  const handlePrev = () => {
    if (swiperRef.current && swiperReady && !isBeginning) {
      swiperRef.current.slidePrev()
    }
  }

  const handleNext = () => {
    if (swiperRef.current && swiperReady && !isEnd) {
      swiperRef.current.slideNext()
    }
  }

  const updateNavigationState = (swiper: SwiperType) => {
    setIsBeginning(swiper.isBeginning)
    setIsEnd(swiper.isEnd)
  }

  return (
    <section className="w-full py-16">
      <div className="flex items-center justify-between mb-8 px-2 lg:px-0">
        <h2 className="text-3xl lg:text-4xl font-semibold">{texts.sections.bestSellers}</h2>
        <NavLink
          href="/shop"
          className="inline-flex items-center gap-2 text-sm px-4 w-fit py-2 rounded-full border border-black/20 bg-white shadow hover:bg-black hover:text-white transition cursor-pointer whitespace-nowrap !no-underline hover:!no-underline focus:!no-underline"
        >
          {texts.sections.shopAll}
          <Icon name="arrow" size={18} />
        </NavLink>
      </div>

      <div className="relative px-8 md:px-16">
        <button
          onClick={handlePrev}
          disabled={isBeginning}
          className={`flex absolute left-0 top-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full border border-black/20 bg-white shadow items-center justify-center group z-10 ${
            isBeginning ? 'opacity-40 ' : 'hover:bg-black hover:text-white cursor-pointer'
          }`}
          aria-label={texts.ariaLabels.previousSlide}
        >
          <Icon
            name="arrow"
            size={18}
            className={`rotate-180 transition-transform ${isBeginning ? '' : ''}`}
          />
        </button>

        <button
          onClick={handleNext}
          disabled={isEnd}
          className={`flex absolute right-0 top-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full border border-black/20 bg-white shadow transition-all items-center justify-center group z-10 ${
            isEnd ? 'opacity-40 ' : 'hover:bg-black hover:text-white cursor-pointer'
          }`}
          aria-label={texts.ariaLabels.nextSlide}
        >
          <Icon name="arrow" size={18} className={`transition-transform ${isEnd ? '' : ''}`} />
        </button>

        <div className="px-3 md:px-4">
          <Swiper
            className="best-sellers-swiper"
            modules={useMemo(() => [Scrollbar, Navigation], [])}
            scrollbar={{ draggable: true }}
            noSwipingClass="no-swipe"
            allowTouchMove={true}
            spaceBetween={24}
            onSwiper={swiper => {
              swiperRef.current = swiper
              setSwiperReady(true)
              updateNavigationState(swiper)
            }}
            onSlideChange={swiper => {
              updateNavigationState(swiper)
            }}
            onResize={swiper => {
              updateNavigationState(swiper)
            }}
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
        </div>
      </div>
    </section>
  )
}
