"use client";

import { Logo } from "@/components/ui/Logo";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-20 border-t border-white/5 bg-black">
      <div className="container-main">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-2">
            <Logo />
            <p className="mt-6 text-[var(--text-secondary)] text-sm max-w-sm leading-relaxed">
              Alpha Apex Advisory Group provides strategic advisory, governance, and long-term growth solutions for enterprise organizations worldwide.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-medium text-sm mb-6 uppercase tracking-wider">Solutions</h4>
            <ul className="space-y-4">
              {["Strategic Advisory", "Digital Transformation", "Leadership & Governance", "Innovation Labs"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-[var(--text-tertiary)] hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium text-sm mb-6 uppercase tracking-wider">Company</h4>
            <ul className="space-y-4">
              {["About Us", "Case Studies", "Contact", "Privacy Policy"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-[var(--text-tertiary)] hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-[var(--text-tertiary)] text-xs uppercase tracking-widest">
            © {currentYear} Alpha Apex Advisory Group. All rights reserved.
          </p>
          <div className="flex gap-8">
            {["Twitter", "LinkedIn", "Instagram"].map((social) => (
              <a
                key={social}
                href="#"
                className="text-xs uppercase tracking-widest text-[var(--text-tertiary)] hover:text-white transition-colors"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
