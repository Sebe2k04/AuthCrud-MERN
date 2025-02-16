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

function App() {
  return (
    <div className="inter">
      <ToastContainer position="bottom-right" />
      <Navbar />
      <div className="min-h-[70vh]">
        <AuthProvider>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/auth/login" element={<Login />} />
            <Route exact path="/auth/signup" element={<Signup />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AuthProvider>
      </div>
      <Footer />
    </div>
  );
}

export default App;
