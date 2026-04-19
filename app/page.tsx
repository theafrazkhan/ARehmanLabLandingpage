"use client";
import { useFadeIn } from "@/hooks/useFadeIn";
import Hero from "@/components/Hero";
import SmartphoneAnalogy from "@/components/SmartphoneAnalogy";
import ProblemSection from "@/components/ProblemSection";
import TrustFrameworkSection from "@/components/SixRsSection";
import InstructorBio from "@/components/InstructorBio";
import LearnSection from "@/components/LearnSection";
import StepsStrip from "@/components/StepsStrip";
import ForWhoSection from "@/components/ForWhoSection";
import Testimonials from "@/components/Testimonials";
import VisionBlock from "@/components/VisionBlock";
import ClosingSection from "@/components/ClosingSection";

function Divider() {
  return <div className="section-divider" />;
}

export default function Home() {
  useFadeIn();

  return (
    <main>
      <Hero />
      <SmartphoneAnalogy />
      <ProblemSection />
      <Divider />
      <TrustFrameworkSection />
      <InstructorBio />
      <LearnSection />
      <Divider />
      <StepsStrip />
      <Divider />
      <ForWhoSection />
      <Testimonials />
      <VisionBlock />
      <ClosingSection />
    </main>
  );
}
