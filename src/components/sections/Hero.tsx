"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Play } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Full-width background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg.png"
          alt="Alpha Apex Advisory Group - Strategic consulting"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        {/* Dark navy overlay for text readability */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(145deg, color-mix(in srgb, var(--bg-primary) 88%, transparent) 0%, color-mix(in srgb, var(--bg-primary) 70%, transparent) 40%, color-mix(in srgb, var(--bg-primary) 85%, transparent) 100%)",
          }}
        />
        {/* Bottom fade to seamless transition */}
        <div
          className="absolute bottom-0 left-0 right-0 h-32"
          style={{
            background: "linear-gradient(to bottom, transparent, var(--bg-primary))",
          }}
        />
      </div>

      {/* Subtle gold accent glow */}
      <div
        className="absolute top-[20%] right-[15%] w-[300px] h-[300px] rounded-full blur-[120px] opacity-15"
        style={{ background: "var(--accent)" }}
      />

      <div className="container-main relative z-10 pt-28 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div>
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
              We guide organizations to their{" "}
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

            {/* Subheadline */}
            <motion.p
              className="text-body-lg max-w-lg mb-10"
              style={{ color: "var(--text-secondary)" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Strategic advisory, governance, and long-term growth solutions.
              Structured leadership guidance and measurable business
              transformation.
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
          </div>

          {/* Right: Stats Cards - floating glass cards over the hero image */}
          <motion.div
            className="hidden lg:flex flex-col gap-4 items-end"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {[
              { value: "$2.4B+", label: "Value Created for Clients" },
              { value: "200+", label: "Organizations Guided" },
              { value: "98%", label: "Client Retention Rate" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                className="flex items-center gap-5 px-7 py-5 rounded-[var(--radius-xl)]"
                style={{
                  background: "color-mix(in srgb, var(--bg-primary) 60%, transparent)",
                  backdropFilter: "blur(20px) saturate(180%)",
                  border: "1px solid var(--surface-glass-border)",
                  minWidth: "300px",
                }}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.8 + i * 0.15 }}
              >
                <div
                  className="text-3xl font-bold"
                  style={{ color: "var(--accent-light)" }}
                >
                  {stat.value}
                </div>
                <div
                  className="text-sm font-medium"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Mobile stats - horizontal scroll */}
        <motion.div
          className="flex lg:hidden gap-4 mt-12 pt-8 overflow-x-auto"
          style={{ borderTop: "1px solid var(--border-default)" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          {[
            { value: "$2.4B+", label: "Value Created" },
            { value: "200+", label: "Clients Guided" },
            { value: "98%", label: "Retention" },
          ].map((stat) => (
            <div key={stat.label} className="shrink-0">
              <div
                className="text-2xl font-bold mb-1"
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
    </section>
  );
}
