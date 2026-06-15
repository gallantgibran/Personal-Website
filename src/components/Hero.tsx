import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="min-h-screen bg-stone-50 flex items-center justify-center pt-20">
      <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center w-full">
        
        <div className="space-y-6 text-center md:text-left order-2 md:order-1">
          <span className="text-[11px] font-semibold tracking-widest text-stone-400 uppercase">
            Full-Stack Developer
          </span>
          <h1 className="text-4xl md:text-5xl font-light text-stone-900 tracking-tight leading-tight">
            Gallant Gibran
          </h1>
          <p className="text-stone-500 leading-relaxed max-w-md text-sm md:text-base">
            Saya membangun platform web berkinerja tinggi, aman, dan responsif. Berfokus pada transformasi ide bisnis kompleks menjadi solusi digital yang bersih dan intuitif.
          </p>
          
          {/* Tombol lihat portfolio*/}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-2">
            <a 
              href="#portfolio" 
              className="px-5 py-2.5 bg-stone-900 text-stone-50 text-xs font-semibold tracking-wider uppercase rounded-sm hover:bg-stone-800 transition-colors text-center shadow-xs"
            >
              Lihat Portofolio
            </a>
            <a 
              href="#contact" 
              className="px-5 py-2.5 bg-transparent text-stone-700 text-xs font-semibold tracking-wider uppercase rounded-sm border border-stone-300 hover:bg-stone-100 hover:text-stone-950 transition-colors text-center"
            >
              Hubungi Saya
            </a>
          </div>
        </div>
        
        {/* Profil dengan Bingkai Halus */}
        <div className="flex justify-center order-1 md:order-2 group">
          <div className="p-3 bg-stone-100/60 border border-stone-200/60 rounded-sm shadow-xs">
            <div className="w-60 md:w-72 aspect-4/5 overflow-hidden bg-stone-200 rounded-sm">
              <img 
                src="src/assets/profile.jpg" 
                alt="Gallant Gibran" 
                className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
