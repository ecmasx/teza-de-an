'use client'
import React, { useState } from 'react'

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
      <h1 className="text-4xl font-semibold mb-6">Contact Us</h1>
      <p className="mb-6 text-gray-700">
        Have a question or need help? Fill out the form below or reach us directly:
      </p>
      <div className="mb-8">
        <div className="mb-2 font-medium">Email:</div>
        <a href="mailto:support@stula.com" className="text-blue-600 underline">
          support@stula.com
        </a>
        <div className="mt-4 mb-2 font-medium">Phone:</div>
        <a href="tel:+37360123456" className="text-blue-600 underline">
          +373 60 123 456
        </a>
        <div className="mt-4 mb-2 font-medium">Address:</div>
        <div>Chisinau, Moldova</div>
      </div>
      <form className="bg-white rounded-xl shadow p-6 space-y-4" onSubmit={handleSubmit}>
        {status === 'success' && (
          <div className="bg-green-100 text-green-800 px-4 py-2 rounded mb-2 text-center font-medium border border-green-200">
            Thank you! Your message has been sent.
          </div>
        )}
        {status === 'error' && (
          <div className="bg-red-100 text-red-800 px-4 py-2 rounded mb-2 text-center font-medium border border-red-200">
            Error: Please fill in all fields.
          </div>
        )}
        <div>
          <label className="block mb-1 font-medium">Your Name</label>
          <input
            type="text"
            name="name"
            className="w-full border rounded px-3 py-2"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
            required
            disabled={status === 'loading'}
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Your Email</label>
          <input
            type="email"
            name="email"
            className="w-full border rounded px-3 py-2"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
            disabled={status === 'loading'}
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Message</label>
          <textarea
            name="message"
            className="w-full border rounded px-3 py-2"
            rows={4}
            placeholder="How can we help you?"
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
          {status === 'loading' ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </section>
  )
}
