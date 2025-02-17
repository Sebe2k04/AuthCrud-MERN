import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider"

const MyProductsPage = () => {
    const {user} = useAuth();
    console.log(user)
  return (
    <div>
     <div className="lg:px-20 px-8">
        <h1 className="text-xl capitalize font-semibold">Welcome {user.username}</h1>
        <div className="flex justify-between pt-5">
            <h1>My Products</h1>
            <Link to={"/secure/products/create"} className="bg-black text-white px-3 py-1 rounded-xl">Create</Link>
        </div>
        

     </div>
    </div>
  )
}

export default MyProductsPage
