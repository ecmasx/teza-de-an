'use client'

import React from 'react'
import ModelViewer from '@/components/ModelViewer'
import Link from 'next/link'
import { Icon } from './Icons'
import { useCart } from '@/context/CartContext'
import { Chair } from '@/data/chairs'
import texts from '@/data/texts.json'

interface Props {
  chair: Chair
}

export default function ProductCard({ chair }: Props) {
  const { addToCart, getItemCount } = useCart()
  const count = getItemCount(chair.id)

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
      <div className="mt-4 flex flex-col gap-2">
        <span className="text-lg font-semibold text-gray-900 truncate">{chair.name}</span>
        <span className="text-sm text-gray-600">{chair.category}</span>
        <div className="flex items-center justify-between mt-1">
          <span className="text-base font-medium text-gray-700">{chair.price} MDL</span>
          {count > 0 && (
            <span className="text-sm font-semibold bg-black text-white rounded-full w-6 h-6 flex items-center justify-center">
              {count}
            </span>
          )}
        </div>
        <div className="flex gap-2 mt-2">
          <Link
            href={`/product/${chair.id}`}
            className="flex-1 flex items-center justify-center gap-2 text-xs px-4 py-2 bg-gray-100 text-black rounded-full font-semibold border transition-all duration-200 hover:bg-gray-200"
          >
            <span>View</span>
            <Icon name="arrow" size={16} />
          </Link>
          <button
            onClick={() => addToCart(chair.id, 1)}
            className="flex-1 text-xs px-4 py-2 bg-black text-white rounded-full font-semibold transition-all duration-200 hover:bg-gray-800"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}
