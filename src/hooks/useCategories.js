import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useCategories = () => {
  return useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const res = await axios.get("https://dummyjson.com/products/categories");
      return ["All", ...res.data]; // إضافة "All" للفئات
    },
  });
};

export default useCategories;
