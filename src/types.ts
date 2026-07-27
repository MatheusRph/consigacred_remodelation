export type ActiveTab = 'home' | 'empresa' | 'produtos' | 'unidades' | 'consigaplus' | 'faq' | 'parceiro' | 'contato';

export type ProductId = 'consignado' | 'fgts' | 'cp-credito' | 'cp-debito' | 'cp-energia' | 'cp-cheque' | 'home-equity';

export interface Product {
  id: ProductId;
  title: string;
  shortDesc: string;
  fullDesc: string;
  badge: string;
  theme: 'red' | 'black';
  minAmount: number;
  maxAmount: number;
  maxInstallments: number;
  estimatedInterest: string;
  releaseTime: string;
  icons: string[];
  features: string[];
}

export interface Unit {
  id: string;
  city: string;
  state: string;
  address: string;
  neighborhood: string;
  phone: string;
  whatsapp: string;
  hours: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'consignado' | 'fgts' | 'geral' | 'segurança';
}

export interface SimulationData {
  productId: ProductId;
  amount: number;
  months: number;
  userType: 'aposentado' | 'pensionista' | 'servidor' | 'clt' | 'militar';
  name: string;
  cpf: string;
  phone: string;
  email: string;
}
