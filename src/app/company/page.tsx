import { CallToAction } from "@/components/call-to-action";
import Careers from "@/components/careers";
import CoreValues from "@/components/core-values";
import OperatingPrinciples from "@/components/operating-principles";
import Team from "@/components/team";
import VisionMission from "@/components/ui/vision-mission";
import React from "react";

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
