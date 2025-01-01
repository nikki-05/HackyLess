import React from 'react';

const EventList = () => {
  const events = [
    { name: "Hackathon Name", date: "January 15, 2025", location: "Online" },
    { name: "Tech Challenge", date: "February 10, 2025", location: "New York" },
    { name: "Code Fest", date: "March 5, 2025", location: "San Francisco" },
  ];

  return (
    <section id="events" className="py-8">
      <h3 className="text-2xl font-bold mb-4">Upcoming Events</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event, index) => (
          <div key={index} className="bg-white shadow-md rounded p-4 hover:shadow-lg transition">
            <h4 className="text-xl font-semibold">{event.name}</h4>
            <p className="text-gray-600">Date: {event.date}</p>
            <p className="text-gray-600">Location: {event.location}</p>
            <a
              href="#"
              className="text-blue-600 hover:underline mt-2 inline-block"
            >
              View Details
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EventList;