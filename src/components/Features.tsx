import React from 'react';
import { motion } from 'motion/react';
import { FileText, Eye, FileSearch, LayoutDashboard, Bell, TrendingUp, Calculator } from 'lucide-react';

const FEATURES = [
  {
    icon: FileText,
    title: 'Gestão de Contratos',
    description: 'Cadastro completo com vencimentos, renovações e histórico de alterações.',
  },
  {
    icon: Eye,
    title: 'Visão 360° do Contrato',
    description: 'Acesse em um só lugar: itens, autorizações de fornecimento, entregas, reajustes, aditivos e dossiê tributário.',
  },
  {
    icon: FileSearch,
    title: 'OCR Inteligente',
    description: 'Extrai dados de contratos em PDF com IA — cabeçalho e itens em segundos, sem digitação manual.',
  },
  {
    icon: LayoutDashboard,
    title: 'Dashboard Analítico',
    description: 'Visão consolidada de margens, vencimentos e desempenho por órgão público.',
  },
  {
    icon: Bell,
    title: 'Alertas Proativos',
    description: 'Notificações de vencimento, erosão de margem e contratos pendentes de revisão.',
  },
  {
    icon: TrendingUp,
    title: 'Reajuste Contratual',
    description: 'Dossiê completo com variação IPCA/IGP-M via BACEN, histórico de NFs e exportação em PDF.',
  },
  {
    icon: Calculator,
    title: 'Tax Regime Engine',
    description: 'Calcula automaticamente o impacto da Reforma Tributária em cada contrato — detecta o regime tributário vigente pela data da licitação e gera dossiê financeiro com variação de margem por item. Pronto para julho de 2026.',
    badge: 'Exclusivo Strategic',
  },
];

export const Features = () => {
  return (
    <section id="funcionalidades" className="py-24 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-zinc-900 mb-4">
            Tudo que você precisa para gerir contratos públicos
          </h2>
          <p className="text-xl text-zinc-500">
            Uma plataforma completa para fornecedores do setor público.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURES.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className={`relative bg-white rounded-2xl border p-8 hover:shadow-lg transition-all ${
                feature.badge
                  ? 'border-emerald-300 hover:border-emerald-400'
                  : 'border-zinc-200 hover:border-emerald-200'
              }`}
            >
              {feature.badge && (
                <span className="absolute top-4 right-4 text-[10px] font-black uppercase tracking-wider bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full">
                  {feature.badge}
                </span>
              )}
              <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center mb-5">
                <feature.icon className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-lg font-bold text-zinc-900 mb-2">{feature.title}</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
