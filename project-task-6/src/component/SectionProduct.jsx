// eslint-disable-next-line no-unused-vars
import React from 'react'

const SectionProduct = () => {
    const cardsData = [
   
       
        {
            imageUrl: "/src/img/Icon1.svg",
            title: "الطلب اونلاين",
        },
        {
            imageUrl: "/src/img/Icon2.svg",
            title: " من 10ص وحتي 2 ص  ",
        },
          
        {
            imageUrl: "/src/img/Icon3.svg",
            title: " الحجز المسبق ",
        },
          
        {
            imageUrl: "/src/img/Icon3.svg",
            title: " تنظيم حفلات ",
        },
        {
            imageUrl: "/src/img/Icon3.svg",
            title: "شيفات محترفة ",
        },
        {
            imageUrl: "/src/img/Icon3.svg",
            title: " مطابخ أحترافية ",
        },
          
        
    ]
  return (
    <div>
      <div className='grid grid-cols-2 '>
        <img src="/src/img/ImgMan2.svg" alt="" />
        <div className=' pt-64 font-Almarai  text-center '>
            <p className='text-[48px] text-[#F54748]  font-bold leading-[50.22px]'> نخدمكم بكل <span className='text-[#FFBC0D]'>الحب</span>   </p>
            <p className='text-[18px] text-[#191919]  font-normal mt-5 px-16'> مشوار متخصص في المشاوى والشاورما والمقبلات والبروستد نخدمكم بأكثر من 10  فروع داخل المنطقة الشرقية بالخبر والدمام</p>
            <div className="grid grid-cols-2 mt-5 px-16">
      {cardsData.map((card, index) => (
        <div
          key={index}
          className="flex gap-2"
        >
         
          {card.imageUrl && (
            <img
              src={card.imageUrl}
              alt="Card"
              className=" "
            />
          )}
          <h1 className="font-Almarai text-[18px]   px-6 pt-4 font-bold text-[#292929] mb-4">
            {card.title}
          </h1>

        </div>
      ))}
    </div>
        </div>
        
      </div>
    </div>
  )
}

export default SectionProduct
