import React from 'react';
import { UtensilsCrossed, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-tiffin-green text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-6">
              <UtensilsCrossed className="h-8 w-8 text-tiffin-orange mr-2" />
              <span className="text-2xl font-bold">Kajol's <span className="text-tiffin-orange">Tiffin</span></span>
            </div>
            <p className="text-gray-300 max-w-sm leading-relaxed">
              Bringing the authentic flavor of Indian homemade food to Canada. 
              We take pride in our quality, hygiene, and traditional recipes.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-tiffin-orange/30 pb-2">Quick Links</h4>
            <ul className="space-y-4 text-gray-300">
              <li><a href="#home" className="hover:text-tiffin-orange transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-tiffin-orange transition-colors">About Us</a></li>
              <li><a href="#plans" className="hover:text-tiffin-orange transition-colors">Meal Plans</a></li>
              <li><a href="#menu" className="hover:text-tiffin-orange transition-colors">Weekly Menu</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-tiffin-orange/30 pb-2">Support</h4>
            <ul className="space-y-4 text-gray-300">
              <li><a href="#contact" className="hover:text-tiffin-orange transition-colors">Contact</a></li>
              <li><a href="#order" className="hover:text-tiffin-orange transition-colors">Order Now</a></li>
              <li><a href="/admin" className="hover:text-tiffin-orange transition-colors">Admin Login</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400 font-medium">
          <p>© {new Date().getFullYear()} Kajol's Homemade Tiffin Service. All Rights Reserved.</p>
          <p className="flex items-center gap-1">
            Made with <Heart className="h-4 w-4 text-tiffin-orange fill-tiffin-orange" /> for Indian Food Lovers
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
