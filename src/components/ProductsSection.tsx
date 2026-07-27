import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PRODUCTS_DATA } from '../data/mockData';
import { ProductId } from '../types';
import fundoImg from '../data/fundo.png';
import cartao2Img from '../data/cartao2.png';
import porcoImg from '../data/porco.png';
import estrelaImg from '../data/estrela.png';
import { Building2, Zap, FileText, Home, MousePointerClick } from 'lucide-react';

interface ProductsSectionProps {
  onSelectProduct: (productId: ProductId) => void;
}

export const ProductsSection: React.FC<ProductsSectionProps> = ({ onSelectProduct }) => {
  const [startIndex, setStartIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = next, -1 = prev
  const sectionRef = useRef<HTMLElement>(null);
  const startIndexRef = useRef(startIndex);
  startIndexRef.current = startIndex;
  const lastStepTime = useRef(0);
  const boundaryLockUntil = useRef(0);
  const touchStartX = useRef<number | null>(null);

  // Native wheel scroll controller with viewport lock, smooth step delays, and boundary buffer
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const handleNativeWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) < 8) return;

      const rect = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const isMobile = window.innerWidth < 768;
      const maxIndex = isMobile ? PRODUCTS_DATA.length - 1 : PRODUCTS_DATA.length - 3;
      const currentIdx = startIndexRef.current;
      const now = Date.now();

      const targetOffset = 65; // Position section higher up when auto-aligning
      const distFromTarget = Math.abs(rect.top - targetOffset);

      // Section is considered active in viewport when its content fills a major portion of the screen
      const isFocusedInViewport = rect.top < viewportHeight * 0.7 && rect.bottom > viewportHeight * 0.3;

      if (!isFocusedInViewport) return;

      if (e.deltaY > 0) {
        // Scrolling DOWN
        if (currentIdx < maxIndex) {
          e.preventDefault();

          // Smoothly snap section top under navbar if misaligned
          if (distFromTarget > 15) {
            window.scrollTo({
              top: window.scrollY + rect.top - targetOffset,
              behavior: 'smooth',
            });
          }

          // Enforce 400ms step delay between card transitions
          if (now - lastStepTime.current >= 400) {
            setDirection(1);
            setStartIndex((prev) => {
              const next = Math.min(prev + 1, maxIndex);
              if (next === maxIndex) {
                // Activate boundary delay lock when reaching the last cards
                boundaryLockUntil.current = Date.now() + 750;
              }
              return next;
            });
            lastStepTime.current = now;
          }
        } else {
          // At maxIndex (last card set)
          // Hold boundary lock for 750ms so fast scrolling doesn't jump past the section
          if (now < boundaryLockUntil.current) {
            e.preventDefault();
            if (distFromTarget > 15) {
              window.scrollTo({
                top: window.scrollY + rect.top - targetOffset,
                behavior: 'smooth',
              });
            }
          }
        }
      } else if (e.deltaY < 0) {
        // Scrolling UP
        if (currentIdx > 0) {
          e.preventDefault();

          if (distFromTarget > 15) {
            window.scrollTo({
              top: window.scrollY + rect.top - targetOffset,
              behavior: 'smooth',
            });
          }

          if (now - lastStepTime.current >= 400) {
            setDirection(-1);
            setStartIndex((prev) => {
              const next = Math.max(prev - 1, 0);
              if (next === 0) {
                // Activate boundary delay lock when reaching the first cards
                boundaryLockUntil.current = Date.now() + 750;
              }
              return next;
            });
            lastStepTime.current = now;
          }
        } else {
          // At 0 (first card set)
          if (now < boundaryLockUntil.current) {
            e.preventDefault();
            if (distFromTarget > 15) {
              window.scrollTo({
                top: window.scrollY + rect.top - targetOffset,
                behavior: 'smooth',
              });
            }
          }
        }
      }
    };

    window.addEventListener('wheel', handleNativeWheel, { passive: false });
    return () => {
      window.removeEventListener('wheel', handleNativeWheel);
    };
  }, []);

  const handleNext = () => {
    const isMobile = window.innerWidth < 768;
    const maxIndex = isMobile ? PRODUCTS_DATA.length - 1 : PRODUCTS_DATA.length - 3;
    setDirection(1);
    setStartIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const handlePrev = () => {
    setDirection(-1);
    setStartIndex((prev) => Math.max(prev - 1, 0));
  };

  // Touch Swipe handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 35) {
      if (diff > 0) handleNext();
      else handlePrev();
    }
    touchStartX.current = null;
  };

  // Get 3 visible products based on startIndex
  const visibleProducts = [
    PRODUCTS_DATA[startIndex % PRODUCTS_DATA.length],
    PRODUCTS_DATA[(startIndex + 1) % PRODUCTS_DATA.length],
    PRODUCTS_DATA[(startIndex + 2) % PRODUCTS_DATA.length],
  ];

  const renderProductGraphic = (id: ProductId) => {
    switch (id) {
      case 'consignado':
        return (
          <div className="w-52 h-32 rounded-xl relative flex items-center justify-center -my-2 overflow-visible">
            <img 
              src={cartao2Img} 
              alt="Cartão Consignado" 
              className="w-full h-full object-contain transform scale-[1.38] hover:scale-[1.48] -rotate-3 hover:rotate-0 transition-all duration-300 drop-shadow-xl" 
            />
          </div>
        );

      case 'fgts':
        return (
          <div className="w-56 h-32 rounded-xl relative flex items-center justify-center -my-4 overflow-visible">
            <img 
              src={porcoImg} 
              alt="FGTS Porquinho" 
              className="w-full h-full object-contain transform scale-[1.75] hover:scale-[1.85] transition-transform duration-200" 
            />
          </div>
        );

      case 'cp-credito':
        return (
          <div className="w-36 h-24 bg-gradient-to-tr from-gray-800 to-gray-900 rounded-xl relative shadow-inner overflow-hidden border border-gray-700 flex flex-col justify-between p-3">
            <div className="flex justify-between items-center">
              <span className="text-[10px] font-black text-red-500 tracking-wider">CP CARD</span>
              <div className="w-6 h-4 bg-amber-400/80 rounded-xs"></div>
            </div>
            <div className="text-left font-mono text-[10px] text-gray-300 tracking-widest">•••• 8820</div>
            <div className="flex justify-between items-center">
              <span className="text-[8px] text-gray-400 uppercase font-semibold">Crédito Pessoal</span>
              <div className="w-4 h-4 bg-red-600 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-amber-400 rounded-full -ml-1 opacity-90"></div>
              </div>
            </div>
          </div>
        );

      case 'cp-debito':
        return (
          <div className="w-36 h-24 bg-gradient-to-tr from-neutral-800 to-neutral-900 rounded-xl relative shadow-inner overflow-hidden border border-neutral-700 flex items-center justify-center p-3 text-white">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-red-600/20 border border-red-500/40 flex items-center justify-center text-red-500 shrink-0">
                <Building2 className="w-6 h-6" />
              </div>
              <div className="text-left">
                <span className="block text-xs font-black text-white">DÉBITO</span>
                <span className="block text-[9px] text-red-400 font-bold uppercase">Em Conta</span>
              </div>
            </div>
          </div>
        );

      case 'cp-energia':
        return (
          <div className="w-36 h-24 bg-gradient-to-tr from-amber-500/10 to-amber-600/20 rounded-xl relative shadow-inner overflow-hidden border border-amber-500/30 flex items-center justify-center p-3">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-amber-500 text-neutral-900 flex items-center justify-center shadow-md shrink-0">
                <Zap className="w-6 h-6 fill-neutral-900" />
              </div>
              <div className="text-left">
                <span className="block text-xs font-black text-neutral-900">CONTA DE</span>
                <span className="block text-[9px] text-amber-600 font-bold uppercase">Energia</span>
              </div>
            </div>
          </div>
        );

      case 'cp-cheque':
        return (
          <div className="w-36 h-24 bg-gradient-to-tr from-gray-100 to-gray-200 rounded-xl relative shadow-inner overflow-hidden border border-gray-300 flex items-center justify-center p-3">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-red-600 text-white flex items-center justify-center shadow-md shrink-0">
                <FileText className="w-6 h-6" />
              </div>
              <div className="text-left">
                <span className="block text-xs font-black text-gray-900">CARNÊ /</span>
                <span className="block text-[9px] text-red-600 font-bold uppercase">Boleto</span>
              </div>
            </div>
          </div>
        );

      case 'home-equity':
        return (
          <div className="w-36 h-24 bg-gradient-to-tr from-red-600 to-red-800 rounded-xl relative shadow-inner overflow-hidden border border-red-500 flex items-center justify-center p-3 text-white">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white shrink-0">
                <Home className="w-6 h-6" />
              </div>
              <div className="text-left">
                <span className="block text-xs font-black text-white">HOME</span>
                <span className="block text-[9px] text-red-200 font-bold uppercase">Equity</span>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  const getButtonText = (id: ProductId) => {
    switch (id) {
      case 'fgts':
        return 'Antecipar';
      case 'home-equity':
        return 'Simular';
      case 'consignado':
        return 'Consignar';
      default:
        return 'Solicitar';
    }
  };

  // Fluid "desmanche" / stack-peel dissolve transition variant
  const cardVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 110 : -110,
      y: 20,
      opacity: 0,
      scale: 0.82,
      rotate: dir > 0 ? 6 : -6,
      filter: 'blur(10px)',
    }),
    center: (itemIndex: number) => ({
      x: 0,
      y: 0,
      opacity: 1,
      scale: 1,
      rotate: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.55,
        ease: [0.16, 1, 0.3, 1], // Custom ultra-smooth cubic bezier curve
        delay: itemIndex * 0.06, // Organic staggered reveal
      },
    }),
    exit: (dir: number) => ({
      x: dir > 0 ? -110 : 110,
      y: -25,
      opacity: 0,
      scale: 0.8,
      rotate: dir > 0 ? -8 : 8,
      filter: 'blur(12px)',
      transition: {
        duration: 0.45,
        ease: [0.4, 0, 1, 1],
      },
    }),
  };

  return (
    <section 
      ref={sectionRef}
      id="produtos"
      className="scroll-mt-28 md:scroll-mt-32 pt-10 md:pt-16 pb-10 md:pb-14 relative overflow-hidden bg-white bg-no-repeat bg-center select-none"
      style={{ 
        backgroundImage: `url(${fundoImg})`,
        backgroundSize: '100% 100%'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto -mt-2.5 mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-red-600 text-xs font-extrabold uppercase tracking-widest">
            <img src={estrelaImg} alt="Estrela" className="w-3.5 h-3.5 object-contain" />
            Nossas Soluções
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-neutral-900 tracking-tight">
            Conheça nossos <span className="text-red-600">Produtos</span>
          </h2>
          <p className="text-base sm:text-lg text-neutral-600">
            Crédito sob medida com as menores taxas do mercado, sem burocracia e com liberação rápida na sua conta.
          </p>
        </div>

        {/* Scroll / Swipe Control Area */}
        <div 
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className="relative max-w-5xl mx-auto px-2 sm:px-6 cursor-grab active:cursor-grabbing"
        >
          
          {/* Animated 3 Cards Grid with Fluid Stack-Dissolve */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-5 lg:gap-6 pb-2 overflow-visible min-h-[420px]">
            <AnimatePresence mode="popLayout" custom={direction}>
              {visibleProducts.map((product, idx) => {
                const buttonText = getButtonText(product.id);

                return (
                  <motion.div
                    key={product.id}
                    custom={direction}
                    variants={cardVariants}
                    initial="enter"
                    animate={() => cardVariants.center(idx)}
                    exit="exit"
                    layout
                    className="relative w-full max-w-xs mx-auto"
                  >
                    {/* Camada 2 (Contorno de fundo - Cor sólida) */}
                    <div className="absolute top-3 -bottom-3 left-3 right-3 bg-neutral-100 rounded-3xl border border-neutral-200/90 shadow-sm pointer-events-none z-0"></div>
                    
                    {/* Camada 1 (Contorno intermediário - Cor sólida) */}
                    <div className="absolute top-1.5 -bottom-1.5 left-1.5 right-1.5 bg-neutral-50 rounded-3xl border border-neutral-200 shadow-sm pointer-events-none z-0"></div>

                    {/* Card Principal (Mais alto, conciso e limpo) */}
                    <div className="relative bg-white rounded-3xl p-6 text-center shadow-xl border border-gray-100 z-10 flex flex-col justify-between min-h-[420px] transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

                      {/* Ícone / Imagem do Cartão */}
                      <div className="flex justify-center mb-5">
                        {renderProductGraphic(product.id)}
                      </div>

                      {/* Título */}
                      <h2 className="text-2xl font-extrabold text-gray-900 mb-2 leading-tight">
                        {product.title}
                      </h2>

                      {/* Texto Descritivo Conciso */}
                      <p className="text-gray-500 text-xs mb-6 leading-relaxed px-2 flex-1 flex items-center justify-center">
                        {product.shortDesc}
                      </p>

                      {/* Botão */}
                      <button 
                        onClick={() => onSelectProduct(product.id)}
                        className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-full w-full shadow-lg shadow-red-600/30 transition-all duration-200 text-sm cursor-pointer hover:scale-102"
                      >
                        {buttonText}
                      </button>

                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* Interactive Hint & Dots Indicator */}
          <div className="flex flex-col items-center justify-center gap-3 mt-6">
            <div className="flex items-center gap-1.5 text-xs text-neutral-400 font-semibold tracking-wide">
              <MousePointerClick className="w-3.5 h-3.5 text-red-500 animate-bounce" />
              <span>Role ou deslize para navegar entre as soluções</span>
            </div>

            <div className="flex justify-center items-center gap-2">
              {PRODUCTS_DATA.map((prod, idx) => {
                const isActive = idx === startIndex % PRODUCTS_DATA.length;
                return (
                  <button
                    key={prod.id}
                    onClick={() => {
                      setDirection(idx > startIndex ? 1 : -1);
                      setStartIndex(idx);
                    }}
                    title={prod.title}
                    className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                      isActive ? 'w-8 bg-red-600' : 'w-2.5 bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};



