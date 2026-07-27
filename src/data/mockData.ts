import { Product, Unit, FaqItem } from '../types';

export const PRODUCTS_DATA: Product[] = [
  {
    id: 'consignado',
    title: 'Cartão Consignado',
    shortDesc: 'Funciona como o cartão de crédito comum, que pode ser usado para fazer compras e realizar saque. A diferença é que, no pagamento, é descontado diretamente do holerite do cliente.',
    fullDesc: 'O Cartão Consignado é ideal para Aposentados, Pensionistas do INSS e Servidores Públicos. Possui uma das menores taxas de juros do mercado, limite pré-aprovado de acordo com a margem consignável e permite saques em dinheiro no caixa eletrônico ou via transferência.',
    badge: 'Sem Consulta ao SPC/Serasa',
    theme: 'red',
    minAmount: 1000,
    maxAmount: 30000,
    maxInstallments: 84,
    estimatedInterest: 'A partir de 1,60% a.m.',
    releaseTime: 'Até 24 horas',
    icons: ['clock', 'card', 'lock'],
    features: [
      'Desconto direto no holerite ou benefício',
      'Até 70% do limite liberado em dinheiro na conta',
      'Anuidade grátis e sem taxa de adesão',
      'Sem consulta ao SPC ou Serasa'
    ]
  },
  {
    id: 'fgts',
    title: 'Antecipação FGTS',
    shortDesc: 'Antecipe seus recursos do Fundo de Garantia com taxas competitivas, sem burocracia e de forma rápida e segura.',
    fullDesc: 'Para trabalhadores com carteira assinada ou saldo em contas inativas do FGTS que optaram pelo Saque-Aniversário. Você antecipa até 10 parcelas anuais sem comprometer sua renda mensal, pois o valor é descontado diretamente do saldo do FGTS.',
    badge: 'Dinheiro via PIX em até 2 horas',
    theme: 'black',
    minAmount: 300,
    maxAmount: 50000,
    maxInstallments: 10,
    estimatedInterest: 'A partir de 1,29% a.m.',
    releaseTime: 'Até 2 horas via PIX',
    icons: ['calendar', 'check'],
    features: [
      'Não desconta nada do seu salário mensal',
      'Disponível para negativados com saldo no FGTS',
      'Antecipe até 10 anos de Saque-Aniversário',
      'Processo 100% digital pela conta Gov.br'
    ]
  },
  {
    id: 'cp-credito',
    title: 'CP Cartão de Crédito',
    shortDesc: 'Uma solução de crédito pessoal para você que busca praticidade e flexibilidade no dia a dia, com controle na palma da mão.',
    fullDesc: 'O CP Cartão de Crédito reúne conveniência, inovação e limite rápido para suas necessidades diárias. Cartão virtual instantâneo no app ConsigaCred, programa de pontos e condições especiais para parcelamento.',
    badge: 'Aprovação Rápida e Controle via App',
    theme: 'red',
    minAmount: 500,
    maxAmount: 15000,
    maxInstallments: 24,
    estimatedInterest: 'A partir de 2,10% a.m.',
    releaseTime: 'Instantâneo no App',
    icons: ['wallet', 'lightning'],
    features: [
      'Cartão virtual imediato após aprovação',
      'Cashback exclusivo em estabelecimentos parceiros',
      'Controle de gastos e faturas em tempo real',
      'Parcelamento de faturas sem complicação'
    ]
  },
  {
    id: 'cp-debito',
    title: 'CP Débito em Conta',
    shortDesc: 'O empréstimo com débito em conta tem a sua funcionalidade parecida com outras modalidades de crédito, com exceção a sua forma de pagamento. Nessa operação financeira o banco empresta um determinado valor ao cliente, que devolve a quantia por meio de parcelas que são pagas mensalmente.',
    fullDesc: 'Modalidade prática onde as parcelas são debitadas automaticamente na sua conta bancária mensalmente, garantindo comodidade e sem necessidade de boletos.',
    badge: 'Desconto Direto em Conta',
    theme: 'black',
    minAmount: 1000,
    maxAmount: 20000,
    maxInstallments: 36,
    estimatedInterest: 'A partir de 2,20% a.m.',
    releaseTime: 'Até 24 horas',
    icons: ['card', 'clock'],
    features: [
      'Débito automático mensal direto na sua conta',
      'Sem necessidade de emitir boleto',
      'Crédito rápido e sem complicação',
      'Disponível para diversos bancos'
    ]
  },
  {
    id: 'cp-energia',
    title: 'CP Conta de Energia',
    shortDesc: 'A modalidade de crédito é uma linha de crédito onde o desconto ocorre direto na fatura de energia.',
    fullDesc: 'Crédito fácil e acessível descontado diretamente na sua conta de energia elétrica da concessionária parceira. Prático e rápido.',
    badge: 'Desconto na Fatura de Luz',
    theme: 'red',
    minAmount: 500,
    maxAmount: 5000,
    maxInstallments: 24,
    estimatedInterest: 'A partir de 2,50% a.m.',
    releaseTime: 'Até 24 horas',
    icons: ['lightning', 'check'],
    features: [
      'Desconto debitado na sua conta de energia',
      'Processo simplificado e sem burocracia',
      'Sem necessidade de comprovar renda alta',
      'Aprovação rápida e digital'
    ]
  },
  {
    id: 'cp-cheque',
    title: 'CP Carnê / Boleto',
    shortDesc: 'A modalidade de crédito é uma linha de crédito onde o pagamento é realizado por carnê ou através de boleto.',
    fullDesc: 'Uma opção tradicional e flexível onde você recebe o carnê ou os boletos mensais para pagamento na rede bancária ou internet banking.',
    badge: 'Pagamento por Carnê ou Boleto',
    theme: 'black',
    minAmount: 1000,
    maxAmount: 15000,
    maxInstallments: 24,
    estimatedInterest: 'A partir de 2,80% a.m.',
    releaseTime: 'Até 48 horas',
    icons: ['wallet', 'clock'],
    features: [
      'Pagamento facilitado via carnê ou boleto',
      'Controle total das datas de vencimento',
      'Sem obrigatoriedade de débito automático',
      'Atendimento personalizado'
    ]
  },
  {
    id: 'home-equity',
    title: 'Home Equity',
    shortDesc: 'Com o Home Equity, você transforma o valor do seu imóvel em crédito. Uma solução prática para alcançar seus objetivos com segurança e tranquilidade.',
    fullDesc: 'Utilize seu imóvel quitado como garantia para obter os maiores limites de crédito do mercado, com as menores taxas de juros e prazos longos para pagamento.',
    badge: 'Garantia de Imóvel com Menor Taxa',
    theme: 'red',
    minAmount: 50000,
    maxAmount: 1000000,
    maxInstallments: 240,
    estimatedInterest: 'A partir de 0,99% a.m.',
    releaseTime: 'Até 7 dias úteis',
    icons: ['lock', 'check'],
    features: [
      'Menores taxas de juros do mercado',
      'Prazos estendidos em até 240 meses',
      'Utilize o imóvel enquanto desfruta do crédito',
      'Altos valores liberados em conta'
    ]
  }
];

