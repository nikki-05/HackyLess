import React from 'react';

const Hero = () => {
  return (
    <section className="text-center py-16">
      <h2 className="text-4xl font-bold mb-4">Discover Hackathons with Ease</h2>
      <p className="text-lg text-gray-700 mb-6">
        A centralized platform to simplify your journey into hackathons and tech events.
      </p>
      <input
        type="text"
        placeholder="Search for events..."
        className="w-full max-w-md mx-auto px-4 py-2 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </section>
  );
};

export default Hero;