import React, { useState} from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState<boolean>(false);
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulasi Delay Loading Spinner selama 2 Detik
    setTimeout(() => {
      setLoading(false);
      setFormSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      
      // Sembunyikan Alert setelah 5 detik
      setTimeout(() => setFormSubmitted(false), 5000);
    }, 2000);
  };

  return (
    <section id="contact" className="py-24 bg-stone-50 border-b border-stone-200/40">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Header Minimalis */}
        <div className="text-center mb-16">
          <h2 className="text-xl font-light text-stone-900 tracking-tight">Hubungi Saya</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          
          {/* Info Sosial & Email */}
          <div className="space-y-6 flex flex-col justify-between h-full text-center sm:text-left">
            <div>
              <h3 className="text-lg font-medium text-stone-900 mb-4 tracking-tight leading-snug">
                Mari Wujudkan Ide Besar Anda Bersama!
              </h3>
              <p className="text-stone-500 leading-relaxed text-xs">
                Punya konsep proyek yang luar biasa atau butuh engineer andal untuk memperkuat tim Anda? 
                Mari diskusikan bagaimana keahlian saya dapat membantu mencapai target bisnis Anda. 
                Kirim pesan sekarang, dan mari mulai berkolaborasi!
              </p>
            </div>
            
            <div className="space-y-4 pt-6 text-xs font-medium text-stone-700 md:mt-auto border-t border-stone-200/60">
              {/* Ikon Email Monokrom */}
              <p className="flex items-center justify-center sm:justify-start gap-3 text-stone-600">
                <svg xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-stone-900">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
                <span className="tracking-wide">gallantgibran024@gmail.com</span>
              </p>

              {/* Tombol Tautan Sosial Monokrom */}
              <div className="flex justify-center sm:justify-start gap-3 pt-2">
                <a 
                  href="https://github.com/gallantgibran" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="flex items-center gap-2 px-3 py-2 bg-stone-100 border border-stone-300 text-stone-700 hover:text-stone-950 hover:bg-stone-200 transition-colors rounded-sm shadow-xs font-semibold text-[10px] tracking-wider uppercase"
                >
                  <span>GitHub</span>
                </a>

                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="flex items-center gap-2 px-3 py-2 bg-stone-100 border border-stone-300 text-stone-700 hover:text-stone-950 hover:bg-stone-200 transition-colors rounded-sm shadow-xs font-semibold text-[10px] tracking-wider uppercase"
                >
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="space-y-4 w-full">
            {/* Alert Success Pop-up Minimalis */}
            {formSubmitted && (
              <div className="p-4 bg-stone-900 text-stone-50 rounded-sm text-[11px] tracking-wide flex items-center gap-3 animate-fadeIn">
                <svg className="w-4 h-4 text-stone-300 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span>Terima kasih! Pesan Anda disimulasikan sukses terkirim.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="bg-stone-100/40 p-6 rounded-sm border border-stone-200/60 space-y-4">
              <div>
                <label className="block text-[10px] font-bold uppercase text-stone-400 mb-1.5 tracking-widest">Nama Lengkap</label>
                <input 
                  type="text" required value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-3 py-2.5 bg-stone-50 border border-stone-300/80 rounded-sm text-xs text-stone-900 focus:outline-none focus:border-stone-900 transition-colors placeholder-stone-400 font-medium"
                  placeholder="Masukkan nama lengkap Anda"
                />
              </div>
              <div>
                <label className="block text-[10px] font-bold uppercase text-stone-400 mb-1.5 tracking-widest">Alamat Email</label>
                <input 
                  type="email" required value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-3 py-2.5 bg-stone-50 border border-stone-300/80 rounded-sm text-xs text-stone-900 focus:outline-none focus:border-stone-900 transition-colors placeholder-stone-400 font-medium"
                  placeholder="nama@perusahaan.com"
                />
              </div>
              <div>
                <label className="block text-[10px] font-bold uppercase text-stone-400 mb-1.5 tracking-widest">Pesan</label>
                <textarea 
                  rows={4} required value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full px-3 py-2.5 bg-stone-50 border border-stone-300/80 rounded-sm text-xs text-stone-900 focus:outline-none focus:border-stone-900 transition-colors placeholder-stone-400 font-medium resize-none"
                  placeholder="Ceritakan singkat tentang proyek Anda..."
                ></textarea>
              </div>
              
              {/* Tombol dengan Spinner Loading */}
              <button 
                type="submit" 
                disabled={loading}
                className="w-full py-3 bg-stone-900 hover:bg-stone-800 text-stone-50 text-xs font-semibold tracking-widest uppercase rounded-sm transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {loading ? (
                  <>
                    <svg className="animate-spin h-3 w-3 text-stone-50" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>MENGIRIM...</span>
                  </>
                ) : "Mulai Diskusi"}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
