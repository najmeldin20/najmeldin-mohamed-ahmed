
import React from 'react';
import { ChannelCard } from './ChannelCard';
import type { Channel } from '../types';

interface ChannelSectionProps {
  title: string;
  channels: Channel[];
  onWatchChannel: (channel: Channel) => void;
}

export const ChannelSection: React.FC<ChannelSectionProps> = ({ title, channels, onWatchChannel }) => {
  return (
    <section className="py-8">
      <h2 className="text-center my-8 text-white text-3xl md:text-4xl relative pb-4 font-bold" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.3)' }}>
        {title}
        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-40 h-1 bg-gradient-to-r from-orange-500 to-[#1a2a6c] rounded-full"></span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-8">
        {channels.map((channel) => (
          <ChannelCard key={channel.id} channel={channel} onWatch={onWatchChannel} />
        ))}
      </div>
    </section>
  );
};
