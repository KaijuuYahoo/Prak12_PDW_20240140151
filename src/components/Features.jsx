import React from 'react';
import { Cpu, Zap, Layers, Shield, Database, BarChart3, HelpCircle } from 'lucide-react';

export default function Features() {
  const featuresList = [
    {
      icon: Cpu,
      title: 'Autonomous Agents',
      description: 'Powered by multi-agent reasoning loops that can plan, execute, and self-correct complex workflows without user intervention.',
      color: 'from-purple-500 to-indigo-500',
      iconColor: 'text-purple-400',
    },
    {
      icon: Layers,
      title: 'Multi-Model Orchestration',
      description: 'Dynamically route tasks across Anthropic, OpenAI, and custom open-source models based on real-time latency and token cost analysis.',
      color: 'from-indigo-500 to-blue-500',
      iconColor: 'text-indigo-400',
    },
    {
      icon: Zap,
      title: 'Visual Workflow Builder',
      description: 'Orchestrate agents, variables, and API webhooks together using an intuitive node graph to build custom pipeline structures.',
      color: 'from-blue-500 to-cyan-500',
      iconColor: 'text-blue-400',
    },
    {
      icon: Database,
      title: 'Persistent Memory Sync',
      description: 'Automated retrieval-augmented generation (RAG) that synces structured vectors and historical variables natively across executions.',
      color: 'from-emerald-500 to-teal-500',
      iconColor: 'text-emerald-400',
    },
    {
      icon: BarChart3,
      title: 'Smart Token Caching',
      description: 'Built-in context optimization and caching layer that compresses prompts, saving up to 60% on external LLM inference costs.',
      color: 'from-amber-500 to-orange-500',
      iconColor: 'text-amber-400',
    },
    {
      icon: Shield,
      title: 'Military-Grade Security',
      description: 'Keep your API keys and databases secure with AES-256 encryption at rest, isolated sandbox runners, and granular audit logging.',
      color: 'from-rose-500 to-red-500',
      iconColor: 'text-rose-400',
    },
  ];

  return (
    <section id="features" className="py-24 bg-slate-950/20 relative">
      {/* Decorative side glow */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-indigo-600/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight mb-4">
            Powerful Architecture Built for{' '}
            <span className="text-gradient font-bold">Intelligent Workflows</span>
          </h2>
          <p className="text-slate-400 font-sans text-base sm:text-lg leading-relaxed">
            Eliminate boilerplate integrations. Aethera provides all the primitives you need to deploy enterprise-grade AI applications in production.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresList.map((feat, index) => {
            const IconComponent = feat.icon;
            return (
              <div
                key={index}
                className="group relative rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-500/5 bg-slate-900/30 hover:bg-slate-900/50 border border-slate-800/80 hover:border-slate-700/60 overflow-hidden"
              >
                {/* Background Card Hover Gradient Glow */}
                <div className="absolute -inset-px bg-gradient-to-br from-indigo-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl -z-10"></div>

                {/* Icon Container */}
                <div className={`inline-flex p-3 rounded-2xl bg-slate-800/60 border border-slate-700/50 ${feat.iconColor} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-6 h-6" />
                </div>

                {/* Feature Title */}
                <h3 className="font-display font-semibold text-lg text-white mb-3 tracking-wide">
                  {feat.title}
                </h3>

                {/* Feature Description */}
                <p className="text-slate-400 font-sans text-sm leading-relaxed">
                  {feat.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
