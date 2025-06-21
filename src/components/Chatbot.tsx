'use client'

import { useState, useRef, useEffect } from 'react'
import { useChat } from '@/context/ChatContext'
import Link from 'next/link'
import texts from '@/data/texts.json'
import { Icon } from '@/components/Icons'
import '@/styles/chatbot.css'

interface ProductSuggestion {
  id: number
  name: string
  price: number
  category: string
}

export default function Chatbot() {
  const { messages, isOpen, isLoading, openChat, closeChat, sendMessage } = useChat()
  const [inputValue, setInputValue] = useState('')
  const [isClicked, setIsClicked] = useState(false)
  const [isClosing, setIsClosing] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const chatTexts = texts.chatbot

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (inputValue.trim()) {
      await sendMessage(inputValue.trim())
      setInputValue('')
    }
  }

  const handleChatButtonClick = () => {
    setIsClicked(true)
    openChat()
    setTimeout(() => setIsClicked(false), 150)
  }

  const handleClose = () => {
    setIsClosing(true)
    setTimeout(() => {
      closeChat()
      setIsClosing(false)
    }, 200)
  }

  const handleProductClick = () => {
    handleClose()
  }

  const formatMessage = (content: string) => {
    return content.replace(
      /https:\/\/stula\.com\/product\/(\d+)/g,
      '<a href="/product/$1" class="text-blue-600 hover:text-blue-800 underline font-medium" target="_blank">Vezi produsul</a>',
    )
  }

  return (
    <>
      {!isOpen && (
        <button
          onClick={handleChatButtonClick}
          className={`fixed bottom-5 right-5 md:bottom-10 md:right-10 bg-black text-white p-5 rounded-full shadow-2xl chatbot-shadow-3xl hover:scale-110 transition-all duration-300 z-50 chatbot-group cursor-pointer ${
            isClicked ? 'scale-95' : ''
          } hover:bg-gray-800`}
          aria-label="Deschide chat"
          style={{
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3), 0 0 20px rgba(0, 0, 0, 0.1)',
          }}
        >
          <div className="relative">
            <Icon
              name="chat"
              size={24}
              className="md:w-8 md:h-8 transition-transform duration-300 group-hover:rotate-12"
            />
            <div className="absolute inset-0 rounded-full bg-white opacity-20 animate-ping"></div>
          </div>

          <span className="absolute -top-16 right-0 bg-black text-white text-xs md:text-sm px-3 md:px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap shadow-lg transform group-hover:-translate-y-1 hidden md:block chatbot-tooltip">
            <div className="font-medium">{chatTexts.buttonTooltip}</div>
            <div className="text-xs text-gray-300 mt-1">{chatTexts.buttonTooltipSubtitle}</div>
            <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black"></div>
          </span>
        </button>
      )}

      {isOpen && (
        <div
          className={`fixed bottom-0 left-0 right-0 md:bottom-8 md:right-8 md:inset-auto md:top-auto md:left-auto chatbot-container chatbot-mobile-height bg-white rounded-t-2xl md:rounded-2xl shadow-2xl border border-gray-100 flex flex-col z-50 overflow-hidden ${
            isClosing
              ? 'chatbot-slideDown md:chatbot-fadeOut'
              : 'chatbot-slideUp md:chatbot-fadeInUp'
          }`}
          style={{
            boxShadow: '0 25px 50px rgba(0, 0, 0, 0.15), 0 0 30px rgba(0, 0, 0, 0.05)',
          }}
        >
          <div className="bg-black text-white p-4 md:p-6 rounded-t-2xl flex justify-between items-center relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="font-bold text-base md:text-lg">{chatTexts.title}</h3>
              <p className="text-xs text-gray-300 mt-1 hidden sm:block">{chatTexts.subtitle}</p>
            </div>
            <button
              onClick={handleClose}
              className="relative z-10 text-white hover:text-gray-300 transition-all duration-200 hover:rotate-90 p-1 rounded-lg hover:bg-white/10"
              aria-label="Închide chat"
            >
              <Icon name="close" size={20} className="md:w-6 md:h-6" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-3 md:p-6 space-y-3 md:space-y-4 bg-gray-50">
            {messages.length === 0 && (
              <div className="text-center text-gray-500 py-6 md:pb-12 chatbot-fadeIn">
                <div className="mb-4 md:mb-6 relative">
                  <div className="w-16 h-16 md:w-20 md:h-20 mx-auto bg-black rounded-full flex items-center justify-center shadow-xl">
                    <Icon name="chat" size={32} className="md:w-10 md:h-10 text-white" />
                  </div>
                  <div className="absolute inset-0 w-16 h-16 md:w-20 md:h-20 mx-auto bg-black rounded-full animate-ping opacity-20"></div>
                </div>
                <h4 className="text-base md:text-lg font-semibold text-gray-800 mb-2">
                  {chatTexts.welcomeTitle}
                </h4>
                <p className="text-sm text-gray-600 mb-3 md:mb-4 px-2">
                  {chatTexts.welcomeMessage}
                </p>

                <div className="bg-white rounded-xl p-3 md:p-4 shadow-lg border border-gray-100 mb-4 md:mb-6">
                  <p className="text-xs font-medium text-gray-700 mb-2 md:mb-3">
                    {chatTexts.askAbout}
                  </p>
                  <div className="space-y-2 text-xs text-gray-600">
                    {chatTexts.categories.map((category, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <span
                          className={`w-2 h-2 rounded-full ${
                            index === 0
                              ? 'bg-green-500'
                              : index === 1
                              ? 'bg-blue-500'
                              : 'bg-purple-500'
                          }`}
                        ></span>
                        <span className="text-xs">{category}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-2 text-xs">
                  {chatTexts.suggestedQuestions.map((question, index) => (
                    <button
                      key={index}
                      onClick={() => sendMessage(question)}
                      className="text-left p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors text-gray-700 hover:text-gray-900 text-xs"
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {messages.map((message, index) => (
              <div
                key={message.id}
                className={`flex chatbot-slideIn ${
                  message.role === 'user' ? 'justify-end' : 'justify-start'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div
                  className={`max-w-[90%] md:max-w-[85%] p-3 md:p-4 rounded-2xl shadow-lg ${
                    message.role === 'user'
                      ? 'bg-black text-white rounded-br-md'
                      : 'bg-white text-gray-800 border border-gray-100 rounded-bl-md'
                  }`}
                >
                  <div
                    className="text-base md:text-sm leading-relaxed"
                    dangerouslySetInnerHTML={{
                      __html:
                        message.role === 'assistant'
                          ? formatMessage(message.content)
                          : message.content,
                    }}
                  />

                  {message.productSuggestions && message.productSuggestions.length > 0 && (
                    <div className="mt-3 md:mt-4 space-y-2 md:space-y-3">
                      <p className="text-xs font-medium text-gray-600 flex items-center gap-2">
                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                        {chatTexts.recommendedProducts}
                      </p>
                      {message.productSuggestions.map((product: ProductSuggestion) => (
                        <Link
                          key={product.id}
                          href={`/product/${product.id}`}
                          onClick={handleProductClick}
                          className="block p-2 md:p-3 bg-white rounded-xl border hover:border-black/20 transition-all duration-200 chatbot-hover-scale hover:shadow-md group"
                        >
                          <div className="text-sm font-medium text-gray-800 group-hover:text-black">
                            {product.name}
                          </div>
                          <div className="text-xs text-gray-600 mt-1 flex justify-between items-center">
                            <span>{product.price} MDL</span>
                            <span className="px-2 py-1 bg-gray-100 rounded-full text-xs">
                              {product.category}
                            </span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  )}

                  <div className="text-xs opacity-60 mt-2 flex items-center gap-1">
                    <Icon name="clock" size={12} />
                    {message.timestamp.toLocaleTimeString('ro-RO', {
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </div>
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex justify-start chatbot-fadeIn">
                <div className="bg-white p-4 rounded-2xl shadow-lg border border-gray-100 rounded-bl-md">
                  <div className="flex items-center space-x-2">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div
                        className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                        style={{ animationDelay: '0.1s' }}
                      ></div>
                      <div
                        className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                        style={{ animationDelay: '0.2s' }}
                      ></div>
                    </div>
                    <span className="text-xs text-gray-500">{chatTexts.loadingMessage}</span>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          <form
            onSubmit={handleSubmit}
            className="p-3 md:p-6 border-t border-gray-100 bg-white rounded-b-2xl"
          >
            <div className="flex space-x-2 md:space-x-3">
              <input
                type="text"
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
                placeholder={chatTexts.placeholderMessage}
                className="flex-1 px-3 md:px-4 py-2 md:py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-black/20 focus:border-black transition-all duration-200 text-sm bg-gray-50 focus:bg-white placeholder-gray-500 focus:outline-none"
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={isLoading || !inputValue.trim()}
                className="bg-black text-white px-3 md:px-6 py-2 md:py-3 rounded-xl hover:bg-gray-800 disabled:bg-gray-400 transition-all duration-200 hover:scale-105 disabled:scale-100 shadow-lg hover:shadow-xl disabled:shadow-none cursor-pointer"
              >
                <Icon
                  name="send"
                  size={16}
                  className="md:w-5 md:h-5 transition-transform duration-200"
                />
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  )
}
