import React, { useState } from 'react';
import { FaStar, FaStarHalf } from "react-icons/fa";

const ExpertAns = () => {
  const [showAnswer, setShowAnswer] = useState({
    service1: false,
    service2: false,
    service3: false,
    service4: false,
  });

  const toggleAnswer = (service) => {
    setShowAnswer((prevState) => ({
      ...prevState,
      [service]: !prevState[service],
    }));
    const answerContainer = document.querySelector(`.${service}`);
    if (prevState[service]) {
      answerContainer.classList.add('hide');
      answerContainer.classList.remove('show');
    } else {
      answerContainer.classList.add('show');
      answerContainer.classList.remove('hide');
    }
  };
  
  const handleMouseLeave = (service) => {
    setShowAnswer((prevState) => ({
      ...prevState,
      [service]: false,
    }));
    const answerContainer = document.querySelector(`.${service}`);
    answerContainer.classList.add('hide');
    answerContainer.classList.remove('show');
  };

  return (
    <div className='text-white py-5 px-4' data-aos="fade-up">
      <div className='border-2 rounded-lg p-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center' data-aos="flip-left">
        {/* FAQ Section */}
        <div className='mb-8'>
          <h1 className='text-3xl font-bold mb-2 text-center' data-aos="flip-left">FAQ'S</h1>
          <h2 className='text-xl font-semibold mb-4 text-center' data-aos="flip-right">Our Expert Answers</h2>
          <div className='space-y-4'>
            {/* Question 1 */}
            <div
              className={`bg-gray-800 p-4 rounded cursor-pointer transition-opacity duration-500 ease-in-out ${showAnswer.service1 ? 'opacity-100' : 'opacity-80'}`}
              onMouseEnter={() => toggleAnswer('service1')}
              onMouseLeave={() => handleMouseLeave('service1')}
            >
              <p className='font-bold' data-aos="flip-up">What Kind Of Services Do You Offer?</p>
              {showAnswer.service1 && (
                <div className='p-4 rounded overflow-hidden' data-aos="flip-up">
                  <p>We offer a range of services including digital marketing, web development, and consulting.</p>
                </div>
              )}
            </div>

            {/* Question 2 */}
            <div
              className={`bg-gray-800 p-4 rounded cursor-pointer transition-opacity duration-500 ease-in-out ${showAnswer.service2 ? 'opacity-100' : 'opacity-80'} ${showAnswer.service2 ? 'duration-500' : 'opacity-500'}`}
              onMouseEnter={() => toggleAnswer('service2')}
              onMouseLeave={() => handleMouseLeave('service2')}
            >
              <p className='font-bold' data-aos="flip-up">What Are The Benefits Of Using Our Services?</p>
              {showAnswer.service2 && (
                <div className='p-4 rounded' data-aos="flip-up">
                  <p>Our services help you increase your online presence, improve user engagement, and boost sales.</p>
                </div>
              )}
            </div>

            {/* Question 3 */}
            <div
              className={`bg-gray-800 p-4 rounded cursor-pointer transition-opacity duration-500 ease-in-out ${showAnswer.service3 ? 'opacity-100' : 'opacity-80'}`}
              onMouseEnter={() => toggleAnswer('service3')}
              onMouseLeave={() => handleMouseLeave('service3')}
            >
              <p className='font-bold' data-aos="flip-up">How Can I Get Started?</p>
              {showAnswer.service3 && (
                <div className='p-4 rounded' data-aos="flip-up">
                  <p>Getting started is easy! Contact us through our website or give us a call to discuss your needs.</p>
                </div>
              )}
            </div>

            {/* Question 4 */}
            <div
              className={`bg-gray-800 p-4 rounded cursor-pointer transition-opacity duration-500 ease-in-out ${showAnswer.service4 ? 'opacity-100' : 'opacity-80'}`}
              onMouseEnter={() => toggleAnswer('service4')}
              onMouseLeave={() => handleMouseLeave('service4')}
            >
              <p className='font-bold' data-aos="flip-up">What Support Do You Provide?</p>
              {showAnswer.service4 && (
                <div className='p-4 rounded' data-aos="flip-up">
                  <p>We provide comprehensive support tailored to your requirements, ensuring your success.</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* TrustPilot Section */}
        <div className='flex flex-col items-center justify-center'>
          <div className='mb-4'>
            <img src='https://gaaga.wpengine.com/wp-content/uploads/2023/06/home-portfolio-listing-images-4.jpg' alt='TrustPilot' className='w-full h-full object-cover rounded-lg' data-aos="flip-up"/>
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
