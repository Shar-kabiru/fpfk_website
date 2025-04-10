const Sermons = () => {
  const sermons = [
    {
      title: "The Power of Faith",
      preacher: "Bishop Silas Babu",
      date: "March 15, 2025",
      duration: "45:00",
      thumbnail: "https://via.placeholder.com/300",
      verse: "Hebrews 11:1"
    },
    {
      title: "Walking in the Spirit",
      preacher: "Pastor Joseph Wainaina",
      date: "March 22, 2025",
      duration: "50:30",
      thumbnail: "https://via.placeholder.com/300",
      verse: "Galatians 5:16"
    },
    {
      title: "Victory Through Prayer",
      preacher: "Abednego Mchalongo",
      date: "March 29, 2025",
      duration: "42:10",
      thumbnail: "https://via.placeholder.com/300",
      verse: "James 5:16"
    },
    {
      title: "Kingdom Finances",
      preacher: "Nicholas",
      date: "April 5, 2025",
      duration: "47:25",
      thumbnail: "https://via.placeholder.com/300",
      verse: "Luke 6:38."
    },
    {
      title: "The Anointing That Breaks Yokes",
      preacher: "Elizabeth Nangoli",
      date: "April 6, 2025",
      duration: "55:45",
      thumbnail: "https://via.placeholder.com/300",
      verse: "Isaiah 10:27"
    },
    {
      title: "Living a Life of Purpose",
      preacher: "Pastor Alex Oluoch",
      date: "April 7, 2025",
      duration: "39:35",
      thumbnail: "https://via.placeholder.com/300",
      verse: "Jeremiah 29:11"
    },
    {
      title: "Healing and Deliverance",
      preacher: "George Gishamba",
      date: "April 8, 2025",
      duration: "52:00",
      thumbnail: "https://via.placeholder.com/300",
      verse: "Isaiah 53:5"
    },
    {
      title: "The Word That Transforms",
      preacher: "Steven Maingi",
      date: "April 9, 2025",
      duration: "48:10",
      thumbnail: "https://via.placeholder.com/300",
      verse: "Romans 12:2"
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Sermons & Teachings</h1>
          <p className="text-xl text-gray-600">Watch or listen to our latest messages</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sermons.map((sermon, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img src={sermon.thumbnail} alt={sermon.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">{sermon.title}</h3>
                <p className="italic text-sm text-gray-500 mb-3">"{sermon.verse}"</p>
                <p className="text-gray-600 mb-2">{sermon.preacher}</p>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>{sermon.date}</span>
                  <span>{sermon.duration}</span>
                </div>
                <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  Watch Now
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="bg-gray-900 text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors">
            Load More Sermons
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sermons;
