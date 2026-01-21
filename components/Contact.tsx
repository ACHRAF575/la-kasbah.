import React from 'react';
import { MapPin, Phone, Clock, ExternalLink } from 'lucide-react';
import { MAPS_LINK, PHONE_NUMBER, ADDRESS } from '../constants';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="bg-terracotta-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          
          {/* Info Side */}
          <div className="space-y-8">
            <div>
              <span className="text-terracotta-300 font-bold uppercase tracking-widest text-sm">Visit Us</span>
              <h2 className="mt-2 font-serif text-4xl font-bold">Reservations & Location</h2>
              <p className="mt-4 text-terracotta-100 leading-relaxed">
                We accept reservations for dinner. Walk-ins are welcome for lunch. 
                Experience the magic of the Kasbah in person.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-terracotta-400 mt-1" />
                <div>
                  <h3 className="font-bold text-lg">Address</h3>
                  <p className="text-terracotta-200">{ADDRESS}</p>
                  <a 
                    href={MAPS_LINK} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-terracotta-300 hover:text-white mt-2 transition-colors text-sm font-medium"
                  >
                    Get Directions on Google Maps <ExternalLink className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-terracotta-400 mt-1" />
                <div>
                  <h3 className="font-bold text-lg">Phone</h3>
                  <p className="text-terracotta-200">{PHONE_NUMBER}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-terracotta-400 mt-1" />
                <div>
                  <h3 className="font-bold text-lg">Opening Hours</h3>
                  <div className="text-terracotta-200 grid grid-cols-2 gap-x-8 gap-y-1">
                    <span>Mon - Thu</span>
                    <span>12:00 PM - 10:00 PM</span>
                    <span>Fri - Sat</span>
                    <span>12:00 PM - 11:00 PM</span>
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map Visual Placeholder */}
          <div className="relative h-[400px] w-full rounded-lg overflow-hidden border-2 border-terracotta-700 shadow-2xl group">
             {/* Using a static map image for aesthetics, linked to the real map */}
             <img 
               src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=1200" 
               alt="Map Location Context" 
               className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-40"
             />
             <div className="absolute inset-0 flex items-center justify-center">
                <a 
                  href={MAPS_LINK}
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="bg-white text-terracotta-900 px-6 py-3 rounded-full font-bold shadow-lg transform transition-transform hover:scale-105 flex items-center gap-2"
                >
                  <MapPin className="w-5 h-5 text-terracotta-600" />
                  Open in Google Maps
                </a>
             </div>
             <div className="absolute bottom-4 left-4 bg-black/70 p-4 rounded text-xs text-gray-300 max-w-xs backdrop-blur-sm">
                <p>Located near the city center. Parking available nearby.</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
