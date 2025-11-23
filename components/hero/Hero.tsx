'use client';

import { contentData } from '@/lib/content-data';

export function Hero() {
  const { hero } = contentData;

  return (
    <header className="min-h-screen flex items-center justify-center fade-in">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight">
          {hero.title}
        </h1>
        <p className="text-xl md:text-2xl text-slate-600 mb-8">
          {hero.subtitle}
        </p>
        <div className="text-lg text-slate-500">
          {hero.date}
        </div>
      </div>
    </header>
  );
}

