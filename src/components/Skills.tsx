import React from 'react';
import { skillsData } from '../data/portfolioData';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-stone-50 border-b border-stone-200/40">
      <div className="max-w-3xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-3 gap-8">
        
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
    </section>
  );
};

export default Skills;
