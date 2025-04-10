const Contact = () => {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
            <p className="text-xl text-gray-600">We'd love to hear from you!</p>
          </div>
  
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white rounded-lg shadow-xl p-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Send us a Message</h2>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"></textarea>
                </div>
                <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                  Send Message
                </button>
              </form>
            </div>
  
            <div className="space-y-8">
              <div className="bg-white rounded-lg shadow-xl p-8">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Contact Information</h2>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <svg className="h-6 w-6 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-gray-600">Kawangware 56, Nairobi, Kenya</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="h-6 w-6 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="text-gray-600">+254 712 345 678</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="h-6 w-6 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="text-gray-600">info@fpfkkawangware.org</span>
                  </div>
                </div>
              </div>
  
              <div className="bg-white rounded-lg shadow-xl p-8">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Service Hours</h2>
                <div className="space-y-2">
                  <p className="text-gray-600"><span className="font-semibold">Sunday:</span> 8:00 AM - 2:00 PM</p>
                  <p className="text-gray-600"><span className="font-semibold">Wednesday:</span> 5:00 PM - 7:00 PM</p>
                  <p className="text-gray-600"><span className="font-semibold">Friday:</span> 5:00 PM - 7:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Contact;