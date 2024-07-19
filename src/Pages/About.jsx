import React from 'react'
import AboutBanner from '../component/AboutComponent/AboutBanner'
import Analytical from '../component/AboutComponent/Analytical'
import Strategy from '../component/AboutComponent/Strategy'
import KnowUs from '../component/AboutComponent/KnowUs'
import Marketing from '../component/MarketingSection/Marketing'
import SocialMediaPic from '../component/SocialMediaPic/SocialMediaPic'
import Footer from '../component/Footer/Footer'
import ReachUs from '../component/AboutComponent/ReachUs'

function About() {
  return (
    <>
       <AboutBanner/>
	   <div id='formsID7375' style={{color:"#fff"}}>div </div>
	   <Analytical/>
	   <Strategy/>
	   <KnowUs/>
	   <ReachUs/>
	   <Marketing/>
	   <SocialMediaPic/>
	   <Footer/>
	</>
  )
}

export default About