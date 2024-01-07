require('dotenv').config();
const express = require('express');
const OrderRouter = require('./routers');

const app = express();

app.use(express.json());
app.use('/v1/order', OrderRouter);

const port = process.env.PORT_ORDER || 3002;

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
})