import React from 'react';
import type { Channel } from '../types';

interface PlayerProps {
  channel: Channel;
  onClose: () => void;
}

export const Player: React.FC<PlayerProps> = ({ channel, onClose }) => {
  return (
    <div className="bg-gradient-to-br from-[rgba(26,42,108,0.9)] to-[rgba(58,81,153,0.9)] rounded-2xl overflow-hidden shadow-2xl my-10 border-2 border-orange-500 backdrop-blur-md">
      <div className="bg-gradient-to-r from-[#1a2a6c] to-[#3a5199] text-white p-5 flex justify-between items-center border-b-2 border-orange-500">
        <h3 className="text-xl font-bold">مشاهدة {channel.name}</h3>
        <button
          onClick={onClose}
          className="bg-none border-none text-white text-2xl cursor-pointer transition-all duration-300 w-10 h-10 rounded-full flex items-center justify-center bg-[rgba(255,255,255,0.1)] hover:bg-[rgba(255,255,255,0.2)] hover:rotate-90"
        >
          <i className="fas fa-times"></i>
        </button>
      </div>
      <iframe
        className="w-full h-[250px] sm:h-[350px] md:h-[500px] border-none"
        src={channel.streamUrl}
        title={channel.name}
        allow="autoplay; encrypted-media; picture-in-picture"
        allowFullScreen
        referrerPolicy="no-referrer"
      ></iframe>
    </div>
  );
};