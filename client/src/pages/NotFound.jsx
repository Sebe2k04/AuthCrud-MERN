import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex justify-center items-center min-h-[70vh] w-full">
      <div className="text-center">
      <h1 className="text-2xl py-5">404 | Error : Page not found</h1>
        <Link
          to={"/"}
          className="mt-5 hover:underline underline-offset-4 duration-100 text-blue-400"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
