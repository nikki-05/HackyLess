import React from 'react';

const ContactForm = ({ darkMode }) => {
  return (
    <section
      id="contact"
      className={`py-12 min-h-screen flex items-center justify-center transition-colors duration-500 ${
        darkMode ? 'bg-gray-900 text-gray-200' : 'bg-gray-100 text-gray-800'
      }`}
    >
      <div className="container mx-auto px-4">
        <h3
          className={`text-3xl font-bold text-center ${
            darkMode ? 'text-gray-500' : 'text-gray-500'
          } mb-8`}
        >
          Get in Touch
        </h3>
        <form
          className={`max-w-lg mx-auto p-6 rounded-lg shadow-lg transition-all ${
            darkMode ? 'bg-gray-800 text-gray-200' : 'bg-white text-gray-800'
          }`}
        >
          <div className="mb-6">
            <label
              className={`block font-medium mb-2 ${
                darkMode ? 'text-gray-300' : 'text-gray-700'
              }`}
              htmlFor="name"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              className={`w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                darkMode
                  ? 'border-gray-600 bg-gray-700 text-gray-200'
                  : 'border-gray-300 bg-gray-100 text-gray-800'
              }`}
            />
          </div>
          <div className="mb-6">
            <label
              className={`block font-medium mb-2 ${
                darkMode ? 'text-gray-300' : 'text-gray-700'
              }`}
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className={`w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                darkMode
                  ? 'border-gray-600 bg-gray-700 text-gray-200'
                  : 'border-gray-300 bg-gray-100 text-gray-800'
              }`}
            />
          </div>
          <div className="mb-6">
            <label
              className={`block font-medium mb-2 ${
                darkMode ? 'text-gray-300' : 'text-gray-700'
              }`}
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              placeholder="Write your message here..."
              className={`w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                darkMode
                  ? 'border-gray-600 bg-gray-700 text-gray-200'
                  : 'border-gray-300 bg-gray-100 text-gray-800'
              }`}
            ></textarea>
          </div>
          <button
            type="submit"
            className={`w-full font-medium py-2 rounded-lg shadow-md transition ${
              darkMode ? 'bg-blue-500 hover:bg-blue-400' : 'bg-blue-600 hover:bg-blue-700'
            } text-white`}
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
