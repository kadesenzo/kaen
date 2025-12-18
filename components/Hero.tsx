
import React from 'react';
import { Calendar } from 'lucide-react';

const Hero: React.FC = () => {
  const openChat = () => {
    window.dispatchEvent(new CustomEvent('open-kaen-chat'));
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&q=80&w=2000" 
          alt="Oficina Mecânica" 
          className="w-full h-full object-cover opacity-40 grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center md:text-left">
        <div className="max-w-3xl">
          <span className="text-[#e11d48] font-bold tracking-[0.3em] uppercase mb-4 block">Precisão e Confiança</span>
          <h2 className="text-5xl md:text-7xl font-heading font-extrabold mb-6 leading-tight">
            CUIDADO ELITE PARA O SEU <span className="text-[#e11d48]">VEÍCULO</span>
          </h2>
          <p className="text-zinc-400 text-lg md:text-xl mb-10 max-w-2xl leading-relaxed">
            Agende sua revisão agora com nosso assistente inteligente e garanta a performance máxima do seu motor.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button 
              onClick={openChat}
              className="bg-[#e11d48] hover:bg-[#be123c] text-white font-bold py-4 px-10 rounded-lg flex items-center justify-center gap-3 transition-all transform hover:scale-105 shadow-xl shadow-[#e11d48]/30"
            >
              <Calendar size={20} />
              AGENDAR AGORA
            </button>
            <a 
              href="#servicos" 
              className="border border-zinc-700 hover:bg-white/5 text-white font-bold py-4 px-10 rounded-lg transition-all text-center"
            >
              CONHECER SERVIÇOS
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-[#e11d48]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
