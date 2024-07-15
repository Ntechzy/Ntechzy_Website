import React from 'react';
import { FaStar, FaStarHalf } from "react-icons/fa";

const ClientFeedback = () => {
  return (
    <div className='text-white py-8 px-4'>
      <div className='text-center text-2xl font-bold mb-4 text-slate-500' data-aos="flip-right">
        Client Feedback
      </div>

      <div className='text-center mb-8 font-bold text-3xl md:text-4xl' data-aos="flip-left">
        Happy Words From Happy Customers
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 p-4 md:p-10'>
        {/* Feedback 1 */}
        <div className='bg-gray-900 p-6 rounded-lg flex flex-col items-center' data-aos="fade-up">
          <p className='mb-4 text-center' data-aos="fade-up">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos nesciunt facilis tempora rem architecto, quasi cum? Nihil quis odio possimus Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit perferendis sunt enim facilis velit quam quidem sit pariatur soluta odio dolore atque sed dolorem quo, blanditiis itaque ea ratione est!?
          </p>
          <div className='flex justify-between items-center w-full mb-4'>
            <div className='flex' data-aos="flip-left">
              <FaStar/>
              <FaStar/>
              <FaStar/>
              <FaStar/>
              <FaStarHalf/>
            </div>
            <div className='flex items-center ml-4' data-aos="flip-right">
              <img src='https://gaaga.wpengine.com/wp-content/uploads/2023/06/home-testimonial-4.png' alt='Client 1' className='rounded-full w-12 h-12 md:w-16 md:h-16 mb-2 mr-2'data-aos="fade-up" />
              <div className='text-base md:text-lg font-semibold'>Lisha - Manager</div>
            </div>
          </div>
        </div>
        
        {/* Feedback 2 */}
        <div className='bg-gray-900 p-6 rounded-lg flex flex-col items-center' data-aos="fade-up">
          <p className='mb-4 text-center'data-aos="fade-up">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos nesciunt facilis tempora rem architecto, quasi cum? Nihil quis odio possimus Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit perferendis sunt enim facilis velit quam quidem sit pariatur soluta odio dolore atque sed dolorem quo, blanditiis itaque ea ratione est!?
          </p>
          <div className='flex justify-between items-center w-full mb-4'>
            <div className='flex'data-aos="flip-right">
              <FaStar/>
              <FaStar/>
              <FaStar/>
              <FaStar/>
              <FaStarHalf/>
            </div>
            <div className='flex items-center ml-4'data-aos="flip-left">
              <img src='https://gaaga.wpengine.com/wp-content/uploads/2023/06/home-testimonial-4.png' alt='Client 1' className='rounded-full w-12 h-12 md:w-16 md:h-16 mb-2 mr-2' data-aos="fade-up"/>
              <div className='text-base md:text-lg font-semibold'>Lisha - Manager</div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default ClientFeedback;
