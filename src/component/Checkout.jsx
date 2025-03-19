import React, { useState } from 'react';
import useCartStore from '../store/useCartStore';
import OrderSummary from './checkout/OrderSummary';
import ShippingInfo from './checkout/ShippingInfo';
import PaymentInfo from './checkout/PaymentInfo';

const Checkout = () => {
  const [step, setStep] = useState(1);
  const [customerInfo, setCustomerInfo] = useState({});
  const { cartItems } = useCartStore();

  const handleShippingSubmit = (data) => {
    setCustomerInfo(data);
    setStep(3);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return <OrderSummary onNext={() => setStep(2)} />;
      case 2:
        return <ShippingInfo onNext={handleShippingSubmit} onBack={() => setStep(1)} />;
      case 3:
        return <PaymentInfo onBack={() => setStep(2)} customerInfo={customerInfo} />;
      default:
        return null;
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      {/* Progress Bar */}
      <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-purple-300 rounded-2xl p-6 mb-8">
        <h1 className="text-center text-white text-2xl font-bold mb-6">Checkout</h1>
        <div className="flex justify-between items-center">
          <div className={`flex items-center justify-center w-10 h-10 bg-white rounded-full font-bold text-xl ${step >= 1 ? 'text-blue-500' : 'text-gray-300'}`}>1</div>
          <div className="h-1 flex-1 mx-4 bg-white"></div>
          <div className={`flex items-center justify-center w-10 h-10 bg-white rounded-full font-bold text-xl ${step >= 2 ? 'text-purple-500' : 'text-gray-300'}`}>2</div>
          <div className="h-1 flex-1 mx-4 bg-white"></div>
          <div className={`flex items-center justify-center w-10 h-10 bg-white rounded-full font-bold text-xl ${step >= 3 ? 'text-purple-500' : 'text-gray-300'}`}>3</div>
        </div>
      </div>

      <div className="bg-white rounded-3xl shadow-lg p-8">
        {renderStep()}
      </div>
    </div>
  );
};

export default Checkout;