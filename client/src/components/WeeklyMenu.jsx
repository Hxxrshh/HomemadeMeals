import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';

const WeeklyMenu = () => {
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(true);

  const defaultMenu = [
    { day: 'Monday', items: ['Spring onion aloo sabji', '4 roti', 'Gujarati kadhi', 'Rice'] },
    { day: 'Tuesday', items: ['Chhole', '4 triangle paratha', 'Rice', 'Curd'] },
    { day: 'Wednesday', items: ['Moong pulav', 'Gujarati kadhi', 'Papad', 'Salad'] },
    { day: 'Thursday', items: ['Baingan bharta', 'Bajri rotla', 'Lehsun chutney', 'Chhas'] },
    { day: 'Friday', items: ['Sev tomato', 'Triangle paratha', 'Khichdi', 'Kadhi'] },
    { day: 'Saturday', items: ['Pav Bhaji', 'Salad', 'Papad'] },
    { day: 'Sunday', items: ['Bharva aloo baingan', 'Roti', 'Rice', 'Chhas'] },
  ];

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const res = await axios.get('http://localhost:5001/api/menu');
        if (res.data && res.data.length > 0) {
          // Sort according to days of week
          const dayOrder = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
          const sortedMenu = res.data.sort((a, b) => dayOrder.indexOf(a.day) - dayOrder.indexOf(b.day));
          setMenu(sortedMenu);
        } else {
          setMenu(defaultMenu);
        }
      } catch (err) {
        console.error("Error fetching menu:", err);
        setMenu(defaultMenu);
      } finally {
        setLoading(false);
      }
    };
    fetchMenu();
  }, []);

  return (
    <section id="menu" className="py-20 bg-tiffin-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-tiffin-green text-lg font-bold tracking-wider uppercase mb-2">This Week's Special</h2>
          <p className="text-4xl font-bold text-gray-900">Our Rotating Menu</p>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            We change our menu every week to keep things fresh and exciting! Here's what's cooking this week.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7 gap-6">
          {menu.map((dayItem, index) => (
            <motion.div
              key={dayItem.day}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-white p-6 rounded-3xl shadow-sm border border-orange-100 hover:border-tiffin-orange hover:shadow-md transition-all flex flex-col"
            >
              <h4 className="text-xl font-bold text-tiffin-orange mb-4 border-b pb-2">{dayItem.day}</h4>
              <ul className="space-y-2 flex-grow">
                {dayItem.items.map((food, i) => (
                  <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                     <span className="text-tiffin-green mt-1">•</span>
                     {food}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WeeklyMenu;
