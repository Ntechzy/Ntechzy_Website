import React from "react";
import CommonComponent from "./Common/CommonComponent";
import CommonFaq from "./Common/CommonFaq";
import Footer from "../HomeComponent/Footer";
import CommonScroll from "./Common/CommonScroll";
const data = [
  {
    question: "What Kind Of Services Do You Offer?",
    answer:
      "We offer a range of services including digital marketing, web development, and consulting.",
  },
  {
    question: "What Are The Benefits Of Using Our Services?",
    answer:
      "Our services help you increase your online presence, improve user engagement, and boost sales.",
  },
  {
    question: "How Can I Get Started?",
    answer:
      "Getting started is easy! Contact us through our website or give us a call to discuss your needs.",
  },
  {
    question: "What Support Do You Provide?",
    answer:
      "We provide comprehensive support tailored to your requirements, ensuring your success.",
  },
];
const data2 = [
  {
    heading: "Video Services",
    content:
    "Our Video Services at Ntechzy Pvt Ltd cover all aspects of video production, from ideation to filming, editing, and post-production. We create high-quality videos that convey your message effectively, whether for marketing, training, or corporate communication. Our team has expertise in producing a wide range of video types, including promotional videos, tutorials, interviews, and event coverage. By incorporating storytelling and visual appeal, we ensure your video content captivates and engages your audience.",
  },
];
const VideoServicesCmp = () => {
  return (
    <div>
      <CommonComponent data2={data2} />
      <CommonFaq
        data={data}
        title="Frequently Asked Questions"
        subtitle="Get Answers from Our Experts"
        imageUrl="https://gaaga.wpengine.com/wp-content/uploads/2023/06/home-portfolio-listing-images-4.jpg"
        rating={4.8}
      />
      <CommonScroll/>
      <Footer />
    </div>
  );
};

export default VideoServicesCmp;
