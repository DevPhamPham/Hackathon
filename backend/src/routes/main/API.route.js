const express = require("express");
const router = express.Router();
const apiController = require("../../app/controllers/API.controllers");
// const sendEmail = require("../app/middwares/sendEmail");
const isAuthenticated = require("../../app/middlewares/checkUser");

router.get("/test", apiController.test);

// router.post("/forgot", sendEmail);

module.exports = router;
