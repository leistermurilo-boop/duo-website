import React from 'react';
import { motion } from 'motion/react';
import { TrendingDown, CheckCircle, Calculator } from 'lucide-react';

const BENEFITS = [
  'Calcula o impacto da reforma em cada contrato automaticamente',
  'Detecta o regime tributário vigente pela data da licitação',
  'Gera dossiê financeiro com variação de margem por item',
  'Documenta base de cálculo e datas para análise financeira',
];

export const TaxRegimeEngine = () => {
  return (
    <section className="py-24 bg-zinc-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-4 py-2 rounded-full text-sm font-bold mb-6">
            <Calculator className="w-4 h-4" />
            Tax Regime Engine — Exclusivo Strategic
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold mb-6 leading-tight">
            A Reforma Tributária muda o custo<br />
            dos seus contratos.{' '}
            <span className="text-emerald-400">Você já sabe quanto?</span>
          </h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            A partir de julho de 2026, novos impostos incidem sobre seus custos. O DUO calcula
            automaticamente o impacto contrato por contrato, considerando o seu regime tributário.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Simulation Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-zinc-800 rounded-3xl p-8 border border-zinc-700"
          >
            <p className="text-xs text-zinc-500 uppercase tracking-widest font-bold mb-6">
              Simulação · valores de exemplo
            </p>
            <p className="text-sm text-zinc-400 mb-8">
              Contrato R$ 2.839/unid · Lucro Presumido · a partir de julho de 2026
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="bg-zinc-700/50 rounded-2xl p-6">
                <p className="text-xs text-zinc-500 mb-2 uppercase tracking-wider">
                  Margem antes da reforma
                </p>
                <p className="text-4xl font-black text-emerald-400">19,1%</p>
              </div>
              <div className="bg-red-500/10 border border-red-500/20 rounded-2xl p-6">
                <p className="text-xs text-zinc-500 mb-2 uppercase tracking-wider">
                  Margem após a reforma
                </p>
                <p className="text-4xl font-black text-red-400">1,5%</p>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-red-500/10 border border-red-500/20 rounded-xl px-5 py-4">
              <TrendingDown className="w-5 h-5 text-red-400 flex-shrink-0" />
              <p className="text-sm font-bold text-red-300">
                Erosão de −17,6 p.p. sem ajuste contratual
              </p>
            </div>
          </motion.div>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-2xl font-bold mb-8 text-white">
              O DUO gera os dados.<br />
              <span className="text-emerald-400">Você decide o que fazer com eles.</span>
            </h3>

            <ul className="space-y-5 mb-10">
              {BENEFITS.map((benefit, i) => (
                <li key={i} className="flex items-start gap-4">
                  <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span className="text-zinc-300 text-sm leading-relaxed">{benefit}</span>
                </li>
              ))}
            </ul>

            <a
              href="https://app.duogovernance.com.br/cadastro"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white font-bold px-8 py-4 rounded-xl transition-colors text-sm"
            >
              Calcular impacto no meu contrato →
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
