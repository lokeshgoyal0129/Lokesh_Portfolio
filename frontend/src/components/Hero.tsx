"use client";

import { motion } from 'framer-motion';
import { ArrowRight, MessageSquare, Download, CheckCircle2 } from 'lucide-react';

const STATS = [
  { value: '4+ Yrs', label: 'Experience' },
  { value: '10+', label: 'APIs Developed' },
  { value: '10+', label: 'Features Delivered' },
  { value: '4', label: 'Major Projects' }
];

export default function Hero() {
  const triggerChat = () => {
    // Dispatch custom event to open the chat widget in the footer/corner
    const event = new CustomEvent('open-portfolio-chat');
    window.dispatchEvent(event);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-dot-grid">
      {/* Background Glowing Lights */}
      <div className="glow-orb glow-orb-primary -top-20 -left-20" />
      <div className="glow-orb glow-orb-secondary bottom-10 -right-20" />

      {/* Decorative Grid Overlay - Professional smooth shading */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#f8fafc]/40 to-[#f8fafc] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Pitch Column */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-200/60 text-blue-700 text-xs font-semibold tracking-wide uppercase mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
            <span>Open to Opportunities</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold font-outfit tracking-tight leading-none text-slate-900 mb-6"
          >
            Hi, I&apos;m <span className="text-gradient-neon font-extrabold">Lokesh Goyal</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-3xl font-medium font-outfit text-slate-800 mb-6"
          >
            Software Engineer / Full Stack & Gen AI Developer
          </motion.h2>

          {/* Short Bio */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-base md:text-lg text-slate-600 max-w-2xl leading-relaxed mb-10"
          >
            I consistently drive innovation and transform complex visions into high-quality software. 
            Specializing in building scalable fintech services, geospatial platforms, and integrating Gen AI 
            workflows to solve enterprise problems.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center gap-4 mb-14"
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm rounded-full transition-all duration-300 shadow-lg shadow-blue-600/20 hover:shadow-blue-600/35 hover:-translate-y-0.5 group"
            >
              <span>Get In Touch</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <button
              onClick={triggerChat}
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-slate-100 hover:bg-slate-200/80 border border-slate-200 text-slate-700 hover:text-slate-950 hover:border-blue-600/50 font-semibold text-sm rounded-full transition-all duration-300 backdrop-blur-md hover:-translate-y-0.5"
            >
              <MessageSquare className="w-4 h-4 text-blue-600" />
              <span>Ask my AI Assistant</span>
            </button>
          </motion.div>

          {/* Key Metrics Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 border-t border-slate-200 pt-8 w-full"
          >
            {STATS.map((stat, idx) => (
              <div key={idx} className="flex flex-col">
                <span className="text-3xl md:text-4xl font-extrabold font-outfit text-slate-900 tracking-tight">
                  {stat.value}
                </span>
                <span className="text-xs md:text-sm text-slate-500 mt-1 font-medium">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Visual Graphic Column */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5 hidden lg:flex items-center justify-center relative"
        >
          {/* Card Mockup representing a clean IDE dashboard */}
          <div className="w-[380px] h-[340px] glass-card rounded-2xl p-6 border-slate-200/80 flex flex-col relative animated-border shadow-2xl">
            {/* Header dots */}
            <div className="flex items-center gap-1.5 mb-6">
              <span className="w-3 h-3 rounded-full bg-red-500/80" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <span className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>

            {/* Profile Overview */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-500 flex items-center justify-center text-white font-extrabold text-lg shadow-lg">
                LG
              </div>
              <div>
                <h3 className="text-slate-900 font-semibold font-outfit text-sm">Lokesh Goyal</h3>
                <p className="text-slate-500 text-xs">Faridabad, India</p>
              </div>
            </div>

            {/* Tech Tags Display */}
            <div className="flex-1 space-y-4">
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs font-semibold text-slate-600">
                  <span>Backend (C# / .NET Core / Node)</span>
                  <span className="text-blue-600">95%</span>
                </div>
                <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '95%' }}
                    transition={{ duration: 1, delay: 0.6 }}
                    className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <div className="flex justify-between text-xs font-semibold text-slate-600">
                  <span>Frontend (Angular / Next.js / React)</span>
                  <span className="text-cyan-600">90%</span>
                </div>
                <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '90%' }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="h-full bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-full"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <div className="flex justify-between text-xs font-semibold text-slate-600">
                  <span>Databases & Cloud (SQL Server / Azure)</span>
                  <span className="text-emerald-600">85%</span>
                </div>
                <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '85%' }}
                    transition={{ duration: 1, delay: 1 }}
                    className="h-full bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-full"
                  />
                </div>
              </div>
            </div>

            {/* Floating details */}
            <div className="absolute -bottom-6 -left-6 glass-card px-4 py-3 border-slate-200/50 rounded-xl shadow-lg flex items-center gap-2 max-w-[200px]">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
              <span className="text-[10px] text-slate-600 font-semibold leading-tight">GIS / Map integrations verified</span>
            </div>

            <div className="absolute -top-6 -right-6 glass-card px-4 py-3 border-slate-200/50 rounded-xl shadow-lg flex items-center gap-2 max-w-[200px]">
              <MessageSquare className="w-4 h-4 text-blue-600 flex-shrink-0 animate-bounce" />
              <span className="text-[10px] text-slate-600 font-semibold leading-tight">AI Chat Agent Online</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
