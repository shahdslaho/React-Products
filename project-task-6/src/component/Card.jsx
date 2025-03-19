// eslint-disable-next-line no-unused-vars
import React from 'react';

const Card = () => {
  
  const cardsData = [
   
    {
      imageUrl: "/src/img/ImgCard3.svg",
      title: "البوفية المفتوح",
      subtitle: "بوفيه غداء أسبوعي ",
      buttonText: "أطلبه الآن",
    },
    {
      imageUrl: "/src/img/ImgCard2.svg",
      title: "توصيل مشوار",
      subtitle: "أكبر أسطول توصيل بالشرقية",
      buttonText: "أطلب الآن",
    },
    {
        imageUrl: "/src/img/ImgCard1.svg",
        title: "العروض الحالية",
        subtitle: "أقوي العروض",
        buttonText: "اكتشف المزيد",
      },
  ];

  return (
    <div className="flex justify-center items-center  gap-4 p-4 ">
      {cardsData.map((card, index) => (
        <div
          key={index}
          className="max-w-sm rounded  flex flex-col items-end border border-[1px] border-[#CECECE] overflow-hidden h-[359.27px]  bg-white pb-6"
        >
          {card.imageUrl && (
            <img
              src={card.imageUrl}
              alt="Card"
              className="w-[100%] h-48 object-cover "
            />
          )}

          
          <h1 className="font-Almarai text-[30px]   px-6 pt-4 font-bold text-[#292929] mb-4">
            {card.title}
          </h1>

          
          <h2 className="font-Almarai text-xl text-[14px] px-6 font-semibold text-[#292929] mb-2">
            {card.subtitle}
          </h2>


          <button className="font-Almarai w-[107.22px] text-lg font-normal mr-6  text-[#292929] text-[16px] bg-[#FFBC0D] rounded-full  py-2  transition duration-300">
            {card.buttonText}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Card;