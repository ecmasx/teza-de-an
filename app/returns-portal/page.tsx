import React from 'react'

export default function ReturnsPolicyPage() {
  return (
    <section className="max-w-2xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-semibold mb-6">Return Policy</h1>
      <p className="mb-4 text-gray-700">
        We want you to be happy with your purchase! If you are not satisfied, you can return most
        items within 30 days of delivery.
      </p>
      <h2 className="text-2xl font-semibold mt-8 mb-2">How to Return</h2>
      <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
        <li>Contact our support team to initiate a return.</li>
        <li>Items must be unused and in original packaging.</li>
        <li>
          Return shipping costs are the responsibility of the customer unless the item is defective.
        </li>
      </ul>
      <h2 className="text-2xl font-semibold mt-8 mb-2">Refunds</h2>
      <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
        <li>Refunds are processed within 7 business days after we receive your return.</li>
        <li>Original shipping charges are non-refundable.</li>
      </ul>
      <p className="mt-8 text-gray-500 text-sm">
        For more details or to start a return, contact us at support@stula.com.
      </p>
    </section>
  )
}
