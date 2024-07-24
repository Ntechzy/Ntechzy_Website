import React from "react";

const OurBranches = () => {
  return (
    <div className="text-white flex flex-col items-center gap-10 p-6">
      <div className="font-bold text-3xl">Our Affiliated Branches</div>
      <p className="font-semibold text-xl w-full max-w-screen-lg text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio vitae
        inventore distinctio repudiandae beatae error. Inventore debitis dicta
        consequatur amet rerum, praesentium nisi? Vel, reiciendis.
      </p>
      <div className="flex flex-row gap-5">
        <div className="">
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3571.2426353875685!2d80.29012337536498!3d26.480131478546852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c39cd2394ab3d%3A0x86e54e5902e3adcc!2sCareerkick%20Services%20Kanpur%20%7C%20Best%20IIT-JEE%20%26%20NEET%20Counselling%20Platform!5e0!3m2!1sen!2sin!4v1721710938694!5m2!1sen!2sin"
              width="600"
              height="450"
              allowfullscreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="Font-bold p-2 flex gap-4">
            <address>Kanpur Office</address>
            <address>Phone no- 5678998765</address>
            <address>Email Id-xyz@gmail</address>
          </div>
        </div>
        <div>
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1795966.6459067168!2d75.06312815624997!3d28.457031399999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cc10ed1f824c5%3A0x11e7ad3d3132770e!2sCAREERKICK%20SERVICES%20GR.%20NOIDA!5e0!3m2!1sen!2sin!4v1721711351559!5m2!1sen!2sin"
              width="600"
              height="450"
              allowfullscreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="Font-bold  p-2">
            <address>Noida Office</address>
            <address>Phone no- 5678998765</address>
            <address>Email Id-xyz@gmail</address>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurBranches;
