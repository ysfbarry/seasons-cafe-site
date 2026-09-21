import type { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '@/data/site-config';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'How Seasons Cafe LLC collects, uses, and protects the information you submit through our website.',
};

const lastUpdated = 'September 21, 2026';

export default function PrivacyPage() {
  const { email } = siteConfig;

  return (
    <div className="bg-white min-h-screen">
      <div className="bg-[#0A1628] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#38BDF8] text-xs font-semibold uppercase tracking-widest mb-2">
            Your Data
          </p>
          <h1 className="text-3xl sm:text-4xl font-extrabold mb-3">Privacy Policy</h1>
          <p className="text-gray-400 text-sm">Last updated: {lastUpdated}</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="bg-[#38BDF8]/10 border border-[#38BDF8]/30 rounded-2xl p-6 mb-10">
          <h2 className="font-bold text-[#0A1628] mb-2">The short version</h2>
          <p className="text-gray-700 text-sm leading-relaxed">
            We only collect the contact details you choose to send us through our forms, and we use
            them for one thing: responding to your request. We never sell your information, and we
            do not process payments on this website.
          </p>
        </div>

        <div className="space-y-9 text-gray-600 leading-relaxed">
          <section>
            <h2 className="text-xl font-extrabold text-[#0A1628] mb-3">Information we collect</h2>
            <p className="mb-3">
              We collect information only when you voluntarily submit it through one of our forms.
              Depending on the form, this may include:
            </p>
            <ul className="list-disc pl-6 space-y-1.5 text-sm">
              <li>Your name and business name</li>
              <li>Your email address and phone number</li>
              <li>Your business address, city, and state</li>
              <li>Details about your location, such as type and estimated foot traffic</li>
              <li>Any notes or messages you choose to include</li>
            </ul>
            <p className="mt-3 text-sm">
              We do not require you to create an account, and we do not collect payment or financial
              information anywhere on this site.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-extrabold text-[#0A1628] mb-3">How we use it</h2>
            <p className="text-sm">
              Your information is used solely to respond to your inquiry — preparing a quote,
              evaluating a machine placement, or answering a question. We do not sell, rent, or
              trade your information to third parties, and we will not add you to marketing lists
              without your consent.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-extrabold text-[#0A1628] mb-3">How forms are handled</h2>
            <p className="text-sm">
              Form submissions are delivered to us through Formspree, a third-party form processing
              service, which forwards them to our business email. Your submission passes through
              Formspree&apos;s systems in transit and is subject to their privacy practices in
              addition to ours. All transmission is encrypted over HTTPS.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-extrabold text-[#0A1628] mb-3">Analytics</h2>
            <p className="text-sm">
              We use Vercel Analytics to understand general traffic patterns, such as how many
              people visit and which pages are most popular. This is privacy-friendly and
              aggregated — it does not use cookies to track you and does not build an advertising
              profile of you across other websites.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-extrabold text-[#0A1628] mb-3">Cookies</h2>
            <p className="text-sm">
              This website does not set advertising or tracking cookies.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-extrabold text-[#0A1628] mb-3">Security</h2>
            <p className="text-sm">
              This site is served entirely over encrypted HTTPS connections and is configured with
              modern browser security protections. While no method of transmission over the internet
              can be guaranteed to be completely secure, we take reasonable measures to protect the
              information you send us.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-extrabold text-[#0A1628] mb-3">Retention and your choices</h2>
            <p className="text-sm">
              We keep inquiry information only as long as needed to respond to and follow up on your
              request, and for ordinary business record-keeping. You may ask us to delete the
              information you submitted at any time by contacting us, and we will honor that request
              unless we are required to retain it.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-extrabold text-[#0A1628] mb-3">Children</h2>
            <p className="text-sm">
              This site is intended for businesses and adults. We do not knowingly collect
              information from children under 13.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-extrabold text-[#0A1628] mb-3">Changes</h2>
            <p className="text-sm">
              If we update this policy, we will revise the date shown at the top of this page.
            </p>
          </section>

          <section className="bg-gray-50 rounded-2xl p-6">
            <h2 className="text-xl font-extrabold text-[#0A1628] mb-3">Contact us</h2>
            <p className="text-sm mb-3">
              Questions about this policy, or want your information removed? Reach out:
            </p>
            {email && (
              <a
                href={`mailto:${email}`}
                className="text-[#38BDF8] font-semibold hover:underline text-sm"
              >
                {email}
              </a>
            )}
            <p className="text-xs text-gray-400 mt-4">
              Seasons Cafe LLC · Washington, DC Metro Area
            </p>
          </section>
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/"
            className="text-sm text-gray-400 hover:text-[#38BDF8] transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
