import React from 'react';
import { Sparkles, Heart, ChevronDown } from 'lucide-react';

export default function HeroSection({ onScrollDown }) {
  return (
    <section className="min-h-screen relative flex flex-col justify-center items-center text-center px-6 py-20 z-10">
      <div className="max-w-3xl mx-auto space-y-10 animate-fade-in">
        
        {/* Soft Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card border border-rose-400/20 text-xs sm:text-sm font-medium tracking-[0.2em] uppercase text-rose-300/90 shadow-lg">
          <Sparkles className="w-3.5 h-3.5 text-amber-300" />
          <span>A Birthday Wish From The Heart</span>
        </div>

        {/* Poetic Opening Lines */}
        <div className="space-y-6">
          <p className="text-xl sm:text-2xl md:text-3xl font-serif-luxury italic text-slate-300/90 font-normal leading-relaxed tracking-wide">
            “Some people remain special,<br />
            even when life becomes different.”
          </p>

          <p className="text-base sm:text-lg text-slate-400 font-light max-w-lg mx-auto leading-relaxed">
            And today, I just wanted to wish one of those people the happiest birthday.
          </p>
        </div>

        {/* The Big Birthday Reveal */}
        <div className="pt-4 pb-2 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-32 bg-rose-500/15 blur-3xl rounded-full pointer-events-none" />
          
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif-luxury font-medium tracking-tight text-white leading-[1.15]">
            Happy Birthday, <br className="sm:hidden" />
            <span className="rose-gradient-text font-semibold">Himanshi</span>{' '}
            <span className="inline-block text-rose-400 animate-pulse">❤️</span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl font-light text-champagne-300/90 tracking-wide font-serif-luxury italic">
            “Today, I just wanted to celebrate the person you are.”
          </p>
        </div>

        {/* Gentle Divider / Indicator */}
        <div className="pt-10 flex flex-col items-center gap-3">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-500 font-medium">
            Scroll gently
          </p>
          <button
            onClick={onScrollDown}
            className="p-3 rounded-full glass-card hover:border-rose-400/30 text-slate-400 hover:text-white transition-all duration-300 animate-bounce cursor-pointer"
            aria-label="Scroll to next section"
          >
            <ChevronDown className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
