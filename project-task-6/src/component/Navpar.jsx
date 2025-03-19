import 'react';

const Navpar = () => {
  return (
    <>
      <div 
        style={{ 
          backgroundImage: "url('/src/img/ImgMan1.svg')", 
          width: "100%", 
          height: "100vh", 
          backgroundSize: "cover", 
          marginLeft: "0" 
        }}
        className="ml-0 "
      >
        <div className='flex flex-row-reverse justify-around  '>
        <img src="/src/img/Logo.svg" alt="" className='m-5'/>
        <nav className="p-4 m-5 text-black">
          <ul className="flex space-x-4">
            <li><a href="#home" className="hover:text-gray-300">الرئيسة</a></li>
            <li><a href="#about" className="hover:text-gray-300">القائمة</a></li>
            <li><a href="#services" className="hover:text-gray-300">عن مشوار</a></li>
            <li><a href="#contact" className="hover:text-gray-300">الفروع</a></li>
            <li><a href="#contact" className="hover:text-gray-300">تواصل معنا </a></li>
          </ul>
        </nav>
        <div className='m-5'>
        <button className='w-[116px] h-[40px] rounded-[100px] bg-[#FFBC0D]'>اتصل بنا </button>
        <button className='w-[63px] h-[26px] gap-[2px] text-[#006BAE] '>اللغة</button>
          
        </div>
        </div  >
        <div className='grid grid-cols-2 '>
          <div className='font-Almarai text-[48px] font-bold leading-[50.22px] text-center  '>
          <p><span className='text-[#F54748]'>مشويات</span> & <span className='text-[#FFB711]'>شاورما</span>
          <br />
          بخبرة ثلاثون عــــــــام
          </p>
          <p className='font-Almarai text-base text-[#191919] mt-5 font-normal leading-[17.86px]  text-center underline"'>نقدم الطعام الطيب بشغف لكل محبي الاطايب والنكهات المميزة</p>
          <input
                  type="text"
                  className="w-[471px] h-[54px] mt-5 rounded-[100px] pl-5 pb-4 border border-[0.5px] border-[#191919] placeholder:font-Almarai placeholder:text-[18px] placeholder:font-normal   "
                  placeholder="بحث عن الفرع"/>
          <button className='w-[161px] h-[44px] mt-5 rounded-[100px] bg-[#F54748] leading-[17.86px] text-[18px] text-white' >أطلب الحين</button>
      
          </div>
          
        </div>
      </div>
    </>
  );
};

export default Navpar;