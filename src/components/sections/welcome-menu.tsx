"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

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
        image: "https://images.unsplash.com/photo-1541167760496-162955ed8a9f?q=80&w=800&auto=format&fit=crop",
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

const WelcomeMenu = React.memo(() => {
    return (
        <section className="py-20 bg-[#F7F3E3] overflow-hidden">
            <div className="container mx-auto px-6">
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
                        className="font-heading text-5xl md:text-7xl text-[#3E2723] italic"
                    >
                        Must Try Delights
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {welcomeDishes.map((dish, idx) => (
                        <motion.div
                            key={dish.id}
                            initial={{ opacity: 0, y: 50, rotate: idx % 2 === 0 ? -5 : 5 }}
                            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                            whileHover={{
                                y: -20,
                                rotate: idx % 2 === 0 ? 5 : -5,
                                transition: { type: "spring", stiffness: 300 }
                            }}
                            transition={{ duration: 0.8, delay: idx * 0.2 }}
                            viewport={{ once: true }}
                            className="relative group p-4 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.1)] rounded-sm"
                        >
                            <div className="relative aspect-[4/5] overflow-hidden mb-6">
                                <Image
                                    src={dish.image}
                                    alt={dish.name}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                            </div>
                            <div className="text-center">
                                <h3 className="font-heading text-2xl text-[#3E2723] mb-2">{dish.name}</h3>
                                <p className="text-[#5D4037] text-sm mb-4 font-light">{dish.description}</p>
                                <span className="text-[#913429] font-bold text-xl">{dish.price}</span>
                            </div>

                            {/* Hanging Clip Visual (Simplified) */}
                            <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-8 h-8 bg-[#3E2723] rounded-full shadow-lg flex items-center justify-center">
                                <div className="w-2 h-2 bg-[#F7F3E3] rounded-full" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
});

WelcomeMenu.displayName = "WelcomeMenu";

export default WelcomeMenu;
