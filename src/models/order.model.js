const mongoose = require('mongoose');
const dbConnect = require('./db');

const OrderSchema = new mongoose.Schema({
  userId: { type: Number, required: true, },
  productId: { type: String, required: true, uppercase: true, },
  price: { type: Number, required: true, },
  quantity: { type: Number, required: true, },
}, {
  timestamps: true,
});

const OrderModel = dbConnect.model('Order', OrderSchema);

module.exports = OrderModel;