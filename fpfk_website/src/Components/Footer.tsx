import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';



const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">About Us</h3>
            <p className="text-gray-400">We are a community of believers committed to spreading God's love through service and fellowship.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/about" className="hover:text-blue-400 transition-colors">Our Beliefs</a></li>
              <li><a href="/ministries" className="hover:text-blue-400 transition-colors">Ministries</a></li>
              <li><a href="/events" className="hover:text-blue-400 transition-colors">Events</a></li>
              <li><a href="/donate" className="hover:text-blue-400 transition-colors">Give</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Email: fpfk@gmail.com</li>
              <li>Phone: +254 720 952 345</li>
              <li>Address: Kawangware, Nairobi</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>

<div className="flex space-x-4">
  <a href="https://www.facebook.com/profile.php?id=100064876622861"
   className="text-[#1877F2] hover:opacity-80 transition"
   target="_blank"
   rel="noopener noreferrer"
   >
    <FontAwesomeIcon icon={faFacebook} size="lg" />
  </a>
  <a href="#" className="text-[#1DA1F2] hover:opacity-80 transition">
    <FontAwesomeIcon icon={faTwitter} size="lg" />
  </a>
  <a href="#" className="text-[#C13584] hover:opacity-80 transition">
    <FontAwesomeIcon icon={faInstagram} size="lg" />
  </a>
  <a
  href="https://www.youtube.com/@fpfkkawangwarechurch3665"
  target="_blank"
  rel="noopener noreferrer"
  className="text-[#FF0000] hover:opacity-80 transition"
>
  <FontAwesomeIcon icon={faYoutube} size="lg" />
</a>

</div>




          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} FPFK Kawangware Church. All rights reserved.</p>
          <p className="mt-2">Designed with ❤️ by James</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;