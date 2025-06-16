import React from 'react'

export default function TermsOfUsePage() {
  return (
    <section className="max-w-2xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-semibold mb-6">Terms of Use</h1>
      <p className="mb-4 text-gray-700">
        By using our website, you agree to the following terms and conditions. Please read them
        carefully.
      </p>
      <h2 className="text-2xl font-semibold mt-8 mb-2">General</h2>
      <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
        <li>All content is for informational purposes only.</li>
        <li>We reserve the right to update these terms at any time.</li>
        <li>Use of our site is at your own risk.</li>
      </ul>
      <h2 className="text-2xl font-semibold mt-8 mb-2">Orders & Payments</h2>
      <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
        <li>All orders are subject to acceptance and availability.</li>
        <li>Prices and product details may change without notice.</li>
        <li>Payment must be made in full before shipping.</li>
      </ul>
      <h2 className="text-2xl font-semibold mt-8 mb-2">Limitation of Liability</h2>
      <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
        <li>We are not liable for any indirect or consequential damages.</li>
        <li>Our liability is limited to the value of your order.</li>
      </ul>
      <p className="mt-8 text-gray-500 text-sm">
        If you have questions about these terms, contact us at support@stula.com.
      </p>
    </section>
  )
}
