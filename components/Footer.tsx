import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin, Youtube, MapPin, Phone, Mail, Flower } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark text-brand-base pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              {/*<Flower className="text-brand-accent h-6 w-6" />*/}
              {/*<span className="font-serif text-2xl font-bold text-white tracking-wide">*/}
              {/*  Bake <span className="text-brand-accent">&</span> Bloom*/}
              {/*</span>*/}
              <img src="/images/logo.png" alt="Bake & Bloom" className="h-20" />
              <span className="font-serif text-2xl font-bold text-white tracking-wide">
                Bake <span className="text-brand-accent">&</span> Bloom
              </span>
            </div>
            <p className="text-brand-base/70 mb-8 leading-relaxed font-light">
              Crafting sweet memories with artisan baking and exquisite designs. Join us in celebrating life's beautiful moments.
            </p>
            <div className="flex gap-4">
              <SocialIcon icon={Facebook} href="https://www.facebook.com/people/Bake-and-Bloom/61584345271064" label="Facebook" />
              <SocialIcon icon={Instagram} href="https://instagram.com/bake.nd.bloom" label="Instagram" />
              {/*<SocialIcon icon={Twitter} href="#" label="Twitter" />*/}
              {/*<SocialIcon icon={Linkedin} href="#" label="LinkedIn" />*/}
              {/*<SocialIcon icon={Youtube} href="#" label="YouTube" />*/}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-serif font-medium text-lg mb-6">Explore</h3>
            <ul className="space-y-4 font-light text-brand-base/80">
              <li><a href="#home" className="hover:text-brand-primary transition-colors">Home</a></li>
              <li><a href="#menu" className="hover:text-brand-primary transition-colors">Our Creations</a></li>
              <li><a href="#about" className="hover:text-brand-primary transition-colors">Our Story</a></li>
              <li><a href="#testimonials" className="hover:text-brand-primary transition-colors">Customer Love</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-serif font-medium text-lg mb-6">Visit Us</h3>
            <ul className="space-y-6 font-light text-brand-base/80">
              <li className="flex items-start gap-4">
                <MapPin className="text-brand-primary shrink-0 mt-1" size={18} />
                <span>Southridge Woods Blvd,<br />Monmouth Junction, NJ 08852</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="text-brand-primary shrink-0" size={18} />
                <span>+1 (203) 428-7949</span>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="text-brand-primary shrink-0" size={18} />
                <span>bakeandbloom@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="text-white font-serif font-medium text-lg mb-6">Opening Hours</h3>
            <ul className="space-y-4 font-light text-brand-base/80">
              <li className="flex justify-between border-b border-brand-base/10 pb-2">
                <span>Mon - Fri</span>
                <span>9:00 AM - 6:00 PM</span>
              </li>
              <li className="flex justify-between border-b border-brand-base/10 pb-2">
                <span>Saturday</span>
                <span>9:00 AM - 6:00 PM</span>
              </li>
              <li className="flex justify-between pb-2">
                <span>Sunday</span>
                <span>9:00 AM - 6:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-brand-base/10 pt-8 text-center text-brand-base/40 text-sm font-light flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; {new Date().getFullYear()} Bake & Bloom. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-brand-base transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand-base transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon: React.FC<{ icon: React.ElementType, href: string, label: string }> = ({ icon: Icon, href, label }) => (
  <a 
    href={href} 
    aria-label={label}
    className="w-10 h-10 rounded-full bg-brand-base/10 flex items-center justify-center hover:bg-brand-primary hover:text-brand-dark transition-all duration-300 transform hover:-translate-y-1"
  >
    <Icon size={18} />
  </a>
);

export default Footer;