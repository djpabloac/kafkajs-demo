const mongoose = require('mongoose');
const dbConnect = require('./db');
const { ORDER_STATUS } = require('./common');

const LogSchema = new mongoose.Schema({
  status: { type: String, required: true, },
  assignedId: { type: mongoose.Types.ObjectId, ref: 'Resource', required: true, },
});

const OrderSchema = new mongoose.Schema({
  userId: { type: Number, required: true, },
  productId: { type: String, required: true, uppercase: true, },
  price: { type: Number, required: true, },
  quantity: { type: Number, required: true, },
  deleted: { type: Boolean, default: false, },
  status: {
    type: String,
    enum: [ORDER_STATUS.PENDING,ORDER_STATUS.ASSIGNED, ORDER_STATUS.PREPARED, ORDER_STATUS.DELIVERED, ],
    default: ORDER_STATUS.PENDING,
  },
  assignedId: {
    type: mongoose.Types.ObjectId,
    ref: 'Resource',
  },
  logs: [LogSchema],
}, {
  timestamps: true,
});

const OrderModel = dbConnect.model('Order', OrderSchema);

module.exports = OrderModel;