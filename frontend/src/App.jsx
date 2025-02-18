import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import EventList from './components/EventList';
import Footer from './components/Footer';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';

const App = () => {
  // Initially set darkMode based on localStorage value, default to light mode (false)
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem('darkMode') === 'true');

  React.useEffect(() => {
    // Toggle dark mode on body based on darkMode state
    if (darkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }

    // Save darkMode preference to localStorage
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]); // This effect runs when darkMode state changes

  return (
    <div className="min-h-screen">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Hero />
      <main className="container mx-auto px-4 py-8">
        <EventList />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default App;