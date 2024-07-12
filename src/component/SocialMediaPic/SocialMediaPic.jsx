import React from 'react';
import { FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa';

const SocialMediaPic = () => {
  // Define social media data
  const socialMediaLinks = [
    { platform: 'Instagram', icon: FaInstagram, link: 'https://www.instagram.com/' },
    { platform: 'Twitter', icon: FaTwitter, link: 'https://twitter.com/Ntechzy' },
    { platform: 'Facebook', icon: FaFacebook, link: 'https://facebook.com/Ntechzy' },
    { platform: 'Facebook', icon: FaFacebook, link: 'https://facebook.com/Ntechzy' },
    // Add more social media platforms as needed
  ];

  // State to track which social media link to display on hover
  const [hoveredIndex, setHoveredIndex] = React.useState(null);

  return (
    <div className='text-white flex flex-wrap gap-5 p-4 justify-center lg:p-5 mx-auto max-w-7xl' data-aos="fade-up">
      {socialMediaLinks.map((social, index) => (
        <div key={index} className='relative w-full md:w-1/3 lg:w-1/4 xl:w-1/5 flex items-center'>
          <div
            className='relative w-full h-64 md:h-48 lg:h-56 xl:h-64 overflow-hidden rounded-lg'
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <img
              src="https://gaaga.wpengine.com/wp-content/uploads/2023/06/home-portfolio-1.jpg"
              alt="Social Media"
              className='w-full h-full object-cover rounded-lg transition-opacity duration-300'
            />
            {hoveredIndex === index && (
              <div className='absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 hover:bg-opacity-75 transition-opacity duration-300'>
                <social.icon className='text-4xl text-white mb-2 hover:opacity-100' />
                <span className='text-sm font-bold text-white hover:opacity-100'>@Ntechzy {social.platform}</span>
              </div>
            )}
            {hoveredIndex === index && (
              <a
                href={social.link}
                target='_blank'
                rel='noopener noreferrer'
                className='absolute inset-0 z-10 cursor-pointer'
              ></a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default SocialMediaPic;
