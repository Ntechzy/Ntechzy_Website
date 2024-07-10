import React from 'react';
import { FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa';

const SocialMediaPic = () => {
  // Define social media data
  const socialMediaLinks = [
    { platform: 'Instagram', icon: FaInstagram, link: 'www.google.com' },
    { platform: 'Twitter', icon: FaTwitter, link: 'https://twitter.com/Ntechzy' },
    { platform: 'Facebook', icon: FaFacebook, link: 'https://facebook.com/Ntechzy' },
    { platform: 'Facebook', icon: FaFacebook, link: 'https://facebook.com/Ntechzy' },
 
    // Add more social media platforms as needed
  ];

  // State to track which social media link to display on hover
  const [hoveredIndex, setHoveredIndex] = React.useState(null);

  return (
    <div className='text-white flex flex-wrap gap-5 p-4 lg:p-5 ml-[200px] mr-[200px] mt-[20px] items-center justify-between'>
      {socialMediaLinks.map((social, index) => (
        <div key={index} className='relative w-[300px] h-[300px] md:w-64 md:h-64 flex items-center '>
          <img
            src="https://gaaga.wpengine.com/wp-content/uploads/2023/06/home-portfolio-1.jpg"
            alt="Loading"
            className='w-full h-full object-cover rounded-lg justify-between'
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          />
          {hoveredIndex === index && (
            <div className='absolute inset-0 flex flex-col items-center justify-center opacity-50 hover:opacity-75  transition-opacity duration-300'>
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
      ))}
    </div>
  );
}

export default SocialMediaPic;
