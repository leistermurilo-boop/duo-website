import React from 'react';
import { Logo } from './Logo';

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-zinc-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <Logo className="h-10" />
          </div>
          <div className="hidden md:flex space-x-8 items-center">
            <a href="#funcionalidades" className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors">Funcionalidades</a>
            <a href="#pricing" className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors">Planos</a>
            <a
              href="https://app.duogovernance.com.br/entrar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors"
            >
              Entrar
            </a>
            <a
              href="https://app.duogovernance.com.br/cadastro"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-zinc-900 text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-zinc-800 transition-all shadow-sm flex items-center gap-1.5"
            >
              Começar grátis
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
