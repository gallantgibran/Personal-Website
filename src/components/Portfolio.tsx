import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData.ts';
import type { Project } from '../types/portfolio.ts';

const Portfolio: React.FC = () => {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  
  // State untuk menyimpan ID proyek mana saja yang dropdown STAR-nya sedang terbuka
  const [openDropdownId, setOpenDropdownId] = useState<number | null>(null);

  // Fungsi toggle buka-tutup dropdown accordion
  const toggleDropdown = (id: number) => {
    setOpenDropdownId(openDropdownId === id ? null : id);
  };

  return (
    <section id="portfolio" className="py-24 bg-stone-50 border-b border-stone-200/40">
      <div className="max-w-3xl mx-auto px-6 space-y-16">
        {/* Judul */}
        <div className="text-center pb-4">
          <h2 className="text-2xl font-normal text-stone-800 tracking-tight">Portfolio</h2>
          <p className="text-stone-400 font-light text-xs mt-2.5">Kumpulan proyek aplikasi web yang telah saya kembangkan</p>
        </div>

        {portfolioData.map((project) => (
          <div key={project.id} className="space-y-6">
            
            {/* Tempat Area Gambar Preview (jika di click trigger Lightbox) */}
            <div 
              onClick={() => { setActiveProject(project); setCurrentImageIndex(0); }} 
              className="group cursor-pointer relative overflow-hidden bg-stone-100 border border-stone-200/60 p-2 rounded-sm"
            >
              <div className="aspect-video w-full overflow-hidden bg-stone-200 relative">
                <img 
                  src={project.images[0]} 
                  alt={project.title} 
                  className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-[1.01]" 
                />
                <div className="absolute inset-0 bg-stone-900/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="bg-stone-900 text-stone-50 text-[10px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-sm shadow-sm">
                    Lihat Galeri Gambar ({project.images.length})
                  </span>
                </div>
              </div>
            </div>

            {/* Judul Proyek & Tags Informasi */}
            <div className="text-center sm:text-left flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h3 className="text-base font-medium text-stone-900 tracking-tight">{project.title}</h3>
                <div className="flex flex-wrap justify-center sm:justify-start gap-1.5 mt-2">
                  {project.tech.map((t, idx) => (
                    <span key={idx} className="px-2 py-0.5 bg-stone-200/60 text-stone-600 text-[10px] font-medium tracking-wide rounded-sm">{t}</span>
                  ))}
                </div>
              </div>

              {/* Tombol Pemicu Dropdown STAR */}
              <button
                onClick={() => toggleDropdown(project.id)}
                className="px-4 py-2 bg-stone-100 hover:bg-stone-200 text-stone-700 hover:text-stone-950 border border-stone-300 rounded-sm text-[10px] font-bold tracking-widest uppercase transition-all flex items-center justify-center gap-2"
              >
                <span>{openDropdownId === project.id ? 'Tutup Detail STAR' : 'Lihat Detail STAR'}</span>
                <span className={`transform transition-transform duration-200 ${openDropdownId === project.id ? 'rotate-180' : 'rotate-0'}`}>▼</span>
              </button>
            </div>

            {/* Konten Dropdown Metode STAR (Hanya Merender jika Terbuka) */}
            {openDropdownId === project.id && (
              <div className="space-y-3 text-xs leading-relaxed text-stone-600 border border-stone-200 p-5 bg-stone-100/30 rounded-sm animate-fadeIn text-left">
                <p><strong className="text-stone-900 font-semibold tracking-wide">SITUATION:</strong> {project.star.situation}</p>
                <p><strong className="text-stone-900 font-semibold tracking-wide">TASK:</strong> {project.star.task}</p>
                <p><strong className="text-stone-900 font-semibold tracking-wide">ACTION:</strong> {project.star.action}</p>
                <p><strong className="text-stone-900 font-semibold tracking-wide">RESULT:</strong> {project.star.result}</p>
              </div>
            )}

          </div>
        ))}
        
      </div>

      {/* FULL SCREEN LIGHTBOX MODAL (Untuk Menampilkan Gambar secara Full) */}
      {activeProject && (
        <div className="fixed inset-0 bg-stone-950/95 z-50 flex items-center justify-center p-4 backdrop-blur-xs">
          <div className="bg-stone-900 max-w-4xl w-full rounded-sm overflow-hidden shadow-2xl relative p-4 border border-stone-800 animate-fadeIn">
            
            <button 
              onClick={() => setActiveProject(null)} 
              className="absolute top-4 right-4 text-stone-400 hover:text-stone-100 z-10 p-1.5 bg-stone-800/80 rounded-full transition-colors"
              aria-label="Close"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>

            <h4 className="text-xs font-semibold text-stone-400 uppercase tracking-widest mb-4 pr-10 truncate">
              {activeProject.title} ({currentImageIndex + 1}/{activeProject.images.length})
            </h4>

            <div className="relative aspect-video bg-stone-950 rounded-sm overflow-hidden flex items-center justify-center border border-stone-800">
              <img 
                src={activeProject.images[currentImageIndex]} 
                alt={`Gallery View ${currentImageIndex}`} 
                className="max-h-full max-w-full object-contain" 
              />
              
              {activeProject.images.length > 1 && (
                <>
                  <button 
                    onClick={() => setCurrentImageIndex((prev) => (prev === 0 ? activeProject.images.length - 1 : prev - 1))} 
                    className="absolute left-4 bg-stone-900/80 border border-stone-800 p-2 text-stone-300 hover:text-stone-50 hover:bg-stone-800 transition-all rounded-full"
                  >
                    &larr;
                  </button>
                  <button 
                    onClick={() => setCurrentImageIndex((prev) => (prev === activeProject.images.length - 1 ? 0 : prev + 1))} 
                    className="absolute right-4 bg-stone-900/80 border border-stone-800 p-2 text-stone-300 hover:text-stone-50 hover:bg-stone-800 transition-all rounded-full"
                  >
                    &rarr;
                  </button>
                </>
              )}
            </div>

            <div className="flex justify-center gap-2 mt-4">
              {activeProject.images.map((_, i) => (
                <button 
                  key={i} 
                  onClick={() => setCurrentImageIndex(i)} 
                  className={`w-1.5 h-1.5 rounded-full transition-colors ${i === currentImageIndex ? 'bg-stone-100' : 'bg-stone-700'}`} 
                />
              ))}
            </div>

          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
