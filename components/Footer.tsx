import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-terracotta-950 text-terracotta-200 py-12 border-t border-terracotta-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h2 className="font-serif text-2xl font-bold text-white mb-1">La Kasbah</h2>
          <p className="text-sm opacity-70">Authentic Moroccan Cuisine</p>
        </div>

        <div className="flex space-x-6">
          <a href="#" className="hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
          <a href="#" className="hover:text-white transition-colors"><Facebook className="w-5 h-5" /></a>
          <a href="#" className="hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
        </div>

        <div className="text-center md:text-right text-sm opacity-60">
          <p>&copy; {new Date().getFullYear()} La Kasbah. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
