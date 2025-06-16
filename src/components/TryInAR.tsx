import React from 'react'
import Image from 'next/image'

export default function TryInAR() {
  return (
    <section className="w-full bg-gray-50/50 py-12 md:py-16 px-4 lg:px-8 md:rounded-xl">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
        <div className="relative h-[26rem] sm:h-[32rem] lg:h-[40rem] xl:h-[44rem] w-full overflow-hidden rounded-xl shadow">
          <Image
            src="/images/tryinar.jpg"
            alt="Phone showing chair in AR"
            fill
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-4 md:gap-6">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight">
            Try it in AR
          </h2>
          <p className="text-gray-700 max-w-md text-sm sm:text-base">
            Preview every chair directly in your space. Scan the QR code or open a product on your
            phone and tap the AR icon.
          </p>
        </div>
      </div>
    </section>
  )
}
