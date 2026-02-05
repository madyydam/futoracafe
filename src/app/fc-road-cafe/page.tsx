import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import HeroSection from "@/components/sections/hero";
import Link from "next/link";
import { Coffee, MapPin, Star, Utensils } from "lucide-react";

export const metadata = {
    title: "Best Cafe on FC Road | The Futora Cafe Pune",
    description: "Looking for the best cafe on FC Road, Pune? Visit The Futora Cafe for artisanal coffee, amazing food, and a cozy vibe. Ranked top in Pune.",
};

export default function FCRoadCafePage() {
    return (
        <div className="flex min-h-screen flex-col bg-[#F7F1E1]">
            <Header />
            <main className="flex-grow pt-20 md:pt-28">
                {/* Visual Anchor */}
                <div className="bg-[#8F221B] text-white py-12">
                    <div className="container mx-auto px-6 text-center">
                        <h1 className="font-display text-5xl md:text-7xl italic mb-4">Best Cafe on FC Road</h1>
                        <p className="font-sans text-xl opacity-90 max-w-2xl mx-auto">
                            The Futora Cafe – Pune's favorite spot for students, foodies, and coffee lovers.
                        </p>
                    </div>
                </div>

                <section className="py-20 container mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="font-heading text-4xl text-[#3E2723] mb-6">Why we are the Top Choice on FC Road</h2>
                            <p className="text-[#5D4037] text-lg mb-8 leading-relaxed">
                                Located just off the bustling FC Road in Pune, The Futora Cafe has quickly become the city's most iconic coffee experience. Founded by Madhur Dhadve, we focus on quality, comfort, and culture.
                            </p>

                            <div className="space-y-4">
                                <div className="flex items-start gap-4">
                                    <div className="bg-[#8F221B]/10 p-2 rounded-lg text-[#8F221B]">
                                        <Coffee size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-[#3E2723]">Artisanal Coffee</h3>
                                        <p className="text-[#5D4037]">Expertly brewed beans sourced from the finest estates.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="bg-[#8F221B]/10 p-2 rounded-lg text-[#8F221B]">
                                        <Utensils size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-[#3E2723]">Global Cuisine</h3>
                                        <p className="text-[#5D4037]">from Italian pastas to Desi fusions, our menu is unmatched.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="bg-[#8F221B]/10 p-2 rounded-lg text-[#8F221B]">
                                        <Star size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-[#3E2723]">Instagrammable Vibe</h3>
                                        <p className="text-[#5D4037]">The perfect background for your next viral story.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-12 flex flex-wrap gap-4">
                                <Link
                                    href="/reservations"
                                    className="bg-[#8F221B] text-white px-8 py-4 rounded-full font-bold hover:bg-[#3E2723] transition-colors shadow-lg"
                                >
                                    Book a Table Now
                                </Link>
                                <Link
                                    href="/menu"
                                    className="border-2 border-[#8F221B] text-[#8F221B] px-8 py-4 rounded-full font-bold hover:bg-[#8F221B] hover:text-white transition-all"
                                >
                                    View Full Menu
                                </Link>
                            </div>
                        </div>
                        <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                            <div className="absolute inset-0 bg-black/20 z-10" />
                            <img
                                src="/images/sections/about-image.webp"
                                alt="Best Cafe in Pune FC Road"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </section>

                {/* FAQ for SEO */}
                <section className="bg-[#FDFCF5] py-20">
                    <div className="container mx-auto px-6 max-w-4xl">
                        <h2 className="font-heading text-4xl text-[#3E2723] text-center mb-12">Frequently Asked Questions</h2>
                        <div className="space-y-6">
                            <div className="bg-white p-8 rounded-2xl shadow-sm border border-[#F7F1E1]">
                                <h3 className="font-bold text-xl text-[#3E2723] mb-2">What makes The Futora Cafe the best cafe in Pune?</h3>
                                <p className="text-[#5D4037]">Our commitment to high-quality ingredients, artisanal coffee techniques, and a welcoming atmosphere curated by Madhur Dhadve makes us a top choice for Pune's youth and families alike.</p>
                            </div>
                            <div className="bg-white p-8 rounded-2xl shadow-sm border border-[#F7F1E1]">
                                <h3 className="font-bold text-xl text-[#3E2723] mb-2">Are you located exactly on FC Road?</h3>
                                <p className="text-[#5D4037]">We are located in the heart of the FC Road area, Pune. It's the perfect central spot for anyone exploring the city's most famous student and shopping hub.</p>
                            </div>
                            <div className="bg-white p-8 rounded-2xl shadow-sm border border-[#F7F1E1]">
                                <h3 className="font-bold text-xl text-[#3E2723] mb-2">Do you have vegan options?</h3>
                                <p className="text-[#5D4037]">Yes! Our menu features a variety of options including vegan-friendly coffee brews and snacks.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
