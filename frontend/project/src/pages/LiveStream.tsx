import React from 'react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Radio, Users, Heart, Share2, MessageSquare, Send } from 'lucide-react';

export const LiveStream: React.FC = () => {
  return (
    <div className="pt-24 pb-10 px-4 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        
        {/* Video Player Section */}
        <div className="lg:col-span-3 space-y-6">
          <div className="aspect-video bg-black rounded-3xl relative overflow-hidden group shadow-2xl">
            <div className="absolute top-6 left-6 flex items-center gap-2 px-3 py-1 bg-red-600 text-white text-xs font-bold rounded-md animate-pulse">
              <Radio className="w-3 h-3" />
              LIVE
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
              <h2 className="text-2xl font-bold text-white mb-2">Afternoon Freestyle Session with DJ X</h2>
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2 text-white/90 text-sm">
                  <Users className="w-4 h-4" />
                  <span>12.4k watching</span>
                </div>
                <div className="flex items-center gap-2 text-white/90 text-sm">
                  <Heart className="w-4 h-4" />
                  <span>45k likes</span>
                </div>
              </div>
            </div>
            {/* Play overlay mock */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center">
                <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-white border-b-[10px] border-b-transparent ml-1"></div>
              </div>
            </div>
          </div>

          <Card className="p-6">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gcr8-purple-950/10 dark:bg-white/10 flex items-center justify-center font-bold text-gcr8-purple-600">DX</div>
                <div>
                  <h3 className="font-bold">DJ X Official</h3>
                  <p className="text-sm text-gray-500">240k followers</p>
                </div>
                <Button size="sm" className="ml-4 rounded-full">Follow</Button>
              </div>
              <div className="flex gap-2">
                <Button variant="secondary" size="sm" className="rounded-full">
                  <Share2 className="w-4 h-4 mr-2" /> Share
                </Button>
              </div>
            </div>
          </Card>
        </div>

        {/* Chat Section */}
        <div className="lg:col-span-1 h-[calc(100vh-12rem)] min-h-[500px]">
          <Card className="h-full flex flex-col overflow-hidden">
            <div className="p-4 border-b border-gray-100 dark:border-white/5 flex items-center gap-2">
              <MessageSquare className="w-4 h-4 text-gcr8-purple-600" />
              <h3 className="font-bold text-sm">Live Chat</h3>
            </div>
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              <ChatMessage user="Aria" message="That beat is fire! 🔥" />
              <ChatMessage user="Kojo" message="Drop the link to the pack" />
              <ChatMessage user="Sarah" message="Nigeria to the world! 🇳🇬" />
              <ChatMessage user="Mike" message="Love from London 🇬🇧" />
              <ChatMessage user="Aria" message="Drop a freestyle please" />
            </div>
            <div className="p-4 border-t border-gray-100 dark:border-white/5">
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Say something..." 
                  className="w-full bg-gray-50 dark:bg-white/5 rounded-xl py-2.5 pl-4 pr-12 text-sm outline-none focus:ring-1 focus:ring-gcr8-purple-600"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 text-gcr8-purple-600 hover:bg-gcr8-purple-600/10 rounded-lg">
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </Card>
        </div>

      </div>
    </div>
  );
};

const ChatMessage: React.FC<{ user: string; message: string }> = ({ user, message }) => (
  <div className="text-sm">
    <span className="font-bold text-gcr8-purple-600 mr-2">{user}</span>
    <span className="text-gray-600 dark:text-gray-300">{message}</span>
  </div>
);
