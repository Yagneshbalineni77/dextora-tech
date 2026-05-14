import { createFileRoute } from "@tanstack/react-router";
import { HeroSection } from "@/components/dextora/HeroSection";
import { MarqueeSection } from "@/components/dextora/MarqueeSection";
import { StudioSection } from "@/components/dextora/StudioSection";
import { CapabilitiesSection } from "@/components/dextora/CapabilitiesSection";
import { ProductsSection } from "@/components/dextora/ProductsSection";
import { CaseStudySection } from "@/components/dextora/CaseStudySection";
import { ContactSection } from "@/components/dextora/ContactSection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dextora — Engineering the Interactive Future" },
      { name: "description", content: "Dextora is a studio of three god-tier AI products — adaptive learning, autonomous video, and reality-grade site generation." },
      { property: "og:title", content: "Dextora — Engineering the Interactive Future" },
      { property: "og:description", content: "Cinematic AI products that replace the generic web." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main style={{ overflowX: "clip", backgroundColor: "#0C0C0C" }}>
      <HeroSection />
      <MarqueeSection />
      <StudioSection />
      <CapabilitiesSection />
      <ProductsSection />
      <CaseStudySection />
      <ContactSection />
    </main>
  );
}
