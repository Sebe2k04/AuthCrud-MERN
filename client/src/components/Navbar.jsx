import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full">
      <div className="fixed top-0 left-0 w-full px-3">
        <div className="border-b border-gray-200 px-5 py-4 flex justify-between items-center">
          <div className="">
            <Link to={"/"} className="font-semibold text-xl">
              AuthCrud
            </Link>
          </div>
          <div className="flex gap-5 items-center">
            <Link to={"/login"}>Products</Link>
            <Link to={"/login"} className="bg-black text-white px-4 py-0.5 rounded-lg hover:bg-gray-300 hover:text-black duration-200 ">Login</Link>
          </div>
        </div>
      </div>
      <div className="h-[100px] w-full"></div>
    </div>
  );
};

export default Navbar;
