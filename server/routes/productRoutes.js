const express = require('express')
const authMiddleware = require('../middlewares/authMiddleware')
const { getProducts, getSingleProduct, createProduct } = require('../controllers/productController')
const router = new express.Router()

router.post('/',authMiddleware,createProduct)
router.get('/',authMiddleware,getProducts)
router.get('/:id',authMiddleware,getSingleProduct)


module.exports = router;