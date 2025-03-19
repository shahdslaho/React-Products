import React from 'react';
import { useParams } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import { useQuery } from '@tanstack/react-query';
import useCartStore from '../store/useCartStore';
import useFavoriteStore from '../store/useFavoriteStore'; // Correct import
import axios from 'axios';
import Navbar from './Navbar';

const fetchProduct = async (id) => {
  const response = await axios.get(`https://dummyjson.com/products/${id}`);
  return response.data;
};

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart } = useCartStore();
  const { addToFavorites } = useFavoriteStore(); // Use useFavoriteStore

  const { data: product, isLoading, error } = useQuery({
    queryKey: ['product', id], 
    queryFn: () => fetchProduct(id), 
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading product.</div>;

  return (
    <>
     
      <div className="max-w-4xl mx-auto p-6 mt-32 bg-white rounded-lg shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <img 
              src={product.thumbnail} 
              alt={product.title} 
              className="aspect-square object-cover rounded-lg"
            />
          </div>
  
          <div className="flex flex-col">
            <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
            <h2 className="text-lg text-gray-500 mb-4">{product.brand}</h2>
            
            <div className="flex items-center mb-4">
              <span className="text-3xl font-bold text-blue-600">${product.price}</span>
              <span className="text-green-600 text-lg ml-2">{product.discountPercentage}% OFF</span>
            </div>
            
            <div className="flex items-center gap-2 mb-4">
              <div className="flex">
                {[...Array(5)].map((_, index) => (
                  <FaStar
                    key={index}
                    className={`w-5 h-5 ${
                      index < Math.floor(product.rating) 
                        ? "text-yellow-400" 
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-gray-600">({product.rating})</span>
            </div>
            
            <p className="text-gray-600 mb-4">{product.description}</p>
            
            <div className="flex items-center mb-4">
              <span className="text-sm text-gray-600">Stock:</span>
              <span className="text-green-600 text-sm ml-1">{product.stock} units</span>
            </div>
            
            <div className="flex gap-3">
              <button
                onClick={() => addToFavorites(product)}
                className="flex-1 py-2 border border-gray-300 rounded hover:bg-gray-50 text-sm"
              >
                Add to favorites
              </button>
              <button
                onClick={() => addToCart(product)}
                className="flex-1 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm"
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
