const { Router } = require('express');
const ResourceController = require('./controller')

const ResourceRouter = Router();

ResourceRouter.post('/', ResourceController.create)

ResourceRouter.get('/:id', ResourceController.getById)

module.exports = ResourceRouter;