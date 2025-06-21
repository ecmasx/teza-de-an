import React from 'react'
import texts from '@/data/texts.json'

export default function ShippingPolicyPage() {
  return (
    <section className="max-w-2xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-semibold mb-6">{texts.shippingPolicy.title}</h1>
      <p className="mb-4 text-gray-700">{texts.shippingPolicy.description}</p>
      <h2 className="text-2xl font-semibold mt-8 mb-2">
        {texts.shippingPolicy.deliveryTimes.title}
      </h2>
      <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
        {texts.shippingPolicy.deliveryTimes.items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <h2 className="text-2xl font-semibold mt-8 mb-2">
        {texts.shippingPolicy.shippingCosts.title}
      </h2>
      <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
        {texts.shippingPolicy.shippingCosts.items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <h2 className="text-2xl font-semibold mt-8 mb-2">{texts.shippingPolicy.tracking.title}</h2>
      <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
        {texts.shippingPolicy.tracking.items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <p className="mt-8 text-gray-500 text-sm">{texts.shippingPolicy.footer}</p>
    </section>
  )
}
