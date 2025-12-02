import React, { useState, useEffect } from 'react';
import { Menu, X, Flower, MessageCircle, Instagram } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-brand-base/95 backdrop-blur-md shadow-sm py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            {/*<Flower className="text-brand-accent h-8 w-8" />*/}
            <img src="../images/logo.png" alt="Bake & Bloom" className="h-24" />
            <span className="font-serif text-2xl font-bold text-brand-dark tracking-wide">
              Bake <span className="text-brand-accent">&</span> Bloom
            </span>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <a href="#home" className="text-brand-text hover:text-brand-primary transition-colors px-3 py-2 text-sm font-medium tracking-wide">Home</a>
              <a href="#menu" className="text-brand-text hover:text-brand-primary transition-colors px-3 py-2 text-sm font-medium tracking-wide">Creations</a>
              <a href="#about" className="text-brand-text hover:text-brand-primary transition-colors px-3 py-2 text-sm font-medium tracking-wide">Story</a>
              <a href="#testimonials" className="text-brand-text hover:text-brand-primary transition-colors px-3 py-2 text-sm font-medium tracking-wide">Love</a>
              <a href="https://instagram.com/bake.nd.bloom" target="_blank" className="text-brand-text hover:text-brand-primary transition-colors px-3 py-2 text-sm font-medium tracking-wide flex items-center gap-2"><Instagram size={25} /></a>
              <a
                href="https://wa.me/+12034287949"
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-brand-secondary text-white px-5 py-2.5 rounded-full font-medium hover:bg-brand-secondary/90 transition-all transform hover:scale-105 shadow-lg shadow-brand-secondary/20"
              >
                <MessageCircle size={18} />
                Quick Order
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-brand-text hover:text-brand-primary focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-brand-base border-t border-brand-accent/20 absolute w-full shadow-xl">
          <div className="px-4 pt-2 pb-6 space-y-2">
            <a href="#home" onClick={() => setIsOpen(false)} className="block px-3 py-3 rounded-md text-base font-medium text-brand-dark hover:bg-brand-accent/10">Home</a>
            <a href="#menu" onClick={() => setIsOpen(false)} className="block px-3 py-3 rounded-md text-base font-medium text-brand-dark hover:bg-brand-accent/10">Creations</a>
            <a href="#about" onClick={() => setIsOpen(false)} className="block px-3 py-3 rounded-md text-base font-medium text-brand-dark hover:bg-brand-accent/10">Story</a>
            <a href="#testimonials" onClick={() => setIsOpen(false)} className="block px-3 py-3 rounded-md text-base font-medium text-brand-dark hover:bg-brand-accent/10">Customer Love</a>
            <a href="https://instagram.com/bake.nd.bloom" onClick={() => setIsOpen(false)} target="_blank" className="block px-3 py-3 rounded-md text-base font-medium text-brand-dark hover:bg-brand-accent/10">
              <span className="flex items-center gap-2"><Instagram size={25} />Insta Vibes</span>
            </a>
             <a 
              href="https://wa.me/+12034287949"
              className="block mt-4 bg-brand-secondary text-white px-3 py-3 rounded-md text-base font-bold text-center flex items-center justify-center gap-2"
            >
              <MessageCircle size={18} />
              Quick Order via WhatsApp
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;