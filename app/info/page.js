// app/info/page.js
import Image from 'next/image';
import Link from 'next/link';

export default function InfoPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-linear-to-r from-amber-50 to-rose-50 py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Why Choose NARI?
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Timeless craftsmanship, ethical practices, and jewelry made with love
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Card 1 */}
          <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-xl transition">
            <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mb-6">
              <span className="text-4xl">✦</span>
            </div>
            <h3 className="text-2xl font-semibold mb-4">Handcrafted Excellence</h3>
            <p className="text-gray-600 leading-relaxed">
              Every piece is meticulously handcrafted by skilled artisans in India using traditional techniques passed down through generations.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-xl transition">
            <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mb-6">
              <span className="text-4xl">🌿</span>
            </div>
            <h3 className="text-2xl font-semibold mb-4">Ethical & Sustainable</h3>
            <p className="text-gray-600 leading-relaxed">
              We source materials responsibly and ensure fair wages and safe working conditions for all our artisans.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-xl transition">
            <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mb-6">
              <span className="text-4xl">💎</span>
            </div>
            <h3 className="text-2xl font-semibold mb-4">Premium Quality</h3>
            <p className="text-gray-600 leading-relaxed">
              Only the finest materials and stones are used. Each piece undergoes strict quality checks before reaching you.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-xl transition">
            <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mb-6">
              <span className="text-4xl">♀️</span>
            </div>
            <h3 className="text-2xl font-semibold mb-4">Women Empowerment</h3>
            <p className="text-gray-600 leading-relaxed">
              We support and empower women artisans and celebrate the strength and grace of every woman who wears NARI.
            </p>
          </div>

          {/* Card 5 */}
          <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-xl transition">
            <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mb-6">
              <span className="text-4xl">⏳</span>
            </div>
            <h3 className="text-2xl font-semibold mb-4">Timeless Design</h3>
            <p className="text-gray-600 leading-relaxed">
              Our designs blend traditional Indian artistry with modern aesthetics — pieces that remain beautiful for generations.
            </p>
          </div>

          {/* Card 6 */}
          <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-xl transition">
            <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mb-6">
              <span className="text-4xl">❤️</span>
            </div>
            <h3 className="text-2xl font-semibold mb-4">Made With Love</h3>
            <p className="text-gray-600 leading-relaxed">
              Each piece carries the heart and soul of our artisans. When you wear NARI, you wear a story.
            </p>
          </div>
        </div>

        {/* Final CTA */}
        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to find your perfect piece?</h2>
          <p className="text-gray-600 mb-8">Browse our collection of handcrafted jewelry</p>
          <Link 
            href="/shop"
            className="inline-block bg-black text-white px-10 py-4 rounded-full font-semibold hover:bg-gray-800 transition"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </div>
  );
}