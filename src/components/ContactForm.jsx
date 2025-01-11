import React from 'react';

const ContactForm = () => {
  return (
    <section id="contact" className="py-8 py-16 bg-gradient-to-br from-purple-700 via-blue-500 to-white h-[800px]">
      <h2 className="text-2xl font-bold mb-4 ml-[700px] mt-28">Get in Touch</h2>
      <form className=" mx-auto bg-transparent rounded-lg mt-14 w-[600px] text-white">
        <div className="mb-4 ml-32 mt-10">
          <label className="block text-white-700 mb-2" htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            className="w-3/4 px-4 py-2 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4 ml-32 mt-10">
          <label className="block  mb-2" htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            className="w-3/4 px-4 py-2 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4 ml-32 mt-10">
          <label className="block  mb-2" htmlFor="message">Message</label>
          <textarea
            id="message"
            rows="4"
            className="w-3/4 px-4 py-2 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700 transition ml-60"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
