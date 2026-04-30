import React, { useState } from 'react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Search, ShoppingCart, Tag, Star, Box, Monitor } from 'lucide-react';

const CATEGORIES = [
  { id: 'all', label: 'All Items', icon: <Box className="w-4 h-4" /> },
  { id: 'digital', label: 'Digital Assets', icon: <Monitor className="w-4 h-4" /> },
  { id: 'physical', label: 'Merchandise', icon: <Tag className="w-4 h-4" /> },
  { id: 'tickets', label: 'Event Tickets', icon: <Tag className="w-4 h-4" /> },
];

export const Marketplace: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  return (
    <div className="pt-24 pb-20 px-4 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
        <div>
          <h1 className="text-4xl font-display font-bold text-gcr8-purple-950 dark:text-white mb-2">Creative Marketplace</h1>
          <p className="text-gray-500 dark:text-gray-400">Buy directly from creators. Support the economy.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="secondary" className="flex items-center gap-2">
            <ShoppingCart className="w-4 h-4" />
            My Cart (0)
          </Button>
        </div>
      </div>

      <div className="flex flex-wrap gap-3 mb-10">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
              activeCategory === cat.id
                ? 'bg-gcr8-purple-950 text-white dark:bg-white dark:text-gcr8-purple-950 shadow-md'
                : 'bg-white dark:bg-white/5 text-gray-600 dark:text-gray-400 border border-gray-100 dark:border-white/10 hover:border-gcr8-purple-600'
            }`}
          >
            {cat.icon}
            {cat.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
          <ProductCard key={i} />
        ))}
      </div>
    </div>
  );
};

const ProductCard: React.FC = () => (
  <Card className="flex flex-col h-full overflow-hidden group">
    <div className="aspect-square bg-gray-50 dark:bg-white/5 relative overflow-hidden">
      <div className="absolute top-3 right-3 z-10">
        <span className="px-3 py-1 rounded-full bg-white/90 dark:bg-gcr8-purple-950/90 backdrop-blur-sm text-xs font-bold text-gcr8-purple-950 dark:text-white border border-black/5">
          Digital
        </span>
      </div>
      {/* Mock image placeholder */}
      <div className="w-full h-full flex items-center justify-center text-gcr8-purple-950/5 dark:text-white/5">
        <Monitor className="w-20 h-20" />
      </div>
    </div>
    <div className="p-5 flex-1 flex flex-col">
      <div className="flex justify-between items-start mb-1">
        <h3 className="font-bold text-lg group-hover:text-gcr8-purple-600 transition-colors">Neo-Vibe Sample Pack</h3>
        <div className="flex items-center gap-1 text-yellow-500">
          <Star className="w-4 h-4 fill-current" />
          <span className="text-sm font-bold">4.9</span>
        </div>
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 flex-1">
        High-quality drum kits and synth loops for modern Afrobeat production.
      </p>
      <div className="flex justify-between items-center mt-auto">
        <div>
          <span className="text-xs text-gray-400 block mb-1">Price</span>
          <span className="text-xl font-display font-bold text-gcr8-purple-950 dark:text-white">$45.00</span>
        </div>
        <Button size="sm" className="rounded-full px-4">Buy Now</Button>
      </div>
    </div>
  </Card>
);
