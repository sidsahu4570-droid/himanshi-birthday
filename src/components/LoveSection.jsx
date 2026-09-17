import React from 'react';
import { Heart, Feather, Sparkles } from 'lucide-react';

export default function LoveSection() {
  return (
    <section id="love-truth" className="py-28 sm:py-36 px-4 sm:px-6 relative z-10">
      <div className="max-w-3xl mx-auto">
        
        {/* Soft Background Candle Glow */}
        <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-full max-w-2xl h-96 candle-glow-strong blur-[140px] rounded-full pointer-events-none" />

        <div className="luxury-birthday-frame p-8 sm:p-14 md:p-16 text-center space-y-8 relative overflow-hidden shadow-2xl">
          
          {/* Heart Icon Badge */}
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="h-[1px] w-8 bg-[#F4D58D]/40" />
            <Heart className="w-4 h-4 text-[#E8A5B5] fill-[#E8A5B5]/30 animate-pulse" />
            <span className="h-[1px] w-8 bg-[#F4D58D]/40" />
          </div>

          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#120D1C]/80 border border-[#F4D58D]/30 text-xs font-medium tracking-[0.25em] uppercase text-[#F4D58D]">
              <span>✦</span>
              <span>FROM THE HEART</span>
              <span>✦</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-luxury font-medium text-white tracking-tight">
              One Thing I Won't Pretend About
            </h2>
          </div>

          <div className="w-12 h-[1px] bg-gradient-to-r from-transparent via-[#F4D58D]/50 to-transparent mx-auto" />

          {/* Core Love Declaration */}
          <div className="space-y-6 text-slate-200 font-light text-base sm:text-lg md:text-xl leading-relaxed sm:leading-loose text-left sm:text-center max-w-2xl mx-auto">
            
            {/* Glowing Sincere Callout */}
            <div className="my-6 py-6 px-6 sm:px-8 rounded-2xl bg-[#1A1326]/80 border border-[#E8A5B5]/35 text-center shadow-lg">
              <p className="text-3xl sm:text-4xl font-serif-luxury font-medium rose-gradient tracking-wide">
                I still love you.
              </p>
            </div>

            <p className="text-slate-300">
              No dramatic speech around it.<br />
              No expectation attached to it.<br />
              Just the simple, honest truth.
            </p>

            <p className="text-lg sm:text-xl font-serif-luxury italic text-[#F4D58D] py-2">
              “Some feelings don't disappear simply because life becomes different.”
            </p>

            <div className="py-2 text-[#FFF8EC]">
              <p>And I don't need you to do anything with that feeling.</p>
              <p className="font-medium pt-1 text-[#E8A5B5]">I just wanted you to know.</p>
            </div>

          </div>

          <div className="pt-6 border-t border-white/[0.08] flex justify-center items-center gap-2 text-xs uppercase tracking-widest text-[#FFF8EC]/60">
            <Feather className="w-3.5 h-3.5 text-[#F4D58D]" />
            <span>Honest • Respectful • Free of expectation</span>
          </div>

        </div>

      </div>
    </section>
  );
}
