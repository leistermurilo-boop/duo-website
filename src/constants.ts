export const LOGO_URL = "https://storage.googleapis.com/m-infra.appspot.com/v0/b/m-infra.appspot.com/o/slfmzj4riddlwqqyx7ermk%2Flogo_duo.png?alt=media";

export const PLANS = [
  {
    id: "core",
    name: "Core",
    description: "Ferramenta estratégica de proteção",
    monthlyPrice: 497.00,
    annualPrice: 4970.00,
    monthlyPriceId: "price_core_monthly", // Placeholder
    annualPriceId: "price_core_annual",   // Placeholder
    features: [
      "Monitoramento de margem por item",
      "Δ Erosão",
      "Diagnóstico de saúde contratual",
      "Alertas críticos",
      "Níveis até 3 no Índice de Maturidade DUO™"
    ]
  },
  {
    id: "strategic",
    name: "Strategic",
    description: "Ferramenta estratégica de antecipação",
    monthlyPrice: 647.00,
    annualPrice: 6470.00,
    monthlyPriceId: "price_strategic_monthly", // Placeholder
    annualPriceId: "price_strategic_annual",   // Placeholder
    isPopular: true,
    features: [
      "Tudo do Core",
      "Radar B2G™",
      "Newsletter estratégica personalizada",
      "Cruzamento macroeconômico",
      "API PNCP",
      "API IBGE",
      "Níveis até 5 no Índice de Maturidade DUO™"
    ]
  }
];

export const FAQS = [
  {
    question: "Como funciona o cálculo de reajuste?",
    answer: "O DUO utiliza os índices oficiais (IPCA, IGPM, INPC) cruzados com as datas de aniversário do seu contrato, automatizando o cálculo de elegibilidade e valor projetado para o reajuste."
  },
  {
    question: "Integra com ERP?",
    answer: "Sim, possuímos APIs abertas e conectores para os principais ERPs do mercado (TOTVS, SAP, Senior), permitindo a sincronização de dados de faturamento e custos."
  },
  {
    question: "Precisa instalar algo?",
    answer: "Não. O DUO Governance é uma plataforma 100% SaaS (Cloud), acessível via navegador de qualquer dispositivo com segurança de nível bancário."
  },
  {
    question: "Como funciona a implantação?",
    answer: "Nossa implantação é assistida. Em menos de 15 dias, configuramos seus primeiros contratos e treinamos sua equipe para extrair o máximo de inteligência da ferramenta."
  }
];
