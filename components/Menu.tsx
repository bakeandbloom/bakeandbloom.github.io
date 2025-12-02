import React from 'react';
import { MenuItem } from '../types';
import { ShoppingBag, Flower } from 'lucide-react';

import bouquet from '../images/bouquet.png';
import eightBirthday from '../images/8th-birthday.png';
import anniversary from '../images/25th-anniversary.jpg';
import princessCastle from '../images/princess-castle.png';
import harryPotter from '../images/harry-potter.png';
import cupcakes from '../images/cupcakes.png';


const menuItems: MenuItem[] = [
  {
    id: 1,
    name: "Ferrero Rocher Cake",
    description: "Delicate sponge infused with chocolate, layered with hazelnut spread and ferrero rocher.",
    title: "Bouquet",
    image: bouquet,
    category: "Our Signature"
  },
  {
    id: 2,
    name: "Rasmalai Cake",
    description: "A delightful Indian fusion dessert, combining the flavors of traditional rasmalai with a soft, spongy cake filled with rasmalai pieces.",
    title: "Princess Castle",
    image: princessCastle,
    category: "A bite of the Magic Kingdom"
  },
  {
    id: 3,
    name: "Chocolate Orange Cake",
    description: "A magical Harry Potter-themed cake, adorned with iconic elements like the Golden Snitch, Hogwarts crest, and a wand, perfect for fans of the wizarding world.",
    title: "Harry Potter",
    image: harryPotter,
    category: "The Boy Who Lived"
  },
  {
    id: 4,
    name: "Chocolate Mousse Cake",
    description: "A delightful 8th birthday cake shaped like the number eight, beautifully decorated with vibrant flowers and whimsical butterfly designs",
    title: "8th Birthday",
    image: eightBirthday,
    category: "You Nailed 8"
  },
  {
    id: 5,
    name: "Butterscotch Cake",
    description: "Celebrate 25 years of love with this elegant butterscotch cake, featuring golden ball decorations that symbolize the sweetness of your anniversary and enduring love.",
    title: "25th Anniversary",
    image: anniversary,
    category: "A quarter-century of love"
  },
  {
    id: 6,
    name: "Classic Cupcakes",
    description: "Timeless vanilla bean cupcakes topped with vanilla flavored cream and golden sprinkles.",
    title: "Vanilla Bliss",
    image: cupcakes,
    category: "Little Bites"
  }
];

const Menu: React.FC = () => {
  return (
    <section id="menu" className="py-12 bg-white relative">
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-brand-base to-white"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-brand-accent font-bold tracking-widest text-xs uppercase mb-2 block">Handcrafted with Love</span>
          <h2 className="font-serif text-4xl md:text-5xl font-medium text-brand-dark mb-4">Our Creations</h2>
          <div className="h-0.5 w-16 bg-brand-primary mx-auto rounded-full opacity-50"></div>
          <p className="mt-6 text-brand-text max-w-2xl mx-auto font-light leading-relaxed">
            From the oven to your heart, dive into a sea of delicious possibilities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {menuItems.map((item) => (
            <div key={item.id} className="group bg-brand-base rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 border border-brand-accent/10">
              <div className="relative h-72 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name}
                  // className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  className="w-full h-full object-cover max-w-full max-h-full transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-brand-dark font-serif font-bold shadow-sm">
                  {item.title}
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2 py-1 bg-brand-accent/10 text-brand-dark text-[10px] font-bold uppercase tracking-wider rounded">{item.category}</span>
                </div>
                <h3 className="font-serif text-2xl font-medium text-brand-dark mb-3 group-hover:text-brand-primary transition-colors">{item.name}</h3>
                <p className="text-brand-text/80 text-sm mb-6 leading-relaxed line-clamp-2">{item.description}</p>
                
                <a 
                  href={`https://wa.me/+12034287949?text=Hello, I would like to order: ${item.name} / ${item.title}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-white border border-brand-dark text-brand-dark hover:bg-brand-dark hover:text-white font-medium py-3 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-lg"
                >
                  <ShoppingBag size={18} />
                  Order on WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;