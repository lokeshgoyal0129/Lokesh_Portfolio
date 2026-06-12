"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Layers, MapPin, Sparkles, Code2, Globe } from 'lucide-react';

const CATEGORIES = ['All', 'FinTech', 'HealthTech', 'AI & SaaS'];

const PROJECTS = [
  {
    title: 'FundCore',
    category: 'FinTech',
    company: 'Greenware Solution Pvt Ltd',
    description: 'A cloud-based investment platform supporting transactions for Mutual Funds, Bonds, Equities, Fixed Deposits, and Lumpsum investments.',
    tech: ['ASP.NET Core', 'SQL Server', 'AngularJS', 'C#', 'REST APIs'],
    contribution: 'Handled full-stack features: engineered backend APIs, designed AngularJS controllers, and structured stored procedures in SQL Server to ensure real-time transaction processing.',
    links: [
      { label: 'Login App', href: 'https://main.fundcore.in/#!/login', icon: <Globe className="w-4 h-4" /> },
      { label: 'Product Website', href: 'https://www.greenwaresolutions.com/why-fundcore.html', icon: <ExternalLink className="w-4 h-4" /> }
    ],
    highlight: <Layers className="w-5 h-5 text-blue-400" />
  },
  {
    title: 'EDP (Equipment Distribution Platform)',
    category: 'HealthTech',
    company: 'Agiliti Health (Client)',
    description: 'An asset management and logistics tracker for hospital treatments, monitoring clinical devices and health machine distribution.',
    tech: ['ASP.NET Core', 'C#', 'SQL Server', 'ASP.NET MVC', 'Azure Maps', 'jQuery'],
    contribution: 'Integrated Azure Maps API to track equipment locations, engineered spatial database models in SQL Server, and developed frontend MVC workflows for asset dispatchers.',
    links: [
      { label: 'Agiliti Health', href: 'https://www.agilitihealth.com/', icon: <ExternalLink className="w-4 h-4" /> }
    ],
    highlight: <MapPin className="w-5 h-5 text-cyan-400" />
  },
  {
    title: 'Resume Banaoo',
    category: 'AI & SaaS',
    company: 'Personal Project',
    description: 'An AI-powered resume builder allowing job seekers to input details, auto-format layouts, check ATS relevancy scores, and generate optimized resume bullets.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Gen AI API', 'Node.js', 'ATS Scorer'],
    contribution: 'Designed and built the application from scratch. Integrated generative AI prompts for professional bullet recommendations and developed a parsing validator for ATS score checks.',
    links: [
      { label: 'Live App', href: 'https://resumebanaoo.netlify.app/', icon: <Globe className="w-4 h-4" /> }
    ],
    highlight: <Sparkles className="w-5 h-5 text-emerald-400 animate-pulse" />
  }
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects = activeFilter === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-transparent border-b border-slate-200/50">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Heading & Filter Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="flex flex-col items-start text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-3">03 // SELECTED WORKS</span>
            <h2 className="text-3xl md:text-5xl font-bold font-outfit text-slate-900">Featured Projects</h2>
            <div className="h-[2px] w-20 bg-gradient-to-r from-blue-500 to-cyan-500 mt-4 rounded-full" />
          </div>

          {/* Filter Navigation */}
          <div className="flex flex-wrap gap-2 p-1.5 rounded-full bg-slate-100 border border-slate-200 backdrop-blur-md self-start md:self-end">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`relative px-4 py-2 text-xs font-semibold rounded-full transition-colors ${
                  activeFilter === cat ? 'text-white' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {activeFilter === cat && (
                  <motion.span
                    layoutId="activeFilterBg"
                    className="absolute inset-0 bg-blue-600 rounded-full -z-10"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                key={project.title}
                className="glass-card glass-card-hover rounded-2xl border-slate-200/60 hover:border-blue-600/30 p-6 flex flex-col justify-between h-full relative"
              >
                <div>
                  {/* Category & Badge */}
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-[10px] font-bold tracking-wider uppercase px-2 py-1 rounded bg-blue-50 border border-blue-200/60 text-blue-700">
                      {project.category}
                    </span>
                    <div className="p-2 rounded-lg bg-slate-100 border border-slate-200/80">
                      {project.highlight}
                    </div>
                  </div>

                  {/* Title & Company */}
                  <h3 className="text-xl font-bold font-outfit text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs font-semibold text-slate-500 mb-4">{project.company}</p>

                  {/* Description */}
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Contribution */}
                  <div className="bg-slate-50 border border-slate-100 p-4 rounded-xl mb-6">
                    <p className="text-[11px] font-bold text-blue-600 uppercase mb-1">My Contribution</p>
                    <p className="text-xs text-slate-600 leading-normal">{project.contribution}</p>
                  </div>
                </div>

                <div>
                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded text-[10px] font-semibold bg-slate-100 border border-slate-200/60 text-slate-600"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Action Links */}
                  <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-200/60">
                    {project.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-100 hover:bg-slate-200/80 border border-slate-200 hover:border-blue-600/30 text-slate-600 hover:text-slate-900 transition-all duration-200"
                      >
                        {link.icon}
                        <span>{link.label}</span>
                      </a>
                    ))}
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Case Study Section (Chatbot Agent Workflow) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 p-8 md:p-10 rounded-2xl bg-blue-50/50 border border-blue-200/80 hover:border-blue-300/80 flex flex-col lg:flex-row items-center gap-8 relative overflow-hidden shadow-sm"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/5 rounded-full blur-3xl pointer-events-none -z-10" />
          
          <div className="p-4 rounded-2xl bg-blue-100 border border-blue-200/80 flex items-center justify-center flex-shrink-0">
            <Code2 className="w-10 h-10 text-blue-600" />
          </div>

          <div className="flex-1 text-left">
            <span className="text-xs font-bold tracking-widest text-blue-700 uppercase block mb-2">CASE STUDY FOCUS</span>
            <h3 className="text-2xl font-bold font-outfit text-slate-900 mb-3">AI Agent Integration & LLM Prompt Engineering</h3>
            <p className="text-sm text-slate-600 leading-relaxed mb-4">
              Demonstrating the capability to architect and deploy functional Generative AI integrations. In the **Resume Banaoo** project, I engineered structured system prompts for contextual formatting and set up semantic parsing models to validate bullet points against ATS resume compliance indices.
            </p>
            <p className="text-xs text-slate-500 font-semibold leading-relaxed">
              👉 Check it out live by clicking the &ldquo;Ask my AI Assistant&rdquo; chatbot in the bottom right corner of this website!
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
