'use client';

import { contentData } from '@/lib/content-data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function IntroSlide() {
  const { intro } = contentData.sections;

  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          <span dangerouslySetInnerHTML={{ __html: intro.title }} />
        </h2>
        
        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-center mb-8">
            {intro.objectives.heading}
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {intro.objectives.items.map((objective, index) => (
              <Card 
                key={index} 
                className="hover:shadow-lg transition-shadow duration-300 slide-enter"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <CardTitle className="flex items-start gap-3">
                    <span className="text-3xl flex-shrink-0">{objective.icon}</span>
                    <span className="text-lg leading-tight" dangerouslySetInnerHTML={{ __html: objective.title }} />
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    <span dangerouslySetInnerHTML={{ __html: objective.description }} />
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

