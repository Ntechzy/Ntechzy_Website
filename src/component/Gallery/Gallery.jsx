import React from 'react';

const Gallery = () => {
  return (
    <div className="overflow-hidden h-full">
      <div className="grid grid-cols-3 gap-4 text-white">
        {/* Gallery heading */}
        <div className="col-span-3 flex items-center justify-center text-white text-[30px] font-bold mb-4">
          Gallery
        </div>

        {/* Project Portfolio heading */}
        <div className="col-span-3 flex items-center justify-center text-white text-[35px] font-bold mb-4">
          Our Project Portfolio
        </div>

       

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
        {/* project wala*/}
        <div className="relative">
         
           <div>
           <h1 className='text-center font-black '>All Projects</h1>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, facilis tenetur reprehenderit praesentium omnis quas nisi, officia non mollitia obcaecati laborum, perferendis error corporis nostrum quae labore dicta qui debitis.</p>
           </div>
          <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 rounded-lg">
            <div className="text-white text-center">
              <h2 className="text-xl font-bold">Brand Logos</h2>
              <p className="text-sm mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-300">Read More</button>
            </div>
          </div>
        </div>

        {/* Fourth image */}
        <div className="relative">
          <img
            src="https://gaaga.wpengine.com/wp-content/uploads/2023/06/home-portfolio-listing-images-4.jpg"
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

        {/* Fifth image */}
        <div className="relative">
          <img
            src="https://gaaga.wpengine.com/wp-content/uploads/2023/06/home-portfolio-listing-images-5-1.jpg"
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
