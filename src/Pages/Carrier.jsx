import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CarrierHeader from '../component/CarrierPage/CarrierHeader'
import JobOpening from '../component/CarrierPage/JobOpening'
import CompanyLife from '../component/CarrierPage/CompanyLife'
import CompanyBenefits from '../component/CarrierPage/CompanyBenefit'

const Carrier = () => {
  return (
    <div>
      <CarrierHeader />
      <div className="pt-20">
        <Routes>
          <Route path="/" element={<JobOpening />} />
          <Route path="/jobs" element={<JobOpening />} />
          <Route path="/lifeAtNtechzy" element={<CompanyLife />} />
          <Route path="/benefits" element={<CompanyBenefits />} />
        </Routes>
      </div>
    </div>
  );
}

export default Carrier;
