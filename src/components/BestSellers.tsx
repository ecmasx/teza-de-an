'use client'

import React, { useMemo } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Scrollbar } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/scrollbar'
import dynamic from 'next/dynamic'
import NavLink from '@/components/NavLink'
import Link from 'next/link'
import chairs from '@/data/chairs.json'

const ModelViewer = dynamic(
  () =>
    import('@google/model-viewer').then(() => {
      type ModelViewerProps = JSX.IntrinsicElements['model-viewer']
      const MV: React.FC<ModelViewerProps> = React.memo(props => {
        // @ts-expect-error – JSX intrinsic element registered at runtime
        return <model-viewer {...props} />
      })
      MV.displayName = 'ModelViewerWrapper'
      return {
        default: MV,
      }
    }),
  {
    ssr: false,
    loading: () => <div className="w-full h-64 bg-gray-100" />,
  },
) as React.ComponentType<JSX.IntrinsicElements['model-viewer']>

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
        <NavLink href="/shop" className="uppercase tracking-wide text-sm font-medium">
          Shop all
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
            <div className="flex flex-col">
              <div className="relative w-full aspect-[3/4] bg-white rounded-xl shadow border p-4 flex items-center justify-center no-swipe">
                <span className="absolute top-2 left-2 bg-gray-200 backdrop-blur text-[10px] font-semibold uppercase px-3 py-[4px] rounded-full">
                  Best Seller
                </span>
                <ModelViewer
                  src={model.src}
                  camera-controls
                  auto-rotate
                  ar
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="mt-4 flex flex-col gap-1">
                <span className="text-lg font-medium">{model.name}</span>
                <div className="flex items-center justify-between">
                  <span className="text-base">{model.price} mdl</span>
                  <Link
                    href={`/product/${model.id}`}
                    className="text-xs px-3 py-1 border border-black rounded-full font-medium transition-colors hover:bg-black hover:text-white"
                  >
                    View
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}
