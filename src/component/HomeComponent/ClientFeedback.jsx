import React from 'react';
import Slider from "react-slick";
import { FaStar, FaStarHalf } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ClientFeedback = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2, // Show two slides at a time
    slidesToScroll: 1, // Scroll one slide at a time
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1, // Show one slide at a time on smaller screens
        },
      },
    ],
  };

  return (
    <div className='text-white py-8 px-4'>
      <div className='text-center text-2xl font-bold mb-4 text-slate-500' data-aos="flip-right">
        Client Feedback
      </div>

      <div className='text-center mb-8 font-bold text-3xl md:text-4xl' data-aos="flip-left">
        Happy Words From Happy Customers
      </div>

      <Slider {...settings} className='px-4 md:px-10'>
        {/* Feedback from S.D. Singh Ayurvedic College */}
        <div className='bg-gray-900 p-6 rounded-lg flex flex-col items-center mx-2 mb-6' data-aos="fade-up">
          <p className='mb-4 text-center' data-aos="fade-up">
            "We have been incredibly pleased with the services provided by Ntechzy. The team's expertise in digital marketing has significantly boosted our online presence and engagement with prospective students."
          </p>
          <div className='flex justify-between items-center w-full mb-4'>
            <div className='flex' data-aos="flip-left">
              <FaStar/>
              <FaStar/>
              <FaStar/>
              <FaStar/>
              <FaStarHalf/>
            </div>
            <div className='flex items-center ml-4' data-aos="flip-right">
              <img src='/assets/clientlogo.png' alt='Client 1' className='rounded-full w-12 h-12 md:w-16 md:h-16 mb-2 mr-2' data-aos="fade-up" />
              <div className='text-base md:text-lg font-semibold'>S.D. Singh Ayurvedic College & Hospital</div>
            </div>
          </div>
        </div>
        
        {/* Feedback from Naiminath Ayurvedic Medical College */}
        <div className='bg-gray-900 p-6 rounded-lg flex flex-col items-center mx-2 mb-6' data-aos="fade-up">
          <p className='mb-4 text-center' data-aos="fade-up">
            "Ntechzy's innovative strategies and dedicated support have been a game changer for our institution. The tailored solutions have greatly enhanced our outreach efforts and student engagement."
          </p>
          <div className='flex justify-between items-center w-full mb-4'>
            <div className='flex' data-aos="flip-left">
              <FaStar/>
              <FaStar/>
              <FaStar/>
              <FaStar/>
              <FaStar/>
            </div>
            <div className='flex items-center ml-4' data-aos="flip-right">
              <img src='/assets/clientlogo.png' alt='Client 2' className='rounded-full w-12 h-12 md:w-16 md:h-16 mb-2 mr-2' data-aos="fade-up" />
              <div className='text-base md:text-lg font-semibold'>Naiminath Ayurvedic Medical College</div>
            </div>
          </div>
        </div>

        {/* Feedback from Vimla Family Ayurvedic Medical College */}
        <div className='bg-gray-900 p-6 rounded-lg flex flex-col items-center mx-2 mb-6' data-aos="fade-up">
          <p className='mb-4 text-center' data-aos="fade-up">
            "The team at Ntechzy has consistently delivered outstanding results. Their expertise in media services has made a substantial impact on our marketing campaigns, bringing remarkable visibility and engagement."
          </p>
          <div className='flex justify-between items-center w-full mb-4'>
            <div className='flex' data-aos="flip-left">
              <FaStar/>
              <FaStar/>
              <FaStar/>
              <FaStar/>
              <FaStar/>
            </div>
            <div className='flex items-center ml-4' data-aos="flip-right">
              <img src='/assets/clientlogo.png' alt='Client 3' className='rounded-full w-12 h-12 md:w-16 md:h-16 mb-2 mr-2' data-aos="fade-up" />
              <div className='text-base md:text-lg font-semibold'>Vimla Family Ayurvedic Medical College</div>
            </div>
          </div>
        </div>

        {/* Feedback from ITM Ayurvedic Medical College */}
        <div className='bg-gray-900 p-6 rounded-lg flex flex-col items-center mx-2 mb-6' data-aos="fade-up">
          <p className='mb-4 text-center' data-aos="fade-up">
            "Ntechzy has provided exceptional digital marketing services that have driven impressive results for our college. Their commitment to excellence and customer satisfaction is evident in the outcomes we’ve achieved."
          </p>
          <div className='flex justify-between items-center w-full mb-4'>
            <div className='flex' data-aos="flip-left">
              <FaStar/>
              <FaStar/>
              <FaStar/>
              <FaStarHalf/>
              <FaStarHalf/>
            </div>
            <div className='flex items-center ml-4' data-aos="flip-right">
              <img src='/assets/clientlogo.png' alt='Client 4' className='rounded-full w-12 h-12 md:w-16 md:h-16 mb-2 mr-2' data-aos="fade-up" />
              <div className='text-base md:text-lg font-semibold'>ITM Ayurvedic Medical College</div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default ClientFeedback;
