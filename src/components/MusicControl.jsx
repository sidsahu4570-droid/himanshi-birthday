import React from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { soundscape } from '../utils/audioGenerator';

export default function MusicControl({ isMusicPlaying, setIsMusicPlaying }) {
  const toggleMusic = () => {
    const nextState = soundscape.toggle();
    setIsMusicPlaying(nextState);
  };

  return (
    <div className="fixed top-5 right-5 z-50">
      <button
        onClick={toggleMusic}
        aria-label={isMusicPlaying ? "Mute ambient soundscape" : "Play ambient soundscape"}
        className="group relative flex items-center gap-2.5 px-3.5 py-2 rounded-full glass-panel border border-white/10 hover:border-[#dfb980]/40 transition-all duration-300 shadow-lg active:scale-95"
      >
        <span className="relative flex h-2.5 w-2.5">
          {isMusicPlaying && (
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#fb7185] opacity-75"></span>
          )}
          <span
            className={`relative inline-flex rounded-full h-2.5 w-2.5 ${
              isMusicPlaying ? 'bg-[#fb7185]' : 'bg-white/30'
            }`}
          ></span>
        </span>

        {isMusicPlaying ? (
          <Volume2 className="w-4 h-4 text-[#ebd49c] transition-transform group-hover:scale-110" />
        ) : (
          <VolumeX className="w-4 h-4 text-slate-400 transition-transform group-hover:scale-110" />
        )}

        <span className="text-xs tracking-wider uppercase font-medium text-slate-300 group-hover:text-white transition-colors hidden sm:inline">
          {isMusicPlaying ? 'Sound ON' : 'Play Sound'}
        </span>

        {isMusicPlaying && (
          <div className="flex items-end gap-0.5 h-3">
            <span className="w-0.5 bg-[#dfb980] rounded-full animate-pulse h-2" style={{ animationDelay: '0ms' }}></span>
            <span className="w-0.5 bg-[#fb7185] rounded-full animate-pulse h-3" style={{ animationDelay: '150ms' }}></span>
            <span className="w-0.5 bg-[#dfb980] rounded-full animate-pulse h-1.5" style={{ animationDelay: '300ms' }}></span>
          </div>
        )}
      </button>
    </div>
  );
}
