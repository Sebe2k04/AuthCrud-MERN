import ProtectedRoute from "./components/secure/ProtectedRoute";
import { Route, Routes } from "react-router-dom";
import MyProductsPage from "./pages/secure/MyProductsPage";
import NotFound from "./pages/NotFound";
import CreateProduct from "./pages/secure/CreateProduct";

const SecurePages = () => {
  return (
    <div className="">
      <ProtectedRoute>
        <Routes>
          <Route path="/products" element={<MyProductsPage />} />
          <Route path="/products/create" element={<CreateProduct />} />
          <Route path="*" element={<NotFound />} />

        </Routes>
      </ProtectedRoute>
    </div>
  );
};

export default SecurePages;
