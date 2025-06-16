import React from 'react'
import Link from 'next/link'

export default function NotFoundPage() {
  return (
    <section className="min-h-[60vh] flex flex-col items-center justify-center text-center py-16 px-4">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
      <p className="mb-6 text-gray-600">
        Sorry, the page you are looking for does not exist or has been moved.
      </p>
      <Link
        href="/"
        className="px-6 py-2 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition"
      >
        Go to Home
      </Link>
    </section>
  )
}
