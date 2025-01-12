import React from 'react';

const Hero = () => {
  return (
    <section className="relative text-center py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
      <div className="absolute inset-0 bg-pattern opacity-20"></div>
      <div className="relative z-10 container mx-auto px-4">
        <h2 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
          Discover Hackathons with Ease
        </h2>
        <p className="text-lg md:text-xl text-gray-200 mb-8">
          Your one-stop platform to explore, track, and participate in hackathons and tech events worldwide.
        </p>
        <div className="flex justify-center items-center gap-2">
          <input
            type="text"
            placeholder="Search for events..."
            className="w-full max-w-md px-4 py-3 rounded-lg shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-400 text-black"
          />
          <button className="px-6 py-3 bg-yellow-400 text-black font-semibold rounded-lg shadow-lg hover:bg-yellow-500 transition duration-300">
            Search
          </button>
        </div>
        <p className="text-sm text-gray-300 mt-4">
          Not sure where to start? <a href="#" className="underline hover:text-gray-100">Explore Trending Events</a>
        </p>
      </div>
    </section>
  );
};

export default Hero;
