import React from 'react';
import './LandingPage.css';
import Footer from '../components/Footer';  // Ensure the path is correct


const LandingPage = () => {
  const HeroSection = () => {
    const text = [
      "Discover",
      "participate",
      "and",
      "excel",
      "in",
      "coding",
      "challenges",
      "and",
      "events",
      "worldwide."
    ];

    return (
      <section className="text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-50 pointer-events-none"></div>
        <div className="container mx-auto text-center relative z-10 transform transition-all duration-700 animate-fade-in-down">
        <h2 className="text-4xl font-bold mb-4 mt-12 transition-transform duration-500 animate-fade-in-up hover:scale-105">
              Your Gateway to Hackathons and Challenges
            </h2>

          <p className="text-lg mb-6 opacity-90 hover:opacity-100 transition-opacity duration-300">
            <span className="inline-block">
              {text.map((word, index) => (
                <span
                  key={index}
                  className={`inline-block opacity-0 px-1 animate-word-animation ${
                    index > 0 ? `animate-delay-${index * 200}` : ""
                  }`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {word}{" "}
                </span>
              ))}
            </span>
          </p>
          <br/><br/>
          <a
            href="/events"
            className="bg-white text-blue-600 font-semibold py-2 px-6  rounded-full shadow-lg transition-all transform hover:bg-gray-100 hover:scale-150 hover:shadow-2xl"
          >
            Get Started
          </a>

        </div>

        {/* Animated elements for visual appeal */}
        <div className="absolute top-10 left-10 w-24 h-24 bg-purple-500 opacity-30 rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-blue-400 opacity-30 rounded-full animate-pulse"></div>
        <div className="absolute top-24 left-24 w-16 h-16 bg-pink-400 opacity-25 rounded-full animate-bounce"></div>
        <div className="absolute top-40 right-10 w-12 h-12 bg-green-500 opacity-20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 left-40 w-20 h-20 bg-yellow-400 opacity-30 rounded-full animate-bounce"></div>
        <div className="absolute bottom-16 right-40 w-18 h-18 bg-teal-400 opacity-25 rounded-full animate-pulse"></div>
      </section>
    );
  };


  const Features = () => (
    <section id="features" className="text-white py-32 relative overflow-hidden">
      <div className="absolute inset-0 opacity-40 pointer-events-none"></div>
      <div className="container mx-auto text-center relative z-10 -mt-12">
        <h3 className="text-3xl font-bold mb-8 animate-fade-in-up">Why Choose HackyLess?</h3>
        <div className="grid md:grid-cols-3 gap-2 ml-20">
          <div className="bg-white shadow-lg p-6 rounded-lg transition-transform transform hover:scale-110 hover:shadow-xl animate-fade-in-left h-54 w-96">
            <h4 className="text-xl transition-transform transform hover:scale-125  font-semibold mb-2 text-blue-600">Event Aggregation</h4>
            <p className="text-gray-800">Find all upcoming hackathons and challenges in one place.</p>
          </div>
          <div className="bg-white shadow-lg p-6 rounded-lg transition-transform transform hover:scale-110 hover:shadow-xl animate-fade-in-up  h-54 w-96">
            <h4 className="transition-transform transform hover:scale-125  text-xl font-semibold mb-2 text-blue-600">Search & Filters</h4>
            <p className="text-gray-800">Quickly locate events that match your interests and schedule.</p>
          </div>
          <div className="bg-white shadow-lg p-6 rounded-lg transition-transform transform hover:scale-110 hover:shadow-xl animate-fade-in-right  h-54 w-96">
            <h4 className="transition-transform transform hover:scale-125 text-xl font-semibold mb-2 text-blue-600">User Notifications</h4>
            <p className="text-gray-800">Stay informed about deadlines, updates, and new events.</p>
          </div>
        </div>
      </div>
    </section>
  );
  

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-200 via-purple-200 to-blue-400 scroll-smooth">
      <div className="bg-gradient-to-br from-purple-700 via-blue-500 to-white flex-1">
        <HeroSection />
        <Features />
      </div>

    </div>
  );
};

export default LandingPage;
