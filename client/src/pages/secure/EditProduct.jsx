import { Link, useParams } from "react-router-dom";
import { IoArrowBackOutline } from "react-icons/io5";
import { useState } from "react";
import { toast } from "react-toastify";
import { axiosInstance } from "../../utils/axiosInstance";
import { useEffect } from "react";

const EditProduct = () => {
  const [productData, setProductData] = useState({
    name: "",
    selling_price: "",
    retail_price: "",
    quantity: "",
    description: "",
    image: "",
  });
  const { id } = useParams();
  const [oldImage, setOldImage] = useState("");
  console.log(productData);
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axiosInstance.get(`/api/product/${id}`);
        console.log(res);
        setProductData({
          name: res.data.name,
          selling_price: res.data.selling_price,
          retail_price: res.data.retail_price,
          quantity: res.data.quantity,
          description: res.data.description,
        });
        setOldImage(res.data.image);
      } catch (error) {
        console.log(error);
        toast.error(error.message);
      }
    };
    fetchProduct();
  }, []);
  // const [image, setImage] = useState(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formdata = new FormData();
    formdata.append("name", productData.name);
    formdata.append("selling_price", productData.selling_price);
    formdata.append("retail_price", productData.retail_price);
    formdata.append("quantity", productData.quantity);
    formdata.append("description", productData.description);
    if (productData.image) {
      formdata.append("image", productData.image);
    }

    try {
      const res = await toast.promise(
        axiosInstance.put(`/api/product/${id}`, formdata, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }),
        {
          pending: "Updating product...",
          success: "Product Updated",
          error: "Error",
        }
      );
      console.log(res);
    } catch (error) {
      toast.error(error.message);
      console.log(error);
    }
  };
  const handleKeyDown = (event) => {
    if (event.key === "ArrowUp" || event.key === "ArrowDown") {
      event.preventDefault();
    }
  };

  const handleWheel = (event) => {
    // event.preventDefault();
    event.target.blur();
  };

  const handleInputChange = (e) => {
    const { id, type, value } = e.target;
    let newValue;
    if (type === "number") {
      newValue = parseFloat(value);
    } else {
      newValue = value;
    }
    setProductData({ ...productData, [id]: newValue });
  };
  return (
    <div className="lg:px-20 px-8">
      <Link
        to={"/secure/products"}
        className="hover:underline underline-offset-2 duration-200 flex gap-2 items-center"
      >
        <IoArrowBackOutline />
        Back
      </Link>
      <div className="pt-5">
        <h1 className="text-xl font-semibold">Edit Product</h1>
        <div className="md:max-w-[600px]">
          <form
            onSubmit={handleSubmit}
            action=""
            className="grid md:grid-cols-2 gap-5 pt-5"
          >
            <div className="grid gap-2">
              <label htmlFor="name">Product Name</label>
              <input
                type="text"
                name="name"
                id="name"
                required
                value={productData.name}
                onChange={handleInputChange}
                className="w-full bg-inherit border px-5 py-1 border-gray-300 rounded-md"
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="name">Quantity</label>
              <input
                type="number"
                name="quantity"
                id="quantity"
                required
                value={productData.quantity}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                onWheel={handleWheel}
                className="w-full bg-inherit border px-5 py-1 border-gray-300 rounded-md"
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="retail_price">Retail Price</label>
              <input
                type="number"
                name="retail_price"
                id="retail_price"
                required
                value={productData.retail_price}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                onWheel={handleWheel}
                className="w-full bg-inherit border px-5 py-1 border-gray-300 rounded-md"
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="selling_price">Selling Price</label>
              <input
                type="number"
                name="selling_price"
                id="selling_price"
                required
                value={productData.selling_price}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                onWheel={handleWheel}
                className="w-full bg-inherit border px-5 py-1 border-gray-300 rounded-md"
              />
            </div>
            <div className="grid md:col-span-2 gap-2">
              <label htmlFor="description">Description</label>
              <textarea
                name="description"
                id="description"
                required
                value={productData.description}
                onChange={handleInputChange}
                className="w-full bg-inherit border min-h-[100px] px-5 py-1 border-gray-300 rounded-md"
              ></textarea>
            </div>
            <div className="grid gap-2">
              <h1>Old Image</h1>
              {oldImage && (
                <img
                  src={oldImage}
                  alt={productData.name}
                  className="max-w-[200px]"
                />
              )}
            </div>
            <div className="grid md:col-span-2 gap-2">
              <label htmlFor="image">Replace Image</label>
              <input
                type="file"
                name="image"
                id="image"
                accept="image/*"
                onChange={(e) =>
                  setProductData({ ...productData, image: e.target.files[0] })
                }
                className="file:border file:px-3 file:py-1 file:border-gray-500 file:text-gray-500 file:mr-5 file:rounded-md"
              />
            </div>
            <div className="">
              <input
                type="submit"
                value="Edit Product"
                className="text-white bg-black py-1 px-5 rounded-xl w-fit"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditProduct;
