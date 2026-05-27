import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const TESTIMONIALS = [
  {
    quote: "Aethera changed how we build agents. We reduced our orchestration layer from 1,400 lines of custom script to a single visual schema. Setup was done in an afternoon.",
    author: "Sarah Jenkins",
    role: "Lead AI Engineer",
    company: "VeloCloud",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=120&h=120",
    rating: 5,
  },
  {
    quote: "The token caching layer alone paid for the subscription in our first week. We scaled from 1,000 tasks per day to 150,000 tasks without hitting any rate limits or latency bottlenecks.",
    author: "Alex Chen",
    role: "CTO",
    company: "NeuraFlow",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120&h=120",
    rating: 5,
  },
  {
    quote: "We use the autonomous agent loops to automate QA runs. Our team's release speed tripled, and the custom vector integration makes context lookups incredibly reliable.",
    author: "Elena Rostova",
    role: "Founder",
    company: "Synthetix Agency",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=120&h=120",
    rating: 5,
  },
  {
    quote: "Security was our main concern. Running Aethera's sandbox execution environments ensures all customer code runs isolated and encrypted. It is a game-changer.",
    author: "David Khasar",
    role: "DevOps Architect",
    company: "Helix BioSystems",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=120&h=120",
    rating: 5,
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="testimonials" className="py-24 bg-slate-900/10 relative overflow-hidden">
      {/* Glow decorations */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight mb-4">
            Trusted by <span className="text-gradient font-bold">Innovative Engineers</span>
          </h2>
          <p className="text-slate-400 font-sans text-base sm:text-lg">
            See how engineering teams are scaling their agent systems, optimizing costs, and automating workloads.
          </p>
        </div>

        {/* Carousel Window */}
        <div className="relative max-w-4xl mx-auto">
          {/* Quote background icon */}
          <Quote className="absolute -top-12 -left-8 w-24 h-24 text-slate-800/20 pointer-events-none" />

          <div className="glass rounded-3xl p-8 md:p-12 border border-slate-800 shadow-2xl relative overflow-hidden">
            {/* Slide */}
            <div className="flex flex-col gap-6 md:gap-8 transition-all duration-500 ease-in-out">
              {/* Star Rating */}
              <div className="flex items-center gap-1">
                {[...Array(TESTIMONIALS[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                ))}
              </div>

              {/* Quote Content */}
              <p className="text-lg md:text-xl text-slate-200 font-sans font-medium italic leading-relaxed">
                "{TESTIMONIALS[currentIndex].quote}"
              </p>

              {/* User Bio */}
              <div className="flex items-center gap-4 pt-4 border-t border-slate-800/80">
                <img
                  src={TESTIMONIALS[currentIndex].avatar}
                  alt={TESTIMONIALS[currentIndex].author}
                  className="w-12 h-12 rounded-full object-cover border border-slate-700 bg-slate-800"
                />
                <div>
                  <h4 className="text-base font-display font-bold text-white tracking-wide">
                    {TESTIMONIALS[currentIndex].author}
                  </h4>
                  <p className="text-xs text-slate-500 font-medium font-sans">
                    {TESTIMONIALS[currentIndex].role} — <span className="text-indigo-400">{TESTIMONIALS[currentIndex].company}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-8 max-w-xs mx-auto">
            <button
              onClick={handlePrev}
              className="p-3 rounded-full border border-slate-800 bg-slate-900/50 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-1.5">
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    currentIndex === idx ? 'w-8 bg-indigo-500' : 'bg-slate-800 hover:bg-slate-700'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={handleNext}
              className="p-3 rounded-full border border-slate-800 bg-slate-900/50 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
