
import React from 'react';
import { Droplets, Disc, Settings, Cpu, Snowflake, ClipboardCheck } from 'lucide-react';

const services = [
  {
    title: "Troca de Óleo",
    desc: "Lubrificantes de alta performance para a máxima vida útil do motor.",
    icon: Droplets
  },
  {
    title: "Sistema de Freios",
    desc: "Segurança total com revisão de pastilhas, discos e fluído ABS.",
    icon: Disc
  },
  {
    title: "Suspensão",
    desc: "Amortecedores e alinhamento para o seu conforto ao dirigir.",
    icon: Settings
  },
  {
    title: "Injeção Eletrônica",
    desc: "Diagnóstico computadorizado para economia de combustível.",
    icon: Cpu
  },
  {
    title: "Ar Condicionado",
    desc: "Higienização e recarga de gás para um clima perfeito.",
    icon: Snowflake
  },
  {
    title: "Revisão Geral",
    desc: "Check-up preventivo completo para viagens sem surpresas.",
    icon: ClipboardCheck
  }
];

const Services: React.FC = () => {
  return (
    <section id="servicos" className="py-24 bg-[#0a0a0a]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h3 className="text-[#e11d48] font-bold tracking-widest uppercase mb-2">Especialidades</h3>
          <h2 className="text-4xl font-heading font-bold">SOLUÇÕES COMPLETAS</h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, idx) => (
            <div key={idx} className="bg-zinc-900/40 border border-zinc-800 p-8 rounded-2xl hover:border-[#e11d48]/50 transition-all group hover:-translate-y-2">
              <div className="text-[#e11d48] mb-6 transition-all transform group-hover:scale-110">
                <s.icon size={40} strokeWidth={1.5} />
              </div>
              <h4 className="text-xl font-bold mb-3 group-hover:text-[#e11d48] transition-colors">{s.title}</h4>
              <p className="text-zinc-400 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
