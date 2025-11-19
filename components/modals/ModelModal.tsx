'use client';

import { Model } from '@/lib/content-data';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';

interface ModelModalProps {
  model: Model;
  isOpen: boolean;
  onClose: () => void;
}

export function ModelModal({ model, isOpen, onClose }: ModelModalProps) {
  const getRatingColor = (rating: number) => {
    if (rating >= 90) return 'bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200';
    if (rating >= 85) return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
    if (rating >= 80) return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
    return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200';
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl">{model.model}</DialogTitle>
        </DialogHeader>

        <div className="grid grid-cols-2 gap-4 mt-4">
          <div className="space-y-3">
            <div>
              <span className="text-sm font-semibold text-muted-foreground">Провайдер:</span>
              <p className="mt-1">{model.provider}</p>
            </div>
            <div>
              <span className="text-sm font-semibold text-muted-foreground">Дата релиза:</span>
              <p className="mt-1">{model.release_date}</p>
            </div>
            <div>
              <span className="text-sm font-semibold text-muted-foreground">Контекстное окно:</span>
              <p className="mt-1">{model.context_window}</p>
            </div>
          </div>

          <div className="space-y-3">
            <div>
              <span className="text-sm font-semibold text-muted-foreground">Input цена:</span>
              <p className="mt-1">{model.input_price} за 1M токенов</p>
            </div>
            <div>
              <span className="text-sm font-semibold text-muted-foreground">Output цена:</span>
              <p className="mt-1">{model.output_price} за 1M токенов</p>
            </div>
            {/*<div>*/}
            {/*  <span className="text-sm font-semibold text-muted-foreground">Рейтинг:</span>*/}
            {/*  <div className="mt-1">*/}
            {/*    <Badge className={getRatingColor(model.rating)}>{model.rating}</Badge>*/}
            {/*  </div>*/}
            {/*</div>*/}
          </div>
        </div>

        <div className="mt-6">
          <span className="text-sm font-semibold text-muted-foreground">Ключевые особенности:</span>
          <p className="mt-2 text-foreground">{model.strengths}</p>
        </div>

        <div className="mt-4 text-xs text-muted-foreground">
          <p>Данные актуальны на октябрь 2025 года</p>
        </div>
      </DialogContent>
    </Dialog>
  );
}

