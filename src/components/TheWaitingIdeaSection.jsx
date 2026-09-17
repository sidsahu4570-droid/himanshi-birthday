import React from 'react';
import { Sparkles, Moon } from 'lucide-react';

export default function TheWaitingIdeaSection() {
  return (
    <section id="the-waiting-idea" className="py-28 sm:py-36 px-4 sm:px-6 relative z-10">
      <div className="max-w-3xl mx-auto">
        
        <div className="luxury-stationery-frame p-8 sm:p-14 md:p-16 text-center space-y-8 relative overflow-hidden shadow-2xl">
          
          <div className="flex justify-center mb-2">
            <div className="w-12 h-12 rounded-2xl bg-[#110C19] border border-[#F4D58D]/30 flex items-center justify-center text-[#F4D58D] shadow-lg">
              <Moon className="w-6 h-6" />
            </div>
          </div>

          <div className="space-y-6 text-slate-200 font-light text-base sm:text-lg md:text-xl leading-relaxed sm:leading-loose max-w-2xl mx-auto">
            
            <p className="text-xl sm:text-2xl font-serif-luxury text-white">
              Some doors don't need to be knocked on.
            </p>

            <p className="text-xl sm:text-2xl font-serif-luxury text-[#F4D58D]">
              Some lights can simply be left on.
            </p>

            <div className="w-12 h-[1px] bg-gradient-to-r from-transparent via-[#F4D58D]/40 to-transparent mx-auto my-4" />

            <p className="text-[#B8AFC0]">
              And sometimes caring about someone means leaving them completely free to choose their own path.
            </p>

            <div className="py-4 space-y-2">
              <p className="text-white font-medium">
                So I'm not asking where the road goes.
              </p>
              <p className="font-serif-luxury italic text-xl sm:text-2xl text-[#E8A5B5]">
                “I just hope wherever yours leads, it's somewhere beautiful.”
              </p>
            </div>

          </div>

          <div className="pt-4 flex justify-center items-center gap-2 text-xs uppercase tracking-widest text-[#FFF8EC]/60">
            <Sparkles className="w-3.5 h-3.5 text-[#F4D58D]" />
            <span>Patience without demand</span>
          </div>

        </div>

      </div>
    </section>
  );
}
