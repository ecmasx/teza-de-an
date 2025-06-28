'use client'

import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'

export default function SuccessPage() {
  const [sessionId, setSessionId] = useState<string | null>(null)
  const searchParams = useSearchParams()

  useEffect(() => {
    const session = searchParams?.get('session_id')
    setSessionId(session || null)

    // Clear cart after successful payment
    if (session) {
      localStorage.removeItem('cart')
      window.location.reload() // Simple way to reset cart context
    }
  }, [searchParams])

  return (
    <section className="min-h-[60vh] flex flex-col items-center justify-center px-4 text-center">
      <div className="max-w-md mx-auto">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-green-600"
          >
            <path
              d="M20 6L9 17l-5-5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <h1 className="text-3xl font-bold text-gray-900 mb-4">Plata a fost efectuată cu succes!</h1>

        <p className="text-gray-600 mb-8">
          Mulțumim pentru comandă! Veți primi un email de confirmare în scurt timp.
        </p>

        {sessionId && <p className="text-sm text-gray-500 mb-8">ID Sesiune: {sessionId}</p>}

        <div className="space-y-4">
          <Link
            href="/shop"
            className="w-full px-6 py-3 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-colors inline-block"
          >
            Continuă cumpărăturile
          </Link>

          <Link
            href="/"
            className="w-full px-6 py-3 border border-gray-300 text-gray-700 rounded-full font-medium hover:bg-gray-50 transition-colors inline-block"
          >
            Înapoi acasă
          </Link>
        </div>
      </div>
    </section>
  )
}
