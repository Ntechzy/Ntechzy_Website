import React from "react";

const PoliticalSection9 = () => {
  return (
    <div className="md:flex flex md:flex-row flex-col w-[95%] m-auto text-white items-center justify-center p-5 shadow-black-500 md:p-6">
      <div className="">
        <div className="text-red-500 md:text-4xl text-xl font-bold text-center md:w-[70%]">
          Come and let's join our hands to build your image for a successful
          political career
        </div>
        <div className="text-red-500 md:text-4xl pt-4 text-2xl font-bold text-center md:w-[60%]">
          {" "}
          We are offering
        </div>
        <ul className="md:text-lg text-sm font-semibold list-decimal md:p-9 pt-3 md:space-y-3  w-[93%]">
          <li>
         
            Regular Videos for social media related to you and your vision for
            the development of your political area.
          </li>
          <li>
            Full-length High-quality documentaries related to your vision and
            development done by you in the area. in this, we will conduct
            various public interviews related to you and your image in the
            public, and your vision for the progress of the region.
          </li>
          <li>
            Regular motivational songs in regional language to broadcast your
            vision.
          </li>
          <li>daily social media creatives and handling of social media. </li>
          <li>design of hoardings and banner</li>
          <li>
            weekly articles on your website related to your vision and how you
            will develop your area so that more and more youth can come and join
            you and your campaign.
          </li>
        </ul>
      </div>
      <div className="w-[40%]">
        <img src="/assets/election2.png" alt="Loading..." />
      </div>
    </div>
  );
};

export default PoliticalSection9;
