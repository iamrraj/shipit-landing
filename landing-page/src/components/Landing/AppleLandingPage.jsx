import { useState } from "react";
import AppleHeader from "./AppleHeader";
import WaitlistModal from "./WaitlistModal";
import HeroSection from "./sections/HeroSection";
import EnginesSection from "./sections/EnginesSection";
import FeaturesSection from "./sections/FeaturesSection";
import PipelineSection from "./sections/PipelineSection";
import CliSection from "./sections/CliSection";
import UseCasesSection from "./sections/UseCasesSection";
import ArchitectureSection from "./sections/ArchitectureSection";
import OfferGridSection from "./sections/OfferGridSection";
import QuickStartSection from "./sections/QuickStartSection";
import FooterCTASection from "./sections/FooterCTASection";

export default function AppleLandingPage() {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);
  const openWaitlist = () => setIsWaitlistOpen(true);

  return (
    <div className="bg-[var(--color-bg-primary)] text-[var(--color-text-primary)]">
      <AppleHeader onJoinWaitlist={openWaitlist} />

      <main>
        <HeroSection onJoinWaitlist={openWaitlist} />
        <EnginesSection />
        <FeaturesSection />
        <PipelineSection />
        <CliSection />
        <UseCasesSection />
        <ArchitectureSection />
        <OfferGridSection />
        <QuickStartSection />
        <FooterCTASection onJoinWaitlist={openWaitlist} />
      </main>

      <WaitlistModal
        isOpen={isWaitlistOpen}
        onClose={() => setIsWaitlistOpen(false)}
      />
    </div>
  );
}
