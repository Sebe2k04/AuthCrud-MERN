const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const {
  getProducts,
  getSingleProduct,
  createProduct,
  editProduct,
  deleteProduct,
} = require("../controllers/productController");
const upload = require("../middlewares/multer");
const router = new express.Router();

router.post("/", authMiddleware, upload.single("image"), createProduct);
router.get("/", authMiddleware, getProducts);
router.get("/:id", authMiddleware, getSingleProduct);
router.put("/:id",authMiddleware, upload.single("image"),editProduct)
router.delete("/:id",authMiddleware,deleteProduct)

module.exports = router;
