import { FaCalendarAlt, FaMapMarkerAlt, FaClock, FaUserFriends } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Events = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: "Sunday Worship Service",
      date: "Every Sunday",
      time: "10:30 AM - 1:00 PM",
      location: "Main Sanctuary",
      description: "Join us for our weekly worship service with powerful preaching and uplifting music.",
      image: "service.jpg",
      category: "Weekly"
    },
    {
      id: 2,
      title: "Bible Study Fellowship",
      date: "Every Saturday",
      time: "5:30 PM - 7:00 PM",
      location: "Church Hall",
      description: "Deep dive into God's word with our interactive Bible study sessions.",
      image: "bible-study.jpg",
      category: "Weekly"
    },
    {
      id: 3,
      title: "Youth Night of Worship",
      date: "June 15, 2025",
      time: "6:00 PM - 9:00 PM",
      location: "Youth Center",
      description: "Special night of worship, testimonies, and fellowship for our youth.",
      image: "youth-night.jpg",
      category: "Special"
    },
    {
      id: 4,
      title: "Women's Conference",
      date: "July 8-10, 2025",
      time: "9:00 AM - 4:00 PM",
      location: "Main Sanctuary",
      description: "Annual women's conference with guest speakers, workshops, and prayer sessions.",
      image: "womens-conference.jpg",
      category: "Conference"
    },
    {
      id: 5,
      title: "Community Outreach",
      date: "June 25, 2025",
      time: "8:00 AM - 2:00 PM",
      location: "Kawangware Community",
      description: "Join us as we serve our community through various outreach programs.",
      image: "outreach.jpg",
      category: "Outreach"
    },
    {
      id: 6,
      title: "Marriage Enrichment Seminar",
      date: "August 12, 2025",
      time: "10:00 AM - 3:00 PM",
      location: "Church Hall",
      description: "Special seminar for couples to strengthen their marriage through biblical principles.",
      image: "marriage-seminar.jpg",
      category: "Seminar"
    }
  ];

  const eventCategories = [
    { name: "All", count: upcomingEvents.length },
    { name: "Weekly", count: upcomingEvents.filter(e => e.category === "Weekly").length },
    { name: "Special", count: upcomingEvents.filter(e => e.category === "Special").length },
    { name: "Conference", count: upcomingEvents.filter(e => e.category === "Conference").length },
    { name: "Outreach", count: upcomingEvents.filter(e => e.category === "Outreach").length },
    { name: "Seminar", count: upcomingEvents.filter(e => e.category === "Seminar").length }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-blue-800 text-white py-20">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Upcoming Events</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Join us for worship, fellowship, and spiritual growth through our various events and programs.
          </p>
        </div>
      </div>

      {/* Events Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Categories */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">Event Categories</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {eventCategories.map((category, index) => (
              <button
                key={index}
                className="px-6 py-2 bg-white border border-blue-600 text-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition-colors shadow-sm"
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {upcomingEvents.map((event) => (
            <div key={event.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 bg-blue-200 flex items-center justify-center text-blue-800">
                <FaCalendarAlt className="text-6xl" />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-sm font-semibold bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                    {event.category}
                  </span>
                  <span className="text-sm text-gray-500">{event.date}</span>
                </div>
                <h3 className="text-xl font-bold mb-3">{event.title}</h3>
                <div className="flex items-center text-gray-600 mb-3">
                  <FaClock className="mr-2" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center text-gray-600 mb-4">
                  <FaMapMarkerAlt className="mr-2" />
                  <span>{event.location}</span>
                </div>
                <p className="text-gray-700 mb-4">{event.description}</p>
                <div className="flex justify-between items-center">
                  <button className="text-blue-600 hover:text-blue-800 font-medium">
                    Learn More
                  </button>
                  <button className="flex items-center text-sm bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
                    <FaUserFriends className="mr-2" />
                    Register
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Can't Find What You're Looking For?</h2>
          <p className="text-xl mb-6 max-w-3xl mx-auto">
            Contact us for more information about our events and programs.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-full font-bold shadow-lg hover:bg-gray-100 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Events;