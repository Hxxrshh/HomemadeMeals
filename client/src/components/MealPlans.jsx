import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const MealPlans = () => {
  const dailyPlans = [
    {
      name: 'Plan 1',
      price: '$7',
      items: ['1 Sabji', '5 Roti'],
      popular: false,
    },
    {
      name: 'Plan 2',
      price: '$12',
      items: ['1 Sabji', 'Dal', 'Rice', '4 Roti', 'Salad'],
      popular: true,
    },
    {
      name: 'Trial Box',
      price: '$12',
      items: ['Perfect for first-time customers', 'Assorted items from Plan 2'],
      popular: false,
    },
  ];

  const monthlyPlans = [
    { name: 'Monday to Friday', price: '$250', period: 'Monthly' },
    { name: 'Monday to Saturday', price: '$300', period: 'Monthly' },
    { name: 'Everyday', price: '$330', period: 'Monthly' },
  ];

  return (
    <section id="plans" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-tiffin-orange text-lg font-bold tracking-wider uppercase mb-2">Pricing Plans</h2>
          <p className="text-4xl font-bold text-gray-900">Choose Your Perfect Meal</p>
        </div>

        {/* Daily Plans */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-tiffin-green mb-10 border-l-4 border-tiffin-orange pl-4">Daily Tiffin Plans</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {dailyPlans.map((plan, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className={`p-8 rounded-3xl border-2 ${plan.popular ? 'border-tiffin-orange shadow-2xl relative bg-tiffin-orange/5' : 'border-gray-100 bg-white'}`}
              >
                {plan.popular && (
                  <span className="absolute top-0 right-8 transform -translate-y-1/2 bg-tiffin-orange text-white px-4 py-1 rounded-full text-sm font-bold">
                    MOST POPULAR
                  </span>
                )}
                <h4 className="text-2xl font-bold mb-2">{plan.name}</h4>
                <div className="flex items-baseline mb-6">
                  <span className="text-4xl font-extrabold text-tiffin-green">{plan.price}</span>
                  <span className="text-gray-500 ml-2">/ meal</span>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.items.map((item, idx) => (
                    <li key={idx} className="flex gap-3 text-gray-600">
                      <Check className="h-5 w-5 text-tiffin-green shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <a 
                  href="#order" 
                  className={`block text-center py-4 rounded-xl font-bold transition-all ${plan.popular ? 'bg-tiffin-orange text-white hover:bg-opacity-90' : 'bg-tiffin-green text-white hover:bg-opacity-90'}`}
                >
                  Choose {plan.name}
                </a>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Monthly Plans */}
        <div>
          <h3 className="text-2xl font-bold text-tiffin-green mb-10 border-l-4 border-tiffin-orange pl-4">Monthly Subscriptions</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {monthlyPlans.map((plan, index) => (
              <div key={index} className="bg-tiffin-cream p-6 rounded-2xl border border-tiffin-orange/10 flex flex-col items-center">
                <span className="text-gray-500 font-medium mb-2">{plan.name}</span>
                <span className="text-3xl font-bold text-tiffin-green">{plan.price}</span>
                <span className="text-sm text-gray-500 mt-1">per month</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MealPlans;
