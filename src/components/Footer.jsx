import React, { useState } from 'react';
import { Sparkles, Globe, Send, Check } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email || !/\S+@\S+\.\S+/.test(email)) return;

    setSubscribed(true);
    setTimeout(() => {
      setEmail('');
    }, 1000);
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-900 bg-slate-950/60 pt-20 pb-10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-16 border-b border-slate-900">
          
          {/* Logo & Pitch (lg:col-span-4) */}
          <div className="lg:col-span-4 flex flex-col gap-5">
            <div className="flex items-center gap-2">
              <div className="p-2 bg-indigo-600/20 rounded-xl border border-indigo-500/30 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-indigo-400" />
              </div>
              <span className="font-display font-bold text-lg tracking-wide text-white">
                Aethera<span className="text-indigo-400">.ai</span>
              </span>
            </div>
            <p className="text-sm text-slate-500 leading-relaxed font-sans max-w-sm">
              Deploying autonomous, secure, and cost-optimized agent systems for scaling technology teams globally.
            </p>
          </div>

          {/* Nav Columns (lg:col-span-5) */}
          <div className="lg:col-span-5 grid grid-cols-3 gap-6">
            
            {/* Product */}
            <div className="flex flex-col gap-4">
              <h5 className="text-xs font-bold text-slate-400 uppercase tracking-widest font-sans">Product</h5>
              <div className="flex flex-col gap-2.5 text-sm font-sans text-slate-500">
                <a href="#features" className="hover:text-slate-300 transition-colors">Features</a>
                <a href="#playground" className="hover:text-slate-300 transition-colors">Playground</a>
                <a href="#pricing" className="hover:text-slate-300 transition-colors">Pricing</a>
                <a href="#" className="hover:text-slate-300 transition-colors">Documentation</a>
              </div>
            </div>

            {/* Resources */}
            <div className="flex flex-col gap-4">
              <h5 className="text-xs font-bold text-slate-400 uppercase tracking-widest font-sans">Resources</h5>
              <div className="flex flex-col gap-2.5 text-sm font-sans text-slate-500">
                <a href="#" className="hover:text-slate-300 transition-colors">Blog</a>
                <a href="#" className="hover:text-slate-300 transition-colors">Changelog</a>
                <a href="#" className="hover:text-slate-300 transition-colors">Community</a>
                <a href="#" className="hover:text-slate-300 transition-colors">System Status</a>
              </div>
            </div>

            {/* Company */}
            <div className="flex flex-col gap-4">
              <h5 className="text-xs font-bold text-slate-400 uppercase tracking-widest font-sans">Company</h5>
              <div className="flex flex-col gap-2.5 text-sm font-sans text-slate-500">
                <a href="#" className="hover:text-slate-300 transition-colors">About Us</a>
                <a href="#" className="hover:text-slate-300 transition-colors">Careers</a>
                <a href="#" className="hover:text-slate-300 transition-colors">Security</a>
                <a href="#contact" className="hover:text-slate-300 transition-colors">Contact</a>
              </div>
            </div>

          </div>

          {/* Newsletter Input (lg:col-span-3) */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <h5 className="text-xs font-bold text-slate-400 uppercase tracking-widest font-sans">Subscribe to Newsletter</h5>
            <p className="text-xs text-slate-500 font-sans leading-relaxed">
              Get the latest insights on autonomous agent design, prompt tuning, and caching optimizations.
            </p>

            <form onSubmit={handleSubscribe} className="relative mt-2">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={subscribed}
                placeholder="developer@aethera.ai"
                className="w-full bg-slate-900 border border-slate-800 rounded-xl py-3 pl-4 pr-12 text-sm text-slate-200 focus:outline-none focus:border-indigo-500/60 transition-colors disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={subscribed}
                className={`absolute right-2 top-2 p-1.5 rounded-lg text-white transition-all cursor-pointer ${
                  subscribed ? 'bg-emerald-500 text-white' : 'bg-indigo-600 hover:bg-indigo-500'
                }`}
              >
                {subscribed ? <Check className="w-4.5 h-4.5" /> : <Send className="w-4.5 h-4.5" />}
              </button>
            </form>
            {subscribed && (
              <span className="text-[11px] text-emerald-400 font-semibold font-sans animate-fadeIn">
                ✓ Check your inbox to confirm subscription.
              </span>
            )}
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-8 gap-4">
          <p className="text-xs text-slate-600 font-sans">
            © {currentYear} Aethera Technologies, Inc. All rights reserved.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              aria-label="GitHub"
              className="p-2 border border-slate-900 bg-slate-900/20 hover:bg-slate-800 rounded-xl text-slate-500 hover:text-slate-200 transition-all cursor-pointer"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
            <a
              href="#"
              aria-label="Twitter/X"
              className="p-2 border border-slate-900 bg-slate-900/20 hover:bg-slate-800 rounded-xl text-slate-500 hover:text-slate-200 transition-all cursor-pointer"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a
              href="#"
              aria-label="Website"
              className="p-2 border border-slate-900 bg-slate-900/20 hover:bg-slate-800 rounded-xl text-slate-500 hover:text-slate-200 transition-all cursor-pointer"
            >
              <Globe className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
