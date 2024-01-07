const ResourceService = require('../services/resource.service');

class ResourceController {
  async create(req, res) {
    try {
      const { body } = req;
      const newResource = await ResourceService.create(body);

      return res.json(newResource);
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
      const resource = await ResourceService.getById(id)

      return res.json(resource);
    } catch (error) {
      return res.json({
        success: false,
        message: error.message || 'ERROR'
      })
    }
  }
}

module.exports = new ResourceController();