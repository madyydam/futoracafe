import Header from "@/components/sections/header";
import HeroSection from "@/components/sections/hero";
import IntroText from "@/components/sections/intro-text";
import LocationPrabhatRoad from "@/components/sections/location-prabhat-road";
import LocationBibwewadi from "@/components/sections/location-bibwewadi";
import LocationAeroMall from "@/components/sections/location-aero-mall";
import LocationPimpleSaudagar from "@/components/sections/location-pimple-saudagar";
import LocationWakad from "@/components/sections/location-wakad";
import LocationNigdi from "@/components/sections/location-nigdi";
import LocationThaltej from "@/components/sections/location-thaltej";
import EssenceSection from "@/components/sections/essence";
import Footer from "@/components/sections/footer";

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
