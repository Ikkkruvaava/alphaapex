"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Play } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

export function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "var(--gradient-hero)" }}
    >
      {/* Subtle gradient orb — warm gold, very understated */}
      <div
        className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full blur-[140px] opacity-15"
        style={{ background: "var(--accent)" }}
      />
      <div
        className="absolute bottom-[-15%] left-[-5%] w-[400px] h-[400px] rounded-full blur-[120px] opacity-8"
        style={{ background: "var(--navy-light)" }}
      />

      {/* Geometric grid overlay — subtle, corporate feel */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `linear-gradient(var(--text-secondary) 1px, transparent 1px),
            linear-gradient(90deg, var(--text-secondary) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container-main relative z-10 pt-24">
        <div className="max-w-4xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Badge icon={<span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />}>
              Trusted by 200+ Enterprise Clients
            </Badge>
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="text-hero mt-8 mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            We guide organizations to{" "}
            <br />
            their{" "}
            <span
              className="relative inline-block"
              style={{ color: "var(--accent-light)" }}
            >
              highest point
              <svg
                className="absolute -bottom-1 left-0 w-full"
                viewBox="0 0 300 12"
                fill="none"
                preserveAspectRatio="none"
                style={{ height: "8px" }}
              >
                <motion.path
                  d="M2 8C50 2 100 4 150 6C200 8 250 4 298 8"
                  stroke="var(--accent)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1, delay: 1, ease: "easeOut" }}
                />
              </svg>
            </span>
            {" "}of performance
          </motion.h1>

          {/* Subheadline — Brand positioning */}
          <motion.p
            className="text-body-lg max-w-2xl mb-10"
            style={{ color: "var(--text-secondary)" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Strategic advisory, governance, and long-term growth solutions.
            We provide structured leadership guidance and measurable business
            transformation for ambitious organizations.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-wrap items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <Button
              variant="primary"
              size="lg"
              icon={<ArrowUpRight size={18} />}
            >
              Schedule a Consultation
            </Button>
            <Button
              variant="secondary"
              size="lg"
              icon={<Play size={16} fill="currentColor" />}
            >
              See Our Work
            </Button>
          </motion.div>

          {/* Stats inline */}
          <motion.div
            className="flex flex-wrap gap-10 mt-16 pt-10"
            style={{ borderTop: "1px solid var(--border-default)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            {[
              { value: "$2.4B+", label: "Value Created" },
              { value: "200+", label: "Clients Guided" },
              { value: "98%", label: "Client Retention" },
            ].map((stat) => (
              <div key={stat.label}>
                <div
                  className="text-3xl font-bold mb-1"
                  style={{ color: "var(--text-primary)" }}
                >
                  {stat.value}
                </div>
                <div className="text-caption" style={{ color: "var(--text-tertiary)" }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
