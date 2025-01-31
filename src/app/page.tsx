import { AboutSection } from "@/components/about-section";
import { ExpertiseSection } from "@/components/expertise-section";
import { FeaturedWork } from "@/components/featured-work";
import { HeroSection } from "@/components/hero-section";
import { Nav } from "@/components/nav";
export default function Home() {
  return (
    <main className="min-h-screen">
      <Nav />
      <HeroSection />
      <AboutSection />
      <FeaturedWork />
      <ExpertiseSection />
    </main>
  );
}
