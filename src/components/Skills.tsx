import React from 'react';
import { skillsData } from '../data/portfolioData';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-stone-50 border-b border-stone-200/40">
      <div className="max-w-3xl mx-auto px-6 flex flex-col space-y-12">
        
        {/* BARIS JUDUL */}
        <div className="text-center">
          <h2 className="text-2xl font-normal text-stone-800 tracking-tight">Skills</h2>
          <p className="text-stone-400 font-light text-xs mt-2.5">Teknologi dan alat yang saya gunakan untuk membangun aplikasi</p>
        </div>

        {/* CONTAINER GRID: Khusus membungkus kolom-kolom keahlian */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          
          {/* Front-End */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold tracking-wider text-stone-900 uppercase">
              Front-End
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {skillsData.frontend.map((skill, index) => (
                <span key={index} className="px-2.5 py-1 bg-stone-100 border border-stone-200/60 text-stone-600 text-xs font-medium rounded-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Back-End */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold tracking-wider text-stone-900 uppercase">
              Back-End
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {skillsData.backend.map((skill, index) => (
                <span key={index} className="px-2.5 py-1 bg-stone-100 border border-stone-200/60 text-stone-600 text-xs font-medium rounded-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* DevOps & Tools */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold tracking-wider text-stone-900 uppercase">
              DevOps & Tools
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {skillsData.devops.map((skill, index) => (
                <span key={index} className="px-2.5 py-1 bg-stone-100 border border-stone-200/60 text-stone-600 text-xs font-medium rounded-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Skills;
