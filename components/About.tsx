import React from 'react';
import {CakeIcon, CakeSlice, EggOff, Flower, HandHeart, Heart, LucideCake} from 'lucide-react';

const About: React.FC = () => {
    return (
        <section id="about" className="py-12 bg-brand-base relative">
            <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-brand-light to-brand-base"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <span className="text-brand-accent font-bold tracking-widest text-xs uppercase mb-2 block">Our Story</span>
                    <h2 className="font-serif text-4xl md:text-5xl font-medium text-brand-dark mb-4">Bake & Bloom</h2>
                    <div className="h-0.5 w-16 bg-brand-primary mx-auto rounded-full opacity-50"></div>
                    <p className="mt-6 text-brand-text max-w-2xl mx-auto font-light leading-relaxed">
                        At Bake & Bloom, we believe in crafting moments of joy through our creations. From the finest ingredients to the love we pour into every detail, our journey is about celebrating life’s sweetest moments with you.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div>
                        <img
                            src="https://images.unsplash.com/photo-1556912167-f556f1f39fdf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                            alt="Our Story"
                            className="w-full h-auto rounded-xl shadow-lg"
                        />
                    </div>
                    <div className="flex flex-col justify-center">
                        <h3 className="font-serif text-3xl font-medium text-brand-dark mb-4">Our Passion</h3>
                        <p className="text-brand-text/80 text-base leading-relaxed mb-6">
                            What started as a small family bakery has blossomed into a community of cake lovers. We take pride in blending tradition with innovation, ensuring every bite is as memorable as the last.
                        </p>
                        <div className="flex items-center gap-4">
                            <HandHeart className="text-brand-accent h-8 w-8" />
                            <p className="text-brand-dark font-medium">Made with Love</p>
                            <EggOff className="text-brand-accent h-8 w-8" />
                            <p className="text-brand-dark font-medium">100% Eggless</p>
                            <Flower className="text-brand-accent h-8 w-8" />
                            <p className="text-brand-dark font-medium">Always Fresh</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;