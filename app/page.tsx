import HeroSection from "@/components/hero-section";
import CTASection from "@/components/cta-section";
import VideoSection from "@/components/video-section";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <CTASection />
      <VideoSection />
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1 className="text-4xl font-bold mb-4">Welcome to Trace</h1>
        <p className="text-xl">Your app description goes here</p>
      </div>
    </div>
  );
}
