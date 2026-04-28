"use client";

import { motion } from "framer-motion";
import Image from "next/image";
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
    image: "/images/case-fintech.png",
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
    image: "/images/case-healthcare.png",
  },
  {
    category: "Manufacturing",
    title: "Operational excellence for Fortune 500 manufacturer",
    description:
      "Redesigned supply chain operations, implemented predictive analytics, and achieved record throughput with reduced overhead.",
    metrics: [
      { label: "Throughput", value: "+120%" },
      { label: "Waste Reduction", value: "45%" },
    ],
    image: "/images/case-manufacturing.png",
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
                border: "1px solid var(--surface-glass-border)",
                background: "var(--gradient-card)",
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
            >
              {/* Image with overlay */}
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={study.image}
                  alt={study.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Navy gradient overlay */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to bottom, color-mix(in srgb, var(--bg-primary) 20%, transparent) 0%, color-mix(in srgb, var(--bg-primary) 90%, transparent) 85%, var(--bg-secondary) 100%)",
                  }}
                />
                {/* Category badge positioned on image */}
                <div className="absolute top-4 left-4 z-10">
                  <Badge>{study.category}</Badge>
                </div>
                {/* Hover arrow */}
                <div
                  className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 z-10"
                  style={{
                    background: "var(--accent)",
                    color: "var(--text-on-accent)",
                  }}
                >
                  <ArrowUpRight size={18} />
                </div>
              </div>

              {/* Content */}
              <div className="p-6 pt-3">
                <h3
                  className="text-lg font-semibold mb-3 leading-tight"
                  style={{ color: "var(--text-primary)" }}
                >
                  {study.title}
                </h3>
                <p
                  className="text-sm leading-relaxed mb-5"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {study.description}
                </p>

                {/* Metrics */}
                <div
                  className="flex gap-6 pt-4"
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
