'use client'
import React, { useState } from 'react'

const faqs = [
  {
    question: 'What materials are your chairs made from?',
    answer:
      'Our chairs are made from high-quality wood, metal, and eco-friendly fabrics to ensure durability and comfort.',
  },
  {
    question: 'Do you offer international shipping?',
    answer:
      'Currently, we only ship within Moldova. Stay tuned for international shipping updates!',
  },
  {
    question: 'Can I preview the chair in my room before buying?',
    answer: 'Yes! Use our AR feature on your phone to preview any chair in your space.',
  },
  {
    question: 'What is your return policy?',
    answer:
      'You can return any product within 30 days of delivery. Please visit our Returns Portal for more details.',
  },
  {
    question: 'How do I care for my furniture?',
    answer:
      'We recommend regular dusting and using a damp cloth for cleaning. Avoid harsh chemicals.',
  },
  {
    question: 'Are the chairs assembled on delivery?',
    answer:
      'Most chairs come pre-assembled. For some models, minimal assembly is required and instructions are included.',
  },
  {
    question: 'Can I track my order?',
    answer: 'Yes, after your order is shipped, you will receive a tracking number via email.',
  },
  {
    question: 'Do you offer bulk discounts?',
    answer:
      'Yes, we offer discounts for bulk and business orders. Please contact us for a custom quote.',
  },
  {
    question: 'How can I contact support?',
    answer: 'You can reach our support team via the Contact page or by emailing support@stula.com.',
  },
  {
    question: 'Is there a warranty on your products?',
    answer: 'All our products come with a 2-year warranty covering manufacturing defects.',
  },
]

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
      <h1 className="text-4xl font-semibold mb-8 text-center">Frequently Asked Questions</h1>
      <div>
        {faqs.map((faq, idx) => (
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
