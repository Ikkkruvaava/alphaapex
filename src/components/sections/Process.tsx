"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Strategic Discovery & Assessment",
    description:
      "We begin with a deep dive into your organization's current state, identifying core inefficiencies, market positioning, and untapped opportunities.",
  },
  {
    number: "02",
    title: "Framework Design & Governance",
    description:
      "Our team architects a bespoke performance framework, establishing clear KPIs, leadership structures, and operational workflows.",
  },
  {
    number: "03",
    title: "Implementation & Execution",
    description:
      "We work alongside your leadership to execute the strategy, ensuring alignment, rapid deployment, and minimal operational friction.",
  },
  {
    number: "04",
    title: "Measurement & Scale",
    description:
      "Continuous monitoring and iterative improvements ensure the strategy not only lands effectively but scales as your organization grows.",
  },
];

export function Process() {
  return (
    <section id="process" className="section-padding relative">
      <div className="container-main max-w-4xl">
        <div className="text-center mb-16">
          <span className="text-overline">How It Works</span>
          <h2 className="text-display mt-4 mb-4">
            An intelligent framework behind <br />
            <span className="italic text-[var(--text-secondary)]">every single strategy</span>
          </h2>
          <p className="text-body max-w-2xl mx-auto">
            Every engagement follows our battle-tested methodology, refined over hundreds of successful projects — no guesswork needed.
          </p>
        </div>

        <div className="flex flex-col gap-4 relative">
          {/* Subtle vertical connection line */}
          <div className="absolute left-[39px] top-[40px] bottom-[40px] w-px bg-white/5 hidden md:block" />

          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              className="glass-card p-6 md:p-8 flex flex-col md:flex-row items-start gap-6 md:gap-8 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div 
                className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center shrink-0 bg-[#0A0A0A] relative z-10 transition-colors duration-300 group-hover:border-[var(--accent)] group-hover:text-[var(--accent)]"
              >
                <span className="font-serif text-lg font-medium text-[var(--accent)]">
                  {step.number}
                </span>
              </div>
              
              <div className="pt-2">
                <h3 className="text-xl font-medium text-white mb-2">{step.title}</h3>
                <p className="text-[var(--text-secondary)] text-sm leading-relaxed max-w-2xl">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
