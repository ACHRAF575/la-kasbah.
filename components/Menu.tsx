import React, { useState } from 'react';
import { MENU_ITEMS } from '../constants';
import { MenuItem } from '../types';
import { Star } from 'lucide-react';

const Menu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'starters', label: 'Starters' },
    { id: 'tagines', label: 'Tagines' },
    { id: 'couscous', label: 'Couscous' },
    { id: 'desserts', label: 'Desserts & Tea' },
  ];

  const filteredItems = activeCategory === 'all' 
    ? MENU_ITEMS 
    : MENU_ITEMS.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-terracotta-600 font-bold uppercase tracking-widest text-sm">Discover Our Food</span>
          <h2 className="mt-2 font-serif text-4xl md:text-5xl text-gray-900 font-bold">The Menu</h2>
          <div className="w-24 h-1 bg-terracotta-500 mx-auto mt-6"></div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat.id
                  ? 'bg-terracotta-600 text-white shadow-lg scale-105'
                  : 'bg-sand text-gray-600 hover:bg-terracotta-100'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
          {filteredItems.map((item: MenuItem) => (
            <div key={item.id} className="group relative flex justify-between items-start border-b border-gray-100 pb-6 hover:bg-sand/50 transition-colors p-4 rounded-lg">
              <div className="flex-1 pr-4">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-serif text-xl font-bold text-gray-900 group-hover:text-terracotta-700 transition-colors">
                    {item.name}
                  </h3>
                  {item.popular && (
                    <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-terracotta-100 text-terracotta-800">
                      <Star className="w-3 h-3 mr-1 fill-current" /> Popular
                    </span>
                  )}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
              </div>
              <div className="flex-shrink-0">
                <span className="font-bold text-terracotta-600 text-lg">{item.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
