import { useEffect, useState } from "react";
import apiClient from "../../Services/apiClient";

const useProduct = () => {
  const [product, setProduct] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleUpdate = async (productToEdit, data) => {
    try {
      const response = await apiClient.put(`/items/${productToEdit.id}`, data);
      return response.data;
    } catch (err) {
      console.error("Error updating product:", err);
      throw err;
    }
  };

  const handlePost = async (data) => {
    console.log("Sending data to server:", data);
    try {
      const response = await apiClient.post(`/items`, data);
      return response.data;
    } catch (err) {
      console.error("Error adding product:", err);
      throw err;
    }
  };
  const deleteProduct = async (productID) => {
    return apiClient.delete(`/items/${productID}`);
  };
  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      try {
        const response = await apiClient.get("/items");
        setProduct(response.data);
      } catch (err) {
        console.error("Error fetching products:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getProduct();
  }, []);

  return {
    product,
    error,
    setProduct,
    loading,
    handleUpdate,
    handlePost,
    deleteProduct,
  };
};

export default useProduct;