"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Process", href: "#process" },
  { label: "Testimonials", href: "#testimonials" },
];

export function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-[var(--z-sticky)] transition-all duration-300"
      style={{
        background: scrolled
          ? "rgba(0, 0, 0, 0.8)"
          : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled
          ? "1px solid rgba(255, 255, 255, 0.05)"
          : "1px solid transparent",
      }}
    >
      <div className="container-main flex items-center justify-between h-20">
        {/* Logo */}
        <Logo />

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[10px] font-bold uppercase tracking-[0.35em] text-[var(--text-secondary)] hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Button
            variant="primary"
            size="sm"
            className="rounded-full"
          >
            Get Started
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed inset-x-0 top-20 bg-black border-b border-white/5 md:hidden z-[var(--z-sticky)]"
          >
            <div className="flex flex-col p-6 gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-lg font-medium text-[var(--text-secondary)] hover:text-white transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Button
                variant="primary"
                className="w-full"
                onClick={() => setMobileOpen(false)}
              >
                Get Started
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
