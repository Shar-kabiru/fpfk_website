import { FaDonate, FaHandHoldingHeart, FaPray, FaChurch } from 'react-icons/fa';


const Donate = () => {
  const givingOptions = [
    {
      title: "Tithes",
      description: "Give your 10% as commanded in Malachi 3:10 to support the work of the ministry.",
      icon: <FaChurch className="text-4xl text-blue-600" />
    },
    {
      title: "Offerings",
      description: "Give generously as God has prospered you to support various church programs.",
      icon: <FaDonate className="text-4xl text-blue-600" />
    },
    {
      title: "Missions",
      description: "Support our local missions to spread the Gospel.",
      icon: <FaHandHoldingHeart className="text-4xl text-blue-600" />
    },
    {
      title: "Building Fund",
      description: "Contribute to our church expansion project to accommodate our growing congregation.",
      icon: <FaPray className="text-4xl text-blue-600" />
    }
  ];

  const paymentMethods = [
    {
      name: "M-Pesa",
      details: "Paybill: 123456 | Account: Donation",
      icon: "mpesa.png"
    },
    {
      name: "Bank Transfer",
      details: "Bank: Equity | Account: 1234567890 | Name: FPFK Kawangware",
      icon: "bank.png"
    },
    {
      name: "Credit Card",
      details: "Secure online payment via our payment processor",
      icon: "credit-card.png"
    },
    {
      name: "Cash",
      details: "Give in person during our services or at the church office",
      icon: "cash.png"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-blue-800 text-white py-20">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Give Generously</h1>
          <p className="text-xl max-w-3xl mx-auto">
            "Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver." - 2 Corinthians 9:7
          </p>
        </div>
      </div>

      {/* Donation Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Giving Options */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">Ways to Give</h2>
        

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {givingOptions.map((option, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 text-center">
                <div className="flex justify-center mb-4">
                  {option.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{option.title}</h3>
                <p className="text-gray-700">{option.description}</p>
              </div>
            ))}
          </div>
        </div>
 

        {/* Payment Methods */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">Payment Methods</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {paymentMethods.map((method, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="h-16 mb-4 bg-blue-100 rounded-lg flex items-center justify-center">
                  <div className="h-12 w-12 bg-blue-200 rounded-full flex items-center justify-center text-blue-600">
                    {method.icon.startsWith("http") ? (
                      <img src={method.icon} alt={method.name} className="h-8 w-8" />
                    ) : (
                      <span className="text-xl font-bold">{method.name.charAt(0)}</span>
                    )}
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-2 text-center">{method.name}</h3>
                <p className="text-gray-700 text-sm text-center">{method.details}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Online Donation Form */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
          <h2 className="text-2xl font-bold mb-6 text-center">Online Donation</h2>
          <form className="max-w-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input type="text" placeholder="Full Name" className="border p-3 rounded-lg w-full" />
              <input type="email" placeholder="Email Address" className="border p-3 rounded-lg w-full" />
              <input type="number" placeholder="Amount" className="border p-3 rounded-lg w-full" />
              <select className="border p-3 rounded-lg w-full">
                <option>Select Payment Method</option>
                {paymentMethods.map((method, index) => (
                  <option key={index}>{method.name}</option>
                ))}
              </select>
            </div>
            <button className="mt-6 bg-blue-600 text-white py-3 px-6 rounded-lg w-full hover:bg-blue-700 transition">Donate Now</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Donate;
