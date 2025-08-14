import { FaChurch, FaPray, FaUsers, FaHandsHelping, FaMusic, FaHeart, FaBible, FaChild } from 'react-icons/fa';
import { Link } from "react-router-dom";

const Ministries = () => {
  const ministries = [
    {
      name: "Sunday Worship",
      description: "Our main worship service featuring powerful preaching and vibrant praise.",
      icon: <FaChurch className="text-blue-600 text-4xl" />,
      meeting: "Sundays at 10:30 AM"
    },
    {
      name: "Youth Ministry",
      description: "Engaging programs for teens and young adults to grow in faith and fellowship.",
      icon: <FaUsers className="text-blue-600 text-4xl" />,
      meeting: "Saturday at 6:00 PM"
    },
    {
      name: "Women's Fellowship",
      description: "A supportive community for women of all ages to connect and grow spiritually.",
      icon: <FaHeart className="text-blue-600 text-4xl" />,
      meeting: "2nd Saturday at 2:00 PM"
    },
    {
      name: "Men's Fellowship",
      description: "Building godly men through Bible study, accountability, and service.",
      icon: <FaUsers className="text-blue-600 text-4xl" />,
      meeting: "1st Saturday at 9:00 AM"
    },
    {
      name: "Children's Ministry",
      description: "Fun, age-appropriate Bible teaching for kids from toddlers to pre-teens.",
      icon: <FaChild className="text-blue-600 text-4xl" />,
      meeting: "Sundays at 10:30 AM"
    },
    {
      name: "Prayer Ministry",
      description: "Dedicated times of corporate prayer for the church and community needs.",
      icon: <FaPray className="text-blue-600 text-4xl" />,
      meeting: "Daily from 6:30 AM"
    },
    {
      name: "Bible Study",
      description: "In-depth exploration of Scripture for spiritual growth and understanding.",
      icon: <FaBible className="text-blue-600 text-4xl" />,
      meeting: "Thursdays at 6:00 PM"
    },
    {
      name: "Worship Team",
      description: "Leading the congregation in authentic worship through music and arts.",
      icon: <FaMusic className="text-blue-600 text-4xl" />,
      meeting: "Saturdays at 6:00 PM"
    },
    {
      name: "Community Outreach",
      description: "Serving our local community through practical acts of love and compassion.",
      icon: <FaHandsHelping className="text-blue-600 text-4xl" />,
      meeting: "Monthly Saturdays"
    }
  ];

  const weeklySchedule = [
    {
      day: "Sunday",
      activities: [
        { time: "8:00 AM", event: "Morning Prayer" },
        { time: "10:30 AM", event: "Main Service" },
        { time: "2:00 PM", event: "Leaders Meetings" }
      ]
    },
    {
      day: "Monday",
      activities: [
        { time: "5:30 PM", event: "Prayer and Counseling" }
      ]
    },
    {
      day: "Tuesday",
      activities: [
        { time: "6:00 PM", event: "Home Fellowships" }
      ]
    },
    {
      day: "Wednesday",
      activities: [
        { time: "5:30 PM", event: "Bible Study" }
      ]
    },
    {
      day: "Thursday",
      activities: [
        { time: "6:00 PM", event: "Bible Study" }
      ]
    },
    {
      day: "Friday",
      activities: [
        { time: "10:30 PM", event: "Kesha (1st Friday)" }
      ]
    },
    {
      day: "Saturday",
      activities: [
        { time: "9:00 AM", event: "Compassion Meet-up" },
        { time: "2:00 PM", event: "Praise and Worship Practices" },
        { time: "6:00 PM", event: "Youth Bible Study" }
      ]
    }
  ];

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-center text-blue-700 mb-8">Our Ministries</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {ministries.map((ministry, index) => (
          <div key={index} className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
            <div className="flex items-center mb-4">
              {ministry.icon}
              <h2 className="ml-4 text-xl font-semibold text-gray-800">{ministry.name}</h2>
            </div>
            <p className="text-gray-600 mb-2">{ministry.description}</p>
            <p className="text-sm text-gray-500 font-medium">{ministry.meeting}</p>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold text-blue-700 mt-12 mb-6 text-center">Weekly Schedule</h2>
      
      <div className="space-y-6">
        {weeklySchedule.map((daySchedule, index) => (
          <div key={index} className="bg-gray-100 p-4 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">{daySchedule.day}</h3>
            <ul className="list-disc list-inside space-y-1">
              {daySchedule.activities.map((activity, i) => (
                <li key={i}>
                  <span className="font-medium text-gray-800">{activity.time}</span> – <span className="text-gray-700">{activity.event}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-10 text-center">
        <Link to="/" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full shadow hover:bg-blue-700 transition duration-200">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default Ministries;
