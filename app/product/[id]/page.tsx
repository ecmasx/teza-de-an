import chairs from '@/data/chairs.json'
import ModelViewer from '@/components/ModelViewer'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import React from 'react'
import QRCodeDisplay from '@/components/QRCodeDisplay'

interface ProductPageProps {
  params: Promise<{ id: string }>
}

export const dynamic = 'force-dynamic'

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params
  const chair = chairs.find(c => c.id === Number(id))
  if (!chair) return notFound()

  return (
    <section className="w-full py-20 px-4 lg:px-8 max-w-6xl mx-auto">
      <Link href="/shop" className="text-sm mb-6 inline-block">
        Back to shop
      </Link>
      <div className="grid md:grid-cols-2 gap-12">
        <div className="w-full aspect-[3/4] bg-white rounded-xl shadow border p-4 flex items-center justify-center no-swipe">
          <ModelViewer
            src={chair.src}
            camera-controls
            auto-rotate
            ar
            className="w-full h-full object-contain"
          />
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-semibold">{chair.name}</h1>
          <p className="text-xl mb-4">{chair.price} mdl</p>
          <div className="flex items-center gap-4">
            <QRCodeDisplay
              value={`${typeof window !== 'undefined' ? window.location.href : ''}`}
              size={64}
            />
            <p className="text-gray-600">3D model chair perfect for your AR preview.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
