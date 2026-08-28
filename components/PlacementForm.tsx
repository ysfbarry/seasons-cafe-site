'use client';

import { useState, FormEvent } from 'react';

const FORMSPREE_URL = 'https://formspree.io/f/xoeqqbpk';

const locationTypes = ['Office', 'Gym', 'Hotel', 'School', 'Retail', 'Other'];

const footTrafficOptions = [
  'Under 50/day',
  '50–150/day',
  '150–500/day',
  '500–1,000/day',
  '1,000+/day',
];

export default function PlacementForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

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
        <h3 className="text-xl font-bold text-green-800 mb-2">Placement Request Received!</h3>
        <p className="text-green-700">
          Awesome! A Seasons Cafe representative will reach out within 1–2 business days to discuss
          the best machine for your location.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="mt-6 px-6 py-2 bg-[#D4A017] text-[#0A1628] font-semibold rounded-md hover:bg-[#e6b21e] transition-colors"
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
          <label htmlFor="contactName" className="block text-sm font-medium text-gray-700 mb-1">
            Contact Name <span className="text-red-500">*</span>
          </label>
          <input
            id="contactName"
            name="contactName"
            type="text"
            required
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#D4A017] focus:border-transparent"
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
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#D4A017] focus:border-transparent"
          />
        </div>
        <div>
          <label htmlFor="streetAddress" className="block text-sm font-medium text-gray-700 mb-1">
            Street Address <span className="text-red-500">*</span>
          </label>
          <input
            id="streetAddress"
            name="streetAddress"
            type="text"
            required
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#D4A017] focus:border-transparent"
          />
        </div>
        <div>
          <label htmlFor="cityState" className="block text-sm font-medium text-gray-700 mb-1">
            City / State <span className="text-red-500">*</span>
          </label>
          <input
            id="cityState"
            name="cityState"
            type="text"
            required
            placeholder="e.g. Washington, DC"
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#D4A017] focus:border-transparent"
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
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#D4A017] focus:border-transparent"
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
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#D4A017] focus:border-transparent"
          />
        </div>
      </div>

      {/* Location type */}
      <div>
        <label htmlFor="locationType" className="block text-sm font-medium text-gray-700 mb-1">
          Location Type <span className="text-red-500">*</span>
        </label>
        <select
          id="locationType"
          name="locationType"
          required
          className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#D4A017] focus:border-transparent bg-white"
        >
          <option value="">Select location type…</option>
          {locationTypes.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      {/* Foot traffic */}
      <div>
        <label htmlFor="footTraffic" className="block text-sm font-medium text-gray-700 mb-1">
          Estimated Daily Foot Traffic <span className="text-red-500">*</span>
        </label>
        <select
          id="footTraffic"
          name="footTraffic"
          required
          className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#D4A017] focus:border-transparent bg-white"
        >
          <option value="">Select foot traffic…</option>
          {footTrafficOptions.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
          Additional Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Tell us about your location, any special requirements, or questions…"
          className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#D4A017] focus:border-transparent resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full bg-[#D4A017] text-[#0A1628] font-bold py-3 rounded-md hover:bg-[#e6b21e] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === 'submitting' ? 'Sending…' : 'Submit Placement Request'}
      </button>
    </form>
  );
}
