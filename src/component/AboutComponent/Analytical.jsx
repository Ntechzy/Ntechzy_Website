import React from 'react';

const Analytical = () => {
  return (
    <div className='text-white py-12 px-4 lg:px-20' data-aos="flip-right">
      <div className='flex flex-col lg:flex-row items-center gap-8'>
        <div className='flex-1'>
          <h1 className='text-2xl lg:text-3xl mb-4'>Analytical Skill</h1>
          <h1 className='font-bold text-3xl lg:text-5xl mb-4'>Advance Technology Tools & Platforms</h1>
          <p className='mb-6'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore odit dolor, nostrum qui dicta enim hic, accusamus adipisci necessitatibus aliquid facilis voluptates cupiditate minus animi. Non veritatis laborum ea voluptas!
          </p>
          <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
            Read More
          </button>
        </div>

        <div className='flex-1'>
          <img 
            src="https://gaaga.wpengine.com/wp-content/uploads/2023/06/gaaga-Process-Content-Img-1-1.png" 
            alt="Analytical Tools"
            className='w-full h-auto object-cover rounded-lg'
          />
        </div>
      </div>
    </div>
  );
}

export default Analytical;
