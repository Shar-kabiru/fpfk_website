import { FaImages, FaVideo, FaCalendarAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Gallery = () => {
  const photoAlbums = [
    {
      id: 1,
      title: "Sunday Services",
      count: 24,
      coverImage: "sunday-service.jpg",
      date: "June 2023"
    },
    {
      id: 2,
      title: "Youth Camp",
      count: 48,
      coverImage: "youth-camp.jpg",
      date: "May 2023"
    },
    {
      id: 3,
      title: "Women's Conference",
      count: 36,
      coverImage: "womens-conference.jpg",
      date: "April 2023"
    },
    {
      id: 4,
      title: "Community Outreach",
      count: 42,
      coverImage: "community-outreach.jpg",
      date: "March 2023"
    },
    {
      id: 5,
      title: "Baptism Ceremony",
      count: 18,
      coverImage: "baptism.jpg",
      date: "February 2023"
    },
    {
      id: 6,
      title: "Christmas Celebration",
      count: 56,
      coverImage: "christmas.jpg",
      date: "December 2022"
    }
  ];

  const videoAlbums = [
    {
      id: 1,
      title: "Sunday Sermons",
      count: 12,
      coverImage: "sermon.jpg",
      date: "June 2023"
    },
    {
      id: 2,
      title: "Testimonies",
      count: 8,
      coverImage: "testimonies.jpg",
      date: "May 2023"
    },
    {
      id: 3,
      title: "Worship Sessions",
      count: 5,
      coverImage: "worship.jpg",
      date: "April 2023"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-blue-800 text-white py-20">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Church Gallery</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Relive our special moments through photos and videos from our services and events.
          </p>
        </div>
      </div>

      {/* Gallery Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Photo Albums */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold flex items-center">
              <FaImages className="mr-3 text-blue-600" />
              Photo Albums
            </h2>
            <Link to="/gallery/photos" className="text-blue-600 hover:text-blue-800 font-medium">
              View All Photos
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {photoAlbums.map((album) => (
              <div key={album.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="h-48 bg-blue-200 flex items-center justify-center text-blue-800">
                  <FaImages className="text-6xl" />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-2">{album.title}</h3>
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>{album.count} photos</span>
                    <div className="flex items-center">
                      <FaCalendarAlt className="mr-1" />
                      <span>{album.date}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Video Albums */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold flex items-center">
              <FaVideo className="mr-3 text-blue-600" />
              Video Albums
            </h2>
            <Link to="/gallery/videos" className="text-blue-600 hover:text-blue-800 font-medium">
              View All Videos
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {videoAlbums.map((album) => (
              <div key={album.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="h-48 bg-blue-200 flex items-center justify-center text-blue-800">
                  <FaVideo className="text-6xl" />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-2">{album.title}</h3>
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>{album.count} videos</span>
                    <div className="flex items-center">
                      <FaCalendarAlt className="mr-1" />
                      <span>{album.date}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Share Your Memories With Us</h2>
          <p className="text-xl mb-6 max-w-3xl mx-auto">
            Have photos or videos from our events? Share them with our media team to be featured in our gallery.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-full font-bold shadow-lg hover:bg-gray-100 transition-colors"
          >
            Contact Media Team
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Gallery;