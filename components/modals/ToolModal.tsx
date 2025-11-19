'use client';

import { CodingAgent } from '@/lib/content-data';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';

interface ToolModalProps {
  tool: CodingAgent;
  isOpen: boolean;
  onClose: () => void;
}

export function ToolModal({ tool, isOpen, onClose }: ToolModalProps) {
  const getRatingColor = (rating: number) => {
    if (rating >= 90) return 'bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200';
    if (rating >= 85) return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
    if (rating >= 80) return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
    return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200';
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">{tool.tool}</DialogTitle>
        </DialogHeader>

        <div className="space-y-6 mt-4">
          {/* Pricing */}
          <div>
            <h4 className="font-semibold mb-3">Тарифы:</h4>
            <div className="space-y-2 bg-accent/50 rounded-lg p-4">
              <div>
                <span className="text-sm font-medium">Бесплатный план:</span>{' '}
                <span className="text-sm text-muted-foreground">{tool.pricing.freeTier}</span>
              </div>
              <div>
                <span className="text-sm font-medium">Базовый тариф:</span>{' '}
                <span className="text-sm text-muted-foreground">{tool.pricing.base}</span>
              </div>
              <div>
                <span className="text-sm font-medium">Расширенный тариф:</span>{' '}
                <span className="text-sm text-muted-foreground">{tool.pricing.extended}</span>
              </div>
            </div>
          </div>

          {/* Rating */}
          {/*<div>*/}
          {/*  <span className="text-sm font-semibold text-muted-foreground">Рейтинг:</span>*/}
          {/*  <div className="mt-1">*/}
          {/*    <Badge className={getRatingColor(tool.rating)}>{tool.rating}</Badge>*/}
          {/*  </div>*/}
          {/*</div>*/}

          {/* Modes */}
          <div>
            <h4 className="font-semibold mb-2">Режимы работы:</h4>
            <div className="flex flex-wrap gap-2">
              {tool.modes.map((mode, idx) => (
                <Badge key={idx} variant="secondary">
                  {mode}
                </Badge>
              ))}
            </div>
          </div>

          {/* Limits */}
          <div>
            <h4 className="font-semibold mb-3">Лимиты:</h4>
            <ul className="space-y-2">
              {Object.entries(tool.limits).map(([key, value], idx) => (
                <li key={idx} className="text-sm flex gap-2">
                  <span className="text-primary">•</span>
                  <span>{value}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Features */}
          <div>
            <h4 className="font-semibold mb-3">Функции и возможности:</h4>
            <ul className="space-y-2">
              {tool.features.map((feature, idx) => (
                <li key={idx} className="text-sm flex gap-2">
                  <span className="text-primary">✓</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

