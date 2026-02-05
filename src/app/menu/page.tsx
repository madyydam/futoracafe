import dynamic from "next/dynamic";
import Header from "@/components/sections/header";
import { MenuProvider } from "@/contexts/MenuContext";
import MenuFilters from "@/components/sections/MenuFilters";

// Lazy loading menu sections
const MenuHero = dynamic(() => import("@/components/sections/menu-hero"), {
    loading: () => <div className="h-[400px] animate-pulse bg-gray-100" />,
});

const MustTryDishes = dynamic(() => import("@/components/sections/must-try-dishes"), {
    loading: () => <div className="h-[500px] animate-pulse bg-gray-50" />,
});

const FutoraSpecialMenu = dynamic(() => import("@/components/sections/futora-special-menu"), {
    loading: () => <div className="h-[500px] animate-pulse bg-gray-100" />,
});

const StartersAndBeverages = dynamic(() => import("@/components/sections/starters-beverages"), {
    loading: () => <div className="h-[500px] animate-pulse bg-gray-50" />,
});

const NamasteAnnaPizzaSection = dynamic(() => import("@/components/sections/namaste-anna-pizza"), {
    loading: () => <div className="h-[500px] animate-pulse bg-gray-100" />,
});

const JainJuhuChowpatty = dynamic(() => import("@/components/sections/jain-juhu-chowpatty"), {
    loading: () => <div className="h-[500px] animate-pulse bg-gray-50" />,
});

const RiceMenuFooterCallout = dynamic(() => import("@/components/sections/rice-menu-footer-callout"), {
    loading: () => <div className="h-[400px] animate-pulse bg-gray-100" />,
});

const Footer = dynamic(() => import("@/components/sections/footer"), {
    loading: () => <div className="h-[300px] animate-pulse bg-black/5" />,
});

export default function MenuPage() {
    return (
        <MenuProvider>
            <div className="flex min-h-screen flex-col bg-[#F7F1E1]">
                <Header />
                <main className="flex-grow pt-[80px]">
                    <MenuHero />
                    <MenuFilters />
                    <MustTryDishes />
                    <FutoraSpecialMenu />
                    <StartersAndBeverages />
                    <NamasteAnnaPizzaSection />
                    <JainJuhuChowpatty />
                    <RiceMenuFooterCallout />
                </main>
                <Footer />
            </div>
        </MenuProvider>
    );
}
