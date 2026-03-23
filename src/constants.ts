export const LOGO_URL = "https://storage.googleapis.com/m-infra.appspot.com/v0/b/m-infra.appspot.com/o/slfmzj4riddlwqqyx7ermk%2Flogo_duo.png?alt=media";

export const PLANS = [
  {
    id: "core",
    name: "Core",
    description: "Ferramenta estratégica de proteção",
    monthlyPrice: 497.00,
    annualPrice: 4970.00,
    monthlyPriceId: "price_core_monthly",
    annualPriceId: "price_core_annual",
    features: [
      "Contratos e itens ilimitados",
      "Autorizações de Fornecimento",
      "Controle de custos e margens",
      "Alertas de vencimento",
      "Monitoramento PNCP",
      "3 extrações OCR por mês",
      "Índice de Maturidade DUO™ até nível 3"
    ],
    notIncluded: [
      "Radar B2G™",
      "Newsletter Semanal",
      "APIs IBGE e BACEN",
      "Cruzamento Macroeconômico"
    ]
  },
  {
    id: "strategic",
    name: "Strategic",
    description: "Ferramenta estratégica de antecipação",
    monthlyPrice: 647.00,
    annualPrice: 6470.00,
    monthlyPriceId: "price_strategic_monthly",
    annualPriceId: "price_strategic_annual",
    isPopular: true,
    features: [
      "Contratos e itens ilimitados",
      "Autorizações de Fornecimento",
      "Controle de custos e margens",
      "Alertas de vencimento",
      "Monitoramento PNCP",
      "OCR ilimitado",
      "Radar B2G™",
      "Newsletter Semanal",
      "APIs IBGE e BACEN",
      "Cruzamento Macroeconômico",
      "Índice de Maturidade DUO™ nível 5"
    ],
    notIncluded: []
  }
];

export const FAQS = [
  {
    question: "Como funciona o cálculo de reajuste?",
    answer: "O DUO calcula automaticamente o reajuste com base nos índices oficiais (IPCA, INPC) integrados via API do BACEN, cruzando com a data de aniversário do contrato. O resultado é um valor projetado e documentado, pronto para embasar a solicitação formal ao órgão público."
  },
  {
    question: "O que é o OCR Inteligente?",
    answer: "Faça upload do PDF do contrato e o DUO extrai automaticamente os dados do cabeçalho e os itens em segundos. O plano Core inclui 3 extrações por mês; o plano Strategic tem OCR ilimitado."
  },
  {
    question: "O que é o Radar PNCP?",
    answer: "O Radar PNCP monitora automaticamente o portal do governo federal e detecta novos contratos publicados com o CNPJ da sua empresa — sem que você precise verificar manualmente. Disponível nos dois planos."
  },
  {
    question: "O que é o Radar B2G™?",
    answer: "O Radar B2G™ (exclusivo do plano Strategic) identifica ativamente oportunidades de novos contratos públicos com base no perfil da sua empresa, ajudando na prospecção e expansão no mercado B2G."
  },
  {
    question: "Precisa instalar algo?",
    answer: "Não. O DUO Governance é 100% SaaS — acesse via navegador de qualquer dispositivo. Cadastro em minutos, sem instalação, sem equipe de TI."
  },
  {
    question: "Meus dados são seguros?",
    answer: "Sim. Cada empresa tem seus dados completamente isolados por Row Level Security (RLS) no banco de dados. Nenhuma empresa acessa dados de outra. A infraestrutura roda no Supabase com criptografia em trânsito e em repouso."
  }
];
