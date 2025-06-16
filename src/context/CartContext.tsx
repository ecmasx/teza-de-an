'use client'
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'

export type CartItem = {
  id: number
  quantity: number
}

interface CartContextType {
  cart: CartItem[]
  addToCart: (id: number, qty?: number) => void
  removeFromCart: (id: number) => void
  decreaseItem: (id: number) => void
  getItemCount: (id: number) => number
  totalCount: number
  cartOpen: boolean
  openCart: () => void
  closeCart: () => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([])
  const [cartOpen, setCartOpen] = useState(false)

  // Load from localStorage
  useEffect(() => {
    const stored = localStorage.getItem('cart')
    if (stored) setCart(JSON.parse(stored))
  }, [])

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  function addToCart(id: number, qty: number = 1) {
    setCart(prev => {
      const found = prev.find(item => item.id === id)
      if (found) {
        return prev.map(item =>
          item.id === id ? { ...item, quantity: item.quantity + qty } : item,
        )
      }
      return [...prev, { id, quantity: qty }]
    })
  }

  function decreaseItem(id: number) {
    setCart(prev => {
      const found = prev.find(item => item.id === id)
      if (!found) return prev
      if (found.quantity === 1) {
        return prev.filter(item => item.id !== id)
      }
      return prev.map(item => (item.id === id ? { ...item, quantity: item.quantity - 1 } : item))
    })
  }

  function removeFromCart(id: number) {
    setCart(prev => prev.filter(item => item.id !== id))
  }

  function getItemCount(id: number) {
    return cart.find(item => item.id === id)?.quantity || 0
  }

  const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0)

  function openCart() {
    setCartOpen(true)
  }
  function closeCart() {
    setCartOpen(false)
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        decreaseItem,
        getItemCount,
        totalCount,
        cartOpen,
        openCart,
        closeCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
