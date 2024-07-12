import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS for animations

const Gallery = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1000ms
  }, []);

  return (
    <div className="h-full">
      {/* Gallery heading */}
      <div className="text-white text-center text-5xl font-bold mb-8" data-aos="fade-up">
        Gallery
      </div>

      {/* Project Portfolio heading */}
      <div className="text-white text-center text-5xl font-bold mb-8" data-aos="fade-up">
        Our Project Portfolio
      </div>

      {/* Grid layout for images */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-white" data-aos="fade-up">
        {/* First image */}
        <div className="relative">
          <img
            src="https://gaaga.wpengine.com/wp-content/uploads/2023/06/home-portfolio-1.jpg"
            alt="UI & UX Designer"
            className="w-full h-full object-cover rounded-lg shadow-md transition duration-300 transform hover:scale-105"
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 rounded-lg">
            <div className="text-white text-center">
              <h2 className="text-xl font-bold">UI & UX Designer</h2>
              <p className="text-sm mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-300">Read More</button>
            </div>
          </div>
        </div>

        {/* Second image */}
        <div className="relative">
          <img
            src="https://gaaga.wpengine.com/wp-content/uploads/2023/06/home-portfolio-2.jpg"
            alt="Global Network"
            className="w-full h-full object-cover rounded-lg shadow-md transition duration-300 transform hover:scale-105"
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 rounded-lg">
            <div className="text-white text-center">
              <h2 className="text-xl font-bold">Global Network</h2>
              <p className="text-sm mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-300">Read More</button>
            </div>
          </div>
        </div>

        {/* Third image */}
        <div className="relative">
          <img
            src="https://gaaga.wpengine.com/wp-content/uploads/2023/06/home-portfolio-listing-images-6.jpg"
            alt="Brand Logos"
            className="w-full h-full object-cover rounded-lg shadow-md transition duration-300 transform hover:scale-105"
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 rounded-lg">
            <div className="text-white text-center">
              <h2 className="text-xl font-bold">Brand Logos</h2>
              <p className="text-sm mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-300">Read More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
