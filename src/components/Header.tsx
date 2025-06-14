'use client'
import React, { useState } from 'react'
import { Icon } from './Icons'
import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="w-full flex items-center justify-between px-4 py-3 bg-white sticky top-0 z-50">
      <div className="flex items-center gap-4">
        <button
          aria-label="Open menu"
          className="p-2 block lg:hidden"
          onClick={() => setMenuOpen(true)}
        >
          <Icon name="burger" />
        </button>
        <nav className="hidden lg:flex gap-6">
          <a
            href="#"
            className="relative font-normal after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0 after:bg-black after:transition-all after:duration-500 after:ease-in-out hover:after:w-full"
          >
            Shop
          </a>
          <a
            href="#"
            className="relative font-normal after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0 after:bg-black after:transition-all after:duration-500 after:ease-in-out hover:after:w-full"
          >
            Chairs
          </a>
          <a
            href="#"
            className="relative font-normal after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0 after:bg-black after:transition-all after:duration-500 after:ease-in-out hover:after:w-full"
          >
            Categories
          </a>
        </nav>
      </div>
      <div className="absolute left-1/2 -translate-x-1/2 flex items-center">
        <Link href="/" className="text-2xl font-light tracking-wide">
          <Image src="/images/logo.png" alt="logo" width={100} height={100} />
        </Link>
      </div>
      <div className="flex items-center gap-4">
        <button aria-label="Search" className="p-2">
          <Icon name="search" />
        </button>
        <button aria-label="Cart" className="p-2">
          <Icon name="cart" />
        </button>
      </div>

      <div
        className={`fixed inset-0 bg-black transition-opacity duration-500 ease-in-out lg:hidden z-40 ${
          menuOpen ? 'opacity-40 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMenuOpen(false)}
      />

      <div
        className={`fixed top-0 left-0 h-full w-4/5 bg-white shadow-lg z-50 flex flex-col pt-8 px-4 gap-6 lg:hidden transform transition-transform duration-500 ease-in-out ${
          menuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <button
          aria-label="Close menu"
          className="self-end w-16 h-16 flex items-center justify-center"
          onClick={() => setMenuOpen(false)}
        >
          <Icon name="close" />
        </button>
        <nav className="flex flex-col gap-4 px-4 uppercase">
          <a
            href="#"
            className="relative text-lg font-medium after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0 after:bg-black after:transition-all after:duration-500 after:ease-in-out hover:after:w-full"
            onClick={() => setMenuOpen(false)}
          >
            Shop
          </a>
          <a
            href="#"
            className="relative text-lg font-medium after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0 after:bg-black after:transition-all after:duration-500 after:ease-in-out hover:after:w-full"
            onClick={() => setMenuOpen(false)}
          >
            Chairs
          </a>
          <a
            href="#"
            className="relative text-lg font-medium after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0 after:bg-black after:transition-all after:duration-500 after:ease-in-out hover:after:w-full"
            onClick={() => setMenuOpen(false)}
          >
            Categories
          </a>
        </nav>
        <div className="mt-auto flex items-center gap-6 px-4 pb-8">
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:scale-110"
          >
            <Icon
              name="instagram"
              size={24}
              className="transition-transform duration-300 ease-in-out "
            />
          </a>
          <a
            href="https://www.tiktok.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
            className="hover:scale-110 transition-transform duration-300 ease-in-out"
          >
            <Icon
              name="tiktok"
              size={24}
              className="transition-transform duration-300 ease-in-out "
            />
          </a>
        </div>
      </div>
    </header>
  )
}
