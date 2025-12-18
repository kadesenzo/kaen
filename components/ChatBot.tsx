
import React, { useState, useRef, useEffect } from 'react';
import { getGeminiResponse } from '../services/geminiService';
import { ChatMessage } from '../types';
import { MessageSquare, X, Send, CheckCircle2, ClipboardList } from 'lucide-react';

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Olá! Sou o assistente da KAEN. Para agendar, vou precisar do seu Nome, Telefone, Carro e o Serviço. Por onde começamos?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [bookingData, setBookingData] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOpenChat = () => setIsOpen(true);
    window.addEventListener('open-kaen-chat', handleOpenChat);
    return () => window.removeEventListener('open-kaen-chat', handleOpenChat);
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen, isLoading]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: ChatMessage = { role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    const responseText = await getGeminiResponse(messages, input);
    
    // Check if scheduling is complete
    if (responseText.includes("AGENDAMENTO_CONCLUIDO")) {
      const cleanResponse = responseText.replace("AGENDAMENTO_CONCLUIDO", "").trim();
      setBookingData(cleanResponse);
      setMessages(prev => [...prev, { role: 'model', text: "Excelente! Agendamento recebido com sucesso. Veja o resumo abaixo:" }]);
    } else {
      setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    }
    
    setIsLoading(false);
  };

  return (
    <>
      {/* Trigger Button */}
      <div className="fixed bottom-6 right-6 z-[60] flex flex-col items-end gap-3">
        {!isOpen && !bookingData && (
          <div className="bg-[#e11d48] text-white px-4 py-2 rounded-xl text-xs font-bold shadow-xl animate-bounce hidden md:block border border-white/20">
            Agende aqui em segundos!
          </div>
        )}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 md:w-16 md:h-16 bg-[#e11d48] rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all text-white active:scale-95"
        >
          {isOpen ? <X size={28} /> : <MessageSquare size={28} />}
        </button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className={`
          fixed z-[70] bg-[#0a0a0a] border border-zinc-800 shadow-2xl flex flex-col overflow-hidden transition-all duration-300
          bottom-0 right-0 w-full h-full md:bottom-24 md:right-6 md:w-[400px] md:h-[650px] md:rounded-2xl
          animate-in fade-in slide-in-from-bottom-4
        `}>
          {/* Header */}
          <div className="bg-[#e11d48] p-5 flex items-center justify-between shadow-lg">
             <div className="flex items-center gap-3">
               <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center font-heading font-bold text-white">K</div>
               <div>
                 <h4 className="font-bold text-white text-base">Agendamento KAEN</h4>
                 <span className="text-[10px] text-red-100 flex items-center gap-1 uppercase tracking-widest font-bold">
                   <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
                   Online
                 </span>
               </div>
             </div>
             <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white">
               <X size={24} />
             </button>
          </div>

          {/* Messages Area */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#0a0a0a] scroll-smooth">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`
                  max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed
                  ${m.role === 'user' 
                    ? 'bg-[#e11d48] text-white rounded-tr-none shadow-lg font-medium' 
                    : 'bg-zinc-900 text-zinc-100 rounded-tl-none border border-zinc-800 shadow-sm'}
                `}>
                  {m.text}
                </div>
              </div>
            ))}
            
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-zinc-900 border border-zinc-800 p-4 rounded-2xl rounded-tl-none flex gap-1.5">
                  <span className="w-2 h-2 bg-[#e11d48] rounded-full animate-bounce"></span>
                  <span className="w-2 h-2 bg-[#e11d48] rounded-full animate-bounce [animation-delay:0.2s]"></span>
                  <span className="w-2 h-2 bg-[#e11d48] rounded-full animate-bounce [animation-delay:0.4s]"></span>
                </div>
              </div>
            )}

            {bookingData && (
              <div className="my-6 animate-in zoom-in duration-500">
                <div className="bg-zinc-900 border-2 border-[#e11d48] p-6 rounded-2xl relative overflow-hidden">
                   <div className="absolute top-0 right-0 p-2 bg-[#e11d48] text-white">
                     <ClipboardList size={20} />
                   </div>
                   <h5 className="text-white font-bold mb-4 flex items-center gap-2">
                     <CheckCircle2 size={18} className="text-green-500" />
                     LISTA DE AGENDAMENTO
                   </h5>
                   <div className="space-y-3">
                      <div className="bg-black/40 p-3 rounded-lg border border-zinc-800">
                        <pre className="text-[#e11d48] font-mono text-xs whitespace-pre-wrap leading-relaxed">
                          {bookingData}
                        </pre>
                      </div>
                      <p className="text-zinc-400 text-[10px] text-center italic mt-4">
                        * Nossa equipe já recebeu estes dados e entrará em contato em breve.
                      </p>
                   </div>
                </div>
              </div>
            )}
          </div>

          {/* Input Area */}
          {!bookingData && (
            <div className="p-4 bg-zinc-950 border-t border-zinc-800 pb-8 md:pb-4">
              <div className="flex gap-2 bg-zinc-900 rounded-xl p-1 border border-zinc-800 focus-within:border-[#e11d48] transition-colors">
                <input 
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Digite sua resposta..."
                  className="flex-1 bg-transparent border-none px-4 py-4 text-sm outline-none text-white placeholder:text-zinc-600"
                />
                <button 
                  onClick={handleSend}
                  disabled={isLoading}
                  className="bg-[#e11d48] px-4 rounded-lg hover:bg-[#be123c] disabled:opacity-50 text-white transition-all transform active:scale-90"
                >
                  <Send size={20} />
                </button>
              </div>
            </div>
          )}
          
          {bookingData && (
            <div className="p-6 bg-zinc-950 border-t border-zinc-800 text-center">
              <button 
                onClick={() => {
                  setBookingData(null);
                  setMessages([{ role: 'model', text: 'Olá! Deseja agendar outro serviço?' }]);
                }}
                className="w-full bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 py-3 rounded-xl text-sm font-bold transition-all"
              >
                NOVO AGENDAMENTO
              </button>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default ChatBot;
