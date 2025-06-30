import { renderHook, act } from '@testing-library/react'
import { CartProvider, useCart } from '@/context/CartContext'
import { ReactNode } from 'react'

const wrapper = ({ children }: { children: ReactNode }) => <CartProvider>{children}</CartProvider>

describe('CartContext', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  it('should initialize with empty cart', () => {
    const { result } = renderHook(() => useCart(), { wrapper })

    expect(result.current.cart).toEqual([])
    expect(result.current.totalCount).toBe(0)
    expect(result.current.cartOpen).toBe(false)
  })

  it('should add item to cart', () => {
    const { result } = renderHook(() => useCart(), { wrapper })

    act(() => {
      result.current.addToCart(1, 2)
    })

    expect(result.current.cart).toEqual([{ id: 1, quantity: 2 }])
    expect(result.current.totalCount).toBe(2)
    expect(result.current.getItemCount(1)).toBe(2)
  })

  it('should update quantity when adding existing item', () => {
    const { result } = renderHook(() => useCart(), { wrapper })

    act(() => {
      result.current.addToCart(1, 1)
      result.current.addToCart(1, 2)
    })

    expect(result.current.cart).toEqual([{ id: 1, quantity: 3 }])
    expect(result.current.totalCount).toBe(3)
  })

  it('should remove item from cart', () => {
    const { result } = renderHook(() => useCart(), { wrapper })

    act(() => {
      result.current.addToCart(1, 2)
      result.current.addToCart(2, 1)
      result.current.removeFromCart(1)
    })

    expect(result.current.cart).toEqual([{ id: 2, quantity: 1 }])
    expect(result.current.totalCount).toBe(1)
  })

  it('should decrease item quantity', () => {
    const { result } = renderHook(() => useCart(), { wrapper })

    act(() => {
      result.current.addToCart(1, 3)
      result.current.decreaseItem(1)
    })

    expect(result.current.getItemCount(1)).toBe(2)
  })

  it('should remove item when decreasing quantity to 0', () => {
    const { result } = renderHook(() => useCart(), { wrapper })

    act(() => {
      result.current.addToCart(1, 1)
      result.current.decreaseItem(1)
    })

    expect(result.current.cart).toEqual([])
    expect(result.current.getItemCount(1)).toBe(0)
  })

  it('should handle cart modal state', () => {
    const { result } = renderHook(() => useCart(), { wrapper })

    act(() => {
      result.current.openCart()
    })
    expect(result.current.cartOpen).toBe(true)

    act(() => {
      result.current.closeCart()
    })
    expect(result.current.cartOpen).toBe(false)
  })

  it('should persist cart to localStorage', () => {
    const { result } = renderHook(() => useCart(), { wrapper })

    act(() => {
      result.current.addToCart(1, 2)
    })

    expect(localStorage.setItem).toHaveBeenCalledWith(
      'cart',
      JSON.stringify([{ id: 1, quantity: 2 }]),
    )
  })
})
