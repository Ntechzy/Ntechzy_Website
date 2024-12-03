import React from "react";
const PoliticalSection6 = () => {
  return (
    <div className=" m-auto w-[95%] text-white " data-aos="fade-up">
      <div className="py-10 px-5  justify-center items-center md:flex md:flex-row flex flex-col gap-7">
        {/* Header Section */}

        {/* Video Section */}
        <div className="flex justify-center items-center mb-8 relative">
          <img
            src="/assets/officebuilding.jpg"
            alt="Video Thumbnail"
            className="w-full max-w-lg rounded-lg shadow-lg"
          />

          <div className="absolute inset-0 flex items-center justify-center">
            <button
              className="bg-slate-400 text-white rounded-full p-4 shadow-lg hover:bg-gray-200"
              onClick={() => console.log("Play Video")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 16 16"
                className="w-8 h-8"
              >
                <path d="M10.804 8 6.5 5.633v4.734L10.804 8zM5 3.633 11.5 8 5 12.367V3.633z" />
              </svg>
            </button>
          </div>
        </div>

        <div>
          <h1 className="md:text-3xl text-xl font-bold text-start mt-16  mb-6">
            We will drive your voters through social media and ground
            campaigning.
          </h1>
          {/* Description Section */}
          <p className="text-start text-lg max-w-2xl mx-auto">
            Assessing the competitiveness in the atmosphere, we aim to do
            justice to the role we play in political campaigning by maintaining
            honesty and stellar craftsmanship.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PoliticalSection6;
