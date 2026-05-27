import React, { useState, useEffect } from 'react';
import { Play, RotateCcw, Terminal, Cpu, Database, Activity, Sparkles, CheckCircle2 } from 'lucide-react';

const AGENT_TEMPLATES = [
  {
    id: 'support',
    name: 'Customer Support Router',
    icon: Cpu,
    defaultPrompt: 'Draft an automated reply to customer "Jane Doe" apologizing for the delivery delay of order #9821, and issue a 15% discount coupon.',
    steps: ['Receiving webhook request...', 'Validating order #9821 status via database...', 'Synthesizing polite email template...', 'Validating text output safety checks...', 'Dispatched via Sendgrid API!'],
    mockOutput: {
      status: 'success',
      agent: 'Customer Support Router',
      routing_target: 'refund_dept',
      action: 'coupon_issued',
      response: {
        to: 'jane.doe@email.com',
        subject: 'We are sorry! Here is 15% off your next order.',
        body: 'Dear Jane, We sincerely apologize for the delay. Here is your coupon code: APOLOGY15.'
      }
    },
    latency: '820ms',
    tokens: 342,
    cost: '$0.00068'
  },
  {
    id: 'finance',
    name: 'Financial Parser & Sentiment Analyst',
    icon: Activity,
    defaultPrompt: 'Analyze the latest earnings call transcript of company XYZ: "Profits are up 12%, but operating margins shrunk due to rising supply chain costs."',
    steps: ['Streaming call segment chunks...', 'Extracting core entities (revenue, margins)...', 'Evaluating emotional valence of text...', 'Mapping metrics to JSON schema...', 'Updating executive database!'],
    mockOutput: {
      status: 'success',
      agent: 'Financial Sentiment Analyst',
      entities: {
        company: 'XYZ Inc.',
        profit_delta: '+12%',
        margin_status: 'decreased'
      },
      sentiment: 'Neutral-Bullish',
      supply_chain_risk: 'High',
      confidence_score: 0.94
    },
    latency: '1,450ms',
    tokens: 890,
    cost: '$0.00178'
  },
  {
    id: 'content',
    name: 'Automated Content Strategist',
    icon: Sparkles,
    defaultPrompt: 'Generate a Twitter thread of 3 tweets explaining the concept of glassmorphism in modern web UI design for non-designers.',
    steps: ['Retrieving style guides from Vector DB...', 'Generating initial outlines...', 'Refining hook and formatting emojis...', 'Validating post length restrictions...', 'Content queued inBuffer!'],
    mockOutput: {
      status: 'success',
      agent: 'Content Strategist',
      posts: [
        '1/ Glassmorphism is a popular UI style mimicking frosted glass 🔮. It uses semi-transparent backgrounds with a soft blur to create depth.',
        '2/ Why use it? It establishes clear visual hierarchy, keeping user focus on the main content while letting backgrounds shine through.',
        '3/ Tip: Always pair it with high-contrast text and a colorful, vibrant background so the glass effect actually pops! ✨'
      ],
      estimated_engagement: 'High',
      word_count: 85
    },
    latency: '1,920ms',
    tokens: 1205,
    cost: '$0.00241'
  }
];

