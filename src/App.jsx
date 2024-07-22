import React from 'react'
import Navbar from './component/Navbar/Navbar'
import { BrowserRouter as Router ,Routes,Route } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Services from './Pages/Services'
import ContactUs from './Pages/ContactUs'
const App = () => {
  return (
    <>
    <Router>
    <Navbar/>
    <Routes>
    <Route path='/' exact element={<Home/>}/>
    <Route path='/about' exact element={<About/>}/>
    <Route path='/services' exact element={<Services/>}/>
    <Route path='/contact-Us' exact element={<ContactUs/>}/>
    </Routes>
    </Router>
    </>
  )
}

export default App