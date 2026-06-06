import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import axios from 'axios';
import { Send, CheckCircle2 } from 'lucide-react';

const OrderForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    planSelection: '',
    preferredDeliveryDate: '',
    message: ''
  });

  const [status, setStatus] = useState('idle'); // idle, submitting, success, error

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    try {
      await axios.post('http://localhost:5001/api/orders', formData);
      setStatus('success');
      setFormData({
        name: '', phone: '', email: '', address: '',
        planSelection: '', preferredDeliveryDate: '', message: ''
      });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (err) {
      console.error("Order error:", err);
      setStatus('error');
    }
  };

  return (
    <div className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl border border-gray-100">
      <AnimatePresence mode="wait">
        {status === 'success' ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center justify-center py-12 text-center"
          >
            <CheckCircle2 className="h-20 w-20 text-tiffin-green mb-6" />
            <h3 className="text-3xl font-bold text-gray-900 mb-2">Order Received!</h3>
            <p className="text-gray-600">Thank you, {formData.name}. We will contact you shortly to confirm your order.</p>
          </motion.div>
        ) : (
          <motion.form key="form" onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="block text-sm font-bold text-gray-700">Full Name</label>
              <input
                required
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-tiffin-orange focus:ring-2 focus:ring-tiffin-orange/20 outline-none transition-all"
              />
            </div>
            
            <div className="space-y-2">
              <label className="block text-sm font-bold text-gray-700">Phone Number</label>
              <input
                required
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+1"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-tiffin-orange focus:ring-2 focus:ring-tiffin-orange/20 outline-none transition-all"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-bold text-gray-700">Email Address</label>
              <input
                required
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-tiffin-orange focus:ring-2 focus:ring-tiffin-orange/20 outline-none transition-all"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-bold text-gray-700">Plan Selection</label>
              <select
                required
                name="planSelection"
                value={formData.planSelection}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-tiffin-orange focus:ring-2 focus:ring-tiffin-orange/20 outline-none transition-all"
              >
                <option value="">Select a Plan</option>
                <option value="Plan 1 ($7)">Plan 1 ($7)</option>
                <option value="Plan 2 ($12)">Plan 2 ($12)</option>
                <option value="Trial Box ($12)">Trial Box ($12)</option>
                <option value="Monthly - M to F ($250)">Monthly - M to F ($250)</option>
                <option value="Monthly - M to S ($300)">Monthly - M to S ($300)</option>
                <option value="Monthly - Everyday ($330)">Monthly - Everyday ($330)</option>
              </select>
            </div>

            <div className="md:col-span-2 space-y-2">
              <label className="block text-sm font-bold text-gray-700">Shipping Address</label>
              <textarea
                required
                name="address"
                value={formData.address}
                onChange={handleChange}
                rows="2"
                placeholder="Street address, City, Province, Postal Code"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-tiffin-orange focus:ring-2 focus:ring-tiffin-orange/20 outline-none transition-all"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-bold text-gray-700">Preferred Delivery Start Date</label>
              <input
                required
                type="date"
                name="preferredDeliveryDate"
                value={formData.preferredDeliveryDate}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-tiffin-orange focus:ring-2 focus:ring-tiffin-orange/20 outline-none transition-all"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-bold text-gray-700">Additional Message (Optional)</label>
              <input
                type="text"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Any allergies or special requests?"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-tiffin-orange focus:ring-2 focus:ring-tiffin-orange/20 outline-none transition-all"
              />
            </div>

            <div className="md:col-span-2 pt-4">
              <button
                disabled={status === 'submitting'}
                type="submit"
                className="w-full bg-tiffin-orange text-white py-4 rounded-xl font-bold text-lg flex items-center justify-center hover:bg-opacity-90 shadow-lg hover:shadow-tiffin-orange/30 transition-all disabled:opacity-50"
              >
                {status === 'submitting' ? 'Processing...' : 'Confirm Order'} 
                <Send className="ml-2 h-5 w-5" />
              </button>
              {status === 'error' && (
                <p className="mt-2 text-red-500 text-center font-medium">Something went wrong. Please try again or call us directly.</p>
              )}
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
};

export default OrderForm;
