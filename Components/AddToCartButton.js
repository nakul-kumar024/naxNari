// components/AddToCartButton.js
'use client';

import useCartStore from '@/store/cartStore';
import { ShoppingCart } from 'lucide-react';   // ← add this line

export default function AddToCartButton({ product }) {
  const addToCart = useCartStore((state) => state.addToCart);

  if (!product || product.stock <= 0) {
    return (
      <button
        disabled
        className="flex-1 bg-gray-400 text-white py-4 rounded-full font-semibold text-lg cursor-not-allowed flex items-center justify-center gap-3"
      >
        <ShoppingCart className="h-6 w-6" />
        Out of Stock
      </button>
    );
  }

  return (
    <button
      onClick={() => addToCart(product)}
      className="flex-1 bg-black text-white py-4 rounded-full font-semibold text-lg hover:bg-gray-800 transition flex items-center justify-center gap-3"
    >
      <ShoppingCart className="h-6 w-6" />
      Add to Cart
    </button>
  );
}