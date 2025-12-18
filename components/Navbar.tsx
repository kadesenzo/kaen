
import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar, MessageSquare } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openChat = () => {
    window.dispatchEvent(new CustomEvent('open-kaen-chat'));
    setIsMenuOpen(false);
  };

  const navLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Diferenciais', href: '#diferenciais' },
    { name: 'Onde Estamos', href: '#localizacao' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled || isMenuOpen ? 'bg-[#0a0a0a]/95 backdrop-blur-md py-3 shadow-xl border-b border-[#e11d48]/20' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[#e11d48] rounded-sm flex items-center justify-center rotate-45">
             <span className="text-white font-bold -rotate-45 font-heading">K</span>
          </div>
          <h1 className="text-xl md:text-2xl font-heading font-bold tracking-tighter">
            AUTO MECÂNICA <span className="text-[#e11d48]">KAEN</span>
          </h1>
        </div>
        
        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-semibold uppercase tracking-widest">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="hover:text-[#e11d48] transition-colors">{link.name}</a>
          ))}
          <button 
            onClick={openChat} 
            className="bg-[#e11d48] hover:bg-[#be123c] text-white px-6 py-2 rounded-full transition-all flex items-center gap-2 shadow-lg shadow-[#e11d48]/20 font-bold"
          >
            <Calendar size={16} />
            Agendar Agora
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Menu"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-[#0a0a0a] border-b border-[#e11d48]/20 transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="flex flex-col p-6 gap-6 text-center uppercase tracking-widest font-bold text-sm">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsMenuOpen(false)}
              className="py-2 border-b border-zinc-900 hover:text-[#e11d48] transition-colors"
            >
              {link.name}
            </a>
          ))}
          <button 
            onClick={openChat}
            className="bg-[#e11d48] text-white py-4 rounded-xl flex items-center justify-center gap-2 shadow-lg"
          >
            <Calendar size={20} />
            Agendar com Assistente
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
