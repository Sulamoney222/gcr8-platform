import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { ArrowRight, Sparkles, Zap, Users, Ticket } from 'lucide-react';

export const Landing: React.FC = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-gcr8-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 -right-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gcr8-purple-950/5 dark:bg-white/5 border border-gcr8-purple-950/10 dark:border-white/10 text-sm font-semibold text-gcr8-purple-600 dark:text-gcr8-purple-400 mb-6">
              <Sparkles className="w-4 h-4" />
              The Future of Creative Economy
            </span>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-gcr8-purple-950 dark:text-white mb-8 tracking-tight">
              Turn Your Talent Into <br />
              <span className="bg-gradient-to-r from-gcr8-purple-600 to-purple-400 bg-clip-text text-transparent">Sustainable Income</span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-10 leading-relaxed">
              G'Cr8 bridges the gap between creativity and economic opportunity. 
              Monetize your skills, build global communities, and showcase your work 
              on the ultimate ecosystem for creatives.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="group" isLoading={false}>
                Start Your Portfolio
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="secondary">
                Explore Marketplace
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4 bg-gray-50/50 dark:bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Zap className="w-6 h-6 text-yellow-500" />}
              title="Live Sessions"
              description="Perform live, host podcasts, or stream freestyles directly to your fans."
            />
            <FeatureCard 
              icon={<Users className="w-6 h-6 text-blue-500" />}
              title="Community Hub"
              description="Build deep connections with your audience through dedicated social spaces."
            />
            <FeatureCard 
              icon={<Ticket className="w-6 h-6 text-purple-500" />}
              title="Smart Ticketing"
              description="Sell tickets for physical events and virtual shows with zero friction."
            />
          </div>
        </div>
      </section>

      {/* Stats Preview */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <Card glass className="p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold mb-8">Track Every Move</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <StatItem label="Active Creators" value="12k+" />
              <StatItem label="Global Fans" value="2.4M" />
              <StatItem label="Revenue Paid" value="$15M" />
              <StatItem label="Daily Streams" value="850k" />
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
  <Card className="p-8 hover:-translate-y-2 transition-transform duration-300">
    <div className="w-12 h-12 rounded-2xl bg-gray-50 dark:bg-white/5 flex items-center justify-center mb-6">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-3">{title}</h3>
    <p className="text-gray-500 dark:text-gray-400 line-height-relaxed">{description}</p>
  </Card>
);

const StatItem: React.FC<{ label: string; value: string }> = ({ label, value }) => (
  <div>
    <div className="text-3xl font-display font-bold text-gcr8-purple-600 mb-1">{value}</div>
    <div className="text-sm text-gray-500 dark:text-gray-400 font-medium">{label}</div>
  </div>
);
