import React, { useState } from "react";
import useCategories from "../../hooks/useCategories"; 
import useProducts from "../../hooks/useProduct"; 
import CardProduct from "./CardProduct"; 
import useCartStore from '../../store/useCartStore';

const Product = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const addToCart = useCartStore((state) => state.addToCart);

  const { data: categoriesData, isLoading: categoriesLoading, error: categoriesError } = useCategories();
  const { data: productsData = [], isLoading: productsLoading, error: productsError } = useProducts(activeCategory);

  // Convert categories data to the required format and limit to first five
  const categories = Array.isArray(categoriesData) 
    ? categoriesData.slice(0, 5).map(cat => typeof cat === 'object' && cat.name ? cat.name : 'unknown')
    : [];
  
  console.log('Processed Categories:', categories);

  // Prepare categories list without duplicating 'All'
  const allCategories = categories.includes('all') ? categories : ['all', ...categories.filter(cat => cat !== 'unknown')];

  // Define the formatCategoryName function
  const formatCategoryName = (category) => {
    if (!category || typeof category !== 'string') return 'Unknown Category';
    if (category.toLowerCase() === 'all') return 'All';
    return category
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  // Filter products based on active category
  const filteredProducts = activeCategory === 'all' 
    ? productsData 
    : productsData.filter(product => product.category.toLowerCase() === activeCategory);

  return (
    <div className="container mx-auto px-8 py-8">
      <div className="flex justify-center items-center gap-4 mb-8 flex-wrap">
        {allCategories.map((category, index) => {
          const categoryStr = String(category).toLowerCase();
          return (
            <button
              key={`cat-${index}-${categoryStr}`}
              onClick={() => setActiveCategory(categoryStr)}
              className={`px-6 py-2 rounded-full whitespace-nowrap transition-colors ${
                activeCategory === categoryStr
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {formatCategoryName(category)}
            </button>
          );
        })}
      </div>

      {/* Responsive product grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 lg:px-64 gap-8 ">
        {Array.isArray(filteredProducts) && filteredProducts.map((product) => (
          <div key={`prod-${product.id}`} className="">
            <CardProduct product={product} addToCart={addToCart} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
