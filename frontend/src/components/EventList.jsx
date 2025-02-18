import React from 'react';

const EventList = () => {
  const events = [
    { name: "Hackathon Name", date: "January 15, 2025", location: "Online" },
    { name: "Tech Challenge", date: "February 10, 2025", location: "New York" },
    { name: "Code Fest", date: "March 5, 2025", location: "San Francisco" },
  ];

  return (
    <section id="events" className="py-12 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h3 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-8">
          Upcoming Events
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 shadow-lg dark:shadow-md rounded-lg overflow-hidden hover:shadow-2xl dark:hover:shadow-xl transition transform hover:scale-105"
            >
              <div className="p-6">
                <h4 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">
                  {event.name}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-lg">
                  <strong>Date:</strong> {event.date}
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-lg">
                  <strong>Location:</strong> {event.location}
                </p>
                <a
                  href="#"
                  className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 mt-4 inline-block text-lg font-medium"
                >
                  View Details
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventList;
