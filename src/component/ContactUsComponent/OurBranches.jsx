import React from "react";

const OurBranches = () => {
  return (
    <div className="text-white flex flex-col items-center gap-10 p-6" >
      <div className="font-bold text-3xl text-center" data-aos="flip-right">Our Affiliated Branches</div>
      <p className="font-semibold text-xl w-full max-w-screen-lg text-center" data-aos="flip-right">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio vitae
        inventore distinctio repudiandae beatae error. Inventore debitis dicta
        consequatur amet rerum, praesentium nisi? Vel, reiciendis.
      </p>
      <div className="flex flex-col lg:flex-row gap-5">
        <div className="flex flex-col items-center lg:items-start">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3571.456751594629!2d80.3010295!3d26.4732347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c390bc50eb861%3A0xcb92eaeb9f752362!2sNTECHZY%20PVT.%20LTD!5e0!3m2!1sen!2sin!4v1724667643390!5m2!1sen!2sin"
            width="100%"
            height="300"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="mb-4 lg:mb-0" data-aos="flip-right"
          ></iframe>
          <div className="font-bold p-2 flex flex-row gap-2 lg:gap-4 text-center lg:text-left">
            <address>Kanpur Office</address>
            <address>Phone no:+91 8189098663</address>
            <address>Email Id: info@ntechzy.in</address>
          </div>
        </div>
        <div className="flex flex-col items-center lg:items-start">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1795966.6459067168!2d75.06312815624997!3d28.457031399999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cc10ed1f824c5%3A0x11e7ad3d3132770e!2sCAREERKICK%20SERVICES%20GR.%20NOIDA!5e0!3m2!1sen!2sin!4v1721711351559!5m2!1sen!2sin"
            width="100%"
            height="300"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="mb-4 lg:mb-0" data-aos="flip-left"
          ></iframe>
          <div className="font-bold p-2 flex flex-row gap-2 lg:gap-4 text-center lg:text-left">
            <address>Noida Office</address>
            <address>Phone no: 7068595192</address>
            <address>Email Id: ntechzy@gmail.com</address>
            {/* <address className="w-11">address: Gf - 31 , sng plaza ansal golf near by pari chowk greater Noida</address> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurBranches;
