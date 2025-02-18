import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider"
import { useEffect } from "react";
import { axiosInstance } from "../../utils/axiosInstance";
import { useState } from "react";
import ProductCard from "../../components/ProductCard";
import Loader from "../../components/Loader"

const MyProductsPage = () => {
    const {user} = useAuth();
    console.log(user)
    const [products,setProducts] = useState([])
    const [loading,setLoading] = useState(false)
    console.log(products)
    useEffect(()=>{
      const fetchProducts = async() => {
        setLoading(true)
        try {
          const res = await axiosInstance.get('/api/product');
          setProducts(res.data);
          console.log(res.data)
          setLoading(false)

        } catch (error) {
          setLoading(false)
          console.log(error)
          
        }
      }
      fetchProducts();
    },[])
  return (
    <div>
     <div className="lg:px-20 px-8">
        <h1 className="text-xl capitalize font-semibold">Welcome {user.username}</h1>
        <div className="flex justify-between pt-5">
            <h1>My Products</h1>
            <Link to={"/secure/products/create"} className="bg-black text-white px-3 py-1 rounded-xl">Create</Link>
        </div>
        {
          loading ? <Loader/> : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 py-5 md:gap-10 gap-5">
          {
            products.map((product)=>{
              return(
                <div key={product._id} className="">
                  <ProductCard product={product}/>
                </div>
              )
            })
          }
        </div>
          )
        }
        

     </div>
    </div>
  )
}

export default MyProductsPage
