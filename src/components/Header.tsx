'use client'
import React, { useState, useRef, useEffect } from 'react'
import { Icon } from './Icons'
import Link from 'next/link'
import Image from 'next/image'
import { instagramLink, tiktokLink } from '@/lib/links'
import chairs from '@/data/chairs.json'
import NavLink from '@/components/NavLink'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [cartOpen, setCartOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [query, setQuery] = useState('')
  const searchRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      const isDesktop = window.matchMedia('(min-width: 1024px)').matches
      if (
        isDesktop &&
        searchOpen &&
        searchRef.current &&
        !searchRef.current.contains(e.target as Node)
      ) {
        setSearchOpen(false)
        setQuery('')
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [searchOpen])

  return (
    <header className="w-full flex items-center justify-between px-8 py-3 bg-white sticky top-10 z-50">
      <div className="flex items-center gap-4">
        <button
          aria-label="Open menu"
          className="p-2 cursor-pointer block lg:hidden"
          onClick={() => setMenuOpen(true)}
        >
          <Icon name="burger" />
        </button>
        <nav className="hidden lg:flex gap-6">
          <NavLink href="/shop" className="font-normal">
            Shop
          </NavLink>
          <NavLink href="/categories" className="font-normal">
            Categories
          </NavLink>
        </nav>
      </div>
      <div className="absolute left-1/2 -translate-x-1/2 flex items-center">
        <Link href="/" className="text-2xl font-light tracking-wide">
          <Image src="/images/logo.png" alt="logo" width={100} height={100} />
        </Link>
      </div>
      <div className="flex items-center gap-4">
        <div className="relative" ref={searchRef}>
          <button
            aria-label="Search"
            className="p-2 cursor-pointer"
            onClick={() => setSearchOpen(prev => !prev)}
          >
            <Icon name="search" />
          </button>
          <input
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Search..."
            className={`hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 border-b border-black py-1 pl-2 focus:outline-none bg-transparent transition-all duration-300 ${
              searchOpen ? 'w-40 xl:w-80 opacity-100' : 'w-0 opacity-0 pointer-events-none'
            }`}
            style={{ minWidth: 0 }}
          />
          {searchOpen && query && (
            <ul className="hidden lg:block absolute right-0 mt-2 w-80 max-h-60 overflow-y-auto bg-white border shadow divide-y z-50">
              {chairs
                .filter(c => c.name.toLowerCase().includes(query.toLowerCase()))
                .slice(0, 10)
                .map(c => (
                  <li key={c.id} className="py-2 px-2 hover:bg-gray-50">
                    <Link
                      href={`/product/${c.id}`}
                      className="flex justify-between items-center"
                      onClick={() => {
                        setSearchOpen(false)
                        setQuery('')
                      }}
                    >
                      <span>{c.name}</span>
                      <span className="text-sm">{c.price} mdl</span>
                    </Link>
                  </li>
                ))}
              {chairs.filter(c => c.name.toLowerCase().includes(query.toLowerCase())).length ===
                0 && <li className="py-4 text-center text-gray-500">No results</li>}
            </ul>
          )}
        </div>
        <button
          aria-label="Cart"
          className={`p-2 cursor-pointer transition-transform duration-300 ${
            cartOpen ? 'scale-90' : ''
          }`}
          onClick={() => setCartOpen(true)}
        >
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
        className={`fixed inset-0 bg-black transition-opacity duration-500 ease-in-out z-40 ${
          cartOpen ? 'opacity-40 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setCartOpen(false)}
      />

      <div
        className={`fixed top-0 left-0 h-full w-4/5 bg-white shadow-lg z-50 flex flex-col pt-8 px-4 gap-6 lg:hidden transform transition-transform duration-500 ease-in-out ${
          menuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <button
          aria-label="Close menu"
          className="self-end w-16 h-16 flex items-center justify-center cursor-pointer"
          onClick={() => setMenuOpen(false)}
        >
          <Icon name="close" />
        </button>
        <nav className="flex flex-col gap-4 px-4 uppercase">
          <NavLink
            href="/shop"
            className="relative text-lg font-medium after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0 after:bg-black after:transition-all after:duration-500 after:ease-in-out hover:after:w-full"
            onClick={() => setMenuOpen(false)}
          >
            Shop
          </NavLink>
          <NavLink
            href="/categories"
            className="relative text-lg font-medium after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0 after:bg-black after:transition-all after:duration-500 after:ease-in-out hover:after:w-full"
            onClick={() => setMenuOpen(false)}
          >
            Categories
          </NavLink>
        </nav>
        <div className="mt-auto flex items-center gap-6 px-4 pb-8">
          <a
            href={instagramLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:scale-110 cursor-pointer"
          >
            <Icon
              name="instagram"
              size={24}
              className="transition-transform duration-300 ease-in-out cursor-pointer"
            />
          </a>
          <a
            href={tiktokLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
            className="hover:scale-110 transition-transform duration-300 ease-in-out cursor-pointer"
          >
            <Icon
              name="tiktok"
              size={24}
              className="transition-transform duration-300 ease-in-out cursor-pointer"
            />
          </a>
        </div>
      </div>

      <div
        className={`fixed top-0 right-0 h-full w-4/5 md:w-96 bg-white shadow-lg z-50 flex flex-col pt-8 px-6 md:px-8 gap-6 transform transition-transform duration-500 ease-in-out ${
          cartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between">
          <button
            aria-label="Close cart"
            className="self-end w-16 h-16 flex items-center justify-center cursor-pointer"
            onClick={() => setCartOpen(false)}
          >
            <Icon name="close" />
          </button>
          <h2 className="text-xl font-semibold">Your Cart</h2>
        </div>
        <div className="flex-1 flex items-center justify-center text-gray-500">Cart is empty</div>
        <button className="mt-auto mb-8 w-full bg-black text-white py-3 rounded-full font-medium">
          Checkout
        </button>
      </div>

      <div
        className={`lg:hidden fixed inset-0 bg-black transition-opacity duration-300 z-40 ${
          searchOpen ? 'opacity-40 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      />

      <div
        className={`lg:hidden fixed top-0 left-0 w-full bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          searchOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="flex items-center gap-4 p-4">
          <input
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            autoFocus={searchOpen}
            placeholder="Search chairs..."
            className="flex-1 border-b border-black py-2 focus:outline-none"
          />
          <button aria-label="Close search" onClick={() => setSearchOpen(false)} className="p-2">
            <Icon name="close" />
          </button>
        </div>
        {query && (
          <ul className="max-h-60 overflow-y-auto divide-y">
            {chairs
              .filter(c => c.name.toLowerCase().includes(query.toLowerCase()))
              .slice(0, 10)
              .map(c => (
                <li key={c.id} className="py-2 px-4 hover:bg-gray-50">
                  <Link
                    href={`/product/${c.id}`}
                    className="flex justify-between items-center"
                    onClick={() => {
                      setSearchOpen(false)
                      setQuery('')
                    }}
                  >
                    <span>{c.name}</span>
                    <span className="text-sm">{c.price} mdl</span>
                  </Link>
                </li>
              ))}
            {chairs.filter(c => c.name.toLowerCase().includes(query.toLowerCase())).length ===
              0 && <li className="py-4 text-center text-gray-500">No results</li>}
          </ul>
        )}
      </div>
    </header>
  )
}
