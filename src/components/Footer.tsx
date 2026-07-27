import React from 'react';
import { ActiveTab } from '../types';
import { 
  Phone, 
  MessageSquare, 
  Mail, 
  MapPin, 
  Facebook, 
  Instagram, 
  Youtube, 
  ShieldCheck,
  ChevronRight
} from 'lucide-react';

interface FooterProps {
  setActiveTab: (tab: ActiveTab) => void;
  onOpenSimulate: () => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab, onOpenSimulate }) => {
  const handleNav = (tab: ActiveTab) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-neutral-900 text-gray-300 pt-16 pb-12 border-t border-neutral-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-neutral-800">
          
          {/* Column 1: Logo & Company Description (matching image.png) */}
          <div className="lg:col-span-4 space-y-4">
            <div 
              onClick={() => handleNav('home')}
              className="flex items-center gap-2 cursor-pointer group"
            >
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center shadow-md">
                <div className="flex flex-col items-center gap-1">
                  <div className="w-4 h-0.5 bg-white rounded-full"></div>
                  <div className="w-3 h-0.5 bg-red-200 rounded-full"></div>
                  <div className="w-4 h-0.5 bg-white/80 rounded-full"></div>
                </div>
              </div>
              <div className="flex items-baseline">
                <span className="text-2xl font-black tracking-tight text-white font-sans">
                  Consiga
                </span>
                <span className="text-2xl font-black tracking-tight text-red-500 font-sans">
                  Cred
                </span>
              </div>
            </div>

            <p className="text-xs text-gray-400 leading-relaxed">
              Funciona como o cartão de crédito comum, que pode ser usado para fazer compras e realizar saque. A diferença é que, no pagamento, é descontado diretamente do holerite do cliente.
            </p>

            <div className="pt-2 flex items-center space-x-3">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-neutral-800 hover:bg-red-600 text-gray-300 hover:text-white flex items-center justify-center transition">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-neutral-800 hover:bg-red-600 text-gray-300 hover:text-white flex items-center justify-center transition">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-neutral-800 hover:bg-red-600 text-gray-300 hover:text-white flex items-center justify-center transition">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Contato (matching image.png) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-base font-bold text-white tracking-wide">Contato</h4>
            
            <ul className="space-y-2.5 text-xs text-gray-400">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-red-500 shrink-0" />
                <span>(91) 3954-2778</span>
              </li>
              <li className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>(91) 9006-3923</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-red-500 shrink-0" />
                <span>contato@consigacred.com.br</span>
              </li>
              <li className="flex items-start gap-2 pt-1">
                <MapPin className="w-4 h-4 text-gray-500 shrink-0 mt-0.5" />
                <span>Av. Presidente Vargas, 450 - Belém / PA</span>
              </li>
            </ul>
          </div>

          {/* Column 3: Produtos (matching image.png) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-base font-bold text-white tracking-wide">Produtos</h4>
            
            <ul className="space-y-2 text-xs text-gray-400">
              <li>
                <button onClick={() => handleNav('home')} className="hover:text-red-400 transition">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('empresa')} className="hover:text-red-400 transition">
                  Empresa
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('produtos')} className="hover:text-red-400 transition">
                  Produtos
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('unidades')} className="hover:text-red-400 transition">
                  Unidades
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Links (matching image.png) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-base font-bold text-white tracking-wide">Links Rápidos</h4>
            
            <ul className="space-y-2 text-xs text-gray-400">
              <li>
                <button onClick={() => handleNav('consigaplus')} className="hover:text-red-400 transition">
                  ConsigaPlus
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('faq')} className="hover:text-red-400 transition">
                  FAQ - Dúvidas
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('parceiro')} className="hover:text-red-400 transition">
                  Seja Parceiro
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('contato')} className="hover:text-red-400 transition">
                  Fale Conosco
                </button>
              </li>
            </ul>

            <div className="pt-2">
              <button
                onClick={onOpenSimulate}
                className="w-full py-2.5 px-4 bg-red-600 hover:bg-red-700 text-white font-bold text-xs rounded-xl shadow-md transition text-center"
              >
                Simular Crédito
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Security note */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
            <span>© {new Date().getFullYear()} ConsigaCred Soluções Financeiras Ltda. Todos os direitos reservados.</span>
          </div>
          <div className="flex space-x-4">
            <span className="hover:text-gray-400 cursor-pointer">Termos de Uso</span>
            <span>•</span>
            <span className="hover:text-gray-400 cursor-pointer">Política de Privacidade</span>
            <span>•</span>
            <span className="hover:text-gray-400 cursor-pointer">BACEN Res. 3.954</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
