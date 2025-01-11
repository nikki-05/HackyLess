import React from 'react';
import EventList from './EventList';
const Hero = () => {
  return (
    <section className="text-center py-16 bg-gradient-to-br from-purple-700 via-blue-500 to-white text-white h-screen">
      <h2 className="text-4xl font-bold mb-4 mt-24">Discover Hackathons with Ease</h2>
      <p className="text-lg text-gray-700 mb-6">
        A centralized platform to simplify your journey into hackathons and tech events.
      </p>
      <input
        type="text"
        placeholder="Search for events..."
        className="w-full max-w-md mx-auto px-4 py-2 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
      />
      <EventList/>
      <div className="absolute top-30 left-10 w-24 h-24 bg-purple-500 opacity-30 rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-blue-400 opacity-30 rounded-full animate-pulse"></div>
        <div className="absolute top-24 left-24 w-16 h-16 bg-pink-400 opacity-25 rounded-full animate-bounce"></div>
        <div className="absolute top-40 right-10 w-12 h-12 bg-green-500 opacity-20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 left-40 w-20 h-20 bg-yellow-400 opacity-30 rounded-full animate-bounce"></div>
        <div className="absolute bottom-16 right-40 w-18 h-18 bg-teal-400 opacity-25 rounded-full animate-pulse"></div>
    </section>
  );
};

export default Hero;