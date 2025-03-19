import React from 'react';
import CartSidebar from './sidBar/CartSidebar';

const ParentComponent = () => {
  const customerInfo = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '1234567890',
    address: '123 Main St',
    city: 'Anytown',
    zipCode: '12345',
  };

  return (
    <CartSidebar onClose={() => { /* close logic */ }} customerInfo={customerInfo} />
  );
};

export default ParentComponent;