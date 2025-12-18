
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0a0a0a] border-t border-zinc-900 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#e11d48] rounded-sm flex items-center justify-center rotate-45">
               <span className="text-white font-bold -rotate-45 font-heading">K</span>
            </div>
            <h2 className="text-xl font-heading font-bold">KAEN</h2>
          </div>

          <div className="flex gap-8 text-zinc-500 font-semibold text-sm">
            <a href="#" className="hover:text-[#e11d48] transition-colors">Instagram</a>
            <a href="#" className="hover:text-[#e11d48] transition-colors">Facebook</a>
            <a href="#" className="hover:text-[#e11d48] transition-colors">WhatsApp</a>
          </div>

          <p className="text-zinc-600 text-sm">
            © {new Date().getFullYear()} Auto Mecânica KAEN. Excelência Automotiva.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
