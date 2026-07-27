import React from 'react';
import { ActiveTab, ProductId } from '../types';
import cartaoImg from '../data/cartao.png';
import { TiltContainer } from './TiltContainer';

interface HeroSectionProps {
  onOpenSimulate: (productId?: ProductId) => void;
  setActiveTab: (tab: ActiveTab) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-gray-50/80 via-white to-gray-50 pt-8 pb-12 sm:pt-16 sm:pb-24">
      {/* Background ambient lighting */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-red-500/5 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute top-1/3 -right-20 w-80 h-80 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Text matching user image exactly */}
          <div className="lg:col-span-6 space-y-6 text-left">
            
            {/* Main Headline matching image */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-red-600 leading-[1.02] tracking-tighter drop-shadow-[0_6px_12px_rgba(0,0,0,0.15)]">
              Nosso<br />
              compromisso é<br />
              o nosso<br />
              diferencial!
            </h1>

            {/* Subheading matching image */}
            <p className="text-lg sm:text-xl md:text-2xl text-neutral-800 font-medium leading-snug">
              Soluções financeiras modernas para você.
            </p>

          </div>

          {/* Right Column: Uploaded Card Image cartao.png with 3D Mouse Tilt */}
          <div className="lg:col-span-6 relative flex flex-col items-center justify-center">
            
            {/* Glowing background halo */}
            <div className="absolute inset-0 bg-gradient-to-tr from-red-500/10 via-transparent to-red-600/5 rounded-3xl blur-2xl pointer-events-none" />

            {/* Container for card image with site-wide 3D tilt tracking */}
            <div className="relative w-full max-w-lg mx-auto">
              <TiltContainer maxAngle={22} perspective={800} scale={1.04} globalMouse={true}>
                <img 
                  src={cartaoImg} 
                  alt="ConsigaCred Cartão e Soluções Financeiras" 
                  className="w-full h-auto object-contain filter drop-shadow-2xl select-none pointer-events-none"
                />
              </TiltContainer>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};


