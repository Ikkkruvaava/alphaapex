"use client";

import { motion } from "framer-motion";

const logos = [
  "Accenture",
  "Deloitte",
  "McKinsey",
  "BCG",
  "Bain",
  "PwC",
  "EY",
  "KPMG",
];

export function TrustBar() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background: "var(--bg-secondary)",
        borderTop: "1px solid var(--border-subtle)",
        borderBottom: "1px solid var(--border-subtle)",
      }}
    >
      <div className="container-main py-10 md:py-14">
        <motion.p
          className="text-center text-caption mb-8"
          style={{ color: "var(--text-muted)" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Trusted by industry leaders worldwide
        </motion.p>

        {/* Logo scroll */}
        <div className="relative">
          {/* Fade edges */}
          <div
            className="absolute left-0 top-0 bottom-0 w-20 z-10"
            style={{
              background: `linear-gradient(90deg, var(--bg-secondary), transparent)`,
            }}
          />
          <div
            className="absolute right-0 top-0 bottom-0 w-20 z-10"
            style={{
              background: `linear-gradient(270deg, var(--bg-secondary), transparent)`,
            }}
          />

          <div className="flex items-center gap-12 overflow-hidden">
            <motion.div
              className="flex items-center gap-12 shrink-0"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                duration: 25,
                ease: "linear",
                repeat: Infinity,
              }}
            >
              {[...logos, ...logos].map((name, i) => (
                <div
                  key={`${name}-${i}`}
                  className="flex items-center gap-2 shrink-0 px-4"
                >
                  <div
                    className="w-8 h-8 rounded-md flex items-center justify-center text-xs font-bold"
                    style={{
                      background: "var(--surface-glass)",
                      border: "1px solid var(--border-default)",
                      color: "var(--text-tertiary)",
                    }}
                  >
                    {name.charAt(0)}
                  </div>
                  <span
                    className="text-lg font-semibold tracking-tight whitespace-nowrap"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {name}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
