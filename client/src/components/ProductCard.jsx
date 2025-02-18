import { Link } from "react-router-dom"
import PropTypes from 'prop-types';
import { axiosInstance } from "../utils/axiosInstance";
import { toast } from "react-toastify";

const ProductCard = ({product}) => {

  const handleDelete = async() => {
    try {
      const res = await toast.promise(axiosInstance.delete(`/api/product/${product._id}`),{
        pending: "Deleting product...",
        success: "Product Deleted",
        error: "Error",
      })
      console.log(res);
      location.reload();
    } catch (error) {
      console.log(error)
      toast.error(error.message)
      
    }
  }
  return (
    <div className="border border-gray-200 rounded-xl pt-2 pb-0 ">
        <div className="px-2">
            <img src={product.image} alt={product.name} className="aspect-square object-cover rounded-xl" />
        </div>
        <div className="p-2 px-4">
          <h1 className="capitalize font-semibold max-w-fit truncate">{product.name}</h1>
          <p className="text-gray-400 text-sm"> &#8377; {product.selling_price}</p>
        </div>
        <div className="grid grid-cols-3 text-sm text-center rounded-b-xl bg-gray-200 py-1 divide-x-2 divide-gray-300">
          <Link to={`/secure/products/${product._id}`} className="">View</Link>
          <Link to={`/secure/products/edit/${product._id}`} className="">Edit</Link>
          <button onClick={handleDelete} className="">Delete</button>
        </div>      
    </div>
  )
}

ProductCard.propTypes = {
  product: PropTypes.object.isRequired
}

export default ProductCard
