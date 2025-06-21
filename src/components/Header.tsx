'use client'
import React, { useState, useRef, useEffect } from 'react'
import { Icon } from './Icons'
import Link from 'next/link'
import Image from 'next/image'
import chairs from '@/data/chairs'
import NavLink from '@/components/NavLink'
import { useCart } from '@/context/CartContext'
import ModelViewer from '@/components/ModelViewer'
import texts from '@/data/texts.json'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [query, setQuery] = useState('')
  const searchRef = useRef<HTMLDivElement>(null)
  const { cart, cartOpen, openCart, closeCart, removeFromCart, decreaseItem, addToCart } = useCart()

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

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      const cartDrawer = document.querySelector('.cart-drawer')
      if (cartOpen && cartDrawer && !cartDrawer.contains(e.target as Node)) {
        cartDrawer.classList.add('closing')
        setTimeout(() => {
          closeCart()
          cartDrawer.classList.remove('closing')
        }, 300)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [cartOpen, closeCart])

  return (
    <header className="w-full flex items-center justify-between px-8 py-3 bg-white sticky top-10 z-50 border-b border-black/40">
      <div className="flex items-center gap-4">
        <button
          aria-label={texts.ariaLabels.openMenu}
          className="p-2 cursor-pointer block lg:hidden"
          onClick={() => setMenuOpen(true)}
        >
          <Icon name="burger" />
        </button>
        <nav className="hidden lg:flex gap-6">
          <NavLink href="/shop" className="font-normal">
            {texts.navigation.shop}
          </NavLink>
          <NavLink href="/categories" className="font-normal">
            {texts.navigation.categories}
          </NavLink>
        </nav>
      </div>
      <div className="absolute left-1/2 -translate-x-1/2 flex items-center">
        <Link href="/" className="text-2xl font-light tracking-wide">
          <Image src="/images/logo.png" alt={texts.altTexts.logo} width={96} height={96} />
        </Link>
      </div>
      <div className="flex items-center gap-4">
        <div className="relative" ref={searchRef}>
          <button
            aria-label={texts.ariaLabels.search}
            className="p-2 cursor-pointer"
            onClick={() => setSearchOpen(prev => !prev)}
          >
            <Icon name="search" />
          </button>
          <input
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder={texts.search.placeholder}
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
                      <span className="text-sm">
                        {c.price} {texts.common.currency}
                      </span>
                    </Link>
                  </li>
                ))}
              {chairs.filter(c => c.name.toLowerCase().includes(query.toLowerCase())).length ===
                0 && <li className="py-4 text-center text-gray-500">{texts.search.noResults}</li>}
            </ul>
          )}
        </div>
        <button
          aria-label={texts.ariaLabels.cart}
          className={`p-2 cursor-pointer transition-transform duration-300 ${
            cartOpen ? 'scale-90' : ''
          }`}
          onClick={openCart}
        >
          <Icon name="cart" />
        </button>
      </div>

      <div
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${
          menuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMenuOpen(false)}
      />
      <div
        className={`fixed top-0 left-0 h-full w-4/5 max-w-xs bg-white rounded-r-3xl shadow-2xl z-50 flex flex-col pt-8 px-8 gap-8 transform transition-transform duration-300 ease-in-out lg:hidden ${
          menuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <button
          aria-label={texts.ariaLabels.closeMenu}
          className="self-end mb-4 p-2 rounded-full hover:bg-gray-100 transition-transform duration-200 hover:rotate-90"
          onClick={() => setMenuOpen(false)}
        >
          <Icon name="close" size={28} />
        </button>
        <nav className="flex flex-col gap-6 mt-4">
          <NavLink
            href="/shop"
            className="text-lg font-semibold tracking-wide hover:text-yellow-500 transition"
            onClick={() => setMenuOpen(false)}
          >
            {texts.navigation.shop}
          </NavLink>
          <NavLink
            href="/categories"
            className="text-lg font-semibold tracking-wide hover:text-yellow-500 transition"
            onClick={() => setMenuOpen(false)}
          >
            {texts.navigation.categories}
          </NavLink>
        </nav>
        <div className="mt-auto flex flex-col items-center gap-2 pb-8">
          <span className="text-xs text-gray-400 mb-1">Follow us</span>
          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-pink-500 transition-colors"
            aria-label={texts.ariaLabels.instagram}
          >
            <Icon name="instagram" size={28} />
          </a>
        </div>
      </div>

      <div
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${
          cartOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeCart}
      />
      <div
        className={`fixed top-0 right-0 h-full w-full md:max-w-md max-w-xs bg-white rounded-l-3xl shadow-2xl z-50 flex flex-col pt-8 px-8 gap-6 transform transition-transform duration-300 ease-in-out cart-drawer ${
          cartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <button
          aria-label={texts.ariaLabels.closeCart}
          className="self-end mb-4 p-2 rounded-full hover:bg-gray-100 transition-transform duration-200 hover:rotate-90"
          onClick={closeCart}
        >
          <Icon name="close" size={28} />
        </button>
        <h2 className="text-xl font-semibold">{texts.cart.title}</h2>
        <div className="flex-1 flex flex-col items-center justify-center text-gray-500 w-full">
          {cart.length === 0 ? (
            <div>{texts.cart.empty}</div>
          ) : (
            <>
              <div className="w-full flex flex-col justify-start h-full gap-4">
                {cart.map(item => {
                  const chair = chairs.find(c => c.id === item.id)
                  if (!chair) return null
                  return (
                    <div key={item.id} className="flex items-center gap-4 py-2">
                      <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden border">
                        <ModelViewer
                          src={chair.src}
                          auto-rotate
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div className="flex-1 flex flex-col">
                        <span className="font-medium text-gray-900">{chair.name}</span>
                        <span className="text-sm text-yellow-500">{chair.price} mdl</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          aria-label="Decrease quantity"
                          className="p-1 text-black hover:text-red-500 transition-colors"
                          onClick={() => {
                            if (item.quantity > 1) {
                              decreaseItem(item.id)
                            } else {
                              removeFromCart(item.id)
                            }
                          }}
                        >
                          <Icon name="minus" className="hover:cursor-pointer" size={24} />
                        </button>
                        <span className="text-sm font-semibold">{item.quantity}</span>
                        <button
                          aria-label="Increase quantity"
                          className="p-1 text-black hover:text-green-600 transition-colors"
                          onClick={() => addToCart(item.id, 1)}
                        >
                          <Icon name="plus" className="hover:cursor-pointer" size={24} />
                        </button>
                      </div>
                    </div>
                  )
                })}
              </div>
            </>
          )}
        </div>
        <div className="mt-4 text-right border-t border-black py-2">
          <span className="text-lg text-black font-semibold">
            Total:{' '}
            {cart.reduce((sum, item) => {
              const chair = chairs.find(c => c.id === item.id)
              return sum + (chair ? chair.price * item.quantity : 0)
            }, 0)}{' '}
            mdl
          </span>
        </div>
        <button className="mt-auto mb-8 w-full bg-black text-white py-3 rounded-full font-medium hover:cursor-pointer hover:bg-white hover:text-black border border-black transition-colors">
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
