const Product = require("../models/productSchema");
const cloudinary = require("../config/cloudinary");

const createProduct = async (req, res) => {
  const { name, retail_price, selling_price, quantity, description } =
    req.body;
  if (!name || !retail_price || !selling_price || !quantity || !description) {
    return res.status(400).json({ message: "All fields are required" });
  }
  console.log(req.file)
  try {
    let image_url = "";
    if (req.file) {
      const result = await cloudinary.uploader.upload(req.file.path, {
        folder: process.env.CLOUDINARY_FOLDER_NAME,
      });
      image_url = result.secure_url;
      console.log(result.secure_url);
    }
    else{
      return res.status(400).json({ message: "Image required", error });
    }
    let vendor = req.userId
    const product = new Product({
      name,
      retail_price,
      selling_price,
      quantity,
      description,
      image: image_url,
      vendor,
    });
    const finalproduct = await product.save();
    return res.status(200).json(finalproduct);
  } catch (error) {
    return res.status(500).json({ message: "Error creating product", error });
  }
};

const editProduct = async (req, res) => {
  const { name, retail_price, selling_price, quantity, description } =
    req.body;

    // console.log("R",req)
  if (!name || !retail_price || !selling_price || !quantity || !description) {
    return res.status(400).json({ message: "All fields are required" });
  }
  try {
    const product = await Product.findById(req.params.id)
    if(product.vendor !== req.userId){
      return res.status(401).json({ message: "Unauthorized action" });
    }
    let image_url = "";
    if (req.file) {
      const result = await cloudinary.uploader.upload(req.file.path, {
        folder: process.env.CLOUDINARY_FOLDER_NAME,
      });
      image_url = result.secure_url;
      console.log(result.secure_url);
    }
    product.name = name || product.name
    product.selling_price = selling_price || product.selling_price
    product.retail_price = retail_price || product.retail_price
    product.quantity = quantity || product.quantity
    product.description = description || product.description
    product.image = image_url || product.image
    const finalproduct = await product.save();
    return res.status(200).json(finalproduct);
  } catch (error) {
    return res.status(500).json({ message: "Error creating product", error });
  }
};

const getProducts = async (req, res) => {
  console.log("running")
  const products = await Product.find({ vendor: req.userId });
  return res.status(200).json(products);
};

const getSingleProduct = async(req,res)=>{
    const product = await Product.findById(req.params.id);
    if(!product){
        return res.status(404).json({message: "Product not found"})
    }
    return res.status(200).json(product)
}

const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    console.log(product);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    return res.status(200).json({ message: "Product removed" });
  } catch (error) {
    return res.status(500).json({ message: "Server Error" });
  }
};

module.exports = {
    createProduct,
    getProducts,
    getSingleProduct,
    editProduct,
    deleteProduct
}