import SiteHeader from "@/components/site-header";
import { HeroSection } from "@/components/hero-section";
import { LogoTicker } from "@/components/logo-ticker";
import SiteFooter from "@/components/site-footer";
import { CallToAction } from "@/components/call-to-action";
import Features from "@/components/features";
import { Testimonials } from "@/components/testimonials";
import { GithubIndicator } from "@/components/github-indicator";
import LoomVideo from "@/components/loom-video";
import FAQSection from "@/components/faq";
import HowItWorks from "@/components/how-it-work";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <HeroSection />
      <LogoTicker />
      <LoomVideo />
      {/* <Features /> */}
      <Features />
      <HowItWorks />
      <Testimonials />
      <CallToAction />
      <FAQSection />
      {/* <GithubIndicator /> */}
      <SiteFooter />
    </>
  );
}
