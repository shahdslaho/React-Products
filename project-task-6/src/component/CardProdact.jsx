import axios from 'axios';
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';

const CardProduct = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/items")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error("Error fetching items:", err));
  }, []);

  return (
    <>
       
    <div className='flex flex-wrap '>
    {products.map((item, index) => (
        <div key={index} className="">
          <div className="w-[300px] relative flex flex-col mt-[12rem] ml-1  items-center h-[360px] rounded-[20px] bg-gradient-to-b from-transparent to-[rgba(245,71,72,0.3)]">
            {/* الصورة */}
            <img
              src="/src/img/Circle.svg" // استخدام image_url من البيانات
              alt={item.name} 
              className="absolute top-[-160px] "
            />
            <img
              src={item.image_url} // استخدام image_url من البيانات
              alt={item.name} // استخدام name كـ alt للنص البديل
              className="absolute top-[-150px] w-[200px] h-[200px] object-cover rounded-full"
            />
           
             <div className="p-6 mt-10 ">
                <div className='flex relative '>
              

                <div className='bg-[#FDC55E] absolute top-[-50px] right-1  border-[4px] border-[#fff] w-[60px] p-1 pt-3 h-[60px] rounded-[100%] text-[#F54748]  font-semibold'> {item.price}</div>
          
               
                </div>
                <button className='bg-[#EA1B25] w-[62px] mb-5 h-[30px] rounded-[50px] text-white text-lg font-semibold'>+</button>
        
                 <div className='flex gap-3 flex-row justify-center'>
                <img src="/src/img/p3.svg" alt="" />
                <img src="/src/img/Star 7.svg" alt="" />
                <span className="font-Almarai text-black text-lg font-semibold">({item.rating})</span>
                </div>
                <h1 className="font-Almarai text-[#F54748]  mt-5 text-2xl font-bold">{item.name}</h1>
                <p className='font-Almarai text-[#191919] text-[16px] mt-5'>{item.description}</p>
                <button className="w-[130px]'font-Almarai bg-[#F54748] text-white font-semibold rounded-full px-6 py-2 hover:bg-gray-100 transition duration-300 absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
                        Order Now
                    </button>
            </div>
          </div>
        </div>
      ))}
    </div>
    
    </>
  );
};

export default CardProduct;