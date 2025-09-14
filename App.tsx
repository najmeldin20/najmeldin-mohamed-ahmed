
import React, { useState, useMemo, useEffect, useRef, useCallback } from 'react';
import { Header } from './components/Header';
import { Navbar } from './components/Navbar';
import { Player } from './components/Player';
import { ChannelSection } from './components/ChannelSection';
import { About } from './components/About';
import { Footer } from './components/Footer';
import { StarsBackground } from './components/StarsBackground';
import { SearchBar } from './components/SearchBar';
import { CHANNELS, SECTIONS } from './constants';
import type { Channel, Category } from './types';

const App: React.FC = () => {
  const [playingChannel, setPlayingChannel] = useState<Channel | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeSection, setActiveSection] = useState<Category | 'about'>(SECTIONS[0].id);

  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  const handlePlayChannel = useCallback((channel: Channel) => {
    setPlayingChannel(channel);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleClosePlayer = useCallback(() => {
    setPlayingChannel(null);
  }, []);
  
  const filteredChannels = useMemo(() => {
    if (!searchTerm) {
      return CHANNELS;
    }
    return CHANNELS.filter(
      (channel) =>
        channel.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        channel.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  const channelsByCategory = useMemo(() => {
    return filteredChannels.reduce((acc, channel) => {
      (acc[channel.category] = acc[channel.category] || []).push(channel);
      return acc;
    }, {} as Record<Category, Channel[]>);
  }, [filteredChannels]);


  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id as Category | 'about');
          }
        });
      },
      { rootMargin: '-40% 0px -60% 0px', threshold: 0 }
    );

    const refsToObserve = Object.values(sectionRefs.current).filter((ref): ref is HTMLElement => !!ref);
    
    refsToObserve.forEach((ref) => {
      observer.observe(ref);
    });

    return () => {
      refsToObserve.forEach((ref) => {
        observer.unobserve(ref);
      });
    };
  }, [channelsByCategory]);


  return (
    <div className="bg-gradient-to-br from-[#0d1526] to-[#1a2a6c] text-gray-100 min-h-screen overflow-x-hidden">
      <StarsBackground />
      <Header />
      <Navbar sections={SECTIONS} activeSection={activeSection} />

      <main className="max-w-7xl mx-auto px-5 pt-8">
        <SearchBar searchTerm={searchTerm} onSearchTermChange={setSearchTerm} />

        {playingChannel && (
          <Player channel={playingChannel} onClose={handleClosePlayer} />
        )}

        {SECTIONS.map((section) => (
            channelsByCategory[section.id] && channelsByCategory[section.id].length > 0 && (
            <div key={section.id} id={section.id} ref={(el: HTMLDivElement | null) => { sectionRefs.current[section.id] = el; }}>
              <ChannelSection
                title={section.title}
                channels={channelsByCategory[section.id] || []}
                onWatchChannel={handlePlayChannel}
              />
            </div>
            )
        ))}
        
        <div id="about" ref={(el: HTMLDivElement | null) => { sectionRefs.current['about'] = el; }}>
            <About />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;