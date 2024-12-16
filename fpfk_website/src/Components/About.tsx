import Bishop from "../Images/bishop.png"
import Mekenye from "../Images/mekenye.png"
import Jenah from "../Images/jenah.png"
import Elizabeth from "../Images/elizabeth.png"
import Steve from "../Images/steven.png"
import MamaShiko from "../Images/mamashiko.png"

const About = () => {
  return (
    <div className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-white min-h-screen p-8">
     
      <div className="text-center mb-8">
        <h1 className="text-5xl font-extrabold mb-4">About Us</h1>
        <p className="text-lg max-w-3xl mx-auto leading-relaxed">
          Welcome to FPFK Kawangware Church. We are a community dedicated to faith, fellowship, and service. Our mission is to spread love, hope, 
          and positivity through the teachings of Christ.
        </p>
      </div>

  
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white text-gray-800 rounded-lg shadow-lg p-6 transform hover:scale-105 transition duration-300">
          <h2 className="text-2xl font-bold mb-4 text-center">Our Mission</h2>
          <p className="leading-relaxed">
            To bring people closer to God through worship, service, and community engagement. We strive to be a light in the world by living out our faith 
            and reaching out to those in need.
          </p>
        </div>
        <div className="bg-white text-gray-800 rounded-lg shadow-lg p-6 transform hover:scale-105 transition duration-300">
          <h2 className="text-2xl font-bold mb-4 text-center">Our Vision</h2>
          <p className="leading-relaxed">
            To be a thriving spiritual home where all people are welcomed, loved, and inspired to live a life of purpose and faith.
          </p>
        </div>
      </div>

     
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-center mb-6">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="bg-white text-gray-800 rounded-lg shadow-lg p-6 text-center">
            <img
              src={Bishop}
              alt="Silus Babu"
              className="rounded-full w-24 h-24 mx-auto mb-4"
            />
            <h3 className="text-xl font-bold">Silus Babu</h3>
            <p className="text-sm">Bishop</p>
          </div>

          
          <div className="bg-white text-gray-800 rounded-lg shadow-lg p-6 text-center">
            <img
              src={Elizabeth}
              alt="Elizabeth Nangoli"
              className="rounded-full w-24 h-24 mx-auto mb-4"
            />
            <h3 className="text-xl font-bold">Elizabeth Nangoli</h3>
            <p className="text-sm">Youth Leader</p>
          </div>
       <div className="bg-white text-gray-800 rounded-lg shadow-lg p-6 text-center">
            <img
              src={Steve}
              alt="Silus Babu"
              className="rounded-full w-24 h-24 mx-auto mb-4"
            />
            <h3 className="text-xl font-bold">Steven</h3>
            <p className="text-sm">Praise and Worship Leader</p>
          </div>

       <div className="bg-white text-gray-800 rounded-lg shadow-lg p-6 text-center">
            <img
              src={Jenah} 
              alt="jenah"
              className="rounded-full w-24 h-24 mx-auto mb-4"
            />
            <h3 className="text-xl font-bold">Jenah</h3>
            <p className="text-sm">Sunday School Leader</p>
          </div>

       <div className="bg-white text-gray-800 rounded-lg shadow-lg p-6 text-center">
            <img
              src={Mekenye}
              alt="james mekenye"
              className="rounded-full w-24 h-24 mx-auto mb-4"
            />
            <h3 className="text-xl font-bold">James Mekenye</h3>
            <p className="text-sm">Men Fellowship Leader</p>
          </div>

       <div className="bg-white text-gray-800 rounded-lg shadow-lg p-6 text-center">
            <img
            src={MamaShiko} 
              alt="mama shiko"
              className="rounded-full w-24 h-24 mx-auto mb-4"
            />
            <h3 className="text-xl font-bold">Mama Shiko</h3>
            <p className="text-sm">Women Fellowship Leader</p>
          </div>
        </div>
      </div>

      
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">Join Us Today</h2>
        <p className="text-lg max-w-2xl mx-auto leading-relaxed mb-6">
          Become part of our vibrant community. Whether you're looking for spiritual growth, meaningful connections, or ways to make an impact, 
          we welcome you with open arms.
        </p>
      
      </div>
    </div>
  );
};

export default About;

