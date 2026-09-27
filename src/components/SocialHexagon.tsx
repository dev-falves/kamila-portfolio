'use client';

import React from 'react';
import { Mail, MessageSquare, Globe, Sparkles } from 'lucide-react';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function SocialHexagon() {
  const socials = [
    { name: 'WhatsApp', href: 'https://wa.me/5566984243081', icon: MessageSquare },
    { name: 'Instagram', href: 'https://www.instagram.com/kamilaaraujo047?stkn=MXVodjRxMnV3YWoxdg%3D%3D', icon: FaInstagram },
    { name: 'E-mail', href: 'mailto:Kamilaaraujo047@gmail.com', icon: Mail },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/kamilaaraujo047/', icon: FaLinkedin },
  ];

  return (
    <div className="flex flex-col h-full justify-between">
      <h3 className="text-xs uppercase tracking-widest text-neutral-400 font-semibold mb-3">
        Conectar & Redes
      </h3>
      <div className="grid grid-cols-3 gap-3 my-auto py-2 place-items-center">
        {socials.map((item, index) => {
          const Icon = item.icon;
          return (
            <a
              key={index}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              title={item.name}
              className="w-14 h-14 bg-neutral-800/60 hover:bg-neutral-700/80 border border-neutral-700/50 hover:border-emerald-500/50 flex items-center justify-center text-neutral-300 hover:text-emerald-400 transition-all duration-300 hover:scale-110 shadow-lg group"
              style={{
                clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
              }}
            >
              <Icon className="w-5 h-5 transition-transform group-hover:rotate-12" />
            </a>
          );
        })}
      </div>
    </div>
  );
}