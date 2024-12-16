import Logo from "../Images/fpfklogo.png"

import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="bg-slate-500 text-white text-2xl p-4">
      <div className="flex justify-between items-center">
        
        <div className="flex items-center">
          <img
            src={Logo}
            alt="Logo"
            className="h-10 w-10 mr-4 rounded-full" 
          />
        </div>

       
        <div className="hidden lg:flex space-x-4 sm:space-x-8 md:space-x-12 lg:space-x-10">
          <Link to="/home" className="flex items-center justify-center w-20 h-10 hover:text-teal-400">
            <h1 className="text-sm sm:text-base md:text-lg lg:text-xl">Home</h1>
          </Link>
          <Link to="/about" className="flex items-center justify-center w-20 h-10 hover:text-teal-400">
            <h1 className="text-sm sm:text-base md:text-lg lg:text-xl">About</h1>
          </Link>
          <Link to="/ministries" className="flex items-center justify-center w-20 h-10 hover:text-teal-400">
            <h1 className="text-sm sm:text-base md:text-lg lg:text-xl">Ministries</h1>
          </Link>
          <Link to="/blogs" className="flex items-center justify-center w-20 h-10 hover:text-teal-400">
            <h1 className="text-sm sm:text-base md:text-lg lg:text-xl">Blog</h1>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
