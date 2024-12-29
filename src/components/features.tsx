"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

type FeatureType = "games" | "latency" | "deploy";

interface FeatureContent {
  title: string;
  description: string;
  gradient: string;
  videoSrc: string;
}

const FEATURES: Record<FeatureType, FeatureContent> = {
  games: {
    title: "Align Cross-Functional Teams",
    description:
      "By bringing metric trees to life, Trace aligns stakeholders across the org as the business strategy is represented via input levers and desired output KPIs.",
    gradient: "bg-[#15171e]",
    videoSrc: "/assets/1.webm",
  },
  latency: {
    title: "Model Business Processes",
    description:
      "Metric trees can model conversion funnels, growth equations, operational flows, or financial breakdowns. Trace diagnoses drivers to empower growth, product, operations, finance and executive leadership teams.",
    gradient: "bg-[#15171e]",
    videoSrc: "/assets/2.webm",
  },
  deploy: {
    title: "Powerful Metric Deep Dives",
    description:
      "Trace comes with a high-powered analysis engine that enables effortless metric deep dives. Streamline your business reviews, and go deeper on your pre/post or controlled experimentation analysis.",
    gradient: "bg-[#17161d]",
    videoSrc: "/assets/3.webm",
  },
};

export default function Features() {
  const [activeFeature, setActiveFeature] = useState<FeatureType>("games");
  const videoRefs = useRef<Record<FeatureType, HTMLVideoElement | null>>({
    games: null,
    latency: null,
    deploy: null,
  });

  useEffect(() => {
    // Pause all videos
    Object.values(videoRefs.current).forEach((video) => video?.pause());
    // Play the active video
    const activeVideo = videoRefs.current[activeFeature];
    if (activeVideo) {
      activeVideo.currentTime = 0;
      activeVideo
        .play()
        .catch((error) => console.error("Error playing video:", error));
    }
  }, [activeFeature]);

  return (
    <div className="p-4 md:p-8 flex items-center justify-center my-40">
      <div className="w-full max-w-7xl grid lg:grid-cols-3 gap-6">
        {/* Left column with feature cards */}
        <div className="lg:col-span-1 space-y-4">
          {(Object.entries(FEATURES) as [FeatureType, FeatureContent][]).map(
            ([key, feature]) => (
              <FeatureCard
                key={key}
                title={feature.title}
                description={feature.description}
                highlighted={activeFeature === key}
                onHover={() => setActiveFeature(key)}
              />
            )
          )}
        </div>

        {/* Right column with dynamic video content */}
        <div className="lg:col-span-2 relative aspect-square lg:aspect-auto rounded-3xl overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFeature}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className={`absolute inset-0 ${FEATURES[activeFeature].gradient}`}
            >
              <video
                ref={(el) => {
                  videoRefs.current[activeFeature] = el;
                }}
                src={FEATURES[activeFeature].videoSrc}
                className="absolute inset-0 w-full h-full object-contain"
                loop
                autoPlay
                playsInline
                muted
                aria-label={`Video showcasing ${FEATURES[activeFeature].title}`}
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

interface FeatureCardProps {
  title: string;
  description: string;
  highlighted?: boolean;
  onHover: () => void;
}

function FeatureCard({
  title,
  description,
  highlighted = false,
  onHover,
}: FeatureCardProps) {
  return (
    <div
      onMouseEnter={onHover}
      className={`
        rounded-3xl p-8 bg-[#15171e] backdrop-blur-sm
        transition-all duration-300 hover:bg-[#15171e] cursor-pointer
        ${
          highlighted
            ? "ring-1 ring-purple-500/50 shadow-[0px_0px_10px_#8c45ff]"
            : ""
        }
      `}
    >
      <h2 className="text-2xl font-semibold text-white mb-3">{title}</h2>
      <p className="text-gray-400 mb-4">{description}</p>
    </div>
  );
}
