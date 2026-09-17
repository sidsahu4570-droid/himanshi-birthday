import React from 'react';
import { Sparkles, Heart } from 'lucide-react';

export default function LittleSecretSection() {
  return (
    <section id="little-secret" className="py-24 sm:py-36 px-4 sm:px-6 relative z-10">
      <div className="max-w-3xl mx-auto">
        
        <div className="luxury-stationery-frame p-8 sm:p-14 md:p-16 text-center space-y-8 relative overflow-hidden shadow-2xl">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#110C19]/80 border border-[#F4D58D]/30 text-xs font-medium tracking-[0.25em] uppercase text-[#F4D58D]">
            <Sparkles className="w-3.5 h-3.5 text-[#F4D58D]" />
            <span>A Quiet Thought</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-luxury font-medium text-white tracking-tight">
            Can I Tell You Something?
          </h2>

          <div className="w-10 h-[1px] bg-gradient-to-r from-transparent via-[#F4D58D]/50 to-transparent mx-auto" />

          <div className="space-y-6 text-slate-200/90 font-light text-base sm:text-lg md:text-xl leading-relaxed sm:leading-loose max-w-2xl mx-auto">
            
            <p className="text-[#B8AFC0]">
              I've realised that some people don't have to do something extraordinary to become extraordinary to someone.
            </p>

            <p className="text-2xl sm:text-3xl font-serif-luxury italic text-[#F4D58D] font-normal py-2">
              “Sometimes they just have to be themselves.”
            </p>

            <p className="text-lg sm:text-xl text-white font-medium">
              That's what happened with you.
            </p>

          </div>

          <div className="pt-4 flex justify-center items-center gap-2 text-xs text-[#E8A5B5]/80 font-light tracking-widest uppercase">
            <Heart className="w-3.5 h-3.5 text-[#E8A5B5]" />
            <span>Effortless & Sincere</span>
          </div>

        </div>

      </div>
    </section>
  );
}
