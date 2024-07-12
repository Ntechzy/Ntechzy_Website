import React from 'react';
import { LiaBrainSolid } from "react-icons/lia";

const Creative = () => {
  return (
    <div className="flex gap-8 m-auto items-center justify-center text-2xl overflow-x-auto h-48" data-aos="fade-in">
      <div className='flex items-center text-white space-x-3 p-4  rounded-lg shadow-lg'>
        <LiaBrainSolid className='text-5xl' />
       <div>
       <span className='text-2xl font-bold'>Advance Tools</span>
       <p>Lorem ipsum dolor sit amet.</p>
       </div>
        
      </div>
      <div className='flex items-center text-white space-x-3 p-4  rounded-lg shadow-lg'>
        <LiaBrainSolid className='text-5xl' />
       <div>
       <span className='text-2xl font-bold'>Innovation</span>
       <p>Lorem ipsum dolor sit amet.</p>
       </div>
        
      </div>
      <div className='flex items-center text-white space-x-3 p-4  rounded-lg shadow-lg'>
        <LiaBrainSolid className='text-5xl' />
       <div>
       <span className='text-2xl font-bold'>Creative Tools</span>
       <p>Lorem ipsum dolor sit amet.</p>
       </div>
        
      </div>
      
    </div>
  )
}

export default Creative;
