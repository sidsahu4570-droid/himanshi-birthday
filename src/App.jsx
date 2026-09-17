import React, { useState } from 'react';
import StarCanvas from './components/StarCanvas';
import OpeningScreen from './components/OpeningScreen';
import MusicControl from './components/MusicControl';
import HeroIntro from './components/HeroIntro';
import ThisIsAboutYouSection from './components/ThisIsAboutYouSection';
import ThingsIAdmireSection from './components/ThingsIAdmireSection';
import LittleSecretSection from './components/LittleSecretSection';
import LoveSection from './components/LoveSection';
import BirthdayWishesSection from './components/BirthdayWishesSection';
import GiftBoxSection from './components/GiftBoxSection';
import TheQuietPartSection from './components/TheQuietPartSection';
import TheWaitingIdeaSection from './components/TheWaitingIdeaSection';
import BirthdayLetterSection from './components/BirthdayLetterSection';
import FinalScreenSection from './components/FinalScreenSection';

export default function App() {
  const [hasOpened, setHasOpened] = useState(false);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);

  const handleScrollToStart = () => {
    const el = document.getElementById('this-is-about-you');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#070812] text-[#FFF8EC] selection:bg-[#E8A5B5]/30 selection:text-white">
      
      {/* Background Starlight & Bokeh Canvas */}
      <StarCanvas />

      {/* Opening Gate Screen */}
      {!hasOpened && (
        <OpeningScreen
          onOpen={() => setHasOpened(true)}
          setIsMusicPlaying={setIsMusicPlaying}
        />
      )}

      {/* Floating Sound Toggle */}
      <MusicControl
        isMusicPlaying={isMusicPlaying}
        setIsMusicPlaying={setIsMusicPlaying}
      />

      {/* Main Experience Flow */}
      <main
        className={`relative z-10 transition-opacity duration-1000 ${
          hasOpened ? 'opacity-100' : 'opacity-15 pointer-events-none'
        }`}
      >
        <HeroIntro onScrollDown={handleScrollToStart} />
        <ThisIsAboutYouSection />
        <ThingsIAdmireSection />
        <LittleSecretSection />
        <LoveSection />
        <BirthdayWishesSection />
        <GiftBoxSection />
        <TheQuietPartSection />
        <TheWaitingIdeaSection />
        <BirthdayLetterSection />
        <FinalScreenSection />
      </main>

    </div>
  );
}
