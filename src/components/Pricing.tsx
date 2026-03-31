import React, { useState } from 'react';
import { Check, X, Star } from 'lucide-react';
import { PLANS } from '../constants';

type Feature = string | { name: string; description?: string };

const getFeatureName = (f: Feature): string =>
  typeof f === 'string' ? f : f.name;

const getFeatureDesc = (f: Feature): string | undefined =>
  typeof f === 'object' ? f.description : undefined;

export const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');

  const getPrice = (plan: typeof PLANS[0]) => {
    if (billingCycle === 'monthly') return plan.monthlyPrice;
    return (plan as any).annualMonthlyPrice ?? Math.round(plan.annualPrice / 12);
  };

  return (
    <section id="planos" className="py-24 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-zinc-900 mb-6">
            Planos simples e transparentes
          </h2>
          <p className="text-xl text-zinc-600 mb-10">
            14 dias de trial grátis em qualquer plano. Sem cartão de crédito.
          </p>

          <div className="inline-flex items-center p-1 bg-zinc-200 rounded-xl mb-8">
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
              <span className="text-[10px] bg-emerald-500 text-white px-2 py-0.5 rounded-full uppercase tracking-wider font-black">
                -17%
              </span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto items-start">
          {PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`relative p-8 lg:p-10 rounded-3xl border transition-all ${
                plan.isPopular
                  ? 'bg-zinc-900 border-zinc-700 shadow-2xl'
                  : 'bg-white border-zinc-200 hover:border-zinc-300'
              }`}
            >
              {plan.isPopular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-amber-400 text-zinc-900 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest flex items-center gap-1">
                  <Star className="w-3 h-3" style={{ fill: 'currentColor' }} /> Mais popular
                </div>
              )}

              <div className="mb-6">
                <p className={`text-xs font-black uppercase tracking-widest mb-3 ${plan.isPopular ? 'text-emerald-400' : 'text-emerald-600'}`}>
                  {plan.name}
                </p>
                <div className="flex items-baseline gap-1">
                  <span className={`text-4xl font-black ${plan.isPopular ? 'text-white' : 'text-zinc-900'}`}>
                    R$ {getPrice(plan).toLocaleString('pt-BR')}
                  </span>
                  <span className={`font-medium ${plan.isPopular ? 'text-zinc-400' : 'text-zinc-400'}`}>/mês</span>
                </div>
                {billingCycle === 'annual' && (
                  <p className={`text-sm font-medium mt-1 ${plan.isPopular ? 'text-zinc-400' : 'text-zinc-500'}`}>
                    R$ {plan.annualPrice.toLocaleString('pt-BR')}/ano · 17% de desconto
                  </p>
                )}
                <p className={`text-sm mt-2 ${plan.isPopular ? 'text-zinc-400' : 'text-zinc-500'}`}>
                  {plan.description}
                </p>
              </div>

              <a
                href="https://app.duogovernance.com.br/cadastro"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-3.5 rounded-xl font-bold text-base transition-all text-center block mb-8 ${
                  plan.isPopular
                    ? 'bg-emerald-500 text-white hover:bg-emerald-400'
                    : 'bg-white text-zinc-900 border border-zinc-300 hover:border-zinc-400 hover:bg-zinc-50'
                }`}
              >
                Começar trial grátis →
              </a>

              <ul className="space-y-3">
                {(plan.features as Feature[]).map((feature, i) => {
                  const name = getFeatureName(feature);
                  const desc = getFeatureDesc(feature);
                  return (
                    <li key={i} className="flex items-start gap-3 text-sm">
                      <Check className={`w-4 h-4 flex-shrink-0 mt-0.5 ${plan.isPopular ? 'text-emerald-400' : 'text-emerald-500'}`} />
                      <div>
                        <span className={plan.isPopular ? 'text-zinc-200' : 'text-zinc-700'}>{name}</span>
                        {desc && (
                          <p className={`text-xs mt-0.5 leading-relaxed ${plan.isPopular ? 'text-zinc-500' : 'text-zinc-400'}`}>
                            {desc}
                          </p>
                        )}
                      </div>
                    </li>
                  );
                })}
                {(plan.notIncluded ?? []).map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <X className="w-4 h-4 text-zinc-400 flex-shrink-0 mt-0.5" />
                    <span className="text-zinc-400 line-through">
                      {typeof feature === 'string' ? feature : (feature as any).name}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-zinc-500 mt-10">
          💡 Uma erosão de 5% de margem num contrato de R$300K = R$15.000 perdidos. O DUO identifica isso antes.
        </p>
      </div>
    </section>
  );
};
