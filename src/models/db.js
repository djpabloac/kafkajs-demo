const mongoose = require('mongoose');

mongoose.set('strictQuery', false);

const dbConnect = mongoose.createConnection(process.env.MONGODB_URI);

module.exports = dbConnect;