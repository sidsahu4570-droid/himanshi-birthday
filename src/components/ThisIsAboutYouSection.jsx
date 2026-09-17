import React from 'react';
import { Sparkles, Heart } from 'lucide-react';

export default function ThisIsAboutYouSection() {
  return (
    <section id="this-is-about-you" className="py-28 sm:py-36 px-4 sm:px-6 relative z-10">
      
      {/* Background Candle Glow */}
      <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-full max-w-3xl h-96 candle-glow blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-3xl mx-auto">
        
        <div className="luxury-birthday-frame p-8 sm:p-14 md:p-16 relative overflow-hidden text-center space-y-8 shadow-2xl">
          
          {/* Subtle Top Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#120D1C]/80 border border-[#F4D58D]/30 text-xs font-medium tracking-[0.25em] uppercase text-[#F4D58D] shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#F4D58D]" />
            <span>Just For You</span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif-luxury font-medium text-white tracking-tight">
            Today, It's About You.
          </h2>

          <div className="flex items-center justify-center gap-3 py-1">
            <span className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#F4D58D]/40" />
            <span className="text-[#E8A5B5] text-xs">♡</span>
            <span className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#F4D58D]/40" />
          </div>

          {/* Prose Content */}
          <div className="space-y-6 text-slate-200/95 font-light text-base sm:text-lg md:text-xl leading-relaxed sm:leading-loose max-w-2xl mx-auto">
            
            <p className="text-slate-400">
              Not the past.<br />
              Not the things that went wrong.<br />
              Not the things that could have been different.
            </p>

            <p className="text-2xl sm:text-3xl font-serif-luxury text-[#F4D58D] font-normal py-2">
              Just you.
            </p>

            <div className="space-y-3 pt-2 text-[#FFF8EC]">
              <p>The person behind the smile.</p>
              <p>The person with the little habits.</p>
              <p>The person who has her own genuine way of seeing the world.</p>
              <p className="font-serif-luxury italic text-xl sm:text-2xl text-[#E8A5B5] pt-2">
                “The person who can make an ordinary moment feel a little less ordinary.”
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
