import { CallToAction } from "@/components/call-to-action";
import Careers from "@/components/careers";
import CoreValues from "@/components/core-values";
import OperatingPrinciples from "@/components/operating-principles";
import Team from "@/components/team";
import VisionMission from "@/components/ui/vision-mission";
import type { Metadata } from "next";
import Head from "next/head";
import React from "react";

export const metadata: Metadata = {
  title: "HelloTrace | Company",
  description: "Align and Drive Metrics with HelloTrace.",
};

export default function Company() {
  return (
    <>
      <VisionMission />
      <CoreValues />
      <OperatingPrinciples />
      <Team />
      <Careers />
      <CallToAction />
    </>
  );
}
