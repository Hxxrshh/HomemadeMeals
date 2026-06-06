import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Utensils } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center overflow-hidden bg-tiffin-cream pt-16">
      {/* Background Decorative Elements */}
      <div className="absolute top-20 right-0 w-64 h-64 bg-tiffin-orange/10 rounded-full blur-3xl -z-10 translate-x-1/2"></div>
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-tiffin-green/10 rounded-full blur-3xl -z-10 -translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-tiffin-green leading-tight mb-6">
              Fresh Homemade <br />
              <span className="text-tiffin-orange italic underline decoration-wavy">Indian Meals</span> <br />
              Delivered Daily
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-lg">
              Authentic, hygienic, and pure vegetarian food that tastes just like home. 
              Savor the richness of traditional spices and fresh ingredients, cooked with love in Canada.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#plans" 
                className="bg-tiffin-orange text-white px-8 py-4 rounded-full font-bold flex items-center hover:shadow-xl hover:scale-105 transition-all"
              >
                Order Now <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a 
                href="#menu" 
                className="bg-tiffin-white text-tiffin-green border-2 border-tiffin-green px-8 py-4 rounded-full font-bold hover:bg-tiffin-green hover:text-white transition-all"
              >
                Weekly Menu
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Delicious Indian Food" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-tiffin-green/40 to-transparent"></div>
            </div>
            
            {/* Floating Card */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl z-20 flex items-center gap-4 border border-tiffin-orange/20"
            >
              <div className="bg-tiffin-orange/20 p-3 rounded-full">
                <Utensils className="text-tiffin-orange h-6 w-6" />
              </div>
              <div>
                <p className="font-bold text-gray-800">100% Homemade</p>
                <p className="text-sm text-gray-500">Hygenic & Fresh</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
