import Bishop from "../Images/bishop.png"
import Mekenye from "../Images/mekenye.png"
import Jenah from "../Images/jenah.png"
import Elizabeth from "../Images/elizabeth.png"
import Steve from "../Images/steven.png"
import MamaShiko from "../Images/mamashiko.png"
import ChurchBuilding from "../Images/alter.png"
import { FaCross, FaHandsHelping, FaUsers, FaPray } from "react-icons/fa";
import { Link } from "react-router-dom";

const About = () => {
  const coreValues = [
    {
      title: "Biblical Teaching",
      description: "We are committed to the faithful teaching of God's Word as the foundation for all we do.",
      icon: <FaCross className="text-blue-600 text-3xl" />
    },
    {
      title: "Authentic Worship",
      description: "We seek to worship God in spirit and truth, expressing our love and devotion to Him.",
      icon: <FaPray className="text-blue-600 text-3xl" />
    },
    {
      title: "Community",
      description: "We value authentic relationships and strive to build a caring, intergenerational community.",
      icon: <FaUsers className="text-blue-600 text-3xl" />
    },
    {
      title: "Service",
      description: "We are called to serve others, both within our church and in the broader community.",
      icon: <FaHandsHelping className="text-blue-600 text-3xl" />
    }
  ];

  const historyMilestones = [
    { year: "1995", event: "Church founded by a small group of believers" },
    { year: "2002", event: "First permanent church building constructed" },
    { year: "2010", event: "Launched community outreach programs" },
    { year: "2015", event: "Expanded to include youth and children's ministries" },
    { year: "2020", event: "Celebrated 25 years of ministry in Kawangware" }
  ];

  return (
    <div className="bg-white text-gray-800 min-h-screen">
      {/* Hero Section */}
      <div className="relative h-96 bg-gradient-to-r from-blue-700 to-blue-900 flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl font-bold mb-4 font-serif">About Our Church</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Discover our story, beliefs, and the people who make FPFK Kawangware a spiritual home.
          </p>
        </div>
      </div>

      {/* Our Story */}
      <div className="py-20 px-4 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-4xl font-bold mb-6 font-serif">Our Story</h2>
            <div className="w-24 h-1 bg-blue-600 mb-6"></div>
            <p className="text-lg leading-relaxed mb-6">
              FPFK Kawangware was founded in 1995 with a vision to create a Christ-centered community in the heart of Nairobi. 
              What began as a small gathering in a home has grown into a vibrant church serving hundreds of families.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Over the years, we've remained committed to our founding principles of biblical teaching, authentic worship, 
              and compassionate service to our community.
            </p>
            <Link 
              to="/membership" 
              className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Join Our Story
            </Link>
          </div>
          <div className="rounded-lg overflow-hidden shadow-xl">
            <img src={ChurchBuilding} alt="Church Building" className="w-full h-auto" />
          </div>
        </div>

        {/* History Timeline */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold mb-8 text-center font-serif">Our Journey</h3>
          <div className="relative">
            <div className="absolute left-1/2 h-full w-1 bg-blue-600 transform -translate-x-1/2"></div>
            <div className="space-y-8">
              {historyMilestones.map((milestone, index) => (
                <div 
                  key={index} 
                  className={`relative flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                >
                  <div className={`w-5/12 p-6 rounded-lg shadow-md ${index % 2 === 0 ? 'bg-blue-50' : 'bg-gray-50'}`}>
                    <div className="font-bold text-blue-600">{milestone.year}</div>
                    <p>{milestone.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold mb-6 text-center font-serif">Our Core Values</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-12"></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 text-center">
                <div className="flex justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-700">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <div className="bg-blue-50 p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-center font-serif">Our Mission</h2>
            <p className="leading-relaxed text-center">
              To bring people to Jesus and membership in His family, develop them to Christ-like maturity, 
              and equip them for their ministry in the church and life mission in the world, in order to magnify God's name.
            </p>
          </div>
          <div className="bg-blue-600 text-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-center font-serif">Our Vision</h2>
            <p className="leading-relaxed text-center">
              To be a thriving, multi-generational church that transforms lives through the power of the Gospel, 
              builds authentic Christian community, and serves as a beacon of hope in Kawangware and beyond.
            </p>
          </div>
        </div>

        {/* Leadership Team */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-center mb-6 font-serif">Meet Our Leadership</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-12"></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Bishop */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
              <img
                src={Bishop}
                alt="Silus Babu"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-center">Bishop Silus Babu</h3>
                <p className="text-sm text-center text-gray-600 mb-4">Bishop</p>
                <p className="text-gray-700 text-center">
                  Bishop Babu has served since 1990, providing spiritual leadership and vision.
                </p>
              </div>
            </div>

            {/* Women Fellowship Leader */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
              <img
                src={MamaShiko}
                alt="Mama Shiko"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-center">Mama Shiko</h3>
                <p className="text-sm text-center text-gray-600 mb-4">Women Fellowship Leader</p>
                <p className="text-gray-700 text-center">
                  Leads our vibrant women's ministry focused on spiritual growth and community service.
                </p>
              </div>
            </div>

            {/* Youth Leader */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
              <img
                src={Elizabeth}
                alt="Elizabeth Nangoli"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-center">Elizabeth Nangoli</h3>
                <p className="text-sm text-center text-gray-600 mb-4">Youth Leader</p>
                <p className="text-gray-700 text-center">
                  Passionate about mentoring the next generation of Christian leaders.
                </p>
              </div>
            </div>

            {/* Praise and Worship Leader */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
              <img
                src={Steve}
                alt="Steven"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-center">Steven</h3>
                <p className="text-sm text-center text-gray-600 mb-4">Praise and Worship Leader</p>
                <p className="text-gray-700 text-center">
                  Leads our dynamic worship team in creating spaces for authentic encounters with God.
                </p>
              </div>
            </div>

            {/* Sunday School Leader */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
              <img
                src={Jenah}
                alt="Jenah"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-center">Jenah</h3>
                <p className="text-sm text-center text-gray-600 mb-4">Sunday School Leader</p>
                <p className="text-gray-700 text-center">
                  Creates engaging, age-appropriate Bible lessons for our children.
                </p>
              </div>
            </div>

            {/* Men Fellowship Leader */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
              <img
                src={Mekenye}
                alt="James Mekenye"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-center">James Mekenye</h3>
                <p className="text-sm text-center text-gray-600 mb-4">Men Fellowship Leader</p>
                <p className="text-gray-700 text-center">
                  Leads our men's ministry focused on spiritual growth and accountability.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Join Us */}
        <div className="bg-blue-600 text-white rounded-xl p-12 text-center">
          <h2 className="text-4xl font-bold mb-6 font-serif">Join Us This Sunday</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Experience authentic worship, biblical teaching, and a welcoming community.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/contact" 
              className="bg-white text-blue-600 px-8 py-3 rounded-full font-bold shadow-lg hover:bg-gray-100 transition duration-300"
            >
              Service Times
            </Link>
            <Link 
              to="/ministries" 
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-bold shadow-lg hover:bg-white hover:text-blue-600 transition duration-300"
            >
              Find a Ministry
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

