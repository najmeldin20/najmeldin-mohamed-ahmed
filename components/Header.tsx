import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="bg-[rgba(26,42,108,0.9)] backdrop-blur-md text-white py-4 text-center shadow-2xl fixed w-full top-0 z-50 border-b-2 border-orange-500">
      <div className="flex items-center justify-center mb-1" style={{ perspective: '1000px' }}>
        <div className="flex items-center" style={{ transformStyle: 'preserve-3d', animation: 'float 6s ease-in-out infinite' }}>
          <i className="fas fa-satellite-dish text-3xl md:text-4xl text-orange-500 ml-3" style={{ textShadow: '0 0 15px rgba(255, 140, 0, 0.7)' }}></i>
          <h1 className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-orange-500 to-yellow-400 bg-clip-text text-transparent" style={{ textShadow: '0 5px 15px rgba(0, 0, 0, 0.2)' }}>
            نجم الدين تي للقنوات الفضائية
          </h1>
        </div>
      </div>
      <p className="text-sm md:text-base">شاهد البث المباشر لأهم القنوات الفضائية</p>
    </header>
  );
};