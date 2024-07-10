import React, { useEffect, useState } from 'react';
import CountUp from 'react-countup';

const Marketing = () => {
  const [experience, setExperience] = useState(0);
  const [tools, setTools] = useState(0);
  const [clients, setClients] = useState(0);
  const [projects, setProjects] = useState(0);

  useEffect(() => {
    setExperience(10);
    setTools(12);
    setClients(52);
    setProjects(90);
  }, []);

  return (
    <div className="text-white py-8 bg-gradient-to-r  rounded-lg shadow-lg">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-2">It's Time To Take Your Digital Marketing To The Next Level</h1>
        <p className="text-xl">We Are Always Here To Help You Grow Your Business</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-center">
        <div className='flex flex-col items-center'>
          <h2 className="text-6xl font-extrabold">
            <CountUp end={experience} duration={2} />
          </h2>
          <p className="text-lg font-semibold mt-2">Years Experience</p>
        </div>
        <div className='flex flex-col items-center'>
          <h2 className="text-6xl font-extrabold">
            <CountUp end={tools} duration={2} />
          </h2>
          <p className="text-lg font-semibold mt-2">Advanced Tools</p>
        </div>
        <div className='flex flex-col items-center'>
          <h2 className="text-6xl font-extrabold">
            <CountUp end={clients} duration={2} />
          </h2>
          <p className="text-lg font-semibold mt-2">Clients Satisfied</p>
        </div>
        <div className='flex flex-col items-center'>
          <h2 className="text-6xl font-extrabold">
            <CountUp end={projects} duration={2} />
          </h2>
          <p className="text-lg font-semibold mt-2">Projects Completed</p>
        </div>
      </div>
    </div>
  );
};

export default Marketing;
