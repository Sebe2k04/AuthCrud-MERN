const express = require("express")
const authMiddleware = require("../middlewares/authMiddleware")
const { getUser } = require("../controllers/userController")
const router = new express.Router()


router.get('/me',authMiddleware,getUser)

module.exports = router;