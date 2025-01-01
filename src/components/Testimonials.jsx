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
    <section id="testimonials" className="py-8 bg-gray-100">
      <h3 className="text-2xl font-bold mb-4 text-center">What People Are Saying</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white shadow-md rounded p-4 hover:shadow-lg transition">
            <p className="text-gray-700">"{testimonial.feedback}"</p>
            <p className="text-gray-500 mt-2 text-right">- {testimonial.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;