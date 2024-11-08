import React from 'react';
import { FaLightbulb, FaCogs, FaPuzzlePiece, FaProjectDiagram } from 'react-icons/fa';
const data=[
    {
      "title": "Website & Mobile Application Development",
      "description": "Build responsive, user-friendly websites and mobile apps tailored to client needs using industry-demanded coding languages."
    },
    {
      "title": "Custom CRM, HMS, LMS, and Portal Development",
      "description": "Develop and maintain custom systems like Customer Relationship Management (CRM), Hospital Management Systems (HMS), Learning Management Systems (LMS), and other specialized portals for various industries."
    },
    {
      "title": "Digital Marketing",
      "description": "Provide full-scale digital marketing services, including SEO, social media management, content creation, PPC campaigns, and data analytics to boost online visibility and engagement."
    },
    {
      "title": "Branding & Promotion",
      "description": "Design cohesive brand identities, run promotional campaigns, and develop strategies to increase brand awareness and market presence."
    },
    {
      "title": "Marketing Consulting",
      "description": "Offer strategic marketing consultation to align businesses with market trends, enhance customer engagement, and optimize marketing efforts for long-term success."
    },
    {
      "title": "Health Counseling Services",
      "description": "Provide professional health counseling, particularly for hospitals and healthcare institutions, to improve patient engagement and care outcomes."
    },
    {
      "title": "Video Production & Content Creation",
      "description": "Create high-quality video content, including promotional videos, informational clips, and other multimedia content to enhance client communications and outreach."
    },
    {
      "title": "Customer Lifecycle Management",
      "description": "Manage the entire customer journey from acquisition to retention using data-driven insights, ensuring high customer satisfaction and loyalty."
    },
    {
      "title": "On-Site Support & Coordination",
      "description": "Offer on-site teams at client locations for seamless coordination, project management, and execution of digital and marketing strategies."
    },
    {
      "title": "Data-Driven Marketing & Analytics",
      "description": "Utilize advanced data analytics to track performance, measure ROI, and adjust strategies for continuous improvement and growth."
    }
  ]



const Strategy = () => {
  return (
    <div className='text-white py-12 px-4 lg:px-20'>
      <div className='text-center mb-8' data-aos="fade-up">
        <h1 className='text-2xl lg:text-3xl mb-4'>What We Do with Our 150+ Professional Team</h1>
        <h1 className='font-bold text-2xl lg:text-3xl'>Our Best Strategy</h1>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-4 gap-8' data-aos="fade-up">
      
        {data.map((item, index) => (
        <div key={index} className='group bg-gray-800 p-6 rounded-lg text-center transform transition duration-500 hover:bg-red-600 hover:-translate-y-2'>
          <FaLightbulb className='text-3xl mx-auto mb-4 group-hover:text-white' />
          <div className='font-bold text-xl mb-2'>{item.title}</div>
          <p className='text-white'>{item.description}</p>
        </div>
            ))}
       
      </div>
     
    </div>
  );
}

export default Strategy;
