const express = require("express");
const router = express.Router();
const authController = require("../../app/controllers/auth.controller");

//các api chính
router.post("/signup", authController.postSignup);
router.post("/login", authController.postLogin);
router.get("/logout", authController.logout);
router.get("/google", authController.authGoogle);
router.get("/facebook", authController.authFacebook);

router.get("/google/callback", authController.authGoogleCallback);
router.get("/facebook/callback", authController.authFacebookCallback);

module.exports = router;
