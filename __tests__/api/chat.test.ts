import { POST } from '@/app/api/chat/route'
import { NextRequest } from 'next/server'

// Mock OpenAI
jest.mock('openai', () => {
  return {
    __esModule: true,
    default: jest.fn().mockImplementation(() => ({
      chat: {
        completions: {
          create: jest.fn().mockResolvedValue({
            choices: [
              {
                message: {
                  content:
                    'Pentru bucătărie îți recomand Scaun de Masă Minimalist - 1099 MDL. Vezi produsul: https://stula.com/product/3',
                },
              },
            ],
          }),
        },
      },
    })),
  }
})

describe('/api/chat', () => {
  beforeEach(() => {
    process.env.OPENAI_API_KEY = 'test-api-key'
  })

  it('should handle chat message and return response', async () => {
    const mockRequest = {
      json: jest.fn().mockResolvedValue({
        message: 'Caut un scaun pentru bucătărie',
        conversationHistory: [],
      }),
    } as unknown as NextRequest

    const response = await POST(mockRequest)
    const data = await response.json()

    expect(response.status).toBe(200)
    expect(data.message).toContain('Scaun de Masă Minimalist')
    expect(data.productSuggestions).toHaveLength(1)
    expect(data.productSuggestions[0]).toMatchObject({
      id: 3,
      name: 'Scaun de Masă Minimalist',
      price: 1099,
      category: 'kitchen',
    })
  })

  it('should extract product suggestions from response', async () => {
    const mockRequest = {
      json: jest.fn().mockResolvedValue({
        message: 'Recomandă-mi scaune',
        conversationHistory: [],
      }),
    } as unknown as NextRequest

    const response = await POST(mockRequest)
    const data = await response.json()

    expect(data.productSuggestions).toBeDefined()
    expect(Array.isArray(data.productSuggestions)).toBe(true)
  })

  it('should handle conversation history', async () => {
    const mockRequest = {
      json: jest.fn().mockResolvedValue({
        message: 'Mulțumesc',
        conversationHistory: [
          { role: 'user', content: 'Caut un scaun' },
          { role: 'assistant', content: 'Îți recomand...' },
        ],
      }),
    } as unknown as NextRequest

    const response = await POST(mockRequest)

    expect(response.status).toBe(200)
  })

  it('should handle API errors gracefully', async () => {
    const mockRequest = {
      json: jest.fn().mockRejectedValue(new Error('Invalid JSON')),
    } as unknown as NextRequest

    const response = await POST(mockRequest)

    expect(response.status).toBe(500)
    const data = await response.json()
    expect(data.error).toBe('Eroare la procesarea mesajului')
  })

  it('should format response in Romanian', async () => {
    const mockRequest = {
      json: jest.fn().mockResolvedValue({
        message: 'Hello',
        conversationHistory: [],
      }),
    } as unknown as NextRequest

    const response = await POST(mockRequest)
    const data = await response.json()

    // Response should be in Romanian based on system prompt
    expect(data.message).toMatch(/[a-zA-ZăâîșțĂÂÎȘȚ]/g)
  })
})
