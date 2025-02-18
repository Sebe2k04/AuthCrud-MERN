import PropTypes from "prop-types";

const GlobalProductCard = ({ product }) => {
  return (
    <div className="border border-gray-400 rounded-xl py-2 ">
      <div className="px-2">
        <img src={product.image} alt={product.name} className="aspect-square object-cover rounded-xl" />
      </div>
      <div className="p-2 px-4">
        <h1 className="capitalize font-semibold max-w-fit truncate">
          {product.name}
        </h1>
        <p className="text-gray-400 text-sm">
          {" "}
          &#8377; {product.selling_price}
        </p>
      </div>
    </div>
  );
};

GlobalProductCard.propTypes = {
  product: PropTypes.object.isRequired,
};

export default GlobalProductCard;
