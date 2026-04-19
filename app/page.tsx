"use client";
import { useFadeIn } from "@/hooks/useFadeIn";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import SixRsSection from "@/components/SixRsSection";
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
      <ProblemSection />
      <Divider />
      <SixRsSection />
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
