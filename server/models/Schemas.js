const mongoose = require('mongoose');

const weeklyMenuSchema = new mongoose.Schema({
  day: { type: String, required: true, unique: true },
  items: [{ type: String }]
});

const WeeklyMenu = mongoose.model('WeeklyMenu', weeklyMenuSchema);

const orderSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  address: { type: String, required: true },
  planSelection: { type: String, required: true },
  preferredDeliveryDate: { type: Date, required: true },
  message: { type: String },
  status: { type: String, default: 'Pending' }, // Pending, Completed
  createdAt: { type: Date, default: Date.now }
});

const Order = mongoose.model('Order', orderSchema);

module.exports = { WeeklyMenu, Order };
