import React from 'react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Calendar, MapPin, Ticket, Clock, Share2, Filter } from 'lucide-react';

export const Events: React.FC = () => {
  return (
    <div className="pt-24 pb-20 px-4 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
        <div>
          <h1 className="text-4xl font-display font-bold text-gcr8-purple-950 dark:text-white mb-2">Shows & Events</h1>
          <p className="text-gray-500 dark:text-gray-400">Discover live performances, workshops, and creative meetups.</p>
        </div>
        <div className="flex gap-3">
          <Button variant="secondary" className="flex items-center gap-2">
            <Filter className="w-4 h-4" />
            Filter
          </Button>
          <Button className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            Host an Event
          </Button>
        </div>
      </div>

      {/* Featured Event */}
      <Card className="relative overflow-hidden mb-12 group cursor-pointer border-none shadow-2xl">
        <div className="aspect-[21/9] bg-gcr8-purple-950 flex items-center justify-center overflow-hidden">
          {/* Mock banner background */}
          <div className="absolute inset-0 bg-gradient-to-r from-gcr8-purple-950 via-gcr8-purple-950/80 to-transparent z-10"></div>
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-40 group-hover:scale-105 transition-transform duration-700"></div>
          
          <div className="relative z-20 w-full p-8 md:p-16 flex flex-col md:flex-row justify-between items-end md:items-center gap-8">
            <div className="max-w-xl">
              <span className="px-3 py-1 rounded-full bg-gcr8-purple-600 text-white text-xs font-bold mb-4 inline-block">FEATURED EVENT</span>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">G'Cr8 Summer Fest 2026</h2>
              <div className="flex flex-wrap gap-6 text-white/80 text-sm mb-6">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>July 15-17, 2026</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>Lagos, Nigeria + Virtual</span>
                </div>
              </div>
              <div className="flex gap-4">
                <Button size="lg" className="bg-white text-gcr8-purple-950 hover:bg-gray-100">Get Tickets</Button>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">Learn More</Button>
              </div>
            </div>
            <Card glass className="p-6 hidden md:block">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">240</div>
                <div className="text-[10px] font-bold text-white/60 tracking-widest uppercase">Days Left</div>
              </div>
            </Card>
          </div>
        </div>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <EventCard 
          title="Digital Art Masterclass" 
          date="May 20" 
          time="4:00 PM" 
          location="Online" 
          price="$25"
        />
        <EventCard 
          title="Underground Beats Night" 
          date="June 05" 
          time="10:00 PM" 
          location="Berlin, DE" 
          price="$45"
        />
        <EventCard 
          title="Creative Poetry Slam" 
          date="June 12" 
          time="6:00 PM" 
          location="London, UK" 
          price="Free"
        />
      </div>
    </div>
  );
};

const EventCard: React.FC<{ title: string; date: string; time: string; location: string; price: string }> = ({ title, date, time, location, price }) => (
  <Card className="overflow-hidden group hover:shadow-xl transition-shadow duration-300">
    <div className="aspect-video bg-gray-100 dark:bg-white/5 relative">
       <div className="absolute top-4 left-4 px-3 py-1 rounded-lg bg-white/90 dark:bg-gcr8-purple-950/90 backdrop-blur-sm text-center">
         <div className="text-xs font-bold text-gcr8-purple-600 uppercase">{date.split(' ')[0]}</div>
         <div className="text-lg font-display font-bold leading-none">{date.split(' ')[1]}</div>
       </div>
       <button className="absolute top-4 right-4 p-2 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-md transition-colors">
         <Share2 className="w-4 h-4 text-white" />
       </button>
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold mb-4 group-hover:text-gcr8-purple-600 transition-colors">{title}</h3>
      <div className="space-y-3 mb-6">
        <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
          <Clock className="w-4 h-4" />
          <span>{time}</span>
        </div>
        <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
          <MapPin className="w-4 h-4" />
          <span>{location}</span>
        </div>
      </div>
      <div className="flex justify-between items-center pt-4 border-t border-gray-50 dark:border-white/5">
        <div className="flex items-center gap-2 font-bold text-gcr8-purple-950 dark:text-white">
          <Ticket className="w-4 h-4 text-gcr8-purple-600" />
          {price}
        </div>
        <Button size="sm">Book Now</Button>
      </div>
    </div>
  </Card>
);
