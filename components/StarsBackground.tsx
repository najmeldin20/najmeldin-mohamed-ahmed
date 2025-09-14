
import React, { useEffect, useRef } from 'react';

export const StarsBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInitialized = useRef(false);

  useEffect(() => {
    if (isInitialized.current || !containerRef.current) return;

    const starsContainer = containerRef.current;
    const starsCount = 150;

    for (let i = 0; i < starsCount; i++) {
      const star = document.createElement('div');
      star.className = 'absolute bg-white rounded-full';
      
      const size = Math.random() * 3;
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;
      
      const animationDelay = `${Math.random() * 5}s`;
      star.style.animation = `twinkle 5s infinite ease-in-out ${animationDelay}`;
      
      starsContainer.appendChild(star);
    }
    isInitialized.current = true;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div ref={containerRef} className="fixed top-0 left-0 w-full h-full -z-10" />;
};
