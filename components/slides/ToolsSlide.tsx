'use client';

import { useState } from 'react';
import { contentData, CodingAgent } from '@/lib/content-data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { ToolModal } from '@/components/modals/ToolModal';

export function ToolsSlide() {
  const { tools } = contentData.sections;
  const { codingAgents } = contentData;
  const [selectedTool, setSelectedTool] = useState<CodingAgent | null>(null);

  const getRatingColor = (rating: number) => {
    if (rating >= 90) return 'bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200';
    if (rating >= 85) return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
    if (rating >= 80) return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
    return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200';
  };

  return (
    <section className="min-h-screen pt-24 pb-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          {tools.title}
        </h2>

        {/* Tools Grid */}
        <div className="mb-12">
          
          {/* Vendor Lock-in Section */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-6">
              <h4 className="text-xl font-semibold">Vendor Lock-in решения</h4>
              <Badge className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200">
                Проприетарные
              </Badge>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {codingAgents
                .filter(tool => tool.type === 'vendor-lockin')
                .map((tool, index) => (
                  <Card
                    key={index}
                    className="cursor-pointer hover:shadow-lg transition-all duration-300 border-2 border-purple-200 dark:border-purple-800 hover:border-purple-400"
                  >
                    <CardHeader>
                      <CardTitle className="text-xl">{tool.tool}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div>
                          <p className="text-sm text-muted-foreground mb-1">Бесплатный:</p>
                          <p className="text-sm">{tool.pricing.freeTier}</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground mb-1">Базовый:</p>
                          <p className="text-sm">{tool.pricing.base}</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground mb-1">Режимы:</p>
                          <div className="flex flex-wrap gap-1">
                            {tool.modes.map((mode, idx) => (
                              <Badge key={idx} variant="outline" className="text-xs">
                                {mode}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>

          {/* Open Source Section */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <h4 className="text-xl font-semibold">Open Source решения</h4>
              <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                BYOK (Bring Your Own Key) / Public Providers
              </Badge>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {codingAgents
                .filter(tool => tool.type === 'open-source')
                .map((tool, index) => (
                  <Card
                    key={index}
                    className="cursor-pointer hover:shadow-lg transition-all duration-300 border-2 border-green-200 dark:border-green-800 hover:border-green-400"
                  >
                    <CardHeader>
                      <CardTitle className="text-xl">{tool.tool}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div>
                          <p className="text-sm text-muted-foreground mb-1">Бесплатный:</p>
                          <p className="text-sm">{tool.pricing.freeTier}</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground mb-1">Базовый:</p>
                          <p className="text-sm">{tool.pricing.base}</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground mb-1">Режимы:</p>
                          <div className="flex flex-wrap gap-1">
                            {tool.modes.map((mode, idx) => (
                              <Badge key={idx} variant="outline" className="text-xs">
                                {mode}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>
        </div>

        {/* Pricing Table */}
        <Card className="mb-12 hidden">
          <CardHeader>
            <CardTitle>{tools.pricing.heading}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    {tools.pricing.tableHeaders.map((header, index) => (
                      <TableHead key={index}>{header}</TableHead>
                    ))}
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {tools.pricing.rows.map((row, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-semibold">{row.tool}</TableCell>
                      <TableCell>{row.basic}</TableCell>
                      <TableCell>{row.advanced}</TableCell>
                      <TableCell className="text-sm">{row.limits}</TableCell>
                      <TableCell className="text-sm">{row.features}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>

        {/* Security */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle>{tools.security.heading}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {tools.security.threats.map((threat, index) => (
                <Card
                  key={index}
                  className={`border-2 ${
                    threat.severity === 'critical'
                      ? 'border-rose-500'
                      : threat.severity === 'high'
                      ? 'border-amber-500'
                      : 'border-yellow-500'
                  }`}
                >
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <span className="text-2xl">{threat.icon}</span>
                      {threat.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm mb-4">{threat.description}</p>
                    <div className="bg-accent/50 rounded p-3">
                      <p className="text-xs font-semibold mb-1">{threat.mitigation.label}</p>
                      <p className="text-xs text-muted-foreground">{threat.mitigation.text}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* MCP Solutions */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle>{tools.mcp.heading}</CardTitle>
            <p className="text-sm text-muted-foreground mt-2">{tools.mcp.intro}</p>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {tools.mcp.solutions.map((solution, index) => (
                <Card key={index} className="border-2">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <span className="text-2xl">{solution.icon}</span>
                      {solution.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm mb-3">{solution.description}</p>
                    <p className="text-xs text-muted-foreground mb-4">{solution.useCase}</p>
                    <div className="space-y-1">
                      {solution.features.map((feature, idx) => (
                        <div key={idx} className="text-sm flex gap-2">
                          <span className="text-primary">•</span>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Optimization Strategies */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle>{tools.optimization.heading}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tools.optimization.strategies.map((strategy, index) => (
                <Card key={index} className="border-2">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <span className="text-2xl">{strategy.icon}</span>
                      {strategy.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm mb-3">{strategy.description}</p>
                    {(strategy.example || strategy.result || strategy.effect || strategy.improvement) && (
                      <div className="bg-accent/50 rounded p-3 text-xs">
                        {strategy.example && <p>{strategy.example}</p>}
                        {strategy.result && <p className="font-semibold text-primary">{strategy.result}</p>}
                        {strategy.effect && <p className="font-semibold text-primary">{strategy.effect}</p>}
                        {strategy.improvement && <p className="font-semibold text-primary">{strategy.improvement}</p>}
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Agent Modes */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle>{tools.agentModes.heading}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {tools.agentModes.modes.map((mode, index) => (
                <Card key={index} className="border-2">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <span className="text-2xl">{mode.icon}</span>
                      {mode.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm mb-4">{mode.description}</p>
                    <div className="mb-4">
                      <p className="text-xs font-semibold mb-2">Функции:</p>
                      <div className="grid grid-cols-2 gap-2">
                        {mode.features.map((feature, idx) => (
                          <div key={idx} className="text-xs flex gap-1">
                            <span className="text-primary">✓</span>
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    {/* <p className="text-xs text-muted-foreground">
                      <span className="font-semibold">Инструменты:</span> {mode.tools}
                    </p> */}
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Frameworks Section */}
        <Card>
          <CardHeader>
            <CardTitle>{tools.frameworks.heading}</CardTitle>
            <p className="text-sm text-muted-foreground mt-1 mb-6">{tools.frameworks.intro}</p>
          </CardHeader>
          <CardContent>
            {/* Frameworks Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
              {tools.frameworks.frameworks.map((framework, index) => (
                <Card 
                  key={index} 
                  className="border-2 hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-background to-accent/5"
                >
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2 justify-center text-center">
                      <span className="hidden text-3xl">{framework.icon}</span>
                      <div>
                        <CardTitle className="text-xl">{framework.name}</CardTitle>
                        <p className="text-xs text-muted-foreground">{framework.fullName}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm">{framework.description}</p>
                    
                    {/* Key Info Cards */}
                    <div className="space-y-2">
                      <div className="bg-blue-50 dark:bg-blue-950/30 rounded-lg p-3 border border-blue-200 dark:border-blue-800">
                        <p className="text-xs font-semibold text-blue-900 dark:text-blue-200 mb-1">Подход:</p>
                        <p className="text-xs text-blue-700 dark:text-blue-300">{framework.approach}</p>
                      </div>
                      
                      <div className="bg-purple-50 dark:bg-purple-950/30 rounded-lg p-3 border border-purple-200 dark:border-purple-800">
                        <p className="text-xs font-semibold text-purple-900 dark:text-purple-200 mb-1">Роль человека:</p>
                        <p className="text-xs text-purple-700 dark:text-purple-300">{framework.role}</p>
                      </div>
                      
                      <div className="bg-amber-50 dark:bg-amber-950/30 rounded-lg p-3 border border-amber-200 dark:border-amber-800">
                        <p className="text-xs font-semibold text-amber-900 dark:text-amber-200 mb-1">Уровень работы:</p>
                        <p className="text-xs text-amber-700 dark:text-amber-300">{framework.level}</p>
                      </div>
                    </div>

                    {/* Features */}
                    <div>
                      <p className="text-xs font-semibold mb-2">Ключевые особенности:</p>
                      <div className="space-y-1">
                        {framework.features.map((feature, idx) => (
                          <div key={idx} className="text-xs flex gap-2 items-start">
                            <span className="text-primary mt-0.5">▸</span>
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Use Cases */}
                    <div className="border-t pt-3">
                      <p className="text-xs font-semibold mb-2">Применение:</p>
                      <div className="space-y-1">
                        {framework.useCases.map((useCase, idx) => (
                          <div key={idx} className="text-xs flex gap-2 items-start">
                            <span className="text-green-600 dark:text-green-400">✓</span>
                            <span>{useCase}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Structure (BMAD only) */}
                    {framework.structure && (
                      <div className="border-t pt-3">
                        <p className="text-xs font-semibold mb-2">Структура:</p>
                        <div className="space-y-1">
                          {framework.structure.core && (
                            <p className="text-xs"><span className="font-medium">Core:</span> {framework.structure.core}</p>
                          )}
                          {framework.structure.bmm && (
                            <p className="text-xs"><span className="font-medium">BMM:</span> {framework.structure.bmm}</p>
                          )}
                          {framework.structure.bmb && (
                            <p className="text-xs"><span className="font-medium">BMB:</span> {framework.structure.bmb}</p>
                          )}
                          {framework.structure.cis && (
                            <p className="text-xs"><span className="font-medium">CIS:</span> {framework.structure.cis}</p>
                          )}
                        </div>
                      </div>
                    )}

                    {/* Workflow */}
                    {framework.workflow && (
                      <div className="border-t pt-3">
                        <p className="text-xs font-semibold mb-2">Workflow:</p>
                        <div className="flex flex-col gap-1">
                          {framework.workflow.map((step, idx) => (
                            <div key={idx} className="flex items-center gap-2">
                              <span className="text-xs font-bold text-primary">{idx + 1}</span>
                              <span className="text-xs">{step}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Comparison Table */}
            <Card className="border-2 border-primary/20">
              <CardHeader>
                <CardTitle className="text-lg">{tools.frameworks.comparison.heading}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-4 font-semibold">Аспект</th>
                        <th className="text-left py-3 px-4 font-semibold text-blue-600 dark:text-blue-400">BMAD</th>
                        <th className="text-left py-3 px-4 font-semibold text-purple-600 dark:text-purple-400">Spec Kit</th>
                        <th className="text-left py-3 px-4 font-semibold text-amber-600 dark:text-amber-400">OpenSpec</th>
                      </tr>
                    </thead>
                    <tbody>
                      {tools.frameworks.comparison.aspects.map((aspect, idx) => (
                        <tr key={idx} className="border-b last:border-0 hover:bg-accent/50 transition-colors">
                          <td className="py-3 px-4 font-medium">{aspect.aspect}</td>
                          <td className="py-3 px-4">{aspect.bmad}</td>
                          <td className="py-3 px-4">{aspect.specKit}</td>
                          <td className="py-3 px-4">{aspect.openSpec}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </CardContent>
        </Card>
      </div>

      {selectedTool && (
        <ToolModal
          tool={selectedTool}
          isOpen={!!selectedTool}
          onClose={() => setSelectedTool(null)}
        />
      )}
    </section>
  );
}

