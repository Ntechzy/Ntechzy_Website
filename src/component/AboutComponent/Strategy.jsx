import React from 'react';
import { FaLightbulb, FaCogs, FaPuzzlePiece, FaProjectDiagram } from 'react-icons/fa';

const Strategy = () => {
  return (
    <div className='text-white py-12 px-4 lg:px-20'>
      <div className='text-center mb-8'>
        <h1 className='text-2xl lg:text-3xl mb-4'>Procedure</h1>
        <h1 className='font-bold text-3xl lg:text-5xl'>Our Best Strategy</h1>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-4 gap-8'>
        {/* Step 1 */}
        <div className='group bg-gray-800 p-6 rounded-lg text-center transform transition duration-500 hover:bg-red-600 hover:-translate-y-2'>
          <FaLightbulb className='text-3xl mx-auto mb-4 group-hover:text-white' />
          <div className='font-bold text-xl mb-2'>Find Solution</div>
          <p className='text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <button className=' text-white font-bold py-2 px-4 rounded mt-4 '>
            Read More...
          </button>
        </div>
        
        {/* Step 2 */}
        <div className='group bg-gray-800 p-6 rounded-lg text-center transform transition duration-500 hover:bg-red-600 hover:-translate-y-2'>
          <FaCogs className='text-3xl mx-auto mb-4 group-hover:text-white' />
          <div className='font-bold text-xl mb-2'>Execute Ideas</div>
          <p className='text-white'>Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
          <button className='text-white font-bold py-2 px-4 rounded mt-4'>
            Read More...
          </button>
        </div>
        
        {/* Step 3 */}
        <div className='group bg-gray-800 p-6 rounded-lg text-center transform transition duration-500 hover:bg-red-600 hover:-translate-y-2'>
          <FaPuzzlePiece className='text-3xl mx-auto mb-4 group-hover:text-white' />
          <div className='font-bold text-xl mb-2'>Integrate Modules</div>
          <p className='text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <button className=' text-white font-bold py-2 px-4 rounded mt-4 '>
            Read More...
          </button>
        </div>
        
        {/* Step 4 */}
        <div className='group bg-gray-800 p-6 rounded-lg text-center transform transition duration-500 hover:bg-red-600 hover:-translate-y-2'>
          <FaProjectDiagram className='text-3xl mx-auto mb-4 group-hover:text-white' />
          <div className='font-bold text-xl mb-2'>Deliver The Project</div>
          <p className='text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <button className=' text-white font-bold py-2 px-4 rounded mt-4 '>
            Read More...
          </button>
        </div>
      </div>
     
    </div>
  );
}

export default Strategy;
