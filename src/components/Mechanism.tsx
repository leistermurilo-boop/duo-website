import React from 'react';
import { motion } from 'motion/react';
import { Target, Radar, Activity } from 'lucide-react';

export const Mechanism = () => {
  return (
    <section id="mechanism" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl lg:text-5xl font-bold text-zinc-900 mb-6">
            Inteligência que antecipa o mercado.
          </h2>
          <p className="text-xl text-zinc-600 max-w-2xl mx-auto">
            Três pilares fundamentais para transformar sua controladoria B2G em uma unidade de elite.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Mechanism 1 */}
          <div className="relative p-8 rounded-3xl bg-zinc-50 border border-zinc-100 overflow-hidden">
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-emerald-600 flex items-center justify-center mb-8 shadow-lg shadow-emerald-200">
                <Activity className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-zinc-900 mb-4">DUO Contract Margin Monitor™</h3>
              <p className="text-zinc-600 mb-8">
                Visão granular da margem de contribuição por item de contrato, identificando erosões em tempo real.
              </p>
              <div className="bg-white p-4 rounded-xl border border-zinc-200 shadow-sm">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider">Item 042 - Software Lic.</span>
                  <span className="text-xs font-bold text-red-500">-12% Δ Margem</span>
                </div>
                <div className="w-full bg-zinc-100 h-2 rounded-full overflow-hidden">
                  <div className="bg-red-500 h-full w-[30%]" />
                </div>
              </div>
            </div>
          </div>

          {/* Mechanism 2 */}
          <div className="relative p-8 rounded-3xl bg-zinc-50 border border-zinc-100 overflow-hidden">
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-blue-600 flex items-center justify-center mb-8 shadow-lg shadow-blue-200">
                <Target className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-zinc-900 mb-4">Elegibilidade Inteligente™</h3>
              <p className="text-zinc-600 mb-8">
                Cálculo automático de janelas de reajuste e reequilíbrio, garantindo que nenhum centavo seja deixado na mesa.
              </p>
              <div className="bg-white p-4 rounded-xl border border-zinc-200 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-sm font-semibold text-zinc-700">Elegível para Reajuste (IPCA)</span>
                </div>
                <div className="mt-2 text-xs text-zinc-400">Impacto projetado: +R$ 142.500,00/ano</div>
              </div>
            </div>
          </div>

          {/* Mechanism 3 */}
          <div className="relative p-8 rounded-3xl bg-zinc-50 border border-zinc-100 overflow-hidden">
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-amber-500 flex items-center justify-center mb-8 shadow-lg shadow-amber-100">
                <Radar className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-zinc-900 mb-4">Radar B2G™</h3>
              <p className="text-zinc-600 mb-8">
                Monitoramento proativo de editais e movimentações no PNCP cruzadas com sua capacidade operacional.
              </p>
              <div className="bg-white p-4 rounded-xl border border-zinc-200 shadow-sm">
                <div className="text-xs font-bold text-zinc-400 mb-2 uppercase tracking-wider">Oportunidade Detectada</div>
                <div className="text-sm font-bold text-zinc-900">Pregão Eletrônico 04/2024</div>
                <div className="text-xs text-emerald-600 mt-1">94% Match Estratégico</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
