// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PopUp from './PopUp';
import MyForm from './MyForm';
import useProduct from '../hooks/UseProdact';

const Tableprodact = () => {
  const [product, setProduct] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { handlePost ,deleteProduct,handleUpdate } = useProduct();

  const handleSubmit = async (data) => {
    try {
      if (selectedProduct) {
        // إذا كان هناك عنصر محدد، قم بالتعديل
        const updatedProduct = await handleUpdate(selectedProduct, data);
        setProduct(product.map((item) => (item.id === selectedProduct.id ? updatedProduct : item)));
        setSelectedProduct(null); // إعادة تعيين العنصر المحدد
      } else {
        // إذا لم يكن هناك عنصر محدد، قم بالإضافة
        const newProduct = await handlePost(data);
        setProduct([...product, newProduct]);
      }
    } catch (err) {
      console.error("Error submitting form:", err);
    }
  };
 


  const handleDelete = async (productID) => {
    try {
      await deleteProduct(productID); // إرسال طلب الحذف إلى الخادم
      setProduct(product.filter((item) => item.id !== productID)); // تحديث الحالة
    } catch (err) {
      console.error("Error deleting product:", err);
    }
  };

  useEffect(() => {
    axios
      .get("http://localhost:5000/items")
      .then((res) => setProduct(res.data))
      .catch((err) => console.error("Error fetching items:", err));
  }, []);

  
  return (
    <div className="overflow-x-auto">
      <div className="mt-10  flex items-left">
      <PopUp title={"Post New Product"}>
          <MyForm
            title={ "Add Product"}
            onSubmit={handleSubmit}
               />
        </PopUp>
      </div>
      <table className="min-w-full border-collapse border border-gray-300 mt-10 shadow-lg">
        <thead className="bg-gray-200 text-gray-700">
          <tr>
            <th className="border border-gray-300 px-4 py-2 text-left">Image</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Name</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Status</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Price</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Rating</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {product.map((item, index) => (
            <tr key={index} className="hover:bg-gray-100">
              <td className="border border-gray-300 px-4 py-2">
                <img
                  src={item.image_url}
                  alt={item.name}
                  className="w-16 h-16 rounded object-cover"
                />
              </td>
              <td className="border border-gray-300 px-4 py-2">{item.name}</td>
              <td className="border border-gray-300 px-4 py-2">
                <span
                  className={`px-2 py-1 rounded ${
                    item.status === 'Available'
                      ? 'bg-green-100 text-green-600'
                      : 'bg-red-100 text-red-600'
                  }`}
                >
                  {item.status}
                </span>
              </td>
              <td className="border border-gray-300 px-4 py-2">${item.price}</td>
              <td className="border border-gray-300 px-4 py-2">{item.rating}</td>
              <td className="border border-gray-300 px-4 py-2">
                <button
                    onClick={() => handleDelete(item.id)}
                  className="w-20 h-10 rounded object-cover bg-red-500 text-white hover:bg-red-600 mr-4"
                >
                  Delete
                </button>
                <button
                  onClick={() => setSelectedProduct(item)}
                      >
                <PopUp title={"Update " }>
          <MyForm
            title={"Update Product"}
            onSubmit={handleSubmit}
            initialData={selectedProduct} // تمرير البيانات الأولية للتعديل
          />
        </PopUp>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Tableprodact;