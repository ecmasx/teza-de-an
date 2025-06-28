import { useState } from 'react'
import { getStripe } from '@/lib/stripe'
import { CartItem } from '@/context/CartContext'

export function useStripeCheckout() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const createCheckoutSession = async (items: CartItem[]) => {
    try {
      setLoading(true)
      setError(null)

      // Validate items
      if (!items || items.length === 0) {
        throw new Error('Корзина пуста')
      }

      // Create checkout session
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ items }),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || 'Eroare la crearea sesiunii de plată')
      }

      const { sessionId } = await response.json()

      // Redirect to Stripe Checkout
      const stripe = await getStripe()
      if (!stripe) {
        throw new Error('Stripe nu a putut fi încărcat')
      }

      const { error } = await stripe.redirectToCheckout({
        sessionId,
      })

      if (error) {
        throw new Error(error.message)
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'A apărut o eroare neașteptată')
    } finally {
      setLoading(false)
    }
  }

  return {
    createCheckoutSession,
    loading,
    error,
  }
}
