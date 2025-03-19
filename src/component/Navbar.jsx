import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom'; // Use NavLink instead of Link
import useCartStore from '../store/useCartStore';
import useFavoriteStore from '../store/useFavoriteStore';
import CartSidebar from './sidBar/CartSidebar';
import FavoriteSidebar from './sidBar/FavoriteSidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBoxOpen, faUser, faHeart, faShoppingCart, faSignOutAlt, faSignInAlt } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const { isCartOpen, setIsCartOpen, getUniqueItemsCount, cartItems, removeFromCart } = useCartStore();
  const { favorites, isFavoriteOpen, setIsFavoriteOpen, removeFromFavorites } = useFavoriteStore();
  const navigate = useNavigate();
  const isAuthenticated = !!localStorage.getItem("token");

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsCartOpen(false);
        setIsFavoriteOpen(false);
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <nav className="bg-white shadow-md relative z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <NavLink to="/" className="text-xl font-bold text-black-700 flex text-[24px] items-center">
              <FontAwesomeIcon icon={faShoppingCart} className="mr-2 text-blue-700 text-[24px]" /> Project
            </NavLink>
          </div>
          
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="text-gray-700 hover:text-gray-900 lg:hidden"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
            <div className={`absolute top-16 left-0 w-full ${isMenuOpen ? 'bg-white h-atuo p-3' : ''}  lg:static lg:w-auto lg:flex lg:items-center lg:gap-4 ${isMenuOpen ? 'block' : 'hidden'} lg:block`}>
              <div className="flex flex-col lg:flex-row lg:justify-center items-center space-y-3 lg:space-y-0 lg:space-x-4">
                <NavLink to="/" className={({ isActive }) => `block px-4 py-2 flex items-center ${isActive ? 'text-blue-700' : 'text-gray-800 hover:text-gray-900'}`}>
                  <FontAwesomeIcon icon={faHome} className="mr-2" /> Home
                </NavLink>
                <NavLink to="/products" className={({ isActive }) => `block px-4 py-2 flex items-center ${isActive ? 'text-blue-600' : 'text-gray-700 hover:text-gray-900'}`}>
                  <FontAwesomeIcon icon={faBoxOpen} className="mr-2" /> Products
                </NavLink>
                <NavLink to="/profile" className={({ isActive }) => `block px-4 py-2 flex items-center ${isActive ? 'text-blue-600' : 'text-gray-700 hover:text-gray-900'}`}>
                  <FontAwesomeIcon icon={faUser} className="mr-2" /> Profile
                </NavLink>
                
                <button 
                  onClick={() => setIsFavoriteOpen(true)} 
                  className="block bg-red-500 text-white px-4 py-2 mb-3 lg:mb-0 rounded-lg hover:bg-red-600 flex items-center"
                >
                  <FontAwesomeIcon icon={faHeart} className="mr-2" /> Favorites ({favorites.length})
                </button>
                
                <button 
                  onClick={() => setIsCartOpen(true)} 
                  className="block bg-blue-600 text-white px-4 py-2 mb-3 lg:mb-0 rounded-lg hover:bg-blue-700 flex items-center"
                >
                  <FontAwesomeIcon icon={faShoppingCart} className="mr-2" /> Cart ({cartItems.length})
                </button>
      
                {isAuthenticated ? (
                  <button 
                    onClick={handleLogout} 
                    className="block bg-red-600 text-white px-4 py-2 mb-3 lg:mb-0 rounded-lg hover:bg-red-700 flex items-center"
                  >
                    <FontAwesomeIcon icon={faSignOutAlt} className="mr-2" /> Logout
                  </button>
                ) : (
                  <button 
                    onClick={() => navigate("/login")} 
                    className="block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center"
                  >
                    <FontAwesomeIcon icon={faSignInAlt} className="mr-2" /> Login
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {isCartOpen && <CartSidebar onClose={() => setIsCartOpen(false)} />}
      {isFavoriteOpen && <FavoriteSidebar onClose={()=>setIsFavoriteOpen(false)} /> }
    </nav>
  );
};

export default Navbar;
