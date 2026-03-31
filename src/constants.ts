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
      "Importação via OCR",
      "3 extrações OCR por mês",
      "Índice de Maturidade DUO™ até nível 3",
      "Radar B2G™",
      "Newsletter Semanal",
      "APIs IBGE e BACEN",
      "Cruzamento Macroeconômico",
    ],
    notIncluded: [
      "Tax Regime Engine — Reforma Tributária",
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
      "Importação via OCR",
      "OCR ilimitado",
      "Radar B2G™",
      "Newsletter Semanal",
      "APIs IBGE e BACEN",
      "Cruzamento Macroeconômico",
      "Tax Regime Engine — Reforma Tributária",
      "Índice de Maturidade DUO™ nível 5",
    ],
    notIncluded: []
  }
];

export const FAQS = [
  {
    question: "Funciona para qualquer segmento que fornece para o governo?",
    answer: "Sim. O DUO Governance foi desenvolvido para qualquer empresa fornecedora do setor público — serviços, materiais, construção, tecnologia. O que importa é ter contratos com órgãos públicos municipais, estaduais ou federais."
  },
  {
    question: "Como importo meus contratos atuais?",
    answer: "Você pode importar via OCR: faça upload do PDF do contrato e o DUO extrai automaticamente cabeçalho e itens em segundos. O plano Core inclui 3 extrações por mês; o plano Strategic tem OCR ilimitado. Também é possível cadastrar manualmente."
  },
  {
    question: "O que é o OCR Inteligente?",
    answer: "Faça upload do PDF do contrato e o DUO extrai automaticamente os dados do cabeçalho e os itens em segundos. O plano Core inclui 3 extrações por mês; o plano Strategic tem OCR ilimitado."
  },
  {
    question: "O que é o Radar B2G™?",
    answer: "O Radar B2G™ (exclusivo do plano Strategic) identifica ativamente oportunidades de novos contratos públicos com base no perfil da sua empresa, ajudando na prospecção e expansão no mercado B2G. Inclui newsletter semanal com indicadores econômicos e alertas de mercado."
  },
  {
    question: "O DUO me ajuda a entender o impacto da Reforma Tributária nos meus contratos?",
    answer: "Sim, com o Tax Regime Engine (exclusivo do plano Strategic). O sistema detecta automaticamente o regime tributário vigente pela data da licitação, calcula o impacto dos novos impostos (CBS e IBS) em cada contrato e gera um dossiê financeiro documentado com a variação de margem por item — pronto para embasar pedidos de reequilíbrio econômico-financeiro."
  },
  {
    question: "O que é o dossiê de impacto tributário?",
    answer: "É o relatório gerado pelo Tax Regime Engine que documenta, contrato a contrato, como a Reforma Tributária (CBS + IBS, a partir de julho de 2026) afeta sua margem. Inclui base de cálculo, alíquotas vigentes, variação de custo por item e comparativo antes/depois da reforma."
  },
  {
    question: "Os dados da minha empresa ficam separados de outros clientes?",
    answer: "Sim. Cada empresa tem seus dados completamente isolados por Row Level Security (RLS) no banco de dados. Nenhuma empresa acessa dados de outra. A infraestrutura roda no Supabase com criptografia em trânsito e em repouso."
  },
  {
    question: "O que acontece depois do trial de 14 dias?",
    answer: "Você escolhe o plano que melhor atende ao seu negócio e realiza o pagamento para continuar. Se não quiser prosseguir, basta não assinar — sem cobranças automáticas e sem necessidade de cartão no cadastro."
  }
];
