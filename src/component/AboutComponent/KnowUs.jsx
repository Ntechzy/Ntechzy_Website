import React from 'react';
import { FaChartLine, FaLaptopCode, FaBullhorn, FaHandshake } from 'react-icons/fa';
import CountUp from 'react-countup';

const KnowUs = () => {
  return (
    <div className='text-white py-12 px-4 lg:px-20' data-aos="fade-up">
      <div className='text-center mb-8'>
        <h1 className='text-2xl lg:text-3xl mb-4'>Know Us</h1>
        <h1 className='font-bold text-2xl lg:text-3xl'>Our Working Style at Ntechzy</h1>
      </div>
      <div className='md:p-4 m-3 font-semibold'>
      At Ntechzy, we have a well-structured and organized approach to ensure each department functions efficiently while collaborating seamlessly to deliver comprehensive services. With three offices located in Uttar Pradesh—two in Kanpur (Kakadev and Pandu Nagar) and one in Greater Noida—each office is designed to meet the specific needs of our diverse client base. Here's how we differentiate our operations:
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
        {/* Service 1 */}
        <div className='bg-gray-800 p-6 rounded-lg text-center'>
          <FaChartLine className='text-4xl mb-4 mx-auto' />
          <div className='text-5xl font-bold mb-2'>
            <CountUp end={1} duration={2} />
          </div>
          <h1 className='font-bold text-xl mb-2'>Counseling Division</h1>
          <p>Our Counselors play a pivotal role in providing guidance and consultation to students, patients, and professionals. Located across our offices, the team focuses on one-on-one and group sessions to deliver career, health, and education counseling. They work closely with institutions to help boost admissions and provide tailored advice to clients. The counseling division operates with a dedicated space to ensure a professional and private environment for these sessions.
          </p>
        </div>
        
        {/* Service 2 */}
        <div className='bg-gray-800 p-6 rounded-lg text-center'>
          <FaLaptopCode className='text-4xl mb-4 mx-auto' />
          <div className='text-5xl font-bold mb-2'>
            <CountUp end={2} duration={2} />
          </div>
          <h1 className='font-bold text-xl mb-2'>Video Production Team
          </h1>
          <p>In our Pandu Nagar office, Kanpur, we have recently launched a fully-equipped Podcast Studio with three unique setups, enabling us to produce high-quality video content. Our video production team handles everything from shooting educational videos, client promos, and digital ads to post-production editing and content creation. This team collaborates closely with both the counseling and digital marketing teams to create impactful multimedia content that enhances our clients’ visibility and engagement.</p>
        </div>
        
        {/* Service 3 */}
        <div className='bg-gray-800 p-6 rounded-lg text-center'>
          <FaBullhorn className='text-4xl mb-4 mx-auto' />
          <div className='text-5xl font-bold mb-2'>
            <CountUp end={3} duration={2} />
          </div>
          <h1 className='font-bold text-xl mb-2'>IT Professionals & Digital Marketing Team</h1>
          <p>Our IT Professionals and Digital Marketing Team are based in both the Kanpur and Greater Noida offices. This team is responsible for developing cutting-edge technology solutions such as websites, mobile applications, CRM, HMS, LMS, and custom portals. They also execute and manage digital marketing campaigns, including SEO, PPC, social media management, and content strategy. By combining tech expertise with marketing insights, this division ensures that our clients achieve maximum online visibility, engagement, and ROI.</p>
        </div>
        
      </div>
        <div className='md:p-4 m-5 font-semibold'>Each department operates independently yet in close collaboration with other teams to ensure that our clients receive a holistic and effective solution. This division of work allows us to maintain focus, maximize efficiency, and provide exceptional service across industries like education, healthcare, entertainment, and politics.</div>
    </div>
  );
}

export default KnowUs;

