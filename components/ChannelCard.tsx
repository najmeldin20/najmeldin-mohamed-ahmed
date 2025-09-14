
import React from 'react';
import type { Channel } from '../types';

interface ChannelCardProps {
  channel: Channel;
  onWatch: (channel: Channel) => void;
}

const LiveBadge: React.FC = () => (
    <div className="absolute top-4 left-4 bg-gradient-to-r from-red-600 to-red-500 text-white px-4 py-1.5 rounded-full text-sm font-bold shadow-lg" style={{ animation: 'pulse-intense 1.5s infinite' }}>
        مباشر
    </div>
);

export const ChannelCard: React.FC<ChannelCardProps> = ({ channel, onWatch }) => {
  return (
    <div 
        className="bg-gradient-to-br from-[rgba(255,255,255,0.1)] to-[rgba(255,255,255,0.05)] rounded-2xl overflow-hidden shadow-2xl transition-all duration-400 ease-in-out relative backdrop-blur-md border border-[rgba(255,255,255,0.1)] hover:-translate-y-4 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3),_0_0_30px_rgba(255,140,0,0.3)]"
        style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}>
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-orange-500 to-[#1a2a6c] z-10"></div>
      <LiveBadge />
      <img src={channel.imageUrl} alt={channel.name} className="w-full h-48 object-cover border-b-2 border-[rgba(255,255,255,0.1)]" />
      <div className="p-6">
        <h3 className="mb-4 text-white text-2xl font-bold">{channel.name}</h3>
        <p className="text-[rgba(255,255,255,0.8)] text-base mb-5 leading-relaxed h-20 overflow-hidden">
          {channel.description}
        </p>
        <button
          onClick={() => onWatch(channel)}
          className="block w-full bg-gradient-to-br from-orange-500 to-orange-600 text-white text-center py-3 rounded-lg no-underline font-semibold transition-all duration-300 mt-4 shadow-[0_5px_15px_rgba(255,140,0,0.3)] relative overflow-hidden transform hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(255,140,0,0.5)] active:translate-y-0.5 active:shadow-[0_2px_5px_rgba(0,0,0,0.2)]"
        >
          مشاهدة مباشرة
        </button>
      </div>
    </div>
  );
};
