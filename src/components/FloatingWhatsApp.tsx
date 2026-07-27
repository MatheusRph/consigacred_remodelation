import React, { useState } from 'react';
import { MessageSquare, X, Send, Sparkles, CheckCircle2 } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, sender: 'bot', text: 'Olá! Seja bem-vindo à ConsigaCred. Como podemos te ajudar hoje?' },
    { id: 2, sender: 'bot', text: 'Você deseja simular Cartão Consignado ou Antecipação do FGTS?' }
  ]);
  const [inputValue, setInputValue] = useState('');

  const handleSend = (textToSend?: string) => {
    const text = textToSend || inputValue;
    if (!text.trim()) return;

    const newMsg = { id: Date.now(), sender: 'user', text };
    setMessages(prev => [...prev, newMsg]);
    setInputValue('');

    // Simulated Bot response
    setTimeout(() => {
      setMessages(prev => [
        ...prev,
        {
          id: Date.now() + 1,
          sender: 'bot',
          text: 'Perfeito! Clique abaixo para iniciar o atendimento oficial via WhatsApp e receba sua proposta em menos de 5 minutos.'
        }
      ]);
    }, 800);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 w-80 sm:w-96 bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden animate-fade-in flex flex-col h-96">
          
          {/* Header */}
          <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white p-4 flex justify-between items-center shadow-md">
            <div className="flex items-center gap-2.5">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-white text-emerald-700 font-extrabold flex items-center justify-center text-sm">
                  CC
                </div>
                <div className="w-3 h-3 rounded-full bg-emerald-400 border-2 border-white absolute bottom-0 right-0"></div>
              </div>
              <div>
                <h4 className="font-bold text-sm">Atendimento ConsigaCred</h4>
                <p className="text-[10px] text-emerald-100">Online no WhatsApp • Atendimento Rápido</p>
              </div>
            </div>

            <button 
              onClick={() => setIsOpen(false)}
              className="p-1 hover:bg-emerald-800 rounded-lg transition"
            >
              <X className="w-5 h-5 text-white" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-gray-50 text-xs">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-2xl shadow-2xs ${
                    m.sender === 'user'
                      ? 'bg-emerald-600 text-white rounded-br-none'
                      : 'bg-white text-neutral-800 border border-gray-200 rounded-bl-none'
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}

            {messages.length > 2 && (
              <div className="pt-2 text-center">
                <a
                  href={`https://wa.me/559190063923?text=${encodeURIComponent('Olá! Gostaria de uma simulação pré-aprovada.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow-md transition"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Abrir Conversa no WhatsApp</span>
                </a>
              </div>
            )}
          </div>

          {/* Quick options buttons */}
          <div className="p-2 bg-white border-t border-gray-100 flex gap-1 overflow-x-auto">
            <button
              onClick={() => handleSend('Quero simular Cartão Consignado')}
              className="px-2.5 py-1 bg-gray-100 hover:bg-red-50 hover:text-red-600 text-[10px] font-bold rounded-lg whitespace-nowrap"
            >
              Cartão Consignado
            </button>
            <button
              onClick={() => handleSend('Quero antecipar meu FGTS')}
              className="px-2.5 py-1 bg-gray-100 hover:bg-red-50 hover:text-red-600 text-[10px] font-bold rounded-lg whitespace-nowrap"
            >
              Antecipação FGTS
            </button>
          </div>

          {/* Input field */}
          <div className="p-2.5 bg-white border-t border-gray-100 flex items-center gap-2">
            <input
              type="text"
              placeholder="Digite sua mensagem..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              className="flex-1 px-3 py-2 text-xs bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-emerald-500"
            />
            <button
              onClick={() => handleSend()}
              className="p-2 bg-emerald-600 text-white rounded-xl shadow-xs hover:bg-emerald-700"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>

        </div>
      )}

      {/* Floating Trigger Button matching image.png red bubble */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-red-600 hover:bg-red-700 text-white shadow-2xl shadow-red-600/50 flex items-center justify-center transition-all duration-300 transform hover:scale-110 active:scale-95 group relative"
        aria-label="Atendimento WhatsApp"
      >
        <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-emerald-500 ring-2 ring-white animate-ping"></div>
        <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-emerald-500 ring-2 ring-white"></div>
        <MessageSquare className="w-7 h-7 group-hover:rotate-12 transition-transform" />
      </button>

    </div>
  );
};
