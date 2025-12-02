import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Menu from './components/Menu';
import Testimonials from './components/Testimonials';
import About from './components/About';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

const App: React.FC = () => {
  return (
    <div className="bg-brand-base min-h-screen text-brand-text">
      <Navbar />
      <main>
        <Hero />
        <Menu />
        <Testimonials />
        <About />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default App;