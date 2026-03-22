import React from 'react';
import { ArrowRight } from 'lucide-react';

export const FinalCTA = () => {
  return (
    <section className="py-24 bg-emerald-600 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-[3rem] p-12 lg:p-20 text-center">
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-8">
            Transforme contratos em ativos estratégicos.
          </h2>
          <p className="text-xl text-emerald-50 mb-12 max-w-2xl mx-auto">
            Junte-se às empresas que já utilizam o DUO para proteger suas margens e antecipar oportunidades no mercado B2G.
          </p>
          <a
            href="https://app.duogovernance.com.br/cadastro"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-5 bg-white text-emerald-600 rounded-2xl font-black text-xl hover:bg-emerald-50 transition-all shadow-2xl shadow-emerald-900/20"
          >
            Assinar Agora
            <ArrowRight className="w-6 h-6" />
          </a>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-emerald-400/20 rounded-full blur-3xl" />
      </div>
    </section>
  );
};
