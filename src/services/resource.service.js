const ResourceModel = require("../models/resource.model");

class ResourceService {
  async create(input) {
    const newResource = await ResourceModel.create(input);

    return newResource;
  }

  async getById(id) {
    const resource = await ResourceModel.findById(id);

    return resource;
  }
}

module.exports = new ResourceService();