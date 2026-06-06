const express = require('express');
const router = express.Router();
const { WeeklyMenu, Order } = require('../models/Schemas');

// --- Weekly Menu Routes ---

// Get all menu items
router.get('/menu', async (req, res) => {
  try {
    const menu = await WeeklyMenu.find();
    res.json(menu);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Update or Add a menu item
router.post('/menu', async (req, res) => {
  const { day, items } = req.body;
  try {
    const updatedMenu = await WeeklyMenu.findOneAndUpdate(
      { day },
      { items },
      { upsert: true, new: true }
    );
    res.status(201).json(updatedMenu);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// --- Order Routes ---

// Create an order
router.post('/orders', async (req, res) => {
  const order = new Order(req.body);
  try {
    const newOrder = await order.save();
    res.status(201).json(newOrder);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Get all orders (for admin)
router.get('/orders', async (req, res) => {
  try {
    const orders = await Order.find().sort({ createdAt: -1 });
    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Update order status
router.patch('/orders/:id', async (req, res) => {
  try {
    const updatedOrder = await Order.findByIdAndUpdate(
      req.params.id,
      { status: req.body.status },
      { new: true }
    );
    res.json(updatedOrder);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
