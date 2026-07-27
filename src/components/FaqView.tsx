import React, { useState } from 'react';
import { FAQ_DATA } from '../data/mockData';
import { 
  HelpCircle, 
  ChevronDown, 
  ChevronUp, 
  Search, 
  MessageSquare, 
  ShieldCheck 
} from 'lucide-react';

export const FaqView: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('todos');
  const [openId, setOpenId] = useState<string | null>('f1');

  const filteredFaqs = FAQ_DATA.filter(faq => {
    const matchesCat = selectedCategory === 'todos' || faq.category === selectedCategory;
    const matchesSearch = 
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="py-12 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 text-red-600 text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5" />
            Central de Ajuda
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-neutral-900 tracking-tight">
            Perguntas <span className="text-red-600">Frequentes</span>
          </h1>
          <p className="text-neutral-600 text-sm">
            Tire todas as suas dúvidas sobre nossas soluções de crédito e antecipações.
          </p>
        </div>

        {/* Search */}
        <div className="relative">
          <Search className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Digite sua dúvida aqui (ex: taxa, PIX, documentos, SPC)..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-2xl text-sm focus:ring-2 focus:ring-red-600 font-medium"
          />
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-2 justify-center">
          {[
            { id: 'todos', label: 'Todas as Dúvidas' },
            { id: 'consignado', label: 'Cartão Consignado' },
            { id: 'fgts', label: 'Antecipação FGTS' },
            { id: 'geral', label: 'Dúvidas Gerais' },
            { id: 'segurança', label: 'Segurança & LGPD' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
                selectedCategory === cat.id
                  ? 'bg-neutral-900 text-white shadow-md'
                  : 'bg-gray-100 text-neutral-700 hover:bg-gray-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="bg-gray-50 border border-gray-200 rounded-2xl overflow-hidden transition"
                >
                  <button
                    onClick={() => setOpenId(isOpen ? null : faq.id)}
                    className="w-full px-6 py-4 text-left flex justify-between items-center gap-4 hover:bg-gray-100/80 transition"
                  >
                    <span className="font-bold text-neutral-900 text-base">
                      {faq.question}
                    </span>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-red-600 shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400 shrink-0" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-5 text-sm text-neutral-600 border-t border-gray-200/60 pt-3 leading-relaxed animate-fade-in">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="text-center py-8 text-neutral-500 text-sm">
              Nenhuma pergunta encontrada para sua busca.
            </div>
          )}
        </div>

        {/* WhatsApp help banner */}
        <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 text-center space-y-3">
          <h4 className="text-base font-extrabold text-emerald-950">Ainda ficou com alguma dúvida?</h4>
          <p className="text-xs text-emerald-800">Fale diretamente com um de nossos consultores no WhatsApp.</p>
          <a
            href="https://wa.me/559190063923?text=Olá!%20Tenho%20uma%20dúvida%20e%20gostaria%20de%20ajuda."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow-md transition"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Falar com Atendente no WhatsApp</span>
          </a>
        </div>

      </div>
    </div>
  );
};
