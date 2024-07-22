import React from "react";
import { Ri24HoursLine } from "react-icons/ri";

const ContactBanner = () => {
  return (
    <div className="text-white w-full min-h-screen flex flex-col justify-center items-center p-6 gap-11 bg-center-bottom bg-no-repeat bg-cover">
      <div className="font-bold text-[40px] text-center mb-11">
        Contact Us
      </div>

      <div className="flex flex-col lg:flex-row gap-7 justify-center items-center w-full mt-10 lg:mt-0">
        <div className="flex flex-row justify-center items-center gap-7">
          <div className="text-[100px]">
            <Ri24HoursLine />
          </div>
          <div className="text-center lg:text-left p-11 text-[40px] font-bold hover:text-red-500 transition-colors duration-300">
            We will respond to you within an hour
          </div>
        </div>
        <p className="w-full font-semibold lg:w-[400px] text-center lg:text-left mt-7 lg:mt-0">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio voluptas vel quis. Iste neque asperiores odit ipsam aliquid, nulla quae blanditiis architecto autem impedit?
        </p>
      </div>
    </div>
  );
};

export default ContactBanner;
