import { MenuItem } from './types';

export const RESTAURANT_NAME = "La Kasbah";
export const MAPS_LINK = "https://maps.app.goo.gl/Z4Lo9ja4siWZB6ybA";
export const PHONE_NUMBER = "+1 555-0123"; // Placeholder
export const ADDRESS = "123 Spice Market St, Culinary District"; // Placeholder based on link context usually needed, but we'll use generic

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 's1',
    name: 'Harira Soup',
    description: 'Traditional Moroccan soup with lentils, chickpeas, tomatoes, and aromatic herbs.',
    price: '$9.00',
    category: 'starters',
    popular: true,
  },
  {
    id: 's2',
    name: 'Zaalouk',
    description: 'Roasted eggplant spread with tomatoes, garlic, cumin, and olive oil. Served with bread.',
    price: '$11.00',
    category: 'starters',
  },
  {
    id: 's3',
    name: 'Chicken Pastilla',
    description: 'Sweet and savory pastry filled with shredded chicken, almonds, and cinnamon, dusted with powdered sugar.',
    price: '$14.00',
    category: 'starters',
    popular: true,
  },
  {
    id: 't1',
    name: 'Lamb Tagine with Prunes',
    description: 'Slow-cooked lamb shank with sweet prunes, toasted almonds, and sesame seeds.',
    price: '$24.00',
    category: 'tagines',
    popular: true,
  },
  {
    id: 't2',
    name: 'Chicken Tagine with Preserved Lemon',
    description: 'Braised chicken with preserved lemons, green olives, and saffron onions.',
    price: '$21.00',
    category: 'tagines',
  },
  {
    id: 't3',
    name: 'Kefta Tagine',
    description: 'Seasoned beef meatballs poached in a rich tomato sauce, topped with poached eggs.',
    price: '$20.00',
    category: 'tagines',
  },
  {
    id: 'c1',
    name: 'Couscous Royal',
    description: 'The ultimate feast. Fluffy couscous served with lamb, chicken, merguez sausage, and seven vegetables.',
    price: '$28.00',
    category: 'couscous',
    popular: true,
  },
  {
    id: 'c2',
    name: 'Vegetable Couscous',
    description: 'Steamed semolina served with a medley of seasonal root vegetables and chickpeas.',
    price: '$18.00',
    category: 'couscous',
  },
  {
    id: 'd1',
    name: 'Moroccan Mint Tea',
    description: 'Fresh mint tea served traditionally with sugar.',
    price: '$5.00',
    category: 'desserts',
    popular: true,
  },
  {
    id: 'd2',
    name: 'Almond Briouat',
    description: 'Fried honey-dipped pastries filled with almond paste.',
    price: '$8.00',
    category: 'desserts',
  }
];

export const CHAT_SYSTEM_INSTRUCTION = `
You are Amine, the virtual head waiter of La Kasbah, a prestigious Moroccan restaurant. 
Your tone is warm, welcoming, and hospitable. You treat every user as a honored guest.
Your goal is to assist guests with the menu, explain traditional Moroccan dishes, and offer recommendations.

Key Menu Knowledge:
- Tagines are slow-cooked stews named after the clay pot they are cooked in.
- Pastilla is a unique sweet and savory pie.
- Our Couscous Royal is perfect for hungry guests.
- Mint tea is the sign of hospitality.

If asked about location, guide them to the map link provided on the site.
Keep responses concise (under 100 words) but charming.
Do not make up prices not on the menu.
`;
