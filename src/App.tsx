import React, { useState } from 'react';
import { ActiveTab, ProductId } from './types';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ProductsSection } from './components/ProductsSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { CreditSimulator } from './components/CreditSimulator';
import { EmpresaView } from './components/EmpresaView';
import { UnidadesView } from './components/UnidadesView';
import { ConsigaPlusView } from './components/ConsigaPlusView';
import { FaqView } from './components/FaqView';
import { PartnerView } from './components/PartnerView';
import { ContactView } from './components/ContactView';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { SimulationModal } from './components/SimulationModal';
import { TESTIMONIALS } from './data/mockData';
import { Star, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('home');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalProduct, setModalProduct] = useState<ProductId>('consignado');

  const handleOpenSimulate = (productId?: ProductId) => {
    if (productId) setModalProduct(productId);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-neutral-900 font-sans flex flex-col antialiased selection:bg-red-500 selection:text-white">
      
      {/* Navbar with layout matching image.png */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenSimulate={() => handleOpenSimulate()}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {activeTab === 'home' && (
          <>
            {/* Hero Section matching prompt instruction: "como tela de inicio utilize o imagem.png quie possui nosso compromisso é nossa diferença" */}
            <HeroSection
              onOpenSimulate={handleOpenSimulate}
              setActiveTab={setActiveTab}
            />

            {/* Products Section matching "Conheça nossos Produtos" in image.png & 1.jpeg */}
            <ProductsSection
              onSelectProduct={(productId) => handleOpenSimulate(productId)}
            />

            {/* Embedded Financial Simulator */}
            <section className="py-12 bg-gray-50 border-y border-gray-100">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <CreditSimulator initialProductId="consignado" />
              </div>
            </section>

            {/* Why Choose Us Section matching "Porque nos escolher?" in image 1.jpeg */}
            <WhyChooseUs />

            {/* Testimonials Section */}
            <section className="py-16 bg-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
                  <span className="text-xs font-black text-red-600 uppercase tracking-widest bg-red-50 px-3 py-1 rounded-full">
                    Depoimentos Reais
                  </span>
                  <h2 className="text-3xl font-black tracking-tight text-neutral-900">
                    O que nossos clientes dizem sobre a <span className="text-red-600">ConsigaCred</span>
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {TESTIMONIALS.map((t, idx) => (
                    <div
                      key={idx}
                      className="bg-gray-50 rounded-2xl p-6 border border-gray-200/80 shadow-xs flex flex-col justify-between space-y-4 hover:shadow-md transition"
                    >
                      <div className="space-y-3">
                        <div className="flex space-x-1 text-amber-400">
                          {[...Array(t.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-amber-400" />
                          ))}
                        </div>
                        <p className="text-xs sm:text-sm text-neutral-700 italic leading-relaxed">
                          "{t.text}"
                        </p>
                      </div>

                      <div className="pt-3 border-t border-gray-200/60 flex items-center justify-between text-xs">
                        <div>
                          <div className="font-bold text-neutral-900">{t.name}</div>
                          <div className="text-[11px] text-neutral-500">{t.role} • {t.city}</div>
                        </div>
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </>
        )}

        {activeTab === 'empresa' && <EmpresaView />}

        {activeTab === 'produtos' && (
          <div className="py-8 bg-gray-50 min-h-screen">
            <ProductsSection
              onSelectProduct={(productId) => handleOpenSimulate(productId)}
            />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
              <CreditSimulator />
            </div>
          </div>
        )}

        {activeTab === 'unidades' && <UnidadesView />}

        {activeTab === 'consigaplus' && <ConsigaPlusView />}

        {activeTab === 'faq' && <FaqView />}

        {activeTab === 'parceiro' && <PartnerView />}

        {activeTab === 'contato' && <ContactView />}
      </main>

      {/* Footer matching image.png */}
      <Footer
        setActiveTab={setActiveTab}
        onOpenSimulate={() => handleOpenSimulate()}
      />

      {/* Floating WhatsApp chat widget */}
      <FloatingWhatsApp />

      {/* Quick Simulation Modal Overlay */}
      <SimulationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialProductId={modalProduct}
      />

    </div>
  );
}
