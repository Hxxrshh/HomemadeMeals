import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 bg-tiffin-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
              <img 
                src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Cooking with love" 
                className="w-full h-[500px] object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-tiffin-orange text-white p-10 rounded-full font-bold text-center flex flex-col justify-center -rotate-12 border-4 border-white shadow-xl">
              <span className="text-3xl">100%</span>
              <span className="text-sm">Homemade</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-tiffin-green text-lg font-bold tracking-wider uppercase mb-2">Our Story</h2>
            <h3 className="text-4xl font-bold text-gray-900 mb-6">Traditional Taste, <br />Modern Convenience in Canada</h3>
            <div className="space-y-4 text-gray-600 text-lg">
              <p>
                Kajol's Homemade Tiffin Service started with a simple mission: to bring the authentic, comforting flavors of Indian home cooking to the busy lives of people in Canada.
              </p>
              <p>
                We understand that in the hustle of life, healthy and delicious food often takes a backseat. That's why we prepare every meal with the same care and fresh ingredients that we use in our own kitchen.
              </p>
              <ul className="grid grid-cols-2 gap-4 mt-8">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-tiffin-orange rounded-full"></div>
                  <span>Homemade Cooking</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-tiffin-orange rounded-full"></div>
                  <span>Fresh Ingredients</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-tiffin-orange rounded-full"></div>
                  <span>Healthy Meals</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-tiffin-orange rounded-full"></div>
                  <span>Affordable Pricing</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
