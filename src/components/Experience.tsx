import React from 'react';
import { experienceData } from '../data/portfolioData';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-stone-50 border-b border-stone-200/40">
      {/* Kontainer utama menggunakan flex-col agar vertikal ke bawah */}
      <div className="max-w-xl mx-auto px-6 flex flex-col space-y-12">
        
        {/*JUDUL */}
        <div className="text-center">
          <h2 className="text-2xl font-normal text-stone-800 tracking-tight">Work Experience</h2>
          <p className="text-stone-400 font-light text-xs mt-2.5">Perjalanan karier dan pengalaman profesional saya dalam industri teknologi</p>
        </div>

        {/* TIMELINE */}
        <div className="border-l border-stone-200 pl-6 space-y-12 relative">
          {experienceData.map((exp, index) => (
            <div key={index} className="relative space-y-2 text-left">
              
              <div className="absolute -left-7 top-1.5 w-2 h-2 rounded-full bg-stone-900 border border-stone-50"></div>
              
              {/* Detail Jabatan */}
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-2">
                <h3 className="text-base font-medium text-stone-900 tracking-tight">
                  {exp.role}
                </h3>
                <span className="text-[10px] font-semibold text-stone-500 tracking-wider uppercase bg-stone-100 px-2 py-0.5 rounded-sm border border-stone-200/60 w-max">
                  {exp.duration}
                </span>
              </div>
              
              <p className="text-xs font-medium text-stone-400 uppercase tracking-wider">
                {exp.company}
              </p>
              
              <ul className="text-xs text-stone-600 space-y-2 pt-2 list-disc list-outside pl-4 leading-relaxed">
                {exp.tasks.map((task, idx) => (
                  <li key={idx} className="marker:text-stone-400">
                    {task}
                  </li>
                ))}
              </ul>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;
