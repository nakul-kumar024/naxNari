// components/Navbar.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  ShoppingBag,
  Heart,
  Search,
  Menu,
  X
} from 'lucide-react';

// Import the cart store (adjust the path if your file is in a different location)
import useCartStore from '@/store/cartStore';  // ← most common alias path
import SearchBar from './SearchBar';
// If the file is somewhere else, examples:
// import useCartStore from '@/stores/cartStore';
// import useCartStore from '../store/cartStore';
// import useCartStore from '@/lib/store/cartStore';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // This line gets the total number of items from the cart store
  const totalItems = useCartStore((state) => state.getTotalItems());

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-backdrop-filter:bg-white/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">

          {/* Left side - usually empty or secondary links on desktop */}
          <div className="hidden md:block w-44">
            {/* You can put category link / store locator etc here later */}
          </div>

          {/* Center - Hamburger + Brand (mobile friendly stacking) */}
          <div className="flex flex-1 items-center justify-center gap-4 md:gap-8">

            {/* Hamburger - always visible, opens mobile menu */}
            {/* Uncomment if you want hamburger back */}
            {/* <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative z-50 p-2 text-gray-700 hover:text-black focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button> */}

            {/* Brand - NARI */}
            <Link
              href="/"
              className="text-2xl font-bold tracking-wider text-black"
              onClick={(e) => {
                // e.preventDefault(); 
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
            >
              NARI
            </Link>

          </div>

          {/* Right side - Search + Wishlist + Cart */}
          <div className="flex items-center gap-1 sm:gap-2 md:gap-6">

            {/* Search */}
            <SearchBar />

            {/* Wishlist / Love */}
            <Link
              href="/wishlist"
              className="relative p-2 text-gray-700 hover:text-black transition-colors hidden xs:flex"
              aria-label="Wishlist"
            >
              <Heart className="h-5 w-5 sm:h-6 sm:w-6" />
              {/* Optional: show count badge later */}
              {/* <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] text-white">
                3
              </span> */}
            </Link>

            {/* Cart - now with dynamic count */}
            <Link
              href="/cart"
              className="relative p-2 text-gray-700 hover:text-black transition-colors flex items-center gap-1"
              aria-label="Shopping Cart"
            >
              <ShoppingBag className="h-5 w-5 sm:h-6 sm:w-6" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-xs font-medium text-white">
                  {totalItems}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-black/60 md:hidden" onClick={() => setIsOpen(false)}>
          <div
            className="absolute left-0 top-0 h-full w-4/5 max-w-xs bg-white p-6 shadow-xl"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-xl font-bold">Menu</h2>
              <button onClick={() => setIsOpen(false)}>
                <X className="h-6 w-6" />
              </button>
            </div>

            <nav className="flex flex-col gap-6 text-lg">
              <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
              <Link href="/shop" onClick={() => setIsOpen(false)}>Shop</Link>
              <Link href="/categories" onClick={() => setIsOpen(false)}>Categories</Link>
              <Link href="/new-arrivals" onClick={() => setIsOpen(false)}>New Arrivals</Link>
              <Link href="/sale" onClick={() => setIsOpen(false)}>Sale</Link>
              <hr className="my-4" />
              <Link href="/wishlist" onClick={() => setIsOpen(false)}>Wishlist</Link>
              <Link href="/account" onClick={() => setIsOpen(false)}>Account</Link>
              <Link href="/help" onClick={() => setIsOpen(false)}>Help</Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}