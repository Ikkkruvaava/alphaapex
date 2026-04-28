"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
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
      "Navigate complex market dynamics with data-driven strategies that position your business for long-term success.",
    tags: ["Market Analysis", "Growth Strategy"],
    image: "/images/services-strategy.png",
    featured: true,
  },
  {
    icon: Cpu,
    title: "Digital Transformation",
    description:
      "Modernize your technology infrastructure and unlock new digital revenue streams.",
    tags: ["Tech Stack", "Automation"],
    image: "/images/service-digital.png",
    featured: true,
  },
  {
    icon: Users,
    title: "Leadership & Governance",
    description:
      "Build high-performance teams with executive coaching and organizational design.",
    tags: ["Executive Coaching", "Governance"],
    image: "/images/service-leadership.png",
    featured: true,
  },
  {
    icon: BarChart3,
    title: "Performance Optimization",
    description:
      "Identify inefficiencies and implement systems that drive measurable improvements.",
    tags: ["KPI Design", "Process Audit"],
    image: null,
    featured: false,
  },
  {
    icon: Shield,
    title: "Risk & Compliance",
    description:
      "Strengthen your risk framework with proactive compliance and regulatory navigation.",
    tags: ["Compliance", "Risk Assessment"],
    image: null,
    featured: false,
  },
  {
    icon: Zap,
    title: "Innovation Labs",
    description:
      "Accelerate innovation from concept validation to market-ready solutions.",
    tags: ["R&D Strategy", "Rapid Prototyping"],
    image: null,
    featured: false,
  },
];

export function Services() {
  const featuredServices = services.filter((s) => s.featured);
  const otherServices = services.filter((s) => !s.featured);

  return (
    <section id="services" className="section-padding relative">
      <div className="container-main">
        <SectionHeader
          overline="Our Services"
          title="Expertise that delivers impact"
          description="We combine deep industry knowledge with modern methodologies to solve your most critical business challenges."
        />

        {/* Featured services — large cards with images */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
          {featuredServices.map((service, i) => (
            <motion.div
              key={service.title}
              className="group relative rounded-[var(--radius-2xl)] overflow-hidden cursor-pointer"
              style={{
                background: "var(--gradient-card)",
                border: "1px solid var(--surface-glass-border)",
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "var(--border-accent)";
                el.style.boxShadow = "var(--shadow-accent)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "var(--surface-glass-border)";
                el.style.boxShadow = "none";
              }}
            >
              {/* Image */}
              {service.image && (
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(to bottom, transparent 40%, var(--bg-primary) 100%)",
                    }}
                  />
                </div>
              )}

              {/* Content */}
              <div className="p-6 pt-2">
                {/* Icon */}
                <div
                  className="w-10 h-10 rounded-[var(--radius-md)] flex items-center justify-center mb-4 transition-all duration-300"
                  style={{
                    background: "var(--accent-muted)",
                    color: "var(--accent)",
                  }}
                >
                  <service.icon size={20} />
                </div>

                <h3
                  className="text-lg font-semibold mb-2"
                  style={{ color: "var(--text-primary)" }}
                >
                  {service.title}
                </h3>

                <p
                  className="text-sm leading-relaxed mb-4"
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
              </div>

              {/* Hover arrow */}
              <div
                className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 z-10"
                style={{
                  background: "var(--accent)",
                  color: "var(--text-on-accent)",
                }}
              >
                <ArrowUpRight size={14} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other services — compact cards without images */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {otherServices.map((service, i) => (
            <motion.div
              key={service.title}
              className="group relative rounded-[var(--radius-xl)] p-6 cursor-pointer"
              style={{
                background: "var(--gradient-card)",
                border: "1px solid var(--surface-glass-border)",
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "var(--border-accent)";
                el.style.boxShadow = "var(--shadow-accent)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "var(--surface-glass-border)";
                el.style.boxShadow = "none";
              }}
            >
              <div
                className="w-10 h-10 rounded-[var(--radius-md)] flex items-center justify-center mb-4"
                style={{
                  background: "var(--accent-muted)",
                  color: "var(--accent)",
                }}
              >
                <service.icon size={20} />
              </div>

              <h3
                className="text-lg font-semibold mb-2"
                style={{ color: "var(--text-primary)" }}
              >
                {service.title}
              </h3>

              <p
                className="text-sm leading-relaxed mb-4"
                style={{ color: "var(--text-secondary)" }}
              >
                {service.description}
              </p>

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

              <div
                className="absolute top-6 right-6 w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                style={{
                  background: "var(--accent-muted)",
                  color: "var(--accent)",
                }}
              >
                <ArrowUpRight size={14} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
