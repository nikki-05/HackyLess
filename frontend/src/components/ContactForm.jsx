import React from 'react';

const ContactForm = () => {
  return (
    <section id="contact" className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h3 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Get in Touch
        </h3>
        <form className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg">
          <div className="mb-6">
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              placeholder="Write your message here..."
              className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-medium py-2 rounded-lg shadow-md hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
