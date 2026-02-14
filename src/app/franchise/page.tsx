import dynamic from 'next/dynamic';
import Header from "@/components/sections/header";
import HeroSection from "@/components/sections/hero";
import IntroText from "@/components/sections/intro-text";

// Lazy load location sections
const LocationPrabhatRoad = dynamic(() => import("@/components/sections/location-prabhat-road"), {
  loading: () => <div className="h-[500px] animate-pulse bg-gray-50" />,
});

const LocationBibwewadi = dynamic(() => import("@/components/sections/location-bibwewadi"), {
  loading: () => <div className="h-[500px] animate-pulse bg-gray-100" />,
});

const LocationAeroMall = dynamic(() => import("@/components/sections/location-aero-mall"), {
  loading: () => <div className="h-[500px] animate-pulse bg-gray-50" />,
});

const LocationPimpleSaudagar = dynamic(() => import("@/components/sections/location-pimple-saudagar"), {
  loading: () => <div className="h-[500px] animate-pulse bg-gray-100" />,
});

const LocationWakad = dynamic(() => import("@/components/sections/location-wakad"), {
  loading: () => <div className="h-[500px] animate-pulse bg-gray-50" />,
});

const LocationNigdi = dynamic(() => import("@/components/sections/location-nigdi"), {
  loading: () => <div className="h-[500px] animate-pulse bg-gray-100" />,
});

const LocationThaltej = dynamic(() => import("@/components/sections/location-thaltej"), {
  loading: () => <div className="h-[500px] animate-pulse bg-gray-50" />,
});

const EssenceSection = dynamic(() => import("@/components/sections/essence"), {
  loading: () => <div className="h-[400px] animate-pulse bg-gray-100" />,
});

const Footer = dynamic(() => import("@/components/sections/footer"), {
  loading: () => <div className="h-[300px] animate-pulse bg-black/5" />,
});

export default function FranchisePage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#F7F3E3]">
      <Header />
      <main className="flex-grow pt-[80px]">
        <HeroSection />
        <IntroText />
        <LocationPrabhatRoad />
        <LocationBibwewadi />
        <LocationAeroMall />
        <LocationPimpleSaudagar />
        <LocationWakad />
        <LocationNigdi />
        <LocationThaltej />
        <EssenceSection />
      </main>
      <Footer />
    </div>
  );
}
