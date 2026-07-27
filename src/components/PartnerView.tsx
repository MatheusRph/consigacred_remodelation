import React, { useState } from 'react';
import { Briefcase, TrendingUp, DollarSign, CheckCircle2, Send, Award } from 'lucide-react';

export const PartnerView: React.FC = () => {
  const [volume, setVolume] = useState<number>(100000);
  const [submitted, setSubmitted] = useState(false);

  // Commission calculation (approx 3.5% commission for correspondents)
  const estimatedCommission = Math.round(volume * 0.035);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Banner */}
        <div className="bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-900 rounded-3xl p-8 sm:p-14 text-white shadow-2xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-600 text-white font-extrabold text-xs uppercase tracking-widest">
            <Briefcase className="w-4 h-4" />
            Parcerias & Correspondentes
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
            Seja um Parceiro <span className="text-red-500">ConsigaCred</span>
          </h1>
          <p className="text-gray-300 text-base sm:text-lg max-w-2xl leading-relaxed">
            Ofereça produtos de crédito consignado e antecipação de FGTS para seus clientes com as maiores comissões do mercado e sistema de esteira 100% digital.
          </p>
        </div>

        {/* Commission Calculator */}
        <div className="bg-gray-50 rounded-3xl p-8 border border-gray-200 shadow-xl max-w-3xl mx-auto space-y-6">
          <div className="text-center space-y-1">
            <h3 className="text-2xl font-black text-neutral-900">
              Simulador de Comissionamento para Parceiros
            </h3>
            <p className="text-xs text-neutral-600">
              Estime quanto você pode faturar mensalmente produzindo com a ConsigaCred.
            </p>
          </div>

          <div className="space-y-3 bg-white p-6 rounded-2xl border border-gray-200">
            <div className="flex justify-between items-center text-sm font-bold text-neutral-800">
              <span>Produção Mensal de Crédito Estimada:</span>
              <span className="text-2xl font-black text-red-600">
                R$ {volume.toLocaleString('pt-BR')}
              </span>
            </div>
            <input
              type="range"
              min={20000}
              max={1000000}
              step={20000}
              value={volume}
              onChange={(e) => setVolume(Number(e.target.value))}
              className="w-full h-3 bg-gray-200 rounded-lg cursor-pointer accent-red-600"
            />
          </div>

          <div className="bg-neutral-900 text-white p-6 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg">
            <div>
              <span className="text-xs font-bold text-neutral-400 uppercase tracking-wider">Sua Comissão Mensal Estimada:</span>
              <div className="text-3xl font-black text-emerald-400">
                R$ {estimatedCommission.toLocaleString('pt-BR')}
              </div>
              <span className="text-[11px] text-neutral-400">Pagamento semanal direto na sua conta PJ ou PF.</span>
            </div>
          </div>
        </div>

        {/* Registration Form */}
        <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-xl max-w-2xl mx-auto">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-black text-neutral-900">Cadastro Enviado!</h3>
              <p className="text-sm text-neutral-600">
                Nossa gerência de parcerias analisou seu perfil e entrará em contato nas próximas 2 horas úteis via WhatsApp.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <h3 className="text-2xl font-black text-neutral-900 mb-2">Cadastre-se como Parceiro</h3>
              
              <div>
                <label className="block text-xs font-bold text-neutral-700 mb-1">Nome Completo / Razão Social *</label>
                <input required type="text" placeholder="Sua empresa ou nome" className="w-full px-3.5 py-2.5 text-sm bg-gray-50 border border-gray-300 rounded-xl" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-neutral-700 mb-1">CPF / CNPJ *</label>
                  <input required type="text" placeholder="00.000.000/0001-00" className="w-full px-3.5 py-2.5 text-sm bg-gray-50 border border-gray-300 rounded-xl" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-neutral-700 mb-1">WhatsApp de Contato *</label>
                  <input required type="tel" placeholder="(00) 90000-0000" className="w-full px-3.5 py-2.5 text-sm bg-gray-50 border border-gray-300 rounded-xl" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-neutral-700 mb-1">Cidade / Estado *</label>
                <input required type="text" placeholder="Ex: Belém / PA" className="w-full px-3.5 py-2.5 text-sm bg-gray-50 border border-gray-300 rounded-xl" />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-red-600 hover:bg-red-700 text-white font-extrabold text-sm uppercase rounded-xl shadow-lg transition flex items-center justify-center gap-2"
              >
                <span>Quero Ser Parceiro</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};
