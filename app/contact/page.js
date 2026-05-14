// app/contact/page.js
import Link from 'next/link';
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-100 flex items-center justify-center overflow-hidden bg-linear-to-r from-amber-50 to-rose-50">
        <div className="relative z-10 text-center px-6">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">Contact Us</h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto">
            We're here to help — reach out anytime
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Left: Contact Info + Form */}
          <div>
            <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
            
            <div className="space-y-8 mb-12">
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center shrink-0">
                  <MapPin className="h-6 w-6 text-amber-700" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Our Location</h3>
                  <p className="text-gray-700">
                    Dakshin Puri<br />
                    Delhi, India
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center shrink-0">
                  <Phone className="h-6 w-6 text-amber-700" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Phone</h3>
                  <p className="text-gray-700">
                    <a href="tel:+919999999999" className="hover:text-amber-700 transition">
                      +91 9560323084
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center shrink-0">
                  <Mail className="h-6 w-6 text-amber-700" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Email</h3>
                  <p className="text-gray-700">
                    <a href="mailto:hello@narijewelry.com" className="hover:text-amber-700 transition">
                      hello@narijewelry.com
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
              <div className="flex gap-6">
                <a href="https://instagram.com/narijewelry" target="_blank" rel="noopener noreferrer" className="hover:text-amber-700 transition">
                  <Instagram className="h-7 w-7" />
                </a>
                <a href="https://facebook.com/narijewelry" target="_blank" rel="noopener noreferrer" className="hover:text-amber-700 transition">
                  <Facebook className="h-7 w-7" />
                </a>
                <a href="https://twitter.com/narijewelry" target="_blank" rel="noopener noreferrer" className="hover:text-amber-700 transition">
                  <Twitter className="h-7 w-7" />
                </a>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="bg-gray-50 p-8 rounded-2xl shadow-sm">
            <h2 className="text-3xl font-bold mb-8">Send us a Message</h2>

            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition resize-none"
                  placeholder="How can we help you today?"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-black text-white py-4 rounded-full font-semibold text-lg hover:bg-gray-800 transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Send Message
              </button>
            </form>

            <p className="mt-6 text-sm text-gray-600 text-center">
              We'll get back to you within 24–48 hours.
            </p>
          </div>
        </div>
      </div>

      {/* Google Maps Embed (optional) */}
      <section className="py-12 bg-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8">Find Us</h2>
          <div className="aspect-video rounded-xl overflow-hidden shadow-2xl">
            {/* Replace with your actual Google Maps embed code */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.234567890123!2d77.12345678901234!3d28.61234567890123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDM2JzQ0LjQiTiA3N8KwMDcnMjQuNiJF!5e0!3m2!1sen!2sin!4v1698765432100!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </div>
  );
}