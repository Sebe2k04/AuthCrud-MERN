const Products = require("../models/productSchema");

const createProduct = async (req, res) => {
  const { name, retail_price, selling_price, quantity, description } =
    req.body();
  if (!name || !retail_price || !selling_price || !quantity || !description) {
    return res.status(400).json({ message: "All fields are required" });
  }
  try {
    const product = new Product({
      name,
      retail_price,
      selling_price,
      quantity,
      description,
      vendor: req.userId,
    });
    const finalproduct = await product.save();
    return res.status(200).json(finalproduct);
  } catch (error) {
    return res.status(500).json({ message: "Error creating product", error });
  }
};

const getProducts = async (req, res) => {
  const products = await Products.find({ vendor: req.userId });
  return res.status(200).json(products);
};

const getSingleProduct = async(req,res)=>{
    const product = await Products.findById(req.params.id);
    if(!product){
        return res.status(404).json({message: "Product not found"})
    }
    return res.status(200).json(product)
}


module.exports = {
    createProduct,
    getProducts,
    getSingleProduct,
}