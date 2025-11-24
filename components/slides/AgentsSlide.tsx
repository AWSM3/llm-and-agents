'use client';

import { contentData } from '@/lib/content-data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export function AgentsSlide() {
  const { agents } = contentData.sections;

  return (
    <section className="min-h-screen pt-24 pb-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          {agents.title}
        </h2>

        {/* Definition Block */}
        {agents.definition && (
          <div className="bg-secondary/30 rounded-3xl p-6 md:p-10 mb-12 mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left: Text content */}
              <div className="space-y-6">
                <div className="space-y-3">
                  <p className="text-xl md:text-3xl font-medium flex flex-wrap items-center gap-2">
                    <span className="bg-blue-200 dark:bg-blue-900/50 px-3 py-1 rounded-lg whitespace-nowrap">
                      {agents.definition.modelRole.split(' — ')[0]}
                    </span>
                    <span>— {agents.definition.modelRole.split(' — ')[1]}</span>
                  </p>
                  <p className="text-xl md:text-3xl font-medium flex flex-wrap items-center gap-2">
                    <span className="bg-blue-200 dark:bg-blue-900/50 px-3 py-1 rounded-lg whitespace-nowrap">
                      {agents.definition.agentRole.split(' — ')[0]}
                    </span>
                    <span>— {agents.definition.agentRole.split(' — ')[1]}</span>
                  </p>
                </div>
                <p className="text-lg md:text-2xl text-muted-foreground leading-relaxed">
                  {agents.definition.description}
                </p>
              </div>

              {/* Right: Category cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {agents.definition.categories.map((category, index) => (
                  <div 
                    key={index} 
                    className={`rounded-2xl p-5 text-center space-y-3 ${
                      index === 0 ? 'bg-cyan-100 dark:bg-cyan-900/30' :
                      index === 1 ? 'bg-blue-100 dark:bg-blue-900/30' :
                      'bg-pink-100 dark:bg-pink-900/30'
                    }`}
                  >
                    <div className="text-4xl">{category.icon}</div>
                    <h4 className="font-bold text-lg">{category.title}</h4>
                    <p className="text-sm text-muted-foreground leading-snug">
                      ({category.examples}).
                    </p>
                    <p className="text-sm font-medium">{category.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Agents Categories */}
        <Tabs defaultValue="search" className="w-full">
          <TabsList className="grid w-full grid-cols-3 md:grid-cols-3 mb-8">
            <TabsTrigger value="search">Поисковые</TabsTrigger>
            <TabsTrigger value="browser">Браузер</TabsTrigger>
            <TabsTrigger value="coding">Разработка</TabsTrigger>
          </TabsList>

          {/* Search Agents */}
          <TabsContent value="search" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {agents.searchAgents.items.map((agent, index) => (
                <Card key={index} className="border-2 hover:border-primary/50 transition-colors">
                  <CardHeader>
                    <CardTitle className="text-2xl flex items-center gap-3">
                      <span className="text-3xl"><img src={agent.icon} alt={agent.name} className="w-8 h-8 object-cover" /></span>
                      {agent.name}
                    </CardTitle>
                    <Badge variant="outline" className="w-fit mt-2">{agent.provider}</Badge>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      {agent.description}
                    </p>
                    
                    <div className="bg-accent/30 rounded-lg p-4 space-y-2">
                      <p className="text-sm font-semibold mb-2">Ключевые возможности:</p>
                      <ul className="space-y-1">
                        {agent.features.map((feature, idx) => (
                          <li key={idx} className="text-sm flex items-start gap-2">
                            <span className="text-primary mt-0.5">▸</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {agent.demo && (
                      <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-3">
                        <p className="text-sm text-blue-900 dark:text-blue-200">
                          <span className="font-semibold">💡 Демо:</span> {agent.demo}
                        </p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Browser Agents */}
          <TabsContent value="browser" className="space-y-6">
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-3">
                  <span className="text-3xl">{agents.browserAgents.icon}</span>
                  {agents.browserAgents.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  {agents.browserAgents.description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {agents.browserAgents.items.map((agent, index) => (
                    <Card key={index} className="border">
                      <CardHeader>
                        <CardTitle className="text-lg">{agent.name}</CardTitle>
                        <Badge variant="outline" className="w-fit">{agent.provider}</Badge>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <p className="text-sm text-muted-foreground">{agent.description}</p>
                        
                        <div className="bg-accent/30 rounded p-3">
                          <p className="text-xs font-semibold mb-2">Возможности:</p>
                          <ul className="space-y-1">
                            {agent.capabilities.map((cap, idx) => (
                              <li key={idx} className="text-xs flex items-start gap-2">
                                <span className="text-primary">•</span>
                                <span>{cap}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {agent.security && (
                          <div className="bg-green-50 dark:bg-green-900/20 rounded p-2">
                            <p className="text-xs text-green-800 dark:text-green-200">
                              <span className="font-semibold">🔒 Безопасность:</span> {agent.security}
                            </p>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Coding Agents */}
          <TabsContent value="coding" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {agents.codingAgents.items.map((agent, index) => (
                <Card key={index} className="border-2 hover:border-primary/50 transition-colors">
                  <CardHeader>
                    <CardTitle className="text-2xl flex items-center gap-3">
                      <span className="text-3xl"><img src={agent.icon} alt={agent.name} className="w-8 h-8" /></span>
                      {agent.name}
                    </CardTitle>
                    <div className="flex gap-2 mt-2">
                      <Badge variant="outline">{agent.provider}</Badge>
                      {agent.integration && (
                        <Badge variant="secondary">{agent.integration}</Badge>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      {agent.description}
                    </p>

                    <div className="space-y-3">
                      <div className="bg-accent/30 rounded-lg p-3">
                        <p className="text-sm font-semibold mb-2">Основные функции:</p>
                        <ul className="space-y-1">
                          {agent.features.map((feature, idx) => (
                            <li key={idx} className="text-sm flex items-start gap-2">
                              <span className="text-primary">✓</span>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {agent.strengths && (
                        <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-3">
                          <p className="text-sm font-semibold mb-2 text-blue-900 dark:text-blue-200">
                            Особенности:
                          </p>
                          <ul className="space-y-1">
                            {agent.strengths.map((strength, idx) => (
                              <li key={idx} className="text-sm text-blue-800 dark:text-blue-300 flex items-start gap-2">
                                <span className="text-blue-600">★</span>
                                <span>{strength}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {agent.security && (
                        <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-3">
                          <p className="text-sm font-semibold mb-2 text-green-900 dark:text-green-200">
                            🛡️ Безопасность:
                          </p>
                          <ul className="space-y-1">
                            {agent.security.map((sec, idx) => (
                              <li key={idx} className="text-sm text-green-800 dark:text-green-300 flex items-start gap-2">
                                <span className="text-green-600">•</span>
                                <span>{sec}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {agent.demo && (
                        <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-3">
                          <p className="text-sm text-purple-900 dark:text-purple-200">
                            <span className="font-semibold">💡 Демо-идея:</span> {agent.demo}
                          </p>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}

