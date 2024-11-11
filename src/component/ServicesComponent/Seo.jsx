import React from "react";
import CommonComponent from "./Common/CommonComponent";
import CommonFaq from "./Common/CommonFaq";
import Footer from "../HomeComponent/Footer";
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
    heading: "Search Engine Optimization (SEO)",
    content:
      "Search Engine Optimization (SEO) is fundamental to increasing your online visibility, and Ntechzy Pvt Ltd provides comprehensive SEO services to help your website rank higher on search engines. We perform thorough keyword research, optimize on-page elements, build quality backlinks, and implement technical SEO best practices to improve your site’s ranking. With a well-crafted SEO strategy, we ensure that your website attracts quality traffic, enhances user experience, and ultimately contributes to your business’s growth goals.",
  },
];
const Seo = () => {
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
      <Footer />
    </div>
  );
};

export default Seo;
