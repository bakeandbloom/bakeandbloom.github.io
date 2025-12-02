import React from 'react';
import { ArrowRight, Star } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-brand-base pt-16 md:pt-0">
      
      {/* Abstract Shapes for Elegance */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[500px] h-[500px] bg-brand-accent/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[400px] h-[400px] bg-brand-secondary/10 rounded-full blur-3xl"></div>

      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Text Content */}
        <div className="text-left order-2 md:order-1">
          <span className="inline-block py-1.5 px-4 rounded-full bg-brand-accent/20 text-brand-dark text-xs font-bold tracking-widest uppercase mb-6">
            Est. 2024 • 100% Eggless Bakery
          </span>
          <h1 className="font-serif text-5xl md:text-7xl font-medium text-brand-dark mb-6 leading-[1.1]">
            Where Sweetness <br/>
            <span className="text-brand-accent italic">Blooms</span>
          </h1>
          <p className="text-lg text-brand-text mb-8 max-w-lg font-light leading-relaxed">
            Experience the harmony of <b>100% eggless</b>, handcrafted cakes, thoughtfully designed to make your moments unforgettable.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#menu"
              className="group bg-brand-dark text-brand-base px-8 py-4 rounded-full font-medium text-lg hover:bg-brand-secondary transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
            >
              View Menu
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </a>
            <a 
              href="https://wa.me/+12034287949"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full font-medium text-lg text-brand-dark border border-brand-dark/20 hover:border-brand-accent hover:bg-brand-accent/10 transition-all duration-300 flex items-center justify-center"
            >
              Custom Order
            </a>
          </div>

          <div className="mt-12 flex items-center gap-4 text-sm text-brand-text/80">
            <div className="flex -space-x-2">
              <img className="inline-block h-10 w-10 rounded-full ring-2 ring-brand-base object-cover" src="https://picsum.photos/100/100?random=50" alt=""/>
              <img className="inline-block h-10 w-10 rounded-full ring-2 ring-brand-base object-cover" src="https://picsum.photos/100/100?random=51" alt=""/>
              <img className="inline-block h-10 w-10 rounded-full ring-2 ring-brand-base object-cover" src="https://picsum.photos/100/100?random=52" alt=""/>
            </div>
            <div>
              <div className="flex items-center gap-1 text-brand-secondary">
                <Star size={14} fill="currentColor" />
                <Star size={14} fill="currentColor" />
                <Star size={14} fill="currentColor" />
                <Star size={14} fill="currentColor" />
                <Star size={14} fill="currentColor" />
              </div>
              <span className="font-medium">150+ Happy Customers</span>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="order-1 md:order-2 relative">
           <div className="relative rounded-[2rem] overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-700 ease-out border-8 border-white">
             <img 
               src="../images/bouquet-main.png"
               alt="Bouquet Cake"
               className="w-full h-auto object-cover transform scale-105 hover:scale-100 transition-transform duration-700"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/20 to-transparent"></div>
           </div>
           {/* Floating Badge */}
           <div className="absolute -bottom-6 -left-6 bg-brand-base p-4 rounded-xl shadow-xl border border-brand-accent/20 animate-bounce delay-700">
              <p className="font-serif text-2xl font-bold text-brand-dark">Fresh</p>
              <p className="text-xs text-brand-secondary uppercase tracking-wider font-bold">Daily Baked</p>
           </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;