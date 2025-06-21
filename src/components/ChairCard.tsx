import React from 'react'
import ModelViewer from '@/components/ModelViewer'
import Link from 'next/link'
import { Icon } from './Icons'
import texts from '@/data/texts.json'

export type Chair = {
  id: number
  name: string
  src: string
  price: number
}

interface Props {
  chair: Chair
}

export default function ChairCard({ chair }: Props) {
  return (
    <div className="flex flex-col group bg-gradient-to-br from-white via-gray-50 to-gray-100 rounded-2xl shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300 p-4 relative overflow-hidden">
      {/* AR Badge */}
      <span className="absolute top-4 left-4 z-10 bg-black/80 text-white text-[10px] font-bold uppercase px-3 py-1 rounded-full tracking-widest shadow-md transition-colors duration-200 group-hover:bg-white group-hover:text-black">
        {texts.chairCard.arPreview}
      </span>
      <div className="relative w-full aspect-[3/4] flex items-center justify-center no-swipe">
        <ModelViewer
          src={chair.src}
          camera-controls
          auto-rotate
          ar
          className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="mt-4 flex flex-col gap-1">
        <span className="text-lg font-semibold text-gray-900 truncate">{chair.name}</span>
        <div className="flex items-center justify-between mt-1">
          <span className="text-base font-medium text-gray-700">
            {chair.price} {texts.common.currency}
          </span>
          <Link
            href={`/product/${chair.id}`}
            className="flex items-center gap-2 text-xs px-4 py-2 bg-black text-white rounded-full font-semibold shadow border border-black/80 transition-all duration-200 hover:bg-white hover:text-black"
          >
            <span>{texts.chairCard.view}</span>
            <Icon name="arrow" size={16} />
          </Link>
        </div>
      </div>
    </div>
  )
}
