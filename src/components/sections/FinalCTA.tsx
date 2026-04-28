"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function FinalCTA() {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background glow — warm gold, subtle */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full blur-[160px] opacity-10"
        style={{ background: "var(--accent)" }}
      />

      <div className="container-main relative z-10">
        <motion.div
          className="relative rounded-[var(--radius-2xl)] overflow-hidden"
          style={{
            background:
              "linear-gradient(145deg, rgba(200, 150, 62, 0.06) 0%, rgba(200, 150, 62, 0.02) 50%, rgba(200, 150, 62, 0.05) 100%)",
            border: "1px solid var(--border-accent)",
          }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          {/* Inner grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: `linear-gradient(var(--accent) 1px, transparent 1px),
                linear-gradient(90deg, var(--accent) 1px, transparent 1px)`,
              backgroundSize: "40px 40px",
            }}
          />

          <div className="relative px-8 py-16 md:px-16 md:py-20 text-center">
            <motion.p
              className="text-overline mb-5"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Ready to elevate?
            </motion.p>

            <motion.h2
              className="text-display max-w-3xl mx-auto mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Let&apos;s reach your{" "}
              <span style={{ color: "var(--accent-light)" }}>highest point</span>{" "}
              together
            </motion.h2>

            <motion.p
              className="text-body-lg max-w-xl mx-auto mb-10"
              style={{ color: "var(--text-secondary)" }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              Schedule a confidential strategy session with our leadership team.
              No obligations—just actionable insights for your organization.
            </motion.p>

            <motion.div
              className="flex flex-wrap justify-center gap-4"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <Button
                variant="primary"
                size="lg"
                icon={<ArrowUpRight size={18} />}
              >
                Schedule a Strategy Call
              </Button>
              <Button variant="secondary" size="lg">
                Download Our Brochure
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
