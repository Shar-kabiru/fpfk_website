import Logo from "../Images/fpfklogo.png";
import Img1 from "../Images/image1.png";
import Img2 from "../Images/image2.png";
import Bishop from "../Images/bishop.png";

const Home = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-600 text-white min-h-screen p-8">
      {/* Header Section */}
      <header className="text-center mb-12">
        <h1 className="text-5xl font-extrabold mb-4">Welcome to FPFK Kawangware Church</h1>
        <p className="text-lg max-w-3xl mx-auto leading-relaxed">
          Join us in celebrating faith, hope, and love. Discover a vibrant community where you can grow spiritually and build meaningful connections.
        </p>
        <button className="mt-6 bg-white text-indigo-600 px-6 py-2 rounded-full shadow-md hover:bg-indigo-100 transition duration-300">
          Learn More
        </button>
      </header>

      
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-center justify-center mb-12">
        <img 
          src={Logo} 
          alt="Church Logo" 
          className="rounded-full shadow-xl transform hover:scale-105 transition duration-300" 
        />
        <img 
          src={Bishop} 
          alt="Bishop" 
          className="rounded-lg shadow-xl transform hover:scale-105 transition duration-300" 
        />
        <img 
          src={Img1} 
          alt="Church Event" 
          className="rounded-lg shadow-xl transform hover:scale-105 transition duration-300" 
        />
        <img 
          src={Img2} 
          alt="Community Gathering" 
          className="rounded-lg shadow-xl transform hover:scale-105 transition duration-300" 
        />
      </section>

      
      <section className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-6">About Us</h2>
        <p className="text-lg max-w-3xl mx-auto leading-relaxed">
          At FPFK Kawangware Church, our mission is to spread the love of Christ through worship, community service, and spiritual growth. 
          We are dedicated to nurturing a welcoming space for everyone to connect and thrive in their faith journey.
        </p>
      </section>

      {/* Call to Action Section */}
      <section className="bg-white text-indigo-600 py-12 px-8 rounded-lg shadow-lg max-w-4xl mx-auto text-center">
        <h3 className="text-3xl font-bold mb-4">Get Involved</h3>
        <p className="text-lg mb-6">
          Be part of our mission to make a positive impact in our community. Join our upcoming events, volunteer opportunities, or support our outreach programs.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button className="bg-indigo-600 text-white px-6 py-2 rounded-full shadow-md hover:bg-indigo-500 transition duration-300">
            Upcoming Events
          </button>
          <button className="bg-indigo-600 text-white px-6 py-2 rounded-full shadow-md hover:bg-indigo-500 transition duration-300">
            Volunteer
          </button>
          <button className="bg-indigo-600 text-white px-6 py-2 rounded-full shadow-md hover:bg-indigo-500 transition duration-300">
            Support Us
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
