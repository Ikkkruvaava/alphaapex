"use client";

import { motion } from "framer-motion";

const partners = [
  { name: "Bain", icon: "B" },
  { name: "PwC", icon: "P" },
  { name: "EY", icon: "E" },
  { name: "KPMG", icon: "K" },
  { name: "Accenture", icon: "A" },
  { name: "Deloitte", icon: "D" },
  { name: "McKinsey", icon: "M" },
];

export function TrustBar() {
  return (
    <section className="py-12 border-b border-white/5 bg-black overflow-hidden">
      <div className="container-main">
        <p className="text-center text-[10px] uppercase tracking-[0.2em] text-[var(--text-tertiary)] mb-10">
          Trusted by Industry Leaders
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-10 grayscale opacity-40 hover:opacity-100 transition-opacity duration-500">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="flex items-center gap-4"
            >
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center font-bold text-white text-sm">
                {partner.icon}
              </div>
              <span className="text-xl font-semibold tracking-tight text-white">
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
