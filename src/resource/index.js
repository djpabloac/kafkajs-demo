require('dotenv').config();
const express = require('express');
const ResourceRouter = require('./routers');

const app = express();

app.use(express.json());
app.use('/v1/resource', ResourceRouter);

const port = process.env.PORT_RESOURCE || 3002;

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
})