// TypeScript interfaces for content data

export interface Model {
  model: string;
  id: string;
  context_window: string;
  input_price: string;
  output_price: string;
  provider: string;
  release_date: string;
  rating: number;
  strengths: string;
}

export interface CodingAgent {
  tool: string;
  pricing: {
    base: string;
    extended: string;
    freeTier: string;
  };
  limits: {
    [key: string]: string;
  };
  features: string[];
  rating: number;
  modes: string[];
  type: string;
}

export interface ObjectiveItem {
  icon: string;
  title: string;
  description: string;
}

export interface QuantizationCategory {
  type: string;
  title: string;
  types: string[];
  description: string;
}

export interface RiskItem {
  severity: string;
  icon: string;
  title: string;
  description: string;
  stats: string;
}

export interface MitigationItem {
  title: string;
  description: string;
}

export interface ContextSize {
  type: string;
  title: string;
  range: string;
  models: string;
}

export interface StrategyItem {
  icon: string;
  title: string;
  details: Array<{
    label: string;
    value: string;
  }>;
  benefit: string;
}

export interface PromptTechnique {
  title: string;
  description: Array<{
    label: string;
    value: string;
  }>;
  example: {
    label: string;
    code: string;
  };
}

export interface ProblemItem {
  icon: string;
  title: string;
  problem: {
    description: string;
    impact: string;
  };
  solution: {
    heading: string;
    items: string[];
  };
}

export interface SecurityThreat {
  severity: string;
  icon: string;
  title: string;
  description: string;
  mitigation: {
    label: string;
    text: string;
  };
}

export interface MCPSolution {
  type: string;
  icon: string;
  title: string;
  description: string;
  useCase: string;
  features: string[];
}

export interface OptimizationStrategy {
  icon: string;
  title: string;
  description: string;
  example?: string;
  result?: string;
  effect?: string;
  improvement?: string;
}

export interface AgentMode {
  type: string;
  icon: string;
  title: string;
  description: string;
  features: string[];
  tools: string;
}

export interface Framework {
  name: string;
  fullName: string;
  icon: string;
  approach: string;
  role: string;
  level: string;
  description: string;
  features: string[];
  useCases: string[];
  structure?: {
    core?: string;
    bmm?: string;
    bmb?: string;
    cis?: string;
  };
  workflow?: string[];
}

export interface FrameworkComparison {
  heading: string;
  aspects: Array<{
    aspect: string;
    bmad: string;
    specKit: string;
    openSpec: string;
  }>;
}

export interface PricingModel {
  type: string;
  icon: string;
  title: string;
  priceRange: string;
  pros: {
    label: string;
    items: string[];
  };
  cons: {
    label: string;
    items: string[];
  };
}

export interface ProviderExample {
  name: string;
  features: string[];
}

export interface FreeTier {
  icon: string;
  title: string;
  limit: string;
  limitLink?: string;
  models: string;
  features: string;
}

export interface OverviewMilestone {
  icon: string;
  company: string;
  year: string;
  achievement: string;
}

export interface OverviewChallengePoint {
  icon: string;
  title: string;
  description: string;
}

export interface OverviewLecture {
  topics: string[];
}

export interface AgentSearchItem {
  icon: string;
  name: string;
  provider: string;
  description: string;
  features: string[];
  demo?: string;
}

export interface AgentBrowserItem {
  name: string;
  provider: string;
  description: string;
  capabilities: string[];
  security?: string;
}

export interface AgentCodingItem {
  icon: string;
  name: string;
  provider: string;
  description: string;
  features: string[];
  strengths?: string[];
  security?: string[];
  integration?: string;
  demo?: string;
}

export interface AgentEnterpriseItem {
  icon: string;
  name: string;
  provider: string;
  ecosystem: string;
  description: string;
  integrations: string[];
  advantages: string[];
  releaseInfo?: string;
}

export interface ArchitectureComponent {
  icon: string;
  title: string;
  description: string;
  example?: string;
  diagram?: string;
}

export interface AgentCycleStep {
  step: string;
  icon: string;
  description: string;
}

export interface ArchitectureFeature {
  icon: string;
  title: string;
  description: string;
  benefits: string[];
}

export interface ContentData {
  meta: {
    title: string;
    description: string;
    date: string;
  };
  navigation: {
    brand: string;
    items: Array<{
      id: string;
      href: string;
      label: string;
    }>;
  };
  hero: {
    title: string;
    subtitle: string;
    date: string;
  };
  sections: {
    overview: {
      title: string;
      subtitle: string;
      evolution: {
        heading: string;
        milestones: OverviewMilestone[];
      };
      currentState: {
        modelsCount: {
          title: string;
          count: string;
          description: string;
          examples: string[];
        };
        innovation: {
          title: string;
          features: Array<{
            title: string;
            description: string;
          }>;
        };
      };
      challenge: {
        heading: string;
        description: string;
        points: OverviewChallengePoint[];
      };
      lecture: OverviewLecture;
      resources: {
        heading: string;
        links: Array<{
          label: string;
          url: string;
        }>;
      };
    };
    intro: {
      title: string;
      objectives: {
        heading: string;
        items: ObjectiveItem[];
      };
    };
    models: {
      title: string;
      intro: string;
      filters: Array<{
        value: string;
        label: string;
      }>;
      tableHeaders: Array<{
        key: string;
        label: string;
        sortable: boolean;
      }>;
      priceAnalysis: {
        heading: string;
        insights: Array<{
          label: string;
          text: string;
        }>;
      };
      quantization: {
        heading: string;
        description: string;
        categories: QuantizationCategory[];
      };
      hallucinations: {
        heading: string;
        risks: RiskItem[];
        mitigationStrategies: {
          heading: string;
          items: MitigationItem[];
        };
      };
    };
    engineering: {
      title: string;
      contextEngineering: {
        heading: string;
        contextSizes: ContextSize[];
      };
      contextStrategies: {
        heading: string;
        items: StrategyItem[];
      };
  promptEngineering: {
    heading: string;
    techniques: PromptTechnique[];
  };
  apiTuning: {
    heading: string;
    params: Array<{
      param: string;
      icon: string;
      description: string;
      values: string;
      impact: string;
      visualType: 'slider' | 'switch' | 'input' | 'badge';
    }>;
  };
  problems: {
        heading: string;
        items: ProblemItem[];
      };
    };
    agents: {
      title: string;
      searchAgents: {
        items: AgentSearchItem[];
      };
      browserAgents: {
        icon: string;
        title: string;
        description: string;
        items: AgentBrowserItem[];
      };
      codingAgents: {
        items: AgentCodingItem[];
      };
      enterpriseAgents: {
        items: AgentEnterpriseItem[];
      };
    };
    agentArchitecture: {
      title: string;
      subtitle: string;
      components: {
        heading: string;
        description: string;
        items: ArchitectureComponent[];
      };
      cycle: {
        heading: string;
        description: string;
        steps: AgentCycleStep[];
        features: ArchitectureFeature[];
      };
    };
    tools: {
      title: string;
      comparison: {
        heading: string;
      };
      pricing: {
        heading: string;
        tableHeaders: string[];
        rows: Array<{
          tool: string;
          basic: string;
          advanced: string;
          limits: string;
          features: string;
        }>;
      };
      security: {
        heading: string;
        threats: SecurityThreat[];
      };
      mcp: {
        heading: string;
        intro: string;
        solutions: MCPSolution[];
      };
      optimization: {
        heading: string;
        strategies: OptimizationStrategy[];
      };
      agentModes: {
        heading: string;
        modes: AgentMode[];
      };
      frameworks: {
        heading: string;
        intro: string;
        frameworks: Framework[];
        comparison: FrameworkComparison;
      };
    };
    inference: {
      title: string;
      pricingModels: {
        heading: string;
        models: PricingModel[];
      };
      providers: {
        heading: string;
        thirdParty: {
          title: string;
          examples: ProviderExample[];
        };
        inference: {
          title: string;
          examples: ProviderExample[];
        };
      };
      freeTiers: {
        heading: string;
        tiers: FreeTier[];
      };
    };
    implementation?: any;
  };
  footer: {
    text: string;
  };
  modelComparison: Model[];
  codingAgents: CodingAgent[];
}

