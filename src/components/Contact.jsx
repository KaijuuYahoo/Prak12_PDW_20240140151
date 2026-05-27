import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Mail, MapPin, Sparkles } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' or 'error'

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear errors when user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      tempErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Email address is invalid';
    }
    if (!formData.message.trim()) tempErrors.message = 'Message is required';
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', company: '', message: '' });
    }, 1800);
  };

  return (
    <section id="contact" className="py-24 bg-slate-950/40 relative">
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          {/* Left Column: Contact details */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <div>
              <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 font-sans text-xs font-semibold tracking-wide mb-4">
                <Sparkles className="w-3 h-3 animate-pulse" />
                Get in Touch
              </div>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight mb-4">
                Ready to Optimize Your{' '}
                <span className="text-gradient font-bold">Inference Logic?</span>
              </h2>
              <p className="text-slate-400 font-sans text-base leading-relaxed">
                Connect with our solutions engineers to build custom enterprise integrations, schedule a developer walkthrough, or apply for pilot credits.
              </p>
            </div>

            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-slate-900/60 border border-slate-800 rounded-2xl text-indigo-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-semibold font-mono uppercase">Email Support</p>
                  <p className="text-sm text-slate-200 font-medium font-sans">partnerships@aethera.ai</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-slate-900/60 border border-slate-800 rounded-2xl text-indigo-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-semibold font-mono uppercase">Global HQ</p>
                  <p className="text-sm text-slate-200 font-medium font-sans">One Sansome St, San Francisco, CA</p>
                </div>
              </div>
            </div>

            <div className="border-t border-slate-800/80 pt-6">
              <h4 className="font-sans text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">Enterprise Standard</h4>
              <ul className="space-y-2 text-sm text-slate-400 font-sans">
                <li className="flex items-center gap-2">✓ Custom SOC-2 compliant tenant hosting</li>
                <li className="flex items-center gap-2">✓ Dynamic vector indexing pipelines</li>
                <li className="flex items-center gap-2">✓ Custom Service Level Agreements (SLAs)</li>
              </ul>
            </div>
          </div>

          {/* Right Column: Contact form */}
          <div className="lg:col-span-7">
            <div className="glass rounded-3xl p-6 md:p-8 border border-slate-800 shadow-2xl">
              {submitStatus === 'success' ? (
                <div className="text-center py-12 flex flex-col items-center justify-center gap-4 animate-fadeIn">
                  <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-full">
                    <CheckCircle2 className="w-12 h-12" />
                  </div>
                  <h3 className="font-display font-bold text-xl text-white">Message Dispatched!</h3>
                  <p className="text-slate-400 font-sans text-sm max-w-md leading-relaxed">
                    Thank you. We have received your inquiry. A solutions architect will reach out to your inbox within the next 2 hours.
                  </p>
                  <button
                    onClick={() => setSubmitStatus(null)}
                    className="mt-6 px-6 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white text-sm font-semibold rounded-xl transition-all duration-200"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    
                    {/* Name */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-semibold text-slate-400 font-sans">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full bg-slate-950/60 border rounded-xl px-4 py-3 text-slate-200 text-sm focus:outline-none transition-colors ${
                          errors.name ? 'border-red-500/50 focus:border-red-500' : 'border-slate-800/80 focus:border-indigo-500/60'
                        }`}
                        placeholder="Sarah Connor"
                      />
                      {errors.name && (
                        <span className="text-red-400 text-xs flex items-center gap-1 font-medium mt-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          {errors.name}
                        </span>
                      )}
                    </div>

                    {/* Email */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-semibold text-slate-400 font-sans">Business Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full bg-slate-950/60 border rounded-xl px-4 py-3 text-slate-200 text-sm focus:outline-none transition-colors ${
                          errors.email ? 'border-red-500/50 focus:border-red-500' : 'border-slate-800/80 focus:border-indigo-500/60'
                        }`}
                        placeholder="sarah@company.com"
                      />
                      {errors.email && (
                        <span className="text-red-400 text-xs flex items-center gap-1 font-medium mt-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          {errors.email}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Company */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-slate-400 font-sans">Company / Organization</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full bg-slate-950/60 border border-slate-800/80 rounded-xl px-4 py-3 text-slate-200 text-sm focus:outline-none focus:border-indigo-500/60 transition-colors"
                      placeholder="Cyberdyne Systems"
                    />
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-slate-400 font-sans">Tell us about your application *</label>
                    <textarea
                      name="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      className={`w-full bg-slate-950/60 border rounded-xl p-4 text-slate-200 text-sm focus:outline-none transition-colors resize-none ${
                        errors.message ? 'border-red-500/50 focus:border-red-500' : 'border-slate-800/80 focus:border-indigo-500/60'
                      }`}
                      placeholder="We want to automate content classification workflows using vector DB callbacks..."
                    />
                    {errors.message && (
                      <span className="text-red-400 text-xs flex items-center gap-1 font-medium mt-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.message}
                      </span>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full relative group overflow-hidden py-3.5 rounded-2xl font-semibold text-sm transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center cursor-pointer"
                  >
                    <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600"></span>
                    <span className="relative text-white flex items-center justify-center gap-2">
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin"></div>
                          Transmitting request...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Send Message
                        </>
                      )}
                    </span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
