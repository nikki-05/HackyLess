import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import EventList from './components/EventList';
import Footer from './components/Footer';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import LandingPage from './Pages/LandingPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// const App = () => {
//   return (
//     <div className="min-h-screen bg-gray-50">
//       <Navbar />
//       <Hero />
//       <main className="container mx-auto px-4 py-8">
//         <EventList />
//         <Testimonials />
//         <ContactForm />
//       </main>
//       <Footer />
//     </div>
//   );
// };

// const App = () => {
//   return (
//     <LandingPage/>
//   );
// };

const App = () => {
  return (
    <Router>      
      {/* Define the routes */}
      <Routes>
        {/* LandingPage route */}
        <Route path="/" element={<LandingPage />} />
        
        {/* Other routes */}
        <Route path="/events" element={
          <>
            <Navbar/>
            <Hero/>
            <EventList/>
          </>
        } />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/contact" element={<ContactForm />} />
      </Routes>
      
    </Router>
  );
};

export default App;