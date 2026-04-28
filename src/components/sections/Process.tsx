"use client";

import { motion } from "framer-motion";
import { Search, Lightbulb, Rocket, BarChart3 } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";

const steps = [
  {
    icon: Search,
    step: "01",
    title: "Discover",
    description:
      "Deep-dive into your business, market position, and goals. We analyze data, interview stakeholders, and map your competitive landscape.",
  },
  {
    icon: Lightbulb,
    step: "02",
    title: "Strategize",
    description:
      "Craft a tailored roadmap with clear milestones, KPIs, and actionable recommendations backed by rigorous analysis and industry benchmarks.",
  },
  {
    icon: Rocket,
    step: "03",
    title: "Execute",
    description:
      "Implement solutions with precision. Our team works alongside yours to ensure seamless execution, change management, and rapid iteration.",
  },
  {
    icon: BarChart3,
    step: "04",
    title: "Measure & Scale",
    description:
      "Track outcomes against targets, optimize continuously, and scale successful initiatives across your organization for lasting impact.",
  },
];

export function Process() {
  return (
    <section id="process" className="section-padding relative">
      <div className="container-main">
        <SectionHeader
          overline="Our Process"
          title="A proven approach to transformation"
          description="Every engagement follows our battle-tested methodology, refined over hundreds of successful projects."
        />

        <div className="relative">
          {/* Connection line - Desktop only */}
          <div
            className="hidden lg:block absolute top-[60px] left-[10%] right-[10%] h-px"
            style={{
              background:
                "linear-gradient(90deg, transparent, var(--border-default) 15%, var(--border-default) 85%, transparent)",
            }}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                className="relative text-center lg:text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
              >
                {/* Icon circle */}
                <motion.div
                  className="mx-auto w-[72px] h-[72px] rounded-full flex items-center justify-center mb-6 relative z-10"
                  style={{
                    background: "var(--bg-primary)",
                    border: "2px solid var(--border-default)",
                  }}
                  whileHover={{
                    borderColor: "var(--accent)",
                    boxShadow: "0 0 24px rgba(200, 150, 62, 0.12)",
                  }}
                >
                  <step.icon
                    size={26}
                    style={{ color: "var(--accent)" }}
                  />
                </motion.div>

                {/* Step number */}
                <span
                  className="text-overline mb-2 block"
                  style={{ color: "var(--accent)" }}
                >
                  Step {step.step}
                </span>

                {/* Title */}
                <h3
                  className="text-lg font-semibold mb-3"
                  style={{ color: "var(--text-primary)" }}
                >
                  {step.title}
                </h3>

                {/* Description */}
                <p
                  className="text-sm leading-relaxed max-w-[280px] mx-auto"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
