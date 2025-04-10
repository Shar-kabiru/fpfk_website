import Logo from "../Images/fpfklogo.png";
import Img1 from "../Images/image1.png";
import Img2 from "../Images/image2.png";
import Bishop from "../Images/bishop.png";
import Alter from "../Images/alter.png";
import { FaChurch, FaPrayingHands, FaHandsHelping, FaCalendarAlt, FaQuoteLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const Home = () => {
  const upcomingEvents = [
    {
      title: "Sunday Service",
      date: "Every Sunday",
      time: "10:30 AM",
      description: "Join us for worship and the word"
    },
    {
      title: "Bible Study",
      date: "Every Wednesday",
      time: "5:30 PM",
      description: "Deep dive into God's word"
    },
    {
      title: "Youth Night",
      date: "First Friday of Month",
      time: "6:00 PM",
      description: "Special program for our youth"
    }
  ];

  const testimonials = [
    {
      quote: "This church has transformed my life through its powerful teachings and welcoming community.",
      author: "Sarah M."
    },
    {
      quote: "I found a family here that supports and prays with me through all life's challenges.",
      author: "James K."
    },
    {
      quote: "The children's ministry is exceptional. My kids love coming to church every Sunday!",
      author: "Grace W."
    }
  ];

  return (
    <div className="relative text-white">
      {/* Hero Section */}
      <div 
        className="relative h-screen flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${Alter})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="text-center px-4 max-w-4xl mx-auto relative z-10">
          <img 
            src={Logo} 
            alt="Church Logo" 
            className="w-24 h-24 mx-auto mb-6 rounded-full border-4 border-white shadow-xl"
          />
          <h1 className="text-5xl md:text-6xl font-bold mb-6 font-serif">Welcome to FPFK Kawangware</h1>
          <p className="text-xl md:text-2xl mb-8 leading-relaxed">
            A place of worship, fellowship, and spiritual growth in the heart of Nairobi
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/about" 
              className="bg-white text-blue-600 px-8 py-3 rounded-full font-bold shadow-lg hover:bg-blue-50 transition duration-300"
            >
              Learn More
            </Link>
            <Link 
              to="/contact" 
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-bold shadow-lg hover:bg-white hover:text-blue-600 transition duration-300"
            >
              Visit Us
            </Link>
          </div>
        </div>
      </div>

      {/* Welcome Section */}
      <div className="bg-white text-gray-800 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 font-serif">Welcome to Our Church Family</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed">
              At FPFK Kawangware, we are committed to serving God and our community through worship, discipleship, and outreach. 
              We believe in creating a welcoming space where everyone can experience God's love and grow in their faith.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-blue-50 p-8 rounded-lg shadow-md text-center hover:shadow-xl transition duration-300">
              <FaChurch className="text-blue-600 text-4xl mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Worship With Us</h3>
              <p className="text-gray-700">
                Join our vibrant worship services every Sunday and midweek. Experience the presence of God in our midst.
              </p>
            </div>
            
            <div className="bg-blue-50 p-8 rounded-lg shadow-md text-center hover:shadow-xl transition duration-300">
              <FaPrayingHands className="text-blue-600 text-4xl mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Grow Spiritually</h3>
              <p className="text-gray-700">
                Our Bible studies and discipleship programs will help you deepen your relationship with Christ.
              </p>
            </div>
            
            <div className="bg-blue-50 p-8 rounded-lg shadow-md text-center hover:shadow-xl transition duration-300">
              <FaHandsHelping className="text-blue-600 text-4xl mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Serve Community</h3>
              <p className="text-gray-700">
                We actively serve our community through various outreach programs and social initiatives.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Upcoming Events */}
      <div className="bg-gray-100 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 font-serif">Upcoming Events</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed text-gray-700">
              Join us for our upcoming services and special events. We'd love to worship and grow together with you.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition duration-300">
                <div className="flex items-center mb-4">
                  <FaCalendarAlt className="text-blue-600 text-2xl mr-4" />
                  <div>
                    <h3 className="text-xl font-bold">{event.title}</h3>
                    <p className="text-gray-600">{event.date}</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  <span className="font-semibold">Time:</span> {event.time}
                </p>
                <p className="text-gray-700">{event.description}</p>
                <Link 
                  to="/events" 
                  className="inline-block mt-4 text-blue-600 font-semibold hover:text-blue-800 transition duration-300"
                >
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link 
              to="/events" 
              className="bg-blue-600 text-white px-8 py-3 rounded-full font-bold shadow-lg hover:bg-blue-700 transition duration-300 inline-block"
            >
              View All Events
            </Link>
          </div>
        </div>
      </div>

      {/* Gallery Preview */}
      <div className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 font-serif">Church Life</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed text-gray-700">
              Glimpses of our worship services, community events, and fellowship moments.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <img src={Img1} alt="Church Event" className="rounded-lg shadow-md hover:shadow-xl transition duration-300 h-48 w-full object-cover" />
            <img src={Bishop} alt="Bishop" className="rounded-lg shadow-md hover:shadow-xl transition duration-300 h-48 w-full object-cover" />
            <img src={Img2} alt="Community Gathering" className="rounded-lg shadow-md hover:shadow-xl transition duration-300 h-48 w-full object-cover" />
            <img src={Alter} alt="Church Service" className="rounded-lg shadow-md hover:shadow-xl transition duration-300 h-48 w-full object-cover" />
          </div>
          
          <div className="text-center">
            <Link 
              to="/gallery" 
              className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-3 rounded-full font-bold shadow-lg hover:bg-blue-50 transition duration-300 inline-block"
            >
              View Full Gallery
            </Link>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="bg-blue-600 text-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 font-serif">What People Say</h2>
            <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed">
              Hear from members of our church family about their experiences.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 p-8 rounded-lg backdrop-blur-sm hover:bg-white/20 transition duration-300">
                <FaQuoteLeft className="text-white/30 text-3xl mb-4" />
                <p className="text-lg italic mb-6">{testimonial.quote}</p>
                <p className="font-bold">— {testimonial.author}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link 
              to="/testimonials" 
              className="bg-white text-blue-600 px-8 py-3 rounded-full font-bold shadow-lg hover:bg-gray-100 transition duration-300 inline-block"
            >
              More Testimonials
            </Link>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gray-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 font-serif">Ready to Visit Us?</h2>
          <p className="text-xl mb-8 leading-relaxed">
            We'd love to welcome you to our church family. Join us for worship this Sunday or reach out with any questions.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/contact" 
              className="bg-blue-600 text-white px-8 py-3 rounded-full font-bold shadow-lg hover:bg-blue-700 transition duration-300"
            >
              Contact Us
            </Link>
            <Link 
              to="/membership" 
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-bold shadow-lg hover:bg-white hover:text-gray-900 transition duration-300"
            >
              Become a Member
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;