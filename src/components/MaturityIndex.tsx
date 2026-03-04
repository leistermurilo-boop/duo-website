import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

const steps = [
  { level: 1, title: "Contrato Registrado", description: "Dados básicos centralizados." },
  { level: 2, title: "Contrato Monitorado", description: "Acompanhamento de prazos e vigências." },
  { level: 3, title: "Contrato Protegido", description: "Alertas de margem e erosão ativos." },
  { level: 4, title: "Contrato Contextualizado", description: "Cruzamento com dados macroeconômicos." },
  { level: 5, title: "Contrato Estratégico", description: "Antecipação total e Radar B2G™ ativo." }
];

export const MaturityIndex = () => {
  return (
    <section id="maturity" className="py-24 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl lg:text-5xl font-bold text-zinc-900 mb-8">
              Índice de Maturidade DUO™
            </h2>
            <p className="text-xl text-zinc-600 mb-10">
              Não é apenas sobre ter contratos, é sobre como você os governa. Nossa metodologia guia sua empresa do registro básico à excelência estratégica.
            </p>
            
            <div className="space-y-6">
              {steps.map((step, i) => (
                <div key={i} className="flex gap-4">
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${i < 3 ? 'bg-emerald-600 text-white' : 'bg-zinc-200 text-zinc-500'}`}>
                    {step.level}
                  </div>
                  <div>
                    <h4 className={`font-bold ${i < 3 ? 'text-zinc-900' : 'text-zinc-400'}`}>{step.title}</h4>
                    <p className="text-sm text-zinc-500">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-8 lg:p-12 rounded-3xl border border-zinc-200 shadow-xl">
            <div className="text-center mb-8">
              <div className="text-sm font-bold text-emerald-600 uppercase tracking-widest mb-2">Seu Progresso Atual</div>
              <div className="text-6xl font-bold text-zinc-900">Nível 3</div>
              <div className="text-zinc-500 mt-2">Contrato Protegido</div>
            </div>

            <div className="relative h-4 bg-zinc-100 rounded-full overflow-hidden mb-8">
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: '60%' }}
                transition={{ duration: 1, ease: 'easeOut' }}
                className="absolute top-0 left-0 h-full bg-emerald-500 rounded-full"
              />
            </div>

            <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-100">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5" />
                <div>
                  <h5 className="font-bold text-emerald-900">Próximo Passo: Nível 4</h5>
                  <p className="text-sm text-emerald-700 mt-1">
                    Para atingir o nível 4, você precisa do plano <strong>Strategic</strong> para habilitar o cruzamento macroeconômico automático.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
