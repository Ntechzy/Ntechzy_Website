import React from 'react';
import { FaChartLine, FaLaptopCode, FaBullhorn, FaHandshake } from 'react-icons/fa';
import CountUp from 'react-countup';

const KnowUs = () => {
  return (
    <div className='text-white py-12 px-4 lg:px-20'>
      <div className='text-center mb-8' data-aos="flip-right">
        <h1 className='text-2xl lg:text-3xl mb-4'>Know Us</h1>
        <h1 className='font-bold text-3xl lg:text-5xl'>What Kind Of Service We Offer</h1>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-4 gap-8' data-aos="flip-up">
        {/* Service 1 */}
        <div className='bg-gray-800 p-6 rounded-lg text-center'>
          <FaChartLine className='text-4xl mb-4 mx-auto' />
          <div className='text-5xl font-bold mb-2'>
            <CountUp end={1} duration={2} />
          </div>
          <h1 className='font-bold text-xl mb-2'>Create Module</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore hic explicabo natus aperiam obcaecati magni in, laborum quisquam qui voluptatibus!</p>
        </div>
        
        {/* Service 2 */}
        <div className='bg-gray-800 p-6 rounded-lg text-center'>
          <FaLaptopCode className='text-4xl mb-4 mx-auto' />
          <div className='text-5xl font-bold mb-2'>
            <CountUp end={2} duration={2} />
          </div>
          <h1 className='font-bold text-xl mb-2'>Develop Websites</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore hic explicabo natus aperiam obcaecati magni in, laborum quisquam qui voluptatibus!</p>
        </div>
        
        {/* Service 3 */}
        <div className='bg-gray-800 p-6 rounded-lg text-center'>
          <FaBullhorn className='text-4xl mb-4 mx-auto' />
          <div className='text-5xl font-bold mb-2'>
            <CountUp end={3} duration={2} />
          </div>
          <h1 className='font-bold text-xl mb-2'>Marketing Solutions</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore hic explicabo natus aperiam obcaecati magni in, laborum quisquam qui voluptatibus!</p>
        </div>
        
        {/* Service 4 */}
        <div className='bg-gray-800 p-6 rounded-lg text-center'>
          <FaHandshake className='text-4xl mb-4 mx-auto' />
          <div className='text-5xl font-bold mb-2'>
            <CountUp end={4} duration={2} />
          </div>
          <h1 className='font-bold text-xl mb-2'>Client Support</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore hic explicabo natus aperiam obcaecati magni in, laborum quisquam qui voluptatibus!</p>
        </div>
      </div>
    </div>
  );
}

export default KnowUs;
