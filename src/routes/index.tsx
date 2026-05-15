import { createFileRoute } from "@tanstack/react-router";
import { HeroSection } from "@/components/dextora/HeroSection";
import { CredibilityStrip } from "@/components/dextora/CredibilityStrip";
import { WhoWeAre } from "@/components/dextora/WhoWeAre";
import { CapabilitiesSection } from "@/components/dextora/CapabilitiesSection";
import { ProductsSection } from "@/components/dextora/ProductsSection";
import { HowWeWork } from "@/components/dextora/HowWeWork";
import { IndustriesSection } from "@/components/dextora/IndustriesSection";
import { LeadCapture } from "@/components/dextora/LeadCapture";
import { AboutPillars } from "@/components/dextora/AboutPillars";
import { FAQSection } from "@/components/dextora/FAQSection";
import { FooterSection } from "@/components/dextora/FooterSection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dextora Tech | India's Premier AI Development Studio" },
      {
        name: "description",
        content:
          "We build AI that transforms industries — education, sales, media, and beyond. End-to-end intelligent systems for ambitious founders and enterprises across India.",
      },
      { property: "og:title", content: "Dextora Tech | India's Premier AI Development Studio" },
      {
        property: "og:description",
        content:
          "End-to-end intelligent systems for ambitious founders and enterprises across India.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main style={{ overflowX: "clip", backgroundColor: "#080B14" }}>
      <HeroSection />
      <CredibilityStrip />
      <WhoWeAre />
      <CapabilitiesSection />
      <ProductsSection />
      <HowWeWork />
      <IndustriesSection />
      <LeadCapture />
      <AboutPillars />
      <FAQSection />
      <FooterSection />
    </main>
  );
}
