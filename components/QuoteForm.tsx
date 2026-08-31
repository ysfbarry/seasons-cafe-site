'use client';

import { useState, FormEvent } from 'react';
import { machines } from '@/data/machines';

const FORMSPREE_URL = 'https://formspree.io/f/xoeqqbpk';

export default function QuoteForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [otherChecked, setOtherChecked] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('submitting');
    setErrorMsg('');

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(FORMSPREE_URL, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });

      if (res.ok) {
        setStatus('success');
        form.reset();
      } else {
        const json = await res.json();
        setErrorMsg(json?.errors?.[0]?.message ?? 'Something went wrong. Please try again.');
        setStatus('error');
      }
    } catch {
      setErrorMsg('Network error. Please check your connection and try again.');
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
        <div className="text-4xl mb-3">✅</div>
        <h3 className="text-xl font-bold text-green-800 mb-2">Quote Request Received!</h3>
        <p className="text-green-700">
          Thank you! A member of the Seasons Cafe team will be in touch within 1–2 business days.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="mt-6 px-6 py-2 bg-[#38BDF8] text-[#0A1628] font-semibold rounded-md hover:bg-[#0EA5E9] transition-colors"
        >
          Submit Another Request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {status === 'error' && (
        <div className="bg-red-50 border border-red-200 text-red-700 rounded-lg px-4 py-3 text-sm">
          {errorMsg}
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            required
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#38BDF8] focus:border-transparent"
          />
        </div>
        <div>
          <label htmlFor="businessName" className="block text-sm font-medium text-gray-700 mb-1">
            Business Name <span className="text-red-500">*</span>
          </label>
          <input
            id="businessName"
            name="businessName"
            type="text"
            required
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#38BDF8] focus:border-transparent"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            Phone <span className="text-red-500">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#38BDF8] focus:border-transparent"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#38BDF8] focus:border-transparent"
          />
        </div>
      </div>

      {/* Machines of interest */}
      <div>
        <p className="block text-sm font-medium text-gray-700 mb-2">
          Machine(s) of Interest <span className="text-red-500">*</span>
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {machines.map((machine) => (
            <label key={machine.id} className="flex items-start gap-2 cursor-pointer group">
              <input
                type="checkbox"
                name="machines"
                value={machine.name}
                className="mt-0.5 accent-[#38BDF8]"
              />
              <span className="text-sm text-gray-700 group-hover:text-gray-900">
                {machine.name}
              </span>
            </label>
          ))}
          <label className="flex items-start gap-2 cursor-pointer group">
            <input
              type="checkbox"
              name="machines"
              value="Other Machine"
              className="mt-0.5 accent-[#38BDF8]"
              onChange={(e) => setOtherChecked(e.target.checked)}
            />
            <span className="text-sm text-gray-700 group-hover:text-gray-900 font-medium">
              Other Machine (describe below)
            </span>
          </label>
        </div>

        {otherChecked && (
          <div className="mt-4 space-y-3 bg-amber-50 border border-amber-200 rounded-lg p-4">
            <div>
              <label htmlFor="otherMachineDescription" className="block text-sm font-medium text-gray-700 mb-1">
                Describe the machine you&apos;re looking for <span className="text-red-500">*</span>
              </label>
              <textarea
                id="otherMachineDescription"
                name="otherMachineDescription"
                rows={3}
                placeholder="e.g. A compact hot drink machine for a small office, around 200 cups capacity, with a touchscreen..."
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#38BDF8] focus:border-transparent resize-none"
              />
            </div>
            <div className="bg-white border border-amber-300 rounded-md p-3 text-sm text-gray-600">
              <p className="font-semibold text-gray-800 mb-1">Have a photo of what you&apos;re looking for?</p>
              <p>
                Email your reference photos to{' '}
                <a href="mailto:1seasonscafe@gmail.com" className="text-[#38BDF8] font-medium hover:underline">
                  1seasonscafe@gmail.com
                </a>{' '}
                with the subject line <span className="font-mono bg-gray-100 px-1 rounded">Quote Request – Machine Photo</span> and we&apos;ll source it for you.
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Quantity */}
      <div>
        <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-1">
          Quantity Needed <span className="text-red-500">*</span>
        </label>
        <select
          id="quantity"
          name="quantity"
          required
          className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#38BDF8] focus:border-transparent bg-white"
        >
          <option value="">Select quantity…</option>
          <option>1</option>
          <option>2–5</option>
          <option>6–10</option>
          <option>11–25</option>
          <option>25+</option>
        </select>
      </div>

      {/* Notes */}
      <div>
        <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-1">
          Additional Notes
        </label>
        <textarea
          id="notes"
          name="notes"
          rows={4}
          placeholder="Tell us about your space, timeline, or any questions…"
          className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#38BDF8] focus:border-transparent resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full bg-[#38BDF8] text-[#0A1628] font-bold py-3 rounded-md hover:bg-[#0EA5E9] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === 'submitting' ? 'Sending…' : 'Submit Quote Request'}
      </button>
    </form>
  );
}
