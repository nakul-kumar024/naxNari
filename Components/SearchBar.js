// components/SearchBar.js
'use client';

import { useState, useEffect, useRef } from 'react';
import { Search } from 'lucide-react';
import Link from 'next/link';
import { products } from '@/Data/Product'; // adjust path if needed

export default function SearchBar() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const searchRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Filter products when typing
  useEffect(() => {
    if (query.trim().length < 2) {
      setResults([]);
      return;
    }

    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase()) ||
      product.description?.toLowerCase().includes(query.toLowerCase()) ||
      product.category?.toLowerCase().includes(query.toLowerCase())
    );

    setResults(filtered.slice(0, 8)); // limit to 8 results
    setIsOpen(true);
  }, [query]);

  return (
    <div className="relative" ref={searchRef}>
      {/* Search Input / Icon */}
      <div className="relative flex items-center">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsOpen(true)}
          placeholder="Search jewelry..."
          className="w-0 sm:w-48 md:w-64 pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-300 text-sm"
        />
        <Search className="absolute left-3 h-5 w-5 text-gray-500 pointer-events-none" />
      </div>

      {/* Search Results Dropdown */}
      {isOpen && query.trim().length > 0 && (
        <div className="absolute right-0 mt-2 w-80 max-h-96 bg-white rounded-xl shadow-2xl border border-gray-200 overflow-y-auto z-50">
          {results.length === 0 ? (
            <div className="p-6 text-center text-gray-500">
              No products found for "{query}"
            </div>
          ) : (
            <div className="divide-y divide-gray-100">
              {results.map((product) => (
                <Link
                  key={product.slug}
                  href={`/product/${product.slug}`}
                  onClick={() => {
                    setQuery('');
                    setIsOpen(false);
                  }}
                  className="flex items-center gap-4 p-4 hover:bg-gray-50 transition"
                >
                  <div className="relative w-12 h-12 shrink-0 bg-gray-100 rounded-md overflow-hidden">
                    <img
                      src={product.images?.[0] || '/placeholder-product.jpg'}
                      alt={product.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">
                      {product.name}
                    </p>
                    <p className="text-xs text-gray-600">
                      ₹{product.price.toLocaleString('en-IN')}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}