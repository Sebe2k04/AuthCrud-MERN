import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { IoArrowBackOutline } from "react-icons/io5";
import { axiosInstance } from "../utils/axiosInstance";

const SingleProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axiosInstance(`/api/product/${id}`);
        console.log(res.data);
        setProduct(res.data);
      } catch (error) {
        toast.error(error.message);
        console.log(error);
      }
    };
    fetchProduct();
  }, []);
  return (
    <div className="lg:px-20 px-8">
      <Link
        to={"/products"}
        className="hover:underline underline-offset-2 duration-200 flex gap-2 items-center"
      >
        <IoArrowBackOutline />
        Back
      </Link>
      {product && (
        <div className="grid lg:grid-cols-2 pt-5">
          <div className="flex justify-center">
            <img src={product.image} alt={product.name} className="object-cover min-w-[250px] max-w-[300px] lg:min-w-[400px] lg:max-w-[450px] aspect-square rounded-xl" />
          </div>
          <div className="pt-10">
            <h1 className="text-2xl font-semibold">{product.name}</h1>
            <h2 className="pt-2"><span className="font-semibold">Quantity :</span> {product.quantity}</h2>
            <div className="flex gap-5 pt-2">
              <h1 className="text-xl ">&#8377; {product.selling_price}</h1>
              <h3 className="text-red-500 line-through">
                &#8377; {product.retail_price}
              </h3>
            </div>
            <p className="pt-3 font-semibold">Description : </p>
            <p>{product.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleProductPage;
