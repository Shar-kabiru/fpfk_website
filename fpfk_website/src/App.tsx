import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import About from './Components/About'
import Home from './Components/Home'
import Ministries from './Components/Ministries'
import NavBar from './Components/NavBar'
import Footer from './Components/Footer'
import Membership from './Components/Membership'
import Contact from './Components/Contact'
import Sermons from './Components/Sermons'
import Donate from './Components/Donate'
import Gallery from './Components/Gallery'
import Events from './Components/Events'
import Testimonials from './Components/Testimonials'


function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/ministries" element={<Ministries />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/sermons" element={<Sermons />} />
        <Route path="/Contact us" element={<Contact />} />
        <Route path="/donate" element={<Donate />} />
         <Route path="/gallery" element={<Gallery />} />
         <Route path="/events" element={<Events />} />
         <Route path="/testimonials" element={<Testimonials />} /> 
        
      </Routes>
      <Footer />
    </Router>
  )
}

export default App




