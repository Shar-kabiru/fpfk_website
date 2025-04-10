import Logo from "../Images/fpfklogo.png";
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FaSearch, FaBell } from 'react-icons/fa';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg py-2' : 'bg-white/90 py-4 shadow-md'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <Link to="/home" className="flex items-center">
            <img
              src={Logo}
              alt="Logo"
              className="h-12 w-12 rounded-full border-2 border-blue-600 shadow-md"
            />
            <span className="ml-3 text-xl font-bold text-gray-900 font-serif">FPFK Kawangware</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link 
              to="/home" 
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive('/home') ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-blue-600'}`}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive('/about') ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-blue-600'}`}
            >
              About Us
            </Link>
            <Link 
              to="/ministries" 
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive('/ministries') ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-blue-600'}`}
            >
              Ministries
            </Link>
            <Link 
              to="/sermons" 
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive('/sermons') ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-blue-600'}`}
            >
              Sermons
            </Link>
            <Link 
              to="/events" 
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive('/events') ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-blue-600'}`}
            >
              Events
            </Link>
            <Link 
              to="/gallery" 
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive('/gallery') ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-blue-600'}`}
            >
              Gallery
            </Link>
            <Link 
              to="/Contact us" 
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive('/blog') ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-blue-600'}`}
            >
              Contact Us
            </Link>
            <div className="flex items-center space-x-4 ml-4">
              <button className="text-gray-600 hover:text-blue-600">
                <FaSearch className="h-5 w-5" />
              </button>
              <button className="text-gray-600 hover:text-blue-600 relative">
                <FaBell className="h-5 w-5" />
                <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"></span>
              </button>
              <Link 
                to="/donate" 
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors shadow-md text-sm font-medium"
              >
                Donate
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button className="text-gray-600 hover:text-gray-900 mr-4">
              <FaSearch className="h-5 w-5" />
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white shadow-lg rounded-lg mt-2">
            <div className="pt-2 pb-3 space-y-1">
              <Link 
                to="/home" 
                onClick={() => setIsOpen(false)} 
                className={`block px-4 py-3 rounded-md mx-2 ${isActive('/home') ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-blue-50'}`}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                onClick={() => setIsOpen(false)} 
                className={`block px-4 py-3 rounded-md mx-2 ${isActive('/about') ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-blue-50'}`}
              >
                About Us
              </Link>
              <Link 
                to="/ministries" 
                onClick={() => setIsOpen(false)} 
                className={`block px-4 py-3 rounded-md mx-2 ${isActive('/ministries') ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-blue-50'}`}
              >
                Ministries
              </Link>
              <Link 
                to="/sermons" 
                onClick={() => setIsOpen(false)} 
                className={`block px-4 py-3 rounded-md mx-2 ${isActive('/sermons') ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-blue-50'}`}
              >
                Sermons
              </Link>
              <Link 
                to="/events" 
                onClick={() => setIsOpen(false)} 
                className={`block px-4 py-3 rounded-md mx-2 ${isActive('/events') ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-blue-50'}`}
              >
                Events
              </Link>
              <Link 
                to="/gallery" 
                onClick={() => setIsOpen(false)} 
                className={`block px-4 py-3 rounded-md mx-2 ${isActive('/gallery') ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-blue-50'}`}
              >
                Gallery
              </Link>
              <Link 
                to="/Contact us" 
                onClick={() => setIsOpen(false)} 
                className={`block px-4 py-3 rounded-md mx-2 ${isActive('/Contact us') ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-blue-50'}`}
              >
                Contact Us
              </Link>
              <Link 
                to="/donate" 
                onClick={() => setIsOpen(false)} 
                className="block px-4 py-3 text-blue-600 font-medium hover:bg-blue-50 rounded-md mx-2"
              >
                Donate
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;