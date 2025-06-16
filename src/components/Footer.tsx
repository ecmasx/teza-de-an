'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Icon } from './Icons'
import { instagramLink } from '@/lib/links'
import { promoCode } from '@/lib/data'

const underlineClass =
  'relative after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0 after:bg-black after:transition-all after:duration-300 after:ease-in-out hover:after:w-full'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [showPopup, setShowPopup] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (email) {
      setShowPopup(true)
      setEmail('')
    }
  }

  return (
    <footer className="w-full px-8 py-8  bg-white text-black border-t border-black/40 relative">
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" />
          <div className="relative z-10 bg-white rounded-2xl shadow-xl px-8 py-10 flex flex-col items-center max-w-xs w-full border border-black/10">
            <h3 className="text-xl font-bold mb-4 text-center">Your Promo Code</h3>
            <div className="w-full flex justify-center mb-2">
              <div className="border-2 border-dashed border-yellow-400 rounded-xl px-6 py-3 text-2xl font-mono font-bold tracking-widest bg-yellow-50 text-yellow-700 shadow-inner relative">
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 w-10 h-1 bg-yellow-400 rounded-full" />
                {promoCode}
                <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-10 h-1 bg-yellow-400 rounded-full" />
              </div>
            </div>
            <div className="text-center">
              <p className="text-gray-700 mt-2 mb-4">
                Use this code at checkout to save 10% on your first purchase!
              </p>
              <button
                aria-label="Copy to clipboard"
                className="px-4 py-2 bg-black text-white rounded-full font-semibold hover:bg-white hover:text-black transition hover:cursor-pointer"
                onClick={() => {
                  navigator.clipboard.writeText('SAVE10')
                  setShowPopup(false)
                }}
              >
                Copy to clipboard
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="mx-auto flex flex-col gap-1 md:gap-10 lg:flex-row lg:justify-between lg:items-start">
        <div className="flex-1 mb-6 lg:mb-0">
          <h2 className="text-md font-normal tracking-wide mb-3">Sign up and save 10%</h2>
          <form className="w-full" onSubmit={handleSubmit}>
            <div className="flex w-full max-w-xl mx-auto gap-0 rounded-md overflow-hidden border border-black/20 bg-white">
              <input
                type="email"
                placeholder="Enter email address"
                className="flex-1 px-3 py-2 text-lg focus:outline-none bg-transparent"
                value={email}
                autoComplete="email"
                onChange={e => setEmail(e.target.value)}
              />
              <button
                type="submit"
                className="px-3 py-3 bg-black text-white rounded-none font-normal border-l border-black/20 transition-all duration-200 hover:bg-white hover:cursor-pointer hover:text-black hover:border-black focus:outline-none focus:ring-2 focus:ring-black"
              >
                Sign up
              </button>
            </div>
          </form>
        </div>
        <div className="flex-1 mb-6 lg:mb-0">
          <h2 className="text-lg font-bold mb-3">Stula</h2>
          <ul className="space-y-1">
            <li>
              <Link href="/about" className={underlineClass}>
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className={underlineClass}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex-1 mb-6 lg:mb-0">
          <h2 className="text-lg font-bold mb-3">Orders and Support</h2>
          <ul className="space-y-1">
            <li>
              <Link href="/faqs" className={underlineClass}>
                FAQs
              </Link>
            </li>
            <li>
              <Link href="/returns-portal" className={underlineClass}>
                Returns Portal
              </Link>
            </li>
            <li>
              <Link href="/shipping" className={underlineClass}>
                Shipping
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex-1 mb-6 lg:mb-0">
          <h2 className="text-lg font-bold mb-3">Terms and Conditions</h2>
          <div className={underlineClass + ' mb-1 w-fit'}>
            <Link href="/terms-of-use">Terms of Use</Link>
          </div>
          <div className={underlineClass + ' w-fit'}>
            <Link href="/privacy-policy">Privacy Policy</Link>
          </div>
        </div>
        <div className="flex-1">
          <h2 className="text-lg font-bold mb-3">Follow us</h2>
          <a
            href={instagramLink}
            target="_blank"
            aria-label="Instagram"
            className="hover:scale-110 transition-transform duration-300 ease-in-out"
          >
            <Icon name="instagram" />
          </a>
        </div>
      </div>
    </footer>
  )
}
