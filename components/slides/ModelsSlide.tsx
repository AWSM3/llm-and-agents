'use client';

import { useState, useMemo } from 'react';
import { contentData, Model } from '@/lib/content-data';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PriceChart } from '@/components/charts/PriceChart';
import { 
  ArrowUpDown, 
  Globe, 
  Terminal, 
  FileJson, 
  Brain, 
  Maximize, 
  Sliders 
} from 'lucide-react';
import { ModelModal } from '@/components/modals/ModelModal';

type SortKey = 'model' | 'context_window' | 'input_price' | 'output_price' | 'rating';
type SortDirection = 'asc' | 'desc';

export function ModelsSlide() {
  const { modelComparison, sections } = contentData;
  const [selectedModel, setSelectedModel] = useState<Model | null>(null);
  const [filterValue, setFilterValue] = useState('all');
  const [sortConfig, setSortConfig] = useState<{ key: SortKey; direction: SortDirection }>({
    key: 'rating',
    direction: 'desc',
  });

  const filteredModels = useMemo(() => {
    let filtered = [...modelComparison];

    if (filterValue === 'cheap') {
      filtered = filtered.filter(
        (m) => parseFloat(m.input_price.replace(/[^\d.]/g, '')) <= 1.0
      );
    } else if (filterValue === 'premium') {
      filtered = filtered.filter(
        (m) => parseFloat(m.input_price.replace(/[^\d.]/g, '')) >= 10.0
      );
    } else if (filterValue === 'best-rating') {
      filtered = filtered.filter((m) => m.rating >= 90);
    }

    return filtered;
  }, [filterValue, modelComparison]);

  const sortedModels = useMemo(() => {
    const sorted = [...filteredModels];
    const { key, direction } = sortConfig;

    sorted.sort((a, b) => {
      let aVal: any;
      let bVal: any;

      if (key === 'rating') {
        aVal = a.rating;
        bVal = b.rating;
      } else if (key === 'context_window') {
        aVal = parseInt(a.context_window.replace(/[^\d]/g, ''));
        bVal = parseInt(b.context_window.replace(/[^\d]/g, ''));
      } else if (key === 'input_price' || key === 'output_price') {
        aVal = parseFloat(a[key].replace(/[^\d.]/g, ''));
        bVal = parseFloat(b[key].replace(/[^\d.]/g, ''));
      } else {
        aVal = a[key];
        bVal = b[key];
      }

      if (aVal < bVal) return direction === 'asc' ? -1 : 1;
      if (aVal > bVal) return direction === 'asc' ? 1 : -1;
      return 0;
    });

    return sorted;
  }, [filteredModels, sortConfig]);

  const handleSort = (key: SortKey) => {
    setSortConfig((prev) => ({
      key,
      direction: prev.key === key && prev.direction === 'asc' ? 'desc' : 'asc',
    }));
  };

  const getRatingColor = (rating: number) => {
    if (rating >= 90) return 'bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200';
    if (rating >= 85) return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
    if (rating >= 80) return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
    return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200';
  };

  return (
    <section className="min-h-screen pt-24 pb-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          {sections.models.title}
        </h2>
        <p className="text-center text-muted-foreground mb-4">
          {sections.models.intro}
        </p>
        <p className="text-center mb-10">
          <a href="https://openrouter.ai/models?order=top-weekly" target="_blank" 
            rel="noopener noreferrer"
            className="underline decoration-dotted underline-offset-4 highlighted hover:px-6! transition-all duration-700">OpenRouter</a>
        </p>

        {/* Models Table */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle>Детальная сравнительная таблица моделей</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    {sections.models.tableHeaders.map((header) => (
                      <TableHead
                        key={header.key}
                        className={header.sortable ? 'cursor-pointer hover:bg-accent' : ''}
                        onClick={() => header.sortable && handleSort(header.key as SortKey)}
                      >
                        <div className="flex items-center gap-2">
                          {header.label}
                          {header.sortable && <ArrowUpDown className="h-4 w-4" />}
                        </div>
                      </TableHead>
                    ))}
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {sortedModels.map((model) => (
                    <TableRow
                      key={model.id}
                      className="cursor-pointer hover:bg-accent/50"
                      onClick={() => setSelectedModel(model)}
                    >
                      <TableCell>
                        <div>
                          <div className="font-semibold">{model.model}</div>
                          <div className="text-sm text-muted-foreground">
                            {model.provider} • {model.release_date}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>{model.context_window}</TableCell>
                      <TableCell>{model.input_price}</TableCell>
                      <TableCell>{model.output_price}</TableCell>
                      {/*<TableCell>*/}
                      {/*  <Badge className={getRatingColor(model.rating)}>*/}
                      {/*    {model.rating}*/}
                      {/*  </Badge>*/}
                      {/*</TableCell>*/}
                      <TableCell className="max-w-md">
                        <span className="text-sm">{model.strengths}</span>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>

        {/* Price Chart */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle>{sections.models.priceAnalysis.heading}</CardTitle>
          </CardHeader>
          <CardContent>
            <PriceChart models={modelComparison} />
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
              {sections.models.priceAnalysis.insights.map((insight, index) => (
                <div key={index} className="p-4 bg-accent/50 rounded-lg">
                  <h4 className="font-semibold mb-2">{insight.label}</h4>
                  <p className="text-sm text-muted-foreground">{insight.text}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Modern Capabilities */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-center mb-10">
            {sections.overview.currentState.innovation.title}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sections.overview.currentState.innovation.features.map((feature, index) => {
              const icons = [Globe, Terminal, FileJson, Brain, Maximize, Sliders];
              const Icon = icons[index] || Globe;
              
              return (
                <Card key={index} className="border-muted/40 hover:border-primary/50 hover:shadow-lg transition-all duration-300 bg-card/50 backdrop-blur-sm group">
                  <CardContent className="p-6 flex flex-col gap-4 h-full">
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300 shrink-0">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="font-medium text-lg">{feature.title}</span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

      </div>

      {selectedModel && (
        <ModelModal
          model={selectedModel}
          isOpen={!!selectedModel}
          onClose={() => setSelectedModel(null)}
        />
      )}
    </section>
  );
}

