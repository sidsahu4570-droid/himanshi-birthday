import React, { useState } from 'react';
import { Sparkles, Heart } from 'lucide-react';
import { soundscape } from '../utils/audioGenerator';

export default function OpeningScreen({ onOpen, setIsMusicPlaying }) {
  const [isOpening, setIsOpening] = useState(false);

  const handleOpen = () => {
    setIsOpening(true);
    try {
      soundscape.start();
      setIsMusicPlaying(true);
    } catch (e) {
      console.log('Audio autoplay prevented, user can toggle manually');
    }

    setTimeout(() => {
      onOpen();
    }, 900);
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-[#070711]/96 backdrop-blur-2xl transition-all duration-1000 px-4 sm:px-6 ${
        isOpening ? 'opacity-0 pointer-events-none scale-105' : 'opacity-100'
      }`}
    >
      {/* Warm Candlelight Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 candle-glow blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-md w-full text-center relative z-10 space-y-7 sm:space-y-8 animate-fade-in">
        
        {/* Soft Golden Heart Seal */}
        <div className="relative inline-flex items-center justify-center w-18 h-18 sm:w-20 sm:h-20 mb-1 rounded-full luxury-stationery-frame border border-[#F4D58D]/35 shadow-2xl shadow-[#F4D58D]/15 group">
          <Heart className="w-7 h-7 sm:w-8 sm:h-8 text-[#E8A5B5] fill-[#E8A5B5]/20 animate-pulse stroke-[1.5]" />
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#F4D58D] rounded-full animate-ping opacity-75" />
        </div>

        {/* Cinematic Opening Pacing */}
        <div className="space-y-3 sm:space-y-4">
          <p className="text-xl sm:text-2xl font-serif-luxury text-[#FFF8EC]/90 font-medium">
            Hey, Himanshi.
          </p>

          <p className="text-base sm:text-lg text-[#B8AFC0] font-light leading-relaxed">
            Today isn't a day for complicated words.
          </p>

          <p className="text-lg sm:text-xl font-serif-luxury italic text-[#F4D58D]">
            Today is just your day.
          </p>

          <div className="pt-2">
            <h1 className="text-3xl sm:text-4xl font-serif-luxury font-semibold text-white tracking-wide">
              Happy Birthday. <span className="text-[#E8A5B5]">❤️</span>
            </h1>
          </div>
        </div>

        {/* Action Button - In One Line */}
        <div className="pt-2 sm:pt-4">
          <button
            onClick={handleOpen}
            disabled={isOpening}
            className="group relative inline-flex items-center justify-center gap-2 sm:gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-[#F4D58D] via-[#E8A5B5] to-[#F4D58D] text-[#070711] font-semibold text-xs sm:text-sm md:text-base shadow-xl shadow-[#F4D58D]/20 hover:shadow-[#E8A5B5]/35 border border-white/40 hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 cursor-pointer whitespace-nowrap max-w-full"
          >
            <span className="tracking-wide whitespace-nowrap">There's something I made for you</span>
            <Sparkles className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-[#070711] shrink-0 group-hover:rotate-12 transition-transform" />
          </button>
        </div>

        <p className="text-[11px] sm:text-xs text-[#FFF8EC]/40 uppercase tracking-[0.25em] font-light">
          ✦ a private birthday letter ✦
        </p>

      </div>
    </div>
  );
}
