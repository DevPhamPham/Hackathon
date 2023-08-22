// const apiRoute = require("./main/API.route");
const authRoute = require("./auth/auth.route");
const connect = require("../config/db/index");

function router(app) {
  // Connect database
  connect.connect();

  //Authencate
  app.use("/auth", authRoute);

  //API
  // app.use("/api", apiRoute);
}

module.exports = router;
