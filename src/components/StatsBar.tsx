"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { target: 14, prefix: "", suffix: "+", label: "Años de trayectoria" },
  { target: 5, prefix: "", suffix: "", label: "Programas académicos" },
  { target: 3000, prefix: "+", suffix: "", label: "Graduados", thousands: true },
  { target: 1, prefix: "", suffix: "ª", label: "Facultad forense en Guatemala" },
];

function useCountUp(target: number, duration: number, started: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!started) return;
    let startTime: number | null = null;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [started, target, duration]);

  return count;
}

function StatItem({ stat, started }: { stat: typeof stats[0]; started: boolean }) {
  const count = useCountUp(stat.target, 1800, started);
  const display = stat.thousands ? count.toLocaleString("es-GT") : count.toString();

  return (
    <div className="py-6 md:py-2">
      <p className="font-serif text-4xl md:text-5xl text-udeo-red leading-none">
        {stat.prefix}{display}{stat.suffix}
      </p>
      <p className="text-sm text-gray-600 mt-3">{stat.label}</p>
    </div>
  );
}

export default function StatsBar() {
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true); },
      { threshold: 0.4 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="bg-white border-b border-black/10">
      <div className="container mx-auto px-4 md:px-8 py-8 md:py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-2 md:divide-x divide-black/10 text-center">
          {stats.map((stat, i) => (
            <StatItem key={i} stat={stat} started={started} />
          ))}
        </div>
      </div>
    </div>
  );
}
