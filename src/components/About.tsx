import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-stone-50 border-b border-stone-200/40">
      <div className="max-w-4xl mx-auto px-6 text-center">
        
        {/* Judul */}
        <h2 className="text-xl font-light text-stone-900 tracking-tight mb-8">
          Tentang Saya
        </h2>
        
        {/* Paragraf Utama */}
        <p className="text-sm md:text-base text-stone-600 leading-relaxed max-w-2xl mx-auto mb-16">
          Saya Gallant, seorang Full-Stack Developer yang berfokus pada pengembangan aplikasi web modern yang cepat, aman, dan mudah diskalakan. Menggabungkan logika back-end yang kuat dengan antarmuka front-end yang interaktif untuk menghadirkan solusi digital terbaik yang berorientasi pada tujuan bisnis Anda.
        </p>

        {/* Kotak Key Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          
          {/* Tepat Waktu */}
          <div className="p-6 bg-stone-100/40 rounded-sm border border-stone-200/60 transition-colors hover:border-stone-300">
            <h3 className="font-medium text-sm text-stone-900 mb-2 tracking-wide uppercase flex items-center gap-2">
              <span>⏱️</span> Tepat Waktu
            </h3>
            <p className="text-stone-500 text-xs leading-relaxed">
              Berkomitmen penuh untuk menyelesaikan setiap proyek sesuai target waktu tanpa menurunkan kualitas kode.
            </p>
          </div>
          
          {/* Detail Teknis */}
          <div className="p-6 bg-stone-100/40 rounded-sm border border-stone-200/60 transition-colors hover:border-stone-300">
            <h3 className="font-medium text-sm text-stone-900 mb-2 tracking-wide uppercase flex items-center gap-2">
              <span>🔍</span> Detail Teknis
            </h3>
            <p className="text-stone-500 text-xs leading-relaxed">
              Memastikan implementasi desain pixel-perfect serta struktur arsitektur kode yang bersih, teratur, dan mudah dirawat.
            </p>
          </div>
          
          {/* Komunikasi Jelas */}
          <div className="p-6 bg-stone-100/40 rounded-sm border border-stone-200/60 transition-colors hover:border-stone-300">
            <h3 className="font-medium text-sm text-stone-900 mb-2 tracking-wide uppercase flex items-center gap-2">
              <span>💬</span> Komunikasi Jelas
            </h3>
            <p className="text-stone-500 text-xs leading-relaxed">
              Menjaga komunikasi yang transparan sepanjang proses pengembangan agar visi produk bisnis Anda tercapai sempurna.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
