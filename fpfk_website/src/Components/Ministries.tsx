
  
import { FaChurch, FaPray, FaUsers, FaHandsHelping, FaMusic, FaHeart, FaHome } from 'react-icons/fa';

const Ministries = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 via-sky-400 to-blue-600 text-white min-h-screen py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold mb-4">Our Ministries</h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed">
            Join us as we serve God and our community through various ministries. We offer activities and opportunities to grow spiritually, build connections, and make a meaningful impact.
          </p>
        </div>
        <div className="bg-white text-gray-800 rounded-xl shadow-2xl p-10 mb-16">
          <h2 className="text-3xl font-semibold mb-8 text-center">Weekly Activities</h2>
          <ul className="space-y-6">
            <li className="flex items-center">
              <FaChurch className="text-blue-500 text-2xl mr-4" />
              <span className="font-bold text-lg mr-4">Sunday:</span>
              <p>Main service from 10:30 AM - 2:00 PM</p>
            </li>
            <li className="flex items-center">
              <FaPray className="text-blue-500 text-2xl mr-4" />
              <span className="font-bold text-lg mr-4">Monday:</span>
              <p>Prayer and Counseling</p>
            </li>
            <li className="flex items-center">
              <FaHome className="text-blue-500 text-2xl mr-4" />
              <span className="font-bold text-lg mr-4">Tuesday:</span>
              <p>Home Fellowships</p>
            </li>
            <li className="flex items-center">
              <FaUsers className="text-blue-500 text-2xl mr-4" />
              <span className="font-bold text-lg mr-4">Wednesday:</span>
              <p>Midweek Service</p>
            </li>
          
             <li className="flex items-center">
              <FaHeart className="text-blue-500 text-2xl mr-4" />
              <span className="font-bold text-lg mr-4">Saturday:</span>
              <p>Community Outreach</p>
            </li>
            <li className="flex items-center">
              <FaMusic className="text-blue-500 text-2xl mr-4" />
              <span className="font-bold text-lg mr-4">Friday:</span>
              <p>Worship Night</p>
            </li>
           
            <li className="flex items-center">
              <FaHandsHelping className="text-blue-500 text-2xl mr-4" />
              <span className="font-bold text-lg mr-4">Saturday:</span>
              <p>Youth Empowerment and Bible Study</p>
            </li>
          </ul>
        </div>

       
        <div className="bg-gradient-to-r from-blue-600 via-blue-500 to-sky-400 text-white rounded-xl shadow-lg p-12 text-center">
          <h2 className="text-4xl font-bold mb-6">Get Involved</h2>
          <p className="text-lg mb-8">
            Discover the joy of serving in our ministries. Whether you’re passionate about worship, community outreach, or youth empowerment, there’s a place for you here.
          </p>
          <button className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full shadow-lg transition transform hover:scale-105">
            Join a Ministry
          </button>
        </div>
      </div>
    </div>
  );
};

export default Ministries;
