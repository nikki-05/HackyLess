import React from 'react';

const Testimonials = () => {
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
    <section id="testimonials" className="py-12 bg-gradient-to-r from-indigo-50 to-blue-50">
      <div className="container mx-auto px-4">
        <h3 className="text-3xl font-bold mb-8 text-center text-gray-800">
          What People Are Saying
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-transform transform hover:scale-105"
            >
              <p className="text-gray-700 text-lg italic">"{testimonial.feedback}"</p>
              <p className="text-gray-500 mt-4 text-right font-medium">- {testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
