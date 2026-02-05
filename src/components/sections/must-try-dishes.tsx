"use client";

import React from "react";
import { GourmetCard } from "@/components/GourmetCard";

const dishes = [
    {
        id: 1,
        name: "Signature Cold Brew",
        description: "Our 18-hour slow-steeped signature brew.",
        image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?q=80&w=600&auto=format&fit=crop",
        price: "₹249"
    },
    {
        id: 2,
        name: "Artisan Espresso",
        description: "Rich and velvety double shot espresso.",
        image: "https://images.unsplash.com/photo-1579992357154-faf4bfe95b3d?q=80&w=800&auto=format&fit=crop",
        price: "₹189"
    },
    {
        id: 3,
        name: "Classic Croissant",
        description: "Buttery, flaky, and baked fresh daily.",
        image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=600&auto=format&fit=crop",
        price: "₹149"
    },
    {
        id: 4,
        name: "Avocado Toast",
        description: "Smashed avocado on sourdough with seeds.",
        image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?q=80&w=600&auto=format&fit=crop",
        price: "₹329"
    }
];

const MustTryDishes = React.memo(() => {
    return (
        <section id="must-try" className="py-24 bg-white overflow-hidden scroll-mt-20" style={{ perspective: "1500px" }}>
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {dishes.map((dish, idx) => (
                        <GourmetCard
                            key={dish.id}
                            name={dish.name}
                            description={dish.description}
                            image={dish.image}
                            price={dish.price}
                            idx={idx}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
});

MustTryDishes.displayName = "MustTryDishes";

export default MustTryDishes;
