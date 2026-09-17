import React from 'react';
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
        aria-label={isMusicPlaying ? "Mute ambient music" : "Play ambient music"}
        className="group relative flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#110C19]/80 backdrop-blur-md border border-[#F4D58D]/30 hover:border-[#F4D58D]/70 transition-all duration-400 shadow-lg hover:shadow-[#F4D58D]/15 active:scale-95 cursor-pointer text-[#F4D58D]"
      >
        <span className="text-sm transition-transform duration-300 group-hover:scale-110">
          ♫
        </span>

        <span className="text-[11px] tracking-[2px] uppercase font-sans font-medium text-[#FFF8EC]/85 group-hover:text-[#F4D58D] transition-colors">
          {isMusicPlaying ? 'MUSIC ON' : 'MUSIC'}
        </span>

        {isMusicPlaying && (
          <div className="flex items-end gap-0.5 h-2.5 ml-0.5">
            <span className="w-0.5 bg-[#F4D58D] rounded-full animate-pulse h-2" style={{ animationDelay: '0ms' }}></span>
            <span className="w-0.5 bg-[#E8A5B5] rounded-full animate-pulse h-2.5" style={{ animationDelay: '150ms' }}></span>
            <span className="w-0.5 bg-[#F4D58D] rounded-full animate-pulse h-1.5" style={{ animationDelay: '300ms' }}></span>
          </div>
        )}
      </button>
    </div>
  );
}