export const UNITS_DATA: Unit[] = [
  {
    id: 'u1',
    city: 'Belém',
    state: 'PA',
    address: 'Av. Presidente Vargas, 450 - Centro',
    neighborhood: 'Centro',
    phone: '(91) 3954-2778',
    whatsapp: '(91) 9006-3923',
    hours: 'Segunda a Sexta: 08:00 às 18:00 | Sábado: 08:00 às 12:00'
  },
  {
    id: 'u2',
    city: 'Ananindeua',
    state: 'PA',
    address: 'BR-316, Km 03 - Shopping Metrópole, Loja 112',
    neighborhood: 'Atalaia',
    phone: '(91) 3954-2780',
    whatsapp: '(91) 9006-3924',
    hours: 'Segunda a Sábado: 10:00 às 22:00'
  },
  {
    id: 'u3',
    city: 'São Paulo',
    state: 'SP',
    address: 'Rua Barão de Itapetininga, 255 - 4º andar',
    neighborhood: 'República',
    phone: '(11) 4003-8920',
    whatsapp: '(11) 98877-3311',
    hours: 'Segunda a Sexta: 09:00 às 18:00'
  },
  {
    id: 'u4',
    city: 'Rio de Janeiro',
    state: 'RJ',
    address: 'Av. Rio Branco, 156 - Sala 1201',
    neighborhood: 'Centro',
    phone: '(21) 3500-1234',
    whatsapp: '(21) 97766-4422',
    hours: 'Segunda a Sexta: 09:00 às 18:00'
  },
  {
    id: 'u5',
    city: 'Belo Horizonte',
    state: 'MG',
    address: 'Av. Afonso Pena, 867 - Edifício Acaiaca',
    neighborhood: 'Centro',
    phone: '(31) 3212-9900',
    whatsapp: '(31) 98765-1122',
    hours: 'Segunda a Sexta: 08:30 às 17:30'
  }
];

