import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS for animations
import { Link } from "react-router-dom";
// JSON Data
const galleryData = {
  gallery: {
    heading: "Gallery",
    portfolioHeading: "Our Project Portfolio",
    images: [
      {
        src: "assets/lmsphoto.jpg",
        alt: "Lead Management System",
        title: "Lead Management System",
        buttonText: "Read More",
        animation: "fade-up-right",
        link: "", // You can provide the relevant link here if needed
      },
      {
        src: "assets/naiminathphoto.jpg",
        alt: "Naiminath Ayurveda College Agra",
        title: "Naiminath Ayurveda College Agra",
        buttonText: "Read More",
        animation: "fade-up",
        link: "https://naiminathayurveda.org/",
      },
      {
        src: "/assets/sakuntalaphoto.jpg",
        alt: "SAS Ayurveda College",
        title: "Sas Ayurveda College",
        buttonText: "Read More",
        animation: "fade-up-left",
        link: "https://sasayurveda.com/",
      },
      {
        src: "/assets/sasphoto.jpg",
        alt: "Dr. Shakuntala Ayurvedic Medical college",
        title: "Dr. Shakuntala Ayurvedic Medical college",
        buttonText: "Read More",
        animation: "fade-up-right",
        link: "https://drshakuntalaayush.in/",
      },
      {
        src: "assets/dentalphoto.jpg",
        alt: "Brand Logos",

        title: "Dental College Azamgarh",
        buttonText: "Read More",
        animation: "fade-up-left",
        link: "https://dentalcollegeazamgarh.aicceds.org/",
      },
    ],
  },
};

const Gallery = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1000ms
  }, []);

  return (
    <div className="overflow-hidden h-full">
      {/* Gallery heading */}
      <div
        className="text-white text-center text-5xl font-bold mb-8"
        data-aos="flip-right"
      >
        {galleryData.gallery.heading}
      </div>

      {/* Project Portfolio heading */}
      <div
        className="text-white text-center text-5xl font-bold mb-8"
        data-aos="flip-left"
      >
        {galleryData.gallery.portfolioHeading}
      </div>

      {/* Grid layout for images */}
      <div className="grid grid-cols-3 gap-4 text-white" data-aos="fade-up">
        {galleryData.gallery.images.map((image, index) => (
          <div key={index} className="relative">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover rounded-lg shadow-md transition duration-300 transform hover:scale-105"
              data-aos={image.animation}
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 rounded-lg">
              <div className="text-white text-center">
                <h2 className="text-xl font-bold">{image.title}</h2>
                <p className="text-sm mt-2">{image.description}</p>
                <Link
                  to={image.link}
                  target="_blank"
                  className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-300"
                >
                  {image.buttonText}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
