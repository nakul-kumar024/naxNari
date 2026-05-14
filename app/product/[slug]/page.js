// app/product/[slug]/page.js
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { products, getProductBySlug } from '@/Data/Product';
import AddToCartButton from '@/Components/AddToCartButton';

export default async function ProductDetailPage({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">

        {/* Image Gallery */}
        <div className="space-y-6">
          <div className="relative aspect-square rounded-xl overflow-hidden bg-gray-50 shadow-lg">
            <Image
              src={product.images?.[0] || '/placeholder.jpg'}
              alt={product.name || 'Product'}
              fill
              className="object-contain p-6 hover:scale-105 transition-transform duration-500"
              priority
            />
          </div>

          {product.images?.length > 1 && (
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((img, idx) => (
                <div
                  key={idx}
                  className="relative aspect-square rounded-lg overflow-hidden border-2 border-transparent hover:border-black transition cursor-pointer"
                >
                  <Image
                    src={img}
                    alt={`${product.name} view ${idx + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="flex flex-col">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">{product.name}</h1>

          <div className="mt-6 flex items-center gap-4">
            <span className="text-4xl font-bold text-black">
              ₹{(product.price || 0).toLocaleString('en-IN')}
            </span>
            {product.originalPrice && (
              <>
                <span className="text-2xl text-gray-500 line-through">
                  ₹{product.originalPrice.toLocaleString('en-IN')}
                </span>
                <span className="text-xl font-semibold text-red-600">
                  {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                </span>
              </>
            )}
          </div>

          {/* Stock & Badges */}
          <div className="mt-4 flex items-center gap-6 text-sm">
            {product.stock > 0 ? (
              <span className="text-green-600 font-medium">In Stock ({product.stock} left)</span>
            ) : (
              <span className="text-red-600 font-medium">Out of Stock</span>
            )}
            {product.isNew && <span className="bg-black text-white px-3 py-1 rounded-full text-xs">NEW</span>}
          </div>

          <p className="mt-8 text-gray-700 leading-relaxed text-lg">
            {product.description || 'No description available.'}
          </p>

          {/* Variants */}
          {product.variants && product.variants.length > 1 && (
            <div className="mt-8">
              <h3 className="text-lg font-semibold mb-3">Variant</h3>
              <div className="flex gap-3">
                {product.variants.map((v) => (
                  <button
                    key={v.color}
                    className={`px-5 py-2 border rounded-full text-sm font-medium ${
                      v.inStock ? 'hover:bg-gray-100' : 'opacity-50 cursor-not-allowed bg-gray-100'
                    }`}
                    disabled={!v.inStock}
                  >
                    {v.color}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Actions */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <AddToCartButton product={product} />

            <Link href="/delivery-info" className="flex-1">
              <button className="w-full border-2 border-black text-black py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition flex items-center justify-center">
                Proceed to Delivery
              </button>
            </Link>
          </div>

          {/* Trust elements */}
          <div className="mt-10 pt-8 border-t border-gray-200 text-sm text-gray-600 space-y-3">
            <p>✓ Handcrafted in India</p>
            <p>✓ Free Shipping on orders above ₹999</p>
            <p>✓ 15-day easy returns</p>
          </div>
        </div>
      </div>
    </div>
  );
}