"use client";

import { motion } from "framer-motion";
import {
  TrendingUp,
  Cpu,
  BarChart3,
  Users,
  Shield,
  Zap,
} from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";

const services = [
  {
    icon: TrendingUp,
    title: "Strategic Advisory",
    description:
      "Navigate complex market dynamics with data-driven strategies that position your business for long-term success and competitive advantage.",
    tags: ["Market Analysis", "Growth Strategy"],
  },
  {
    icon: Cpu,
    title: "Digital Transformation",
    description:
      "Modernize your technology infrastructure, streamline operations, and unlock new digital revenue streams with our end-to-end transformation expertise.",
    tags: ["Tech Stack", "Automation"],
  },
  {
    icon: BarChart3,
    title: "Performance Optimization",
    description:
      "Identify inefficiencies, optimize processes, and implement systems that drive measurable improvements across your entire organization.",
    tags: ["KPI Design", "Process Audit"],
  },
  {
    icon: Users,
    title: "Leadership & Talent",
    description:
      "Build high-performance teams with executive coaching, talent strategy, and organizational design that attracts and retains top talent.",
    tags: ["Executive Coaching", "Team Building"],
  },
  {
    icon: Shield,
    title: "Risk & Compliance",
    description:
      "Strengthen your risk framework with proactive compliance strategies, regulatory navigation, and enterprise risk management solutions.",
    tags: ["Compliance", "Risk Assessment"],
  },
  {
    icon: Zap,
    title: "Innovation Labs",
    description:
      "Accelerate innovation with structured programs that transform ideas into market-ready solutions, from concept validation to launch.",
    tags: ["R&D Strategy", "Rapid Prototyping"],
  },
];

export function Services() {
  return (
    <section id="services" className="section-padding relative">
      <div className="container-main">
        <SectionHeader
          overline="Our Services"
          title="Expertise that delivers impact"
          description="We combine deep industry knowledge with modern methodologies to solve your most critical business challenges."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              className="group relative rounded-[var(--radius-xl)] p-7 cursor-pointer"
              style={{
                background: "var(--gradient-card)",
                border: "1px solid var(--surface-glass-border)",
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{
                y: -6,
                transition: { duration: 0.3 },
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "var(--border-accent)";
                el.style.boxShadow = "var(--shadow-accent)";
                el.style.background = "var(--surface-glass-hover)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "var(--surface-glass-border)";
                el.style.boxShadow = "none";
                el.style.background = "var(--gradient-card)";
              }}
            >
              {/* Icon */}
              <div
                className="w-12 h-12 rounded-[var(--radius-md)] flex items-center justify-center mb-5 transition-all duration-300"
                style={{
                  background: "var(--accent-muted)",
                  color: "var(--accent)",
                }}
              >
                <service.icon size={22} />
              </div>

              {/* Title */}
              <h3
                className="text-lg font-semibold mb-3 transition-colors duration-200"
                style={{ color: "var(--text-primary)" }}
              >
                {service.title}
              </h3>

              {/* Description */}
              <p
                className="text-sm leading-relaxed mb-5"
                style={{ color: "var(--text-secondary)" }}
              >
                {service.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium px-2.5 py-1 rounded-full"
                    style={{
                      background: "var(--surface-glass)",
                      color: "var(--text-tertiary)",
                      border: "1px solid var(--border-subtle)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Hover arrow indicator */}
              <div
                className="absolute top-7 right-7 w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-0 -translate-x-1"
                style={{
                  background: "var(--accent-muted)",
                  color: "var(--accent)",
                }}
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M1 13L13 1M13 1H3M13 1V11"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
