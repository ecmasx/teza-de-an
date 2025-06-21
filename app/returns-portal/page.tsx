import React from 'react'
import texts from '@/data/texts.json'

export default function ReturnsPolicyPage() {
  return (
    <section className="max-w-2xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-semibold mb-6">{texts.returnsPolicy.title}</h1>
      <p className="mb-4 text-gray-700">{texts.returnsPolicy.description}</p>
      <h2 className="text-2xl font-semibold mt-8 mb-2">{texts.returnsPolicy.howToReturn.title}</h2>
      <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
        {texts.returnsPolicy.howToReturn.items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <h2 className="text-2xl font-semibold mt-8 mb-2">{texts.returnsPolicy.refunds.title}</h2>
      <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
        {texts.returnsPolicy.refunds.items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <p className="mt-8 text-gray-500 text-sm">{texts.returnsPolicy.footer}</p>
    </section>
  )
}
