import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useProduct = (category) => {
  return useQuery({
    queryKey: ["products", category],
    queryFn: async () => {
      const url = category.toLowerCase() === "all" // Ensure case-insensitive comparison
        ? "https://dummyjson.com/products?limit=100"
        : `https://dummyjson.com/products/category/${category.toLowerCase()}`;

      const res = await axios.get(url);
      return res.data.products;
    },
    enabled: !!category, // Ensure the query is only run when a category is set
  });
};

export default useProduct;
