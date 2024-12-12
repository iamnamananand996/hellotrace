import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative min-h-[600px] bg-[#14141f] overflow-hidden">
      <div className="absolute inset-0 flex justify-center">
        <div className="w-full max-w-[1200px]">
          <Image
            src="/images/hero-bg.webp"
            alt="Network background"
            width={1200}
            height={600}
            priority
            className="w-full h-auto"
          />
        </div>
      </div>
      <div className="relative flex items-center justify-center h-full px-6 py-20">
        <div className="text-center w-full max-w-3xl">
          <h1 className="text-white text-6xl font-bold mb-6">
            Align and Drive Metrics
          </h1>
          <p className="text-white/80 text-xl">
            Trace brings the powerful concept of metric trees to life aligning
            an organization's inputs against the desired business outcomes
          </p>
        </div>
      </div>
    </section>
  );
}
