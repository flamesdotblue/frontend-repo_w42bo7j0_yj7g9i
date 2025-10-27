import { useState } from 'react'

const API_BASE = import.meta.env.VITE_BACKEND_URL || ''

export default function WaitlistForm() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [message, setMessage] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault()
    setMessage('')

    // basic client-side validation
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    if (!isValid) {
      setStatus('error')
      setMessage('Please enter a valid email address.')
      return
    }

    try {
      setStatus('loading')
      const res = await fetch(`${API_BASE}/waitlist`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })

      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data?.detail || 'Something went wrong. Please try again.')
      }

      setStatus('success')
      setMessage('You are on the list! We\'ll be in touch soon.')
      setEmail('')
    } catch (err) {
      setStatus('error')
      setMessage(err.message)
    }
  }

  return (
    <section id="waitlist" className="w-full py-10 sm:py-16">
      <div className="max-w-5xl mx-auto px-6">
        <div className="bg-white/70 backdrop-blur rounded-2xl border border-gray-200 p-6 sm:p-8 shadow-sm">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Join the waitlist</h2>
          <p className="mt-2 text-gray-600">Be the first to know when we launch.</p>

          <form onSubmit={onSubmit} className="mt-6 flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full sm:flex-1 rounded-xl border border-gray-300 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 transition-colors px-4 py-3 text-gray-900 placeholder:text-gray-400"
              required
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="inline-flex items-center justify-center rounded-xl bg-indigo-600 text-white font-semibold px-6 py-3 shadow hover:bg-indigo-700 focus:outline-none focus-visible:ring-4 focus-visible:ring-indigo-300 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === 'loading' ? 'Joining…' : 'Join waitlist'}
            </button>
          </form>

          {message && (
            <div
              className={`mt-4 text-sm ${
                status === 'success' ? 'text-green-700' : 'text-rose-700'
              }`}
            >
              {message}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
