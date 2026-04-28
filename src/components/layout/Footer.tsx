"use client";

import { ArrowUpRight } from "lucide-react";
import { Logo } from "@/components/ui/Logo";

const footerLinks = {
  company: [
    { label: "About Us", href: "#" },
    { label: "Leadership", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Contact", href: "#" },
  ],
  services: [
    { label: "Strategic Advisory", href: "#" },
    { label: "Governance", href: "#" },
    { label: "Digital Transformation", href: "#" },
    { label: "Performance", href: "#" },
  ],
  resources: [
    { label: "Case Studies", href: "#" },
    { label: "Insights", href: "#" },
    { label: "Whitepapers", href: "#" },
    { label: "Events", href: "#" },
  ],
};

export function Footer() {
  return (
    <footer
      className="relative"
      style={{
        background: "var(--bg-secondary)",
        borderTop: "1px solid var(--border-default)",
      }}
    >
      <div className="container-main section-padding">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-5">
              <Logo size={34} showTagline />
            </div>
            <p
              className="text-body max-w-sm mb-6"
              style={{ color: "var(--text-secondary)" }}
            >
              We guide organizations to their highest point of performance
              through strategy, clarity, and execution discipline.
            </p>
            <a
              href="#"
              className="btn btn-secondary btn-sm inline-flex"
            >
              Get in Touch
              <ArrowUpRight size={14} />
            </a>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4
                className="font-semibold text-sm uppercase tracking-wider mb-4"
                style={{ color: "var(--text-primary)" }}
              >
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm transition-colors duration-200"
                      style={{ color: "var(--text-tertiary)" }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.color = "var(--accent)")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.color =
                          "var(--text-tertiary)")
                      }
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <hr className="divider mb-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-caption" style={{ color: "var(--text-muted)" }}>
            © {new Date().getFullYear()} Alpha Apex Advisory Group. All rights
            reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-caption transition-colors duration-200"
              style={{ color: "var(--text-muted)" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--text-secondary)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--text-muted)")
              }
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-caption transition-colors duration-200"
              style={{ color: "var(--text-muted)" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--text-secondary)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--text-muted)")
              }
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