export default function DemoPlayground() {
  const [selectedAgent, setSelectedAgent] = useState(AGENT_TEMPLATES[0]);
  const [prompt, setPrompt] = useState(AGENT_TEMPLATES[0].defaultPrompt);
  const [isRunning, setIsRunning] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentStepIndex, setCurrentStepIndex] = useState(-1);
  const [isCompleted, setIsCompleted] = useState(false);

  // Sync prompt when agent changes
  const handleAgentSelect = (agent) => {
    if (isRunning) return;
    setSelectedAgent(agent);
    setPrompt(agent.defaultPrompt);
    resetPlayground();
  };

  const resetPlayground = () => {
    setIsRunning(false);
    setProgress(0);
    setCurrentStepIndex(-1);
    setIsCompleted(false);
  };

  const runSimulation = () => {
    if (isRunning) return;
    resetPlayground();
    setIsRunning(true);
    setCurrentStepIndex(0);
  };

  // Progress Bar and step simulator effect
  useEffect(() => {
    let interval;
    if (isRunning) {
      const stepDuration = 3000 / selectedAgent.steps.length; // Total duration ~3s
      
      interval = setInterval(() => {
        setProgress((oldProgress) => {
          if (oldProgress >= 100) {
            clearInterval(interval);
            setIsRunning(false);
            setIsCompleted(true);
            return 100;
          }
          
          const nextProgress = oldProgress + 2;
          
          // Calculate step index based on progress percentage
          const stepPercent = 100 / selectedAgent.steps.length;
          const currentStep = Math.floor(nextProgress / stepPercent);
          setCurrentStepIndex(Math.min(currentStep, selectedAgent.steps.length - 1));
          
          return nextProgress;
        });
      }, 50); // Increment every 50ms
    }
    return () => clearInterval(interval);
  }, [isRunning, selectedAgent]);

  return (
    <section id="playground" className="py-24 relative overflow-hidden bg-radial-gradient">
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight mb-4">
            Interactive <span className="text-gradient font-bold">AI Playground</span>
          </h2>
          <p className="text-slate-400 font-sans text-base sm:text-lg">
            Experience our multi-agent orchestration engine firsthand. Select a template, customize the prompt, and watch the visual execution trace.
          </p>
        </div>

        {/* Playground Widget Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Template Selection & Inputs (lg:col-span-5) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Agent Select Box */}
            <div className="glass rounded-3xl p-6 border border-slate-800 flex flex-col gap-4">
              <h3 className="font-display font-semibold text-lg text-white">Select Agent Template</h3>
              
              <div className="flex flex-col gap-3">
                {AGENT_TEMPLATES.map((agent) => {
                  const Icon = agent.icon;
                  const isSelected = selectedAgent.id === agent.id;
                  return (
                    <button
                      key={agent.id}
                      onClick={() => handleAgentSelect(agent)}
                      disabled={isRunning}
                      className={`flex items-center gap-3 p-4 rounded-2xl text-left border transition-all duration-200 ${
                        isSelected
                          ? 'bg-indigo-600/15 border-indigo-500/60 text-white shadow-lg shadow-indigo-600/5'
                          : 'bg-slate-900/20 border-slate-800 text-slate-400 hover:border-slate-700/50 hover:text-slate-200'
                      } ${isRunning ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                    >
                      <div className={`p-2.5 rounded-xl border ${
                        isSelected ? 'bg-indigo-600/20 border-indigo-500/30 text-indigo-400' : 'bg-slate-800/50 border-slate-700/50 text-slate-500'
                      }`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold truncate">{agent.name}</p>
                        <p className="text-xs text-slate-500 mt-0.5 truncate">Latency: {agent.latency}</p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Prompt Customization Area */}
            <div className="glass rounded-3xl p-6 border border-slate-800 flex-1 flex flex-col gap-4">
              <div className="flex justify-between items-center">
                <label className="font-display font-semibold text-base text-white">Prompt Input</label>
                <button
                  onClick={resetPlayground}
                  disabled={isRunning || (!isRunning && progress === 0)}
                  className="flex items-center gap-1 text-xs text-slate-500 hover:text-slate-300 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  Reset
                </button>
              </div>

              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                disabled={isRunning}
                className="w-full flex-1 min-h-[140px] bg-slate-950/50 border border-slate-800/80 rounded-2xl p-4 text-slate-300 font-sans text-sm focus:outline-none focus:border-indigo-500/60 transition-colors resize-none disabled:opacity-75 disabled:cursor-not-allowed"
              />

              <button
                onClick={runSimulation}
                disabled={isRunning}
                className="w-full relative group overflow-hidden py-3.5 rounded-2xl font-semibold text-sm transition-all duration-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600"></span>
                <span className="relative text-white flex items-center justify-center gap-2">
                  <Play className="w-4 h-4 text-white fill-white" />
                  Execute Agent Pipeline
                </span>
              </button>
            </div>
          </div>

          {/* Right Column: Visual Console & Execution Trace (lg:col-span-7) */}
          <div className="lg:col-span-7 flex">
            <div className="glass rounded-3xl border border-slate-800 shadow-2xl w-full p-6 flex flex-col gap-6 relative overflow-hidden">
              {/* Header Bar */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800/80">
                <div className="flex items-center gap-2">
                  <Terminal className="w-5 h-5 text-indigo-400" />
                  <span className="font-mono text-xs text-slate-400 font-bold uppercase tracking-wider">Execution Pipeline Monitor</span>
                </div>
                <div className="flex items-center gap-4">
                  {/* Status Indicator */}
                  {isRunning ? (
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-indigo-500 animate-ping"></span>
                      <span className="font-mono text-[10px] text-indigo-400">RUNNING</span>
                    </div>
                  ) : isCompleted ? (
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                      <span className="font-mono text-[10px] text-emerald-400">FINISHED</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-slate-600"></span>
                      <span className="font-mono text-[10px] text-slate-500">READY</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Simulation Visual Stack */}
              <div className="flex-1 flex flex-col gap-5 justify-center">
                {/* Visual Step Trace */}
                <div className="flex flex-col gap-3">
                  <span className="font-mono text-[10px] text-slate-500 uppercase tracking-wider font-bold">Workflow Step Execution</span>
                  <div className="flex flex-col gap-2.5">
                    {selectedAgent.steps.map((step, idx) => {
                      const isActive = isRunning && currentStepIndex === idx;
                      const isPast = (isRunning && currentStepIndex > idx) || isCompleted;
                      
                      return (
                        <div
                          key={idx}
                          className={`flex items-center gap-3 p-3 rounded-xl border transition-all duration-200 ${
                            isActive
                              ? 'bg-indigo-600/10 border-indigo-500/30 text-white'
                              : isPast
                              ? 'bg-slate-900/40 border-slate-800/40 text-slate-400'
                              : 'bg-transparent border-transparent text-slate-600'
                          }`}
                        >
                          <div className="flex items-center justify-center">
                            {isPast ? (
                              <CheckCircle2 className="w-4.5 h-4.5 text-emerald-400 shrink-0" />
                            ) : isActive ? (
                              <div className="w-4 h-4 rounded-full border-2 border-indigo-500 border-t-transparent animate-spin shrink-0"></div>
                            ) : (
                              <div className="w-4.5 h-4.5 rounded-full border border-slate-800 flex items-center justify-center shrink-0">
                                <span className="font-mono text-[10px] text-slate-600">{idx + 1}</span>
                              </div>
                            )}
                          </div>
                          <span className="font-sans text-xs md:text-sm font-medium">{step}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Progress bar wrapper */}
                {(isRunning || progress > 0) && (
                  <div className="space-y-1.5">
                    <div className="flex justify-between text-xs font-mono">
                      <span className="text-slate-500">Pipeline compilation progress</span>
                      <span className="text-indigo-400 font-semibold">{progress}%</span>
                    </div>
                    <div className="w-full bg-slate-950/60 h-2 rounded-full overflow-hidden border border-slate-900">
                      <div
                        className="bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 h-full rounded-full transition-all duration-100 ease-out"
                        style={{ width: `${progress}%` }}
                      ></div>
                    </div>
                  </div>
                )}

                {/* JSON terminal output */}
                {isCompleted && (
                  <div className="flex flex-col gap-2 animate-fadeIn">
                    <span className="font-mono text-[10px] text-slate-500 uppercase tracking-wider font-bold">Node Output Payload (JSON)</span>
                    <pre className="p-4 bg-slate-950 border border-slate-900 rounded-2xl text-[11px] md:text-xs font-mono text-emerald-400 overflow-x-auto max-h-[170px] leading-relaxed shadow-inner">
                      {JSON.stringify(selectedAgent.mockOutput, null, 2)}
                    </pre>

                    {/* Operational stats */}
                    <div className="grid grid-cols-3 gap-2.5 mt-2 bg-slate-900/30 border border-slate-800/60 p-3 rounded-xl">
                      <div className="text-center">
                        <p className="text-[10px] text-slate-500 uppercase font-mono font-semibold">Latency</p>
                        <p className="text-xs text-white font-bold font-mono mt-0.5">{selectedAgent.latency}</p>
                      </div>
                      <div className="text-center border-x border-slate-800/80">
                        <p className="text-[10px] text-slate-500 uppercase font-mono font-semibold">In/Out Tokens</p>
                        <p className="text-xs text-white font-bold font-mono mt-0.5">{selectedAgent.tokens}</p>
                      </div>
                      <div className="text-center">
                        <p className="text-[10px] text-slate-500 uppercase font-mono font-semibold">Estimated Cost</p>
                        <p className="text-xs text-emerald-400 font-bold font-mono mt-0.5">{selectedAgent.cost}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
