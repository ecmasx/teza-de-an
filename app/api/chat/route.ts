import { NextRequest, NextResponse } from 'next/server'
import OpenAI from 'openai'
import chairs from '@/data/chairs'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export async function POST(request: NextRequest) {
  try {
    const { message, conversationHistory } = await request.json()

    // Create system prompt with product information
    const systemPrompt = `Ești un asistent virtual pentru STULA, un magazin de mobilă din Moldova specializat în scaune moderne cu preview AR. 

Informații despre produse:
${chairs
  .map(
    chair => `- ${chair.name}: ${chair.price} MDL, categoria: ${chair.category}, ID: ${chair.id}`,
  )
  .join('\n')}

Instrucțiuni pentru răspunsuri:
- Răspunde doar în română
- Fii prietenos și profesionist
- NU folosii formatare bold (**text**) sau markdown
- Folosește numerotare simplă (1., 2., 3.) pentru liste
- Scrie numele produselor fără bold, doar cu text normal
- Ajută clienții să găsească scaunele potrivite
- Sugerează produse bazate pe nevoile lor (cameră, buget, stil)
- Oferă link-uri către produse folosind: https://stula.com/product/[ID]
- Menționează că pot vedea produsele în AR pe telefon
- Categoriile disponibile sunt: kitchen, bedroom, office
- Prețurile sunt în MDL (lei moldovenești)
- Formatează textul cu paragrafe scurte și clare
- Folosește liniuțe (-) în loc de asteriscuri pentru puncte

Exemplu de formatare corectă:
Pentru un scaun de birou confortabil, îți recomand următoarele opțiuni:

1. Executive Leather Chair - 399 MDL
Acest scaun este elegant și oferă un confort excelent, perfect pentru birou. 
Vezi produsul: https://stula.com/product/13

2. Foldable Event Chair - 499 MDL  
Dacă ai nevoie de un scaun versatil care să fie ușor de depozitat, acesta este o alegere bună.
Vezi produsul: https://stula.com/product/10

Când sugerezi produse, include în răspuns link-uri către acestea.
`

    // Prepare conversation for OpenAI
    const messages = [
      { role: 'system' as const, content: systemPrompt },
      ...conversationHistory.map((msg: { role: 'user' | 'assistant'; content: string }) => ({
        role: msg.role,
        content: msg.content,
      })),
      { role: 'user' as const, content: message },
    ]

    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: messages,
      max_tokens: 500,
      temperature: 0.7,
    })

    const assistantMessage =
      completion.choices[0]?.message?.content || 'Îmi pare rău, nu pot răspunde acum.'

    // Extract product suggestions from the response
    const productSuggestions = extractProductSuggestions(assistantMessage)

    return NextResponse.json({
      message: assistantMessage,
      productSuggestions,
    })
  } catch (error) {
    console.error('Chat API error:', error)
    return NextResponse.json({ error: 'Eroare la procesarea mesajului' }, { status: 500 })
  }
}

function extractProductSuggestions(message: string) {
  const suggestions = []

  // Look for product IDs in the message
  const productIdMatches = message.match(/product\/(\d+)/g)

  if (productIdMatches) {
    for (const match of productIdMatches) {
      const id = parseInt(match.split('/')[1])
      const chair = chairs.find(c => c.id === id)
      if (chair) {
        suggestions.push({
          id: chair.id,
          name: chair.name,
          price: chair.price,
          category: chair.category,
        })
      }
    }
  }

  return suggestions
}
