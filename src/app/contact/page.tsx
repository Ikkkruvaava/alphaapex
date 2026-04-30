"use client";

import { motion } from "framer-motion";
import SoftAurora from "@/components/ui/SoftAurora";
import { Button } from "@/components/ui/Button";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black pt-32 pb-20 relative overflow-hidden">
      {/* Dynamic Aurora Background */}
      <div className="fixed inset-0 z-[0] opacity-30 mix-blend-screen pointer-events-none">
        <SoftAurora
          speed={0.4}
          scale={1.3}
          brightness={1.2}
          color1="#1A3B5C"
          color2="#F59E0B"
        />
      </div>

      <div className="container-main relative z-10 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <span className="text-overline">Get In Touch</span>
        </motion.div>

        <motion.h1
          className="text-4xl md:text-6xl font-serif text-white mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          Begin your journey to <span className="italic text-[var(--accent)]">the top</span>
        </motion.h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-12"
          >
            <div>
              <h2 className="text-2xl text-white mb-4 font-serif">Global Headquarters</h2>
              <p className="text-[var(--text-secondary)] mb-2">Alpha Apex Advisory Service</p>
              <p className="text-[var(--text-tertiary)]">Doha, Qatar</p>
            </div>

            <div>
              <h2 className="text-2xl text-white mb-4 font-serif">Direct Contact</h2>
              <div className="space-y-4">
                <a href="https://wa.me/97470079333" target="_blank" rel="noreferrer" className="block text-[var(--text-secondary)] hover:text-white transition-colors">
                  WhatsApp: +974 7007 9333
                </a>
                <a href="mailto:contact@alphaapex.com" className="block text-[var(--text-secondary)] hover:text-white transition-colors">
                  Email: contact@alphaapex.com
                </a>
              </div>
            </div>

            <div>
              <h2 className="text-2xl text-white mb-4 font-serif">Social Connect</h2>
              <div className="flex flex-col space-y-4">
                <a href="https://www.instagram.com/alpha_apex_group?igsh=d2J6end3dmwwcW9h&utm_source=qr" target="_blank" rel="noreferrer" className="text-[var(--text-secondary)] hover:text-white transition-colors flex items-center gap-3">
                  <span className="w-8 h-px bg-white/20" /> Instagram
                </a>
                <a href="https://www.facebook.com/share/r/1B4TDMTLwt/?mibextid=wwXIfr" target="_blank" rel="noreferrer" className="text-[var(--text-secondary)] hover:text-white transition-colors flex items-center gap-3">
                  <span className="w-8 h-px bg-white/20" /> Facebook
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-xl text-white mb-6">Request a Consultation</h3>
            <form className="space-y-6">
              <div>
                <label className="block text-xs uppercase tracking-wider text-[var(--text-tertiary)] mb-2">Full Name</label>
                <input type="text" className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[var(--accent)] transition-colors" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-wider text-[var(--text-tertiary)] mb-2">Corporate Email</label>
                <input type="email" className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[var(--accent)] transition-colors" placeholder="john@company.com" />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-wider text-[var(--text-tertiary)] mb-2">Inquiry Type</label>
                <select className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[var(--accent)] transition-colors appearance-none">
                  <option value="strategic">Strategic Advisory</option>
                  <option value="digital">Digital Transformation</option>
                  <option value="governance">Leadership & Governance</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-xs uppercase tracking-wider text-[var(--text-tertiary)] mb-2">Message</label>
                <textarea rows={4} className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[var(--accent)] transition-colors resize-none" placeholder="How can we help your business accelerate?" />
              </div>
              <Button variant="primary" className="w-full py-4">
                Submit Inquiry
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
