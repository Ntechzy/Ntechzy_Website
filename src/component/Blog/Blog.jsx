import React from 'react';

const Blog = () => {
  return (
    <div className='text-white py-8 px-4'>
      <div className='text-center font-bold text-[33px] mb-2' data-aos="flip-right">Blog</div>
      <div className='text-center font-bold text-[30px] mb-6'data-aos="flip-left">Digital World News</div>
      <div className='flex flex-col lg:flex-row items-center justify-center space-y-8 lg:space-y-0 lg:space-x-8 rounded-lg p-6'>
        
        {/* First Box */}
        <div className='flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-4 border-0 p-5'>
          <div className='w-full lg:w-[200px] h-[300px]' data-aos="fade-right">
            <img src="https://gaaga.wpengine.com/wp-content/uploads/2023/06/home-portfolio-listing-images-5-1.jpg" alt="loading" className='w-full h-full object-cover rounded-lg'/>
          </div>
          <div className='w-full lg:w-[400px] p-7'>
            <div className='text-[20px]' data-aos="fade-up">10 July 2024</div>
            <h1 className='font-bold text-[25px]' data-aos="fade-up-right">Creative and Smart Business</h1>
            <div className='font-semibold' data-aos="flip-down">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis, repellendus Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt enim velit veritatis, voluptate nulla quidem quibusdam labore? Provident architecto iusto ullam doloremque, eveniet, quisquam non corporis temporibus exercitationem voluptas ex.!</div>
          </div>
        </div>

        {/* Line */}
        {/*<div className='hidden lg:block h-[300px] border-l-2 border-gray-500'></div>}

        {/* Second Box */}
        <div className='flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-4 border-0 p-5'>
          <div className='w-full lg:w-[200px] h-[300px]' data-aos="fade-left">
            <img src="https://gaaga.wpengine.com/wp-content/uploads/2023/06/home-portfolio-listing-images-5-1.jpg" alt="loading" className='w-full h-full object-cover rounded-lg'/>
          </div>
          <div className='w-full lg:w-[400px] p-7'>
            <div className='text-[20px]' data-aos="fade-up">10 July 2024</div>
            <h1 className='font-bold text-[25px]' data-aos="fade-up-right">Creative and Smart Business</h1>
            <div className='font-semibold' data-aos="flip-down">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis, repellendus Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt enim velit veritatis, voluptate nulla quidem quibusdam labore? Provident architecto iusto ullam doloremque, eveniet, quisquam non corporis temporibus exercitationem voluptas ex.!</div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Blog;
