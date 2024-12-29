"use client";

import { ActionButton } from "@/components/action-button";
import BackgroundStars from "@/assets/stars.png";
import BackgroundGrid from "@/assets/grid-lines.png";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useScroll,
  useTransform,
} from "framer-motion";
import { RefObject, useEffect, useRef, useState } from "react";

const useRelativeMousePosition = (to: RefObject<HTMLElement>) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const updateMousePosition = (event: MouseEvent) => {
    if (!to.current) return;
    const { top, left } = to.current.getBoundingClientRect();
    mouseX.set(event.x - left);
    mouseY.set(event.y - top);
  };

  useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  });
  return [mouseX, mouseY];
};

export function CallToAction() {
  const sectionRef = useRef<HTMLElement>(null);
  const borderedDivRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: [`start end`, "end start"],
  });
  const backgroundPositionY = useTransform(
    scrollYProgress,
    [0, 1],
    [-300, 300]
  );

  const [mouseX, mouseY] = useRelativeMousePosition(borderedDivRef);
  const maskImage = useMotionTemplate`radial-gradient(50% 50% at ${mouseX}px ${mouseY}px, black, transparent)`;

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
  });
  const [errors, setErrors] = useState({ name: "", email: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors: { name: string; email: string } = { name: "", email: "" };
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) newErrors.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Enter a valid email address.";
    setErrors(newErrors);
    return !newErrors.name && !newErrors.email;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted", formData);
      // Add submission logic here
    }
  };

  return (
    <>
      <section className={"py-20 md:py-24"} ref={sectionRef}>
        <div className={"container"}>
          <motion.div
            animate={{ backgroundPositionX: BackgroundStars.width }}
            transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
            className={
              "border border-muted py-24 px-6 rounded-xl overflow-hidden relative group"
            }
            style={{
              backgroundImage: `url(${BackgroundStars.src})`,
              backgroundPositionY,
            }}
          >
            <div
              className={
                "absolute inset-0 bg-[rgb(74,32,138)] bg-blend-overlay [mask-image:radial-gradient(50%_50%_at_50%_35%,black,transparent)] group-hover:opacity-0 transition duration-700"
              }
              style={{ backgroundImage: `url(${BackgroundGrid.src})` }}
            />
            <motion.div
              className={
                "absolute inset-0 bg-[rgb(74,32,138)] bg-blend-overlay opacity-0 group-hover:opacity-100 transition duration-700"
              }
              style={{
                backgroundImage: `url(${BackgroundGrid.src})`,
                maskImage: maskImage,
              }}
              ref={borderedDivRef}
            />
            <div className={"relative"}>
              <h2
                className={"text-5xl tracking-tighter text-center font-medium"}
              >
                Request a Demo
              </h2>
              <p
                className={
                  "text-center text-lg md:text-xl text-white/70 tracking-tight px-4 mt-5"
                }
              >
                Drive metrics alignment and data-driven operational excellence
              </p>
              <form
                className={"mt-8 space-y-4 max-w-md mx-auto"}
                onSubmit={handleSubmit}
              >
                <div>
                  <label
                    htmlFor="name"
                    className={"block text-sm font-medium text-white"}
                  >
                    Name (Required)
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={
                      "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-md py-3 px-4"
                    }
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="company"
                    className={"block text-sm font-medium text-white"}
                  >
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className={
                      "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-md py-3 px-4"
                    }
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className={"block text-sm font-medium text-white"}
                  >
                    Email (Required)
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={
                      "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-md py-3 px-4"
                    }
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>
                <div className={"flex justify-center !mt-16"}>
                  <ActionButton
                    label={"Join Waitlist for Early Access"}
                    className="text-xl w-full"
                  />
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
