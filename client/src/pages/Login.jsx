import { useState } from "react";
import { axiosInstance } from "../utils/axiosInstance";
import { Link, useNavigate } from "react-router-dom";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";
import Cookies from 'js-cookie'

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const handleShow = () => {
    show === true ? setShow(false) : setShow(true);
  };
  const ck = Cookies.get("token")
  console.log(ck)
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await toast.promise(
        axiosInstance.post("/api/auth/login", {
          email,
          password,
        }),
        {
          pending: "Authenticating",
          success: "Authenticated",
          error: "Invalid credentials",
        }
      );
      navigate('/secure/products')
      console.log(res);
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <div>
      <div className="flex justify-center">
        <div className="">
          <h1 className="text-3xl font-semibold pb-5">Login </h1>
          <form onSubmit={handleLogin} action="" className="grid gap-3">
            <div className="grid gap-1 ">
              <label htmlFor="email" className="text-start">
                Email
              </label>
              <input
                type="email"
                pattern="^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$"
                required
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border w-full py-1 border-gray-200 rounded-md px-3 focus:outline-none bg-inherit"
                placeholder="Enter your email"
              />
            </div>
            <div className="grid gap-1">
              <label htmlFor="password" className="text-start">
                Password
              </label>

              <div className="flex border-gray-200 rounded-md border">
                <input
                  type={show ? "text" : "password"}
                  name="password"
                  id="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="py-1 w-full border-gray-200 rounded-md px-3 focus:outline-none bg-inherit"
                  placeholder="Enter your password"
                />
                <div className="w-8 flex items-center">
                  {show ? (
                    <FaRegEyeSlash
                      className=" absolute text-zinc-400 "
                      onClick={handleShow}
                    />
                  ) : (
                    <FaRegEye
                      className=" absolute text-zinc-400 "
                      onClick={handleShow}
                    />
                  )}
                </div>
              </div>
            </div>
            <div className="">
              <input
                type="submit"
                value="Login"
                className="bg-black text-white w-full py-1 rounded-md hover:tracking-widest duration-200"
              />
            </div>
          </form>
          <div className="py-3">
            <p>
              Don&apos;t have a account ?{" "}
              <span>
                <Link
                  to={"/auth/signup"}
                  className="text-blue-400 hover:underline underline-offset-2 hover:tracking-wide duration-200"
                >
                  Signup
                </Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
