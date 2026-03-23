import React, { useState } from 'react';
import { Check, Info } from 'lucide-react';
import { PLANS } from '../constants';

export const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('annual');

  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-zinc-900 mb-6">
            Planos simples e transparentes
          </h2>
          <p className="text-xl text-zinc-600 mb-10">
            14 dias de trial grátis em qualquer plano. Sem cartão de crédito.
          </p>
          <div className="inline-flex items-center p-1 bg-zinc-100 rounded-xl mb-8">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-2 rounded-lg text-sm font-bold transition-all ${billingCycle === 'monthly' ? 'bg-white text-zinc-900 shadow-sm' : 'text-zinc-500 hover:text-zinc-700'}`}
            >
              Mensal
            </button>
            <button
              onClick={() => setBillingCycle('annual')}
              className={`px-6 py-2 rounded-lg text-sm font-bold transition-all flex items-center gap-2 ${billingCycle === 'annual' ? 'bg-white text-zinc-900 shadow-sm' : 'text-zinc-500 hover:text-zinc-700'}`}
            >
              Anual
              <span className="text-[10px] bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full uppercase tracking-wider font-black">2 meses grátis</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`relative p-8 lg:p-12 rounded-3xl border transition-all ${plan.isPopular ? 'border-emerald-500 shadow-2xl shadow-emerald-100 scale-105 z-10' : 'border-zinc-200 hover:border-zinc-300'}`}
            >
              {plan.isPopular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-emerald-500 text-white px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest">
                  Mais Completo
                </div>
              )}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-zinc-900 mb-2">{plan.name}</h3>
                <p className="text-zinc-500 text-sm">{plan.description}</p>
              </div>
              <div className="mb-8">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-black text-zinc-900">
                    R$ {billingCycle === 'monthly'
                      ? plan.monthlyPrice.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
                      : (plan.annualPrice / 12).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </span>
                  <span className="text-zinc-400 font-medium">/mês</span>
                </div>
                {billingCycle === 'annual' && (
                  <div className="text-sm text-emerald-600 font-bold mt-1">
                    Faturado anualmente (R$ {plan.annualPrice.toLocaleString('pt-BR')})
                  </div>
                )}
              </div>
              <ul className="space-y-4 mb-10">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-zinc-600">
                    <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href="https://app.duogovernance.com.br/cadastro"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-4 rounded-xl font-bold text-lg transition-all text-center block ${plan.isPopular ? 'bg-emerald-600 text-white hover:bg-emerald-700 shadow-lg shadow-emerald-200' : 'bg-zinc-900 text-white hover:bg-zinc-800'}`}
              >
                Começar trial grátis
              </a>
              <p className="text-center text-xs text-zinc-400 mt-4 flex items-center justify-center gap-1">
                <Info className="w-3 h-3" />
                Sem cartão de crédito · Cancele quando quiser
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
