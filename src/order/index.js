require('dotenv').config();
const express = require('express');
const OrderRouter = require('./routers');

const app = express();

app.use(express.json());
app.use('/v1/pedido', OrderRouter);

app.listen(3002, () => {
  console.log('http://localhost:3002');
})