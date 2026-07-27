import React, { useState } from 'react';
import { Phone, MessageSquare, Mail, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react';

export const ContactView: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 text-red-600 text-xs font-bold uppercase tracking-wider">
            <MessageSquare className="w-3.5 h-3.5" />
            Canais de Atendimento
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-neutral-900 tracking-tight">
            Fale <span className="text-red-600">Conosco</span>
          </h1>
          <p className="text-neutral-600 text-sm">
            Estamos prontos para atender você. Escolha o canal de sua preferência ou envie uma mensagem.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Direct Channels Left Column */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Phone Card */}
            <div className="bg-gray-50 p-6 rounded-3xl border border-gray-200 flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-red-600 text-white flex items-center justify-center shrink-0 shadow-md shadow-red-600/20">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base font-extrabold text-neutral-900">Central Telefônica</h4>
                <p className="text-sm font-bold text-red-600 mt-1">(91) 3954-2778</p>
                <p className="text-xs text-neutral-500 mt-1">Segunda a Sexta das 08h às 18h</p>
              </div>
            </div>

            {/* WhatsApp Card */}
            <div className="bg-emerald-50 p-6 rounded-3xl border border-emerald-200 flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-md shadow-emerald-600/20">
                <MessageSquare className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h4 className="text-base font-extrabold text-emerald-950">Atendimento WhatsApp</h4>
                <p className="text-sm font-bold text-emerald-700 mt-1">(91) 9006-3923</p>
                <p className="text-xs text-emerald-800 mt-1 mb-2">Simulações e propostas em tempo real.</p>
                <a
                  href="https://wa.me/559190063923?text=Olá!%20Vim%20pelo%20site%20da%20ConsigaCred."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-emerald-600 text-white text-xs font-bold rounded-xl shadow-xs hover:bg-emerald-700 transition"
                >
                  <span>Iniciar Conversa no WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Email Card */}
            <div className="bg-gray-50 p-6 rounded-3xl border border-gray-200 flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-neutral-900 text-white flex items-center justify-center shrink-0 shadow-md">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base font-extrabold text-neutral-900">E-mail Oficial</h4>
                <p className="text-sm font-bold text-neutral-800 mt-1">contato@consigacred.com.br</p>
                <p className="text-xs text-neutral-500 mt-1">Resposta em até 24 horas úteis</p>
              </div>
            </div>

            {/* Headquarters Card */}
            <div className="bg-gray-50 p-6 rounded-3xl border border-gray-200 flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-gray-200 text-neutral-800 flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <h4 className="text-base font-extrabold text-neutral-900">Sede Administrativa</h4>
                <p className="text-xs text-neutral-700 mt-1">Av. Presidente Vargas, 450 - Centro, Belém - PA</p>
              </div>
            </div>

          </div>

          {/* Contact Form Right Column */}
          <div className="lg:col-span-7 bg-white p-8 rounded-3xl border border-gray-200 shadow-xl">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-black text-neutral-900">Mensagem Enviada!</h3>
                <p className="text-sm text-neutral-600">
                  Obrigado por entrar em contato. Um de nossos consultores responderá sua mensagem em breve.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-2xl font-black text-neutral-900 mb-2">Envie uma Mensagem</h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-neutral-700 mb-1">Seu Nome *</label>
                    <input required type="text" placeholder="Nome completo" className="w-full px-3.5 py-2.5 text-sm bg-gray-50 border border-gray-300 rounded-xl" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-neutral-700 mb-1">Seu Telefone / WhatsApp *</label>
                    <input required type="tel" placeholder="(00) 90000-0000" className="w-full px-3.5 py-2.5 text-sm bg-gray-50 border border-gray-300 rounded-xl" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-neutral-700 mb-1">Seu E-mail *</label>
                  <input required type="email" placeholder="seu@email.com" className="w-full px-3.5 py-2.5 text-sm bg-gray-50 border border-gray-300 rounded-xl" />
                </div>

                <div>
                  <label className="block text-xs font-bold text-neutral-700 mb-1">Assunto de Interesse</label>
                  <select className="w-full px-3.5 py-2.5 text-sm bg-gray-50 border border-gray-300 rounded-xl font-medium">
                    <option value="duvida">Dúvida sobre Produtos</option>
                    <option value="simulacao">Solicitação de Simulação</option>
                    <option value="andamento">Andamento de Proposta</option>
                    <option value="outros">Outros Assuntos</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-neutral-700 mb-1">Sua Mensagem *</label>
                  <textarea required rows={4} placeholder="Como podemos te ajudar?" className="w-full px-3.5 py-2.5 text-sm bg-gray-50 border border-gray-300 rounded-xl"></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-red-600 hover:bg-red-700 text-white font-extrabold text-sm uppercase rounded-xl shadow-lg transition flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Enviar Mensagem</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </div>
  );
};
