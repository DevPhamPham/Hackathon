const apiRoute = require("./main/API.route");
const authRoute = require("./auth/auth.route");
const connect = require("../config/db/index");
const verifyToken = require("../app/middlewares/verifyToken")

function router(app) {
  // Connect database
  connect.connect();

  //Authencate
  app.use("/auth", authRoute);

  //API
  app.use("/api",verifyToken, apiRoute);
}

module.exports = router;
