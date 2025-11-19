'use client';

import { useEffect, useRef, useState, useCallback } from 'react';

interface Point {
  x: number;
  y: number;
  timestamp: number;
  pressure?: number;
}

interface Line {
  points: Point[];
  id: string;
  fadeStartTime?: number;
}

// Функция для вычисления расстояния между точками
function distance(p1: Point, p2: Point): number {
  return Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
}

// Функция для сглаживания точек (усреднение соседних точек)
function smoothPoints(points: Point[]): Point[] {
  if (points.length <= 2) return points;
  
  const smoothed: Point[] = [points[0]];
  
  for (let i = 1; i < points.length - 1; i++) {
    const prev = points[i - 1];
    const current = points[i];
    const next = points[i + 1];
    
    smoothed.push({
      x: (prev.x + current.x * 2 + next.x) / 4,
      y: (prev.y + current.y * 2 + next.y) / 4,
      timestamp: current.timestamp,
      pressure: current.pressure
    });
  }
  
  smoothed.push(points[points.length - 1]);
  return smoothed;
}

// Функция для вычисления толщины линии на основе скорости
function getPressure(point: Point, prevPoint: Point | null, speed: number): number {
  if (!prevPoint) return 1;
  
  // Чем быстрее движение, тем тоньше линия
  const maxSpeed = 20;
  const minPressure = 0.3;
  const maxPressure = 1.2;
  
  const normalizedSpeed = Math.min(speed / maxSpeed, 1);
  return maxPressure - (normalizedSpeed * (maxPressure - minPressure));
}

