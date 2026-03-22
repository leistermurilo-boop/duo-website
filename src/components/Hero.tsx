import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ShieldCheck, BarChart3, Zap } from 'lucide-react';

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
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-100 mb-6">
              Inteligência Contratual B2G
            </span>
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-zinc-900 mb-8 leading-[1.1]">
              Seus contratos públicos estão gerando <span className="text-emerald-600">margem</span> ou <span className="text-red-500 underline decoration-2 underline-offset-8">erosão invisível</span>?
            </h1>
            <p className="text-xl text-zinc-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              Monitoramento contínuo. Inteligência contratual. Antecipação estratégica para empresas que operam no mercado público.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://app.duogovernance.com.br/cadastro"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 bg-zinc-900 text-white rounded-xl font-bold text-lg hover:bg-zinc-800 transition-all flex items-center justify-center gap-2 shadow-xl shadow-zinc-200"
              >
                Começar Agora
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#pricing"
                className="w-full sm:w-auto px-8 py-4 bg-white text-zinc-900 border border-zinc-200 rounded-xl font-bold text-lg hover:bg-zinc-50 transition-all"
              >
                Ver Planos
              </a>
            </div>
          </motion.div>
        </div>

        {/* Dashboard Preview Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-20 relative"
        >
          <div className="bg-white rounded-2xl border border-zinc-200 shadow-2xl overflow-hidden p-4 lg:p-8">
            <div className="flex items-center justify-between mb-8 border-b border-zinc-100 pb-4">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-amber-400" />
                <div className="w-3 h-3 rounded-full bg-emerald-400" />
              </div>
              <div className="text-xs font-mono text-zinc-400 uppercase tracking-widest">DUO Margin Monitor™</div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-xl bg-zinc-50 border border-zinc-100">
                <div className="flex items-center gap-3 mb-4">
                  <BarChart3 className="w-5 h-5 text-emerald-600" />
                  <span className="text-sm font-semibold text-zinc-500">Margem Média</span>
                </div>
                <div className="text-3xl font-bold text-zinc-900">24.8%</div>
                <div className="mt-2 text-xs text-emerald-600 font-medium">+2.4% vs mês anterior</div>
              </div>
              <div className="p-6 rounded-xl bg-zinc-50 border border-zinc-100">
                <div className="flex items-center gap-3 mb-4">
                  <ShieldCheck className="w-5 h-5 text-blue-600" />
                  <span className="text-sm font-semibold text-zinc-500">Saúde Contratual</span>
                </div>
                <div className="text-3xl font-bold text-zinc-900">A+</div>
                <div className="mt-2 text-xs text-zinc-400 font-medium">98% de conformidade</div>
              </div>
              <div className="p-6 rounded-xl bg-zinc-50 border border-zinc-100">
                <div className="flex items-center gap-3 mb-4">
                  <Zap className="w-5 h-5 text-amber-500" />
                  <span className="text-sm font-semibold text-zinc-500">Alertas Críticos</span>
                </div>
                <div className="text-3xl font-bold text-zinc-900">02</div>
                <div className="mt-2 text-xs text-amber-600 font-medium">Reajustes pendentes</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-0 pointer-events-none opacity-40">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-100 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-50 rounded-full blur-3xl" />
      </div>
    </section>
  );
};
