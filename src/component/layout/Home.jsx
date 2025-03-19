// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import { Autoplay } from 'swiper/modules'; // Import the Autoplay module

import ProductCard from "./CardProduct";  
 
import { items } from '../../data/products';
import useCartStore from '../../store/useCartStore';

const Home = () => {
  const [products, setProducts] = useState([]);
  const addToCart = useCartStore((state) => state.addToCart);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://dummyjson.com/products');
        setProducts(response.data.products);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="px-4 py-8 lg:h--auto lg:px-32 lg:py-12">
        <div className="relative w-full rounded-[20px] bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg grid grid-col lg:flex lg:flex-row items-center">
          <div className="max-w-xl mx-auto p-8 text-center lg:text-left">
            <h1 className="text-3xl lg:text-4xl font-bold mb-4">Discover the Future of Technology</h1>
            <p className="text-lg lg:text-xl mb-6">
              Experience innovation with our premium selection of cutting-edge devices.
            </p>
            <button className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-gray-100 transition">
              Explore Now
            </button>
          </div>
          <div className="flex-1 mt-6 lg:mt-0  ">
            <img src="../../../src/assets/image/image.png" alt="Technology" className="lg:w-full lg:h-auto  h-[20rem] md:w-full lg:rounded-tr-[20px] lg:rounded-br-[20px]" />
          </div>
        </div>
      </div>
    
    
      <div className="max-w-7xl mx-auto py-12 px-8 mb-12">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Products</h2>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]} // Include Autoplay module
          spaceBetween={30}
          slidesPerView={1} // Default to 1 slide per view
          navigation
          pagination={{ clickable: true, el: null }} // Hide pagination dots
          autoplay={{ delay: 3000, disableOnInteraction: false }} // Automatically slide every 3 seconds
          breakpoints={{
            640: {
              slidesPerView: 1, // 1 slide per view for screens 640px and above
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2, // 2 slides per view for screens 768px and above
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3, // 3 slides per view for screens 1024px and above
              spaceBetween: 40,
            },
          }}
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <ProductCard product={product} addToCart={addToCart} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

     
      <div className="max-w-7xl mx-auto py-12 px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.slice(0, 3).map((product) => (
            <ProductCard key={product.id} product={product} addToCart={addToCart} />
          ))}
        </div>
      </div>

      
      <div className="max-w-7xl mx-auto py-12 px-4">
        <h2 className="text-3xl font-bold text-center mb-12">All Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((product) => (
            <ProductCard key={product.id} product={product} addToCart={addToCart} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;

