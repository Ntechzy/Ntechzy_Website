import React from 'react';
import { LiaBrainSolid } from "react-icons/lia";

const Creative = () => {
  return (
    <div className="flex flex-wrap gap-8 m-auto items-center justify-center text-2xl h-auto p-4" data-aos="flip-left">
      <div className='flex items-center text-white space-x-3 p-4 justify-center rounded-lg shadow-lg w-full sm:w-auto '>
        <LiaBrainSolid className='text-5xl' />
        <div>
          <span className='text-2xl font-bold flex'>Advance Tools</span>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
      <div className='flex items-center text-white space-x-3 p-4 justify-center rounded-lg shadow-lg w-full sm:w-auto '>
        <LiaBrainSolid className='text-5xl' />
        <div>
          <span className='text-2xl font-bold'>Innovation</span>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
      <div className='flex items-center text-white space-x-3 p-4 justify-center rounded-lg shadow-lg w-full sm:w-auto'>
        <LiaBrainSolid className='text-5xl' />
        <div>
          <span className='text-2xl font-bold'>Creative Tools</span>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
    </div>
  );
}

export default Creative;
