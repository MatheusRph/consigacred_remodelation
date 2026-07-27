import React, { useState } from 'react';
import { ProductId } from '../types';
import { PRODUCTS_DATA } from '../data/mockData';
import { 
  Calculator, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Info,
  Send,
  Zap,
  RefreshCw
} from 'lucide-react';

interface CreditSimulatorProps {
  initialProductId?: ProductId;
  onSubmitted?: () => void;
}

export const CreditSimulator: React.FC<CreditSimulatorProps> = ({ 
  initialProductId = 'consignado',
  onSubmitted 
}) => {
  const [selectedProduct, setSelectedProduct] = useState<ProductId>(initialProductId);
  const [amount, setAmount] = useState<number>(5000);
  const [months, setMonths] = useState<number>(36);
  const [userProfile, setUserProfile] = useState<string>('aposentado');
  
  // Lead Form
  const [name, setName] = useState('');
  const [cpf, setCpf] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const product = PRODUCTS_DATA.find(p => p.id === selectedProduct) || PRODUCTS_DATA[0];

  // Estimated calculations
  const interestRate = selectedProduct === 'fgts' ? 0.0129 : selectedProduct === 'consignado' ? 0.0160 : 0.0210;
  
  // Monthly payment formula (PMT)
  const calculatePMT = () => {
    if (selectedProduct === 'fgts') {
      // FGTS is deducted from balance yearly, no monthly installment
      return 0;
    }
    const r = interestRate;
    const n = months;
    const pmt = (amount * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    return isNaN(pmt) ? 0 : Math.round(pmt * 100) / 100;
  };

  const estimatedMonthly = calculatePMT();
  const totalAmountEstimated = selectedProduct === 'fgts' 
    ? Math.round(amount * 1.15) 
    : Math.round(estimatedMonthly * months);

  const handleSubmitProposal = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !cpf || !phone) {
      alert('Por favor, preencha os campos obrigatórios (Nome, CPF e Telefone).');
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      if (onSubmitted) onSubmitted();
    }, 1200);
  };

  return (
    <div className="bg-white rounded-3xl border border-gray-200 shadow-2xl p-6 sm:p-10 max-w-4xl mx-auto my-8">
      
      {/* Header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 text-red-600 text-xs font-bold uppercase tracking-wider mb-2">
          <Calculator className="w-3.5 h-3.5" />
          Simulador Oficial
        </div>
        <h3 className="text-2xl sm:text-3xl font-black text-neutral-900 tracking-tight">
          Simule seu Crédito <span className="text-red-600">ConsigaCred</span>
        </h3>
        <p className="text-neutral-600 text-sm mt-1">
          Escolha a modalidade e veja o valor estimado da sua proposta em tempo real.
        </p>
      </div>

      {submitted ? (
        <div className="text-center py-12 space-y-6 animate-fade-in">
          <div className="w-20 h-20 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/20">
            <CheckCircle2 className="w-12 h-12" />
          </div>
          <div className="space-y-2">
            <h4 className="text-2xl font-black text-neutral-900">Simulação Realizada com Sucesso!</h4>
            <p className="text-neutral-600 text-sm max-w-md mx-auto">
              Olá, <strong>{name}</strong>! Nossa equipe de atendimento irá entrar em contato pelo número <strong>{phone}</strong> em até 15 minutos com a sua proposta pré-aprovada.
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200 max-w-md mx-auto text-left space-y-2 text-sm">
            <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Resumo da Simulação</div>
            <div className="flex justify-between">
              <span className="text-gray-600">Modalidade:</span>
              <span className="font-bold text-neutral-900">{product.title}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Valor Solicitado:</span>
              <span className="font-bold text-red-600">R$ {amount.toLocaleString('pt-BR')}</span>
            </div>
            {selectedProduct !== 'fgts' && (
              <div className="flex justify-between">
                <span className="text-gray-600">Parcela Estimada:</span>
                <span className="font-bold text-neutral-900">{months}x de R$ {estimatedMonthly.toLocaleString('pt-BR')}</span>
              </div>
            )}
            <div className="flex justify-between">
              <span className="text-gray-600">Liberação Estimada:</span>
              <span className="font-bold text-emerald-600">{product.releaseTime}</span>
            </div>
          </div>

          <button
            onClick={() => {
              setSubmitted(false);
              setName('');
              setCpf('');
              setPhone('');
            }}
            className="px-6 py-3 bg-neutral-900 hover:bg-black text-white text-sm font-bold rounded-xl transition flex items-center gap-2 mx-auto"
          >
            <RefreshCw className="w-4 h-4" />
            <span>Fazer Nova Simulação</span>
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Controls Left Column */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Product Tabs */}
            <div>
              <label className="block text-xs font-extrabold text-neutral-700 uppercase tracking-wider mb-2">
                1. Escolha a Modalidade de Crédito:
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {PRODUCTS_DATA.map((p) => {
                  const isSelected = selectedProduct === p.id;
                  return (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => {
                        setSelectedProduct(p.id);
                        setAmount(p.minAmount + (p.maxAmount - p.minAmount) / 2);
                      }}
                      className={`p-3 rounded-xl border text-xs font-bold text-center transition-all ${
                        isSelected
                          ? 'bg-red-600 text-white border-red-600 shadow-md shadow-red-600/20'
                          : 'bg-gray-50 text-neutral-700 border-gray-200 hover:bg-gray-100'
                      }`}
                    >
                      {p.title}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Profile Selection */}
            {selectedProduct === 'consignado' && (
              <div>
                <label className="block text-xs font-extrabold text-neutral-700 uppercase tracking-wider mb-2">
                  Qual o seu Perfil?
                </label>
                <select
                  value={userProfile}
                  onChange={(e) => setUserProfile(e.target.value)}
                  className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl text-sm font-medium text-neutral-800 focus:ring-2 focus:ring-red-600"
                >
                  <option value="aposentado">Aposentado do INSS</option>
                  <option value="pensionista">Pensionista do INSS</option>
                  <option value="servidor">Servidor Público (Federal / Estadual / Municipal)</option>
                  <option value="militar">Militar das Forças Armadas</option>
                </select>
              </div>
            )}

            {/* Slider Amount */}
            <div className="bg-gray-50 p-5 rounded-2xl border border-gray-200 space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-xs font-bold text-neutral-700 uppercase tracking-wider">
                  Valor Desejado:
                </span>
                <span className="text-2xl font-black text-red-600">
                  R$ {amount.toLocaleString('pt-BR')}
                </span>
              </div>

              <input
                type="range"
                min={product.minAmount}
                max={product.maxAmount}
                step={selectedProduct === 'fgts' ? 200 : 500}
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-red-600"
              />

              <div className="flex justify-between text-xs text-gray-500 font-medium">
                <span>R$ {product.minAmount.toLocaleString('pt-BR')}</span>
                <span>R$ {product.maxAmount.toLocaleString('pt-BR')}</span>
              </div>
            </div>

            {/* Slider Installments (if not FGTS) */}
            {selectedProduct !== 'fgts' ? (
              <div className="bg-gray-50 p-5 rounded-2xl border border-gray-200 space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-bold text-neutral-700 uppercase tracking-wider">
                    Número de Parcelas:
                  </span>
                  <span className="text-xl font-bold text-neutral-900">
                    {months} vezes
                  </span>
                </div>

                <input
                  type="range"
                  min={12}
                  max={product.maxInstallments}
                  step={6}
                  value={months}
                  onChange={(e) => setMonths(Number(e.target.value))}
                  className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-red-600"
                />

                <div className="flex justify-between text-xs text-gray-500 font-medium">
                  <span>12x</span>
                  <span>{product.maxInstallments}x</span>
                </div>
              </div>
            ) : (
              <div className="bg-amber-50 p-4 rounded-2xl border border-amber-200 text-amber-900 text-xs flex items-start gap-2.5">
                <Info className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <strong>Aviso FGTS:</strong> Na antecipação do Saque-Aniversário, você antecipa o seu saldo sem pagamentos mensais. O valor é quitado automaticamente pelo seu fundo de garantia uma vez por ano.
                </div>
              </div>
            )}

            {/* Summary card preview */}
            <div className="bg-neutral-900 text-white p-5 rounded-2xl space-y-3 shadow-lg">
              <div className="flex justify-between items-center border-b border-neutral-800 pb-2 text-xs">
                <span className="text-neutral-400">Taxa Estimada:</span>
                <span className="font-bold text-emerald-400">{product.estimatedInterest}</span>
              </div>

              {selectedProduct !== 'fgts' ? (
                <div className="flex justify-between items-baseline pt-1">
                  <span className="text-sm font-medium text-neutral-300">Valor da Parcela:</span>
                  <span className="text-2xl font-black text-red-500">
                    {months}x R$ {estimatedMonthly.toLocaleString('pt-BR')}
                  </span>
                </div>
              ) : (
                <div className="flex justify-between items-baseline pt-1">
                  <span className="text-sm font-medium text-neutral-300">Receba no PIX:</span>
                  <span className="text-2xl font-black text-emerald-400">
                    R$ {amount.toLocaleString('pt-BR')}
                  </span>
                </div>
              )}

              <div className="flex items-center gap-1.5 text-[11px] text-neutral-400 pt-1">
                <Zap className="w-3.5 h-3.5 text-amber-400" />
                <span>Previsão de Crédito em Conta: <strong>{product.releaseTime}</strong></span>
              </div>
            </div>

          </div>

          {/* Proposal Form Right Column */}
          <div className="lg:col-span-5 bg-gray-50 p-6 rounded-3xl border border-gray-200 flex flex-col justify-between">
            <form onSubmit={handleSubmitProposal} className="space-y-4">
              <div>
                <h4 className="text-lg font-black text-neutral-900 mb-1">Garanta sua Proposta</h4>
                <p className="text-xs text-neutral-500">Preencha seus dados para visualizar a aprovação imediata.</p>
              </div>

              <div>
                <label className="block text-xs font-bold text-neutral-700 mb-1">Nome Completo *</label>
                <input
                  type="text"
                  required
                  placeholder="Ex: João da Silva"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-sm bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-600 focus:border-red-600"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-neutral-700 mb-1">CPF *</label>
                <input
                  type="text"
                  required
                  placeholder="000.000.000-00"
                  value={cpf}
                  onChange={(e) => setCpf(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-sm bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-600 focus:border-red-600"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-neutral-700 mb-1">WhatsApp / Celular *</label>
                <input
                  type="tel"
                  required
                  placeholder="(00) 90000-0000"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-sm bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-600 focus:border-red-600"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-neutral-700 mb-1">E-mail (opcional)</label>
                <input
                  type="email"
                  placeholder="seu@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-sm bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-600 focus:border-red-600"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-red-600 hover:bg-red-700 text-white font-black text-sm uppercase tracking-wider rounded-xl shadow-lg shadow-red-600/30 transition flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Processando Simulação...</span>
                  ) : (
                    <>
                      <span>Receber Proposta Grátis</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

              <div className="text-center pt-2">
                <span className="text-[10px] text-gray-400 flex items-center justify-center gap-1">
                  <ShieldCheck className="w-3 h-3 text-emerald-600" />
                  Seus dados estão protegidos sob a LGPD (Lei 13.709/2018).
                </span>
              </div>
            </form>
          </div>

        </div>
      )}

    </div>
  );
};
