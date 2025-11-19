'use client';

import { contentData } from '@/lib/content-data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export function InferenceSlide() {
  const { inference } = contentData.sections;

  return (
    <section className="min-h-screen pt-24 pb-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          {inference.title}
        </h2>

        {/* Pricing Models */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle>{inference.pricingModels.heading}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {inference.pricingModels.models.map((model, index) => (
                <Card key={index} className="border-2">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <span className="text-2xl">{model.icon}</span>
                      {model.title}
                    </CardTitle>
                    <p className="text-sm text-muted-foreground mt-2">{model.priceRange}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
                        <h5 className="text-sm font-semibold text-green-900 dark:text-green-200 mb-2">
                          {model.pros.label}
                        </h5>
                        <ul className="space-y-1">
                          {model.pros.items.map((item, idx) => (
                            <li key={idx} className="text-sm text-green-800 dark:text-green-300 flex gap-2">
                              <span className="text-green-600">✓</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-4">
                        <h5 className="text-sm font-semibold text-red-900 dark:text-red-200 mb-2">
                          {model.cons.label}
                        </h5>
                        <ul className="space-y-1">
                          {model.cons.items.map((item, idx) => (
                            <li key={idx} className="text-sm text-red-800 dark:text-red-300 flex gap-2">
                              <span className="text-red-600">✗</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Providers */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle>{inference.providers.heading}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Inference providers */}
              <div>
                <h4 className="text-lg font-semibold mb-4">{inference.providers.inference.title}</h4>
                <div className="space-y-4">
                  {inference.providers.inference.examples.map((provider, index) => (
                    <Card key={index}>
                      <CardHeader>
                        <CardTitle className="text-base">{provider.name}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-1">
                          {provider.features.map((feature, idx) => (
                            <li key={idx} className="text-sm flex gap-2">
                              <span className="text-primary">•</span>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Third-party */}
              <div>
                <h4 className="text-lg font-semibold mb-4">{inference.providers.thirdParty.title}</h4>
                <div className="space-y-4">
                  {inference.providers.thirdParty.examples.map((provider, index) => (
                    <Card key={index}>
                      <CardHeader>
                        <CardTitle className="text-base">{provider.name}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-1">
                          {provider.features.map((feature, idx) => (
                            <li key={idx} className="text-sm flex gap-2">
                              <span className="text-primary">•</span>
                              <span dangerouslySetInnerHTML={{ __html: feature }} />
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

            </div>
          </CardContent>
        </Card>

        {/* Free Tiers */}
        <Card>
          <CardHeader>
            <CardTitle>{inference.freeTiers.heading}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {inference.freeTiers.tiers.map((tier, index) => (
                <Card key={index} className="border-2 border-primary/20">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <span className="text-2xl">{tier.icon}</span>
                      {tier.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <p className="text-xs font-semibold text-muted-foreground mb-1">Лимиты:</p>
                        <p className="text-sm">
                          {tier.limitLink ? (
                            <a
                              href={tier.limitLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-primary hover:underline"
                            >
                              {tier.limit}
                            </a>
                          ) : (
                            tier.limit
                          )}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-muted-foreground mb-1">Модели:</p>
                        <p className="text-sm">{tier.models}</p>
                      </div>
                      <div>
                        <Badge variant="secondary" className="text-xs">
                          {tier.features}
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

