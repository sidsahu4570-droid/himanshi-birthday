import React from 'react';
import { Sparkles, Sun, Smile, Compass, Moon, Heart, Star } from 'lucide-react';

export default function BirthdayWishesSection() {
  const wishes = [
    { text: "More laughter.", sub: "Loud, genuine, stomach-aching laughter" },
    { text: "More peace.", sub: "Tranquility in your heart and ease in your mind" },
    { text: "More confidence.", sub: "Trusting your instincts and knowing your worth" },
    { text: "More adventures.", sub: "Discovering new paths with pure excitement" },
    { text: "More reasons to be proud of yourself.", sub: "Celebrating every step of your growth" },
    { text: "More mornings you wake up excited about life.", sub: "Greeted by sunshine and new hopes" },
    { text: "More nights where you fall asleep genuinely happy.", sub: "Restful, calm, and fulfilled" },
    { text: "More people who appreciate you properly.", sub: "Recognising just how wonderful you are" },
    { text: "More moments where you realise: “I'm exactly where I'm supposed to be.”", sub: "Grounding certainty and inner alignment", full: true }
  ];

  return (
    <section id="birthday-wishes" className="py-28 sm:py-36 px-4 sm:px-6 relative z-10">
      <div className="max-w-4xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#120D1C]/80 border border-[#F4D58D]/30 text-xs font-medium tracking-[0.25em] uppercase text-[#F4D58D]">
            <span>✦</span>
            <span>FOR YOUR NEW YEAR AHEAD</span>
            <span>✦</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-luxury font-medium text-white tracking-tight">
            Your Birthday Wish
          </h2>

          <p className="text-sm sm:text-base text-slate-300 font-light">
            Nine blessings I wish for every single day of your upcoming year.
          </p>
        </div>

        {/* Wishes List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
          {wishes.map((item, idx) => (
            <div
              key={idx}
              className={`birthday-note-tag p-5 sm:p-6 flex items-start gap-4 ${
                item.full ? 'md:col-span-2' : ''
              } group`}
            >
              <div className="w-8 h-8 rounded-full bg-[#F4D58D]/15 border border-[#F4D58D]/30 flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-110 group-hover:border-[#F4D58D] transition-transform">
                <Sparkles className="w-4 h-4 text-[#F4D58D]" />
              </div>
              <div className="space-y-1">
                <p className="text-base sm:text-lg font-serif-luxury font-medium text-white group-hover:text-[#F4D58D] transition-colors leading-snug">
                  {item.text}
                </p>
                <p className="text-xs text-slate-400 font-light">
                  {item.sub}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Climax Box */}
        <div className="luxury-birthday-frame p-8 sm:p-12 text-center max-w-xl mx-auto space-y-3 shadow-2xl">
          <p className="text-xl sm:text-2xl md:text-3xl font-serif-luxury italic text-[#F4D58D] font-normal leading-relaxed">
            “That's what I want this year to give you.”
          </p>
        </div>

      </div>
    </section>
  );
}
