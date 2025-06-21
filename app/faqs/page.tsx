'use client'
import React, { useState } from 'react'
import texts from '@/data/texts.json'

function AccordionItem({
  question,
  answer,
  isOpen,
  onClick,
}: {
  question: string
  answer: string
  isOpen: boolean
  onClick: () => void
}) {
  return (
    <div
      className={`rounded-xl mb-4 overflow-hidden border transition-shadow ${
        isOpen ? 'shadow-lg border-black/10 bg-gray-50' : 'border-gray-200 bg-white'
      }`}
    >
      <button
        className={`w-full flex justify-between items-center px-6 py-5 text-lg font-medium focus:outline-none transition-colors ${
          isOpen ? 'text-black' : 'text-gray-800 hover:bg-gray-50'
        }`}
        onClick={onClick}
        aria-expanded={isOpen}
      >
        <span>{question}</span>
        <span
          className={`ml-4 flex items-center justify-center w-8 h-8transition-transform duration-300 ${
            isOpen ? 'rotate-180 border-black' : ''
          }`}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 8L10 12L14 8"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </button>
      <div
        className={`px-6 grid transition-all duration-300 ease-in-out ${
          isOpen ? 'grid-rows-[1fr] py-2' : 'grid-rows-[0fr] py-0'
        }`}
        style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
      >
        <div
          className={`overflow-hidden text-gray-600 text-base transition-opacity duration-300 ${
            isOpen ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {answer}
        </div>
      </div>
    </div>
  )
}

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="max-w-2xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-semibold mb-8 text-center">{texts.faqs.title}</h1>
      <div>
        {texts.faqs.items.map((faq, idx) => (
          <AccordionItem
            key={faq.question}
            question={faq.question}
            answer={faq.answer}
            isOpen={openIndex === idx}
            onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
          />
        ))}
      </div>
    </section>
  )
}
