const Footer = () => {
    return (
      <div className="bg-gradient-to-r from-slate-600 via-slate-500 to-slate-700 text-white py-4">
        <footer className="text-center">
          <div className="border-t border-indigo-300 mx-8 mb-2"></div>
          <p className="text-sm font-light tracking-wide mb-2">
            &copy; {new Date().getFullYear()} FPFK Kawangware Church. All rights reserved.
          </p>
          <p className="text-xs italic text-indigo-100 mb-2">
            Designed with love and purpose.
          </p>
          <div className="border-t border-indigo-300 mx-8 mt-4"></div>
        </footer>
      </div>
    );
  };
  
  export default Footer;
  