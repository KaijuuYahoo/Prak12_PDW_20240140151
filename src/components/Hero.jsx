import React from 'react';
import { ArrowRight, Play, Cpu, Sparkles, Activity, Layers } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden bg-radial-gradient">
      {/* Decorative background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-radial-glow-purple -z-10 blur-3xl pointer-events-none"></div>
      <div className="absolute top-10 left-10 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl -z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline and CTAs */}
          <div className="lg:col-span-6 flex flex-col text-center lg:text-left items-center lg:items-start">
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 font-sans text-xs font-semibold tracking-wide mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              Revolutionizing AI Automation
            </div>

            {/* Main Headline */}
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.1] mb-6 text-white">
              Automate Your Workflows with <span className="text-gradient font-extrabold">Generative AI</span>
            </h1>

            {/* Paragraph */}
            <p className="text-slate-400 font-sans text-lg sm:text-xl leading-relaxed max-w-xl mb-8">
              Aethera empowers teams to orchestrate and execute complex tasks natively using intelligent agent loops, connected pipelines, and self-improving nodes.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a
                href="#playground"
                className="relative group overflow-hidden px-8 py-4 rounded-2xl font-semibold text-base transition-all duration-300 text-center flex items-center justify-center gap-2"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 transition-all duration-500 group-hover:scale-105"></span>
                <span className="relative text-white flex items-center gap-2">
                  Try Playground
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
              </a>

              <a
                href="#features"
                className="px-8 py-4 rounded-2xl font-semibold text-base border border-slate-700 bg-slate-900/50 hover:bg-slate-800/50 text-slate-200 hover:text-white transition-all duration-200 text-center flex items-center justify-center gap-2"
              >
                <Play className="w-4 h-4 text-indigo-400" />
                Explore Features
              </a>
            </div>

            {/* Stats / Proof */}
            <div className="grid grid-cols-3 gap-6 sm:gap-8 pt-12 mt-12 border-t border-slate-800/80 w-full">
              <div>
                <p className="text-2xl sm:text-3xl font-display font-bold text-white">99.8%</p>
                <p className="text-xs sm:text-sm text-slate-500 font-medium">Uptime Guarantee</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-display font-bold text-white">10M+</p>
                <p className="text-xs sm:text-sm text-slate-500 font-medium">Tasks Executed</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-display font-bold text-white">15x</p>
                <p className="text-xs sm:text-sm text-slate-500 font-medium">Efficiency Multiplier</p>
              </div>
            </div>
          </div>

          {/* Right Column: Premium Mockup Graphic */}
          <div className="lg:col-span-6 relative flex justify-center items-center">
            {/* Radial glow background behind dashboard */}
            <div className="absolute inset-0 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none -z-10"></div>

            {/* Dashboard Container */}
            <div className="w-full max-w-[500px] lg:max-w-none glass rounded-3xl p-5 shadow-2xl relative border border-slate-800/80 overflow-hidden group">
              {/* Header bar of mock UI */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800/85">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>
                <div className="px-3 py-1 rounded-full bg-slate-800/40 border border-slate-700/50 text-[10px] text-slate-400 font-mono">
                  aethera-workspace-v1.4
                </div>
                <Activity className="w-4 h-4 text-emerald-400 animate-pulse" />
              </div>

              {/* Main content of mock UI */}
              <div className="space-y-4">
                {/* Node 1 */}
                <div className="p-3.5 bg-slate-950/65 rounded-2xl border border-slate-800/60 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-purple-500/10 rounded-xl border border-purple-500/20 text-purple-400">
                      <Cpu className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-white">Input Trigger</p>
                      <p className="text-[10px] text-slate-500 font-mono">Data Stream Hooked</p>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 rounded-full bg-purple-500/10 text-purple-400 text-[10px] font-semibold border border-purple-500/20">
                    Active
                  </span>
                </div>

                {/* Connecting Line Indicator */}
                <div className="flex justify-center my-[-10px] h-6">
                  <div className="w-[1.5px] bg-gradient-to-b from-purple-500 to-indigo-500"></div>
                </div>

                {/* Node 2 */}
                <div className="p-3.5 bg-slate-950/65 rounded-2xl border border-slate-800/60 flex items-center justify-between gap-3 relative overflow-hidden">
                  <div className="absolute inset-y-0 left-0 w-[3px] bg-indigo-500"></div>
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-indigo-500/10 rounded-xl border border-indigo-500/20 text-indigo-400">
                      <Layers className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-white">Semantic AI Processor</p>
                      <p className="text-[10px] text-indigo-300 font-mono">Refining outputs...</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-indigo-400 animate-ping"></div>
                    <span className="text-[10px] font-mono text-indigo-400">Processing</span>
                  </div>
                </div>

                {/* Connecting Line Indicator */}
                <div className="flex justify-center my-[-10px] h-6">
                  <div className="w-[1.5px] bg-gradient-to-b from-indigo-500 to-emerald-500"></div>
                </div>

                {/* Node 3 */}
                <div className="p-3.5 bg-slate-950/65 rounded-2xl border border-slate-800/60 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-emerald-500/10 rounded-xl border border-emerald-500/20 text-emerald-400">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-white">Structured Output</p>
                      <p className="text-[10px] text-slate-500 font-mono">JSON payload ready</p>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] font-semibold border border-emerald-500/20">
                    Dispatched
                  </span>
                </div>
              </div>

              {/* Floating absolute sub-card to add premium depth */}
              <div className="absolute -bottom-6 -left-6 glass p-4 rounded-2xl border border-slate-800 shadow-2xl flex items-center gap-3 max-w-[190px] animate-float">
                <div className="p-2.5 bg-emerald-500/10 rounded-xl text-emerald-400">
                  <Activity className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 font-medium">Cost Savings</p>
                  <p className="text-sm font-bold text-white">+$4,290.00</p>
                </div>
              </div>

              {/* Another floating absolute sub-card */}
              <div className="absolute -top-6 -right-6 glass p-4 rounded-2xl border border-slate-800 shadow-2xl flex items-center gap-3 max-w-[190px] animate-float" style={{ animationDelay: '3s' }}>
                <div className="p-2.5 bg-indigo-500/10 rounded-xl text-indigo-400">
                  <Cpu className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 font-medium">Model Latency</p>
                  <p className="text-sm font-bold text-white">42ms</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
