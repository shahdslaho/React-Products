import { create } from 'zustand';

const useFavoriteStore = create((set) => ({
  favorites: [],
  isFavoriteOpen: false,

  addToFavorites: (product) => set((state) => {
    const isAlreadyFavorite = state.favorites.some(item => item.id === product.id);
    if (!isAlreadyFavorite) {
      return {
        favorites: [...state.favorites, product]
      };
    }
    return state; // Return the current state if the product is already a favorite
  }),

  removeFromFavorites: (productId) => set((state) => ({
    favorites: state.favorites.filter(item => item.id !== productId)
  })),

  setIsFavoriteOpen: (value) => set({ isFavoriteOpen: value })
}));

export default useFavoriteStore;
