"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";

const stats = [
  { value: 200, suffix: "+", label: "Clients Served", prefix: "" },
  { value: 2.4, suffix: "B+", label: "Revenue Generated", prefix: "$" },
  { value: 98, suffix: "%", label: "Client Retention", prefix: "" },
  { value: 15, suffix: "+", label: "Years of Excellence", prefix: "" },
];

function AnimatedCounter({
  value,
  prefix,
  suffix,
  inView,
}: {
  value: number;
  prefix: string;
  suffix: string;
  inView: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    const isDecimal = value % 1 !== 0;
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      current += increment;
      if (step >= steps) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(isDecimal ? parseFloat(current.toFixed(1)) : Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <span>
      {prefix}
      {count}
      {suffix}
    </span>
  );
}

export function Stats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding relative" ref={ref}>
      <div className="container-main">
        <SectionHeader
          overline="By the numbers"
          title="Impact you can measure"
          description="Our track record speaks for itself. These numbers reflect years of delivering exceptional results for our clients."
        />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="text-center rounded-[var(--radius-xl)] p-8"
              style={{
                background: "var(--gradient-card)",
                border: "1px solid var(--surface-glass-border)",
              }}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div
                className="text-4xl md:text-5xl font-bold mb-2"
                style={{ color: "var(--accent)" }}
              >
                <AnimatedCounter
                  value={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  inView={isInView}
                />
              </div>
              <div
                className="text-sm font-medium"
                style={{ color: "var(--text-tertiary)" }}
              >
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
