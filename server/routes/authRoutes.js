const express = require("express");
const { login, signup, verifyOTP } = require("../controllers/authController");
const router = new express.Router();


router.post('/login',login)
router.post('/signup',signup)
router.post('/verify',verifyOTP)

module.exports = router;