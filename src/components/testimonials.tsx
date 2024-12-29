"use client";

import Avatar1 from "@/assets/1.webp";
import Avatar2 from "@/assets/2.webp";
import Avatar3 from "@/assets/3.webp";
import Image from "next/image";
import { motion } from "framer-motion";

const testimonials = [
  {
    text: "Trace quickly and comprehensively analyzes segment-level drivers of our key KPIs. We are running complex pre/post analysis with a few clicks. Excited to leverage Trace for our needs.",
    name: "Peter Muller",
    position: "Head of Insights, @Capsule",
    avatarImg: Avatar1,
  },
  {
    text: "Trace is taking a novel approach to unlocking the power of data for end consumers. By building on a semantic layer abstraction, Trace is targeting use cases that are entirely manual and tedious today - KPI root causing, experimentation, audience building and OKR planning.",
    name: "Chad Sanderson",
    position: "Head of Data, Product Manager, Data UX Champion, @Convoy",
    avatarImg: Avatar2,
  },
  {
    text: "At Airbnb, we got tremendous utility from our in-house metrics tool, Minerva. Trace's unique approach extends beyond the goals of Minerva, serving automated 'templates' for segment root-cause analysis, experimentation etc. - a next generation analytics and operations tool.",
    name: "Aaron Siegel",
    position: "prev. Head of Data Platform, @(AirBnB and Twitter)",
    avatarImg: Avatar3,
  },
];

export function Testimonials() {
  return (
    <>
      <section className={"py-20 md:py-24"}>
        <div className={"container"}>
          <h2
            className={
              "text-5xl md:text-6xl font-medium text-center tracking-tighter mb-16"
            }
          >
            Trusted and Loved by
          </h2>

          <div
            className={
              "flex overflow-hidden mt-10 [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]"
            }
          >
            <motion.div
              initial={{ translateX: "-50%" }}
              animate={{ translateX: "0" }}
              transition={{
                repeat: Infinity,
                duration: 50,
                ease: "linear",
              }}
              className={"flex flex-none gap-5"}
            >
              {[...testimonials, ...testimonials].map((testimonial, index) => (
                <div
                  key={index}
                  className={
                    "p-6 md:p-10 rounded-xl bg-gradient-to-b from-[#190d2e] to-[#4a208a] max-w-xs md:max-w-md flex-none"
                  }
                >
                  <p className={"text-lg md:text-xl tracking-tight"}>
                    {testimonial.text}
                  </p>
                  <div className={"flex items-center gap-3 mt-5"}>
                    <Image
                      src={testimonial.avatarImg}
                      alt={`${testimonial.name}`}
                      className={"size-14 rounded-full grayscale"}
                    />
                    <div>
                      <p>{testimonial.name}</p>
                      <p className={"text-white/50 text-sm"}>
                        {testimonial.position}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
