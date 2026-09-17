import React from 'react';
import { Feather, Sparkles } from 'lucide-react';

export default function TheQuietPartSection() {
  return (
    <section id="the-quiet-part" className="py-28 sm:py-36 px-4 sm:px-6 relative z-10">
      <div className="max-w-3xl mx-auto">
        
        <div className="luxury-stationery-frame p-8 sm:p-14 md:p-16 text-center space-y-8 relative overflow-hidden shadow-2xl">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#110C19]/80 border border-[#F4D58D]/30 text-xs font-medium tracking-[0.25em] uppercase text-[#F4D58D]">
            <span>✦</span>
            <span>A QUIET PROMISE</span>
            <span>✦</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-luxury font-medium text-white tracking-tight">
            And Somewhere In All Of This...
          </h2>

          <div className="w-12 h-[1px] bg-gradient-to-r from-transparent via-[#F4D58D]/50 to-transparent mx-auto" />

          {/* Sincere Reflections */}
          <div className="space-y-4 text-slate-200 font-light text-base sm:text-lg md:text-xl leading-relaxed sm:leading-loose max-w-2xl mx-auto">
            
            <p className="text-[#B8AFC0]">I still care about you.</p>
            <p className="text-[#B8AFC0]">I still wonder how you're doing.</p>
            <p className="text-[#B8AFC0]">I still hope life is being kind to you.</p>
            
            <p className="text-xl sm:text-2xl font-serif-luxury italic text-[#F4D58D] font-normal py-2">
              “And yes... I still love you.”
            </p>

            <div className="my-6 p-6 rounded-2xl bg-[#110C19]/85 border border-[#F4D58D]/20 text-center space-y-3">
              <p className="text-white font-medium text-lg sm:text-xl">
                But your birthday isn't a place for me to ask for anything.
              </p>
              <p className="text-[#B8AFC0] font-light">
                So I won't.
              </p>
              <p className="text-sm sm:text-base text-[#E8A5B5] font-serif-luxury italic pt-1">
                No pressure. No expectations. No question waiting at the end of this.
              </p>
              <p className="text-xs uppercase tracking-widest text-[#F4D58D]/80 font-sans pt-2">
                Just a birthday wish.
              </p>
            </div>

          </div>

          <div className="pt-4 flex justify-center items-center gap-2 text-xs uppercase tracking-widest text-[#FFF8EC]/60">
            <Feather className="w-3.5 h-3.5 text-[#F4D58D]" />
            <span>Complete respect for your space</span>
          </div>

        </div>

      </div>
    </section>
  );
}
