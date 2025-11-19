'use client';

import { useState } from 'react';
import { contentData } from '@/lib/content-data';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  currentSlide: number;
  onNavigate: (slideId: string, index: number) => void;
}

export function Navbar({ currentSlide, onNavigate }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { navigation } = contentData;

  const handleNavClick = (item: typeof navigation.items[0], index: number) => {
    onNavigate(item.id, index);
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Brand */}
          <div className="flex-shrink-0">
            <button
              onClick={() => onNavigate('hero', -1)}
              className="text-xl font-bold text-primary hover:text-primary/80 transition-colors"
            >
              {navigation.brand}
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navigation.items.map((item, index) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item, index)}
                className={`px-4! transition-all duration-700 py-2 text-sm font-medium ${
                  currentSlide === index
                    ? 'bg-primary text-primary-foreground highlighted translate-y-1'
                    : 'text-foreground hover:bg-accent hover:text-accent-foreground'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-2 border-t border-border">
            {navigation.items.map((item, index) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item, index)}
                className={`block w-full text-left px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  currentSlide === index
                    ? 'bg-primary text-primary-foreground'
                    : 'text-foreground hover:bg-accent hover:text-accent-foreground'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}

