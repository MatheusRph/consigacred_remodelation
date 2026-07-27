import React, { useState } from 'react';
import { Gift, Sparkles, CheckCircle2, TrendingUp, Percent, ArrowRight, Wallet, Award } from 'lucide-react';

export const ConsigaPlusView: React.FC = () => {
  const [loanValue, setLoanValue] = useState<number>(10000);

  // Cashback calculation (e.g. 1.5% cashback on loan value as bonus points/cash)
  const cashbackBonus = Math.round(loanValue * 0.015);

  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Banner */}
        <div className="bg-gradient-to-br from-red-600 via-red-700 to-neutral-900 rounded-3xl p-8 sm:p-14 text-white shadow-2xl relative overflow-hidden">
          <div className="max-w-2xl relative z-10 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/20 text-white font-extrabold text-xs uppercase tracking-widest border border-white/30">
              <Gift className="w-4 h-4 text-amber-300" />
              Clube Exclusivo de Vantagens
            </div>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
              Consiga<span className="text-amber-300">Plus</span>
            </h1>
            <p className="text-red-100 text-base sm:text-lg leading-relaxed">
              Mais do que crédito: um clube de vantagens com cashback em dinheiro, prêmios exclusivos e descontos em mais de 10.000 estabelecimentos parceiros em todo o Brasil.
            </p>
          </div>
        </div>

        {/* Cashback Calculator Widget */}
        <div className="bg-gray-50 rounded-3xl p-8 border border-gray-200 shadow-xl max-w-3xl mx-auto space-y-6">
          <div className="text-center space-y-1">
            <h3 className="text-2xl font-black text-neutral-900">
              Calculadora de Bônus ConsigaPlus
            </h3>
            <p className="text-xs text-neutral-600">
              Veja quanto você ganha de cashback direto na sua conta ao contratar pela ConsigaCred.
            </p>
          </div>

          <div className="space-y-3 bg-white p-6 rounded-2xl border border-gray-200">
            <div className="flex justify-between items-center text-sm font-bold text-neutral-800">
              <span>Valor da Operação de Crédito:</span>
              <span className="text-2xl font-black text-red-600">
                R$ {loanValue.toLocaleString('pt-BR')}
              </span>
            </div>
            <input
              type="range"
              min={1000}
              max={50000}
              step={1000}
              value={loanValue}
              onChange={(e) => setLoanValue(Number(e.target.value))}
              className="w-full h-3 bg-gray-200 rounded-lg cursor-pointer accent-red-600"
            />
          </div>

          <div className="bg-neutral-900 text-white p-6 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg">
            <div>
              <span className="text-xs font-bold text-neutral-400 uppercase tracking-wider">Seu Bônus Estimado em Dinheiro:</span>
              <div className="text-3xl font-black text-amber-400">
                R$ {cashbackBonus.toLocaleString('pt-BR')}
              </div>
              <span className="text-[11px] text-neutral-400">Creditado automaticamente na sua conta ConsigaCred.</span>
            </div>

            <button className="px-6 py-3.5 bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-md transition flex items-center gap-2">
              <span>Quero Meu Bônus</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Benefits list */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-md space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold">
              <Wallet className="w-5 h-5" />
            </div>
            <h4 className="text-lg font-bold text-neutral-900">Cashback Real</h4>
            <p className="text-xs text-neutral-600 leading-relaxed">
              Receba porcentagens do valor contratado direto na sua chave PIX sem enrolação ou pegadinhas.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-md space-y-3">
            <div className="w-10 h-10 rounded-xl bg-red-100 text-red-600 flex items-center justify-center font-bold">
              <Percent className="w-5 h-5" />
            </div>
            <h4 className="text-lg font-bold text-neutral-900">Descontos em Farmácias</h4>
            <p className="text-xs text-neutral-600 leading-relaxed">
              Até 70% de desconto em medicamentos e produtos de saúde nas maiores redes de farmácias do país.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-md space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold">
              <Award className="w-5 h-5" />
            </div>
            <h4 className="text-lg font-bold text-neutral-900">Sorteios Mensais</h4>
            <p className="text-xs text-neutral-600 leading-relaxed">
              Concorra a prêmios em dinheiro e eletrodomésticos todo mês apenas por ser cliente ativo ConsigaPlus.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};