export const FAQ_DATA: FaqItem[] = [
  {
    id: 'f1',
    question: 'Quem pode contratar o Cartão Consignado ConsigaCred?',
    answer: 'O Cartão Consignado está disponível para Aposentados e Pensionistas do INSS, Servidores Públicos (Federais, Estaduais e Municipais) e Militares das Forças Armadas com margem consignável disponível.',
    category: 'consignado'
  },
  {
    id: 'f2',
    question: 'Como funciona a Antecipação do Saque-Aniversário do FGTS?',
    answer: 'Você autoriza a instituição financeira parceira da ConsigaCred no aplicativo do FGTS a consultar seu saldo. Em seguida, escolhemos a melhor proposta e antecipamos até 10 parcelas do seu saque anual. O dinheiro cai na sua conta via PIX em poucas horas.',
    category: 'fgts'
  },
  {
    id: 'f3',
    question: 'Quem está negativado pode contratar?',
    answer: 'Sim! Tanto no Cartão Consignado quanto na Antecipação FGTS não realizamos consulta ao SPC/Serasa, pois a garantia do crédito está no benefício ou no saldo retido do FGTS.',
    category: 'geral'
  },
  {
    id: 'f4',
    question: 'Quais documentos preciso apresentar para contratar?',
    answer: 'Apenas RG ou CNH válida, comprovante de residência atualizado, comprovante de dados bancários para depósito e, no caso de consignado, extrato do benefício ou último contracheque.',
    category: 'geral'
  },
  {
    id: 'f5',
    question: 'O processo de contratação é seguro?',
    answer: 'Absolutamente. Todos os nossos processos utilizam criptografia bancária de ponta a ponta e formalização digital com biometria facial, garantindo total conformidade com as diretrizes do Banco Central e LGPD.',
    category: 'segurança'
  },
  {
    id: 'f6',
    question: 'Em quanto tempo o dinheiro do FGTS entra na conta?',
    answer: 'Após a aprovação e assinatura digital da proposta, o pagamento é realizado via PIX em até 2 horas na conta bancária de sua titularidade.',
    category: 'fgts'
  }
];

export const TESTIMONIALS = [
  {
    name: 'Maria das Graças Silva',
    role: 'Aposentada INSS',
    city: 'Belém - PA',
    text: 'Consegui antecipar o dinheiro que precisava para reformar minha casa com taxa baixíssima. Atendimento nota 10!',
    rating: 5
  },
  {
    name: 'Carlos Eduardo Santos',
    role: 'Trabalhador CLT',
    city: 'São Paulo - SP',
    text: 'A antecipação do FGTS caiu no meu PIX em menos de 1 hora! Muito rápido e sem nenhuma complicação.',
    rating: 5
  },
  {
    name: 'Juliana Medeiros',
    role: 'Servidora Pública',
    city: 'Rio de Janeiro - RJ',
    text: 'Já sou cliente da ConsigaCred há 3 anos. Sempre transparentes, sem taxas escondidas. Recomendo de olhos fechados.',
    rating: 5
  }
];
