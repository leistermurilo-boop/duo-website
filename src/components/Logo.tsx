import React from 'react';

export const Logo = ({ className = "h-12 w-auto" }: { className?: string }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <svg viewBox="0 0 100 100" className="h-full w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Torre Esquerda - Azul Petróleo */}
        <path 
          d="M22 35 L48 25 L48 85 L22 75 Z" 
          fill="#1E293B" 
        />
        {/* Torre Direita - Verde Esmeralda */}
        <path 
          d="M52 15 L78 5 L78 75 L52 85 Z" 
          fill="#10B981" 
        />
      </svg>
      <span className="font-black text-xl tracking-tighter text-zinc-900">DUO <span className="text-zinc-400 font-light">Governance</span></span>
    </div>
  );
};
