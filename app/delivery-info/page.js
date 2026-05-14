// app/delivery-info/page.js
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import useCartStore from '@/store/cartStore';   // ← Important

export default function DeliveryInfoPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    landmark: '',
    email: '',
  });

  const cartItems = useCartStore((state) => state.cartItems);   // ← Get cart from Zustand

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
  
    if (cartItems.length === 0) {
      alert("Your cart is empty!");
      setLoading(false);
      return;
    }
  
    const totalAmount = cartItems.reduce((sum, item) => 
      sum + (item.product.price * item.quantity), 0);
  
    const orderData = {
      full_name: formData.fullName,
      phone: formData.phone,
      address: formData.address,
      city: formData.city,
      state: formData.state,
      pincode: formData.pincode,
      landmark: formData.landmark || null,
      email: formData.email || null,
      total_amount: totalAmount,
      status: 'pending',
      items: cartItems,
    };
  
    console.log("Inserting order data:", orderData);
  
    const { data, error } = await supabase
      .from('orders')
      .insert([orderData])
      .select();
  
    if (error) {
      console.error("Full Supabase Error:", error);
      alert(`Failed to save order.\n\nError: ${error.message}`);
    } else {
      console.log("✅ Order saved:", data);
      alert("Order placed successfully! 🎉");
      useCartStore.getState().clearCart();
      router.push('/order-success');
    }
  
    setLoading(false);
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setLoading(true);

  //   if (cartItems.length === 0) {
  //     alert("Your cart is empty!");
  //     setLoading(false);
  //     return;
  //   }

  //   const totalAmount = cartItems.reduce((sum, item) => 
  //     sum + item.product.price * item.quantity, 0);

  //   const orderData = {
  //     full_name: formData.fullName,
  //     phone: formData.phone,
  //     address: formData.address,
  //     city: formData.city,
  //     state: formData.state,
  //     pincode: formData.pincode,
  //     landmark: formData.landmark || null,
  //     email: formData.email || null,
  //     total_amount: totalAmount,
  //     status: 'pending',
  //     items: cartItems,
  //   };

  //   const { error } = await supabase
  //     .from('orders')
  //     .insert([orderData]);

  //   if (error) {
  //     console.error(error);
  //     alert("Failed to save order. Please try again.");
  //   } else {
  //     alert("Order placed successfully! 🎉");
  //     useCartStore.getState().clearCart();   // Clear cart after successful order
  //     router.push('/order-success');         // We'll create this later
  //   }

  //   setLoading(false);
  // };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="mx-auto max-w-2xl px-4">
        <div className="bg-white rounded-2xl shadow-sm p-8 md:p-10">
          <h1 className="text-3xl font-bold text-center mb-2">Delivery Information</h1>
          <p className="text-gray-600 text-center mb-10">Please enter your shipping details</p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
              <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black outline-none" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
              <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black outline-none" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black outline-none" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Full Address *</label>
              <textarea name="address" value={formData.address} onChange={handleChange} required rows={3} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black outline-none" />
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">City *</label>
                <input type="text" name="city" value={formData.city} onChange={handleChange} required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">State *</label>
                <input type="text" name="state" value={formData.state} onChange={handleChange} required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black outline-none" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Pincode *</label>
                <input type="text" name="pincode" value={formData.pincode} onChange={handleChange} required maxLength={6} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Landmark</label>
                <input type="text" name="landmark" value={formData.landmark} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black outline-none" />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-black text-white py-4 rounded-full font-semibold text-lg hover:bg-gray-800 transition disabled:opacity-50"
            >
              {loading ? "Saving Order..." : "Save & Continue"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}