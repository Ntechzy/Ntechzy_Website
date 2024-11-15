// src/components/Benefits.js
import React from 'react';

const CompanyBenefits = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-blue-600">Employee Benefits</h2>
        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
          At Ntechzy, we believe in taking care of our employees. Our benefits package is designed to support your personal, professional, and financial well-being. From health coverage to learning opportunities, we aim to provide a fulfilling work-life balance.
        </p>
        
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Health & Wellness */}
          <div className="bg-white shadow-lg rounded-lg p-8 transition-transform transform hover:scale-105 hover:shadow-2xl">
            <h3 className="text-xl font-semibold text-blue-600">Health & Wellness</h3>
            <p className="mt-4 text-gray-600">
              We provide comprehensive health insurance, including medical, dental, and vision coverage. Our health program also includes mental health support, therapy sessions, and wellness programs to ensure our employees feel their best.
            </p>
            <ul className="mt-4 text-gray-600 list-disc pl-5">
              <li>Access to telemedicine and virtual health consultations</li>
              <li>Annual wellness checkups</li>
              <li>Employee assistance programs (EAP)</li>
            </ul>
          </div>

          {/* Paid Time Off */}
          <div className="bg-white shadow-lg rounded-lg p-8 transition-transform transform hover:scale-105 hover:shadow-2xl">
            <h3 className="text-xl font-semibold text-blue-600">Paid Time Off</h3>
            <p className="mt-4 text-gray-600">
              Enjoy a generous amount of paid time off (PTO), including vacation days, sick leave, and public holidays. We encourage our team to take the time they need to recharge and maintain a healthy work-life balance.
            </p>
            <ul className="mt-4 text-gray-600 list-disc pl-5">
              <li>15+ days of vacation per year</li>
              <li>Paid sick leave and mental health days</li>
              <li>Company-wide holiday breaks</li>
            </ul>
          </div>

          {/* Learning & Growth */}
          <div className="bg-white shadow-lg rounded-lg p-8 transition-transform transform hover:scale-105 hover:shadow-2xl">
            <h3 className="text-xl font-semibold text-blue-600">Learning & Growth</h3>
            <p className="mt-4 text-gray-600">
              We value continuous learning and support our employees' professional development. Whether you are pursuing a degree, certifications, or personal projects, we provide stipends and resources to help you grow.
            </p>
            <ul className="mt-4 text-gray-600 list-disc pl-5">
              <li>Annual stipends for courses, conferences, and certifications</li>
              <li>Mentorship programs and peer-to-peer learning</li>
              <li>Subscription to learning platforms (e.g., LinkedIn Learning, Udemy)</li>
            </ul>
          </div>

          {/* Retirement Plan */}
          <div className="bg-white shadow-lg rounded-lg p-8 transition-transform transform hover:scale-105 hover:shadow-2xl">
            <h3 className="text-xl font-semibold text-blue-600">Retirement Plan</h3>
            <p className="mt-4 text-gray-600">
              We offer a robust retirement plan with company matching to help secure your financial future. Start planning for your retirement today with our 401(k) options and investment resources.
            </p>
            <ul className="mt-4 text-gray-600 list-disc pl-5">
              <li>401(k) with company matching</li>
              <li>Financial planning resources and workshops</li>
              <li>Access to investment and savings tools</li>
            </ul>
          </div>

          {/* Flexible Work */}
          <div className="bg-white shadow-lg rounded-lg p-8 transition-transform transform hover:scale-105 hover:shadow-2xl">
            <h3 className="text-xl font-semibold text-blue-600">Flexible Work</h3>
            <p className="mt-4 text-gray-600">
              We believe in flexibility. Whether you prefer working from home or the office, we support your work style. With flexible hours and remote options, you can structure your day in a way that works best for you.
            </p>
            <ul className="mt-4 text-gray-600 list-disc pl-5">
              <li>Flexible working hours</li>
              <li>Remote work options</li>
              <li>Work-from-home stipends</li>
            </ul>
          </div>

          {/* Parental Leave */}
          <div className="bg-white shadow-lg rounded-lg p-8 transition-transform transform hover:scale-105 hover:shadow-2xl">
            <h3 className="text-xl font-semibold text-blue-600">Parental Leave</h3>
            <p className="mt-4 text-gray-600">
              We are committed to supporting new parents with paid parental leave. Whether you are welcoming a new child into your family or adopting, we offer generous leave policies to help you adjust to this new chapter.
            </p>
            <ul className="mt-4 text-gray-600 list-disc pl-5">
              <li>12+ weeks of paid parental leave</li>
              <li>Flexible return-to-work options</li>
              <li>Childcare support and resources</li>
            </ul>
          </div>

          {/* Employee Recognition */}
          <div className="bg-white shadow-lg rounded-lg p-8 transition-transform transform hover:scale-105 hover:shadow-2xl">
            <h3 className="text-xl font-semibold text-blue-600">Employee Recognition</h3>
            <p className="mt-4 text-gray-600">
              We believe in recognizing and rewarding the hard work of our employees. Through various recognition programs, we celebrate your achievements and milestones in your career at Ntechzy.
            </p>
            <ul className="mt-4 text-gray-600 list-disc pl-5">
              <li>Quarterly and annual awards</li>
              <li>Spot bonuses for exceptional performance</li>
              <li>Employee of the Month recognition</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyBenefits;
