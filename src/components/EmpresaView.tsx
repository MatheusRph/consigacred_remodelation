import React from 'react';
import { 
  Building2, 
  ShieldCheck, 
  Users, 
  Award, 
  TrendingUp, 
  CheckCircle2, 
  HeartHandshake,
  Target
} from 'lucide-react';

export const EmpresaView: React.FC = () => {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Banner Hero */}
        <div className="bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-900 rounded-3xl p-8 sm:p-14 text-white shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="max-w-2xl relative z-10 space-y-4">
            <span className="px-3 py-1 bg-red-600 text-white font-extrabold text-xs uppercase tracking-widest rounded-full">
              Nossa História e Valores
            </span>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
              Transformando o acesso ao crédito com <span className="text-red-500">respeito e agilidade</span>.
            </h1>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              A <strong>ConsigaCred</strong> nasceu com o propósito de democratizar o acesso a soluções financeiras de forma transparente, segura e sem burocracia para milhões de brasileiros.
            </p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 text-center space-y-1 shadow-2xs">
            <div className="text-3xl sm:text-4xl font-black text-red-600">+10 Anos</div>
            <div className="text-xs font-bold text-neutral-600 uppercase tracking-wider">de Atuação no Mercado</div>
          </div>
          <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 text-center space-y-1 shadow-2xs">
            <div className="text-3xl sm:text-4xl font-black text-neutral-900">R$ 500M+</div>
            <div className="text-xs font-bold text-neutral-600 uppercase tracking-wider">Crédito Origina em Operações</div>
          </div>
          <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 text-center space-y-1 shadow-2xs">
            <div className="text-3xl sm:text-4xl font-black text-red-600">+100 Mil</div>
            <div className="text-xs font-bold text-neutral-600 uppercase tracking-wider">Clientes Atendidos</div>
          </div>
          <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 text-center space-y-1 shadow-2xs">
            <div className="text-3xl sm:text-4xl font-black text-emerald-600">4.9 / 5</div>
            <div className="text-xs font-bold text-neutral-600 uppercase tracking-wider">Avaliação de Clientes</div>
          </div>
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-lg space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-red-100 text-red-600 flex items-center justify-center">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-extrabold text-neutral-900">Missão</h3>
            <p className="text-sm text-neutral-600 leading-relaxed">
              Oferecer as melhores soluções de crédito consignado e antecipação de garantias com atendimento humanizado, permitindo que nossos clientes realizem seus sonhos com segurança.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-lg space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-neutral-900 text-white flex items-center justify-center">
              <TrendingUp className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-extrabold text-neutral-900">Visão</h3>
            <p className="text-sm text-neutral-600 leading-relaxed">
              Ser a principal referência em correspondência bancária e soluções digitais de crédito consignado no Brasil, reconhecida pela excelência, ética e inovação tecnológica.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-lg space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-extrabold text-neutral-900">Valores</h3>
            <p className="text-sm text-neutral-600 leading-relaxed">
              Transparência absoluta, agilidade no atendimento, respeito ao cliente, conformidade com órgãos reguladores e compromisso contínuo com a satisfação.
            </p>
          </div>
        </div>

        {/* Commitment box */}
        <div className="bg-red-50 border border-red-200 rounded-3xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl font-black text-neutral-900">
              Nosso compromisso é com a sua tranquilidade financeira.
            </h3>
            <p className="text-neutral-600 text-sm max-w-xl">
              Atuamos como correspondente bancário das maiores e mais renomadas instituições financeiras do Brasil, garantindo as melhores condições e total legalidade em cada operação.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-10 h-10 text-red-600" />
            <div className="text-xs font-bold text-neutral-800 uppercase tracking-wider">
              Regulamentado Res. BACEN 3.954
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
