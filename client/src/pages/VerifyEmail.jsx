import { useState } from "react";
import { axiosInstance } from "../utils/axiosInstance";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useEffect } from "react";

const VerifyEmail = () => {
  const navigate = useNavigate();
  const [searchparams] = useSearchParams();
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  useEffect(()=>{
    setEmail(searchparams.get("email"))
  },[])
  console.log(email)

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await toast.promise(
        axiosInstance.post("/api/auth/verify", {
          email,
          otp,
        }),
        {
          pending: "Verifying",
          success: "Verified",
          error: "Invalid OTP",
        }
      );
      navigate('/secure/products')
      console.log(res);
      console.log(res.status);
      
    } catch (error) {
      console.log(error);
      console.log(error.status);
      if(error.status === 403){
        navigate.to(`/auth/verify?email=${email}`)
      }
      toast.error(error.message);
    }
  };

  return (
    <div>
      <div className="flex justify-center">
        <div className="">
          <h1 className="text-3xl font-semibold pb-5">Verify </h1>
          <form onSubmit={handleLogin} action="" className="grid gap-3">
            <div className="grid gap-1">
              <label htmlFor="otp" className="text-start">
                OTP
              </label>
              <input
                type="text"
                required
                name="otp"
                id="otp"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="border w-full py-1 border-gray-200 rounded-md px-3 focus:outline-none bg-inherit"
                placeholder="Enter 6 Digit OTP"
              />
              
            </div>
            <div className="">
              <input
                type="submit"
                value="Verify OTP"
                className="bg-black text-white w-full py-1 rounded-md hover:tracking-widest duration-200"
              />
            </div>
          </form>
          <div className="py-3">
            <p>
              Back to{' '}
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

export default VerifyEmail;
