'use client'
import React, { useState } from 'react'
import texts from '@/data/texts.json'

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'success' | 'error' | 'loading'>('idle')
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('loading')
    await new Promise(res => setTimeout(res, 1200))
    if (form.email && form.name && form.message) {
      setStatus('success')
      setForm({ name: '', email: '', message: '' })
    } else {
      setStatus('error')
    }
    setTimeout(() => setStatus('idle'), 4000)
  }

  return (
    <section className="max-w-xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-semibold mb-6">{texts.contact.title}</h1>
      <p className="mb-6 text-gray-700">{texts.contact.description}</p>
      <div className="mb-8">
        <div className="mb-2 font-medium">{texts.contact.email}</div>
        <a href="mailto:support@stula.com" className="text-blue-600 underline">
          {texts.contact.emailValue}
        </a>
        <div className="mt-4 mb-2 font-medium">{texts.contact.phone}</div>
        <a href="tel:+37360123456" className="text-blue-600 underline">
          {texts.contact.phoneValue}
        </a>
        <div className="mt-4 mb-2 font-medium">{texts.contact.address}</div>
        <div>{texts.contact.addressValue}</div>
      </div>
      <form className="bg-white rounded-xl shadow p-6 space-y-4" onSubmit={handleSubmit}>
        {status === 'success' && (
          <div className="bg-green-100 text-green-800 px-4 py-2 rounded mb-2 text-center font-medium border border-green-200">
            {texts.contact.successMessage}
          </div>
        )}
        {status === 'error' && (
          <div className="bg-red-100 text-red-800 px-4 py-2 rounded mb-2 text-center font-medium border border-red-200">
            {texts.contact.errorMessage}
          </div>
        )}
        <div>
          <label className="block mb-1 font-medium">{texts.contact.yourName}</label>
          <input
            type="text"
            name="name"
            className="w-full border rounded px-3 py-2"
            placeholder={texts.forms.namePlaceholder}
            value={form.name}
            onChange={handleChange}
            required
            disabled={status === 'loading'}
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">{texts.contact.yourEmail}</label>
          <input
            type="email"
            name="email"
            className="w-full border rounded px-3 py-2"
            placeholder={texts.forms.emailPlaceholder}
            value={form.email}
            onChange={handleChange}
            required
            disabled={status === 'loading'}
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">{texts.contact.message}</label>
          <textarea
            name="message"
            className="w-full border rounded px-3 py-2"
            rows={4}
            placeholder={texts.forms.helpPlaceholder}
            value={form.message}
            onChange={handleChange}
            required
            disabled={status === 'loading'}
          />
        </div>
        <button
          type="submit"
          className="w-full bg-black text-white py-2 rounded font-medium hover:bg-gray-800 transition disabled:opacity-60 disabled:cursor-not-allowed"
          disabled={status === 'loading'}
        >
          {status === 'loading' ? texts.contact.sending : texts.contact.sendMessage}
        </button>
      </form>
    </section>
  )
}
