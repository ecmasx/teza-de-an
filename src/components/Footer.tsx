import React from 'react'
import { Icon } from './Icons'

export default function Footer() {
  return (
    <footer className="w-full px-4 py-8 bg-white border-t text-black">
      {/* Верхний блок: email + секции */}
      <div className="mx-auto flex flex-col gap-10 lg:flex-row lg:justify-between lg:items-start">
        {/* Email подписка */}
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
        {/* About */}
        <div className="flex-1 mb-6 lg:mb-0">
          <h2 className="text-lg font-normal tracking-wide mb-3">Stula</h2>
          <ul className="space-y-1">
            <li>
              <a href="#" className="hover:underline font-light">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline font-light">
                Collaborations
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline font-light">
                Find a Store
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline font-light">
                Contact
              </a>
            </li>
          </ul>
        </div>
        {/* Support */}
        <div className="flex-1 mb-6 lg:mb-0">
          <h2 className="text-lg font-normal tracking-wide mb-3">ORDERS AND SUPPORT</h2>
          <ul className="space-y-1">
            <li>
              <a href="#" className="hover:underline font-light">
                FAQs
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline font-light">
                Returns Portal
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline font-light">
                Shipping
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline font-light">
                Return Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline font-light">
                Payment
              </a>
            </li>
          </ul>
        </div>
        {/* Location */}
        <div className="flex-1">
          <h2 className="text-lg font-normal tracking-wide mb-3">LOCATION PREFERENCES</h2>
          <div className="mb-1">Shipping: Moldova</div>
          <div>Language: Romanian</div>
        </div>
      </div>
      {/* Соцсети и ссылки */}
      <div className="mx-auto mt-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        {/* Соцсети */}
        <div className="flex gap-6 text-2xl">
          <a href="#" aria-label="TikTok">
            <Icon name="tiktok" />
          </a>
          <a href="#" aria-label="Instagram">
            <Icon name="instagram" />
          </a>
        </div>
        {/* Ссылки */}
        <div className="flex flex-wrap gap-x-8 gap-y-2 text-base underline underline-offset-2">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Use</a>
          <a href="#">Accessibility</a>
          <a href="#">Your Privacy Choices</a>
        </div>
      </div>
    </footer>
  )
}
