'use client'

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Scrollbar } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/scrollbar'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import chairs from '@/data/chairs.json'

// Dynamically load the <model-viewer> web-component on the client and expose it as a React component
const ModelViewer = dynamic(
  () =>
    import('@google/model-viewer').then(() => {
      // After the script loads, the custom element <model-viewer> is defined.
      // We return a React wrapper so it can be used like a normal component.
      type ModelViewerProps = JSX.IntrinsicElements['model-viewer']
      const MV: React.FC<ModelViewerProps> = props => {
        // @ts-expect-error – JSX intrinsic element registered at runtime
        return <model-viewer {...props} />
      }
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

const models: Chair[] = chairs.slice(0, 10)

export default function BestSellers() {
  return (
    <section className="w-full py-16">
      <div className="flex items-center justify-between mb-8 px-2 lg:px-0">
        <h2 className="text-3xl lg:text-4xl font-semibold">Best Sellers</h2>
        <Link href="/shop" className="uppercase tracking-wide text-sm font-medium hover:underline">
          Shop all
        </Link>
      </div>
      <Swiper
        className="best-sellers-swiper"
        modules={[Scrollbar]}
        scrollbar={{ draggable: true }}
        spaceBetween={24}
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
      >
        {models.map(model => (
          <SwiperSlide key={model.id}>
            <div className="flex flex-col">
              <div className="w-full aspect-[3/4] bg-white rounded-xl shadow border p-4 flex items-center justify-center">
                <ModelViewer
                  src={model.src}
                  camera-controls
                  auto-rotate
                  ar
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="mt-4 flex flex-col gap-1">
                <span className="uppercase text-sm tracking-wide text-gray-500 font-medium">
                  3D Model
                </span>
                <span className="text-lg font-medium">{model.name}</span>
                <span className="text-base">${model.price}</span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}
