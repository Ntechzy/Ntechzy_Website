// src/components/CompanyLife.js
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

// Mock Data (you can replace this with an actual import if you store the JSON in a file)
const companyLifeData = {
  header: {
    title: "Life at Ntechzy Pvt. Ltd.",
    description: "At Ntechzy Pvt. Ltd., we believe in fostering a culture of collaboration, creativity, and inclusivity. Whether you're working in the office, remotely, or a mix of both, we make sure you feel valued and empowered."
  },
  sections: [
    {
      title: "Our Culture",
      description: "We foster an environment where open communication, mutual respect, and innovation thrive. Our teams are built on trust, and we empower every individual to take ownership of their work.",
      image: "/assets/culture.jpg"
    },
    {
      title: "Diversity & Inclusion",
      description: "Diversity is at the heart of everything we do. We celebrate different perspectives and strive to create a workplace where all voices are heard and everyone can succeed.",
      image: "/assets/culture.jpg"
    },
    {
      title: "Flexible Work",
      description: "We believe in giving our employees the freedom to work where and when they are most productive. Whether it's from home or the office, we support your work-life balance.",
      image: "/assets/culture.jpg"
    }
  ]
};

const CompanyLife = () => {
  // Initialize AOS
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="bg-blue text-white ">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-white">{companyLifeData.header.title}</h2>
        <p className="mt-4 text-lg max-w-2xl mx-auto text-gray-300">
          {companyLifeData.header.description}
        </p>

        {/* Map over sections for dynamic rendering */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {companyLifeData.sections.map((section, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={`${index * 200}`} // Stagger the animation for each card
              className="bg-white shadow-lg rounded-lg p-8 text-left hover:shadow-xl transition-shadow duration-300 ease-in-out"
            >
              <h3 className="text-2xl font-semibold text-blue-600 hover:text-blue-800 transition-colors duration-300">
                {section.title}
              </h3>
              <p className="mt-4 text-gray-600">{section.description}</p>
              <div className="mt-6 relative group">
                <img
                  src={section.image}
                  alt={section.title}
                  className="w-full h-64 object-cover rounded-lg group-hover:scale-110 transition-transform duration-300 ease-in-out"
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-25 transition-opacity duration-300 rounded-lg" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyLife;
