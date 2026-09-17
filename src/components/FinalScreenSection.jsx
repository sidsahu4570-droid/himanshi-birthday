import React from 'react';
import { Moon } from 'lucide-react';

export default function FinalScreenSection() {
  return (
    <footer className="py-36 sm:py-52 px-4 sm:px-6 relative z-10 text-center border-t border-white/[0.06] bg-gradient-to-b from-transparent via-[#070711]/80 to-[#030308]">
      <div className="max-w-2xl mx-auto space-y-16">
        
        {/* Glowing Full Moon */}
        <div className="flex justify-center">
          <div className="relative inline-flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 rounded-full moon-crescent moon-glow shadow-2xl group">
            <div className="absolute inset-0 rounded-full bg-white/20 blur-md pointer-events-none" />
            <Moon className="w-8 h-8 text-[#070711]/70" />
          </div>
        </div>

        {/* Closing Birthday Reflections */}
        <div className="space-y-8 text-slate-300 font-light text-lg sm:text-xl md:text-2xl leading-relaxed">
          
          <h3 className="text-3xl sm:text-5xl md:text-6xl font-serif-luxury font-medium text-white tracking-wide">
            Happy Birthday, Himanshi <span className="text-[#E8A5B5] inline-block">❤️</span>
          </h3>

          <div className="w-10 h-[1px] bg-[#F4D58D]/30 mx-auto my-6" />

          <p className="font-serif-luxury text-[#B8AFC0]">
            May life be gentle with you.
          </p>

          <p className="font-serif-luxury text-[#F4D58D]">
            May you always have reasons to smile.
          </p>

          <p className="font-serif-luxury italic text-[#E8A5B5]">
            “And may this year surprise you in all the best ways.”
          </p>

          <div className="pt-10">
            <p className="text-xs uppercase tracking-[0.3em] text-[#FFF8EC]/40 font-sans">
              ✦ That's my birthday wish for you ✦
            </p>
          </div>

        </div>

      </div>
    </footer>
  );
}