export function DrawingOverlay() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isCtrlPressed, setIsCtrlPressed] = useState(false);
  const [isDrawing, setIsDrawing] = useState(false);
  const [lines, setLines] = useState<Line[]>([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const currentLineRef = useRef<Point[]>([]);
  const animationFrameRef = useRef<number | undefined>(undefined);

  // Обновление размера canvas
  const updateCanvasSize = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }, []);

  // finishLine должен быть объявлен раньше
  const finishLine = useCallback(() => {
    if (currentLineRef.current.length > 1) {
      const newLine: Line = {
        points: [...currentLineRef.current],
        id: Date.now().toString()
      };
      
      setLines(prev => [...prev, newLine]);
      
      // Начинаем исчезновение через небольшую задержку
      setTimeout(() => {
        setLines(prev => prev.map(line => 
          line.id === newLine.id 
            ? { ...line, fadeStartTime: Date.now() }
            : line
        ));
        
        // Полностью удаляем линию через 500 мс
        setTimeout(() => {
          setLines(prev => prev.filter(line => line.id !== newLine.id));
        }, 500);
      }, 100);
    }
    
    currentLineRef.current = [];
    setIsDrawing(false);
  }, []);

  // Отслеживание нажатия Ctrl+Shift
  useEffect(() => {
    const updateCtrlState = (e: KeyboardEvent) => {
      const isComboPressed = e.ctrlKey && e.shiftKey;
      setIsCtrlPressed(isComboPressed);

      // Если комбинация отпущена во время рисования — завершаем линию
      if (!isComboPressed && isDrawing) {
        finishLine();
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Control' || e.key === 'Shift') {
        updateCtrlState(e);
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.key === 'Control' || e.key === 'Shift') {
        updateCtrlState(e);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [isDrawing, finishLine]);

  // Обработка рисования
  const startDrawing = useCallback((e: MouseEvent) => {
    if (!isCtrlPressed) return;

    // Предотвращаем выделение текста
    e.preventDefault();
    
    setIsDrawing(true);
    currentLineRef.current = [{
      x: e.clientX,
      y: e.clientY,
      timestamp: Date.now()
    }];
  }, [isCtrlPressed]);

  const draw = useCallback((e: MouseEvent) => {
    if (!isDrawing || !isCtrlPressed) return;

    // Предотвращаем выделение текста во время рисования
    e.preventDefault();

    const newPoint: Point = {
      x: e.clientX,
      y: e.clientY,
      timestamp: Date.now()
    };

    // Вычисляем скорость и pressure
    if (currentLineRef.current.length > 0) {
      const prevPoint = currentLineRef.current[currentLineRef.current.length - 1];
      const dist = distance(newPoint, prevPoint);
      
      // Пропускаем точки, которые слишком близко (для более гладкой линии)
      if (dist < 2) return;
      
      const timeDiff = newPoint.timestamp - prevPoint.timestamp;
      const speed = timeDiff > 0 ? dist / timeDiff : 0;
      
      newPoint.pressure = getPressure(newPoint, prevPoint, speed);
    } else {
      newPoint.pressure = 1;
    }

    currentLineRef.current.push(newPoint);
  }, [isDrawing, isCtrlPressed]);

  const stopDrawing = useCallback(() => {
    if (isDrawing) {
      finishLine();
    }
  }, [isDrawing, finishLine]);

  // Слушатели событий мыши
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      draw(e);
    };

    window.addEventListener('mousedown', startDrawing);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', stopDrawing);

    return () => {
      window.removeEventListener('mousedown', startDrawing);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', stopDrawing);
    };
  }, [startDrawing, draw, stopDrawing]);

  // Отрисовка на canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    // Включаем сглаживание
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';

    const render = () => {
      // Очищаем canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Рисуем все линии
      const currentTime = Date.now();
      const fadeDuration = 500; // мс
      
      [...lines, ...(currentLineRef.current.length > 1 ? [{
        points: currentLineRef.current,
        id: 'current'
      }] : [])].forEach(line => {
        if (line.points.length < 2) return;

        // Вычисляем начальную точку для отрисовки (исчезновение с начала)
        let startIndex = 0;
        
        if (line.fadeStartTime) {
          const elapsed = currentTime - line.fadeStartTime;
          const fadeProgress = Math.min(elapsed / fadeDuration, 1);
          // Увеличиваем стартовый индекс (исчезает с начала)
          startIndex = Math.floor(line.points.length * fadeProgress);
        }

        // Если осталось меньше 2 точек, пропускаем
        if (startIndex >= line.points.length - 1) return;

        // Сглаживаем точки для более плавной линии
        const pointsToRender = line.points.slice(startIndex);
        const smoothedPoints = smoothPoints(smoothPoints(pointsToRender)); // Двойное сглаживание
        
        if (smoothedPoints.length < 2) return;

        // Рисуем плавную линию с переменной толщиной (стиль Excalidraw)
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.fillStyle = '#ef4444';
        ctx.strokeStyle = '#ef4444';

        // Создаем путь с переменной толщиной
        const baseWidth = 2.8;
        
        // Рисуем основную линию
        ctx.beginPath();
        
        for (let i = 0; i < smoothedPoints.length - 1; i++) {
          const point = smoothedPoints[i];
          const nextPoint = smoothedPoints[i + 1];
          
          // Вычисляем толщину на основе pressure
          const pressure = point.pressure || 1;
          const lineWidth = baseWidth * pressure;
          
          ctx.lineWidth = lineWidth;
          
          if (i === 0) {
            ctx.moveTo(point.x, point.y);
          }
          
          // Используем квадратичные кривые Безье для сглаживания
          if (i < smoothedPoints.length - 2) {
            const xc = (point.x + nextPoint.x) / 2;
            const yc = (point.y + nextPoint.y) / 2;
            ctx.quadraticCurveTo(point.x, point.y, xc, yc);
          } else {
            // Последний сегмент
            ctx.quadraticCurveTo(point.x, point.y, nextPoint.x, nextPoint.y);
          }
        }
        
        ctx.stroke();
        
        // Добавляем дополнительные круги на точках для более мягкого вида
        smoothedPoints.forEach((point, i) => {
          if (i % 3 === 0) { // Каждую третью точку
            const pressure = point.pressure || 1;
            const radius = (baseWidth * pressure) / 2;
            
            ctx.beginPath();
            ctx.arc(point.x, point.y, radius, 0, Math.PI * 2);
            ctx.fill();
          }
        });
      });

      animationFrameRef.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [lines]);

  // Инициализация canvas
  useEffect(() => {
    updateCanvasSize();
    window.addEventListener('resize', updateCanvasSize);

    return () => {
      window.removeEventListener('resize', updateCanvasSize);
    };
  }, [updateCanvasSize]);

  // Управление курсором и выделением текста
  useEffect(() => {
    const preventSelection = (e: Event) => {
      if (isCtrlPressed) {
        e.preventDefault();
      }
    };

    if (isCtrlPressed) {
      document.body.style.userSelect = 'none';
      document.body.style.webkitUserSelect = 'none';
      document.addEventListener('selectstart', preventSelection);
    } else {
      document.body.style.cursor = 'default';
      document.body.style.userSelect = 'auto';
      document.body.style.webkitUserSelect = 'auto';
    }

    return () => {
      document.body.style.cursor = 'default';
      document.body.style.userSelect = 'auto';
      document.body.style.webkitUserSelect = 'auto';
      document.removeEventListener('selectstart', preventSelection);
    };
  }, [isCtrlPressed]);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-[9999]"
        style={{ touchAction: 'none' }}
      />
    </>
  );
}

