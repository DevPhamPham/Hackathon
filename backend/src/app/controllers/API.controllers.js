const bcrypt = require("bcrypt");
const usersModel = require("../models/User");

class APIController {
  // GET /api/
  async test(req, res) {
    return res.json({ successful: true, data: "wallet" });
  }
}

module.exports = new APIController();
