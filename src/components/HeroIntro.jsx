import React from 'react';
import { ChevronDown, Sparkles } from 'lucide-react';

export default function HeroIntro({ onScrollDown }) {
  return (
    <section className="min-h-screen relative flex flex-col justify-center items-center text-center px-4 sm:px-6 pt-14 pb-10 sm:py-16 md:py-20 z-10">
      
      {/* Warm Candlelight Radial Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 candle-glow blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-3xl mx-auto space-y-6 sm:space-y-8 animate-fade-in relative z-10">
        
        {/* Soft Glowing Moon & Badge Combined */}
        <div className="flex flex-col items-center gap-3">
          <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full moon-crescent moon-glow flex items-center justify-center relative shadow-lg">
            <div className="absolute inset-0 rounded-full bg-white/20 blur-sm pointer-events-none" />
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full luxury-birthday-frame border border-[#F4D58D]/30 text-[11px] sm:text-xs font-medium tracking-[0.22em] uppercase text-[#F4D58D] shadow-md">
            <Sparkles className="w-3 h-3 text-[#F4D58D]" />
            <span>A BIRTHDAY GIFT FOR HIMANSHI ❤️</span>
          </div>
        </div>

        {/* Cinematic Pacing Opening Text */}
        <div className="space-y-3 sm:space-y-4 py-1 sm:py-2">
          <p className="text-lg sm:text-2xl md:text-3xl font-serif-luxury italic text-[#FFF8EC]/85 font-light leading-relaxed">
            “Today, I don't want to talk about what happened.”
          </p>

          <p className="text-xl sm:text-3xl md:text-4xl font-serif-luxury text-white font-normal leading-relaxed">
            Today, I just want to celebrate <span className="gold-gradient font-semibold">YOU</span>.
          </p>
        </div>

        {/* Birthday Revelation */}
        <div className="pt-1 pb-1">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif-luxury font-medium tracking-tight text-white leading-tight">
            Happy Birthday, <br className="sm:hidden" />
            <span className="rose-gradient font-bold">Himanshi</span>{' '}
            <span className="inline-block text-[#E8A5B5] animate-pulse">❤️</span>
          </h1>
        </div>

        {/* Scroll Indicator */}
        <div className="pt-4 sm:pt-6 flex flex-col items-center gap-2">
          <p className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#FFF8EC]/50 font-sans">
            Scroll gently
          </p>
          <button
            onClick={onScrollDown}
            className="p-2.5 sm:p-3 rounded-full luxury-birthday-frame hover:border-[#F4D58D]/60 text-[#F4D58D] hover:text-white transition-all duration-300 animate-bounce cursor-pointer shadow-md"
            aria-label="Scroll to begin experience"
          >
            <ChevronDown className="w-4 h-4 text-[#F4D58D]" />
          </button>
        </div>

      </div>
    </section>
  );
}
