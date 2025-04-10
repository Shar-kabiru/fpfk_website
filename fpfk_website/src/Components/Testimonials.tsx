import { FaQuoteLeft, FaStar, FaChurch, FaHandsHelping, FaVideo } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      quote: "This church has been a true blessing to my family. The teachings have transformed our lives and the community is so welcoming.",
      author: "Sarah M.",
      role: "Member since 2015",
      rating: 5
    },
    {
      id: 2,
      quote: "I found hope and purpose when I joined FPFK Kawangware. The support I received during my difficult times was incredible.",
      author: "James K.",
      role: "Member since 2018",
      rating: 5
    },
    {
      id: 3,
      quote: "The youth ministry changed my life. I've grown spiritually and made lifelong friends who keep me accountable.",
      author: "David W.",
      role: "Youth Member",
      rating: 5
    },
    {
      id: 4,
      quote: "As a newcomer, I was immediately made to feel at home. The worship is powerful and the preaching is biblically sound.",
      author: "Grace N.",
      role: "New Member",
      rating: 5
    },
    {
      id: 5,
      quote: "The women's fellowship has been my spiritual lifeline. The mentorship and sisterhood have helped me through many challenges.",
      author: "Esther O.",
      role: "Women's Fellowship",
      rating: 5
    },
    {
      id: 6,
      quote: "Our children love Sunday school! They're learning about God in fun, engaging ways and we've seen positive changes in them.",
      author: "Michael & Ruth",
      role: "Parents",
      rating: 5
    }
  ];

  const stats = [
    { value: "15+", label: "Years Serving", icon: <FaChurch className="text-3xl text-blue-600" /> },
    { value: "500+", label: "Members", icon: <FaHandsHelping className="text-3xl text-blue-600" /> },
    { value: "50+", label: "Lives Changed", icon: <FaQuoteLeft className="text-3xl text-blue-600" /> },
    { value: "5.0", label: "Average Rating", icon: <FaStar className="text-3xl text-blue-600" /> }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-blue-800 text-white py-20">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Testimonials</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Hear what our members say about their experiences at FPFK Kawangware Church.
          </p>
        </div>
      </div>

      {/* Testimonials Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="flex justify-center mb-3">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-blue-600 mb-1">{stat.value}</div>
              <div className="text-gray-700">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <FaStar 
                    key={i} 
                    className={`text-yellow-400 ${i < testimonial.rating ? 'opacity-100' : 'opacity-30'}`} 
                  />
                ))}
              </div>
              <FaQuoteLeft className="text-blue-200 text-3xl mb-4" />
              <p className="text-gray-700 italic mb-6">{testimonial.quote}</p>
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold mr-3">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <div className="font-bold">{testimonial.author}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Video Testimonials */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">Video Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-blue-200 h-64 rounded-lg flex items-center justify-center text-blue-800">
              <FaVideo className="text-6xl" />
            </div>
            <div className="bg-blue-200 h-64 rounded-lg flex items-center justify-center text-blue-800">
              <FaVideo className="text-6xl" />
            </div>
          </div>
        </div>

        {/* Share Your Story */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Share Your Story</h2>
          <p className="text-xl mb-6 max-w-3xl mx-auto">
            Has FPFK Kawangware Church impacted your life? We'd love to hear your testimony!
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-full font-bold shadow-lg hover:bg-gray-100 transition-colors"
          >
            Share Your Testimony
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;