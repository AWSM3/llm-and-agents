'use client';

import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface SlideNavigationProps {
  currentSlide: number;
  totalSlides: number;
  onPrevSlide: () => void;
  onNextSlide: () => void;
  onGoToSlide: (index: number) => void;
}

export function SlideNavigation({
  currentSlide,
  totalSlides,
  onPrevSlide,
  onNextSlide,
  onGoToSlide,
}: SlideNavigationProps) {
  const progressPercent = currentSlide === -1 ? 0 : ((currentSlide + 1) / totalSlides) * 100;

  return (
    <>
      {/* Progress Bar */}
      <div className="fixed top-16 left-0 right-0 z-40">
        <Progress value={progressPercent} className="h-1 rounded-none" />
      </div>

      {/* Slide Navigation Controls */}
      <div className="fixed bottom-22.5 left-1/2 transform -translate-x-1/2 z-50 bg-background/95 backdrop-blur-sm border border-border rounded-full px-6 py-2 shadow-lg">
        <div className="flex items-center gap-4">
          {/* Previous Button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={onPrevSlide}
            disabled={currentSlide === -1}
            aria-label="Предыдущий слайд"
            className="rounded-full"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>

          {/* Slide Indicators */}
          <div className="flex items-center gap-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => onGoToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentSlide
                    ? 'bg-black'
                    : 'bg-black/20 hover:bg-black/40'
                }`}
                aria-label={`Перейти к слайду ${index + 1}`}
              />
            ))}
          </div>

          {/* Slide Counter */}
          <div className="text-sm font-medium text-muted-foreground min-w-[80px] text-center">
            {currentSlide === -1 ? 'Главная' : `${currentSlide + 1} / ${totalSlides}`}
          </div>

          {/* Next Button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={onNextSlide}
            disabled={currentSlide === totalSlides - 1}
            aria-label="Следующий слайд"
            className="rounded-full"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Keyboard Hints - Hidden on mobile */}
      <div className="hidden md:hidden fixed bottom-24 right-8 z-40 bg-background/90 backdrop-blur-sm border 
      border-border rounded-lg px-4 py-2 shadow-md text-xs text-muted-foreground">
        <div className="flex items-center gap-2">
          <kbd className="px-2 py-1 bg-muted rounded">←</kbd>
          <kbd className="px-2 py-1 bg-muted rounded">→</kbd>
          <span>Навигация</span>
          <span className="mx-2">|</span>
          <kbd className="px-2 py-1 bg-muted rounded">Home</kbd>
          <span>В начало</span>
          <span className="mx-2">|</span>
          <kbd className="px-2 py-1 bg-muted rounded">End</kbd>
          <span>В конец</span>
        </div>
      </div>
    </>
  );
}

