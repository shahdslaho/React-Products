/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import useCartStore from '../../store/useCartStore';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon
import { faTrash } from '@fortawesome/free-solid-svg-icons'; // Import the trash icon

const CartSidebar = ({ onClose}) => { // Ensure customerInfo is passed as a prop
  const { cartItems, removeFromCart, updateQuantity } = useCartStore();
  const navigate = useNavigate();

  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const handleCheckout = () => {
    onClose();
    navigate('/checkout');
  };

  return (
    <div className="fixed z-[9999] top-0 left-0 w-96 h-full bg-white shadow-lg p-6 transition-transform duration-300 overflow-y-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Your Cart ({cartItems.length} items)</h2>
        <button onClick={onClose} className="text-gray-500 text-xl">×</button>
      </div>

      {cartItems.length === 0 ? (
        <p className="text-gray-600 mt-4">Your cart is empty. Add some products to your cart!</p>
      ) : (
        <>
          <ul className="space-y-4">
            {cartItems.map((item) => (
              <li key={item.id} className="flex items-center gap-4 border-b pb-4">
                <img src={item.thumbnail} alt={item.title} className="w-16 h-16 object-cover rounded" />
                <div className="flex-1">
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-gray-600">${item.price} x {item.quantity}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="px-2 py-1 bg-gray-200 rounded"
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="px-2 py-1 bg-gray-200 rounded"
                    >
                      +
                    </button>
                    <button 
                      onClick={() => removeFromCart(item.id)}
                      className="ml-auto text-red-500"
                    >
                      <FontAwesomeIcon icon={faTrash} /> {/* Use Font Awesome trash icon */}
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-6 border-t pt-4">
            <div className="flex justify-between items-center mb-4">
              <span className="text-xl font-bold">Total:</span>
              <span className="text-xl font-bold">${total.toFixed(2)}</span>
            </div>
            
            <button 
              onClick={handleCheckout}
              className="w-full bg-blue-600 text-white py-3 rounded-lg mb-2 hover:bg-blue-700"
            >
              Regular Checkout
            </button>
           
          </div>
        </>
      )}
    </div>
  );
};

export default CartSidebar;