import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Lock, Users, Star } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-100 mb-6">
              + Trial gratuito de 14 dias · Sem cartão
            </span>
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-zinc-900 mb-8 leading-[1.1]">
              Gestão inteligente de{' '}
              <span className="text-emerald-600">contratos públicos</span>
            </h1>
            <p className="text-xl text-zinc-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              Do cadastro à renovação: DUO Governance automatiza o controle de contratos, monitora o PNCP e gera inteligência para empresas que fornecem para o governo.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <a
                href="https://app.duogovernance.com.br/cadastro"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 bg-emerald-600 text-white rounded-xl font-bold text-lg hover:bg-emerald-700 transition-all flex items-center justify-center gap-2 shadow-xl shadow-emerald-200"
              >
                Começar trial grátis
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#pricing"
                className="w-full sm:w-auto px-8 py-4 bg-white text-zinc-900 border border-zinc-200 rounded-xl font-bold text-lg hover:bg-zinc-50 transition-all"
              >
                Ver planos
              </a>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-zinc-500">
              <div className="flex items-center gap-2">
                <Lock className="w-4 h-4 text-emerald-600" />
                <span>Dados isolados por empresa (RLS)</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-emerald-600" />
                <span>Focado em fornecedores B2G</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-emerald-600" />
                <span>14 dias Strategic completo</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-0 pointer-events-none opacity-40">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-100 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-50 rounded-full blur-3xl" />
      </div>
    </section>
  );
};
