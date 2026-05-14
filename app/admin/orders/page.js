// app/admin/orders/page.js
'use client';

import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'next/navigation';

export default function AdminOrdersPage() {
  const router = useRouter();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedOrder, setSelectedOrder] = useState(null);

  // Check authentication
  useEffect(() => {
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) router.push('/admin/login');
    };
    checkAuth();
  }, [router]);

  // Fetch orders
  useEffect(() => {
    const fetchOrders = async () => {
      const { data, error } = await supabase
        .from('orders')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) console.error(error);
      else setOrders(data || []);
      
      setLoading(false);
    };

    fetchOrders();
  }, []);

  const openDetails = (order) => {
    setSelectedOrder(order);
  };

  const closeDetails = () => {
    setSelectedOrder(null);
  };

  if (loading) return <p className="text-center py-20 text-xl">Loading orders...</p>;

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">All Orders</h1>
          <button 
            onClick={() => supabase.auth.signOut()}
            className="bg-red-600 text-white px-5 py-2 rounded-lg hover:bg-red-700"
          >
            Logout
          </button>
        </div>

        {orders.length === 0 ? (
          <p className="text-center text-xl py-20">No orders yet.</p>
        ) : (
          <div className="bg-white rounded-xl shadow overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-4 text-left">Order ID</th>
                  <th className="p-4 text-left">Date</th>
                  <th className="p-4 text-left">Customer</th>
                  <th className="p-4 text-left">Phone</th>
                  <th className="p-4 text-left">Amount</th>
                  <th className="p-4 text-left">Status</th>
                  <th className="p-4 text-left">Action</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr key={order.id} className="border-t hover:bg-gray-50">
                    <td className="p-4 font-mono text-sm">{order.id.slice(0, 8)}...</td>
                    <td className="p-4 text-sm">
                      {new Date(order.created_at).toLocaleDateString('en-IN')}
                    </td>
                    <td className="p-4 font-medium">{order.full_name}</td>
                    <td className="p-4">{order.phone}</td>
                    <td className="p-4 font-bold">₹{order.total_amount}</td>
                    <td className="p-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        order.status === 'pending' ? 'bg-yellow-100 text-yellow-700' : 
                        order.status === 'shipped' ? 'bg-blue-100 text-blue-700' : 
                        'bg-green-100 text-green-700'
                      }`}>
                        {order.status}
                      </span>
                    </td>
                    <td className="p-4">
                      <button 
                        onClick={() => openDetails(order)}
                        className="text-blue-600 hover:underline font-medium"
                      >
                        View Details
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Order Details Modal */}
      {selectedOrder && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-2xl font-bold">Order Details</h2>
                <button onClick={closeDetails} className="text-3xl leading-none">&times;</button>
              </div>

              <div className="space-y-6">
                <div>
                  <p className="text-sm text-gray-500">Order ID</p>
                  <p className="font-mono">{selectedOrder.id}</p>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <p className="text-sm text-gray-500">Customer Name</p>
                    <p className="font-medium">{selectedOrder.full_name}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Phone</p>
                    <p>{selectedOrder.phone}</p>
                  </div>
                </div>

                <div>
                  <p className="text-sm text-gray-500">Delivery Address</p>
                  <p>{selectedOrder.address}, {selectedOrder.city}, {selectedOrder.state} - {selectedOrder.pincode}</p>
                  {selectedOrder.landmark && <p>Landmark: {selectedOrder.landmark}</p>}
                </div>

                <div>
                  <p className="text-sm text-gray-500 mb-3">Ordered Items</p>
                  <div className="space-y-3">
                    {selectedOrder.items.map((item, index) => (
                      <div key={index} className="flex justify-between bg-gray-50 p-3 rounded-lg">
                        <div>
                          <p className="font-medium">{item.product.name}</p>
                          <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                        </div>
                        <p className="font-medium">₹{item.product.price * item.quantity}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t text-xl font-bold flex justify-between">
                  <span>Total Amount</span>
                  <span>₹{selectedOrder.total_amount}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}