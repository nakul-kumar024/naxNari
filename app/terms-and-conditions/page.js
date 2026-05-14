// app/terms-conditions/page.js
export default function TermsConditionsPage() {
    return (
      <div className="min-h-screen bg-white">
        {/* Header */}
        <section className="bg-linear-to-r from-amber-50 to-rose-50 py-16 md:py-24">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Terms and Conditions
            </h1>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto">
              Last updated: March 16, 2026  
              Please read these terms carefully before using our website or placing an order.
            </p>
          </div>
        </section>
  
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8 prose prose-lg text-gray-700">
          <h2 className="text-3xl font-bold text-gray-900 mt-0 mb-6">1. General</h2>
          <p>
            These Terms and Conditions govern your use of the website <strong>narijewelry.com</strong> (the "Site") and all purchases made through it. By accessing or using the Site, or by placing an order, you agree to be bound by these terms.
          </p>
          <p>
            NARI reserves the right to update or modify these terms at any time without prior notice. The updated terms will be posted on this page with the revised "Last updated" date.
          </p>
  
          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">2. Orders & Payment</h2>
          <ul className="list-disc pl-6 space-y-3">
            <li>All orders are subject to availability and acceptance by NARI.</li>
            <li>Prices are in Indian Rupees (₹) and include applicable taxes unless stated otherwise. Shipping charges are additional and shown at checkout.</li>
            <li>Payment must be made in full at the time of order placement via the available payment methods.</li>
            <li>Once an order is placed and payment is confirmed, it cannot be cancelled, modified, or refunded under any circumstances.</li>
          </ul>
  
          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">3. No Returns, No Refunds, No Exchanges</h2>
          <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg my-8">
            <p className="text-lg font-medium text-red-800 mb-3">
              All sales are final.
            </p>
            <p className="text-gray-800">
              Due to the custom-made and handcrafted nature of our jewelry, <strong>we do not accept returns, exchanges, cancellations, or refunds</strong> for any reason once the order is placed and confirmed.
            </p>
          </div>
          <p>
            Customers are responsible for carefully reviewing product details, size, design, customization options, and all specifications before placing an order.
          </p>
  
          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">4. Damaged or Defective Products</h2>
          <p>
            In the rare event that your product arrives damaged or defective due to transit or manufacturing issues:
          </p>
          <ul className="list-disc pl-6 space-y-3">
            <li>You must report the issue within <strong>48 hours</strong> of delivery.</li>
            <li>Provide clear photographs of the damage/defect and original packaging.</li>
            <li>NARI will review the case and, at its sole discretion, may offer a repair or replacement (subject to availability).</li>
            <li>No monetary refunds will be issued in any case.</li>
          </ul>
  
          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">5. Intellectual Property</h2>
          <p>
            All content on the Site, including designs, images, text, logos, and product photographs, is the exclusive property of NARI and protected by copyright and other intellectual property laws.
          </p>
          <p>
            You may not reproduce, distribute, modify, or use any part of the Site or its content for commercial purposes without our prior written permission.
          </p>
  
          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">6. Limitation of Liability</h2>
          <p>
            NARI shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the Site or products, even if advised of the possibility of such damages.
          </p>
          <p>
            Our total liability shall in no event exceed the amount paid by you for the product in question.
          </p>
  
          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">7. Governing Law</h2>
          <p>
            These Terms and Conditions are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in Delhi, India.
          </p>
  
          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">8. Contact Us</h2>
          <p>
            If you have any questions about these Terms and Conditions, please contact us:
          </p>
          <p className="mt-4">
            Email: <a href="mailto:hello@narijewelry.com" className="text-amber-700 hover:underline">hello@narijewelry.com</a>
          </p>
  
          <div className="mt-16 p-8 bg-gray-50 rounded-2xl border border-gray-200 text-center">
            <p className="text-lg font-medium text-gray-900">
              Thank you for choosing NARI.
            </p>
            <p className="mt-4 text-gray-700">
              We are committed to delivering beautiful, handcrafted jewelry that becomes part of your cherished moments.
            </p>
          </div>
        </div>
      </div>
    );
  }