const OrderService = require('../services/order.service');

class OrderController {
  async create(req, res) {
    try {
      const { body } = req;
      const newOrder = await OrderService.create(body);

      return res.json(newOrder);
    } catch (error) {
      return res.json({
        success: false,
        message: error.message || 'ERROR'
      })
    }
  }

  async getById(req, res) {
    try {
      const { id } = req.params;
      const order = await OrderService.getById(id)

      return res.json(order);
    } catch (error) {
      return res.json({
        success: false,
        message: error.message || 'ERROR'
      })
    }
  }
}

module.exports = new OrderController();