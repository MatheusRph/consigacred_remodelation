import React, { useState } from 'react';
import { ActiveTab } from '../types';
import logoImg from '../data/logo.png';
import { TiltContainer } from './TiltContainer';
import { 
  Facebook, 
  Instagram, 
  Youtube, 
  Menu, 
  X, 
  PhoneCall, 
  Shield, 
  Sparkles,
  ChevronRight
} from 'lucide-react';

interface NavbarProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  onOpenSimulate: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab, onOpenSimulate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: ActiveTab; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'empresa', label: 'Empresa' },
    { id: 'produtos', label: 'Produtos' },
    { id: 'unidades', label: 'Unidades' },
    { id: 'consigaplus', label: 'ConsigaPlus' },
    { id: 'faq', label: 'FAQ' },
    { id: 'parceiro', label: 'Seja Parceiro' },
    { id: 'contato', label: 'Fale Conosco' },
  ];

  const handleNavClick = (tab: ActiveTab) => {
    setActiveTab(tab);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-3 z-50 w-[96%] max-w-7xl mx-auto bg-white/95 backdrop-blur-md border border-gray-200/80 shadow-lg shadow-black/10 rounded-2xl sm:rounded-full transition-all">
      {/* Main Navbar */}
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          
          {/* Logo image with site-wide 3D Tilt animation */}
          <div 
            onClick={() => handleNavClick('home')}
            className="flex items-center cursor-pointer group py-0 ml-3 sm:ml-6 mt-1.5 sm:mt-2"
          >
            <TiltContainer maxAngle={18} perspective={700} scale={1.05} globalMouse={true}>
              <img 
                src={logoImg} 
                alt="ConsigaCred Logo" 
                className="h-16 sm:h-20 md:h-24 w-auto -my-2 sm:-my-4 max-h-24 object-contain filter drop-shadow-[0_4px_8px_rgba(0,0,0,0.2)] group-hover:drop-shadow-[0_8px_16px_rgba(220,38,38,0.35)] transition-all"
              />
            </TiltContainer>
          </div>

          {/* Navigation Links Desktop */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative px-2.5 py-1.5 text-xs sm:text-sm font-semibold transition-colors duration-150 ${
                    isActive 
                      ? 'text-red-600 font-bold' 
                      : 'text-neutral-800 hover:text-red-600'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-red-600 rounded-full animate-fade-in" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Social Media Icons (Facebook, Instagram, YouTube) */}
          <div className="hidden lg:flex items-center space-x-3 text-neutral-800">
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noreferrer" 
              aria-label="Facebook"
              className="hover:text-red-600 transition-colors p-1"
            >
              <Facebook className="w-4 h-4 fill-current stroke-none" />
            </a>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noreferrer" 
              aria-label="Instagram"
              className="hover:text-red-600 transition-colors p-1"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a 
              href="https://youtube.com" 
              target="_blank" 
              rel="noreferrer" 
              aria-label="YouTube"
              className="hover:text-red-600 transition-colors p-1"
            >
              <Youtube className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile menu trigger */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={onOpenSimulate}
              className="px-3 py-1.5 bg-red-600 text-white font-bold text-xs rounded-lg shadow-xs"
            >
              Simular
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-neutral-700 hover:bg-neutral-100 focus:outline-none"
              aria-label="Abrir menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-gray-200 px-4 pt-2 pb-6 space-y-2 shadow-xl animate-fade-in">
          <div className="grid grid-cols-1 gap-1 pt-2">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-left font-semibold text-base transition ${
                    isActive 
                      ? 'bg-red-50 text-red-600 border-l-4 border-red-600' 
                      : 'text-neutral-800 hover:bg-neutral-50'
                  }`}
                >
                  <span>{item.label}</span>
                  <ChevronRight className={`w-4 h-4 ${isActive ? 'text-red-600' : 'text-gray-400'}`} />
                </button>
              );
            })}
          </div>

          <div className="pt-4 border-t border-gray-100 flex items-center justify-between px-2">
            <span className="text-xs text-gray-500 font-medium">Siga a ConsigaCred:</span>
            <div className="flex space-x-3">
              <a href="https://facebook.com" className="p-2 bg-gray-100 rounded-full text-neutral-700"><Facebook className="w-4 h-4" /></a>
              <a href="https://instagram.com" className="p-2 bg-gray-100 rounded-full text-neutral-700"><Instagram className="w-4 h-4" /></a>
              <a href="https://youtube.com" className="p-2 bg-gray-100 rounded-full text-neutral-700"><Youtube className="w-4 h-4" /></a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
