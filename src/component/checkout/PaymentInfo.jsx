import { useState } from 'react';
import useCartStore from '../../store/useCartStore';
import useWhatsAppCheckout from '../../hooks/useWhatsAppCheckout'; // Import the custom hook

const PaymentInfo = ({ onBack, customerInfo }) => {
  const [selectedMethod, setSelectedMethod] = useState('');
  const handleWhatsAppCheckout = useWhatsAppCheckout(); // Use the custom hook

  return (
    <>
      <h2 className="text-2xl font-bold mb-8">Payment Information</h2>
      <div className="space-y-6">
        <h3 className="text-gray-600">Payment Method</h3>
        <div className="grid grid-cols-3 gap-4">
          <button 
            className={`p-4 border rounded-xl ${selectedMethod === 'credit' ? 'border-blue-500 text-blue-500' : 'hover:border-blue-500 hover:text-blue-500'}`}
            onClick={() => setSelectedMethod('credit')}
          >
            Credit Card
          </button>
          <button 
            className={`p-4 border rounded-xl ${selectedMethod === 'paypal' ? 'border-blue-500 text-blue-500' : 'hover:border-blue-500 hover:text-blue-500'}`}
            onClick={() => setSelectedMethod('paypal')}
          >
            PayPal
          </button>
          <button 
            className={`p-4 border rounded-xl ${selectedMethod === 'whatsapp' ? 'border-blue-500 text-blue-500' : 'hover:border-blue-500 hover:text-blue-500'}`}
            onClick={() => setSelectedMethod('whatsapp')}
          >
            WhatsApp
          </button>
        </div>

        <div className="flex justify-between mt-8">
          <button 
            onClick={onBack}
            className="px-8 py-3 bg-gray-200 rounded-full hover:bg-gray-300"
          >
            Back
          </button>
          <button 
            onClick={selectedMethod === 'whatsapp' ? () => handleWhatsAppCheckout(customerInfo) : undefined}
            className="px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700"
            disabled={!selectedMethod}
          >
            Complete Payment
          </button>
        </div>
      </div>
    </>
  );
};

export default PaymentInfo;