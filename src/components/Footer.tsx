import React from 'react';
import { Logo } from './Logo';

export const Footer = () => {
  return (
    <footer className="bg-white border-t border-zinc-100 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <Logo className="h-8 mb-6" />
            <p className="text-zinc-500 max-w-sm leading-relaxed">
              O DUO é a ferramenta estratégica que transforma contratos públicos em ativos monitorados com inteligência contínua.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-zinc-900 mb-6">Plataforma</h4>
            <ul className="space-y-4 text-sm text-zinc-500">
              <li><a href="#problem" className="hover:text-zinc-900 transition-colors">Problemas</a></li>
              <li><a href="#mechanism" className="hover:text-zinc-900 transition-colors">Solução</a></li>
              <li><a href="#maturity" className="hover:text-zinc-900 transition-colors">Maturidade</a></li>
              <li><a href="#pricing" className="hover:text-zinc-900 transition-colors">Planos</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-zinc-900 mb-6">Institucional</h4>
            <ul className="space-y-4 text-sm text-zinc-500">
              <li><a href="https://app.duogovernance.com.br/termos" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-900 transition-colors">Termos de Uso</a></li>
              <li><a href="https://app.duogovernance.com.br/privacidade" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-900 transition-colors">Privacidade</a></li>
              <li><a href="mailto:contato@duogovernance.com.br" className="hover:text-zinc-900 transition-colors">Contato</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-zinc-100 pt-10 flex flex-col md:row items-center justify-between gap-4">
          <p className="text-xs text-zinc-400">
            © {new Date().getFullYear()} DUO Governance. Todos os direitos reservados.
          </p>
          <div className="flex gap-6">
            {/* Social icons could go here */}
          </div>
        </div>
      </div>
    </footer>
  );
};
