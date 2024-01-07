const mongoose = require('mongoose');
const dbConnect = require('./db');

const ResourceSchema = new mongoose.Schema({
  name: { type: String, required: true, },
  age: { type: Number, required: true, },
  rol: { type: String, required: true, uppercase: true, },
}, {
  timestamps: true,
});

const ResourceModel = dbConnect.model('Resource', ResourceSchema);

module.exports = ResourceModel;