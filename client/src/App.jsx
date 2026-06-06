import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import About from './components/About';
import MealPlans from './components/MealPlans';
import WeeklyMenu from './components/WeeklyMenu';
import Snacks from './components/Snacks';
import PartyOrders from './components/PartyOrders';
import OrderForm from './components/OrderForm';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AdminDashboard from './pages/AdminDashboard';

const HomePage = () => (
  <main>
    <Hero />
    <Features />
    <About />
    <MealPlans />
    <WeeklyMenu />
    <Snacks />
    <PartyOrders />
    <div id="order" className="py-20 bg-tiffin-cream">
       <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-tiffin-green underline decoration-tiffin-orange">Order Your Tiffin</h2>
            <p className="mt-4 text-gray-600 font-medium">Experience the taste of home today!</p>
          </div>
          <OrderForm />
       </div>
    </div>
    <Contact />
  </main>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-tiffin-cream">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
