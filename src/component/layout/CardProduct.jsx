import React from "react";
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const CardProduct = ({ product, addToCart }) => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleAddToCart = () => {
    addToCart(product);
  };

  const handleDetailsClick = () => {
    navigate(`/product/${product.id}`); // Correctly navigate to ProductDetails page
  };

  return (
    <div className="bg-white rounded-xl shadow-lg  transition-transform transform hover:scale-105 w-92 h-106">
      <div className="p-4 flex justify-center">
        <img 
          src={product.thumbnail} 
          alt={product.title}
          className="h-48 object-contain"
        />
      </div>
      
      <div className="p-4 flex flex-col">
        <h3 className="text-lg font-semibold text-center mb-2">{product.title}</h3>
        <p className="text-gray-600 text-sm text-center mb-4 line-clamp-3">
          {product.description}
        </p>
        
        <div className="flex justify-between mt-4">
          <button 
            onClick={handleAddToCart}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium"
          >
            Add to Cart
          </button>
          <button 
            onClick={handleDetailsClick} // Add onClick handler for Details
            className="text-gray-600 hover:text-gray-800 px-4 py-2 text-sm font-medium"
          >
            Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardProduct;
