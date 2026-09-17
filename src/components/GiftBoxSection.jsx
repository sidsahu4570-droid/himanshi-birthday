import React, { useState } from 'react';
import { Sparkles, Heart } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function GiftBoxSection() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenGift = () => {
    setIsOpen(true);
    // Warm romantic gold and blush confetti burst
    confetti({
      particleCount: 80,
      spread: 65,
      origin: { y: 0.65 },
      colors: ['#F4D58D', '#FFF8EC', '#E8A5B5', '#C98296', '#B9A9D6']
    });
  };

  const giftPillars = [
    { title: "A beautiful year", desc: "Filled with gentle days and peaceful nights" },
    { title: "A year of growth", desc: "Expanding your horizons and trusting your wings" },
    { title: "A year of laughter", desc: "Surrounded by genuine smiles and effortless joy" },
    { title: "A year of beautiful surprises", desc: "Moments of unexpected wonder arriving when you least expect" }
  ];

  return (
    <section id="gift" className="py-28 sm:py-36 px-4 sm:px-6 relative z-10">
      <div className="max-w-4xl mx-auto space-y-12 text-center">
        
        {/* Header */}
        <div className="space-y-4 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#110C19]/80 border border-[#F4D58D]/30 text-xs font-medium tracking-[0.25em] uppercase text-[#F4D58D]">
            <span>✦</span>
            <span>A GIFT FOR YOU</span>
            <span>✦</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-luxury font-medium text-white tracking-tight">
            If I Could Give You One Thing
          </h2>
        </div>

        {/* Interactive Gift Container */}
        {!isOpen ? (
          <div className="flex flex-col items-center justify-center py-6">
            <button
              onClick={handleOpenGift}
              className="group relative flex flex-col items-center justify-center p-8 sm:p-10 rounded-3xl luxury-stationery-frame border border-[#F4D58D]/40 hover:border-[#E8A5B5]/60 transition-all duration-500 hover:scale-105 active:scale-95 shadow-2xl cursor-pointer"
            >
              {/* Glowing Box Icon */}
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-gradient-to-tr from-[#17101F] to-[#2D1C34] flex items-center justify-center text-4xl sm:text-5xl border border-[#F4D58D]/30 shadow-lg group-hover:rotate-6 transition-transform">
                🎁
              </div>

              <div className="mt-6 inline-flex items-center gap-2 px-7 py-3 rounded-full bg-gradient-to-r from-[#F4D58D] via-[#E8A5B5] to-[#F4D58D] text-[#070711] font-semibold text-sm shadow-lg">
                <span>Open Birthday Gift</span>
                <Sparkles className="w-4 h-4 text-[#070711]" />
              </div>
            </button>
          </div>
        ) : (
          <div className="luxury-stationery-frame p-8 sm:p-14 md:p-16 max-w-3xl mx-auto space-y-8 animate-fade-in shadow-2xl relative overflow-hidden">
            
            <div className="space-y-4">
              <p className="text-2xl sm:text-3xl font-serif-luxury text-[#FFF8EC] font-medium leading-relaxed">
                “I wouldn't give you something that fits inside a box.”
              </p>

              <p className="text-2xl sm:text-3xl font-serif-luxury italic text-[#F4D58D] font-normal py-2">
                “I'd give you a year you'll remember.”
              </p>
            </div>

            <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#F4D58D]/50 to-transparent mx-auto" />

            {/* Sequence Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left pt-2">
              {giftPillars.map((item, idx) => (
                <div key={idx} className="romantic-birthday-note p-5 space-y-1">
                  <p className="text-base font-serif-luxury font-medium text-white flex items-center gap-2">
                    <span className="text-[#F4D58D] text-xs">✦</span>
                    <span>{item.title}</span>
                  </p>
                  <p className="text-xs text-[#B8AFC0] font-light pl-4">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="p-6 rounded-2xl bg-[#110C19]/80 border border-[#F4D58D]/25 text-center space-y-2">
              <p className="text-base sm:text-lg text-slate-200 font-light">
                A year where the things you've quietly wished for start finding their way toward you.
              </p>
              <p className="text-lg sm:text-xl font-serif-luxury italic text-[#E8A5B5] font-semibold pt-1">
                “Because you deserve that.”
              </p>
            </div>

            <div className="pt-2 flex items-center justify-center gap-2 text-xs uppercase tracking-widest text-[#FFF8EC]/60">
              <Heart className="w-3.5 h-3.5 text-[#E8A5B5] stroke-[1.5]" />
              <span>With all my heart</span>
            </div>

          </div>
        )}

      </div>
    </section>
  );
}
