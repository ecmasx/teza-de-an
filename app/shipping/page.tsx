import React from 'react'

export default function ShippingPolicyPage() {
  return (
    <section className="max-w-2xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-semibold mb-6">Shipping Policy</h1>
      <p className="mb-4 text-gray-700">
        We offer fast and reliable shipping across Moldova. Please review our shipping policy below.
      </p>
      <h2 className="text-2xl font-semibold mt-8 mb-2">Delivery Times</h2>
      <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
        <li>Standard delivery: 2-5 business days</li>
        <li>Express delivery: 1-2 business days (extra fee applies)</li>
        <li>Delivery times may vary during holidays or sales</li>
      </ul>
      <h2 className="text-2xl font-semibold mt-8 mb-2">Shipping Costs</h2>
      <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
        <li>Free shipping on orders over 999 MDL</li>
        <li>Orders under 999 MDL: 50 MDL flat rate</li>
      </ul>
      <h2 className="text-2xl font-semibold mt-8 mb-2">Order Tracking</h2>
      <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
        <li>You will receive a tracking number by email once your order is shipped</li>
        <li>Contact support if you have not received your tracking info</li>
      </ul>
      <p className="mt-8 text-gray-500 text-sm">Questions? Email us at support@stula.com.</p>
    </section>
  )
}
