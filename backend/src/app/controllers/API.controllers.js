const bcrypt = require("bcrypt");
const usersModel = require("../models/User");

class APIController {
  // GET /api/
  async users(req, res) {
    const users = await usersModel.find({});
    res.json({ successful: true, data: users });
  }
}

module.exports = new APIController();
