# Руководство по развертыванию

## Vercel (Рекомендуется)

### Автоматическое развертывание

1. Отправьте код в GitHub репозиторий
2. Перейдите на [vercel.com](https://vercel.com)
3. Нажмите "Import Project"
4. Выберите ваш репозиторий
5. Vercel автоматически определит Next.js и настроит сборку
6. Нажмите "Deploy"

### CLI развертывание

```bash
# Установите Vercel CLI
npm i -g vercel

# Войдите в аккаунт
vercel login

# Разверните проект
vercel
```

## Netlify

### Автоматическое развертывание

1. Отправьте код в GitHub репозиторий
2. Перейдите на [netlify.com](https://netlify.com)
3. Нажмите "Add new site" → "Import an existing project"
4. Выберите ваш репозиторий
5. Настройте параметры сборки:
   - **Build command:** `npm run build`
   - **Publish directory:** `.next`
6. Нажмите "Deploy"

## Самостоятельный хостинг (Self-hosting)

### С помощью Docker

Создайте `Dockerfile`:

```dockerfile
FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm ci

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN npm run build

# Production image
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

CMD ["node", "server.js"]
```

Сборка и запуск:

```bash
docker build -t ai-presentation .
docker run -p 3000:3000 ai-presentation
```

### На VPS/облачном сервере

1. **Установите Node.js 18+**

```bash
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs
```

2. **Клонируйте репозиторий**

```bash
git clone <your-repo-url>
cd ai-presentation
```

3. **Установите зависимости**

```bash
npm install
```

4. **Соберите проект**

```bash
npm run build
```

5. **Запустите с PM2**

```bash
# Установите PM2
npm install -g pm2

# Запустите приложение
pm2 start npm --name "ai-presentation" -- start

# Сохраните конфигурацию
pm2 save
pm2 startup
```

6. **Настройте Nginx (опционально)**

```nginx
server {
    listen 80;
    server_name your-domain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

## Переменные окружения

Если вам нужны переменные окружения, создайте файл `.env.local`:

```env
# Пример переменных окружения
NEXT_PUBLIC_API_URL=https://api.example.com
```

## Оптимизация производительности

### 1. Включите сжатие

В `next.config.js`:

```javascript
module.exports = {
  compress: true,
}
```

### 2. Настройте кеширование

В `next.config.js`:

```javascript
module.exports = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },
}
```

### 3. Используйте CDN

Настройте CDN для статических ресурсов в `next.config.js`:

```javascript
module.exports = {
  assetPrefix: 'https://cdn.example.com',
}
```

## Мониторинг

### Vercel Analytics

Vercel автоматически предоставляет аналитику для проектов.

### Google Analytics

Добавьте в `app/layout.tsx`:

```tsx
import Script from 'next/script'

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GA_MEASUREMENT_ID');
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  )
}
```

## Troubleshooting

### Ошибка "Module not found"

Убедитесь, что все зависимости установлены:

```bash
rm -rf node_modules package-lock.json
npm install
```

### Ошибки TypeScript

Проверьте типы:

```bash
npm run build
```

### Проблемы с портами

Измените порт в `package.json`:

```json
{
  "scripts": {
    "dev": "next dev -p 3001"
  }
}
```

## Полезные команды

```bash
# Проверка типов
npm run type-check

# Линтинг
npm run lint

# Сборка
npm run build

# Запуск production сервера
npm run start

# Анализ бандла
npm run analyze
```

