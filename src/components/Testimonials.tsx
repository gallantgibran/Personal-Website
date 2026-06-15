import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { testimonialsData } from '../data/portfolioData'; // Impor data dari file terpisah

const Testimonials: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(0);
  const totalPages = Math.ceil(testimonialsData.length / 3);

  const prevPage = () => {
    setCurrentPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const nextPage = () => {
    setCurrentPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(timer);
  }, [totalPages]);

  return (
    <section id="testimonials" className="py-24 bg-stone-50 border-b border-stone-200/40 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 relative">
        
        <div className="text-center mb-16">
          <h2 className="text-xl font-light text-stone-900 tracking-tight mb-2">
            Testimoni Klien
          </h2>
          <p className="text-stone-500 max-w-md mx-auto text-xs leading-relaxed font-light">
            Ulasan dari para profesional industri yang telah berkolaborasi bersama saya.
          </p>
        </div>

        <div className="relative w-full overflow-hidden pb-8">
          <div 
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentPage * 100}%)` }}
          >
            {Array.from({ length: totalPages }).map((_, pageIdx) => (
              <div key={pageIdx} className="w-full shrink-0 grid grid-cols-1 md:grid-cols-3 gap-6 px-1">
                
                {testimonialsData.slice(pageIdx * 3, pageIdx * 3 + 3).map((test, index) => (
                  <div 
                    key={index} 
                    className="bg-stone-100/40 border border-stone-200/60 p-6 rounded-sm flex flex-col justify-between min-h-70"
                  >
                    <div>
                      <Quote className="w-5 h-5 text-stone-400/40 mb-4" />
                      <p className="text-stone-600 italic leading-relaxed text-xs">
                        "{test.quote}"
                      </p>
                    </div>

                    <div className="flex items-center gap-3 pt-4 border-t border-stone-200/60 mt-4">
                      <div className="w-8 h-8 rounded-full bg-stone-900 text-stone-50 font-semibold flex items-center justify-center text-[10px] tracking-wider shrink-0 shadow-xs">
                        {test.avatarPlaceholder}
                      </div>
                      <div>
                        <h4 className="font-medium text-stone-900 text-xs tracking-tight">
                          {test.name}
                        </h4>
                        <p className="text-[10px] text-stone-400 font-medium tracking-wide uppercase mt-0.5">
                          {test.role} at <span className="text-stone-600 font-semibold">{test.company}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                ))}

              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-between items-center max-w-xs mx-auto mt-6">
          <button 
            onClick={prevPage}
            className="p-2 rounded-sm bg-stone-100 border border-stone-300 hover:bg-stone-200 text-stone-600 transition-colors shadow-xs"
            aria-label="Previous Page"
          >
            <ChevronLeft className="w-3 h-3" />
          </button>
          
          <div className="flex gap-1.5">
            {Array.from({ length: totalPages }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentPage(idx)}
                className={`h-1 rounded-full transition-all duration-300 ${
                  currentPage === idx ? 'w-4 bg-stone-900' : 'w-1 bg-stone-300'
                }`}
                aria-label={`Go to page ${idx + 1}`}
              />
            ))}
          </div>

          <button 
            onClick={nextPage}
            className="p-2 rounded-sm bg-stone-900 hover:bg-slate-800 text-stone-50 transition-colors shadow-xs"
            aria-label="Next Page"
          >
            <ChevronRight className="w-3 h-3" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
