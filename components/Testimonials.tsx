import React from 'react';
import { Testimonial } from '../types';
import { Star, Quote } from 'lucide-react';

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Griva S",
    role: "South Brunswick, NJ",
    content: "I recently ordered a cake and was truly impressed. The cake was incredibly fresh, soft and the decoration was beautifully done and exactly what I had imagined. Everyone at the celebration enjoyed it and kept asking where it was from.",
    avatar: "https://ui-avatars.com/api/?name=GS&background=4169E1&color=ffffff",
    rating: 5
  },
  {
    id: 2,
    name: "Mouhammad Ayoubi",
    role: "Kendall Park, NJ",
    content: "Good communication, professional. Delicious cake.",
    avatar: "https://ui-avatars.com/api/?name=M+A&size=250",
    rating: 5
  },
  {
    id: 3,
    name: "Mridu P",
    role: "Princeton, NJ",
    content: "Yummy cake, taste and look every thing was perfect.",
    avatar: "https://ui-avatars.com/api/?name=MP&background=FFA799&color=ffffff",
    rating: 5
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-12 bg-brand-base relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-10 left-10 text-brand-accent/5 transform -rotate-12">
        <Quote size={200} />
      </div>
      <div className="absolute bottom-10 right-10 text-brand-secondary/5 transform rotate-180">
        <Quote size={200} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-medium text-brand-dark mb-4">Customer Love</h2>
          <div className="h-0.5 w-16 bg-brand-secondary mx-auto rounded-full opacity-50"></div>
          <p className="mt-4 text-brand-text/70 italic">Moments of joy, shared by you.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-brand-accent/10 flex flex-col items-center text-center">
              
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-brand-accent rounded-full blur opacity-40 transform translate-y-2"></div>
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name} 
                  className="w-20 h-20 rounded-full border-4 border-white object-cover relative z-10"
                />
              </div>

              <div className="flex gap-1 mb-4 text-brand-primary">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={16} 
                    fill={i < testimonial.rating ? "currentColor" : "none"}
                    className={i < testimonial.rating ? "" : "text-gray-300"} 
                  />
                ))}
              </div>

              <p className="text-brand-text mb-6 leading-relaxed font-light">"{testimonial.content}"</p>

              <div>
                <h4 className="text-brand-dark font-serif font-bold text-lg">{testimonial.name}</h4>
                <p className="text-brand-secondary text-xs font-bold uppercase tracking-wider mt-1">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;