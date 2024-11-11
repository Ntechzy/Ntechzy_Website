import React from 'react';
import { FaStar, FaStarHalf } from "react-icons/fa";


const CommonFaq = ({ title = "FAQ'S", subtitle = "Our Expert Answers", imageUrl, rating = 4.8,data }) => {
  return (
    <div className='text-white py-5 px-4'>
      <div className='border-2 rounded-lg p-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center'>
        
        {/* FAQ Section */}
        <div className='mb-8'>
          <h1 className='text-3xl font-bold mb-2 text-center' >{title}</h1>
          <h2 className='text-xl font-semibold mb-4 text-center'>{subtitle}</h2>
          <div className='space-y-4'>
            {data.map((faq, index) => (
              <div key={index} className='group bg-gray-800 p-4 rounded cursor-pointer transition-opacity duration-500 ease-in-out'>
                <p className='font-bold' >{faq.question}</p>
                <div className='max-h-0 overflow-hidden transition-all duration-500 ease-in-out group-hover:max-h-screen'>
                  <p className='p-4 rounded'>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* TrustPilot Section */}
        <div className='flex flex-col items-center justify-center'>
          <div className='mb-4'>
            <img src={imageUrl} alt='TrustPilot' className='w-full h-full object-cover rounded-lg'/>
          </div>
          <div className='flex flex-col justify-center'>
            <div className='text-lg font-semibold'>TrustPilot</div>
            <div className='flex flex-row text-2xl font-bold text-red-400' data-aos="flip-up">
              {[...Array(Math.floor(rating)).keys()].map((_, i) => (
                <FaStar key={i} />
              ))}
              {rating % 1 !== 0 && <FaStarHalf />}
            </div>
            <div className='text-sm text-gray-400' data-aos="flip-up">Over {rating} rating from our clients</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommonFaq;
