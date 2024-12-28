import Logo from "../Images/fpfklogo.png";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className=" from-blue-600 via-teal-500 to-blue-600 text-white p-4 shadow-md bg-slate-500">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo Section */}
        <div className="flex items-center">
          <img
            src={Logo}
            alt="Logo"
            className="h-12 w-12 rounded-full shadow-md transform hover:scale-110 transition-transform duration-300"
          />
          <span className="ml-3 text-xl font-bold tracking-wide">FPFK</span>
        </div>

        {/* Navigation Links */}
        <div className="hidden lg:flex space-x-6">
          <Link
            to="/home"
            className="text-lg font-medium hover:text-yellow-300 transition-colors duration-300"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-lg font-medium hover:text-yellow-300 transition-colors duration-300"
          >
            About
          </Link>
          <Link
            to="/ministries"
            className="text-lg font-medium hover:text-yellow-300 transition-colors duration-300"
          >
            Ministries
          </Link>
          <Link
            to="/membership"
            className="text-lg font-medium hover:text-yellow-300 transition-colors duration-300"
          >
            Membership
          </Link>
        </div>
        <div className="lg:hidden">
          <button className="text-white focus:outline-none hover:text-yellow-300">
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

