import React from 'react';

const OurBranches = () => {
  return (
    <div className='text-white flex flex-col items-center gap-10 p-6'>
      <div className='font-bold text-3xl'>Our Affiliated Branches</div>
      <p className='font-semibold text-xl w-full max-w-screen-lg text-center'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio vitae inventore distinctio repudiandae beatae error. Inventore debitis dicta consequatur amet rerum, praesentium nisi? Vel, reiciendis.
      </p>
      <div className='flex flex-row gap-4 w-full max-w-screen-lg'>
        <div className= 'bg-gray-800 p-4 rounded-lg'>
          <h3 className='text-xl font-bold'>Mumbai</h3>
          <p>1234 Mumbai St, Mumbai, Maharashtra, 400001</p>
          <p>+91 22 1234 5678</p>
        </div>
        <div className='bg-gray-800 p-4 rounded-lg'>
          <h3 className='text-xl font-bold'>Delhi</h3>
          <p>5678 Delhi Rd, Delhi, Delhi, 110001</p>
          <p>+91 11 2345 6789</p>
        </div>
        <div className='bg-gray-800 p-4 rounded-lg'>
          <h3 className='text-xl font-bold'>Bengaluru</h3>
          <p>9101 Bengaluru Ave, Bengaluru, Karnataka, 560001</p>
          <p>+91 80 3456 7890</p>
        </div>
        <div className='bg-gray-800  rounded-lg p-11 flex flex-col items-center'>
          <h3 className='text-xl font-bold '>Chennai</h3>
          <p>1122 Chennai Blvd, Chennai, Tamil Nadu, 600001</p>
          <p>+91 44 4567 8901</p>
        </div>
      </div>
      <div className='w-full max-w-screen-lg'>
        <iframe
          width="100%"
          height="450"
          frameBorder="0"
          style={{ border: 0 }}
          src="https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=India"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default OurBranches;
