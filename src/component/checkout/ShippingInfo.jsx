import React, { useState } from 'react';

const ShippingInfo = ({ onNext, onBack }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zipCode: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext(formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <h2 className="text-2xl font-bold mb-8">Shipping Information</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-600 mb-2">First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full p-3 border rounded-xl"
              required
            />
          </div>
          <div>
            <label className="block text-gray-600 mb-2">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full p-3 border rounded-xl"
              required
            />
          </div>
          <div>
            <label className="block text-gray-600 mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border rounded-xl"
              required
            />
          </div>
          <div>
            <label className="block text-gray-600 mb-2">Phone</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-3 border rounded-xl"
              required
            />
          </div>
          <div>
            <label className="block text-gray-600 mb-2">Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full p-3 border rounded-xl"
              required
            />
          </div>
          <div>
            <label className="block text-gray-600 mb-2">City</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="w-full p-3 border rounded-xl"
              required
            />
          </div>
          <div>
            <label className="block text-gray-600 mb-2">Zip Code</label>
            <input
              type="text"
              name="zipCode"
              value={formData.zipCode}
              onChange={handleChange}
              className="w-full p-3 border rounded-xl"
              required
            />
          </div>
        </div>

        <div className="flex justify-between mt-8">
          <button type="button" onClick={onBack} className="px-8 py-3 bg-gray-200 rounded-full">
            Back
          </button>
          <button type="submit" className="px-8 py-3 bg-blue-600 text-white rounded-full">
            Continue
          </button>
        </div>
      </form>
    </>
  );
};

export default ShippingInfo;