"use client";

import { useState } from 'react';
import { Mail, Send, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';

const Linkedin = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const Github = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [responseMsg, setResponseMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('loading');

    try {
      const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:5000';
      const response = await fetch(`${backendUrl}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit message.');
      }

      const data = await response.json();
      setStatus('success');
      setResponseMsg(data.message || 'Your message has been sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      console.error('Contact submit error:', err);
      setStatus('error');
      setResponseMsg('Could not reach backend server. Please send an email directly to kumarlokesh0129@gmail.com.');
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-transparent border-b border-slate-200/50">
      {/* Background ambient light */}
      <div className="glow-orb glow-orb-secondary -bottom-20 -left-20" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-start text-left mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-3">04 // GET IN TOUCH</span>
          <h2 className="text-3xl md:text-5xl font-bold font-outfit text-slate-900">Contact & Connect</h2>
          <div className="h-[2px] w-20 bg-gradient-to-r from-blue-500 to-cyan-500 mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Details Column */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold font-outfit text-slate-900">Let&apos;s build something great.</h3>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                Whether you are a recruiter looking for a Senior Software Engineer / Gen AI Developer to join your team, 
                have a query, or simply want to say hello, feel free to drop a message. I am actively looking for full-time roles.
              </p>

              {/* Direct Info */}
              <div className="space-y-4 pt-6">
                
                <a 
                  href="mailto:kumarlokesh0129@gmail.com" 
                  className="flex items-center gap-4 p-4 rounded-xl bg-slate-100 border border-slate-200 hover:border-blue-600/30 text-slate-700 hover:text-slate-950 transition-all group"
                >
                  <div className="p-3 rounded-lg bg-blue-600/10 border border-blue-500/20 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-500 uppercase leading-none">Email Address</p>
                    <p className="text-sm font-semibold mt-1">kumarlokesh0129@gmail.com</p>
                  </div>
                </a>

                <a 
                  href="https://www.linkedin.com/in/lokesh-goyal-88ba48187/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-4 p-4 rounded-xl bg-slate-100 border border-slate-200 hover:border-blue-600/30 text-slate-700 hover:text-slate-950 transition-all group"
                >
                  <div className="p-3 rounded-lg bg-blue-600/10 border border-blue-500/20 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-500 uppercase leading-none">LinkedIn Profile</p>
                    <p className="text-sm font-semibold mt-1">lokesh-goyal-88ba48187</p>
                  </div>
                </a>

                <a 
                  href="https://github.com/lokeshgoyal0129" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-4 p-4 rounded-xl bg-slate-100 border border-slate-200 hover:border-blue-600/30 text-slate-700 hover:text-slate-950 transition-all group"
                >
                  <div className="p-3 rounded-lg bg-blue-600/10 border border-blue-500/20 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <Github className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-500 uppercase leading-none">GitHub Profile</p>
                    <p className="text-sm font-semibold mt-1">lokeshgoyal0129</p>
                  </div>
                </a>

              </div>
            </div>

            <div className="pt-8 text-slate-500 text-xs font-medium border-t border-slate-200 mt-8 lg:mt-0">
              ⚡ Response rate: typically within 24 hours.
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7">
            <div className="glass-card border-slate-200/80 p-6 md:p-8 rounded-2xl shadow-2xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name Input */}
                  <div className="space-y-2 text-left">
                    <label htmlFor="name" className="text-xs font-bold text-slate-500 uppercase tracking-wider">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="John Doe"
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all"
                    />
                  </div>
                  
                  {/* Email Input */}
                  <div className="space-y-2 text-left">
                    <label htmlFor="email" className="text-xs font-bold text-slate-500 uppercase tracking-wider">Your Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all"
                    />
                  </div>
                </div>

                {/* Message Input */}
                <div className="space-y-2 text-left">
                  <label htmlFor="message" className="text-xs font-bold text-slate-500 uppercase tracking-wider">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    placeholder="Describe your project, role scope, or inquiries here..."
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all resize-none"
                  />
                </div>

                {/* Form Responses */}
                {status === 'success' && (
                  <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/25 text-emerald-600 text-xs flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                    <span>{responseMsg}</span>
                  </div>
                )}

                {status === 'error' && (
                  <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/25 text-red-600 text-xs flex items-center gap-3">
                    <AlertCircle className="w-5 h-5 flex-shrink-0" />
                    <span>{responseMsg}</span>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm rounded-xl transition-all duration-300 shadow-lg shadow-blue-600/10 hover:shadow-blue-600/20 disabled:opacity-50"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending inquiry...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>

              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
