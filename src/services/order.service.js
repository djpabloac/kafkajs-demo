const OrderModel = require("../models/order.model");

class OrderService {
  async create(input) {
    const newOrder = await OrderModel.create(input);

    return newOrder;
  }

  async getById(id) {
    const order = await OrderModel.findById(id);

    return order;
  }
}

module.exports = new OrderService();