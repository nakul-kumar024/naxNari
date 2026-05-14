// components/Footer.tsx
import Link from 'next/link';
import { 
  Facebook, 
  Instagram, 
  Twitter, 
  Youtube, 
  Send 
} from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main footer content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-12 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Newsletter */}
          <div className="md:col-span-1">
            <h3 className="text-white text-xl font-bold mb-4">NARI</h3>
            <p className="text-gray-400 mb-6 text-sm">
              Subscribe to get updates on new drops, exclusive offers and more.
            </p>
            
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-l-md text-white text-sm focus:outline-none focus:border-gray-500"
                required
              />
              <button
                type="submit"
                className="bg-white text-black px-5 rounded-r-md hover:bg-gray-200 transition-colors"
              >
                <Send className="h-5 w-5" />
              </button>
            </form>
          </div>

          {/* Column 1 - Shop */}
          {/* <div>
            <h4 className="text-white font-semibold mb-5 uppercase tracking-wider text-sm">Shop</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/" className="hover:text-white transition-colors">New Arrivals</Link></li>
              <li><Link href="/" className="hover:text-white transition-colors">Best Sellers</Link></li>
              <li><Link href="/" className="hover:text-white transition-colors">All Products</Link></li>
              <li><Link href="/" className="hover:text-white transition-colors">Sale</Link></li>
            </ul>
          </div> */}

          {/* Column 2 - Company */}
          <div>
            <h4 className="text-white font-semibold mb-5 uppercase tracking-wider text-sm">Company</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              {/* <li><Link href="/careers" className="hover:text-white transition-colors">Careers</Link></li>
              <li><Link href="/stores" className="hover:text-white transition-colors">Our Stores</Link></li> */}
            </ul>
          </div>

          {/* Column 3 - Support */}
          <div>
            <h4 className="text-white font-semibold mb-5 uppercase tracking-wider text-sm">Support</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/contact" className="hover:text-white transition-colors">FAQ</Link></li>
              <li><Link href="/shipping-and-returns" className="hover:text-white transition-colors">Shipping & Returns</Link></li>
              {/* <li><Link href="/size-guide" className="hover:text-white transition-colors">Size Guide</Link></li>
              <li><Link href="/track-order" className="hover:text-white transition-colors">Track Order</Link></li> */}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm">

            {/* Copyright */}
            <div className="text-gray-500">
              © {new Date().getFullYear()} NARI. All rights reserved.
            </div>

            {/* Legal links */}
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              <Link href="/shipping-and-returns" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms-and-conditions" className="hover:text-white transition-colors">Terms & Conditions</Link>
              <Link href="/cookies" className="hover:text-white transition-colors">Cookies</Link>
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-5">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram className="h-5 w-5 hover:text-white transition-colors" />
              </a>
             
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}