"use client";

import React from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRouter } from "next/navigation";

const welcomeDishes = [
    {
        id: 1,
        name: "Signature Cold Brew",
        description: "Slow-steeped for 18 hours, served over clear ice.",
        image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?q=80&w=600&auto=format&fit=crop",
        price: "₹249"
    },
    {
        id: 2,
        name: "Artisan Espresso",
        description: "Rich, velvety shot of our house-blend arabica beans.",
        image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=800&auto=format&fit=crop",
        price: "₹189"
    },
    {
        id: 3,
        name: "Classic Croissant",
        description: "Flaky, buttery layers, baked fresh every morning.",
        image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=600&auto=format&fit=crop",
        price: "₹149"
    },
];

const TiltCard = ({ dish, idx }: { dish: any, idx: number }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: idx * 0.2 }}
            viewport={{ once: true }}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
                willChange: "transform",
            }}
            className="relative group p-4 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.1)] rounded-sm"
        >
            <div
                style={{ transform: "translateZ(75px)", transformStyle: "preserve-3d" }}
                className="relative aspect-[4/5] overflow-hidden mb-6"
            >
                <Image
                    src={dish.image}
                    alt={dish.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
            </div>
            <div
                style={{ transform: "translateZ(50px)" }}
                className="text-center"
            >
                <h3 className="font-heading text-2xl text-[#3E2723] mb-2">{dish.name}</h3>
                <p className="text-[#5D4037] text-sm mb-4 font-light">{dish.description}</p>
                <span className="text-[#913429] font-bold text-xl">{dish.price}</span>
            </div>

            {/* Hanging Clip Visual (Simplified) */}
            <div
                style={{ transform: "translateZ(100px)" }}
                className="absolute -top-6 left-1/2 -translate-x-1/2 w-8 h-8 bg-[#3E2723] rounded-full shadow-lg flex items-center justify-center"
            >
                <div className="w-2 h-2 bg-[#F7F3E3] rounded-full" />
            </div>
        </motion.div>
    );
};

const WelcomeMenu = React.memo(() => {
    const router = useRouter();

    return (
        <section
            onClick={() => router.push('/menu')}
            className="py-20 bg-[#F7F3E3] overflow-hidden cursor-pointer group/section relative"
            style={{ perspective: "1000px" }}
        >
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <motion.h4
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-[#913429] font-bold tracking-widest uppercase text-sm mb-4"
                    >
                        Specials' On Our Menu
                    </motion.h4>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="font-display text-5xl md:text-7xl text-[#3E2723] italic leading-tight"
                    >
                        Must Try Delights
                    </motion.h2>
                    <div className="mt-4 opacity-0 group-hover/section:opacity-100 transition-opacity duration-300">
                        <span className="text-[#913429] font-nav text-xs font-bold uppercase tracking-[0.2em]">Click anywhere to view full menu</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {welcomeDishes.map((dish, idx) => (
                        <TiltCard key={dish.id} dish={dish} idx={idx} />
                    ))}
                </div>
            </div>

            {/* Subtle hover effect for the whole section */}
            <div className="absolute inset-0 bg-[#3E2723]/0 group-hover/section:bg-[#3E2723]/[0.02] transition-colors duration-500 pointer-events-none" />
        </section>
    );
});

WelcomeMenu.displayName = "WelcomeMenu";

export default WelcomeMenu;
