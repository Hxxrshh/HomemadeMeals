import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageSquare, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-tiffin-green text-lg font-bold tracking-wider uppercase mb-2">Get In Touch</h2>
            <h3 className="text-4xl font-bold text-gray-900 mb-8">Ready to savor the taste <br /> of home?</h3>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-tiffin-cream p-4 rounded-full text-tiffin-green">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">Call Us Now</p>
                  <p className="text-xl font-bold text-tiffin-green">+1 639 994 0661</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-green-50 p-4 rounded-full text-green-600">
                  <MessageSquare className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">WhatsApp</p>
                  <a 
                    href="https://wa.me/16399940661" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-xl font-bold text-green-600 hover:underline"
                  >
                    Click to Chat
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-tiffin-cream p-4 rounded-full text-tiffin-green">
                   <Clock className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">Delivery Hours</p>
                  <p className="text-gray-900 font-bold italic underline">Daily Fresh Delivery</p>
                </div>
              </div>
            </div>

            <div className="mt-12 flex gap-4">
              <a 
                href="tel:+16399940661"
                className="bg-tiffin-green text-white px-8 py-4 rounded-full font-bold flex items-center hover:shadow-lg transition-all"
              >
                Call Kajol <Phone className="ml-2 h-5 w-5" />
              </a>
              <a 
                href="https://wa.me/16399940661"
                className="bg-green-600 text-white px-8 py-4 rounded-full font-bold flex items-center hover:shadow-lg transition-all"
              >
                WhatsApp <MessageSquare className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="bg-tiffin-cream h-[400px] rounded-3xl overflow-hidden relative border border-gray-100 shadow-inner">
            {/* Google Maps Placeholder */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
              <MapPin className="h-16 w-16 text-tiffin-orange mb-4 opacity-50" />
              <h4 className="text-xl font-bold text-gray-800">Operational in Canada</h4>
              <p className="text-gray-500 mt-2">Serving homemade tiffins across the city. <br /> (Map placeholder for future location)</p>
              <div className="mt-6 bg-white/50 backdrop-blur w-full h-32 rounded-xl border border-dashed border-gray-300"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
