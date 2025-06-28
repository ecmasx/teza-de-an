'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Icon } from './Icons'
import { instagramLink } from '@/lib/links'
import { promoCode } from '@/lib/data'
import texts from '@/data/texts.json'

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
            <h3 className="text-xl font-bold mb-4 text-center">{texts.footer.promoTitle}</h3>
            <div className="w-full flex justify-center mb-2">
              <div className="border-2 border-dashed border-yellow-400 rounded-xl px-6 py-3 text-2xl font-mono font-bold tracking-widest bg-yellow-50 text-yellow-700 shadow-inner relative">
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 w-10 h-1 bg-yellow-400 rounded-full" />
                {promoCode}
                <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-10 h-1 bg-yellow-400 rounded-full" />
              </div>
            </div>
            <div className="text-center">
              <p className="text-gray-700 mt-2 mb-4">{texts.footer.promoDescription}</p>
              <button
                aria-label={texts.ariaLabels.copyToClipboard}
                className="px-4 py-2 bg-black text-white rounded-full font-semibold hover:bg-white hover:text-black transition hover:cursor-pointer"
                onClick={() => {
                  navigator.clipboard.writeText('SAVE10')
                  setShowPopup(false)
                }}
              >
                {texts.footer.copyToClipboard}
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="mx-auto flex flex-col gap-1 md:gap-10 lg:flex-row lg:justify-between lg:items-start">
        <div className="flex-1 mb-6 lg:mb-0">
          <h2 className="text-md font-normal tracking-wide mb-3">{texts.footer.signupTitle}</h2>
          <form className="w-full" onSubmit={handleSubmit}>
            <div className="flex w-full max-w-xl mx-auto gap-0 rounded-md overflow-hidden border border-black/20 bg-white">
              <input
                type="email"
                placeholder={texts.forms.emailPlaceholder}
                className="flex-1 px-4 py-3 text-base focus:outline-none bg-transparent min-h-[48px]"
                value={email}
                autoComplete="email"
                onChange={e => setEmail(e.target.value)}
              />
              <button
                type="submit"
                className="px-6 py-3 bg-black text-white rounded-none font-medium border-l border-black/20 transition-all duration-200 hover:bg-white hover:cursor-pointer hover:text-black hover:border-black focus:outline-none focus:ring-2 focus:ring-black min-h-[48px] whitespace-nowrap"
              >
                {texts.footer.signupButton}
              </button>
            </div>
          </form>
        </div>
        <div className="flex-1 mb-6 lg:mb-0">
          <h2 className="text-lg font-bold mb-3">{texts.footer.companyName}</h2>
          <ul className="space-y-1">
            <li>
              <Link href="/about" className={underlineClass}>
                {texts.navigation.about}
              </Link>
            </li>
            <li>
              <Link href="/contact" className={underlineClass}>
                {texts.navigation.contact}
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex-1 mb-6 lg:mb-0">
          <h2 className="text-lg font-bold mb-3">{texts.footer.ordersSupport}</h2>
          <ul className="space-y-1">
            <li>
              <Link href="/faqs" className={underlineClass}>
                {texts.navigation.faqs}
              </Link>
            </li>
            <li>
              <Link href="/returns-portal" className={underlineClass}>
                {texts.navigation.returns}
              </Link>
            </li>
            <li>
              <Link href="/shipping" className={underlineClass}>
                {texts.navigation.shipping}
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex-1 mb-6 lg:mb-0">
          <h2 className="text-lg font-bold mb-3">{texts.footer.termsConditions}</h2>
          <div className={underlineClass + ' mb-1 w-fit'}>
            <Link href="/terms-of-use">{texts.navigation.terms}</Link>
          </div>
          <div className={underlineClass + ' w-fit'}>
            <Link href="/privacy-policy">{texts.navigation.privacy}</Link>
          </div>
        </div>
        <div className="flex-1">
          <h2 className="text-lg font-bold mb-3">{texts.footer.followUs}</h2>
          <a
            href={instagramLink}
            target="_blank"
            aria-label={texts.ariaLabels.instagram}
            className="hover:scale-110 transition-transform duration-300 ease-in-out"
          >
            <Icon name="instagram" />
          </a>
        </div>
      </div>
    </footer>
  )
}
