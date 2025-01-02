import { HeroSection } from "@/components/hero-section";
import { LogoTicker } from "@/components/logo-ticker";
import { CallToAction } from "@/components/call-to-action";
import Features from "@/components/features";
import { Testimonials } from "@/components/testimonials";
import LoomVideo from "@/components/loom-video";
import FAQSection from "@/components/faq";
import HowItWorks from "@/components/how-it-work";

export default function Home() {
  return (
    <>
      <HeroSection />
      <LogoTicker />
      <LoomVideo />
      <Features />
      <HowItWorks />
      <Testimonials />
      <CallToAction />
      <FAQSection />
    </>
  );
}
