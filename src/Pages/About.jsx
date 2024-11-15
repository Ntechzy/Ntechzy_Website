import React from 'react'
import AboutBanner from '../component/AboutComponent/AboutBanner'
import Analytical from '../component/AboutComponent/Analytical'
import Strategy from '../component/AboutComponent/Strategy'
import KnowUs from '../component/AboutComponent/KnowUs'
import Marketing from '../component/HomeComponent/Marketing'
import SocialMediaPic from '../component/HomeComponent/SocialMediaPic'
import Footer from '../component/HomeComponent/Footer'
import ReachUs from '../component/AboutComponent/ReachUs'
import AboutContent from '../component/AboutComponent/AboutContent'
import NikhilSir from '../component/AboutComponent/NikhilSir'

function About() {
  return (
    <>
       <AboutBanner/>
	   <Analytical/>
	   <AboutContent/>
	   <Strategy/>
	   <NikhilSir/>
	   <KnowUs/>
	   {/* <ReachUs/> */}
	   <Marketing/>
	   <SocialMediaPic/>
	   <Footer/>
	</>
  )
}

export default About