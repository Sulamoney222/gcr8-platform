import React from 'react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Filter, Search, Plus } from 'lucide-react';

export const Portfolio: React.FC = () => {
  return (
    <div className="pt-24 pb-20 px-4 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
        <div>
          <h1 className="text-4xl font-display font-bold text-gcr8-purple-950 dark:text-white mb-2">Creator Portfolios</h1>
          <p className="text-gray-500 dark:text-gray-400">Discover and connect with world-class talent.</p>
        </div>
        <Button className="flex items-center gap-2 rounded-full">
          <Plus className="w-4 h-4" />
          Create Portfolio
        </Button>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input 
            type="text" 
            placeholder="Search creators, skills, or industries..." 
            className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-100 dark:border-white/10 bg-white dark:bg-white/5 focus:ring-2 focus:ring-gcr8-purple-600 outline-none transition-all"
          />
        </div>
        <Button variant="secondary" className="flex items-center gap-2">
          <Filter className="w-4 h-4" />
          Filters
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
          <PortfolioCard key={i} index={i} />
        ))}
      </div>
    </div>
  );
};

const PortfolioCard: React.FC<{ index: number }> = ({ index }) => (
  <Card className="group overflow-hidden">
    <div className="aspect-[4/5] bg-gray-100 dark:bg-white/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
        <Button variant="secondary" size="sm" className="w-full">View Works</Button>
      </div>
      {/* Mock image placeholder */}
      <div className="w-full h-full flex items-center justify-center text-gcr8-purple-950/10 dark:text-white/10">
        <span className="text-6xl font-bold">{index}</span>
      </div>
    </div>
    <div className="p-5">
      <div className="flex justify-between items-start mb-2">
        <h3 className="font-bold text-lg">Alex Rivera</h3>
        <span className="text-xs font-semibold px-2 py-1 rounded-md bg-gcr8-purple-50 dark:bg-white/10 text-gcr8-purple-600 dark:text-purple-400">Digital Artist</span>
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2 mb-4">
        Specializing in futuristic concept art and 3D motion design for the entertainment industry.
      </p>
      <div className="flex items-center gap-3 pt-4 border-t border-gray-50 dark:border-white/5">
        <div className="flex -space-x-2">
          {[1, 2, 3].map((s) => (
            <div key={s} className="w-6 h-6 rounded-full border-2 border-white dark:border-gcr8-dark bg-gray-200" />
          ))}
        </div>
        <span className="text-xs text-gray-400 font-medium">Liked by 2.4k others</span>
      </div>
    </div>
  </Card>
);
