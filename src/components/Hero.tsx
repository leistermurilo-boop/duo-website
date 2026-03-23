import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Lock, Users, Star, Zap } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* Glow effects */}
      <div className="absolute right-1/4 top-1/4 h-64 w-64 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />
      <div className="absolute left-1/4 bottom-1/4 h-48 w-48 rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-sm font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 mb-6">
              <Zap className="w-3.5 h-3.5" />
              + Trial gratuito de 14 dias · Sem cartão
            </span>

            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-white mb-8 leading-[1.1]">
              Gestão inteligente de{' '}
              <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
                contratos públicos
              </span>
            </h1>

            <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
              Do cadastro à renovação: DUO Governance automatiza o controle de
              contratos, monitora o PNCP e gera inteligência para empresas que
              fornecem para o governo.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <a
                href="https://app.duogovernance.com.br/cadastro"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-white rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2 shadow-xl shadow-emerald-900/30"
              >
                Começar trial grátis <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#pricing"
                className="w-full sm:w-auto px-8 py-4 bg-transparent text-white border border-white/20 rounded-xl font-bold text-lg hover:bg-white/10 transition-all"
              >
                Ver planos
              </a>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <Lock className="w-4 h-4 text-emerald-500" />
                <span>Dados isolados por empresa (RLS)</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-emerald-500" />
                <span>Focado em fornecedores B2G</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-emerald-500" />
                <span>14 dias Strategic completo</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
