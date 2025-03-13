import React from "react";
import HeroSection from "./HeroSection";
import FeaturesSection from "./FeaturesSection";
import DemoSection from "./DemoSection";
import TestimonialsSection from "./TestimonialsSection";
import PricingSection from "./PricingSection";
import FaqSection from "./FaqSection";
import CtaSection from "./CtaSection";
import FooterSection from "./FooterSection";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <FeaturesSection />
      <DemoSection />
      <TestimonialsSection />
      <PricingSection />
      <FaqSection />
      <CtaSection />
      <FooterSection />
    </div>
  );
};

export default LandingPage;
