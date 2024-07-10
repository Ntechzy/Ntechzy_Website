import React from 'react';
import { FaStar, FaStarHalf } from "react-icons/fa";
const ClientFeedback = () => {
  return (
    <div className='text-white py-8 px-4'>
      <div className='text-center text-2xl font-bold mb-4
       text-[35px] text-slate-500'>
        Client Feedback
      </div>

      <div className='text-center mb-8 font-bold text-[50px]'>
        Happy Words From Happy Customers
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-6  p-10'>
        {/* Feedback 1 */}
        <div className='bg-gray-900 p-6 rounded-lg flex flex-col items-center'>
          <p className='mb-4'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos nesciunt facilis tempora rem architecto, quasi cum? Nihil quis odio possimus Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit perferendis sunt enim facilis velit quam quidem sit pariatur soluta odio dolore atque sed dolorem quo, blanditiis itaque ea ratione est!?
          </p>
          <div className='flex justify-between items-center gap-[50px]'>
          <div className='flex'>
          <FaStar/>
          <FaStar/>
          <FaStar/>
          <FaStar/>
          <FaStarHalf/>
          </div>
         <div className='flex items-center gap-8'><img src='https://gaaga.wpengine.com/wp-content/uploads/2023/06/home-testimonial-4.png' alt='Client 1' className='rounded-full mb-2' />
         <div className='text-lg font-semibold'>Lisha - Manager</div></div>
        </div>
        </div>
        {/* Feedback 2 */}
       
        <div className='bg-gray-900 p-6 rounded-lg flex flex-col items-center'>
          <p className='mb-4'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos nesciunt facilis tempora rem architecto, quasi cum? Nihil quis odio possimus Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit perferendis sunt enim facilis velit quam quidem sit pariatur soluta odio dolore atque sed dolorem quo, blanditiis itaque ea ratione est!?
          </p>
          <div className='flex justify-between items-center gap-[50px]'>
          <div className='flex'>
          <FaStar/>
          <FaStar/>
          <FaStar/>
          <FaStar/>
          <FaStarHalf/>
          </div>
         <div className='flex items-center gap-8'><img src='https://gaaga.wpengine.com/wp-content/uploads/2023/06/home-testimonial-4.png' alt='Client 1' className='rounded-full mb-2' />
         <div className='text-lg font-semibold'>Lisha - Manager</div></div>
        </div>
        </div>
        
      </div>
    </div>
  );
}

export default ClientFeedback;
