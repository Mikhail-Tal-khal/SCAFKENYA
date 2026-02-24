"use client";

import { useEffect, useState, useRef } from "react";

const stats = [
  { value: 5000, suffix: "+", label: "Lives Impacted" },
  { value: 47, suffix: "", label: "Counties Reached" },
  { value: 200, suffix: "+", label: "Community Events" },
  { value: 50, suffix: "+", label: "Partner Organizations" },
];

function AnimatedCounter({
  target,
  suffix,
}: {
  target: number;
  suffix: string;
}) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const duration = 2000;
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [target, hasAnimated]);

  return (
    <div ref={ref} className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary">
      {count.toLocaleString()}
      {suffix}
    </div>
  );
}

export function Impact() {
  return (
    <section id="impact" className="py-24 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-medium uppercase tracking-wider text-sm opacity-80">
            Our Impact
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6 text-balance">
            Making a Difference Across Kenya
          </h2>
          <p className="opacity-90 leading-relaxed">
            Through dedication and community support, we continue to expand our
            reach and impact in the fight against Sickle Cell Disease.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              <div className="mt-2 text-sm sm:text-base opacity-80">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 bg-primary-foreground/10 rounded-2xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-serif text-2xl font-bold mb-4">
                Join Us in Making a Difference
              </h3>
              <p className="opacity-90 leading-relaxed">
                Every contribution, no matter how small, helps us provide
                essential healthcare, raise awareness, and bring hope to
                thousands of Kenyans living with Sickle Cell Disease.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-end">
              <button className="px-6 py-3 bg-primary-foreground text-primary font-semibold rounded-lg hover:bg-primary-foreground/90 transition-colors">
                Donate Now
              </button>
              <button className="px-6 py-3 border-2 border-primary-foreground text-primary-foreground font-semibold rounded-lg hover:bg-primary-foreground/10 transition-colors">
                Become a Volunteer
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
