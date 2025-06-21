'use client'

import chairs from '@/data/chairs'
import ModelViewer from '@/components/ModelViewer'
import Link from 'next/link'
import React from 'react'
import QRCodeDisplay from '@/components/QRCodeDisplay'
import { Icon } from '@/components/Icons'
import { useCart } from '@/context/CartContext'
import texts from '@/data/texts.json'

interface ProductPageProps {
  params: Promise<{ id: string }>
}

export default function ProductPage({ params }: ProductPageProps) {
  const [idObj, setIdObj] = React.useState<{ id: number } | null>(null)
  const [animate, setAnimate] = React.useState(false)
  const { addToCart, getItemCount, openCart } = useCart()
  const [qty, setQty] = React.useState(1)

  React.useEffect(() => {
    params.then(({ id }) => setIdObj({ id: Number(id) }))
  }, [params])

  const chair = idObj ? chairs.find(c => c.id === idObj.id) : null
  const count = chair ? getItemCount(chair.id) : 0

  React.useEffect(() => {
    if (count > 0) {
      setAnimate(true)
      const t = setTimeout(() => setAnimate(false), 250)
      return () => clearTimeout(t)
    }
  }, [count])

  if (!chair) return null

  return (
    <section className="w-full py-16 px-4 lg:px-8 max-w-6xl mx-auto">
      <Link
        href="/shop"
        className="inline-flex items-center gap-2 text-sm mb-8 px-4 py-2 rounded-full border border-black/20 bg-white shadow hover:bg-black hover:text-white transition"
      >
        <Icon name="arrow" size={18} className="-rotate-180" />
        {texts.product.backToShop}
      </Link>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="w-full aspect-[3/4] bg-gradient-to-br from-white via-gray-50 to-gray-100 rounded-2xl shadow-xl border border-gray-200 flex items-center justify-center p-6">
          <ModelViewer
            src={chair.src}
            camera-controls
            auto-rotate
            ar
            className="w-full h-full object-contain"
          />
        </div>
        <div className="flex flex-col gap-6">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-2">{chair.name}</h1>
          <div className="flex items-center gap-4 mb-4">
            <span className="text-2xl font-bold text-yellow-500">
              {chair.price} {texts.common.currency}
            </span>
          </div>
          <div className="flex items-center gap-4 w-full max-w-xs">
            <button
              className="w-10 h-10 rounded-full border border-black/20 bg-white text-2xl font-bold flex items-center justify-center transition-all disabled:opacity-40 disabled:cursor-not-allowed hover:bg-black hover:text-white hover:cursor-pointer"
              onClick={() => setQty(qty > 1 ? qty - 1 : 1)}
              aria-label={texts.ariaLabels.decrease}
              disabled={qty <= 1}
            >
              –
            </button>
            <span
              className={`text-xl font-semibold w-8 text-center transition-transform duration-200 ${
                animate ? 'scale-125' : ''
              }`}
            >
              {qty}
            </span>
            <button
              className="w-10 h-10 rounded-full border border-black/20 bg-white text-2xl font-bold flex items-center justify-center hover:bg-black hover:text-white transition-all hover:cursor-pointer"
              onClick={() => setQty(qty + 1)}
              aria-label={texts.ariaLabels.increase}
            >
              +
            </button>
          </div>
          <button
            className="w-full mt-4 px-6 py-3 bg-black text-white rounded-full font-medium border border-black/20 hover:bg-white hover:text-black transition-all hover:cursor-pointer"
            onClick={() => {
              addToCart(chair.id, qty)
              openCart()
            }}
          >
            {texts.product.addToCart}
          </button>
          <div className="flex flex-col gap-2 mt-4">
            <span className="text-sm text-gray-500 font-medium mb-1">{texts.product.scanAR}</span>
            <div className="inline-block bg-white rounded-xl shadow p-3 border border-gray-100 w-fit">
              <QRCodeDisplay value={`/ar/${chair.id}`} size={80} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
