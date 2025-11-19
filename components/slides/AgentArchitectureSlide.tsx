'use client';

import { contentData } from '@/lib/content-data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export function AgentArchitectureSlide() {
  const { agentArchitecture } = contentData.sections;

  return (
    <section className="min-h-screen pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {agentArchitecture.title}
          </h2>
          <p className="text-xl text-muted-foreground">
            {agentArchitecture.subtitle}
          </p>
        </div>

        <Tabs defaultValue="components" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="components">Компоненты</TabsTrigger>
            <TabsTrigger value="cycle">Цикл агента</TabsTrigger>
          </TabsList>

          {/* Components Tab */}
          <TabsContent value="components" className="space-y-8">
            {/* Header */}
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold mb-3">
                {agentArchitecture.components.heading}
              </h3>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                {agentArchitecture.components.description}
              </p>
            </div>

            <div className='mb-14 text-center'>
              <a href="https://learn.microsoft.com/ru-ru/azure/ai-foundry/agents/overview#what-is-an-ai-agent" target="_blank" className='underline decoration-dotted underline-offset-4'>Microsoft</a>
              <img src="https://learn.microsoft.com/ru-ru/azure/ai-foundry/agents/media/what-is-an-agent.png" alt="Agent Architecture" className='mt-6' />
            </div>

            {/* Components Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {agentArchitecture.components.items.map((component, index) => (
                <Card 
                  key={index} 
                  className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
                >
                  <CardHeader>
                    <CardTitle className="text-xl flex items-center gap-3">
                      <span className="text-3xl">{component.icon}</span>
                      {component.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      {component.description}
                    </p>

                    {component.diagram && (
                      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 rounded-lg p-4 border border-blue-200 dark:border-blue-800">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-sm font-semibold text-blue-900 dark:text-blue-200">
                            📊 Схема:
                          </span>
                        </div>
                        <p className="text-sm text-blue-800 dark:text-blue-300 font-mono">
                          {component.diagram}
                        </p>
                      </div>
                    )}

                    {component.example && (
                      <div className="bg-accent/50 rounded-lg p-4 border border-border">
                        <p className="text-sm text-muted-foreground italic">
                          💡 {component.example}
                        </p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Cycle Tab */}
          <TabsContent value="cycle" className="space-y-8">
            {/* Header */}
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold mb-3">
                {agentArchitecture.cycle.heading}
              </h3>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                {agentArchitecture.cycle.description}
              </p>

              <p className="text-xs text-indigo-700  max-w-3xl mx-auto">
                [1] <a href="https://www.youtube.com/watch?v=Xz9cr3aC7eI" target="_blank" className='underline decoration-dotted underline-offset-4 highlighted'>видос про AI агентов с GigaConf</a>:
                в частности про меру агентности, мультиагентность, создание агентов и т.п.
              </p>

              <p className="text-xs text-indigo-700 max-w-3xl mx-auto">
                [2] <a href="https://cloud.ru/blog/kak-ustroyeny-i-chto-umeyut-ai-agenty" target="_blank" className='underline decoration-dotted underline-offset-4 highlighted'>статья про AI агентов от Cloud.ru</a>:
                что это такое, архитектура, типы, задачи, внедрение, примеры
              </p>
            </div>

            {/* Agent Cycle Steps */}
            <Card className="border-2 mb-8">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-3">
                  <span className="text-3xl">🔄</span>
                  Петля планирования (Think-Act Loop)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                  {agentArchitecture.cycle.steps.map((step, index) => (
                    <div key={index} className="relative">
                      <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg p-4 border-2 border-primary/20 hover:border-primary/50 transition-all h-full">
                        <div className="text-center mb-3">
                          <span className="text-4xl mb-2 block">{step.icon}</span>
                          <Badge variant="outline" className="font-semibold">
                            {index + 1}. {step.step}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground text-center leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                      {index < agentArchitecture.cycle.steps.length - 1 && (
                        <div className="hidden md:block absolute top-1/2 -right-2 transform -translate-y-1/2 text-2xl text-primary z-10">
                          →
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                <div className="mt-6 bg-blue-50 dark:bg-blue-950/30 rounded-lg p-4 border border-blue-200 dark:border-blue-800">
                  <p className="text-sm text-blue-900 dark:text-blue-200">
                    <span className="font-semibold">💡 Важно:</span> Агент может прервать цикл и спросить человека, 
                    если столкнулся с неясностью или нужна авторизация на опасное действие.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {agentArchitecture.cycle.features.map((feature, index) => (
                <Card 
                  key={index}
                  className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
                >
                  <CardHeader>
                    <CardTitle className="text-xl flex items-center gap-3">
                      <span className="text-3xl">{feature.icon}</span>
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>

                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 rounded-lg p-4 border border-green-200 dark:border-green-800">
                      <p className="text-sm font-semibold mb-2 text-green-900 dark:text-green-200">
                        ✓ Преимущества:
                      </p>
                      <ul className="space-y-2">
                        {feature.benefits.map((benefit, idx) => (
                          <li 
                            key={idx}
                            className="text-sm text-green-800 dark:text-green-300 flex items-start gap-2"
                          >
                            <span className="text-green-600 dark:text-green-400 mt-0.5">•</span>
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Example Section */}
            <Card className="border-2 border-purple-200 dark:border-purple-800 bg-gradient-to-br from-purple-50/50 to-pink-50/50 dark:from-purple-950/20 dark:to-pink-950/20">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-3">
                  <span className="text-3xl">🎯</span>
                  Пример трассировки работы агента
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 font-mono text-sm">
                  <div className="bg-background/80 backdrop-blur rounded p-3 border">
                    <span className="text-blue-600 dark:text-blue-400 font-semibold">Запрос:</span>
                    <span className="ml-2">Создать функцию для валидации email</span>
                  </div>
                  
                  <div className="bg-background/80 backdrop-blur rounded p-3 border">
                    <span className="text-purple-600 dark:text-purple-400 font-semibold">План агента:</span>
                    <div className="ml-2 mt-2 space-y-1 text-muted-foreground">
                      <div>1. Проанализировать требования к валидации</div>
                      <div>2. Выбрать подход (regex vs библиотека)</div>
                      <div>3. Написать функцию с тестами</div>
                    </div>
                  </div>

                  <div className="bg-background/80 backdrop-blur rounded p-3 border">
                    <span className="text-green-600 dark:text-green-400 font-semibold">Действие:</span>
                    <span className="ml-2">Вызов функции createFile("validator.ts")</span>
                  </div>

                  <div className="bg-background/80 backdrop-blur rounded p-3 border">
                    <span className="text-orange-600 dark:text-orange-400 font-semibold">Результат:</span>
                    <span className="ml-2 text-green-600 dark:text-green-400">✓ Файл создан успешно</span>
                  </div>

                  <div className="bg-background/80 backdrop-blur rounded p-3 border">
                    <span className="text-blue-600 dark:text-blue-400 font-semibold">Следующий шаг:</span>
                    <span className="ml-2">Продолжаю выполнение плана...</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}

