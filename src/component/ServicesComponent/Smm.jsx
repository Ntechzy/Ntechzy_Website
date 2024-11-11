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
    heading: "Social Media Management",
    content:
      "Our Social Media Management service helps you establish a strong social media presence by creating, scheduling, and monitoring engaging content across platforms. Ntechzy Pvt Ltd's team of social media experts crafts posts that reflect your brand’s personality, respond to audience inquiries, and manage community interactions. We also track performance metrics, adjust strategies based on real-time data, and work to increase your followers and engagement rates. Whether you need regular posts, stories, or advertisements, our goal is to build meaningful connections with your audience and drive brand loyalty.",
  },
];
const Smm = () => {
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

export default Smm;