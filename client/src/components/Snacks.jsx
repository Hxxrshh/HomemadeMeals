import React from 'react';

const Snacks = () => {
  const snacks = ['Farsi Puri', 'Masala Puri', 'Gathiya', 'Sev', 'Lilvani Kachori'];

  return (
    <section id="snacks" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-tiffin-green mb-10">Authentic Snacks</h2>
        <div className="flex flex-wrap justify-center gap-6 mb-10">
          {snacks.map((snack, idx) => (
            <span key={idx} className="bg-tiffin-cream text-tiffin-green px-6 py-3 rounded-full font-bold shadow-sm border border-tiffin-orange/10">
              {snack}
            </span>
          ))}
        </div>
        <p className="text-tiffin-orange font-bold text-xl italic animate-pulse">
           "Contact us for pricing"
        </p>
      </div>
    </section>
  );
};

export default Snacks;
