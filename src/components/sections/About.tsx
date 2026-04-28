"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";

const values = [
  "Strategic clarity in every engagement",
  "Measurable outcomes, not just recommendations",
  "Structured leadership guidance",
  "Long-term partnership approach",
];

export function About() {
  return (
    <section className="section-padding relative">
      <div className="container-main">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Image composition */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
          >
            {/* Main image */}
            <div
              className="relative rounded-[var(--radius-2xl)] overflow-hidden"
              style={{ aspectRatio: "4/3" }}
            >
              <Image
                src="/images/about-team.png"
                alt="Alpha Apex team collaborating on strategy"
                fill
                className="object-cover"
                quality={85}
              />
              {/* Subtle overlay */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(145deg, color-mix(in srgb, var(--bg-primary) 10%, transparent) 0%, color-mix(in srgb, var(--bg-primary) 30%, transparent) 100%)",
                }}
              />
            </div>

            {/* Floating stat card */}
            <motion.div
              className="absolute -bottom-6 -right-4 md:right-6 px-6 py-5 rounded-[var(--radius-xl)] z-10"
              style={{
                background: "color-mix(in srgb, var(--bg-primary) 85%, transparent)",
                backdropFilter: "blur(20px) saturate(180%)",
                border: "1px solid var(--border-accent)",
                boxShadow: "var(--shadow-lg)",
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div
                className="text-3xl font-bold mb-1"
                style={{ color: "var(--accent-light)" }}
              >
                15+
              </div>
              <div
                className="text-sm font-medium"
                style={{ color: "var(--text-secondary)" }}
              >
                Years of Excellence
              </div>
            </motion.div>

            {/* Decorative accent line */}
            <div
              className="absolute -top-3 -left-3 w-20 h-20 rounded-[var(--radius-xl)]"
              style={{
                border: "2px solid var(--border-accent)",
                opacity: 0.4,
              }}
            />
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p className="text-overline mb-4">About Us</p>
            <h2
              className="text-heading mb-5"
              style={{ color: "var(--text-primary)" }}
            >
              We provide structured leadership guidance and measurable
              transformation
            </h2>
            <p
              className="text-body-lg mb-8"
              style={{ color: "var(--text-secondary)" }}
            >
              Alpha Apex Advisory Group is the master corporate brand
              representing strategic advisory, governance, and long-term
              growth solutions. We guide organizations to their highest
              point of performance through strategy, clarity, and execution
              discipline.
            </p>

            {/* Value propositions */}
            <ul className="space-y-4 mb-8">
              {values.map((item, i) => (
                <motion.li
                  key={item}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                >
                  <CheckCircle
                    size={20}
                    className="shrink-0 mt-0.5"
                    style={{ color: "var(--accent)" }}
                  />
                  <span
                    className="text-sm font-medium"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {item}
                  </span>
                </motion.li>
              ))}
            </ul>

            <Button
              variant="primary"
              icon={<ArrowUpRight size={16} />}
            >
              Learn More About Us
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
