import React from 'react'
import texts from '@/data/texts.json'

export default function AboutPage() {
  return (
    <section className="max-w-2xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-semibold mb-6">{texts.about.title}</h1>
      <p className="text-lg mb-4 text-gray-700">{texts.about.description}</p>
      <h2 className="text-2xl font-semibold mt-8 mb-2">{texts.about.mission.title}</h2>
      <p className="mb-4 text-gray-700">{texts.about.mission.text}</p>
      <h2 className="text-2xl font-semibold mt-8 mb-2">{texts.about.whyChoose.title}</h2>
      <ul className="list-disc pl-6 text-gray-700 space-y-2">
        {texts.about.whyChoose.items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </section>
  )
}
