import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";
import Cookies from "js-cookie";

const Navbar = () => {
  const { user } = useAuth();
  const handleLogout = () => {
    Cookies.remove("token")
    Cookies.remove("userToken")
    location.reload();
  }
  return (
    <div className="w-full">
      <div className="fixed top-0 left-0 w-full px-3 bg-white z-[100]">
        <div className="border-b border-gray-200 px-5 py-4 flex justify-between items-center">
          <div className="">
            <Link to={"/"} className="font-semibold text-xl">
              AuthCrud
            </Link>
          </div>
          <div className="flex gap-5 items-center">
            <Link to={"/products"}>Products</Link>
            {user ? (
              <div className="flex gap-5 items-center">
                <Link
                  to={"/secure/products"}
                  className=""
                >
                  Dashboard
                </Link>
                <Link
                  to={"/secure/profile"}
                  className=""
                >
                  Profile
                </Link>
                <button onClick={handleLogout} className="bg-black text-white px-4 py-0.5 rounded-lg hover:bg-gray-300 hover:text-black duration-200 ">
                  Logout
                </button>
              </div>
            ) : (
              <Link
                to={"/auth/login"}
                className="bg-black text-white px-4 py-0.5 rounded-lg hover:bg-gray-300 hover:text-black duration-200 "
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
      <div className="h-[100px] w-full"></div>
    </div>
  );
};

export default Navbar;
