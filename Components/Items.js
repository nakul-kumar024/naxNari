// app/shop/page.js
import { products } from '@/Data/Product';
import Image from 'next/image';
import Link from 'next/link';

export default function ShopPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold mb-12 text-center">Our Collection</h1>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product) => (
          <Link
            key={product.id}
            href={`/product/${product.slug}`}
            className="group border rounded-lg overflow-hidden hover:shadow-xl transition"
          >
            <div className="relative aspect-square bg-gray-100">
              <Image
                src={product.images[0]}
                alt={product.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              {product.originalPrice && (
                <span className="absolute top-3 left-3 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                  {Math.round((product.originalPrice - product.price) / product.originalPrice * 100)}% OFF
                </span>
              )}
            </div>
            <div className="p-4">
              <h3 className="font-medium text-lg truncate">{product.name}</h3>
              <div className="mt-2 flex items-center gap-3">
                <span className="text-xl font-bold">₹{product.price.toLocaleString()}</span>
                {product.originalPrice && (
                  <span className="text-gray-500 line-through text-sm">
                    ₹{product.originalPrice.toLocaleString()}
                  </span>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}