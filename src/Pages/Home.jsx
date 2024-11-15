import React from 'react'
import Navbar from '../component/Navbar/Navbar'
import Banner from '../component/HomeComponent/Banner'
import Creative from '../component/HomeComponent/Creative'
import Gallery from '../component/HomeComponent/Gallery'
import Marketing from '../component/HomeComponent/Marketing'
import Services from '../component/HomeComponent/HomeServices'
// import ConnectNow from '../component/ExpertAnswer/ExpertAns'
import ExpertAns from '../component/HomeComponent/ExpertAns'
import ClientFeedback from '../component/HomeComponent/ClientFeedback'
import Blog from '../component/HomeComponent/Blog'
import SocialMediaPic from '../component/HomeComponent/SocialMediaPic'
import Footer from '../component/HomeComponent/Footer'
import InstagramPost from '../component/HomeComponent/InstagramPost'
const Home = () => {
  return (
  <>
  <Banner/>
  {/* <Creative/> */}
  <Marketing/>
  <Gallery/>
  <Services/>
  <ExpertAns/>
  <ClientFeedback/>
  {/* <Blog/> */}
  <InstagramPost/>
  <SocialMediaPic/>
  <Footer/>
  
  </>
  )
}

export default Home

