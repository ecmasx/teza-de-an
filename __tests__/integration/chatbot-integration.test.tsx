import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { ChatProvider, useChat } from '@/context/ChatContext'
import Chatbot from '@/components/Chatbot'

// Mock fetch for API calls
global.fetch = jest.fn()

const ChatTester = () => {
  const { sendMessage, messages, isLoading } = useChat()

  return (
    <div>
      <button onClick={() => sendMessage('Test message')}>Send Test</button>
      <div data-testid="messages-count">{messages.length}</div>
      <div data-testid="loading">{isLoading ? 'Loading' : 'Not Loading'}</div>
      {messages.map(msg => (
        <div key={msg.id} data-testid={`message-${msg.role}`}>
          {msg.content}
        </div>
      ))}
    </div>
  )
}

const ChatbotWithProvider = () => (
  <ChatProvider>
    <Chatbot />
    <ChatTester />
  </ChatProvider>
)

describe('Chatbot Integration Tests', () => {
  beforeEach(() => {
    ;(fetch as jest.Mock).mockClear()
  })

  it('should handle complete chat flow', async () => {
    ;(fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => ({
        message: 'Îți recomand Scaun de Masă Minimalist',
        productSuggestions: [
          { id: 3, name: 'Scaun de Masă Minimalist', price: 1099, category: 'kitchen' },
        ],
      }),
    })

    render(<ChatbotWithProvider />)

    // Send a test message
    const sendButton = screen.getByText('Send Test')
    fireEvent.click(sendButton)

    // Check loading state
    expect(screen.getByTestId('loading')).toHaveTextContent('Loading')

    // Wait for response
    await waitFor(() => {
      expect(screen.getByTestId('loading')).toHaveTextContent('Not Loading')
    })

    // Check messages
    expect(screen.getByTestId('messages-count')).toHaveTextContent('2') // user + assistant
    expect(screen.getByTestId('message-user')).toHaveTextContent('Test message')
    expect(screen.getByTestId('message-assistant')).toHaveTextContent(
      'Îți recomand Scaun de Masă Minimalist',
    )
  })

  it('should handle API errors gracefully', async () => {
    ;(fetch as jest.Mock).mockRejectedValueOnce(new Error('Network error'))

    render(<ChatbotWithProvider />)

    const sendButton = screen.getByText('Send Test')
    fireEvent.click(sendButton)

    await waitFor(() => {
      expect(screen.getByTestId('loading')).toHaveTextContent('Not Loading')
    })

    // Should show error message
    expect(screen.getByTestId('message-assistant')).toBeInTheDocument()
  })

  it('should handle product suggestions', async () => {
    ;(fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => ({
        message: 'Îți recomand aceste produse',
        productSuggestions: [
          { id: 1, name: 'Scaun 1', price: 1299, category: 'kitchen' },
          { id: 2, name: 'Scaun 2', price: 1999, category: 'bedroom' },
        ],
      }),
    })

    render(<ChatbotWithProvider />)

    const sendButton = screen.getByText('Send Test')
    fireEvent.click(sendButton)

    await waitFor(() => {
      expect(screen.getByTestId('loading')).toHaveTextContent('Not Loading')
    })

    // Check that API was called with correct parameters
    expect(fetch).toHaveBeenCalledWith('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message: 'Test message',
        conversationHistory: [],
      }),
    })
  })

  it('should maintain conversation history', async () => {
    ;(fetch as jest.Mock)
      .mockResolvedValueOnce({
        ok: true,
        json: async () => ({
          message: 'First response',
          productSuggestions: [],
        }),
      })
      .mockResolvedValueOnce({
        ok: true,
        json: async () => ({
          message: 'Second response',
          productSuggestions: [],
        }),
      })

    render(<ChatbotWithProvider />)

    const sendButton = screen.getByText('Send Test')

    // Send first message
    fireEvent.click(sendButton)
    await waitFor(() => {
      expect(screen.getByTestId('messages-count')).toHaveTextContent('2')
    })

    // Send second message
    fireEvent.click(sendButton)
    await waitFor(() => {
      expect(screen.getByTestId('messages-count')).toHaveTextContent('4')
    })

    // Check that second call includes conversation history
    expect(fetch).toHaveBeenLastCalledWith('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: expect.stringContaining('conversationHistory'),
    })
  })

  it('should handle Romanian language responses', async () => {
    ;(fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => ({
        message: 'Bună! Cum te pot ajuta cu alegerea unui scaun?',
        productSuggestions: [],
      }),
    })

    render(<ChatbotWithProvider />)

    const sendButton = screen.getByText('Send Test')
    fireEvent.click(sendButton)

    await waitFor(() => {
      expect(screen.getByTestId('message-assistant')).toHaveTextContent(/Bună.*scaun/)
    })
  })
})
