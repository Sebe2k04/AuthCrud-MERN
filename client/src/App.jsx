import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Signup from "./pages/Signup";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import AuthProvider from "./context/AuthProvider";
import { ToastContainer } from "react-toastify";
import SecurePages from "./SecurePages";
import VerifyEmail from "./pages/VerifyEmail";
import Products from "./pages/Products";
import SingleProductPage from "./pages/SingleProductPage";

function App() {
  return (
    <div className="inter">
      <ToastContainer position="bottom-right" />

      <AuthProvider>
        <Navbar />
        <div className="min-h-[70vh]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<SingleProductPage />} />
            <Route path="/auth/login" element={<Login />} />
            <Route path="/auth/signup" element={<Signup />} />
            <Route path="/auth/verify" element={<VerifyEmail />} />
            <Route path="/secure/*" element={<SecurePages />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </AuthProvider>

      <Footer />
    </div>
  );
}

export default App;
