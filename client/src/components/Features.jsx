import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Leaf, ShieldCheck, Truck } from 'lucide-react';

const Features = () => {
  const features = [
    {
      title: 'Homemade & Hygienic',
      description: 'Prepared in a clean environment following all health standards.',
      icon: Heart,
      color: 'bg-red-50 text-red-600',
    },
    {
      title: 'Fresh Ingredients',
      description: 'We use premium, locally sourced seasonal vegetables and spices.',
      icon: Leaf,
      color: 'bg-green-50 text-green-600',
    },
    {
      title: 'Pure Vegetarian',
      description: 'Dedicated vegetarian kitchen with traditional recipes.',
      icon: ShieldCheck,
      color: 'bg-blue-50 text-blue-600',
    },
    {
      title: 'Daily Delivery',
      description: 'Timely delivery right to your doorstep, fresh and warm.',
      icon: Truck,
      color: 'bg-orange-50 text-orange-600',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-tiffin-green text-lg font-bold tracking-wider uppercase mb-2">Our Promise</h2>
          <p className="text-4xl font-bold text-gray-900">Why Choose Kajol's Tiffin?</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-tiffin-cream p-8 rounded-3xl border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className={`w-14 h-14 ${feature.color} rounded-2xl flex items-center justify-center mb-6`}>
                <feature.icon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
