import React from 'react';
import { Heart, Sparkles, Star, Compass, Flower2, Flame } from 'lucide-react';

export default function ThingsIAdmireSection() {
  const qualities = [
    {
      title: "THE WAY YOU CARE",
      ornament: <Heart className="w-5 h-5 text-[#E8A5B5] stroke-[1.5]" />,
      rotation: "md:-rotate-[0.9deg]",
      lead: "One thing I've always admired...",
      text: "You have a natural kindness that shows up in the quietest, most sincere ways without ever asking for applause.",
      signature: "with a little warmth ♡"
    },
    {
      title: "THE WAY YOU MAKE PEOPLE FEEL COMFORTABLE",
      ornament: <Sparkles className="w-5 h-5 text-[#F4D58D] stroke-[1.5]" />,
      rotation: "md:rotate-[0.7deg]",
      lead: "One thing I've always noticed...",
      text: "There's an effortless grace about you that makes people feel welcome, accepted, and completely at ease.",
      signature: "something I admire ✦"
    },
    {
      title: "YOUR QUIET CONFIDENCE",
      ornament: <Star className="w-5 h-5 text-[#B9A9D6] stroke-[1.5]" />,
      rotation: "md:-rotate-[0.6deg]",
      lead: "One thing I deeply respect...",
      text: "A calm, grounded belief in yourself and your values that doesn't need to be loud to be powerful.",
      signature: "written with quiet respect ✧"
    },
    {
      title: "YOUR LITTLE SENSE OF ADVENTURE",
      ornament: <Compass className="w-5 h-5 text-[#F4D58D] stroke-[1.5]" />,
      rotation: "md:rotate-[0.8deg]",
      lead: "One thing that always made me smile...",
      text: "That bright spark of curiosity and spontaneous excitement whenever new possibilities open up.",
      signature: "a spark I remember ♡"
    },
    {
      title: "THE WAY YOU CAN BE BOTH SOFT AND STRONG",
      ornament: <Flower2 className="w-5 h-5 text-[#E8A5B5] stroke-[1.5]" />,
      rotation: "md:-rotate-[0.7deg]",
      lead: "A rare quality in you...",
      text: "A beautiful harmony of genuine tenderness and unwavering resilience through whatever comes your way.",
      signature: "a rare gift ✦"
    },
    {
      title: "THE WAY YOU ARE SIMPLY YOURSELF",
      ornament: <Flame className="w-5 h-5 text-[#F4D58D] stroke-[1.5]" />,
      rotation: "md:rotate-[0.9deg]",
      lead: "Above everything else...",
      text: "Never wearing a mask, never trying to fit into anyone else's mold—just authentic, genuine, and true.",
      signature: "just one little thought ♡"
    }
  ];

  return (
    <section id="admiration" className="py-28 sm:py-36 px-4 sm:px-6 relative z-10">
      
      {/* Warm Candlelight Ambient Background Glow */}
      <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-full max-w-4xl h-[600px] candle-glow-strong blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto space-y-14 sm:space-y-18 relative z-10">
        
        {/* Section Heading Area */}
        <div className="text-center space-y-3.5 max-w-2xl mx-auto">
          <p className="text-xs sm:text-[13px] font-sans font-medium tracking-[0.28em] uppercase text-[#F4D58D]/90">
            ✦ a few little thoughts for you ✦
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-luxury font-medium text-[#FFF8EC] tracking-tight">
            Little Notes on Who You Are
          </h2>

          <p className="font-script text-xl sm:text-2xl text-[#E8A5B5] pt-1 font-normal tracking-wide">
            “because some things are worth saying”
          </p>
        </div>

        {/* 6 Luxury Romantic Birthday Keepsake Notes (3x2 Desktop Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {qualities.map((item, idx) => (
            <div
              key={idx}
              className={`romantic-birthday-note p-7 sm:p-8 flex flex-col justify-between group cursor-default transition-all duration-500 ease-out hover:-translate-y-1.5 hover:md:rotate-0 ${item.rotation}`}
            >
              {/* Internal Candlelight Radial Illumination */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(244,213,141,0.08),transparent_65%)] pointer-events-none" />

              <div className="relative z-10">
                {/* Note Top: Title & Delicate Stationery Ornament */}
                <div className="flex items-center justify-between mb-5">
                  <span className="text-xs font-sans font-medium tracking-[2.5px] uppercase text-[#F4D58D] flex items-center gap-1.5">
                    <span className="text-[#E8A5B5] text-[10px]">✦</span>
                    <span>{item.title}</span>
                  </span>

                  <div className="w-8 h-8 flex items-center justify-center opacity-85 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
                    {item.ornament}
                  </div>
                </div>

                {/* Introductory Lead */}
                <p className="text-xs sm:text-[13px] font-serif-luxury italic text-[#E8A5B5]/85 font-light mb-2.5">
                  {item.lead}
                </p>

                {/* Main Sincere Statement */}
                <p className="text-base sm:text-[17px] font-serif-luxury text-[#FFF8EC] font-normal leading-relaxed">
                  {item.text}
                </p>
              </div>

              {/* Note Footer: Handwritten Signature & Delicate Sparkle */}
              <div className="relative z-10 pt-6 mt-6 border-t border-white/[0.08] flex items-center justify-between">
                <span className="font-script text-lg sm:text-xl text-[#F4D58D] tracking-wide font-normal">
                  {item.signature}
                </span>

                <Sparkles className="w-3.5 h-3.5 text-[#F4D58D] opacity-50 group-hover:opacity-100 group-hover:rotate-45 group-hover:scale-110 transition-all duration-300" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
