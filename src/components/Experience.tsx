import React from 'react';
import { experienceData } from '../data/portfolioData';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-stone-50 border-b border-stone-200/40">
      {/* Kontainer diposisikan ke tengah menggunakan mx-auto */}
      <div className="max-w-xl mx-auto px-6 space-y-12 border-l border-stone-200 pl-6 relative">
        {experienceData.map((exp, index) => (
          <div key={index} className="relative space-y-2 text-center sm:text-left">
            {/* Titik Penanda di sisi kiri container yang sudah ter-center */}
            <div className="absolute -left-7.75 top-1.5 w-2 h-2 rounded-full bg-stone-900 border border-stone-50"></div>
            
            {/* Detail Jabatan */}
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-2">
              <h3 className="text-base font-medium text-stone-900 tracking-tight">
                {exp.role}
              </h3>
              <span className="text-[10px] font-semibold text-stone-500 tracking-wider uppercase bg-stone-100 px-2 py-0.5 rounded-xs border border-stone-200/60 w-max mx-auto sm:mx-0">
                {exp.duration}
              </span>
            </div>
            
            <p className="text-xs font-medium text-stone-400 uppercase tracking-wider">
              {exp.company}
            </p>
            
            {/* List Tugas Teknis */}
            <ul className="text-xs text-stone-600 space-y-1.5 pt-2 list-disc list-inside leading-relaxed text-left">
              {exp.tasks.map((task, idx) => (
                <li key={idx} className="marker:text-stone-400">
                  {task}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
