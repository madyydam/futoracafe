import Header from "@/components/sections/header";
import HeroSection from "@/components/sections/hero";
import WelcomeMenu from "@/components/sections/welcome-menu";
import OurStory from "@/components/sections/our-story";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <WelcomeMenu />
        <OurStory />
      </main>
      <Footer />
    </div>
  );
}
