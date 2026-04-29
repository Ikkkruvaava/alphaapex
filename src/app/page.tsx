import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { About } from "@/components/sections/About";
import { Founder } from "@/components/sections/Founder";
import { Services } from "@/components/sections/Services";
import { Stats } from "@/components/sections/Stats";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { Process } from "@/components/sections/Process";
import { Testimonials } from "@/components/sections/Testimonials";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import SplashCursor from "@/components/ui/SplashCursor";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <About />
        <Founder />
        <Services />
        <Stats />
        <CaseStudies />
        <Process />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
      <SplashCursor
        DENSITY_DISSIPATION={3.5}
        VELOCITY_DISSIPATION={2}
        PRESSURE={0.1}
        CURL={3}
        SPLAT_RADIUS={0.2}
        SPLAT_FORCE={6000}
        COLOR_UPDATE_SPEED={10}
        SHADING
        RAINBOW_MODE={false}
        COLOR="#C8963E"
      />
    </>
  );
}