// Content data
export const contentData: ContentData = {
  "meta": {
    "title": "AI Coding Agents и LLM для разработчиков | Ноябрь 2025",
    "description": "Детальная презентация для команды разработчиков об использовании AI Coding Agents и LLM в 2025 году",
    "date": "Ноябрь 2025 г."
  },
  "navigation": {
    "brand": "LLM и AI Coding Agents 2025",
    "items": [
      { "id": "overview", "href": "#overview", "label": "Современный ИИ" },
      { "id": "intro", "href": "#intro", "label": "Что меняется?" },
      { "id": "models", "href": "#models", "label": "Модели" },
      { "id": "engineering", "href": "#engineering", "label": "Инженерия" },
      { "id": "agents", "href": "#agents", "label": "Агенты" },
      { "id": "agent-architecture", "href": "#agent-architecture", "label": "Архитектура агентов" },
      { "id": "tools", "href": "#tools", "label": "Coding Agents" },
      { "id": "inference", "href": "#inference", "label": "Провайдеры" }
    ]
  },
  "hero": {
    "title": "LLM и AI Coding Agents для разработчиков",
    "subtitle": "Анализ актуальных решений и подходов",
    "date": "Октябрь 2025 г."
  },
  "sections": {
    "overview": {
      "title": "Короче, про ИИ",
      "subtitle": "",
      "evolution": {
        "heading": "От соперничества к разнообразию",
        "milestones": [
          {
            "icon": "1",
            "company": "OpenAI (ChatGPT)",
            "year": "2022-2023",
            "achievement": "Первопроходцы массового внедрения LLM"
          },
          {
            "icon": "2",
            "company": "Anthropic (Claude)",
            "year": "2023-2024",
            "achievement": "Флагманские модели для программирования"
          },
          {
            "icon": "3",
            "company": "Google (Gemini)",
            "year": "2024",
            "achievement": "Мультимодальность и интеграция с экосистемой"
          },
          {
            "icon": "4",
            "company": "xAI (Grok), Meta (LLaMA)",
            "year": "2024-2025",
            "achievement": "Альтернативные подходы и open-source"
          },
          {
            "icon": "5",
            "company": "DeepSeek, Qwen, GLM, Kimi",
            "year": "2025",
            "achievement": "Китайские модели: высокая производительность, низкая цена"
          }
        ]
      },
      "currentState": {
        "modelsCount": {
          "title": "Актуальные модели сегодня",
          "count": "10+",
          "description": "Топовых моделей, которые можно назвать сходу",
          "examples": [
            "ChatGPT 5",
            "Claude Sonnet/Haiku 4.5",
            "Gemini 2.5 Pro/Flash",
            "Grok 4 / Grok Code",
            "Mistral / Codestral / Devstral",
            "DeepSeek 3.1/3.2",
            "Qwen3",
            "GLM 4.6",
            "Kimi K2",
            "MiniMax M2"
          ]
        },
        "innovation": {
          "title": "Основные возможности",
          "features": [
            {
              "title": "Веб-поиск и интеграции",
              "description": "Real-time retrieval информации из внешних источников (Web Search) и интеграция с API сторонних сервисов. Превращает LLM из замкнутой базы знаний в динамический инструмент взаимодействия с внешним миром."
            },
            {
              "title": "Function calling",
              "description": "Детерминированная генерация структурированных вызовов функций на основе описания их сигнатур. Позволяет модели выступать оркестратором, выбирающим и вызывающим необходимые инструменты для решения задачи."
            },
            {
              "title": "Structured output",
              "description": "Принудительная генерация выходных данных в строгом соответствии с заданной схемой (JSON Schema). Обеспечивает type-safety и надежность при парсинге ответов модели в программном коде."
            },
            {
              "title": "Reasoning (размышления)",
              "description": "Внутренние процессы «рассуждения» (Chain-of-Thought, Thinking tokens), позволяющие модели строить логические цепочки и планировать решение сложных задач перед генерацией финального ответа."
            },
            {
              "title": "Огромные контекстные окна",
              "description": "Поддержка контекста в миллионы токенов (Long Context), позволяющая загружать целые репозитории или объемную документацию для реализации эффективного RAG и In-Context Learning без потери точности."
            },
            {
              "title": "Детальная настройка",
              "description": "Тонкая калибровка параметров семплирования (Temperature, Top-P, Top-K) и штрафов (Frequency/Presence Penalty) для управления энтропией, креативностью и стилем генерации модели под конкретные задачи."
            }
          ]
        }
      },
      "challenge": {
        "heading": "От сложности к возможностям",
        "description": "Информации настолько много, что её анализ требует значительных когнитивных усилий. Но если разобраться — в руках оказывается мощнейший инструмент.",
        "points": [
          {
            "icon": "🔍",
            "title": "Гуглить уже не модно",
            "description": "Ручная обработка данных более не эффективна"
          },
          {
            "icon": "🤯",
            "title": "Когнитивная нагрузка",
            "description": "Программирование, проектирование, анализ, исследования - подходы изменятся"
          },
          {
            "icon": "🆕",
            "title": "Новые методы работы",
            "description": "Интеллектуальная автоматизация, AI ассистенты, агенты и технологии современной разработки"
          },
          {
            "icon": "📚",
            "title": "Цикл лекций",
            "description": "Это обзорная экскурсия по LLM и их возможностям, пройдём по верхам, зацепим агентов, инференс и немного о безопасности"
          }
        ]
      },
      "lecture": {
        "topics": [
          "Современные LLM и их возможности",
          "Какие изменения это привнесёт в способы решения задач и проблем",
          "Существующие языковые модели, их характеристики и особенности работы",
          "Инженерия и инженерный подход при работе с LLM",
          "AI агенты, в частности поисковые, браузерные и coding агенты, архитектура",
          "Актуальные агентские решения: open-source и проприетарные",
          "Способы грамотного использования агентов: безопасность и эффективность",
          "Немного про инференс и провайдеров инференса - чтобы понимать кому платим за токены и как это делать с умом"
        ]
      },
      "resources": {
        "heading": "Полезные ресурсы:",
        "links": [
          {
            "label": "Wikipedia: Большие языковые модели",
            "url": "https://ru.wikipedia.org/wiki/%D0%91%D0%BE%D0%BB%D1%8C%D1%88%D0%B0%D1%8F_%D1%8F%D0%B7%D1%8B%D0%BA%D0%BE%D0%B2%D0%B0%D1%8F_%D0%BC%D0%BE%D0%B4%D0%B5%D0%BB%D1%8C#%D0%A1%D0%BF%D0%B8%D1%81%D0%BE%D0%BA_%D0%B1%D0%BE%D0%BB%D1%8C%D1%88%D0%B8%D1%85_%D1%8F%D0%B7%D1%8B%D0%BA%D0%BE%D0%B2%D1%8B%D1%85_%D0%BC%D0%BE%D0%B4%D0%B5%D0%BB%D0%B5%D0%B9"
          },
          {
            "label": "OpenRouter: Топ моделей",
            "url": "https://openrouter.ai/models?order=top-weekly"
          },
          {
            "label": "Life Architect: Timeline",
            "url": "https://lifearchitect.ai/timeline"
          },
          {
            "label": "Reddit (r/ArtificialInteligence, r/ClaudeAI, r/ChatGPT, r/grok, etc.)",
            "url": "https://www.reddit.com/"
          },
          {
            "label": "(Anthropic) Claude Blog",
            "url": "https://www.claude.com/blog"
          },
          {
            "label": "(OpenAI) News",
            "url": "https://openai.com/news/"
          },
          {
            "label": "(xAI) Grok Blog",
            "url": "https://x.ai/news"
          },
          {
            "label": "(Google) Gemini Blog",
            "url": "https://blog.google/products/gemini/"
          },
          {
            "label": "Awesome AI Driven Development",
            "url": "https://github.com/eltociear/awesome-AI-driven-development"
          }
        ]
      }
    },
    "intro": {
      "title": "Что меняется?",
      "objectives": {
        "heading": "Цель - внедрение генеративных моделей и агентов в рабочие процессы",
        "items": [
          {
            "icon": "⚡",
            "title": "AI не как замена человека, но как инструмент в конкурентной борьбе",
            "description": "Конкурентное <b class='highlighted'>преимущество</b> в скорости создания и доставки \"ценности\". AI ассистент может помочь в исследовании, проектировании, написании кода и дебаге. Это лишь малая доля, из нашей специфики"
          },
          {
            "icon": "🎯",
            "title": "Фокус на идеях, навыке представления идей и дизайне решений",
            "description": "Переход от подхода \"придумал и сделал своими руками\" к <b class='highlighted'>\"спроектировал, сформулировал, получил решение\"</b>. Разработка решений упрощается, возникает обратная связь в процессе"
          },
          {
            "icon": "🔁",
            "title": "Срезаем косты на воспроизводимых задачах",
            "description": "Рутинные задачи решаются с помощью <b class='highlighted'>AI систем</b> и <b class='highlighted'>менеджмента агентов</b>. Агент генерирует код и проверяет гипотезы значительно быстрее человека."
          },
          {
            "icon": "🧠",
            "title": "Системное мышление",
            "description": "Акцент на <b class='highlighted'>тактике и стратегии</b>. Меньше \"ручных задач\" и больше \"планирования\". Развивается навык системного мышления, проще разрабатывать комплексные решения"
          }
        ]
      }
    },
    "models": {
      "title": "Модели",
      "intro": "Сравнительный анализ актуальных моделей для coding и агентных задач",
      "filters": [
        { "value": "all", "label": "Все модели" },
        { "value": "cheap", "label": "Бюджетные (≤$1.0 input)" },
        { "value": "premium", "label": "Премиум (≥$10.0 input)" },
        { "value": "best-rating", "label": "Топ рейтинг (≥90)" }
      ],
      "tableHeaders": [
        { "key": "model", "label": "Модель / Провайдер", "sortable": true },
        { "key": "context_window", "label": "Контекст", "sortable": true },
        { "key": "input_price", "label": "Input ($/1M)", "sortable": true },
        { "key": "output_price", "label": "Output ($/1M)", "sortable": true },
        // { "key": "rating", "label": "Рейтинг", "sortable": true },
        { "key": "strengths", "label": "Ключевые особенности", "sortable": true }
      ],
      "priceAnalysis": {
        "heading": "Сравнение цен на API моделей",
        "insights": [
          {
            "label": "Самые доступные",
            "text": "Grok Code Fast 1 ($0.20/$1.50), DeepSeek V3.1 ($0.20/$0.80), Qwen3 Coder ($0.22/$0.95)"
          },
          {
            "label": "Лучший баланс",
            "text": "GLM 4.6 ($0.50/$1.75), GPT-5 Codex ($1.25/$10.00)"
          },
          {
            "label": "Премиум сегмент",
            "text": "Claude Opus 4.1 ($15.00/$75.00) - наивысшая точность, GPT 5 Pro ($15/$120.00)"
          }
        ]
      },
      "quantization": {
        "heading": "Квантизация моделей и различия в точности",
        "description": "Формат данных влияет на размер модели, скорость инференса и точность результатов",
        "categories": [
          {
            "type": "full",
            "title": "Полная точность",
            "types": ["FP32", "FP16", "BF16"],
            "description": "FP16: ~1-2% потери точности в сравнении с FP32\nBF16: Лучше для больших моделей"
          },
          {
            "type": "reduced",
            "title": "Сжатые форматы",
            "types": ["FP8", "INT8"],
            "description": "INT8: до 10% потери точности\nFP8: Новый стандарт для inference"
          },
          {
            "type": "aggressive",
            "title": "GGUF форматы",
            "types": ["Q4_0", "Q8_0"],
            "description": "Меньшие кванты обладают значительно меньшей точностью"
          }
        ]
      },
      "hallucinations": {
        "heading": "Галлюцинации моделей и неточности в коде",
        "risks": [
          {
            "severity": "critical",
            "icon": "🚨",
            "title": "Slopsquatting атаки",
            "description": "Выдуманные пакеты могут привести к внедрению вредоносного кода",
            "stats": "Злоумышленники создают фальшивые библиотеки"
          },
          {
            "severity": "high",
            "icon": "⚠️",
            "title": "Дефекты",
            "description": "Инструмент несовершеннен. В ИИ-сгенерированном коде при отсутствии проверок остаётся множество ошибок, особенно архитектурных",
            "stats": "Ревью кода критически важно. Human-in-the-loop неизбежен, генеративные модели это не чудо или магия"
          },
          {
            "severity": "medium",
            "icon": "🔍",
            "title": "Переполненный контекст",
            "description": "Несуществующие интерфейсы, API, зацикленность",
            "stats": "Каждые 10к контекста влияют на точность модели, не смотря на популяризацию больших контекстных окон у ведущих моделей. Тот же Gemini 2.5 Pro с 1 млн токенов - чушь, точность слишком низкая уже после первых 200к"
          }
        ],
        "mitigationStrategies": {
          "heading": "Стратегии снижения рисков:",
          "items": [
            {
              "title": "Обязательный код-ревью",
              "description": "Человеческий контроль всего AI-генерированного кода"
            },
            {
              "title": "Ручное управление контекстом",
              "description": "Использование chunking, RAG, context compression"
            },
            {
              "title": "Sandboxing",
              "description": "Изолированное выполнение сгенерированного кода"
            },
            {
              "title": "Валидация зависимостей",
              "description": "Проверка существования пакетов"
            },
            {
              "title": "Static analysis",
              "description": "Автоматические проверки качества кода"
            }
          ]
        }
      }
    },
    "engineering": {
      "title": "Инженерный подход",
      "contextEngineering": {
        "heading": "Контекстное окно и Context Engineering",
        "contextSizes": [
          {
            "type": "small",
            "title": "Малые окна",
            "range": "128-200K tokens",
            "models": "GLM 4.5 Air, GLM 4.5, DeepSeek V3.1"
          },
          {
            "type": "medium",
            "title": "Средние окна",
            "range": "200-400K tokens",
            "models": "Qwen3 Coder 480B, GPT-5, Claude Opus 4.1"
          },
          {
            "type": "large",
            "title": "Большие окна",
            "range": "1M+ tokens",
            "models": "Gemini 2.5 Pro, Claude Sonnet 4.5, Grok 4 Fast"
          }
        ]
      },
      "contextStrategies": {
        "heading": "Стратегии управления контекстом",
        "items": [
          {
            "icon": "📋",
            "title": "Chunking",
            "details": [
              { "label": "Оптимальный размер", "value": "1000-10000 токенов" },
              { "label": "Применение", "value": "Обработка больших кодовых баз" }
            ],
            "benefit": "Последовательность и легкость управления"
          },
          {
            "icon": "🔍",
            "title": "RAG (Retrieval-Augmented Generation)",
            "details": [
              { "label": "Подход", "value": "Selective retrieval" },
              { "label": "Применение", "value": "Работа с документацией, кодовой базой и knowledge базами" }
            ],
            "benefit": "Снижение токенов на 40-80%"
          },
          {
            "icon": "🗜️",
            "title": "Context Compression",
            "details": [
              { "label": "Метод", "value": "Суммаризация" },
              { "label": "Применение", "value": "Длительные сессии" }
            ],
            "benefit": "Сохранение контекста, экономия"
          },
          {
            "icon": "🔄",
            "title": "Query Expansion",
            "details": [
              { "label": "Техника", "value": "Добавление синонимов" },
              { "label": "Применение", "value": "Улучшение поиска" }
            ],
            "benefit": "Более релевантные результаты"
          }
        ]
      },
      "promptEngineering": {
        "heading": "Промпт-инжиниринг для разработчика",
        "techniques": [
          {
            "title": "Few-shot Learning",
            "description": [
              { "label": "Количество примеров", "value": "2-5 примеров input-output" },
              { "label": "Эффективность", "value": "Увеличивает точность на 15-25%" }
            ],
            "example": {
              "label": "Пример",
              "code": "// Пример 1: input\nfunction add(a, b) { return a + b; }\n// output: Функция сложения"
            }
          },
          {
            "title": "Chain-of-Thought",
            "description": [
              { "label": "Подход", "value": "Пошаговое решение" },
              { "label": "Эффективность", "value": "Снижает ошибки на 30-50%" }
            ],
            "example": {
              "label": "Структура промпта",
              "code": "1. Проанализируй требования\n2. Определи архитектуру\n3. Выбери технологии"
            }
          },
          {
            "title": "Role-based Prompting",
            "description": [
              { "label": "Цель", "value": "Определение экспертизы" },
              { "label": "Эффективность", "value": "Улучшает релевантность на 20-35%" }
            ],
            "example": {
              "label": "Пример роли",
              "code": "Ты senior fullstack разработчик с 10+ лет опыта..."
            }
          }
        ]
      },
      "apiTuning": {
        "heading": "Тюнинг инференса через API",
        "params": [
          {
            "param": "Temperature",
            "icon": "🌡️",
            "description": "Креативность vs Детерминизм",
            "values": "0.0 — 2.0",
            "impact": "Для кода используйте 0.0-0.2. Для идей 0.7+",
            "visualType": "slider"
          },
          {
            "param": "Thinking Budget",
            "icon": "🧠",
            "description": "Бюджет на размышления (o1/DeepSeek)",
            "values": "Tokens Limit",
            "impact": "Позволяет модели «подумать» перед ответом (CoT).",
            "visualType": "input"
          },
          {
            "param": "Top P (Nucleus)",
            "icon": "🎯",
            "description": "Разнообразие выборки",
            "values": "0.0 — 1.0",
            "impact": "Ограничивает «хвост» маловероятных токенов.",
            "visualType": "slider"
          },
          {
            "param": "Stop Sequences",
            "icon": "🛑",
            "description": "Триггеры остановки",
            "values": "Array[4]",
            "impact": "Предотвращает генерацию лишнего текста или мусора.",
            "visualType": "badge"
          },
          {
            "param": "Max Output Tokens",
            "icon": "📏",
            "description": "Лимит ответа",
            "values": "Integer",
            "impact": "Hard limit на длину ответа. Экономит деньги.",
            "visualType": "input"
          }
        ]
      },
      "problems": {
        "heading": "Проблемы",
        "items": [
          {
            "icon": "¿?",
            "title": "Lost in the Middle",
            "problem": {
              "description": "Модели теряют информацию в середине контекста",
              "impact": "Критическая информация может быть проигнорирована"
            },
            "solution": {
              "heading": "Решение",
              "items": [
                "Размещение важной информации в начале/конце промпта",
                "Повтор критических фрагментов более 1 раза в запросе",
                "Создаём новые сессии для разных задач",
                "Используем Context compression"
              ]
            }
          },
          {
            "icon": "🎨",
            "title": "Vibe Coding",
            "problem": {
              "description": "Неточные промпты ведут к некачественному коду",
              "impact": "Низкое качество, технический долг"
            },
            "solution": {
              "heading": "AI Assistance Coding подход",
              "items": [
                "Структурированные промпты",
                "Спецификация входных/выходных данных",
                "Определение ограничений и контекста"
              ]
            }
          },
          {
            "icon": "🔄",
            "title": "Context Switching",
            "problem": {
              "description": "Неконсистентность при резкой смене задач в одной сессии",
              "impact": "Смешение контекстов разных задач"
            },
            "solution": {
              "heading": "Решение:",
              "items": [
                "Четкие разделители между задачами",
                "Reset инструкции для новых контекстов",
                "Отдельные сессии для разных проектов"
              ]
            }
          },
          {
            "icon": "🎯",
            "title": "Instruction Following Degradation",
            "problem": {
              "description": "При длинных или сложных инструкциях модель теряет фокус на ключевых требованиях и смешивает задачи",
              "impact": "Частичное или некорректное выполнение ТЗ"
            },
            "solution": {
              "heading": "Решение:",
              "items": [
                "Декомпозиция на несколько коротких запросов",
                "Чёткое разделение system и user инструкций",
                "Контрольные чек-листы требований в конце ответа"
              ]
            }
          },
          {
            "icon": "⚖️",
            "title": "Системные искажения",
            "problem": {
              "description": "Модель наследует предвзятость и стереотипы из обучающих данных",
              "impact": "В коде возможны небезопасные/устаревшие паттерны, смещения при выборе библиотек и API, игнорирование гайдлайнов безопасности"
            },
            "solution": {
              "heading": "Решение:",
              "items": [
                "Валидация результата и статический анализ",
                "Явная конкретизация требований и ограничений (безопасность, стандарты)",
                "Использование проверенных примеров и документации"
              ]
            }
          },
          {
            "icon": "😴",
            "title": "Lazy Generation",
            "problem": {
              "description": "При неоднозначности модель выдаёт приемлемый, но поверхностный ответ без глубокой аналитики",
              "impact": "Недостаточная проработка решений, пропуск крайних и неочевидных случаев"
            },
            "solution": {
              "heading": "Решение:",
              "items": [
                "Явный запрос: «детальный разбор» и «глубокий анализ»",
                "Требование пошагового обоснования и проверки покрытием кейсов",
                "Введение критериев полноты в промпт",
                "Использование SGR, особенно на небольших моделях"
              ]
            }
          }
        ]
      }
    },
    "agents": {
      "title": "Агенты",
      "searchAgents": {
        "items": [
          {
            "icon": "https://framerusercontent.com/images/gcMkPKyj2RX8EOEja8A1GWvCb7E.jpg",
            "name": "Perplexity AI",
            "provider": "Perplexity",
            "description": "Поисковый агент, который в режиме реального времени ищет информацию в интернете и формирует ответ с ссылками на источники. В Pro-режиме умеет проводить углублённый поиск (Pro Search) для сложных вопросов. В Labs-режиме может генерировать целые артефакты (документы, презентации, сайты) на основе найденных данных.",
            "features": [
              "Поиск информации в реальном времени",
              "Ответы с ссылками на источники",
              "Pro Search для углублённого анализа",
              "Генерация артефактов (документы, презентации, сайты)",
              "Модели на выбор"
            ],
          },
          {
            "icon": "https://logos-world.net/wp-content/uploads/2023/02/ChatGPT-Logo.png",
            "name": "ChatGPT — Deep Research",
            "provider": "OpenAI",
            "description": "Специализированный режим ChatGPT для автономных исследований. Агент сам составляет план исследования, многократно бродит по вебу, читает статьи, и по итогу собирает отчёт с цитатами. В 2025 году он получил встроенный визуальный браузер, что позволило просматривать сайты как человек (с рендерингом страниц) прямо внутри агента.",
            "features": [
              "Автономное составление плана исследования",
              "Многократный обход веб-страниц",
              "Чтение и анализ статей",
              "Формирование отчётов с цитатами",
              "Визуальный браузер с рендерингом страниц (2025)"
            ]
          }
        ]
      },
      "browserAgents": {
        "icon": "🌐",
        "title": "AI-браузеры и агенты взаимодействия",
        "description": "Новое поколение браузеров и агентов, способных автономно взаимодействовать с веб-интерфейсами",
        "items": [
          {
            "name": "ChatGPT — Agent Mode",
            "provider": "OpenAI",
            "description": "Общего назначения \"виртуальный компьютерный пользователь\". Этот агент может открывать сайты, нажимать кнопки, логиниться, запускать код/терминал, формировать документы и таблицы. Работает на своем \"виртуальном компьютере\".",
            "capabilities": [
              "Открытие сайтов и навигация",
              "Взаимодействие с элементами (клики, ввод данных)",
              "Авторизация на сайтах",
              "Запуск кода и терминала",
              "Создание документов и таблиц"
            ],
            "security": "Перед выполнением чувствительных действий (удаление файлов, отправка email) обязательно спрашивает разрешение пользователя"
          },
          {
            "name": "Comet / Atlas",
            "provider": "AI Browser Startups",
            "description": "Новое поколение браузеров с AI-агентами. Они способны автономно изучать веб-страницы, выполнять поиск, нажимать на ссылки по запросу пользователя. В целом аналогичны Agent Mode от OpenAI, но как отдельные продукты.",
            "capabilities": [
              "Автономное изучение веб-страниц",
              "Выполнение поиска",
              "Навигация по ссылкам",
              "Извлечение данных"
            ]
          }
        ]
      },
      "codingAgents": {
        "items": [
          {
            "icon": "https://cursor.com/marketing-static/favicon.svg",
            "name": "Cursor",
            "provider": "Cursor",
            "integration": "AI IDE / CLI",
            "description": "Автономный IDE-редактор со встроенным агентом. Понимает весь проект, может вносить изменения сразу в нескольких файлах, запускать код и тесты. Интегрирован с топ-моделями (GPT-5, Claude, Gemini, Grok) для высокого качества подсказок.",
            "features": [
              "Полное понимание проекта",
              "Редактирование нескольких файлов одновременно",
              "Запуск кода и тестов",
              "Интеграция с топ-моделями",
              "Удобный интерфейс"
            ],
            "strengths": [
              "Ориентирован на продуктивность разработчика",
              "Высокое качество подсказок",
              "Есть дешёвые и даже бесплатные модели"
            ]
          },
          {
            "icon": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Claude_AI_symbol.svg/1200px-Claude_AI_symbol.svg.png?20250427183551",
            "name": "Claude Code",
            "provider": "Anthropic",
            "integration": "CLI / IDE",
            "description": "AI-ассистент для кода, работающий через CLI или IDE. Действует как самостоятельный агент: читает весь репозиторий, может параллельно редактировать несколько файлов, запускать тесты и даже делать git-коммиты с осмысленными сообщениями.",
            "features": [
              "Чтение всего репозитория",
              "Параллельное редактирование файлов",
              "Запуск тестов",
              "Git-коммиты с осмысленными сообщениями",
              "Веб-интерфейс и плагины для IDE"
            ],
            "strengths": [
              "Высокая степень автономности",
              "Поддержка \"суб-агентов\" для делегирования задач",
              "Глубокая интеграция с флагманскими моделями Anthropic"
            ]
          }
        ]
      },
      "enterpriseAgents": {
        "items": []
      }
    },
    "agentArchitecture": {
      "title": "Архитектура агентов",
      "subtitle": "Как устроены LLM-ассистенты и агенты под капотом",
      "components": {
        "heading": "Компоненты решения LLM-ассистента",
        "description": "пользователь → LLM → базы знаний → инструменты",
        "items": [
          {
            "icon": "🔗",
            "title": "Интерфейс интеграции",
            "description": "По сути может быть как интерфейсом пользователя, так и \"ручкой\" API, которую можно дёрнуть с определённым payload. Используется для коммуникации с агентом.",
            "diagram": "Ввод → LLM → Поиск по базе знаний → Ответ",
            "example": "Интерфейсом может быть что угодно: чат-бот в вебе, плагин в IDE, API, CLI, TUI, и т.д."
          },
          {
            "icon": "🛠️",
            "title": "Вызов функций (Tools)",
            "description": "Современные API LLM позволяют описать \"инструменты\" – функции с JSON-схемой, которые модель может вызвать вместо продолжения текста. Пример: вы определили функцию createIssue(title, desc) для Jira – если агенту поручают создать тикет, он сформирует запрос с нужными параметрами, и система исполнит вызов функции.",
            "example": "Это надежный способ интеграции: модель сама решает, когда применить инструмент, а платформа гарантирует корректность формата и выполнит действие",
            "diagram": "LLM выбирает между генерацией текста и вызовом функции"
          },
          {
            "icon": "🔍",
            "title": "RAG (Retrieval-Augmented Generation)",
            "description": "Перед генерацией ответа ассистент делает поиск по корпоративной базе знаний. Например, по вопросу \"Как у нас реализована аутентификация?\" система найдёт в документации и коде соответствующие разделы и передаст их модели.",
            "example": "LLM, благодаря этому, отвечает опираясь на факты из вашей базы (меньше \"галлюцинаций\", релевантные ответы)"
          },
          {
            "icon": "🧠",
            "title": "Память",
            "description": "Память агента может быть краткосрочной (ограничена контекстным окном) или долговременной (во внешней базе знаний, обладающей функцией \"запомнить\", \"вспомнить\" и \"забыть\").",
            "example": "Информация «Я купил iPhone 17 Pro Max» в текущем чате — это краткосрочная память. Если агент сохранит этот факт в базу знаний и сможет «вспомнить» его в новой сессии через неделю — это долговременная память."
          }
        ]
      },
      "cycle": {
        "heading": "Think-Act Loop",
        "description": "Как агент решает сложную задачу через итеративный процесс",
        "steps": [
          {
            "step": "Восприятие",
            "icon": "👁️",
            "description": "Агент получает ввод: текст запроса, содержимое файлов, результаты предыдущих действий"
          },
          {
            "step": "Планирование",
            "icon": "🧠",
            "description": "Генерирует план действий или псевдокод решения, разбивает задачу на шаги"
          },
          {
            "step": "Действие",
            "icon": "⚡",
            "description": "Выполняет первый шаг плана, возможно вызывает инструмент/API"
          },
          {
            "step": "Наблюдение",
            "icon": "📊",
            "description": "Анализирует результат действия, сохраняет в память контекста"
          },
          {
            "step": "Повтор цикла",
            "icon": "🔄",
            "description": "Цикл повторяется для следующего шага, пока задача не выполнена"
          }
        ],
        "features": [
          {
            "icon": "💾",
            "title": "Внутренняя память",
            "description": "Результаты каждого шага сохраняются агентом – либо в краткосрочном контексте (prompt), либо в долговременной памяти через RAG",
            "benefits": [
              "Учёт предыдущих шагов при планировании",
              "Накопление знаний в процессе работы",
              "Возможность возврата к предыдущим решениям"
            ]
          },
          {
            "icon": "👥",
            "title": "Мульти-агентность",
            "description": "Несколько агентов с разными ролями общаются друг с другом или работают под началом оркестратора",
            "benefits": [
              "Распределение задач между агентами",
              "Параллельное выполнение работы",
              "Специализация агентов по ролям (один пишет код, другой проверяет тесты)"
            ]
          },
          {
            "icon": "📝",
            "title": "Логирование и контроль",
            "description": "Все запросы, ответы модели и вызовы функций логируются. Это критично для отладки и аудита",
            "benefits": [
              "Анализ решений агента",
              "Максимальное число итераций цикла (защита от зацикливания)",
              "Таймаут по времени",
              "Белый список разрешённых инструментов"
            ]
          },
          {
            "icon": "🎯",
            "title": "Фреймворки реализации",
            "description": "LangChain, LangGraph упрощают реализацию цикла \"Обдумать → Действовать → Получить результат → Обдумать дальше\"",
            "benefits": [
              "Упрощённая разработка агентов",
              "Готовые паттерны планирования",
              "Интеграция с популярными LLM"
            ]
          }
        ]
      }
    },
    "tools": {
      "title": "Coding Agents",
      "comparison": {
        "heading": "Агенты для кодинга"
      },
      "pricing": {
        "heading": "Стоимость, тарифы, ограничения и лимиты",
        "tableHeaders": ["Инструмент", "Базовый тариф", "Продвинутый", "Лимиты", "Особенности"],
        "rows": [
          {
            "tool": "GitHub Copilot",
            "basic": "Free",
            "advanced": "Pro ($10/мес), Pro+ ($39/мес)",
            "limits": "2 000 автодополнений + 50 премиум-запросов (Free)",
            "features": "VS Code, JetBrains"
          },
          {
            "tool": "Cursor",
            "basic": "Hobby (Free)",
            "advanced": "Pro ($20/мес), Ultra ($200/мес)",
            "limits": "2 000 автодополнений + 50 медленных запросов",
            "features": "Composer, Background Agents"
          },
          {
            "tool": "Windsurf",
            "basic": "Free ($0)",
            "advanced": "Pro ($15/мес), Enterprise ($60/мес/польз.)",
            "limits": "25 кредитов/мес (Free), 500 кредитов/мес (Pro)",
            "features": "Cascade, кредитная система"
          }
        ]
      },
      "security": {
        "heading": "Безопасность и ограничения",
        "threats": [
          {
            "severity": "critical",
            "icon": "🔒",
            "title": "Data Exposure",
            "description": "Доступ агентов к чувствительным данным",
            "mitigation": {
              "label": "Способы снизить риски",
              "text": "Ограничение доступа, env variables"
            }
          },
          {
            "severity": "medium",
            "icon": "🛠️",
            "title": "Tool Misuse",
            "description": "Злоупотребление инструментами",
            "mitigation": {
              "label": "Способы снизить риски",
              "text": "Whitelist команд, ручной акцепт"
            }
          }
        ]
      },
      "mcp": {
        "heading": "MCP (Model Context Protocol, суть function calling)",
        "intro": "MCP позволяет AI агентам взаимодействовать с внешними системами",
        "solutions": [
          {
            "type": "database",
            "icon": "🗄️",
            "title": "PostgreSQL MCP",
            "description": "Безопасный доступ к базам данных",
            "useCase": "Database queries, schema analysis",
            "features": [
              "Read-only по умолчанию",
              "Query validation",
              "Connection pooling"
            ]
          },
          {
            "type": "context",
            "icon": "🔍",
            "title": "Context7",
            "description": "Актуальная документация для библиотек",
            "useCase": "Интеграция версионно-специфичной документации",
            "features": [
              "Documentation lookup",
              "API documentation"
            ]
          },
        ]
      },
      "optimization": {
        "heading": "Способы получить сильное решение на основе дешёвых моделей",
        "strategies": [
          {
            "icon": "🔄",
            "title": "Ансамбли моделей",
            "description": "Комбинация нескольких дешёвых моделей (в т.ч. автоматизированные пайплайны и воркфлоу)",
            "result": "Gemini 2.5 Pro для брейншторма концепции + Claude Haiku 4.5 для архитектуры + Grok Code для кодинга"
          },
          {
            "icon": "🎓",
            "title": "Fine-tuning",
            "description": "Дообучение моделей на специфической предметной области и задачах",
            "result": "Превосходство в узкой области, конкретных задачах, даже на \"простых\" моделях"
          },
          {
            "icon": "🔍",
            "title": "Retrieval Augmented Generation (RAG)",
            "description": "Улучшение контекста через внешние источники информации",
            "effect": "Дешёвая модель + качественный контекст = сильное решение"
          }
        ]
      },
      "agentModes": {
        "heading": "Режимы кодинг-агентов",
        "modes": [
          {
            "type": "agent",
            "icon": "🤖",
            "title": "Agent Mode",
            "description": "Автономное выполнение комплексных задач с минимальным участием пользователя",
            "features": [
              "Автоматическое планирование и выполнение задач",
              "Работа с файловой системой",
              "Выполнение команд в терминале",
              "Управление зависимостями и окружением"
            ],
            "tools": "Cursor, Codex (GPT-5), Claude Code, GitHub Copilot, Gemini CLI, OpenCode"
          },
          {
            "type": "plan",
            "icon": "📋",
            "title": "Plan Mode",
            "description": "Планирование задач и декомпозиция на этапы",
            "features": [
              "Анализ требований",
              "Составление плана выполнения",
              "Оценка рисков и зависимостей",
              "Предложение архитектурных решений"
            ],
            "tools": "Cursor, Windsurf, Cline"
          },
          {
            "type": "ask",
            "icon": "💬",
            "title": "Ask/Chat Mode",
            "description": "Интерактивное общение для получения советов и ответов",
            "features": [
              "Ответы на технические вопросы",
              "Объяснение кода",
              "Рекомендации по best practices",
              "Помощь в отладке"
            ],
            "tools": "Cursor, Codex (GPT-5), Kilo Code, RooCode"
          },
          {
            "type": "code",
            "icon": "💻",
            "title": "Code Mode",
            "description": "Прямое написание и модификация кода с автодополнением",
            "features": [
              "Auto-completion в реальном времени",
              "Code generation по описанию",
              "Рефакторинг существующего кода",
              "Исправление ошибок и багов"
            ],
            "tools": "GitHub Copilot, Kilo Code, RooCode"
          },
          {
            "type": "architect",
            "icon": "🏗️",
            "title": "Architect Mode",
            "description": "Проектирование архитектуры и системный дизайн",
            "features": [
              "Планирование архитектуры приложения",
              "Выбор технологического стека",
              "Проектирование схемы БД",
              "Планирование API и интеграций"
            ],
            "tools": "Kilo Code, RooCode"
          },
          {
            "type": "debug",
            "icon": "🪲",
            "title": "Debug Mode",
            "description": "Отладка и диагностика проблем",
            "features": [
              "Анализ stack traces",
              "Поиск причин ошибок",
              "Предложение исправлений",
              "Профилирование производительности"
            ],
            "tools": "Kilo Code, RooCode"
          },
          {
            "type": "orchestrator",
            "icon": "🪃",
            "title": "Orchestrator Mode",
            "description": "Координация работы нескольких агентов и задач",
            "features": [
              "Управление workflow между агентами",
              "Распределение задач",
              "Контроль выполнения",
              "Агрегация результатов"
            ],
            "tools": "Kilo Code, RooCode"
          },
          {
            "type": "subagents",
            "icon": "👥",
            "title": "Subagents Mode",
            "description": "Создание и управление специализированными субагентами",
            "features": [
              "Делегирование специализированных задач",
              "Параллельное выполнение",
              "Специализация по доменам",
              "Координация между субагентами"
            ],
            "tools": "Claude Code, OpenCode"
          }
        ]
      },
      "frameworks": {
        "heading": "Фреймворки Spec-Driven Development",
        "intro": "Структурированные подходы к разработке с AI агентами: от спецификации к реализации",
        "frameworks": [
          {
            "name": "BMAD",
            "fullName": "Breakthrough Method for Agile AI-Driven Development",
            "icon": "📋",
            "approach": "Top-Down, Process-Driven",
            "role": "Человек — высокоуровневый оркестратор",
            "level": "Макро-уровень",
            "description": "Комплексная система с командой специализированных AI агентов для создания детальных спецификаций",
            "features": [
              "12+ специализированных агентов",
              "34+ воркфлоу для планирования",
              "Агенты как код (markdown + YAML)",
              "Автоматическая документация",
              "Task sharding",
              "Automated testing"
            ],
            "useCases": [
              "Крупные проекты с детальным планированием",
              "Командная разработка",
              "Agile-процессы с AI"
            ],
            "structure": {
              "core": "Core framework + BMad Master agent",
              "bmm": "BMad Method (12 agents, 34 workflows)",
              "bmb": "BMad Builder (1 agent, 7 workflows)",
              "cis": "Creative Intelligence (5 agents)"
            }
          },
          {
            "name": "GitHub Spec-Kit",
            "fullName": "GitHub Spec-Driven Development Toolkit",
            "icon": "🔧",
            "approach": "Bottom-Up и Developer-Centric",
            "role": "Человек — имплементатор",
            "level": "Микро-уровень",
            "description": "Легковесный тулкит для структурированного workflow: specification → plan → tasks → implementation",
            "features": [
              "CLI для управления процессом",
              "Slash-команды (/specify, /plan, /tasks)",
              "Constitution.md для принципов проекта",
              "Интеграция с 11+ AI агентами",
              "Кросс-артефактная консистентность",
              "Quality checklists"
            ],
            "useCases": [
              "Индивидуальная разработка",
              "Быстрое прототипирование",
              "Структурирование существующих проектов"
            ],
            "workflow": [
              "Инициализация проекта",
              "Создание спецификации",
              "Планирование задач",
              "Имплементация с AI"
            ]
          },
          {
            "name": "OpenSpec",
            "fullName": "Open Specification Framework",
            "icon": "📝",
            "approach": "Bottom-Up и Developer-Centric",
            "role": "Человек — имплементатор",
            "level": "Микро-уровень",
            "description": "Самый легковесный spec-driven фреймворк",
            "features": [
              "Proposal-based workflow",
              "Минимальная настройка",
              "Валидация реализации на соответствие"
            ],
            "useCases": [
              "Проекты с ограниченным бюджетом",
              "Работа с локальными моделями",
              "Максимальная гибкость и простота использования"
            ],
            "workflow": [
              "Создание proposal",
              "Согласование спецификации",
              "Реализация по утверждённой spec"
            ]
          }
        ],
        "comparison": {
          "heading": "Сравнение подходов",
          "aspects": [
            {
              "aspect": "Философия",
              "bmad": "Top-Down, Process Driven System",
              "specKit": "Bottom-Up и Developer-Centric",
              "openSpec": "Bottom-Up и Developer-Centric"
            },
            {
              "aspect": "Роль человека",
              "bmad": "Высокоуровневый оркестратор",
              "specKit": "Имплементатор",
              "openSpec": "Имплементатор"
            },
            {
              "aspect": "Уровень работы",
              "bmad": "Макро-уровень (стратегия)",
              "specKit": "Микро-уровень (тактика)",
              "openSpec": "Микро-уровень (тактика)"
            }
          ]
        }
      }
    },
    "inference": {
      "title": "Inference и провайдеры",
      "pricingModels": {
        "heading": "Варианты использования: pay-as-you-go vs подписки",
        "models": [
          {
            "type": "payg",
            "icon": "💳",
            "title": "Pay-as-you-go",
            "priceRange": "$0.00-100.00+ за 1M токенов",
            "pros": {
              "label": "Преимущества",
              "items": [
                "Гибкость в использовании",
                "Нет фиксированных затрат",
                "Идеально для тестирования"
              ]
            },
            "cons": {
              "label": "Недостатки",
              "items": [
                "Непредсказуемые расходы",
                "Сложность бюджетирования"
              ]
            }
          },
          {
            "type": "subscription",
            "icon": "📅",
            "title": "Подписки",
            "priceRange": "$10-200+/месяц",
            "pros": {
              "label": "Преимущества",
              "items": [
                "Предсказуемые затраты",
                "Простое бюджетирование"
              ]
            },
            "cons": {
              "label": "Недостатки",
              "items": [
                "Переплата при низком использовании",
                "Привязка к провайдеру"
              ]
            }
          }
        ]
      },
      "providers": {
        "heading": "Third-party и Inference провайдеры",
        "thirdParty": {
          "title": "Third-party провайдеры",
          "examples": [
            {
              "name": "OpenRouter",
              "features": [
                "Единый API для 500+ моделей",
                "Сравнение цен в реальном времени",
                "Аналитика использования моделей пользователями сервиса (инструменты, популярность)",
                "Детальные сведения о моделях"
              ]
            },
            {
              "name": "CometAPI",
              "features": [
                "Специализация на coding моделях",
                "Конкурентные цены"
              ]
            },
            {
              "name": "Requesty AI",
              "features": ["250+ LLM", "Умный роутинг", "Встроенные Guardrails"]
            }
          ]
        },
        "inference": {
          "title": "Inference провайдеры",
          "examples": [
            {
              "name": "Anthropic",
              "features": ["Прямой доступ к Anthropic моделям"]
            },
            {
              "name": "OpenAI",
              "features": ["Прямой доступ к OpenAI моделям"]
            },
            {
              "name": "Google",
              "features": ["Прямой доступ к Google моделям"]
            },
            {
              "name": "AWS Bedrock",
              "features": ["Прямой доступ к Anthropic, DeepSeek, Mistral и LLaMA моделям"]
            },
            {
              "name": "Groq",
              "features": ["Ультра-быстрый inference на моделях среднего класса (openweights)"]
            }
          ]
        }
      },
      "freeTiers": {
        "heading": "Периодические бесплатные модели",
        "tiers": [
          {
            "icon": "🔄",
            "title": "OpenRouter",
            "limit": "Ротация бесплатных моделей",
            "models": "Меняются еженедельно",
            "features": "Доступ к premium моделям"
          },
          {
            "icon": "🤖",
            "title": "Cursor/Kilo Code/Cline/Windsurf",
            "limit": "Есть Free Tier, лимиты зависят от решения",
            "models": "OpenAI, Claude, MoonshotAI, xAI, Google, etc. Интеграция с IDE (плагины, standalone IDE как Cursor)",
            "features": ""
          },
          {
            "icon": "🔬",
            "title": "Google AI Studio",
            "limit": "Значительные Free Tier лимиты через AI Studio, в т.ч. Gemini CLI",
            "models": "Gemini Pro, Flash 60 RPM / 1,000 RPD с личным аккаунтом Google",
            "features": ""
          }
        ]
      }
    }
  },
  "footer": {
    "text": "Данные актуальны на октябрь 2025 года."
  },
  "modelComparison": [
    {
      "model": "Claude Sonnet 4.5",
      "id": "anthropic/claude-sonnet-4.5",
      "context_window": "1,000,000 tokens",
      "input_price": "$3.00",
      "output_price": "$15.00",
      "provider": "Anthropic",
      "release_date": "29 сентября 2025",
      "rating": 97,
      "strengths": "Лучший для coding (77.2% SWE-bench), agents, 30+ часов фокуса"
    },
    {
      "model": "Grok 4 Fast",
      "id": "x-ai/grok-4-fast",
      "context_window": "2,000,000 tokens",
      "input_price": "$0.20",
      "output_price": "$0.50",
      "provider": "xAI",
      "release_date": "Сентябрь 2025",
      "rating": 92,
      "strengths": "Огромный контекст (2M токенов), дешево, быстрый inference"
    },
    {
      "model": "GPT-5",
      "id": "openai/gpt-5",
      "context_window": "400,000 tokens",
      "input_price": "$1.25",
      "output_price": "$10.00",
      "provider": "OpenAI",
      "release_date": "Август 2025",
      "rating": 92,
      "strengths": "Reasoning с thinking tokens, баланс цена/качество"
    },
    {
      "model": "GPT-5 Codex",
      "id": "openai/gpt-5-codex",
      "context_window": "400,000 tokens",
      "input_price": "$1.25",
      "output_price": "$10.00",
      "provider": "OpenAI",
      "release_date": "Сентябрь 2025",
      "rating": 91,
      "strengths": "Специализация на coding"
    },
    {
      "model": "Qwen3 Coder 480B A35B",
      "id": "qwen/qwen3-coder",
      "context_window": "262,144 tokens",
      "input_price": "$0.22",
      "output_price": "$0.95",
      "provider": "Alibaba",
      "release_date": "Июль 2025",
      "rating": 91,
      "strengths": "480B params (35B active), agentic coding (69.6% SWE-bench)"
    },
    {
      "model": "DeepSeek V3.1",
      "id": "deepseek/deepseek-chat-v3.1",
      "context_window": "163,840 tokens",
      "input_price": "$0.20",
      "output_price": "$0.80",
      "provider": "DeepSeek",
      "release_date": "Август 2025",
      "rating": 88,
      "strengths": "685B params (37B active), open-weight, очень дешевый"
    },
    {
      "model": "Gemini 2.5 Pro",
      "id": "google/gemini-2.5-pro",
      "context_window": "1,048,576 tokens",
      "input_price": "$1.25",
      "output_price": "$10.00",
      "provider": "Google",
      "release_date": "Май 2025",
      "rating": 87,
      "strengths": "Мультимодальность, Deep Think, большой контекст"
    },
    {
      "model": "GPT-5 Mini",
      "id": "openai/gpt-5-mini",
      "context_window": "400,000 tokens",
      "input_price": "$0.25",
      "output_price": "$2.00",
      "provider": "OpenAI",
      "release_date": "Август 2025",
      "rating": 86,
      "strengths": "Самый дешевый в GPT-5 семье, reasoning, быстрый"
    },
    {
      "model": "Claude Opus 4.1",
      "id": "anthropic/claude-opus-4.1",
      "context_window": "200,000 tokens",
      "input_price": "$15.00",
      "output_price": "$75.00",
      "provider": "Anthropic",
      "release_date": "4 августа 2025",
      "rating": 82,
      "strengths": "Высокая точность (74.5% SWE-bench), премиум модель"
    },
    {
      "model": "GLM 4.6",
      "id": "z-ai/glm-4.6",
      "context_window": "202,752 tokens",
      "input_price": "$0.50",
      "output_price": "$1.75",
      "provider": "Z.AI",
      "release_date": "Сентябрь 2025",
      "rating": 79,
      "strengths": "357B параметров (32B активных)"
    }
  ],
    "codingAgents": [
      // Vendor Lock-in (Проприетарные решения)
      {
        "tool": "Cursor",
        "pricing": {
          "base": "$20/месяц (Pro)",
          "extended": "$200/месяц (Ultra)",
          "freeTier": "Бесплатный Hobby-план"
        },
        "limits": {
          "usagePool": "$20 эквивалент использования/месяц",
          "overages": "Оплаты по API-ставкам"
        },
        "features": [
          "Полное понимание кодовой базы",
          "Composer для редактирования файлов",
          "Фоновые агенты",
          "Режим MAX"
        ],
        "rating": 92,
        "modes": ["Agent", "Plan", "Ask"],
        "type": "vendor-lockin"
      },
      {
        "tool": "Codex (GPT-5)",
        "pricing": {
          "base": "$20/месяц (через ChatGPT Plus)",
          "extended": "$39/месяц (через Copilot Pro+) / API доступ",
          "freeTier": "Нет бесплатного доступа"
        },
        "limits": {
          "usage": "Зависит от уровня подписки, сброс лимитов каждые 5 часов",
          "reasoning": "Адаптивное рассуждение от секунд до 7 часов на задачу"
        },
        "features": [
          "Адаптивное рассуждение для сложных задач",
          "Несколько моделей с разным уровнем reasoning (GPT-5, GPT-5.1-Codex)",
          "Интеграция с VS Code, JetBrains, GitHub Copilot",
          "Рефакторинг и code review"
        ],
        "rating": 90,
        "modes": ["Agent", "Chat", "Interactive Pairing"],
        "type": "vendor-lockin"
      },
      {
        "tool": "Claude Code",
        "pricing": {
          "base": "$20/месяц (Pro)",
          "extended": "$60/месяц (Max) / $200/месяц (Ultra)",
          "freeTier": "Нет бесплатного плана"
        },
        "limits": {
          "usage": "Через подписку Claude Pro/Max/Ultra",
          "infrastructure": "Управляемая облачная инфраструктура Anthropic"
        },
        "features": [
          "CLI и веб-интерфейс на claude.ai",
          "Асинхронное выполнение задач",
          "Интеграция с Git, Docker, Kubernetes, npm, pip, AWS CLI",
          "Claude Agent SDK для создания агентов"
        ],
        "rating": 88,
        "modes": ["Agent", "Subagents", "Skills"],
        "type": "vendor-lockin"
      },
      {
        "tool": "GitHub Copilot",
        "pricing": {
          "base": "$10/месяц (Pro)",
          "extended": "$39/месяц (Enterprise)",
          "freeTier": "Бесплатно для студентов и maintainers"
        },
        "limits": {
          "completions": "Неограниченно (Pro)",
          "premiumRequests": "300/месяц (Pro), 1000/месяц (Enterprise)"
        },
        "features": [
          "Поддержка множества IDE",
          "Copilot Chat и автозавершение",
          "Доступ к премиум-моделям (GPT-4.5, GPT-5)",
          "Custom models на вашей кодовой базе (Enterprise)"
        ],
        "rating": 85,
        "modes": ["Agent", "Chat", "Code completion"],
        "type": "vendor-lockin"
      },
      {
        "tool": "Windsurf",
        "pricing": {
          "base": "$15/месяц (Pro)",
          "extended": "$30/месяц (Teams), но лимиты как в Pro",
          "freeTier": "Бесплатно для персональной разработки (лимиты)"
        },
        "limits": {
          "promptCredits": "Упрощённая система, без Flow Action credits"
        },
        "features": [
          "Чистый UX и Cascade-редактирование",
          "Поддержка всех ведущих моделей",
          "Развертывание приложений",
          "Упрощённая модель ценообразования (v2)"
        ],
        "rating": 82,
        "modes": ["Agent (Cascade)", "Plan"],
        "type": "vendor-lockin"
      },
      {
        "tool": "Gemini Code Assist (Gemini CLI)",
        "pricing": {
          "base": "$20/месяц",
          "extended": "$45/месяц (Enterprise)",
          "freeTier": "Бесплатно для индивидуальных разработчиков с ежедневными лимитами"
        },
        "limits": {
          "usage": "Базовая версия бесплатна",
          "apiLimits": "Повышенные лимиты с Google AI Pro/Ultra подпиской"
        },
        "features": [
          "Глубокая интеграция с GCP",
          "Интеграция с Google Search",
          "Поддержка мультимодальных входов (PDF, изображения)"
        ],
        "rating": 80,
        "modes": ["Agent", "Terminal"],
        "type": "vendor-lockin"
      },

      // Open Source / BYOK (Bring Your Own Key)
      {
        "tool": "Cline",
        "pricing": {
          "base": "Open Source (Free)",
          "extended": "Оплата только за API ключи",
          "freeTier": "Полностью бесплатное open-source"
        },
        "limits": {
          "usage": "Неограниченно, оплата только за API",
          "costControl": "Полный контроль через BYOK"
        },
        "features": [
          "Расширение для VS Code",
          "Модель BYOK (Bring Your Own Key)",
          "Открытый исходный код",
          "Режимы Plan & Act",
          "Полный контроль над расходами"
        ],
        "rating": 78,
        "modes": ["Plan", "Act"],
        "type": "open-source"
      },
      {
        "tool": "Kilo Code",
        "pricing": {
          "base": "Open Source (Free)",
          "extended": "Оплата только за API ключи используемых моделей",
          "freeTier": "Полностью бесплатное open-source"
        },
        "limits": {
          "usage": "Неограниченно, оплата только за выбранные API",
          "costControl": "Полный контроль через BYOK (400+ LLM)"
        },
        "features": [
          "Расширение для VS Code и JetBrains",
          "Поддержка 400+ LLM моделей (включая локальные)",
          "Прозрачность и полный контроль над расходами"
        ],
        "rating": 85,
        "modes": ["Architect", "Code", "Ask", "Debug", "Orchestrator"],
        "type": "open-source"
      },
      {
        "tool": "RooCode",
        "pricing": {
          "base": "Open Source (Free)",
          "extended": "Оплата только за API ключи",
          "freeTier": "Полностью бесплатное open-source"
        },
        "limits": {
          "usage": "Неограниченно, оплата только за API",
          "costControl": "Полный контроль через BYOK (400+ моделей)"
        },
        "features": [
          "Глубокая интеграция с VS Code",
          "Чтение/запись нескольких файлов одновременно",
          "Автоматизация от требований до реализации",
          "Выполнение команд в терминале и отладка",
          "Автоматизация браузера",
          "Управление контекстом кодовой базы через чат",
          "Сохранение намерений в многошаговых сессиях",
          "Откат при ошибках и автоповтор",
          "Совместимость с множеством моделей"
        ],
        "rating": 83,
        "modes": ["Architect", "Code", "Ask", "Debug", "Orchestrator"],
        "type": "open-source"
      },
      {
        "tool": "OpenCode",
        "pricing": {
          "base": "Open Source (Free)",
          "extended": "Оплата только за кредиты выбранной AI модели",
          "freeTier": "Полностью бесплатное open-source"
        },
        "limits": {
          "usage": "Неограниченно, оплата только за использование API моделей",
          "costControl": "Полный контроль через BYOK (75+ провайдеров)"
        },
        "features": [
          "Терминальный AI агент для кодирования",
          "Нативный TUI (Terminal User Interface) с темизацией",
          "Автоматическая загрузка LSP для контекстного взаимодействия",
          "Мультисессионность (параллельные AI агенты)",
          "Поддержка 75+ LLM провайдеров (включая локальные модели)",
          "Генерация ссылок для шаринга сессий",
          "Интеграция с Claude, OpenAI, Google, и локальными моделями"
        ],
        "rating": 80,
        "modes": ["Agent", "Subagents", "Commands"],
        "type": "open-source"
      },
      
    ]
};
