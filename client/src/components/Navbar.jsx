import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";
import Cookies from "js-cookie";
import { useState } from "react";
import { Drawer } from "@mui/material";
import { IoIosMenu } from "react-icons/io";
const Navbar = () => {
  const { user } = useAuth();
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const handleLogout = () => {
    Cookies.remove("token");
    Cookies.remove("userToken");
    location.reload();
  };
  return (
    <div className="w-full">
      <div className="fixed top-0 left-0 w-full px-3 bg-white z-[100]">
        <div className="border-b border-gray-200 px-5 py-4 flex justify-between items-center">
          <div className="">
            <Link to={"/"} className="font-semibold text-xl">
              AuthCrud
            </Link>
          </div>
          <div className="lg:flex hidden gap-5 items-center">
            <Link to={"/products"}>Products</Link>
            {user ? (
              <div className="flex gap-5 items-center">
                <Link to={"/secure/products"} className="">
                  Dashboard
                </Link>
                <Link to={"/secure/profile"} className="">
                  Profile
                </Link>
                <button
                  onClick={handleLogout}
                  className="bg-black text-white px-4 py-0.5 rounded-lg hover:bg-gray-300 hover:text-black duration-200 "
                >
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
          <div className="text-2xl flex lg:hidden justify-center items-center">
            <IoIosMenu onClick={toggleDrawer(true)} />
          </div>
        </div>
      </div>
      <div className="h-[100px] w-full"></div>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        <section className="flex flex-col justify-between w-full min-w-[150px] h-[100vh] px-10">
          <div className="">
            <div className="flex justify-center pt-10 font-semibold text-2xl">
              <h1>Menu</h1>
            </div>

            <div className="flex  flex-col gap-5  pt-10 ">
              <Link onClick={() => setOpen(false)} to={"/products"}>
                Products
              </Link>
              {user ? (
                <div className="grid gap-5">
                  <Link onClick={() => setOpen(false)} to={"/secure/products"}>
                    Dashboard
                  </Link>
                  <Link onClick={() => setOpen(false)} to={"/secure/profile"}>
                    Profile
                  </Link>
                  <button
                    onClick={() => {
                      setOpen(false)
                      handleLogout();
                    }}
                    className="px-5 py-1 bg-black text-white  rounded-md"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <div className="">
                  <Link
                    onClick={() => setOpen(false)}
                    to={"/auth/login"}
                    className="px-5 py-1 bg-black text-white  rounded-md"
                  >
                    Login
                  </Link>
                </div>
              )}
            </div>
          </div>
        </section>
      </Drawer>
    </div>
  );
};

export default Navbar;
