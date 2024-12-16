import './App.css'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import About from './Components/About'
import Home from './Components/Home'
import Ministries from './Components/Ministries'
import NavBar from './Components/NavBar'
import Blogs from './Components/Blogs'
import Footer from './Components/Footer'


function App() {


  return (
    <Router>
     <NavBar/>
      <Routes>
      <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
      </Routes>
      <Routes>
        <Route path='/about' element={<About />} />
      </Routes>
      <Routes>
        <Route path='/ministries' element={<Ministries />} />
      </Routes>
      <Routes>
      <Route path='/blogs' element={<Blogs />} />
      </Routes>
      <Routes>
       
      </Routes>
      <Footer />
   </Router>
        
  )
}

export default App




