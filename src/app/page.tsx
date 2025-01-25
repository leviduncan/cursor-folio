'use client';

import { ExpertiseSection } from "@/components/expertise-section";
import { FeaturedWork } from "@/components/featured-work";
import { HeroSection } from "@/components/hero-section";
import { Nav } from "@/components/nav";
import { ServicesSection } from "@/components/services-section";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Nav />
      <HeroSection />
      <ServicesSection />
      <FeaturedWork />
      <ExpertiseSection />
    </main>
  );
}
