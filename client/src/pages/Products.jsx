import { useEffect, useState } from "react";
import { axiosInstance } from "../utils/axiosInstance";
import GlobalProductCard from "../components/GlobalProductCard";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);
  console.log(products);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axiosInstance.get("/api/product/all");
        setProducts(res.data);
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProducts();
  }, []);
  return (
    <div className="lg:px-20 px-8">
      <div className="">
        <h1 className="text-xl font-semibold">All Products</h1>
        <p className="text-sm text-gray-500">Login to add your products</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 py-5 gap-5">
        {products.map((product) => {
          return (
            <Link to={`/products/${product._id}`} key={product._id} className="">
              <GlobalProductCard product={product} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
