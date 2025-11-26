import { BackgroundEffects } from "@/components/BackgroundEffects";
import { RibbonCursorTrail } from "@/components/RibbonCursorTrail";
import { BubbleParticles } from "@/components/BubbleParticles";
import { MusicToggle } from "@/components/MusicToggle";
import { HeroSection } from "@/components/HeroSection";
import { CakeCuttingSection } from "@/components/CakeCuttingSection";
import { DecorationsSection } from "@/components/DecorationsSection";
import { MemoriesSection } from "@/components/MemoriesSection";
import { WishBoard } from "@/components/WishBoard";
import { GiftUnboxingSection } from "@/components/GiftUnboxingSection";
import { CinematicMessage } from "@/components/CinematicMessage";
import { BestMomentsSection } from "@/components/BestMomentsSection";
import { FireworksFinale } from "@/components/FireworksFinale";
import { HeaderBar } from "@/components/HeaderBar";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden text-cream-100">
      {/* Global ambient layers */}
      <BackgroundEffects />
      <BubbleParticles />
      <RibbonCursorTrail />
      <MusicToggle />
      <HeaderBar />

      <main className="relative z-10 mx-auto flex max-w-6xl flex-col gap-32 py-16 md:py-24">
        <HeroSection />
        <CakeCuttingSection />
        <DecorationsSection />
        <MemoriesSection />
        <WishBoard />
        <GiftUnboxingSection />
        <CinematicMessage />
        <BestMomentsSection />
        <FireworksFinale />
      </main>
    </div>
  );
}
