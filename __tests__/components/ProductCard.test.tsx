import { render, screen, fireEvent } from '@testing-library/react'
import { CartProvider } from '@/context/CartContext'
import ProductCard from '@/components/ProductCard'
import { Chair } from '@/data/chairs'

const mockChair: Chair = {
  id: 1,
  name: 'Test Chair',
  src: '/test.glb',
  price: 1299,
  category: 'kitchen',
}

const ProductCardWithProvider = ({ chair }: { chair: Chair }) => (
  <CartProvider>
    <ProductCard chair={chair} />
  </CartProvider>
)

describe('ProductCard Component', () => {
  it('should render chair information correctly', () => {
    render(<ProductCardWithProvider chair={mockChair} />)

    expect(screen.getByText('Test Chair')).toBeDefined()
    expect(screen.getByText('1299 MDL')).toBeDefined()
  })

  it('should handle add to cart functionality', () => {
    render(<ProductCardWithProvider chair={mockChair} />)

    const addButton = screen.getByRole('button', { name: /add to cart/i })
    fireEvent.click(addButton)

    // Verify cart counter updates
    expect(screen.getByText('1')).toBeDefined()
  })

  it('should navigate to product details', () => {
    render(<ProductCardWithProvider chair={mockChair} />)

    const productLink = screen.getByRole('link')
    expect(productLink).toBeDefined()
  })

  it('should display correct category', () => {
    render(<ProductCardWithProvider chair={mockChair} />)

    expect(screen.getByText('kitchen')).toBeDefined()
  })

  it('should handle price formatting', () => {
    const expensiveChair = { ...mockChair, price: 10000 }
    render(<ProductCardWithProvider chair={expensiveChair} />)

    expect(screen.getByText('10000 MDL')).toBeDefined()
  })
})
