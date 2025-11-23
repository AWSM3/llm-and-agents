'use client';

import { useState, useEffect, useCallback } from 'react';
import { Hero } from '@/components/hero/Hero';
import { Navbar } from '@/components/navigation/Navbar';
import { SlideNavigation } from '@/components/navigation/SlideNavigation';
import { OverviewSlide } from '@/components/slides/OverviewSlide';
import { IntroSlide } from '@/components/slides/IntroSlide';
import { ModelsSlide } from '@/components/slides/ModelsSlide';
import { EngineeringSlide } from '@/components/slides/EngineeringSlide';
import { AgentsSlide } from '@/components/slides/AgentsSlide';
import { AgentArchitectureSlide } from '@/components/slides/AgentArchitectureSlide';
import { ToolsSlide } from '@/components/slides/ToolsSlide';
import { InferenceSlide } from '@/components/slides/InferenceSlide';

const SLIDE_IDS = ['overview', 'intro', 'models', 'engineering', 'agents', 'agent-architecture', 'tools', 'inference'];
const TOTAL_SLIDES = SLIDE_IDS.length;

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(-1); // -1 = hero
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const goToSlide = useCallback((index: number) => {
    if (index >= -1 && index < TOTAL_SLIDES) {
      setCurrentSlide(index);
      // Scroll to top when changing slides
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, []);

  const nextSlide = useCallback(() => {
    if (currentSlide === -1) {
      goToSlide(0);
    } else if (currentSlide < TOTAL_SLIDES - 1) {
      goToSlide(currentSlide + 1);
    }
  }, [currentSlide, goToSlide]);

  const prevSlide = useCallback(() => {
    if (currentSlide === 0) {
      goToSlide(-1);
    } else if (currentSlide > 0) {
      goToSlide(currentSlide - 1);
    }
  }, [currentSlide, goToSlide]);

  const handleNavigate = useCallback((slideId: string, index: number) => {
    if (slideId === 'hero') {
      goToSlide(-1);
    } else {
      goToSlide(index);
    }
  }, [goToSlide]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't interfere if user is typing in an input
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        return;
      }

      switch (e.key) {
        case 'ArrowRight':
        case 'ArrowDown':
          e.preventDefault();
          nextSlide();
          break;
        case 'ArrowLeft':
        case 'ArrowUp':
          e.preventDefault();
          prevSlide();
          break;
        case 'Home':
          e.preventDefault();
          goToSlide(-1);
          break;
        case 'End':
          e.preventDefault();
          goToSlide(TOTAL_SLIDES - 1);
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide, goToSlide]);

  // Touch swipe navigation
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.changedTouches[0].screenX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    setTouchEnd(e.changedTouches[0].screenX);
    handleSwipe();
  };

  const handleSwipe = () => {
    if (touchStart - touchEnd > 50) {
      // Swipe left - next slide
      nextSlide();
    } else if (touchStart - touchEnd < -50) {
      // Swipe right - previous slide
      prevSlide();
    }
  };

  return (
    <div
      className="min-h-screen bg-gradient-to-tr from-orange-50/50 via-purple-50/50 to-orange-50/50"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      role="main"
      aria-label="Презентация AI Coding Agents"
    >
      <Navbar currentSlide={currentSlide} onNavigate={handleNavigate} />
      
      {/* Hero */}
      <div
        className={currentSlide === -1 ? 'block' : 'hidden'}
        role="region"
        aria-label="Главная страница"
        aria-hidden={currentSlide !== -1}
      >
        <Hero />
      </div>

      {/* Slides */}
      <div
        className={currentSlide === 0 ? 'block' : 'hidden'}
        role="region"
        aria-label="Слайд 1: Про ИИ"
        aria-hidden={currentSlide !== 0}
      >
        {currentSlide === 0 && <OverviewSlide />}
      </div>
      
      <div
        className={currentSlide === 1 ? 'block' : 'hidden'}
        role="region"
        aria-label="Слайд 2: Что меняется"
        aria-hidden={currentSlide !== 1}
      >
        {currentSlide === 1 && <IntroSlide />}
      </div>
      
      <div
        className={currentSlide === 2 ? 'block' : 'hidden'}
        role="region"
        aria-label="Слайд 3: Модели"
        aria-hidden={currentSlide !== 2}
      >
        {currentSlide === 2 && <ModelsSlide />}
      </div>
      
      <div
        className={currentSlide === 3 ? 'block' : 'hidden'}
        role="region"
        aria-label="Слайд 4: Инженерия"
        aria-hidden={currentSlide !== 3}
      >
        {currentSlide === 3 && <EngineeringSlide />}
      </div>
      
      <div
        className={currentSlide === 4 ? 'block' : 'hidden'}
        role="region"
        aria-label="Слайд 5: Агенты"
        aria-hidden={currentSlide !== 4}
      >
        {currentSlide === 4 && <AgentsSlide />}
      </div>
      
      <div
        className={currentSlide === 5 ? 'block' : 'hidden'}
        role="region"
        aria-label="Слайд 6: Архитектура агентов"
        aria-hidden={currentSlide !== 5}
      >
        {currentSlide === 5 && <AgentArchitectureSlide />}
      </div>
      
      <div
        className={currentSlide === 6 ? 'block' : 'hidden'}
        role="region"
        aria-label="Слайд 7: Инструменты"
        aria-hidden={currentSlide !== 6}
      >
        {currentSlide === 6 && <ToolsSlide />}
      </div>
      
      <div
        className={currentSlide === 7 ? 'block' : 'hidden'}
        role="region"
        aria-label="Слайд 8: Inference и провайдеры"
        aria-hidden={currentSlide !== 7}
      >
        {currentSlide === 7 && <InferenceSlide />}
      </div>

      <SlideNavigation
        currentSlide={currentSlide}
        totalSlides={TOTAL_SLIDES}
        onPrevSlide={prevSlide}
        onNextSlide={nextSlide}
        onGoToSlide={goToSlide}
      />

      {/* Footer */}
      {currentSlide !== -1 && (
        <footer className="py-8 text-center text-sm text-muted-foreground border-t border-border" role="contentinfo">
          <div className="container mx-auto px-4">
            <p>Данные актуальны на ноябрь 2025 года.</p>
          </div>
        </footer>
      )}
    </div>
  );
}
