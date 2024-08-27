import React, { useState } from 'react';

const Services = () => {
  const [hoverIndex, setHoverIndex] = useState(null);

  const servicesData = [
    {
      title: 'College Branding and Promotion Offline & Online',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, sunt!',
      imageUrl: 'https://gaaga.wpengine.com/wp-content/uploads/2023/06/home-portfolio-listing-images-5-1.jpg',
      link: '#service1',
    },
    {
      title: 'Influencer Marketing',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, sunt!',
      imageUrl: 'https://gaaga.wpengine.com/wp-content/uploads/2023/06/home-portfolio-listing-images-5-1.jpg',
      link: '#service2',
    },
    {
      title: 'Digital Campaigning Support',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, sunt!',
      imageUrl: 'https://gaaga.wpengine.com/wp-content/uploads/2023/06/home-portfolio-listing-images-5-1.jpg',
      link: '#service3',
    },
    {
      title: 'Professional Admission Cell Assistance',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, sunt!',
      imageUrl: 'https://gaaga.wpengine.com/wp-content/uploads/2023/06/home-portfolio-listing-images-5-1.jpg',
      link: '#service4',
    },
   
    {
      title: 'Search Engine Optimization (SEO)',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, sunt!',
      imageUrl: 'https://gaaga.wpengine.com/wp-content/uploads/2023/06/home-portfolio-listing-images-5-1.jpg',
      link: '#service6',
    },
    {
      title: 'Social Media Management',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, sunt!',
      imageUrl: 'https://gaaga.wpengine.com/wp-content/uploads/2023/06/home-portfolio-listing-images-5-1.jpg',
      link: '#service7',
    },
    {
      title: 'Search Engine Marketing (SEM)',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, sunt!',
      imageUrl: 'https://gaaga.wpengine.com/wp-content/uploads/2023/06/home-portfolio-listing-images-5-1.jpg',
      link: '#service8',
    },
    {
      title: 'Website SEO',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, sunt!',
      imageUrl: 'https://gaaga.wpengine.com/wp-content/uploads/2023/06/home-portfolio-listing-images-5-1.jpg',
      link: '#service5',
    },
    {
      title: 'Website Design and Development',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, sunt!',
      imageUrl: 'https://gaaga.wpengine.com/wp-content/uploads/2023/06/home-portfolio-listing-images-5-1.jpg',
      link: '#service5',
    },
    {
      title: 'Mobile App Development',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, sunt!',
      imageUrl: 'https://gaaga.wpengine.com/wp-content/uploads/2023/06/home-portfolio-listing-images-5-1.jpg',
      link: '#service5',
    },
    {
      title: 'Video Services',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, sunt!',
      imageUrl: 'https://gaaga.wpengine.com/wp-content/uploads/2023/06/home-portfolio-listing-images-5-1.jpg',
      link: '#service5',
    },
    {
      title: 'Corporate shoot',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, sunt!',
      imageUrl: 'https://gaaga.wpengine.com/wp-content/uploads/2023/06/home-portfolio-listing-images-5-1.jpg',
      link: '#service5',
    },
    {
      title: 'Campus Tour',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, sunt!',
      imageUrl: 'https://gaaga.wpengine.com/wp-content/uploads/2023/06/home-portfolio-listing-images-5-1.jpg',
      link: '#service5',
    },
    {
      title: 'Motion Graphic Animated Video',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, sunt!',
      imageUrl: 'https://gaaga.wpengine.com/wp-content/uploads/2023/06/home-portfolio-listing-images-5-1.jpg',
      link: '#service5',
    },
    {
      title: 'Documentary',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, sunt!',
      imageUrl: 'https://gaaga.wpengine.com/wp-content/uploads/2023/06/home-portfolio-listing-images-5-1.jpg',
      link: '#service5',
    },
  ];

  return (
    <div className="py-8 px-4 text-white" >
      <h1 className="text-4xl font-bold text-center mb-8" data-aos="slide-left">Services</h1>
      <div className="text-center mb-8 font-bold" data-aos="slide-right" >What We Have To Offer</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {servicesData.map((service, index) => (
          <div
            key={index} 
            className="relative p-4 border rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300" data-aos="flip-right"
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(null)}
          >
            <h2 className="text-2xl font-bold mb-2">{service.title}</h2>
            <p className="mb-4">{service.description}</p>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded"
              onClick={() => window.location.href = service.link}
            >
              Know More
            </button>
            <div className={`transition-all duration-300 ${hoverIndex === index ? 'max-h-32' : 'max-h-0'} overflow-hidden mt-4`}>
              {/* <img
                // src={service.imageUrl}
                alt={service.title}
                className="w-full object-cover"
              /> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
