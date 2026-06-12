"use client";

import { motion } from 'framer-motion';
import { Calendar, Briefcase, ChevronRight } from 'lucide-react';

const EXPERIENCES = [
  {
    role: 'Senior Software Engineer',
    company: 'Greenware Solution Pvt Ltd',
    period: '2025 – 2026',
    bullets: [
      'Developed and enhanced a cloud-based investment platform supporting Mutual Funds, Bonds, Equities, Fixed Deposits, and Lumpsum transactions.',
      'Built responsive and reusable UI components using Angular, TypeScript, HTML5, CSS3, and Bootstrap, improving engagement and platform usability.',
      'Designed and maintained secure, scalable RESTful APIs using ASP.NET Core and C#, facilitating transaction processing and integrations.',
      'Reduced production defects by over 40% through comprehensive unit testing, integration testing, and code quality improvements.',
      'Optimized SQL Server databases, stored procedures, and complex queries to support high-performance transaction processing and real-time reporting.',
      'Contributed to Microsoft Azure cloud architecture and deployment strategies, ensuring enterprise scalability and security.'
    ],
    skills: ['Angular', 'TypeScript', 'C#', 'ASP.NET Core', 'SQL Server', 'Azure', 'RESTful APIs']
  },
  {
    role: 'Software Engineer',
    company: 'Kalingam Technology Pvt Ltd',
    period: '2024 – 2025',
    bullets: [
      'Developed and maintained scalable web applications using ASP.NET Core, C#, and SQL Server.',
      'Built responsive user interfaces with ASP.NET MVC, HTML5, CSS3, JavaScript, jQuery, and Bootstrap.',
      'Designed and optimized database objects, including stored procedures, views, and complex SQL queries, improving backend speeds.',
      'Collaborated with cross-functional teams to gather requirements, develop solutions, and deliver high-quality software in Agile sprints.',
      'Conducted code reviews, resolved critical production bugs, and ensured adherence to coding standards.'
    ],
    skills: ['ASP.NET Core', 'C#', 'SQL Server', 'ASP.NET MVC', 'JavaScript', 'jQuery', 'Bootstrap', 'Agile']
  },
  {
    role: 'Associate Software Engineer',
    company: 'Digital Successive',
    period: '2022 – 2023',
    bullets: [
      'Engineered a GIS-enabled agricultural management platform using ASP.NET MVC, C#, JavaScript, jQuery, and Esri ArcGIS, supporting land identification.',
      'Integrated Esri ArcGIS mapping services to create, edit, and manage spatial data using polygons, lines, and point geometries.',
      'Enhanced platform usability by redesigning UI components and user workflows, boosting planner and field staff efficiency.',
      'Implemented geospatial data extraction and automated storage of map coordinates and metadata into SQL Server.',
      'Supported end-to-end development, testing, and deployment of GIS-based modules.'
    ],
    skills: ['C#', 'ASP.NET MVC', 'JavaScript', 'jQuery', 'ArcGIS', 'SQL Server', 'Geospatial Data']
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-transparent border-b border-slate-200/50">
      {/* Background ambient orb */}
      <div className="glow-orb glow-orb-primary top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-start text-left mb-20">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-3">02 // CAREER TIMELINE</span>
          <h2 className="text-3xl md:text-5xl font-bold font-outfit text-slate-900">Work Experience</h2>
          <div className="h-[2px] w-20 bg-gradient-to-r from-blue-500 to-cyan-500 mt-4 rounded-full" />
        </div>

        {/* Vertical Timeline */}
        <div className="relative border-l-2 border-slate-200 ml-4 md:ml-12 pl-8 md:pl-16 space-y-16">
          
          {EXPERIENCES.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="relative group"
            >
              {/* Glowing Timeline Marker */}
              <div className="absolute -left-[41px] md:-left-[73px] top-1.5 w-[20px] h-[20px] rounded-full bg-slate-50 border-4 border-slate-300 flex items-center justify-center group-hover:border-blue-600 group-hover:bg-blue-600/10 transition-all duration-300 shadow-[0_0_10px_rgba(37,99,235,0)] group-hover:shadow-[0_0_15px_rgba(37,99,235,0.4)]">
                <div className="w-1.5 h-1.5 rounded-full bg-slate-400 group-hover:bg-blue-600 transition-colors" />
              </div>

              {/* Experience Card */}
              <div className="glass-card border-slate-200/50 group-hover:border-blue-600/20 p-6 md:p-8 rounded-2xl transition-all duration-300 relative shadow-xl hover:bg-white/90">
                
                {/* Header Info */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold font-outfit text-slate-900 group-hover:text-blue-600 transition-colors">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-2 mt-1">
                      <Briefcase className="w-4 h-4 text-slate-500" />
                      <span className="text-slate-600 font-semibold text-sm">{exp.company}</span>
                    </div>
                  </div>
                  
                  {/* Period Badge */}
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-600 self-start md:self-center">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Bullets */}
                <ul className="space-y-3.5 mb-8">
                  {exp.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2.5 text-slate-600 text-sm md:text-base leading-relaxed">
                      <ChevronRight className="w-4 h-4 text-blue-600 mt-1.5 flex-shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-200/60">
                  {exp.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-1 rounded-md text-xs font-semibold bg-blue-50 border border-blue-200 text-blue-700"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}
