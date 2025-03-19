import React from 'react';
import useCartStore from '../../store/useCartStore';

const OrderSummary = ({ onNext }) => {
  const { cartItems } = useCartStore();
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * (item.quantity || 1)), 0);
  const tax = subtotal * 0.08;
  const total = subtotal + tax;

  return (
    <>
      <h2 className="text-2xl font-bold mb-8">Order Summary</h2>
      <div className="space-y-6">
        {cartItems.map((item) => (
          <div key={item.id} className="flex items-center gap-4">
            <img 
              src={item.thumbnail} 
              alt={item.title} 
              className="w-16 h-16 object-cover rounded-lg"
            />
            <span className="flex-1 font-medium">{item.title}</span>
            <span className="text-right font-semibold text-blue-900">
              ${item.price.toFixed(2)} x {item.quantity || 1}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-8 space-y-3">
        <div className="flex justify-between text-gray-600">
          <span>Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-gray-600">
          <span>Tax</span>
          <span className="text-blue-600">${tax.toFixed(2)}</span>
        </div>
        <div className="flex justify-between font-bold text-lg pt-3 border-t">
          <span>Total</span>
          <span className="text-blue-900">${total.toFixed(2)}</span>
        </div>
      </div>

      <button 
        onClick={onNext}
        className="w-48 mt-8 bg-blue-600 text-white py-3 rounded-full hover:bg-blue-700 transition-colors"
      >
        Continue
      </button>
    </>
  );
};

export default OrderSummary;