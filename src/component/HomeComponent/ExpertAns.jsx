import React from 'react';
import { FaStar, FaStarHalf } from "react-icons/fa";

const ExpertAns = () => {
  return (
    <div className='text-white py-5 px-4' data-aos="fade-up">
      <div className='border-2 rounded-lg p-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center' data-aos="flip-left">
        {/* FAQ Section */}
        <div className='mb-8'>
          <h1 className='text-3xl font-bold mb-2 text-center' data-aos="flip-left">FAQ'S</h1>
          <h2 className='text-xl font-semibold mb-4 text-center' data-aos="flip-right">Our Expert Answers</h2>
          <div className='space-y-4'>
            {/* Question 1 */}
            <div className='group bg-gray-800 p-4 rounded cursor-pointer transition-opacity duration-500 ease-in-out'>
              <p className='font-bold' data-aos="flip-right">What Kind Of Services Do You Offer?</p>
              <div className='max-h-0 overflow-hidden transition-all duration-500 ease-in-out group-hover:max-h-screen' >
                <p className='p-4 rounded overflow-hidden' >
                  We offer a range of services including digital marketing, web development, and consulting.
                </p>
              </div>
            </div>

            {/* Question 2 */}
            <div className='group bg-gray-800 p-4 rounded cursor-pointer transition-opacity duration-500 ease-in-out'>
              <p className='font-bold' data-aos="flip-right">What Are The Benefits Of Using Our Services?</p>
              <div className='max-h-0 overflow-hidden transition-all duration-500 ease-in-out group-hover:max-h-screen'>
                <p className='p-4 rounded' data-aos="flip-up">
                  Our services help you increase your online presence, improve user engagement, and boost sales.
                </p>
              </div>
            </div>

            {/* Question 3 */}
            <div className='group bg-gray-800 p-4 rounded cursor-pointer transition-opacity duration-500 ease-in-out'>
              <p className='font-bold' data-aos="flip-right">How Can I Get Started?</p>
              <div className='max-h-0 overflow-hidden transition-all duration-500 ease-in-out group-hover:max-h-screen'>
                <p className='p-4 rounded' data-aos="flip-up">
                  Getting started is easy! Contact us through our website or give us a call to discuss your needs.
                </p>
              </div>
            </div>

            {/* Question 4 */}
            <div className='group bg-gray-800 p-4 rounded cursor-pointer transition-opacity duration-1000 ease-in-out'>
              <p className='font-bold' data-aos="flip-right">What Support Do You Provide?</p>
              <div className='max-h-0 overflow-hidden transition-all duration-500 ease-in-out group-hover:max-h-screen'>
                <p className='p-4 rounded' data-aos="flip-up">
                  We provide comprehensive support tailored to your requirements, ensuring your success.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* TrustPilot Section */}
        <div className='flex flex-col items-center justify-center'>
          <div className='mb-4'>
            <img src='/assets/faq.png' alt='TrustPilot' className='w-full h-full object-cover rounded-lg' data-aos="flip-up"/>
          </div>
          <div className='flex flex-col justify-center'>
            <div className='text-lg font-semibold'>TrustPilot</div>
            <div className='flex flex-row text-2xl font-bold text-red-400' data-aos="flip-up">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStarHalf />
            </div>
            <div className='text-sm text-gray-400' data-aos="flip-up">Over 4.8 rating from our clients</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExpertAns;
