import React from 'react';
import Slider from 'react-slick';
import { FiFacebook } from "react-icons/fi";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaCirclePlay } from "react-icons/fa6";
import { Link } from 'react-router-dom';
// src/index.js or App.js
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Sample JSON data for carousel content
const carouselData = [
  {
    id: 1,
    title: "Innovative Ideas",
    description: "We empower your brand with innovative digital marketing, expert social media management, and creative content production.",
    image: '/assets/podban1.jpg',
    socialLinks: {
      facebook: "https://www.facebook.com/ntechzypvtltd/",
      linkedin: "https://in.linkedin.com/company/ntechzy",
      instagram: "https://www.instagram.com/ntechzy/?hl=en",
    },
    videoLink: "https://www.youtube.com/@SpotlightwithNikhil",
  },
  {
    id: 2,
    title: "Digital Solutions",
    description: "From political campaigns to educational event management, we deliver solutions that drive success.",
    image: '/assets/podban2.jpg',
    socialLinks: {
      facebook: "https://www.facebook.com/ntechzypvtltd/",
      linkedin: "https://in.linkedin.com/company/ntechzy",
      instagram: "https://www.instagram.com/ntechzy/?hl=en",
    },
    videoLink: "https://www.youtube.com/@SpotlightwithNikhil",
  },
  // {
  //   id: 3,
  //   title: "Creative Services",
  //   description: "Tailored branding and promotion strategies that elevate your presence across digital platforms.",
  //   image: '/assets/podban3.jpg',
  //   socialLinks: {
  //     facebook: "https://www.facebook.com/ntechzypvtltd/",
  //     linkedin: "https://in.linkedin.com/company/ntechzy",
  //     instagram: "https://www.instagram.com/ntechzy/?hl=en",
  //   },
  //   videoLink: "https://www.youtube.com/@SpotlightwithNikhil",
  // },
  // {
  //   id: 4,
  //   title: "Web Development",
  //   description: "We offer customized web development services to meet your business needs and objectives.",
  //   image: '/assets/podban4.jpg',
  //   socialLinks: {
  //     facebook: "https://www.facebook.com/ntechzypvtltd/",
  //     linkedin: "https://in.linkedin.com/company/ntechzy",
  //     instagram: "https://www.instagram.com/ntechzy/?hl=en",
  //   },
  //   videoLink: "https://www.youtube.com/@SpotlightwithNikhil",
  // },
];

const Banner = () => {
  const settings = {
    dots: true,                  
    infinite: true,             
    speed: 500,                 
    slidesToShow: 1,             
    slidesToScroll: 1,          
    autoplay: true,          
    autoplaySpeed: 3000,      
    pauseOnHover: true, 
  };

  return (
    <div className="bg-cover bg-center h-full flex flex-col justify-center overflow-hidden">
      <Slider {...settings}>
        {carouselData.map((item) => (
          <div key={item.id} className="flex flex-col lg:flex-row lg:items-center gap-11">
            {/* Social Media Icons - Hidden on mobile */}
            {/* <div className="flex lg:flex-col items-center lg:items-start gap-6 lg:gap-6 mt-4 lg:mt-40 hidden lg:flex" data-aos="flip-down">
              <Link to={item.socialLinks.facebook} target="_blank" className="bg-white p-2 rounded-full">
                <FiFacebook className="text-blue-600 text-2xl cursor-pointer" />
              </Link>
              <Link to={item.socialLinks.linkedin} target="_blank" className="bg-white p-2 rounded-full">
                <FaLinkedinIn className="text-pink-600 text-2xl cursor-pointer" />
              </Link>
              <Link to={item.socialLinks.instagram} target="_blank" className="bg-white p-2 rounded-full">
                <FaInstagram className="text-blue-400 text-2xl cursor-pointer" />
              </Link>
            </div> */}

            {/* Text and Image Container */}
            <div className="flex flex-col ml-[-30px] lg:flex-row items-center gap-4 lg:gap-11 flex-grow lg:p-0">
              {/* Text Section */}
              <div className="flex flex-col justify-center text-center lg:text-left text-white flex-grow lg:ml-20">
                <span className="block text-lg lg:text-xl mt-2 lg:mt-20 font-semibold mb-2 overflow-x-hidden" data-aos="slide-right">{item.title}</span>
                <h1 className="text-3xl lg:text-5xl font-bold mb-4" data-aos="slide-left">We offer You A digital Platform</h1>
                <p className="p-2 max-w-lg mx-auto ml-[30px] lg:mx-0 text-sm lg:text-base" data-aos="slide-left">
                  {item.description}
                </p>
                <div className="flex flex-col items-center lg:items-start mt-5">
                  <span className="text-white text-lg font-semibold" data-aos="slide-left">Get Started</span>
                  <div className="flex flex-row items-center gap-3 lg:gap-5 mt-3" data-aos="slide-left">
                    <FaCirclePlay className="text-white text-3xl" />
                    <Link to={item.videoLink} target="_blank" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" data-aos="zoom-out">View Videos</Link>
                  </div>
                </div>
              </div>

              {/* Image Section */}
              <div className="overflow-hidden relative w-full lg:w-1/2 flex justify-end">
                <img src={item.image} alt="Banner Image" className="w-full h-auto object-cover rounded-lg z-0" data-aos="zoom-in" />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Banner;
