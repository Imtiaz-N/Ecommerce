const ProductCard = ({ product }) => {
  return (
    <div className="border rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105">
      <img
        src={product.images}
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <div className="flex justify-center space-x-4">
        <span className="text-gray-600">
          <strong>Category: {product.category}</strong>
        </span>
        <span className="text-gray-600">
          <strong>Brand: {product.brand}</strong>
        </span>
      </div>
      <div className="p-4">
        <p className="align-center text-xl font-semibold mt-2">
          ${product.price}
        </p>
        <button className="mt-4 w-full p-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
