'use client';

import dynamic from 'next/dynamic';
import { Mail, MessageSquare, MapPin, Globe, Sparkles, CheckCircle2 } from 'lucide-react';
import SocialHexagon from '@/components/SocialHexagon';
import ProjectList from '@/components/ProjectList';

// Carregamento dinâmico do Three.js sem SSR para evitar erros de renderização no navegador
const DigitalPass3D = dynamic(() => import('@/components/DigitalPass3D'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[400px] md:h-[500px] flex items-center justify-center text-neutral-500 font-mono text-xs">
      Carregando experiência 3D...
    </div>
  ),
});

export default function Home() {
  const skills = [
    'Adaptabilidade',
    'Operação de Caixa',
    'Credenciamento',
    'Inglês',
    'Espanhol',
    'Coreano (básico)',
  ];

  return (
    <main className="min-h-screen bg-[#08090c] text-neutral-100 p-4 sm:p-6 md:p-10 flex items-center justify-center relative overflow-hidden">
      {/* Luzes de Fundo / Gradientes Difusos */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-emerald-500/10 via-cyan-500/10 to-blue-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* Grid Bento Box Responsivo */}
      <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-5">
        
        {/* ================= COLUNA ESQUERDA (APRESENTAÇÃO & CONTATO) ================= */}
        <div className="lg:col-span-4 flex flex-col gap-4">
          
          {/* Cartão 1: Apresentação */}
          <div className="bg-neutral-900/60 border border-neutral-800/80 rounded-3xl p-6 backdrop-blur-xl flex flex-col justify-between shadow-xl relative overflow-hidden group hover:border-neutral-700/80 transition-all">
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-4">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Disponível para Projetos
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-3">
                Olá! Sou <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Kamila Araújo</span>
              </h1>
              <p className="text-sm text-neutral-300 leading-relaxed font-normal">
                Especialista em Produção e Operação de Eventos. Transformo o operacional na melhor experiência para o seu público e organização.
              </p>
            </div>
          </div>

          {/* Cartão 3: Skills & Idiomas em Tags */}
          <div className="bg-neutral-900/60 border border-neutral-800/80 rounded-3xl p-6 backdrop-blur-xl shadow-xl hover:border-neutral-700/80 transition-all">
            <h3 className="text-xs uppercase tracking-widest text-neutral-400 font-semibold mb-3 flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              Habilidades & Idiomas
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-3.5 py-1.5 rounded-full text-xs font-medium bg-neutral-800/90 border border-neutral-700/60 text-neutral-200 hover:border-emerald-500/50 hover:text-emerald-300 transition-all cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Cartão 5 & 2: Localização + Botões de Contato */}
          <div className="bg-neutral-900/60 border border-neutral-800/80 rounded-3xl p-6 backdrop-blur-xl shadow-xl flex flex-col justify-between gap-4 hover:border-neutral-700/80 transition-all">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-neutral-800 border border-neutral-700 flex items-center justify-center text-emerald-400 flex-shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white">Localização</h4>
                <p className="text-xs text-neutral-400">Baseada em São Paulo/SP. Disponível para viagens.</p>
              </div>
            </div>

            {/* Botões de Ação Chamativos */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <a
                href="https://wa.me/5566984243081"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-neutral-950 font-bold text-xs transition-all shadow-lg shadow-emerald-500/20 active:scale-95"
              >
                <MessageSquare className="w-4 h-4" />
                WhatsApp
              </a>
              <a
                href="mailto:Kamilaaraujo047@gmail.com"
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-2xl bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 text-white font-semibold text-xs transition-all active:scale-95"
              >
                <Mail className="w-4 h-4 text-emerald-400" />
                E-mail
              </a>
            </div>
          </div>

        </div>

        {/* ================= COLUNA CENTRAL (HERO 3D CRACHÁ DIGITAL) ================= */}
        <div className="lg:col-span-5 flex flex-col">
          <div className="bg-gradient-to-b from-neutral-900/80 via-neutral-900/50 to-neutral-950/80 border border-neutral-800/80 rounded-3xl p-4 md:p-6 backdrop-blur-xl shadow-2xl flex flex-col items-center justify-center h-full min-h-[460px] relative overflow-hidden group hover:border-neutral-700/80 transition-all">
            
            {/* Ambient Background Blur Inside Panel */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-500/10 via-transparent to-transparent pointer-events-none" />

            {/* Título do Painel Hero */}
            <div className="absolute top-6 left-6 z-10">
              <span className="text-[10px] font-mono tracking-wider text-emerald-400 uppercase bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-full">
                Digital Pass 3D
              </span>
            </div>

            {/* Componente 3D Canvas */}
            <DigitalPass3D />
          </div>
        </div>

        {/* ================= COLUNA DIREITA (REDES & PROJETOS) ================= */}
        <div className="lg:col-span-3 flex flex-col gap-4">
          
          {/* Cartão Topo: Redes Sociais Hexagonais */}
          <div className="bg-neutral-900/60 border border-neutral-800/80 rounded-3xl p-5 backdrop-blur-xl shadow-xl min-h-[190px] hover:border-neutral-700/80 transition-all">
            <SocialHexagon />
          </div>

          {/* Cartão Base: Últimos Projetos (Scrollable List) */}
          <div className="bg-neutral-900/60 border border-neutral-800/80 rounded-3xl p-5 backdrop-blur-xl shadow-xl flex-1 hover:border-neutral-700/80 transition-all">
            <ProjectList />
          </div>

        </div>

      </div>
    </main>
  );
}
