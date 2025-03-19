import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon
import { faHeart } from '@fortawesome/free-solid-svg-icons'; // Import the heart icon
import useFavoriteStore from '../../store/useFavoriteStore';

const FavoriteSidebar = () => {
  const { favorites, setIsFavoriteOpen, removeFromFavorites } = useFavoriteStore();
  const navigate = useNavigate(); // Initialize useNavigate

  return (
    <div className="fixed z-[10000] top-0 left-0 w-96 h-full bg-white shadow-lg p-6 transition-transform duration-300 overflow-y-auto">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Your Favorites ({favorites.length})</h2>
        
        <button onClick={() => setIsFavoriteOpen(false)} className="text-gray-500 text-xl">×</button>
       
      </div>

      {favorites.length === 0 ? (
        <p className="text-gray-600 mt-4">Your favorites list is empty. Add some products to your favorites!</p>
      ) : (
        <ul className="mt-4 space-y-4">
          {favorites.map((product) => (
            <li key={product.id} className="flex items-center justify-between bg-gray-100 p-2 rounded-lg">
              <img src={product.thumbnail} alt={product.title} className="w-12 h-12 object-cover rounded" />
              <div className="flex-1 ml-4">
                <h4 className="font-medium">{product.title}</h4>
                <p className="text-gray-600">${product.price}</p>
              </div>
              <button 
                onClick={() => removeFromFavorites(product.id)} 
                className="text-red-500 text-lg"
              >
                <FontAwesomeIcon icon={faHeart} /> {/* Use heart icon */}
              </button>
            </li>
          ))}
        </ul>
      )}
      <button 
        onClick={() => navigate('/')} // Navigate to the home or main shopping page
        className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 mt-4 w-full"
      >
        Continue Shopping
      </button>
    </div>
  );
};

export default FavoriteSidebar;