import React from 'react'
import texts from '@/data/texts.json'

export default function PrivacyPolicyPage() {
  return (
    <section className="max-w-2xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-semibold mb-6">{texts.privacyPolicy.title}</h1>
      <p className="mb-4 text-gray-700">{texts.privacyPolicy.description}</p>
      <h2 className="text-2xl font-semibold mt-8 mb-2">
        {texts.privacyPolicy.infoWeCollect.title}
      </h2>
      <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
        {texts.privacyPolicy.infoWeCollect.items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <h2 className="text-2xl font-semibold mt-8 mb-2">{texts.privacyPolicy.howWeUse.title}</h2>
      <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
        {texts.privacyPolicy.howWeUse.items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <h2 className="text-2xl font-semibold mt-8 mb-2">{texts.privacyPolicy.yourRights.title}</h2>
      <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
        {texts.privacyPolicy.yourRights.items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <p className="mt-8 text-gray-500 text-sm">{texts.privacyPolicy.footer}</p>
    </section>
  )
}
