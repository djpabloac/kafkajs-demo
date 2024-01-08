const { ORDER_STATUS } = require("../models/common");
const OrderModel = require("../models/order.model");

class OrderService {
  async create(input) {
    const newOrder = await OrderModel.create(input);

    return newOrder;
  }

  async getById(id) {
    const order = await OrderModel
      .findById(id)
      .lean();

    return order;
  }

  async assignResource(resourceId) {
    const orders = await OrderModel
      .find({ status: ORDER_STATUS.PENDING, deleted: false })
      .lean();

    if (!orders.length) {
      return;
    }

    const [order] = orders;

    await OrderModel
      .updateOne({
        _id: order._id,
      }, {
        $set: {
          status: ORDER_STATUS.ASSIGNED,
          assignedId: resourceId,
        },
        $push: {
          logs: {
            status: ORDER_STATUS.ASSIGNED,
            assignedId: resourceId,
          },
        },
      });
  }
}

module.exports = new OrderService();