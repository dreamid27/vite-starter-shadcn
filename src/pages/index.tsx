import { Features } from "@/components/blocks/features-8";
import { HeroSection } from "@/components/blocks/hero-section-1";
import { FAQSection } from "@/components/blocks/faq-section";
import Templates from "@/components/blocks/templates";
import { Footer7 } from "@/components/ui/footer-7";
import { ReactLenis } from "lenis/react";

const Index = () => {
  return (
    <>
      <ReactLenis root />
      <HeroSection />
      <Features />
      <Templates />
      <FAQSection />
      <Footer7 />
    </>
  );
};

export default Index;
