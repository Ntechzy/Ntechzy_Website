import React from 'react'
import Navbar from './component/Navbar/Navbar'
import { BrowserRouter as Router ,Routes,Route } from 'react-router-dom'
import Banner from './component/Banner/Banner'
import Home from './Pages/Home'
import About from './Pages/About'
const App = () => {
  return (
    <>
    <Router>
    <Navbar/>
    <Routes>
    <Route path='/' exact element={<Home/>}/>
    <Route path='/about' exact element={<About/>}/>
    </Routes>
    </Router>
    </>
  )
}

export default App