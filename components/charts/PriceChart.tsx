'use client';

import { useMemo, memo } from 'react';
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  TooltipProps,
} from 'recharts';
import { Model } from '@/lib/content-data';

interface PriceChartProps {
  models: Model[];
}

interface ChartDataPoint {
  x: number;
  y: number;
  models: Model[];
  count: number;
  maxRating: number;
}

export const PriceChart = memo(function PriceChart({ models }: PriceChartProps) {
  const chartData = useMemo(() => {
    // Группируем модели по координатам (input_price, output_price)
    const groupedModels = new Map<string, Model[]>();
    
    models.forEach((model) => {
      const x = parseFloat(model.input_price.replace(/[^\d.]/g, ''));
      const y = parseFloat(model.output_price.replace(/[^\d.]/g, ''));
      const key = `${x}_${y}`;
      
      if (!groupedModels.has(key)) {
        groupedModels.set(key, []);
      }
      groupedModels.get(key)!.push(model);
    });
    
    // Создаем данные для графика
    const data: ChartDataPoint[] = [];
    groupedModels.forEach((groupModels) => {
      const x = parseFloat(groupModels[0].input_price.replace(/[^\d.]/g, ''));
      const y = parseFloat(groupModels[0].output_price.replace(/[^\d.]/g, ''));
      const maxRating = Math.max(...groupModels.map((m) => m.rating));
      
      data.push({
        x,
        y,
        models: groupModels,
        count: groupModels.length,
        maxRating,
      });
    });
    
    return data;
  }, [models]);

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload as ChartDataPoint;
      return (
        <div className="bg-background border border-border rounded-lg shadow-lg p-4 max-w-sm">
          {data.count > 1 ? (
            <>
              <p className="font-semibold mb-2">{data.count} модели в этой точке</p>
              <p className="text-sm text-muted-foreground mb-2">
                Input: ${data.x}, Output: ${data.y}
              </p>
              <div className="space-y-1">
                {data.models.map((model, idx) => (
                  <div key={idx} className="text-sm">
                    • {model.model}
                    {/*<span className="text-muted-foreground">(рейтинг: {model.rating})</span>*/}
                  </div>
                ))}
              </div>
            </>
          ) : (
            <>
              <p className="font-semibold mb-2">{data.models[0].model}</p>
              <p className="text-sm text-muted-foreground">
                Input: ${data.x}, Output: ${data.y}
              </p>
              {/*<p className="text-sm text-muted-foreground">*/}
              {/*  Рейтинг: {data.models[0].rating}*/}
              {/*</p>*/}
            </>
          )}
        </div>
      );
    }
    return null;
  };

  return (
    <ResponsiveContainer width="100%" height={400}>
      <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          type="number"
          dataKey="x"
          name="Input Price"
          label={{ value: 'Цена Input ($/1M токенов)', position: 'bottom' }}
          scale="log"
          domain={['auto', 'auto']}
        />
        <YAxis
          type="number"
          dataKey="y"
          name="Output Price"
          label={{ value: 'Цена Output ($/1M токенов)', angle: -90, position: 'left' }}
          scale="log"
          domain={['auto', 'auto']}
        />
        <Tooltip content={<CustomTooltip />} />
        <Scatter
          data={chartData}
          fill="hsl(var(--primary))"
          shape={(props: any) => {
            const { cx, cy, payload } = props;
            const size = payload.count > 1 ? 8 + payload.count * 2 : 8;
            
            // Цвет по рейтингу
            let fill = 'hsl(var(--destructive))';
            if (payload.maxRating >= 90) fill = 'hsl(var(--primary))';
            else if (payload.maxRating >= 85) fill = 'hsl(var(--chart-2))';
            
            return (
              <circle
                cx={cx}
                cy={cy}
                r={size}
                fill={fill}
                stroke="#ffffff"
                strokeWidth={2}
              />
            );
          }}
        />
      </ScatterChart>
    </ResponsiveContainer>
  );
});

