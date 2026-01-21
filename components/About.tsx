import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-sand relative overflow-hidden">
      {/* Decorative pattern hint */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-terracotta-100 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="relative z-10 grid grid-cols-2 gap-4">
               <img 
                 src="https://images.unsplash.com/photo-1541518763179-0e3d960bf2c9?auto=format&fit=crop&q=80&w=800" 
                 alt="Moroccan Interior" 
                 className="rounded-sm shadow-xl mt-12"
               />
               <img 
                 src="https://images.unsplash.com/photo-1512152272829-e3139601d179?auto=format&fit=crop&q=80&w=800" 
                 alt="Tagine Dish" 
                 className="rounded-sm shadow-xl"
               />
            </div>
            {/* Geometric accent */}
            <div className="absolute -z-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[110%] h-[90%] border-2 border-terracotta-200 rounded-sm"></div>
          </div>

          <div className="space-y-6">
            <span className="text-terracotta-600 font-bold uppercase tracking-widest text-sm">Our Story</span>
            <h2 className="font-serif text-4xl md:text-5xl text-gray-900 font-bold leading-tight">
              Traditional Flavors, <br/> Modern Hospitality
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              La Kasbah is more than just a restaurant; it is a gateway to the rich cultural heritage of Morocco. Nestled in a warm, inviting space designed to mimic the intricate architecture of Marrakech, we serve time-honored recipes passed down through generations.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              From our slow-cooked tagines, bursting with the sweetness of fruits and the depth of savory spices, to our fluffy, hand-rolled couscous, every dish tells a story. We believe in the magic of sharing a meal, the ritual of mint tea, and the joy of hospitality.
            </p>
            
            <div className="pt-6 grid grid-cols-3 gap-8 border-t border-gray-200">
               <div className="text-center">
                 <span className="block font-serif text-3xl font-bold text-terracotta-600">20+</span>
                 <span className="text-sm text-gray-500 uppercase tracking-wide">Years of History</span>
               </div>
               <div className="text-center">
                 <span className="block font-serif text-3xl font-bold text-terracotta-600">50+</span>
                 <span className="text-sm text-gray-500 uppercase tracking-wide">Authentic Dishes</span>
               </div>
               <div className="text-center">
                 <span className="block font-serif text-3xl font-bold text-terracotta-600">4.9</span>
                 <span className="text-sm text-gray-500 uppercase tracking-wide">Customer Rating</span>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
