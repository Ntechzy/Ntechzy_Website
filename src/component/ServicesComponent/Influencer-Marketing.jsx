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
    heading: "Influencer Marketing",
    content:
      " Influencer Marketing with Ntechzy Pvt Ltd harnesses the power of trusted voices in your industry to promote your brand. By collaborating with influencers who align with your values, we help your college, hospital, or corporate entity connect with potential clients in a relatable, authentic manner. We identify key influencers in your niche, create impactful campaigns, and manage the process from outreach to post-campaign analysis. Our influencer marketing strategy focuses on generating organic engagement, enhancing credibility, and reaching new audiences, whether through social media platforms, blog endorsements, or video content partnerships.s",
  },
];
const InfluencerMarketingCmp = () => {
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

export default InfluencerMarketingCmp;
