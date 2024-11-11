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
    heading: "Website Design and Development",
    content:
      "Our Website Design and Development service is aimed at creating visually appealing, user-friendly, and responsive websites that reflect your brand’s identity. Ntechzy Pvt Ltd specializes in building websites that not only look great but also offer seamless navigation and optimized functionality. We work with you from concept to launch, incorporating design elements and features that resonate with your audience. Our team also ensures your site is optimized for speed, accessibility, and mobile devices. A professionally crafted website helps establish trust, improve engagement, and create a positive first impression for visitors.",
  },
];
const WebsiteDesign = () => {
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

export default WebsiteDesign;
