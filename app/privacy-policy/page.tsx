import React from 'react'

export default function PrivacyPolicyPage() {
  return (
    <section className="max-w-2xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-semibold mb-6">Privacy Policy</h1>
      <p className="mb-4 text-gray-700">
        We value your privacy. This page explains how we collect, use, and protect your personal
        information when you use our website.
      </p>
      <h2 className="text-2xl font-semibold mt-8 mb-2">Information We Collect</h2>
      <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
        <li>Personal information you provide (name, email, etc.)</li>
        <li>Order and payment details</li>
        <li>Usage data (cookies, analytics, etc.)</li>
      </ul>
      <h2 className="text-2xl font-semibold mt-8 mb-2">How We Use Your Information</h2>
      <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
        <li>To process orders and provide customer support</li>
        <li>To improve our website and services</li>
        <li>To send updates and marketing (with your consent)</li>
      </ul>
      <h2 className="text-2xl font-semibold mt-8 mb-2">Your Rights</h2>
      <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
        <li>Access, update, or delete your data</li>
        <li>Opt out of marketing communications</li>
        <li>Contact us for any privacy concerns</li>
      </ul>
      <p className="mt-8 text-gray-500 text-sm">
        For more details, contact us at support@stula.com.
      </p>
    </section>
  )
}
