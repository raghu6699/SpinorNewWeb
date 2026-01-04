import Hero from "@/components/home/Hero";
import ServicePillars from "@/components/home/ServicePillars";
import PainOutcome from "@/components/home/PainOutcome";
import HowItWorks from "@/components/home/HowItWorks";
import UseCases from "@/components/home/UseCases";
import ProofChips from "@/components/home/ProofChips";
import PricingPreview from "@/components/home/PricingPreview";
import FAQ from "@/components/home/FAQ";
import FinalCTA from "@/components/home/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicePillars />
      <PainOutcome />
      <HowItWorks />
      <UseCases />
      <ProofChips />
      <PricingPreview />
      <FAQ />
      <FinalCTA />
    </>
  );
}
