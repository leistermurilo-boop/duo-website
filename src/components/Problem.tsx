import React from 'react';
import { AlertCircle, TrendingDown, Clock, Globe } from 'lucide-react';

const problems = [
  {
    icon: BarChart3,
    title: "Falta de monitoramento de margem",
    description: "Decisões baseadas em intuição, sem visibilidade real da lucratividade item a item em contratos públicos complexos."
  },
  {
    icon: TrendingDown,
    title: "Erosão não identificada",
    description: "Custos que sobem silenciosamente enquanto o preço do contrato permanece estático, destruindo sua margem operacional."
  },
  {
    icon: Clock,
    title: "Reajustes perdidos",
    description: "Prazos de apostilamento e reequilíbrio econômico-financeiro ignorados por falta de alertas proativos."
  },
  {
    icon: Globe,
    title: "Decisões sem contexto",
    description: "Ignorar variações macroeconômicas (IPCA, IGPM, câmbio) que impactam diretamente a viabilidade do contrato."
  }
];

import { BarChart3 } from 'lucide-react';

export const Problem = () => {
  return (
    <section id="problem" className="py-24 bg-zinc-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            O custo da invisibilidade nos contratos B2G é fatal.
          </h2>
          <p className="text-xl text-zinc-400">
            Empresas perdem milhões anualmente por não monitorarem a saúde financeira de seus ativos públicos com o rigor necessário.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {problems.map((p, i) => (
            <div key={i} className="p-8 rounded-2xl bg-zinc-800/50 border border-zinc-700/50 hover:border-emerald-500/30 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-zinc-700 flex items-center justify-center mb-6 group-hover:bg-emerald-500/10 transition-colors">
                <p.icon className="w-6 h-6 text-emerald-500" />
              </div>
              <h3 className="text-xl font-bold mb-4">{p.title}</h3>
              <p className="text-zinc-400 leading-relaxed">{p.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
