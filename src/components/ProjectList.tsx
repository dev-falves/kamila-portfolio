'use client';

import React from 'react';

interface Project {
  id: number;
  title: string;
  year: string;
  description: string;
  image: string;
}

// Ajuste do caminho base para suportar o subdirectório do GitHub Pages
const basePath = process.env.NODE_ENV === 'production' ? '/kamila-portfolio' : '';

const projects: Project[] = [
  {
    id: 1,
    title: 'FortPeat 2025',
    year: '2025',
    description: 'Gestão operacional do fluxo de acessos e coordenação de credenciamento.',
    image: '/eventos/fortpeat.jpg',
  },
  {
    id: 2,
    title: 'EngLot 2025',
    year: '2025',
    description: 'Supervisão financeira de bar, controle de caixas e atendimento.',
    image: '/eventos/englot.jpg',
  },
  {
    id: 3,
    title: 'BOMA SP 2026',
    year: '2026',
    description: 'Operação e logística para o público e coordenação de credenciamento.',
    image: '/eventos/boma.jpg',
  },
  {
    id: 4,
    title: 'SPFW N58',
    year: '2024',
    description: 'Apoio na recepção VIP, organização de filas e experiência do convidado.',
    image: '/eventos/spfw.jpg',
  },
];

export default function ProjectList() {
  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xs uppercase tracking-widest text-neutral-400 font-semibold">
          Últimos Projetos & Eventos
        </h3>
        <span className="text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded-full">
          {projects.length} Recentes
        </span>
      </div>

      <div className="space-y-3 max-h-[320px] overflow-y-auto pr-1 custom-scrollbar">
        {projects.map((project) => (
          <div
            key={project.id}
            className="flex items-start gap-3 p-3 rounded-2xl bg-neutral-800/40 border border-neutral-800 hover:border-neutral-700/80 transition-all group"
          >
            <div className="w-14 h-14 rounded-xl overflow-hidden bg-neutral-800 flex-shrink-0 border border-neutral-700/50 relative">
              <img
                src={`${basePath}${project.image}`}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-1">
                <h4 className="text-xs font-bold text-white group-hover:text-emerald-400 transition-colors truncate">
                  {project.title}
                </h4>
                <span className="text-[10px] font-mono text-neutral-500">
                  {project.year}
                </span>
              </div>
              <p className="text-[11px] text-neutral-400 line-clamp-2 leading-relaxed">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
