// app/about/page.js
import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-125 flex items-center justify-center overflow-hidden">
        <Image
          src="/back4.jpg" // add a beautiful banner image in public/about/
          alt="NARI Craftsmanship"
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="relative z-10 text-center text-white px-6">
          {/* <h1 className="text-5xl md:text-7xl font-bold tracking-wide mb-6">About NARI</h1>
          <p className="text-xl md:text-3xl max-w-3xl mx-auto">
            Where Tradition Meets Timeless Elegance
          </p> */}
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                 NARI was founded by two freinds Nakul & Rishabh. NARI was born from a deep love for India's rich jewelry heritage. Founded in Delhi, we set out to revive and reimagine traditional craftsmanship — Kundan, Polki, Temple jewelry — while making it accessible and meaningful for today's woman.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Every piece is handcrafted by skilled artisans who have spent decades perfecting their art. We believe jewelry is not just adornment — it's emotion, legacy, and celebration.
              </p>
            </div>

            <div className="relative aspect-4/3 rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="/back3.jpg" // artisan at work photo
                alt="Artisan crafting jewelry"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">Our Values</h2>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-amber-100 flex items-center justify-center">
                <span className="text-4xl">✦</span>
              </div>
              <h3 className="text-2xl font-semibold mb-4">Handcrafted Excellence</h3>
              <p className="text-gray-700">
                Each piece is made by hand with love and precision — no mass production.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-amber-100 flex items-center justify-center">
                <span className="text-4xl">🌿</span>
              </div>
              <h3 className="text-2xl font-semibold mb-4">Ethical & Sustainable</h3>
              <p className="text-gray-700">
                We source materials responsibly and support fair wages for our artisans.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-amber-100 flex items-center justify-center">
                <span className="text-4xl">♀️</span>
              </div>
              <h3 className="text-2xl font-semibold mb-4">Empowering Women</h3>
              <p className="text-gray-700">
                Celebrating the strength, grace, and individuality of every woman who wears NARI.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24 bg-linear-to-r from-amber-50 to-rose-50 text-center">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-4xl font-bold mb-6">Join the NARI Family</h2>
          <p className="text-xl text-gray-700 mb-10">
            Discover jewelry that tells your story. Shop our collections or reach out to us.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/"
              className="bg-black text-white px-10 py-4 rounded-full font-semibold hover:bg-gray-800 transition"
            >
              Shop Now
            </Link>
            <Link
              href="/contact"
              className="border-2 border-black text-black px-10 py-4 rounded-full font-semibold hover:bg-black hover:text-white transition"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}