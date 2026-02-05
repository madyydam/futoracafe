"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const dishes = [
    {
        id: 1,
        name: "Signature Cold Brew",
        description: "Our 18-hour slow-steeped signature brew.",
        image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?q=80&w=600&auto=format&fit=crop",
        price: "₹249",
        rotation: -3
    },
    {
        id: 2,
        name: "Artisan Espresso",
        description: "Rich and velvety double shot espresso.",
        image: "https://images.unsplash.com/photo-1541167760496-162955ed8a9f?q=80&w=800&auto=format&fit=crop",
        price: "₹189",
        rotation: 2
    },
    {
        id: 3,
        name: "Classic Croissant",
        description: "Buttery, flaky, and baked fresh daily.",
        image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=600&auto=format&fit=crop",
        price: "₹149",
        rotation: -2
    },
    {
        id: 4,
        name: "Avocado Toast",
        description: "Smashed avocado on sourdough with seeds.",
        image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?q=80&w=600&auto=format&fit=crop",
        price: "₹329",
        rotation: 4
    }
];

const MustTryDishes = React.memo(() => {
    return (
        <section id="must-try" className="py-24 bg-white overflow-hidden scroll-mt-20">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {dishes.map((dish, idx) => (
                        <motion.div
                            key={dish.id}
                            initial={{ y: 20, opacity: 0, rotate: dish.rotation }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.6, delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white p-4 pb-8 shadow-xl relative group hover:z-10"
                            style={{ transform: `rotate(${dish.rotation}deg)` }}
                        >
                            {/* Hanging Tape/Clip effect */}
                            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-12 h-6 bg-[#3E2723]/10 backdrop-blur-sm border border-white/20 rotate-1 flex items-center justify-center">
                                <div className="w-1 h-1 bg-white rounded-full shadow-inner" />
                            </div>

                            <div className="aspect-square overflow-hidden mb-4 relative">
                                <Image
                                    src={dish.image}
                                    alt={dish.name}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>

                            <div className="text-center px-2">
                                <h3 className="font-heading text-xl text-[#3E2723] mb-1">{dish.name}</h3>
                                <p className="text-xs text-[#5D4037] mb-3 line-clamp-2">{dish.description}</p>
                                <span className="text-lg font-bold text-[#913429]">{dish.price}</span>
                            </div>

                            {/* Swinging animation on hover */}
                            <motion.div
                                className="absolute inset-0 pointer-events-none"
                                whileHover={{
                                    rotate: [dish.rotation, dish.rotation + 2, dish.rotation - 2, dish.rotation],
                                    transition: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                                }}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
});

MustTryDishes.displayName = "MustTryDishes";

export default MustTryDishes;
