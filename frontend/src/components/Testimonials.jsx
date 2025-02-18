import React from 'react';

const Testimonials = ({ darkMode }) => {
  const testimonials = [
    {
      name: "Ranjan Jogi",
      feedback: "Hackyless made finding hackathons so easy and efficient!",
    },
    {
      name: "Ramu Smith",
      feedback: "An amazing platform for tech enthusiasts and students alike!",
    },
  ];

  return (
    <section
      id="testimonials"
      className={`py-12 transition-colors duration-500 ${
        darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'
      }`}
    >
      <div className="container mx-auto px-4">
        <h3
          className={`text-3xl font-bold mb-8 text-center ${
            darkMode ? 'text-white' : 'text-gray-500'
          }`}
        >
          What People Are Saying
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`shadow-lg rounded-lg p-6 hover:shadow-xl transition-transform transform hover:scale-105 ${
                darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-700'
              }`}
            >
              <p className="text-lg italic">"{testimonial.feedback}"</p>
              <p className="mt-4 text-right font-medium">- {testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
