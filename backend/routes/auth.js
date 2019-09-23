const express = require('express');
const router = express.Router();
const authController = require('../controller/auth');

module.exports = router;

router.post("/signup", authController.signup);
router.post("/login", authController.login);

