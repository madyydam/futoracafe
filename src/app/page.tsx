import dynamic from "next/dynamic";
import Header from "@/components/sections/header";
import HeroSection from "@/components/sections/hero";

import { WelcomeMenuSkeleton, StatsSkeleton } from "@/components/Skeletons";

// Lazy loading below-the-fold components
const WelcomeMenu = dynamic(() => import("@/components/sections/welcome-menu"), {
  loading: () => <WelcomeMenuSkeleton />,
});

const StatsSection = dynamic(() => import("@/components/sections/stats-section"), {
  loading: () => <StatsSkeleton />,
});

const OurStory = dynamic(() => import("@/components/sections/our-story"), {
  loading: () => <div className="h-[400px] animate-pulse bg-gray-50" />,
});

const Footer = dynamic(() => import("@/components/sections/footer"), {
  loading: () => <div className="h-[300px] animate-pulse bg-black/5" />,
});

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <WelcomeMenu />
        <StatsSection />
        <OurStory />
      </main>
      <Footer />
    </div>
  );
}
