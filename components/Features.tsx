
import React from 'react';
import { CheckCircle, Zap, Eye } from 'lucide-react';

const Features: React.FC = () => {
  return (
    <section id="diferenciais" className="py-24 overflow-hidden bg-[#0a0a0a]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 relative">
             <div className="absolute -inset-4 bg-[#e11d48] rounded-2xl blur-2xl opacity-10"></div>
             <img 
               src="https://images.unsplash.com/photo-1613214149574-9f8f35b2ee0c?auto=format&fit=crop&q=80&w=800" 
               className="relative rounded-2xl shadow-2xl border border-zinc-800 grayscale hover:grayscale-0 transition-all duration-500"
               alt="Oficina moderna"
             />
          </div>
          
          <div className="lg:w-1/2">
            <h3 className="text-[#e11d48] font-bold uppercase mb-2">Por que a KAEN?</h3>
            <h2 className="text-4xl font-heading font-bold mb-8">COMPROMISSO COM A EXCELÊNCIA</h2>
            
            <div className="space-y-8">
              <div className="flex gap-4 group">
                <div className="w-12 h-12 shrink-0 bg-zinc-900 rounded-lg flex items-center justify-center border border-[#e11d48]/30 text-[#e11d48] group-hover:bg-[#e11d48] group-hover:text-white transition-all">
                   <CheckCircle size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-1">Garantia em Peças e Serviços</h4>
                  <p className="text-zinc-400">Trabalhamos apenas com componentes originais ou de primeira linha certificados.</p>
                </div>
              </div>

              <div className="flex gap-4 group">
                <div className="w-12 h-12 shrink-0 bg-zinc-900 rounded-lg flex items-center justify-center border border-[#e11d48]/30 text-[#e11d48] group-hover:bg-[#e11d48] group-hover:text-white transition-all">
                   <Zap size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-1">Tecnologia de Diagnóstico</h4>
                  <p className="text-zinc-400">Scanner de última geração para identificar falhas com precisão cirúrgica.</p>
                </div>
              </div>

              <div className="flex gap-4 group">
                <div className="w-12 h-12 shrink-0 bg-zinc-900 rounded-lg flex items-center justify-center border border-[#e11d48]/30 text-[#e11d48] group-hover:bg-[#e11d48] group-hover:text-white transition-all">
                   <Eye size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-1">Transparência Total</h4>
                  <p className="text-zinc-400">Você recebe fotos e vídeos do processo e aprova o orçamento via celular.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
