'use client';

import { contentData } from '@/lib/content-data';

export function OverviewSlide() {
  const { overview } = contentData.sections;

  return (
    <section className="min-h-screen pt-24 pb-16 px-4 overflow-hidden relative">
      <div className="container mx-auto max-w-7xl">
        {/* Aggressive Title */}
        <div className="mb-16">
          <h2 className="text-5xl md:text-7xl font-black tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-foreground via-foreground/80 to-foreground/60">
            {overview.title}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl italic">
            {overview.subtitle}
          </p>
        </div>

        {/* Timeline as diagonal stream */}
        <div className="mb-20 relative">
          <h3 className="text-sm uppercase tracking-[0.3em] text-muted-foreground/60 mb-8 font-medium">
            {overview.evolution.heading}
          </h3>
          <div className="space-y-0 relative">
            {overview.evolution.milestones.map((milestone, index) => (
              <div 
                key={index}
                className="group relative slide-enter flex items-baseline gap-4 py-3 hover:translate-x-2 transition-transform duration-300"
                style={{ 
                  animationDelay: `${index * 0.08}s`,
                  paddingLeft: `${index * 12}em`
                }}
              >
                <span className="text-3xl highlighted-color px-5 group-hover:scale-125 transition-transform">
                  {milestone.icon}
                </span>
                <div className="flex-1 border-l-2 border-border pl-4 group-hover:border-primary transition-colors">
                  <div className="flex items-baseline gap-3 flex-wrap">
                    <span className="font-bold text-xl">{milestone.company}</span>
                    <span className="text-xs px-2 py-0.5 bg-muted rounded font-mono">{milestone.year}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">{milestone.achievement}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Chaotic grid of current state */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Models explosion */}
          <div className="lg:col-span-2 border-2 border-dashed border-border p-6 hover:border-primary/50 transition-colors">
            <div className="flex items-baseline gap-3 mb-4">
              <div>
                <h4 className="text-sm uppercase tracking-wider text-muted-foreground highlighted">
                  {overview.currentState.modelsCount.title}
                </h4>
                <p className="text-6xl font-black tracking-tighter">
                  {overview.currentState.modelsCount.count}
                </p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              {overview.currentState.modelsCount.description}
            </p>
            {/* Models as overlapping tags */}
            <div className="flex flex-wrap gap-2">
              {overview.currentState.modelsCount.examples.map((model, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 text-xs font-mono bg-accent hover:bg-primary hover:text-primary-foreground transition-colors cursor-default border border-border"
                >
                  {model}
                </span>
              ))}
            </div>
          </div>

          {/* Features as stacked list */}
          <div className="bg-accent/30 p-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 text-9xl opacity-5 select-none">🚀</div>
            <h4 className="text-xs uppercase tracking-wider text-muted-foreground mb-4 relative z-10">
              {overview.currentState.innovation.title}
            </h4>
            <div className="space-y-2 relative z-10">
              {overview.currentState.innovation.features.map((feature, index) => (
                <div 
                  key={index}
                  className="text-sm py-1 hover:translate-x-1 transition-transform"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <span className="text-primary mr-2">▸</span>
                  <span className="font-medium">{feature.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Challenge section - asymmetric layout */}
        <div className="bg-gradient-to-br from-background via-accent/20 to-background border-t-4 border-primary/30 p-8 relative mb-16">
          <div className="absolute -top-6 left-8 text-6xl">🎯</div>
          <div className="ml-20">
            <h3 className="text-3xl font-bold mb-3">{overview.challenge.heading}</h3>
            <p className="text-muted-foreground mb-6 max-w-3xl leading-relaxed">
              {overview.challenge.description}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
              {overview.challenge.points.map((point, index) => (
                <div 
                  key={index}
                  className="flex gap-3 items-start group hover:translate-y-[-2px] transition-transform"
                >
                  <span className="text-3xl group-hover:scale-110 transition-transform">
                    {point.icon}
                  </span>
                  <div className="flex-1">
                    <h5 className="font-semibold text-sm mb-0.5">{point.title}</h5>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Lecture Structure - brutal list */}
        <div className="relative">
          <div className="flex items-baseline gap-4 mb-6">
            <span className="text-5xl">📚</span>
            <div>
              <h3 className="text-2xl font-bold">Структура лекции</h3>
              <p className="text-sm text-muted-foreground italic">обзорная экскурсия по верхам</p>
            </div>
          </div>
          
          <div className="ml-16 space-y-3 border-l-4 border-primary/20 pl-6">
            {overview.lecture.topics.map((topic, index) => (
              <div 
                key={index}
                className="group hover:translate-x-1 transition-transform slide-enter"
                style={{ animationDelay: `${index * 0.06}s` }}
              >
                <div className="flex items-start gap-3">
                  <span className="text-muted-foreground/40 font-mono text-sm mt-0.5 group-hover:text-primary transition-colors">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <p className="text-base leading-relaxed group-hover:text-foreground transition-colors">
                    {topic}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Resources - minimal footer */}
        <div className="mt-12 mb-10 pt-8 border-t border-border/50">
          <p className="text-xs tracking-widest text-muted-foreground/60 mb-3">
            <b className="uppercase">{overview.resources.heading}</b>
          </p>

          
          <div className="inline-flex flex-wrap gap-2 lowercase">
            {overview.resources.links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-mono hover:text-primary transition-colors underline decoration-dotted underline-offset-4"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

