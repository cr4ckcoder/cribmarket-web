"use client";

import { useEffect, useRef, useState } from "react";

type Stat = {
  prefix?: string;
  target?: number;
  decimals?: number;
  staticValue?: string;
  label: string;
  detail: string;
};

const stats: Stat[] = [
  {
    staticValue: "CFD",
    label: "MARKETS",
    detail: "Multi-asset access",
  },
  {
    prefix: "1:",
    target: 1000,
    label: "LEVERAGE",
    detail: "Room to scale positions",
  },
  {
    prefix: "+",
    target: 900,
    label: "INSTRUMENTS",
    detail: "Options to spread exposure",
  },
  {
    target: 0.01,
    decimals: 2,
    label: "LOTS",
    detail: "Trade in micro sizes",
  },
  {
    staticValue: "USA",
    label: "LICENSED",
    detail: "Licensed from the USA",
  },
];

function formatValue(value: number, decimals: number) {
  return value.toLocaleString(undefined, {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
    useGrouping: false,
  });
}

export function StatsBar() {
  const ref = useRef<HTMLDivElement>(null);
  const [values, setValues] = useState<(number | null)[]>(() =>
    stats.map((stat) => (stat.target != null ? 0 : null)),
  );
  const started = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting || started.current) return;
          started.current = true;

          const duration = 1400;
          const start = performance.now();

          const tick = (now: number) => {
            const progress = Math.min(1, (now - start) / duration);
            setValues(
              stats.map((stat) => {
                if (stat.target == null) return null;
                const next = stat.target * progress;
                return Number(next.toFixed(stat.decimals ?? 0));
              }),
            );
            if (progress < 1) requestAnimationFrame(tick);
          };

          requestAnimationFrame(tick);
          observer.unobserve(node);
        });
      },
      { threshold: 0.4 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="stats-bar" ref={ref}>
      <div className="container stats-grid">
        {stats.map((stat, index) => (
          <div className="stat-item" key={stat.label}>
            <div className="stat-num">
              {stat.staticValue ? (
                stat.staticValue
              ) : (
                <>
                  {stat.prefix}
                  <span className="count">
                    {formatValue(
                      values[index] ?? 0,
                      stat.decimals ?? 0,
                    )}
                  </span>
                </>
              )}
            </div>
            <div className="stat-label">{stat.label}</div>
            <div className="stat-detail">{stat.detail}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
