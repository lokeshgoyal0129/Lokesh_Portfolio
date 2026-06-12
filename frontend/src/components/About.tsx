"use client";

import { motion } from 'framer-motion';
import { Terminal, Database, ShieldCheck, Cpu, Layout, Code } from 'lucide-react';

const SKILL_CATEGORIES = [
  {
    title: 'Languages & Core',
    icon: <Code className="w-5 h-5 text-violet-400" />,
    skills: ['C#', 'TypeScript', 'JavaScript', 'SQL', 'HTML5', 'CSS3']
  },
  {
    title: 'Frontend Frameworks',
    icon: <Layout className="w-5 h-5 text-cyan-400" />,
    skills: ['Next.js', 'React', 'Angular', 'AngularJS', 'Tailwind CSS', 'Bootstrap']
  },
  {
    title: 'Backend & Web APIs',
    icon: <Terminal className="w-5 h-5 text-indigo-400" />,
    skills: ['ASP.NET Core', 'ASP.NET MVC', 'Web API', 'ADO.NET', 'Node.js', 'Express']
  },
  {
    title: 'Databases & Performance',
    icon: <Database className="w-5 h-5 text-emerald-400" />,
    skills: ['SQL Server', 'PostgreSQL', 'Stored Procedures', 'Query Optimization']
  },
  {
    title: 'DevOps & Cloud',
    icon: <Cpu className="w-5 h-5 text-yellow-400" />,
    skills: ['Microsoft Azure', 'GitHub Actions', 'CI/CD Pipelines', 'Azure DevOps']
  },
  {
    title: 'Development Tools',
    icon: <ShieldCheck className="w-5 h-5 text-red-400" />,
    skills: ['Git', 'Visual Studio', 'Postman', 'Swagger']
  }
];

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } }
  };

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-transparent border-b border-slate-200/50">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-start text-left mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-3">01 // PROFILE & COMPETENCY</span>
          <h2 className="text-3xl md:text-5xl font-bold font-outfit text-slate-900">About Me & Skills</h2>
          <div className="h-[2px] w-20 bg-gradient-to-r from-blue-500 to-cyan-500 mt-4 rounded-full" />
        </div>

        {/* Intro Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20 items-stretch">
          {/* Detailed Paragraphs */}
          <div className="lg:col-span-8 flex flex-col justify-center space-y-6 text-slate-600 text-base md:text-lg leading-relaxed">
            <p>
              I am a results-oriented **Full Stack Software Engineer** and **Gen AI Developer** with over **4 years and 2 months** of experience. I specialize in designing, developing, and executing complex software projects that enhance platforms and streamline workflows.
            </p>
            <p>
              My expertise spans the entire software lifecycle, from architecting robust, secure backends using **C#, ASP.NET Core, and Express** to engineering fluid, responsive user interfaces with **Angular, Next.js, and React**. I enjoy bridging backend power with clean frontend aesthetics to build high-performance products.
            </p>
            <p>
              Consistently active in Agile environments, I focus heavily on collaboration, mentoring junior developers, and automating CI/CD pipelines to ensure continuous, high-quality delivery. I am currently targeting roles as a **Full Stack Developer** or **Gen AI Developer**, where I can help teams integrate advanced LLMs and agent workflows into consumer-facing applications.
            </p>
          </div>

          {/* Quick Facts Sidebar */}
          <div className="lg:col-span-4">
            <div className="glass-card border-slate-200/50 p-6 rounded-2xl h-full flex flex-col justify-between relative shadow-xl">
              <div className="space-y-6">
                <h3 className="text-slate-900 font-semibold font-outfit text-lg mb-4">Target Roles & Interest</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-blue-500" />
                    <span className="text-sm text-slate-700 font-medium">Full Stack Software Engineer</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-indigo-500" />
                    <span className="text-sm text-slate-700 font-medium">Gen AI Developer</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-cyan-500" />
                    <span className="text-sm text-slate-700 font-medium">C# / .NET Core Specialist</span>
                  </div>
                </div>
              </div>

              <div className="border-t border-slate-200 pt-6 mt-8">
                <p className="text-xs text-slate-500 font-medium uppercase mb-2">Education</p>
                <h4 className="text-sm text-slate-900 font-bold font-outfit leading-tight">B.Tech in Computer Science & Eng</h4>
                <p className="text-xs text-slate-600 mt-1">KCC Institute of Technology & Mgmt, Noida</p>
                <div className="flex items-center justify-between text-xs text-slate-500 mt-3 font-semibold">
                  <span>Class of 2022</span>
                  <span className="px-2 py-0.5 rounded bg-slate-100 border border-slate-200/80 text-slate-700">Grade: 77%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {SKILL_CATEGORIES.map((category, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="glass-card glass-card-hover p-6 rounded-2xl flex flex-col"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2 rounded-xl bg-slate-100 border border-slate-200/80">
                  {category.icon}
                </div>
                <h3 className="text-slate-900 font-semibold font-outfit text-base tracking-tight">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2 mt-auto">
                {category.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-100/60 border border-slate-200/80 text-slate-700 hover:text-blue-600 hover:border-blue-500/30 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
