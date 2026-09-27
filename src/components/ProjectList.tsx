'use client';

import React from 'react';

interface Project {
  title: string;
  year: string;
  badge: string;
  description: string;
  image: string;
}

export default function ProjectList() {
  const projects: Project[] = [
    {
      title: 'FortPeat 2025',
      year: '2025',
      badge: 'Credenciamento',
      description: 'Gestão operacional do fluxo de acessos e coordenação de credenciamento.',
      image: '/eventos/fortpeat-2025.jpg',
    },
    {
      title: 'EngLot 2025',
      year: '2025',
      badge: 'Operação de Caixa',
      description: 'Supervisão financeira de bar, controle de caixas e sangrias no evento.',
      image: '/eventos/englot-2025.jpg',
    },
    {
      title: 'BOMA SP 2026',
      year: '2026',
      badge: 'Experiência VIP',
      description: 'Operação e logística para o público e coordenação de acessos do setor VIP.',
      image: '/eventos/boma-sp-2026.jpg',
    },
    {
      title: 'Random Play Dance',
      year: '2026',
      badge: 'Produção Executiva',
      description: 'Suporte de palco, atendimento de staff e organização de cronograma da atração.',
      image: '/eventos/random-play-dance.jpg',
    },
  ];

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xs uppercase tracking-widest text-neutral-400 font-semibold">
          Últimos Projetos & Eventos
        </h3>
        <span className="text-[10px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded-full">
          {projects.length} Recentes
        </span>
      </div>

      <div className="space-y-3 overflow-y-auto max-h-[320px] pr-1 custom-scrollbar">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex items-center gap-3 p-3 rounded-2xl bg-neutral-900/40 border border-neutral-800/80 hover:border-neutral-700/80 hover:bg-neutral-800/40 transition-all duration-200 group"
          >
            {/* Foto do Evento */}
            <div className="w-14 h-14 rounded-xl bg-neutral-800 border border-neutral-700/60 overflow-hidden flex-shrink-0 relative group-hover:scale-105 transition-transform">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
              />
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-1 mb-1">
                <h4 className="text-sm font-semibold text-neutral-200 truncate group-hover:text-emerald-400 transition-colors">
                  {project.title}
                </h4>
                <span className="text-[10px] text-neutral-400 font-mono">
                  {project.year}
                </span>
              </div>
              <p className="text-xs text-neutral-400 line-clamp-2 leading-relaxed">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}