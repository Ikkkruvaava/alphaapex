"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Badge } from "@/components/ui/Badge";

const caseStudies = [
  {
    category: "Fintech",
    title: "Scaling a fintech startup from Series A to $500M valuation",
    description:
      "Developed go-to-market strategy, optimized unit economics, and built the operational framework for rapid, sustainable growth.",
    metrics: [
      { label: "Revenue Growth", value: "340%" },
      { label: "Time to Market", value: "-60%" },
    ],
    gradient: "linear-gradient(145deg, #0B1C2D 0%, #102A43 50%, #153350 100%)",
  },
  {
    category: "Healthcare",
    title: "Digital transformation for a national healthcare provider",
    description:
      "End-to-end modernization of patient management systems, reducing wait times and improving care quality across 120+ facilities.",
    metrics: [
      { label: "Efficiency Gain", value: "85%" },
      { label: "Cost Reduction", value: "$12M" },
    ],
    gradient: "linear-gradient(145deg, #0B1C2D 0%, #0D2137 50%, #0F2D4D 100%)",
  },
  {
    category: "Manufacturing",
    title: "Operational excellence program for Fortune 500 manufacturer",
    description:
      "Redesigned supply chain operations, implemented predictive analytics, and achieved record throughput with reduced overhead.",
    metrics: [
      { label: "Throughput", value: "+120%" },
      { label: "Waste Reduction", value: "45%" },
    ],
    gradient: "linear-gradient(145deg, #0B1C2D 0%, #162B40 50%, #1A3350 100%)",
  },
];

export function CaseStudies() {
  return (
    <section
      id="case-studies"
      className="section-padding relative"
      style={{ background: "var(--bg-secondary)" }}
    >
      <div className="container-main">
        <SectionHeader
          overline="Case Studies"
          title="Results that speak volumes"
          description="Explore how we've helped leading organizations achieve breakthrough results across industries."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {caseStudies.map((study, i) => (
            <motion.div
              key={study.title}
              className="group relative rounded-[var(--radius-2xl)] overflow-hidden cursor-pointer"
              style={{
                background: study.gradient,
                border: "1px solid var(--surface-glass-border)",
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
            >
              {/* Gradient overlay on hover — gold tint */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background:
                    "linear-gradient(145deg, rgba(200, 150, 62, 0.06), transparent 70%)",
                }}
              />

              <div className="relative p-7 pb-8 flex flex-col h-full min-h-[380px]">
                {/* Category badge */}
                <Badge className="self-start mb-auto">{study.category}</Badge>

                {/* Content */}
                <div className="mt-8">
                  <h3
                    className="text-xl font-semibold mb-3 leading-tight"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {study.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed mb-6"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {study.description}
                  </p>

                  {/* Metrics */}
                  <div
                    className="flex gap-6 pt-5"
                    style={{ borderTop: "1px solid var(--border-default)" }}
                  >
                    {study.metrics.map((metric) => (
                      <div key={metric.label}>
                        <div
                          className="text-2xl font-bold"
                          style={{ color: "var(--accent)" }}
                        >
                          {metric.value}
                        </div>
                        <div
                          className="text-xs font-medium mt-0.5"
                          style={{ color: "var(--text-tertiary)" }}
                        >
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Hover arrow */}
                <div
                  className="absolute top-6 right-6 w-10 h-10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                  style={{
                    background: "var(--accent)",
                    color: "var(--text-on-accent)",
                  }}
                >
                  <ArrowUpRight size={18} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
