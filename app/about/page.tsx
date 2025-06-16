import React from 'react'

export default function AboutPage() {
  return (
    <section className="max-w-2xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-semibold mb-6">About Stula</h1>
      <p className="text-lg mb-4 text-gray-700">
        Stula is a modern furniture brand from Moldova, focused on blending timeless design with
        innovative technology. We believe that furniture should not only look great, but also fit
        perfectly into your life and space.
      </p>
      <h2 className="text-2xl font-semibold mt-8 mb-2">Our Mission</h2>
      <p className="mb-4 text-gray-700">
        To make high-quality, stylish furniture accessible and easy to visualize in your home using
        real-world AR previews. We remove the guesswork from furniture shopping.
      </p>
      <h2 className="text-2xl font-semibold mt-8 mb-2">Why Choose Us?</h2>
      <ul className="list-disc pl-6 text-gray-700 space-y-2">
        <li>Modern, minimalist designs</li>
        <li>Preview every product in AR before you buy</li>
        <li>Fast and reliable shipping across Moldova</li>
        <li>Dedicated customer support</li>
        <li>Eco-friendly materials and production</li>
      </ul>
    </section>
  )
}
