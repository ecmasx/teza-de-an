import React from 'react'
import ModelViewer from '@/components/ModelViewer'
import Link from 'next/link'
import QRCodeDisplay from '@/components/QRCodeDisplay'

export type Chair = {
  id: number
  name: string
  src: string
  price: number
}

interface Props {
  chair: Chair
  showQR?: boolean
}

export default function ChairCard({ chair, showQR = true }: Props) {
  return (
    <div className="flex flex-col">
      <div className="relative w-full aspect-[3/4] bg-white rounded-xl shadow border p-4 flex items-center justify-center no-swipe">
        <ModelViewer
          src={chair.src}
          camera-controls
          auto-rotate
          ar
          className="w-full h-full object-contain"
        />
      </div>
      <div className="mt-3 flex flex-col gap-1">
        <span className="text-lg font-medium">{chair.name}</span>
        <div className="flex items-center justify-between">
          <span className="text-base">{chair.price} mdl</span>
          <div className="flex items-center gap-2">
            <Link
              href={`/product/${chair.id}`}
              className="text-xs px-3 py-1 border border-black rounded-full font-medium transition-colors hover:bg-black hover:text-white"
            >
              View
            </Link>
            {showQR && (
              <QRCodeDisplay
                value={`${typeof window !== 'undefined' ? window.location.origin : ''}/product/${
                  chair.id
                }`}
                size={56}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
