'use client'
import React, { useState } from 'react'
import { Icon } from './Icons'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="w-full flex items-center justify-between px-4 py-3 bg-white shadow-sm relative z-50">
      {/* Left: Burger menu (mobile) или навигация (desktop) и поиск */}
      <div className="flex items-center gap-4">
        {/* Burger menu — только на мобильных */}
        <button
          aria-label="Open menu"
          className="p-2 block lg:hidden"
          onClick={() => setMenuOpen(true)}
        >
          <Icon name="burger" />
        </button>
        {/* Навигация — только на десктопе */}
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
        {/* Search */}
        <button aria-label="Search" className="p-2">
          <Icon name="search" />
        </button>
      </div>
      {/* Center: Logo */}
      <div className="absolute left-1/2 -translate-x-1/2 flex items-center">
        <span className="text-2xl font-light tracking-wide">
          <Icon name="logo" />
        </span>
      </div>
      {/* Right: Cart */}
      <div className="flex items-center">
        <button aria-label="Cart" className="p-2">
          <Icon name="cart" />
        </button>
      </div>

      {/* Мобильное меню */}
      {menuOpen && (
        <>
          {/* Затемнение */}
          <div
            className="fixed inset-0 bg-black/40 z-40 lg:hidden"
            onClick={() => setMenuOpen(false)}
          />
          {/* Меню */}
          <div className="fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 flex flex-col p-6 gap-6 lg:hidden animate-slide-in">
            <button
              aria-label="Close menu"
              className="self-end mb-4 p-2"
              onClick={() => setMenuOpen(false)}
            >
              <span className="text-2xl">&times;</span>
            </button>
            <nav className="flex flex-col gap-4">
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
