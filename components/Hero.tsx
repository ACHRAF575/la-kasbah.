import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1539755530862-00f623c531ba?q=80&w=2574&auto=format&fit=crop"
          alt="Moroccan spices and architecture"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 bg-gradient-to-b from-black/60 via-transparent to-black/60"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h2 className="text-terracotta-300 text-lg md:text-xl font-medium tracking-[0.3em] uppercase mb-4 animate-fade-in-up">
          Welcome to
        </h2>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white font-bold mb-6 drop-shadow-xl animate-fade-in-up delay-100">
          La Kasbah
        </h1>
        <p className="text-gray-200 text-lg md:text-xl font-light max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up delay-200">
          A culinary journey to the heart of Morocco. <br className="hidden md:block"/>
          Experience authentic flavors in an enchanting atmosphere.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-300">
          <a
            href="#menu"
            className="px-8 py-3 bg-terracotta-600 hover:bg-terracotta-500 text-white font-medium rounded-sm transition-all duration-300 uppercase tracking-wider border-2 border-transparent hover:scale-105"
          >
            View Our Menu
          </a>
          <a
            href="#contact"
            className="px-8 py-3 bg-transparent hover:bg-white/10 text-white font-medium rounded-sm transition-all duration-300 uppercase tracking-wider border-2 border-white"
          >
            Find Us
          </a>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/80 hover:text-white animate-bounce transition-colors"
      >
        <ChevronDown className="h-10 w-10" />
      </a>
    </section>
  );
};

export default Hero;
