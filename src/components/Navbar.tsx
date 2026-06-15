import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-stone-50/80 backdrop-blur-md border-b border-stone-200/40 z-50">
      <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Brand Name */}
        <a href="#hero" className="text-sm font-bold tracking-tight text-stone-900">
          Gallant Gibran
        </a>

        {/* Links di navbar */}
        <div className="hidden sm:flex space-x-8 text-stone-500 font-medium text-[11px] tracking-widest uppercase">
          <a href="#hero" className="hover:text-stone-900 transition-colors">Home</a>
          <a href="#about" className="hover:text-stone-900 transition-colors">About</a>
          <a href="#skills" className="hover:text-stone-900 transition-colors">Skills</a>
          <a href="#portfolio" className="hover:text-stone-900 transition-colors">Portfolio</a>
          <a href="#experience" className="hover:text-stone-900 transition-colors">Experience</a>
          <a href="#contact" className="hover:text-stone-900 transition-colors">Contact</a>
        </div>

        {/* Hamburger */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
          className="sm:hidden text-stone-500 hover:text-stone-900 focus:outline-none"
          aria-label="Toggle Menu"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* Dropdown untuk mobile */}
      {isMobileMenuOpen && (
        <div className="sm:hidden bg-stone-50 border-b border-stone-200/60 px-6 pt-2 pb-4 flex flex-col space-y-3 font-medium text-[11px] tracking-widest uppercase text-stone-500">
          <a href="#hero" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-stone-900">Home</a>
          <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-stone-900">About</a>
          <a href="#skills" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-stone-900">Skills</a>
          <a href="#portfolio" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-stone-900">Portfolio</a>
          <a href="#experience" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-stone-900">Experience</a>
          <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-stone-900">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
