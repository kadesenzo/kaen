
import React from 'react';
import { MapPin, Clock } from 'lucide-react';

const Location: React.FC = () => {
  return (
    <section id="localizacao" className="py-24 bg-[#0a0a0a]">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-[#e11d48] font-bold uppercase mb-2">Onde estamos</h3>
            <h2 className="text-4xl font-heading font-bold mb-6">VENHA NOS VISITAR</h2>
            <p className="text-zinc-400 mb-8 text-lg leading-relaxed">Estamos localizados em uma área de fácil acesso, com amplo estacionamento e sala de espera climatizada para seu conforto.</p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="text-[#e11d48] mt-1 p-2 bg-zinc-900 rounded-lg border border-zinc-800">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Endereço</h4>
                  <p className="text-zinc-400">Rua Automotiva, 1000 - Centro<br/>São Paulo, SP - CEP: 00000-000</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="text-[#e11d48] mt-1 p-2 bg-zinc-900 rounded-lg border border-zinc-800">
                   <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Horário de Funcionamento</h4>
                  <p className="text-zinc-400">Segunda a Sexta: 08:00 às 18:00<br/>Sábados: 08:00 às 12:00</p>
                </div>
              </div>
            </div>
            
            <a 
              href="https://maps.google.com" 
              target="_blank" 
              className="mt-10 inline-flex items-center gap-2 bg-zinc-900 border border-zinc-700 hover:border-[#e11d48] px-8 py-3 rounded-lg transition-all text-white font-bold"
            >
              <MapPin size={18} />
              TRAÇAR ROTA NO MAPA
            </a>
          </div>

          <div className="h-[400px] w-full bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl relative group">
            <div className="absolute inset-0 bg-[url('https://api.mapbox.com/styles/v1/mapbox/dark-v10/static/-46.6333,-23.5505,13,0/800x400?access_token=pk.placeholder')] bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-700">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="relative">
                  <div className="w-12 h-12 bg-[#e11d48] rounded-full animate-ping absolute -inset-0 opacity-40"></div>
                  <div className="w-12 h-12 bg-[#e11d48] rounded-full flex items-center justify-center relative shadow-xl shadow-red-950">
                    <span className="text-white font-heading font-bold">K</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
