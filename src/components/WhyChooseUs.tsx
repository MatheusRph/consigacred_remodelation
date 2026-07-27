import React from 'react';
import { Smartphone, PiggyBank, Award, ShieldCheck } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const pillars = [
    {
      id: 'excelencia',
      title: 'Excelência',
      desc: 'Atendimento humanizado com especialistas prontos para tirar todas as suas dúvidas. Alto índice de aprovação e transparência total.',
      image: '/estrela.png',
    },
    {
      id: 'facilidade',
      title: 'Facilidade',
      desc: 'Processo 100% digital, sem filas e sem papelada. Faça sua simulação e contratação diretamente pelo celular de onde estiver.',
      icon: Smartphone,
      iconColor: 'text-red-600',
      bgColor: 'bg-red-50 border-red-100',
      badge: '100% Online e Seguro'
    },
    {
      id: 'economia',
      title: 'Economia',
      desc: 'Taxas de juros competitivas e sem cobrança de tarifas ocultas. Mais dinheiro na sua conta com parcelas que cabem no seu orçamento.',
      icon: PiggyBank,
      iconColor: 'text-emerald-600',
      bgColor: 'bg-emerald-50 border-emerald-100',
      badge: 'Menores Taxas'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50/80 border-y border-gray-100 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-1/3 w-72 h-72 bg-red-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-100/80 text-red-700 text-xs font-extrabold uppercase tracking-wider">
            <Award className="w-3.5 h-3.5" />
            Vantagens Exclusivas
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-neutral-900 tracking-tight">
            Porque nos <span className="text-red-600">escolher?</span>
          </h2>
          <p className="text-neutral-600 text-base sm:text-lg">
            Combinamos tecnologia de ponta e inovação com a segurança e tradição que você procura.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.id}
                className="bg-white rounded-3xl p-8 border border-gray-100 shadow-xl shadow-gray-200/50 hover:shadow-2xl hover:border-red-200 transition-all duration-300 text-center flex flex-col items-center group hover:-translate-y-1"
              >
                {/* Stylized Icon/Image Wrapper */}
                {pillar.image ? (
                  <div className="-mt-8 md:-mt-10 mb-0 w-36 h-36 md:w-40 md:h-40 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                    <img src={pillar.image} alt={pillar.title} className="w-full h-full object-contain drop-shadow-md" />
                  </div>
                ) : (
                  <div className={`w-20 h-20 rounded-2xl ${pillar.bgColor} border flex items-center justify-center mb-6 shadow-md transform group-hover:scale-110 transition-transform duration-300`}>
                    {Icon ? <Icon className={`w-10 h-10 ${pillar.iconColor}`} /> : null}
                  </div>
                )}

                {pillar.badge && (
                  <span className="text-xs font-extrabold text-neutral-400 uppercase tracking-widest mb-1">
                    {pillar.badge}
                  </span>
                )}

                <h3 className="text-2xl font-black text-neutral-900 mb-3 tracking-tight">
                  {pillar.title}
                </h3>

                <p className="text-neutral-600 text-sm leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Additional trust banner */}
        <div className="mt-16 bg-neutral-900 rounded-3xl p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="flex items-center gap-4 text-left">
            <div className="w-12 h-12 rounded-2xl bg-red-600 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-7 h-7 text-white" />
            </div>
            <div>
              <h4 className="text-lg font-bold">Segurança e Transparência Garantidas</h4>
              <p className="text-xs text-neutral-400">Propostas claras, sem letras miúdas ou cobranças indevidas. Regulamentado pelo Banco Central do Brasil.</p>
            </div>
          </div>
          <div className="flex items-center gap-6 text-center md:text-right shrink-0">
            <div>
              <div className="text-2xl font-black text-red-500">+100 mil</div>
              <div className="text-[11px] text-neutral-400 uppercase font-bold">Operações Realizadas</div>
            </div>
            <div className="w-px h-10 bg-neutral-800"></div>
            <div>
              <div className="text-2xl font-black text-emerald-400">99.8%</div>
              <div className="text-[11px] text-neutral-400 uppercase font-bold">Satisfação dos Clientes</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
