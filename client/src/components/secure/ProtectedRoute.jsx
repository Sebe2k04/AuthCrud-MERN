import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider";
import Loader from "../Loader";
import Cookies from "js-cookie";
import { axiosInstance } from "../../utils/axiosInstance";
import { toast } from "react-toastify";

const ProtectedRoute = ({children}) => {
  const { user,setUser } = useAuth();
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    const fetchUser = async() => {
      const cookie = Cookies.get("userToken");
        if (cookie) {
              console.log("logged in")
              if (user === null) {
                try {
                  setLoading(true);
                  console.log("running")
                  const res = await axiosInstance.get("/api/user/me", { cookie });
                  setUser(res.data);
                  console.log(res.data);
                  setLoading(false);
                } catch (error) {
                  setLoading(false);
                  toast.error(error.message);
                }
              }
              else{
                console.log("User already exists")
                setLoading(false);
              }
            } else {
              console.log("Not logged in")
              navigate("/auth/login");
              setUser(null);
              setLoading(false);
            }
    }
      fetchUser()

  }, [user, loading, location.pathname]);
  if (loading)
    return (
      <div>
        <Loader />
      </div>
    );

  if (!user) return null;
  return <div>
    {children}
  </div>;
};

export default ProtectedRoute;
