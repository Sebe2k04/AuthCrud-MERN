import { useState } from "react";
import { axiosInstance } from "../utils/axiosInstance";
import { Link, useNavigate } from "react-router-dom";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";

const Signup = () => {
  const navigate = useNavigate()
  const [username,setUsername] = useState(null)
  const [mobile,setMobile] = useState(null)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  console.log(import.meta.env.VITE_API_URL)
  const [show, setShow] = useState(false);
  const handleShow = () => {
    show === true ? setShow(false) : setShow(true);
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      if (password !== password2) {
        throw new Error("Password not matched");
      }
      const res = await toast.promise(
        axiosInstance.post("/api/auth/signup", {
          email,
          password,
          username,
          mobile_no:mobile,

        }),
        {
          pending: "Creating",
          success: "Account Created",
          error: "Error",
        }
      );
      console.log(res);
      navigate(`/auth/verify?email=${email}`)
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <div>
      <div className="flex justify-center">
        <div className="">
          <h1 className="text-3xl font-semibold pb-5">Create Account</h1>
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
            <div className="grid gap-1 ">
              <label htmlFor="email" className="text-start">
                Username
              </label>
              <input
                type="text"
                required
                name="username"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="border w-full py-1 border-gray-200 rounded-md px-3 focus:outline-none bg-inherit"
                placeholder="Enter your Name"
              />
            </div>
            <div className="grid gap-1 ">
              <label htmlFor="email" className="text-start">
                Mobile No
              </label>
              <input
                type="tel"
                required
                name="mobile_no"
                id="mobile_no"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                className="border w-full py-1 border-gray-200 rounded-md px-3 focus:outline-none bg-inherit"
                placeholder="Enter your Mobile Number"
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
            <div className="grid gap-1">
              <label htmlFor="password" className="text-start">
                Confirm Password
              </label>

              <div className="flex border-gray-200 rounded-md border">
                <input
                  type={show ? "text" : "password"}
                  name="password2"
                  id="password2"
                  required
                  value={password2}
                  onChange={(e) => setPassword2(e.target.value)}
                  className="py-1 w-full border-gray-200 rounded-md px-3 focus:outline-none bg-inherit"
                  placeholder="Re-enter your password"
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
                value="Create Account"
                className="bg-black text-white w-full py-1 rounded-md hover:tracking-widest duration-200"
              />
            </div>
          </form>
          <div className="py-3">
            <p>
              Already have a account ?{" "}
              <span>
                <Link
                  to={"/auth/login"}
                  className="text-blue-400 hover:underline underline-offset-2 hover:tracking-wide duration-200"
                >
                  Login
                </Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
