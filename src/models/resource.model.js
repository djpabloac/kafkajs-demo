const mongoose = require('mongoose');
const dbConnect = require('./db');
const { RESOURCE_STATUS } = require('./common');

const ResourceSchema = new mongoose.Schema({
  name: { type: String, required: true, },
  age: { type: Number, required: true, },
  rol: { type: String, required: true, uppercase: true, },
  status: {
    type: String,
    enum: [RESOURCE_STATUS.BUSY, RESOURCE_STATUS.AVAILABLE, RESOURCE_STATUS.NOT_AVAILABLE,],
    default: RESOURCE_STATUS.AVAILABLE,
  },
}, {
  timestamps: true,
});

const ResourceModel = dbConnect.model('Resource', ResourceSchema);

module.exports = ResourceModel;