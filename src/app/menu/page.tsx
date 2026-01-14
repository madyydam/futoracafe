import Header from "@/components/sections/header";
import MenuHero from "@/components/sections/menu-hero";
import MustTryDishes from "@/components/sections/must-try-dishes";
import FutoraSpecialMenu from "@/components/sections/futora-special-menu";
import StartersAndBeverages from "@/components/sections/starters-beverages";
import NamasteAnnaPizzaSection from "@/components/sections/namaste-anna-pizza";
import JainJuhuChowpatty from "@/components/sections/jain-juhu-chowpatty";
import RiceMenuFooterCallout from "@/components/sections/rice-menu-footer-callout";
import Footer from "@/components/sections/footer";

export default function MenuPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#F7F1E1]">
      <Header />
      <main className="flex-grow pt-[80px]">
        <MenuHero />
        <MustTryDishes />
        <FutoraSpecialMenu />
        <StartersAndBeverages />
        <NamasteAnnaPizzaSection />
        <JainJuhuChowpatty />
        <RiceMenuFooterCallout />
      </main>
      <Footer />
    </div>
  );
}
