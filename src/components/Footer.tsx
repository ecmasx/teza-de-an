import React from 'react'
import Link from 'next/link'
import { Icon } from './Icons'
import { instagramLink, tiktokLink } from '@/lib/links'

export default function Footer() {
  return (
    <footer className="w-full px-8 py-8 bg-white text-black">
      <div className="mx-auto flex flex-col gap-10 lg:flex-row lg:justify-between lg:items-start">
        <div className="flex-1 mb-6 lg:mb-0">
          <h2 className="text-lg font-normal tracking-wide mb-3">SIGN UP & SAVE 10%</h2>
          <form className="w-full">
            <input
              type="email"
              placeholder="Enter email address"
              className="w-full border border-black rounded-xl px-4 py-4 text-lg focus:outline-none"
            />
          </form>
        </div>
        <div className="flex-1 mb-6 lg:mb-0">
          <h2 className="text-lg font-normal tracking-wide mb-3">Stula</h2>
          <ul className="space-y-1">
            <li>
              <Link href="/about" className="hover:underline font-light">
                About
              </Link>
            </li>
            <li>
              <Link href="/collaborations" className="hover:underline font-light">
                Collaborations
              </Link>
            </li>
            <li>
              <Link href="/find-a-store" className="hover:underline font-light">
                Find a Store
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline font-light">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex-1 mb-6 lg:mb-0">
          <h2 className="text-lg font-normal tracking-wide mb-3">ORDERS AND SUPPORT</h2>
          <ul className="space-y-1">
            <li>
              <Link href="/faqs" className="hover:underline font-light">
                FAQs
              </Link>
            </li>
            <li>
              <Link href="/returns-portal" className="hover:underline font-light">
                Returns Portal
              </Link>
            </li>
            <li>
              <Link href="/shipping" className="hover:underline font-light">
                Shipping
              </Link>
            </li>
            <li>
              <Link href="/return-policy" className="hover:underline font-light">
                Return Policy
              </Link>
            </li>
            <li>
              <Link href="/payment" className="hover:underline font-light">
                Payment
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex-1">
          <h2 className="text-lg font-normal tracking-wide mb-3">LOCATION PREFERENCES</h2>
          <div className="mb-1">Shipping: Moldova</div>
          <div>Language: Romanian</div>
        </div>
      </div>
      <div className="mx-auto mt-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex gap-6 text-2xl">
          <a
            href={tiktokLink}
            target="_blank"
            aria-label="TikTok"
            className="hover:scale-110 transition-transform duration-300 ease-in-out"
          >
            <Icon name="tiktok" />
          </a>
          <a
            href={instagramLink}
            target="_blank"
            aria-label="Instagram"
            className="hover:scale-110 transition-transform duration-300 ease-in-out"
          >
            <Icon name="instagram" />
          </a>
        </div>
        <div className="flex flex-wrap gap-x-8 gap-y-2 text-base underline underline-offset-2">
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/terms-of-use">Terms of Use</Link>
          <Link href="/accessibility">Accessibility</Link>
          <Link href="/your-privacy-choices">Your Privacy Choices</Link>
        </div>
      </div>
    </footer>
  )
}
