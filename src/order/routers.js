const { Router } = require('express');
const OrderController = require('./controller')

const OrderRouter = Router();

OrderRouter.post('/', OrderController.create)

OrderRouter.get('/:id', OrderController.getById)

module.exports = OrderRouter;