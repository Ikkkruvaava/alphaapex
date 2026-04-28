"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";

const testimonials = [
  {
    quote:
      "Alpha Apex transformed our approach to market expansion. Their strategic insights helped us enter three new markets and grow revenue by 280% in eighteen months.",
    author: "Sarah Chen",
    role: "CEO",
    company: "Nexus Financial",
    rating: 5,
  },
  {
    quote:
      "The digital transformation roadmap they delivered was extraordinary. Every milestone was hit on time, and the results exceeded our most optimistic projections.",
    author: "Marcus Rivera",
    role: "CTO",
    company: "HealthBridge Systems",
    rating: 5,
  },
  {
    quote:
      "Working with the Alpha Apex team felt like having a world-class strategy department embedded in our organization. Truly exceptional advisory.",
    author: "Priya Sharma",
    role: "COO",
    company: "Vertex Manufacturing",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="section-padding relative"
      style={{ background: "var(--bg-secondary)" }}
    >
      <div className="container-main">
        <SectionHeader
          overline="Testimonials"
          title="What our clients say"
          description="Hear from the leaders who've partnered with us to achieve transformational results."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.author}
              className="relative rounded-[var(--radius-xl)] p-7 flex flex-col"
              style={{
                background: "var(--gradient-card)",
                border: "1px solid var(--surface-glass-border)",
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
            >
              {/* Quote icon */}
              <Quote
                size={32}
                className="mb-5 opacity-20"
                style={{ color: "var(--accent)" }}
              />

              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: testimonial.rating }).map((_, j) => (
                  <Star
                    key={j}
                    size={14}
                    fill="var(--accent)"
                    style={{ color: "var(--accent)" }}
                  />
                ))}
              </div>

              {/* Quote text */}
              <p
                className="text-sm leading-relaxed mb-6 flex-grow"
                style={{ color: "var(--text-secondary)" }}
              >
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              {/* Author */}
              <div
                className="flex items-center gap-3 pt-5"
                style={{ borderTop: "1px solid var(--border-subtle)" }}
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold"
                  style={{
                    background: "var(--accent-muted)",
                    color: "var(--accent)",
                  }}
                >
                  {testimonial.author
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <div
                    className="text-sm font-semibold"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {testimonial.author}
                  </div>
                  <div
                    className="text-xs"
                    style={{ color: "var(--text-tertiary)" }}
                  >
                    {testimonial.role}, {testimonial.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
