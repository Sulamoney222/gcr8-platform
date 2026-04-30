import React from 'react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Users, MessageSquare, Globe, Shield, Zap, Plus } from 'lucide-react';

export const Collective: React.FC = () => {
  return (
    <div className="pt-24 pb-20 px-4 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
        <div>
          <h1 className="text-4xl font-display font-bold text-gcr8-purple-950 dark:text-white mb-2">Creative Collectives</h1>
          <p className="text-gray-500 dark:text-gray-400">Join forces with other creators and build your own tribe.</p>
        </div>
        <Button className="flex items-center gap-2 rounded-full">
          <Plus className="w-4 h-4" />
          Start a Collective
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Main Feed/Grid */}
        <div className="lg:col-span-2 space-y-6">
          <h2 className="text-xl font-bold mb-4">Trending Collectives</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <CollectiveCard 
              name="Afro-Futurists" 
              members="1.2k" 
              desc="A space for digital artists exploring African culture through sci-fi and tech."
              tags={['Digital Art', 'Sci-Fi']}
            />
            <CollectiveCard 
              name="Beat Smiths" 
              members="4.5k" 
              desc="The ultimate hub for producers and sound designers sharing sample packs and workflows."
              tags={['Production', 'Sound Design']}
            />
            <CollectiveCard 
              name="Stage Ready" 
              members="850" 
              desc="Connecting performers with event organizers and live session opportunities."
              tags={['Live Performance', 'Events']}
            />
            <CollectiveCard 
              name="Indie Film Hub" 
              members="2.1k" 
              desc="Collaborative space for cinematographers, editors, and directors."
              tags={['Video', 'Film']}
            />
          </div>
        </div>

        {/* Sidebar / Recommendations */}
        <div className="lg:col-span-1 space-y-6">
          <Card className="p-6">
            <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
              <Zap className="w-5 h-5 text-yellow-500" />
              Community Perks
            </h3>
            <ul className="space-y-4">
              <PerkItem 
                icon={<MessageSquare className="w-4 h-4" />} 
                title="Exclusive Chats" 
                desc="Direct access to top industry mentors."
              />
              <PerkItem 
                icon={<Globe className="w-4 h-4" />} 
                title="Global Collabs" 
                desc="Find partners for your next big project."
              />
              <PerkItem 
                icon={<Shield className="w-4 h-4" />} 
                title="Safe Space" 
                desc="Moderated environments for constructive feedback."
              />
            </ul>
            <Button variant="secondary" className="w-full mt-6">Explore Benefits</Button>
          </Card>

          <Card className="p-6 bg-gcr8-purple-950 text-white dark:bg-white dark:text-gcr8-purple-950">
            <h3 className="font-bold text-lg mb-2">Build Your Tribe</h3>
            <p className="text-sm opacity-80 mb-4">Starting a collective gives you tools to manage memberships and shared assets.</p>
            <Button className="w-full bg-white text-gcr8-purple-950 dark:bg-gcr8-purple-950 dark:text-white">Learn More</Button>
          </Card>
        </div>

      </div>
    </div>
  );
};

const CollectiveCard: React.FC<{ name: string; members: string; desc: string; tags: string[] }> = ({ name, members, desc, tags }) => (
  <Card className="p-6 hover:border-gcr8-purple-600 transition-all group">
    <div className="flex justify-between items-start mb-4">
      <div className="w-12 h-12 rounded-2xl bg-gcr8-purple-950/5 dark:bg-white/5 flex items-center justify-center">
        <Users className="w-6 h-6 text-gcr8-purple-600" />
      </div>
      <div className="text-xs font-bold text-gray-400 flex items-center gap-1">
        <Users className="w-3 h-3" />
        {members}
      </div>
    </div>
    <h3 className="font-bold text-xl mb-2 group-hover:text-gcr8-purple-600 transition-colors">{name}</h3>
    <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 line-clamp-2">{desc}</p>
    <div className="flex flex-wrap gap-2 mb-6">
      {tags.map(tag => (
        <span key={tag} className="px-2 py-0.5 rounded-md bg-gray-50 dark:bg-white/5 text-[10px] font-bold text-gray-500">{tag}</span>
      ))}
    </div>
    <Button variant="secondary" size="sm" className="w-full bg-gcr8-purple-950 text-white dark:bg-white dark:text-gcr8-purple-950 hover:bg-gcr8-purple-950/90 dark:hover:bg-white/90">Join Collective</Button>
  </Card>
);

const PerkItem: React.FC<{ icon: React.ReactNode; title: string; desc: string }> = ({ icon, title, desc }) => (
  <li className="flex gap-3">
    <div className="mt-1 text-gcr8-purple-600">{icon}</div>
    <div>
      <div className="text-sm font-bold">{title}</div>
      <div className="text-xs text-gray-500">{desc}</div>
    </div>
  </li>
);
