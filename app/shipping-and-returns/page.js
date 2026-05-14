// app/shipping-returns/page.js

import Link from 'next/link';

export default function ShippingReturnsPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero / Title Section */}
            <section className="bg-linear-to-r from-amber-50 to-rose-50 py-16 md:py-24">
                <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Shipping & Returns Policy
                    </h1>
                    <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                        We want you to love your NARI piece — please read our policy carefully before placing your order.
                    </p>
                </div>
            </section>

            <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="prose prose-lg max-w-none text-gray-700">
                    {/* Shipping Section */}
                    <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Shipping Policy</h2>

                    <ul className="list-disc pl-6 space-y-4">
                        <li>
                            All orders are handcrafted with love and care. Delivery timelines may vary depending on the product and your location.
                        </li>
                        <li>
                            Standard shipping within India: 7–14 business days (subject to courier availability and festive seasons).
                        </li>
                        <li>
                            We partner with trusted courier services to ensure safe delivery of your jewelry.
                        </li>
                        <li>
                            Shipping charges are calculated at checkout and displayed transparently before payment.
                        </li>
                        <li>
                            Once your order is confirmed and dispatched, you will receive a tracking link via email/SMS.
                        </li>
                    </ul>

                    {/* Returns & Refunds Section */}
                    <h2 className="text-3xl font-bold text-gray-900 mt-16 mb-6">Returns & Refunds Policy</h2>

                    <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg mb-8">
                        <p className="text-lg font-medium text-red-800 mb-2">
                            Important: All sales are final.
                        </p>
                        <p className="text-gray-800">
                            Once an order has been placed and confirmed, <strong>no returns, exchanges, cancellations, or refunds</strong> are accepted under any circumstances.
                        </p>
                    </div>

                    <p className="mb-6">
                        We take great pride in the quality and craftsmanship of every NARI piece. Each item is handcrafted individually for you. Due to the bespoke and personalized nature of our jewelry, we are unable to accept returns or offer refunds after the order is placed.
                    </p>

                    <ul className="list-disc pl-6 space-y-4">
                        <li>
                            Please review your order details, size, design, and customization options carefully before confirming your purchase.
                        </li>
                        <li>
                            In the rare event that your product arrives damaged or defective due to transit issues, please contact us within 48 hours of delivery with clear photos of the damage.
                        </li>
                        <li>
                            We will evaluate each case individually and, at our sole discretion, may offer a replacement (subject to availability) or repair — but no monetary refunds will be issued.
                        </li>
                        <li>
                            No returns or refunds will be accepted for change of mind, incorrect size selection, or dissatisfaction with the product after delivery.
                        </li>
                    </ul>

                    {/* Final Note */}
                    <div className="mt-12 p-8 bg-gray-50 rounded-2xl border border-gray-200">
                        <p className="text-lg font-medium text-gray-900 mb-4">
                            Thank you for choosing NARI
                        </p>
                        <p className="text-gray-700">
                            We deeply appreciate your trust in our craftsmanship. Every piece is made with dedication and care to become a cherished part of your story. If you have any questions before placing your order, please feel free to reach out — we are happy to assist.
                        </p>
                        <div className="mt-6">
                            <Link
                                href="/contact"
                                className="text-amber-700 hover:text-amber-900 font-medium underline"
                            >
                                Contact us →
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}