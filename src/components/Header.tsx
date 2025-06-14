'use client'
import React, { useState } from 'react'
import { Icon } from './Icons'
import Link from 'next/link'

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
          <a href="#" className="font-normal hover:underline">
            Shop
          </a>
          <a href="#" className="font-normal hover:underline">
            Chairs
          </a>
          <a href="#" className="font-normal hover:underline">
            Categories
          </a>
        </nav>
      </div>
      <div className="absolute left-1/2 -translate-x-1/2 flex items-center">
        <Link href="/" className="text-2xl font-light tracking-wide">
          <Icon name="logo" size={64} className="py-1.5" />
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

      {menuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/40 z-40 lg:hidden"
            onClick={() => setMenuOpen(false)}
          />
          <div className="fixed top-0 left-0 h-full w-4/5 bg-white shadow-lg z-50 flex flex-col pt-4 px-4 gap-6 lg:hidden animate-slide-in duration-300">
            <button
              aria-label="Close menu"
              className="self-end w-16 h-16 flex items-center justify-center"
              onClick={() => setMenuOpen(false)}
            >
              <Icon name="close" />
            </button>
            <nav className="flex flex-col gap-4 px-4 uppercase">
              <a href="#" className="text-lg font-medium" onClick={() => setMenuOpen(false)}>
                Shop
              </a>
              <a href="#" className="text-lg font-medium" onClick={() => setMenuOpen(false)}>
                Chairs
              </a>
              <a href="#" className="text-lg font-medium" onClick={() => setMenuOpen(false)}>
                Categories
              </a>
            </nav>
          </div>
        </>
      )}
    </header>
  )
}
