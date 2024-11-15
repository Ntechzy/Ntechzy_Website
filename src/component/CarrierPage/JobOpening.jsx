// src/components/JobListing.js
import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

// Mock Job Data
const jobs = [
  {
    title: 'Frontend Developer',
    location: 'Greater Noida',
    description: 'Build cutting-edge UIs with React. Collaborate with designers and backend engineers to create seamless user experiences.',
    salary: '₹3,00,000 - ₹4,00,000 per year',
    type: 'Full-time',
    requirements: [
      'Proficiency in React.js and JavaScript.',
      'Experience with HTML5, CSS3, and modern front-end build tools.',
      'Strong understanding of responsive design principles.',
    ],
    benefits: [
      'Health insurance for employees and their families.',
      'Annual performance bonuses.',
      'Flexible working hours and remote work options.',
    ],
  },
  {
    title: 'Backend Engineer',
    location: 'Greater Noida',
    description: 'Develop robust APIs and services, integrate third-party services, and ensure the security and scalability of applications.',
    salary: '₹4,00,000 - ₹5,00,000 per year',
    type: 'Full-time',
    requirements: [
      'Experience with Node.js, Express, and RESTful APIs.',
      'Familiarity with database management (SQL/NoSQL).',
      'Experience with cloud platforms like AWS or Azure.',
    ],
    benefits: [
      'Health insurance for employees and their families.',
      'Paid time off (PTO) and sick leave.',
      'Regular team-building activities and learning opportunities.',
    ],
  },
  {
    title: 'Product Designer',
    location: 'Greater Noida',
    description: 'Design user-friendly products and interfaces. Work closely with the development team to create prototypes and improve product usability.',
    salary: '₹4,00,000 - ₹6,00,000 per year',
    type: 'Full-time',
    requirements: [
      'Experience with UI/UX design tools (Sketch, Figma, Adobe XD).',
      'Strong portfolio demonstrating product design experience.',
      'Knowledge of design systems and accessibility standards.',
    ],
    benefits: [
      'Health insurance and wellness programs.',
      'Paid time off and flexible work schedule.',
      'Professional development opportunities, including paid courses and conferences.',
    ],
  },
];

const JobOpening = () => {
  // Modal State for Job Detail View
  const [selectedJob, setSelectedJob] = useState(null);

  // Initialize AOS
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  // Handle job click for modal
  const handleJobClick = (job) => {
    setSelectedJob(job);
  };

  // Close modal
  const handleCloseModal = () => {
    setSelectedJob(null);
  };

  return (
    <section className="py-16 bg-gray-800">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-white">Current Job Openings</h2>

        {/* Job Filters (Optional) */}
        {/* <div className="mt-6">
          <button className="text-white bg-blue-600 py-2 px-4 rounded hover:bg-blue-700 mr-4">Frontend</button>
          <button className="text-white bg-blue-600 py-2 px-4 rounded hover:bg-blue-700 mr-4">Backend</button>
          <button className="text-white bg-blue-600 py-2 px-4 rounded hover:bg-blue-700 mr-4">Design</button>
        </div> */}

        {/* Job Listings */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {jobs.map((job, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={`${index * 200}`}
              className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300 ease-in-out"
            >
              <h3 className="text-xl font-semibold text-blue-600">{job.title}</h3>
              <p className="text-gray-600 mt-2">{job.location}</p>
              <p className="mt-4 text-gray-700">{job.description}</p>
              <p className="mt-2 text-gray-500">Salary: {job.salary}</p>
              <p className="mt-2 text-gray-500">Type: {job.type}</p>
              <button
                onClick={() => handleJobClick(job)}
                className="mt-6 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors duration-300"
              >
                View Details
              </button>
            </div>
          ))}
        </div>

        {/* Job Detail Modal */}
        {selectedJob && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-start pt-24 z-50">
            <div className="bg-white p-8 rounded-lg w-full sm:w-96 md:w-[700px] lg:w-[900px] xl:w-[1100px] relative">
              {/* Close Button */}
              <button
                onClick={handleCloseModal}
                className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 text-2xl font-bold"
              >
                &times;
              </button>

              <h3 className="text-2xl font-semibold text-blue-600">{selectedJob.title}</h3>
              <p className="text-gray-600 mt-2">{selectedJob.location}</p>
              <p className="mt-4 text-gray-700">{selectedJob.description}</p>
              <p className="mt-2 text-gray-500">Salary: {selectedJob.salary}</p>
              <p className="mt-2 text-gray-500">Job Type: {selectedJob.type}</p>

              <h4 className="mt-6 text-lg font-semibold text-blue-600">Key Responsibilities:</h4>
              <ul className="mt-2 list-disc pl-5 text-gray-700">
                <li>Collaborate with product and engineering teams to design and build solutions.</li>
                <li>Ensure high-quality code and compliance with best practices.</li>
                <li>Write clean, maintainable, and efficient code.</li>
              </ul>

              <h4 className="mt-6 text-lg font-semibold text-blue-600">Requirements:</h4>
              <ul className="mt-2 list-disc pl-5 text-gray-700">
                {selectedJob.requirements.map((req, idx) => (
                  <li key={idx}>{req}</li>
                ))}
              </ul>

              <h4 className="mt-6 text-lg font-semibold text-blue-600">Benefits:</h4>
              <ul className="mt-2 list-disc pl-5 text-gray-700">
                {selectedJob.benefits.map((benefit, idx) => (
                  <li key={idx}>{benefit}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default JobOpening;
