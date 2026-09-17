import React from 'react';
import { Feather, Heart, Sparkles } from 'lucide-react';

export default function BirthdayLetterSection() {
  return (
    <section id="birthday-letter" className="py-28 sm:py-36 px-4 sm:px-6 relative z-10">
      <div className="max-w-3xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#120D1C]/80 border border-[#F4D58D]/30 text-xs font-medium tracking-[0.25em] uppercase text-[#F4D58D]">
            <span>✦</span>
            <span>A PERSONAL LETTER</span>
            <span>✦</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-luxury font-medium text-white tracking-tight">
            Happy Birthday, Himanshi
          </h2>
        </div>

        {/* Handwritten Style Letter Card */}
        <div className="luxury-birthday-frame p-8 sm:p-14 md:p-16 border border-[#F4D58D]/35 shadow-2xl relative">
          
          <div className="flex items-center justify-between mb-8 pb-6 border-b border-white/[0.08]">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#F4D58D]">
              <Feather className="w-4 h-4" />
              <span>For Your Birthday</span>
            </div>
            <Sparkles className="w-4 h-4 text-[#F4D58D]/70" />
          </div>

          {/* Letter Body */}
          <div className="space-y-6 text-slate-200 font-light text-base sm:text-lg md:text-xl leading-relaxed sm:leading-loose">
            
            <p className="text-2xl sm:text-3xl font-serif-luxury font-medium text-white">
              Dear Himanshi,
            </p>

            <p>
              I spent some time thinking about what I should say today.
            </p>

            <p>
              And I realised I don't want to fill your birthday with heavy things.
            </p>

            <p className="text-white font-medium">
              I just want you to know that you're still someone I care about deeply. Someone I still love.
            </p>

            <p className="text-slate-300">
              And I don't need an answer to that. I don't need you to say anything. I don't need you to make any decision.
            </p>

            <p className="text-[#F4D58D] font-serif-luxury italic text-xl sm:text-2xl py-1">
              Today belongs to you.
            </p>

            <div className="space-y-2.5 pt-2 pl-4 border-l-2 border-[#F4D58D]/40 text-slate-200">
              <p>So I hope you smile.</p>
              <p>I hope you feel loved.</p>
              <p>I hope someone makes you laugh unexpectedly.</p>
              <p>I hope something wonderful happens that you didn't see coming.</p>
              <p>I hope this year gives you a version of yourself you're proud of.</p>
            </div>

            <p className="pt-2 text-slate-300">
              And if life takes you somewhere I can't follow, I will still hope that wherever you are, you're happy.
            </p>

            <p className="text-slate-400">
              That's all.
            </p>

            <div className="pt-4 space-y-1">
              <p className="text-white font-serif-luxury text-2xl sm:text-3xl font-medium">
                Happy Birthday, Himanshi.
              </p>
              <p className="text-[#E8A5B5] font-serif-luxury italic text-lg sm:text-xl">
                Keep being you. There is something truly beautiful about that.
              </p>
            </div>

            {/* Signature */}
            <div className="pt-8 border-t border-white/[0.08] flex items-center justify-between">
              <span className="text-xl sm:text-2xl font-serif-luxury italic text-[#F4D58D] tracking-wider">
                — Siddharth ❤️
              </span>
              <Heart className="w-5 h-5 text-[#E8A5B5] fill-[#E8A5B5]/30" />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
