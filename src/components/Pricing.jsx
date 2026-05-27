import React, { useState } from 'react';
import { Check, Sparkles } from 'lucide-react';

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);

  const tiers = [
    {
      name: 'Developer',
      description: 'Perfect for prototyping ideas and building simple personal workflows.',
      price: { monthly: 0, annual: 0 },
      features: [
        '1,000 tasks per month',
        '3 active agent pipelines',
        'Standard models (GPT-4o mini, Claude Haiku)',
        'Basic vector DB integration',
        'Community Support',
      ],
      cta: 'Get Started for Free',
      isPopular: false,
    },
    {
      name: 'Pro',
      description: 'Ideal for small teams and engineers running agents in active production.',
      price: { monthly: 49, annual: 39 },
      features: [
        '50,000 tasks per month',
        'Unlimited agent pipelines',
        'Advanced models (GPT-4o, Claude Sonnet)',
        'Custom webhook triggers',
        'Context compressor & Smart cache',
        'Priority Slack & Email Support (24h)',
      ],
      cta: 'Start Pro Trial',
      isPopular: true,
    },
    {
      name: 'Enterprise',
      description: 'Custom configurations for large-scale operations with strict compliance.',
      price: { monthly: 'Custom', annual: 'Custom' },
      features: [
        'Unlimited tasks & executions',
        'Private sandbox runner hosting',
        'Custom fine-tuned model routing',
        'HIPAA & SOC-2 compliance audits',
        'Dedicated Solutions Architect',
        'Guaranteed 99.9% uptime SLA',
      ],
      cta: 'Contact Sales',
      isPopular: false,
    },
  ];

  return (
    <section id="pricing" className="py-24 bg-slate-950/20 relative">
      {/* Background glow */}
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight mb-4">
            Predictable Pricing, <span className="text-gradient font-bold">No Hidden Fees</span>
          </h2>
          <p className="text-slate-400 font-sans text-base sm:text-lg">
            Choose the plan that matches your production load. Save up to 20% by choosing an annual billing cycle.
          </p>

          {/* Toggle Switch */}
          <div className="flex items-center justify-center gap-3 mt-8">
            <span className={`text-sm font-semibold transition-colors ${!isAnnual ? 'text-white' : 'text-slate-500'}`}>Monthly</span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="w-12 h-6 bg-slate-800 rounded-full p-1 transition-colors duration-300 focus:outline-none flex items-center"
            >
              <div className={`w-4 h-4 bg-indigo-500 rounded-full transition-transform duration-300 ${isAnnual ? 'translate-x-6' : 'translate-x-0'}`}></div>
            </button>
            <span className={`text-sm font-semibold transition-colors flex items-center gap-1.5 ${isAnnual ? 'text-white' : 'text-slate-500'}`}>
              Annually
              <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] font-bold tracking-wide uppercase border border-emerald-500/20">
                Save 20%
              </span>
            </span>
          </div>
        </div>

        {/* Pricing Tiers Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {tiers.map((tier, idx) => {
            const hasPrice = typeof tier.price.monthly === 'number';
            const displayPrice = hasPrice 
              ? (isAnnual ? tier.price.annual : tier.price.monthly) 
              : 'Custom';

            return (
              <div
                key={idx}
                className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 border ${
                  tier.isPopular
                    ? 'bg-gradient-to-b from-indigo-950/45 to-slate-900/60 border-indigo-500/50 shadow-xl shadow-indigo-600/5 hover:border-indigo-400 lg:-translate-y-4'
                    : 'bg-slate-900/25 border-slate-800/80 hover:border-slate-700/60'
                }`}
              >
                {/* Popular badge */}
                {tier.isPopular && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-sans text-xs font-bold tracking-wide shadow-md flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    Most Popular
                  </span>
                )}

                {/* Tier Meta */}
                <div>
                  <h3 className="font-display font-bold text-xl text-white tracking-wide">{tier.name}</h3>
                  <p className="text-slate-500 font-sans text-sm mt-2 leading-relaxed min-h-[48px]">{tier.description}</p>
                  
                  {/* Price */}
                  <div className="my-6 flex items-baseline gap-1 text-white">
                    {hasPrice ? (
                      <>
                        <span className="text-4xl font-display font-extrabold tracking-tight">${displayPrice}</span>
                        <span className="text-slate-500 font-sans text-sm">/ month</span>
                      </>
                    ) : (
                      <span className="text-4xl font-display font-extrabold tracking-tight">Custom</span>
                    )}
                  </div>

                  {/* Features List */}
                  <div className="pt-6 border-t border-slate-800/80 space-y-4">
                    {tier.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-3 text-slate-300 text-sm">
                        <Check className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                        <span className="font-sans leading-tight">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <button className={`w-full py-3.5 rounded-2xl font-semibold text-sm mt-8 transition-all duration-300 cursor-pointer ${
                  tier.isPopular
                    ? 'relative overflow-hidden text-white hover:shadow-lg hover:shadow-indigo-500/10'
                    : 'bg-slate-800/50 hover:bg-slate-800 border border-slate-700/50 text-slate-200 hover:text-white'
                }`}>
                  {tier.isPopular && (
                    <span className="absolute inset-0 bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600"></span>
                  )}
                  <span className="relative z-10">{tier.cta}</span>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
