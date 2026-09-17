import React from 'react';
import { Heart, Sparkles, Star, Feather, Compass, Sun, ShieldCheck } from 'lucide-react';

export default function ThingsIAdmireSection() {
  const qualities = [
    {
      title: "THE WAY YOU CARE",
      icon: <Heart className="w-4 h-4 text-[#E8A5B5]" />,
      lead: "One thing I've always admired...",
      text: "You have a natural kindness that shows up in the quietest, most sincere ways without ever asking for applause.",
      tag: "Gentle warmth ✦"
    },
    {
      title: "THE WAY YOU MAKE PEOPLE FEEL COMFORTABLE",
      icon: <Sun className="w-4 h-4 text-[#F4D58D]" />,
      lead: "One thing I've always noticed...",
      text: "There's an effortless grace about you that makes people feel welcome, accepted, and completely at ease.",
      tag: "Effortless comfort ♡"
    },
    {
      title: "YOUR QUIET CONFIDENCE",
      icon: <ShieldCheck className="w-4 h-4 text-[#B9A9D6]" />,
      lead: "One thing I deeply respect...",
      text: "A calm, grounded belief in yourself and your values that doesn't need to be loud to be powerful.",
      tag: "Inner strength ✦"
    },
    {
      title: "YOUR LITTLE SENSE OF ADVENTURE",
      icon: <Compass className="w-4 h-4 text-[#F4D58D]" />,
      lead: "One thing that always made me smile...",
      text: "That bright spark of curiosity and spontaneous excitement whenever new possibilities open up.",
      tag: "Adventurous spark ♡"
    },
    {
      title: "THE WAY YOU CAN BE BOTH SOFT AND STRONG",
      icon: <Feather className="w-4 h-4 text-[#E8A5B5]" />,
      lead: "A rare quality in you...",
      text: "A beautiful harmony of genuine tenderness and unwavering resilience through whatever comes your way.",
      tag: "Rare harmony ✦"
    },
    {
      title: "THE WAY YOU ARE SIMPLY YOURSELF",
      icon: <Star className="w-4 h-4 text-[#F4D58D]" />,
      lead: "Above everything else...",
      text: "Never wearing a mask, never trying to fit into anyone else's mold—just authentic, genuine, and true.",
      tag: "Pure authenticity ♡"
    }
  ];

  return (
    <section id="admiration" className="py-28 sm:py-36 px-4 sm:px-6 relative z-10">
      <div className="max-w-5xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#120D1C]/80 border border-[#F4D58D]/30 text-xs font-medium tracking-[0.25em] uppercase text-[#F4D58D]">
            <span>✦</span>
            <span>THINGS I ADMIRE ABOUT YOU</span>
            <span>✦</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-luxury font-medium text-white tracking-tight">
            Little Notes on Who You Are
          </h2>

          <p className="text-sm sm:text-base text-slate-300 font-light max-w-md mx-auto">
            Not memories of the past—just genuine reflections of the qualities that make you uniquely special.
          </p>
        </div>

        {/* 6 Luxury Birthday Note Tags Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {qualities.map((item, idx) => (
            <div
              key={idx}
              className="birthday-note-tag p-6 sm:p-7 flex flex-col justify-between group cursor-default"
            >
              <div>
                {/* Header Row: Seal & Title */}
                <div className="flex items-center justify-between mb-5">
                  <span className="text-[11px] font-sans font-semibold tracking-[2.5px] uppercase text-[#F4D58D]">
                    {item.title}
                  </span>
                  <div className="note-ribbon-seal">
                    {item.icon}
                  </div>
                </div>

                <p className="text-xs text-[#FFF8EC]/60 font-light mb-2">
                  {item.lead}
                </p>

                <p className="text-sm sm:text-base text-slate-200 font-light leading-relaxed">
                  {item.text}
                </p>
              </div>

              {/* Tag Footer */}
              <div className="pt-5 mt-5 border-t border-white/[0.08] flex items-center justify-between text-xs">
                <span className="font-serif-luxury italic text-[#E8A5B5] tracking-wide">
                  {item.tag}
                </span>
                <Sparkles className="w-3.5 h-3.5 text-[#F4D58D] opacity-60 group-hover:opacity-100 group-hover:rotate-45 transition-all" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
