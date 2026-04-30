"use client";

import { Logo } from "@/components/ui/Logo";
import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-20 border-t border-white/5 bg-black">
      <div className="container-main">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-2">
            <Logo />
            <p className="mt-6 text-[var(--text-secondary)] text-sm max-w-sm leading-relaxed">
              Alpha Apex Advisory Service provides strategic advisory, governance, and long-term growth solutions for enterprise organizations worldwide.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-medium text-sm mb-6 uppercase tracking-wider">Solutions</h4>
            <ul className="space-y-4">
              {[
                { name: "Strategic Advisory", href: "/strategy" },
                { name: "Digital Transformation", href: "/strategy" },
                { name: "Leadership & Governance", href: "/strategy" },
                { name: "Innovation Labs", href: "/strategy" }
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm text-[var(--text-tertiary)] hover:text-white transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium text-sm mb-6 uppercase tracking-wider">Company</h4>
            <ul className="space-y-4">
              {[
                { name: "About Us", href: "/about" },
                { name: "Case Studies", href: "/case-studies" },
                { name: "Contact", href: "/contact" },
                { name: "Privacy Policy", href: "#" }
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm text-[var(--text-tertiary)] hover:text-white transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-[var(--text-tertiary)] text-xs uppercase tracking-widest">
            © {currentYear} Alpha Apex Advisory Service. All rights reserved.
          </p>
          <div className="flex gap-8">
            {[
              { name: "Instagram", href: "https://www.instagram.com/alpha_apex_group?igsh=d2J6end3dmwwcW9h&utm_source=qr" },
              { name: "Facebook", href: "https://www.facebook.com/share/r/1B4TDMTLwt/?mibextid=wwXIfr" },
              { name: "WhatsApp", href: "https://wa.me/97470079333" }
            ].map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs uppercase tracking-widest text-[var(--text-tertiary)] hover:text-white transition-colors"
              >
                {social.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
