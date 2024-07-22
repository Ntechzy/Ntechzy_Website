import React from 'react';

const ReachUs = ({props}) => {
  return (
    <div className='flex flex-col lg:flex-row items-center justify-center p-8'>
      {/* Picture Section */}
      <div className='w-full lg:w-1/2 p-4'data-aos="flip-right">
        <img 
          src="https://gaaga.wpengine.com/wp-content/uploads/2023/06/gaaga-Process-Content-Img-1-1.png" 
          alt="Reach Us" 
          className='w-full h-auto rounded-lg'
        />
      </div>
      
      {/* Form Section */}
      <div className='w-full lg:w-1/2 p-4' data-aos="flip-left">
        <form className='border p-8 rounded-lg'>
          <h1 className='text-3xl font-bold mb-6 text-white'>Reach Us</h1>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <div>
              <label className='block text-white mb-2'>First Name</label>
              <input 
                type="text" 
                className='w-full p-2 rounded border border-gray-300' 
                placeholder="First Name" 
              />
            </div>
            <div>
              <label className='block text-white mb-2'>Last Name</label>
              <input 
                type="text" 
                className='w-full p-2 rounded border border-gray-300' 
                placeholder="Last Name" 
              />
            </div>
          </div>
          <div className='mt-4'>
            <label className='block text-white mb-2'>Phone Number</label>
            <input 
              type="text" 
              className='w-full p-2 rounded border border-gray-300' 
              placeholder="Phone Number" 
            />
          </div>
          <div className='mt-4'>
            <label className='block text-white mb-2'>Email ID</label>
            <input 
              type="email" 
              className='w-full p-2 rounded border border-gray-300' 
              placeholder="Email ID" 
            />
          </div>
          <div className='mt-4'>
            <label className='block text-white mb-2'>Message</label>
            <textarea 
              className='w-full p-2 rounded border border-gray-300' 
              placeholder="Message" 
              rows="4"
            ></textarea>
          </div>
          <button 
            type="submit" 
            className='mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ReachUs;
