'use client';

import { contentData } from '@/lib/content-data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Progress } from '@/components/ui/progress';
import Image from 'next/image';

export function EngineeringSlide() {
  const { engineering, models } = contentData.sections;

  return (
    <section className="min-h-screen pt-24 pb-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          {engineering.title}
        </h2>

        {/* Context Engineering */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle>{engineering.contextEngineering.heading}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {engineering.contextEngineering.contextSizes.map((size, index) => (
                <Card key={index} className="border-2">
                  <CardHeader>
                    <CardTitle className="text-lg">{size.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Badge className="mb-3" variant="outline">{size.range}</Badge>
                    <p className="text-sm text-muted-foreground">{size.models}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Context Strategies */}
        <Card className="mb-12" id="context-strats">
          <CardHeader>
            <CardTitle>{engineering.contextStrategies.heading}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {engineering.contextStrategies.items.map((strategy, index) => (
                <Card key={index} className="border-2">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <span className="text-2xl">{strategy.icon}</span>
                      {strategy.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 mb-4">
                      {strategy.details.map((detail, idx) => (
                        <div key={idx} className="text-sm">
                          <span className="font-medium">{detail.label}:</span>{' '}
                          <span className="text-muted-foreground">{detail.value}</span>
                        </div>
                      ))}
                    </div>
                    <div className="bg-accent/50 rounded p-3">
                      <span className="text-sm font-semibold text-primary">
                        {strategy.benefit}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
              <div className="w-full mt-12 justify-items-center">
                  <Image src="context.png" className="rounded-2xl w-3/6" width={100} height={100} alt={''} />
              </div>
          </CardContent>
        </Card>

        {/* Prompt Engineering */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle>{engineering.promptEngineering.heading}</CardTitle>
            <p className="text-sm text-muted-foreground mt-2">
              📚 дайджест научно-практических статей по промпт-инжинирингу{' '}
              <a href="https://novasapiens.ru/prompt" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline highlighted">
                novasapiens.ru/prompt
              </a>
            </p>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              {engineering.promptEngineering.techniques.map((technique, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-lg font-semibold">
                    {technique.title}
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-3 pt-2">
                      {technique.description.map((desc, idx) => (
                        <div key={idx} className="text-sm">
                          <span className="font-medium">{desc.label}:</span>{' '}
                          <span className="text-muted-foreground">{desc.value}</span>
                        </div>
                      ))}
                      <div className="mt-4">
                        <span className="text-sm font-medium">{technique.example.label}:</span>
                        <pre className="mt-2 p-4 bg-muted rounded-lg overflow-x-auto text-xs">
                          <code>{technique.example.code}</code>
                        </pre>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            <div className="mt-2 italic">
              на данный момент доступно 
              <a href="https://novasapiens.ru/prompt" target="_blank" rel="noopener noreferrer" className="underline decoration-dotted underline-offset-4 px-1">несколько тысяч</a> 
              исследований о промпт-инжиниринге, 
              <p className="highlighted">простор для экспериментов</p>
            </div>
          </CardContent>
        </Card>

        {/* API Tuning */}
        <Card className="mb-12 border-2 relative overflow-hidden shadow-sm">
          <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none select-none">
            <span className="text-[10rem] leading-none">🎛️</span>
          </div>
          <CardHeader className="relative z-10 pb-2">
            <CardTitle className="flex items-center gap-3 text-2xl">
              {engineering.apiTuning.heading}
            </CardTitle>
            <p className="text-muted-foreground max-w-3xl">
              Тонкая настройка гиперпараметров модели позволяет адаптировать вероятностную генерацию под конкретные инженерные задачи: от строгого кодинга до креативного брейншторма.
            </p>
          </CardHeader>
          <CardContent className="relative z-10 p-6">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
              
              {/* Temperature - Large Block */}
              <div className="md:col-span-7 bg-secondary/30 dark:bg-secondary/10 p-5 rounded-xl border hover:border-primary/30 transition-colors group">
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl group-hover:scale-110 transition-transform duration-300">🌡️</span>
                    <div>
                      <h4 className="font-semibold text-base">Temperature</h4>
                      <p className="text-xs text-muted-foreground">Креативность vs Детерминизм</p>
                    </div>
                  </div>
                  <Badge variant="outline" className="font-mono bg-background">0.0 — 2.0</Badge>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between text-xs font-medium text-muted-foreground px-1">
                     <span>Code (0.0)</span>
                     <span>Standard (0.7)</span>
                     <span>Creative (1.0+)</span>
                  </div>
                  <div className="relative pt-1">
                    <div className="absolute top-0 left-0 w-full flex justify-between text-[8px] text-muted-foreground/30 px-[2px]">
                       {[...Array(21)].map((_, i) => <span key={i}>|</span>)}
                    </div>
                    <Progress value={15} className="h-4" />
                  </div>
                  <p className="text-xs text-primary/80 mt-2 font-medium">
                    Для генерации кода используйте низкие значения (0.0-0.2)
                  </p>
                </div>
              </div>

              {/* Thinking Budget - Highlighted Block */}
              <div className="md:col-span-5 bg-primary/5 p-5 rounded-xl border border-primary/20 flex flex-col justify-between relative overflow-hidden">
                 <div className="absolute top-2 right-2">
                    <Badge className="bg-primary text-primary-foreground text-[10px] h-5">New</Badge>
                 </div>
                 <div className="flex items-center gap-3 mb-2">
                    <span className="text-3xl">🧠</span>
                    <h4 className="font-semibold text-base">Thinking Budget</h4>
                 </div>
                 <p className="text-xs text-muted-foreground mb-4 leading-relaxed">
                    Выделение токенов на скрытую цепочку рассуждений (CoT) перед ответом модели.
                 </p>
                 <div className="bg-background rounded-lg p-3 border border-dashed border-primary/30 font-mono text-sm flex justify-between items-center shadow-sm">
                    <span className="text-muted-foreground">budget_tokens:</span>
                    <span className="text-primary font-bold">16384</span>
                 </div>
              </div>

              {/* Top P */}
              <div className="md:col-span-4 bg-secondary/30 dark:bg-secondary/10 p-5 rounded-xl border hover:border-primary/30 transition-colors">
                 <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                        <span className="text-2xl">🎯</span>
                        <h4 className="font-semibold text-sm">Top P</h4>
                    </div>
                    <span className="text-xs font-mono text-muted-foreground">0.9</span>
                 </div>
                 <Progress value={90} className="h-2 mb-3" />
                 <p className="text-[10px] text-muted-foreground leading-tight">
                    <strong>Nucleus sampling:</strong> Простыми словами — это &laquo;фильтр бреда&raquo;. Модель рассматривает только топ самых вероятных следующих слов, а все странные и маловероятные варианты просто игнорирует.
                 </p>
              </div>

              {/* Limits & Stops */}
              <div className="md:col-span-8 bg-secondary/30 dark:bg-secondary/10 p-5 rounded-xl border hover:border-primary/30 transition-colors grid grid-cols-1 sm:grid-cols-2 gap-6">
                 <div className="flex flex-col justify-between">
                    <div className="flex items-center gap-2 mb-2">
                       <span className="text-2xl">📏</span>
                       <h4 className="font-semibold text-sm">Max Tokens</h4>
                    </div>
                    <div className="bg-background border rounded-md px-3 py-2 font-mono text-sm text-muted-foreground shadow-sm flex items-center justify-between">
                       <span>max_output:</span>
                       <span>8192</span>
                    </div>
                 </div>
                 <div className="flex flex-col justify-between">
                    <div className="flex items-center gap-2 mb-2">
                       <span className="text-2xl">🛑</span>
                       <h4 className="font-semibold text-sm">Stop Sequences</h4>
                    </div>
                    <div className="flex gap-2 flex-wrap content-end">
                       <Badge variant="secondary" className="font-mono text-[10px] px-2 py-1 bg-background border">User:</Badge>
                       <Badge variant="secondary" className="font-mono text-[10px] px-2 py-1 bg-background border">Observation:</Badge>
                    </div>
                 </div>
              </div>

            </div>
          </CardContent>
        </Card>

        {/* Hallucinations */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle>{models.hallucinations.heading}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              {models.hallucinations.risks.map((risk, index) => (
                <Card
                  key={index}
                  className={`border-2 ${
                    risk.severity === 'critical'
                      ? 'border-rose-500'
                      : risk.severity === 'high'
                      ? 'border-amber-500'
                      : 'border-yellow-500'
                  }`}
                >
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <span className="text-2xl">{risk.icon}</span>
                      {risk.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm mb-2">{risk.description}</p>
                    <p className="text-xs text-muted-foreground"
                      dangerouslySetInnerHTML={{ __html: risk.stats }}
                    />
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="bg-accent/50 rounded-lg p-6">
              <h4 className="font-semibold mb-4">
                {models.hallucinations.mitigationStrategies.heading}
              </h4>
              <ul className="space-y-2">
                {models.hallucinations.mitigationStrategies.items.map((item, index) => (
                  <li key={index} className="flex gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <div>
                      <span className="font-medium">{item.title}:</span>{' '}
                      <span className="text-muted-foreground">{item.description}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Problems */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle>{engineering.problems.heading}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {engineering.problems.items.map((problem, index) => (
                <Card key={index} className="border-2 border-orange-200">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <span className="text-2xl">{problem.icon}</span>
                      {problem.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="bg-red-50 dark:bg-red-900/20 p-3 rounded">
                        <p className="text-sm font-semibold text-red-900 dark:text-red-200 mb-1">
                          Проблема:
                        </p>
                        <p className="text-sm text-red-800 dark:text-red-300 mb-2">
                          {problem.problem.description}
                        </p>
                        <p className="text-xs text-red-700 dark:text-red-400">
                          {problem.problem.impact}
                        </p>
                      </div>
                      <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded">
                        <p className="text-sm font-semibold text-green-900 dark:text-green-200 mb-2">
                          {problem.solution.heading}
                        </p>
                        <ul className="space-y-1">
                          {problem.solution.items.map((item, idx) => (
                            <li key={idx} className="text-sm text-green-800 dark:text-green-300 flex gap-2">
                              <span className="text-green-600">✓</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quantization */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle>{models.quantization.heading}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-center text-muted-foreground mb-6">
              {models.quantization.description}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {models.quantization.categories.map((category, index) => (
                <Card key={index} className="border-2">
                  <CardHeader>
                    <CardTitle className="text-lg">{category.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {category.types.map((type) => (
                        <Badge key={type} variant="outline">
                          {type}
                        </Badge>
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground whitespace-pre-line">
                      {category.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

