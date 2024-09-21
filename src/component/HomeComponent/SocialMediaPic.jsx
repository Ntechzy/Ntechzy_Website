import React from 'react';
import { FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa6';

const SocialMediaPic = () => {
  // Define social media data
  const socialMediaLinks = [
    { platform: 'Instagram', icon: FaInstagram, link: 'https://www.instagram.com/ntechzy/?hl=en' },
    { platform: 'Twitter', icon: FaTwitter, link: 'https://twitter.com/Ntechzy' },
    { platform: 'Facebook', icon: FaFacebook, link: 'https://facebook.com/Ntechzy' },
    { platform: 'LinkedIn', icon: FaLinkedin, link: 'https://linkedin.com/company/Ntechzy' },
    // Ensure unique platforms for each link
  ];

  return (
    <div className='flex flex-wrap gap-5 p-4 justify-center lg:p-5 mx-auto max-w-7xl'>
      {socialMediaLinks.map((social, index) => (
        <div
          key={index}
          className='relative w-full md:w-1/3 lg:w-1/4 xl:w-1/5 flex items-center'
          data-aos="fade-up-right"
        >
          <div className='relative w-full h-64 md:h-48 lg:h-56 xl:h-64 border-2 border-gray-500 rounded-lg flex flex-col items-center justify-center  transition duration-300'>
            <social.icon className='text-4xl text-white mb-2' data-aos="flip-up"/>
            <span className='text-sm font-bold text-white' data-aos="flip-up">@Ntechzy {social.platform}</span>
            <a
              href={social.link}
              target='_blank'
              rel='noopener noreferrer'
              className='absolute inset-0 z-10'
            ></a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SocialMediaPic;
