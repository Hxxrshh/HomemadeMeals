import React from 'react';

const PartyOrders = () => {
  const items = ['Pav Bhaji', 'Pulav', 'Punjabi Sabji', 'Dal Fry', 'Jeera Rice'];

  return (
    <section id="party" className="py-20 bg-tiffin-green text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold mb-8">Party Orders & Catering</h2>
        <p className="text-xl mb-12 text-tiffin-cream opacity-90 max-w-2xl mx-auto">
          Hosting an event? Let us handle the food! We provide custom catering for parties, small gatherings, and corporate events.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-12">
          {items.map((item, idx) => (
            <div key={idx} className="border border-white/20 p-4 rounded-xl backdrop-blur-sm bg-white/5">
              {item}
            </div>
          ))}
        </div>
        <div className="inline-block bg-tiffin-orange text-white px-10 py-4 rounded-full font-bold text-xl shadow-2xl">
          Custom Catering Available
        </div>
      </div>
    </section>
  );
};

export default PartyOrders;
