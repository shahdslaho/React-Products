import { create } from 'zustand';

const useFilterStore = create((set) => ({
  activeCategory: 'All',
  setActiveCategory: (category) => set({ activeCategory: category }),
  
  // يمكن إضافة المزيد من وظائف الفلترة هنا
  filterProducts: (products, category) => {
    if (category === 'All') {
      return products;
    }
    return products.filter(product => 
      product.category.toLowerCase() === category.toLowerCase()
    );
  }
}));

export default useFilterStore;