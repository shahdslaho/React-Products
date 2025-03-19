import { create } from 'zustand';

const useCartStore = create((set, get) => ({
  cartItems: [],
  isCartOpen: false,

  addToCart: (product) => set((state) => {
    const existingItem = state.cartItems.find(item => item.id === product.id);
    if (existingItem) {
      return {
        cartItems: state.cartItems.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      };
    }
    return {
      cartItems: [...state.cartItems, { ...product, quantity: 1 }]
    };
  }),
  updateQuantity: (productId, quantity) => set((state) => ({
    cartItems: state.cartItems.map(item =>
      item.id === productId 
        ? { ...item, quantity: Math.max(1, quantity) } 
        : item
    )
  })),

  removeFromCart: (productId) => set((state) => ({
    cartItems: state.cartItems.filter(item => item.id !== productId)
  })),

  setIsCartOpen: (value) => set({ isCartOpen: value }),

  getUniqueItemsCount: () => {
    const state = get();
    return state.cartItems.reduce((total, item) => total + item.quantity, 0);
  },
}));

export default useCartStore;
