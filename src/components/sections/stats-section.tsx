"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Coffee, Users, MapPin, Award } from "lucide-react";
import NumberFlow from "@number-flow/react";

const MorphingBlob = ({ color, className }: { color: string, className: string }) => (
    <motion.div
        className={className}
        animate={{
            borderRadius: [
                "40% 60% 70% 30% / 40% 50% 60% 50%",
                "50% 50% 20% 80% / 25% 80% 20% 75%",
                "30% 70% 30% 70% / 60% 40% 60% 40%",
                "40% 60% 70% 30% / 40% 50% 60% 50%"
            ],
            scale: [1, 1.1, 0.9, 1],
            rotate: [0, 90, 180, 270, 360]
        }}
        transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
        }}
        style={{ backgroundColor: color }}
    />
);

interface CounterProps {
    value: number;
    label: string;
    icon: React.ReactNode;
    suffix?: string;
}

const Counter = ({ value, label, icon, suffix = "" }: CounterProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    return (
        <motion.div
            ref={ref}
            className="flex flex-col items-center p-8 bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 hover:bg-white/10 transition-colors group"
            whileHover={{ y: -10 }}
        >
            <div className="mb-4 p-4 bg-[#8F221B]/20 rounded-2xl group-hover:scale-110 transition-transform">
                {icon}
            </div>
            <div className="text-4xl md:text-5xl font-black text-white mb-2 flex items-center">
                <NumberFlow
                    value={isInView ? value : 0}
                    format={{ useGrouping: false }}
                    className="font-black"
                />
                {suffix}
            </div>
            <div className="text-gray-400 font-sans uppercase tracking-[0.2em] text-xs font-bold">
                {label}
            </div>
        </motion.div>
    );
};

export default function StatsSection() {
    return (
        <section className="py-24 bg-[#1a1a1a] relative overflow-hidden">
            {/* Background decoration with Morphing Shapes */}
            <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
                <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-[#8F221B] rounded-full blur-[150px] opacity-50" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-[#EAB231] rounded-full blur-[150px] opacity-50" />

                <MorphingBlob
                    color="#8F221B"
                    className="absolute top-[10%] left-[10%] w-64 h-64 blur-3xl opacity-30"
                />
                <MorphingBlob
                    color="#EAB231"
                    className="absolute bottom-[20%] right-[15%] w-80 h-80 blur-3xl opacity-20"
                />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <Counter
                        value={50}
                        suffix="K+"
                        label="Cups of Joy"
                        icon={<Coffee className="w-8 h-8 text-[#8F221B]" />}
                    />
                    <Counter
                        value={120}
                        suffix="+"
                        label="Daily Visitors"
                        icon={<Users className="w-8 h-8 text-[#EAB231]" />}
                    />
                    <Counter
                        value={10}
                        suffix="+"
                        label="Cafes Nationwide"
                        icon={<MapPin className="w-8 h-8 text-[#2C5F2D]" />}
                    />
                    <Counter
                        value={15}
                        suffix="+"
                        label="Culinary Awards"
                        icon={<Award className="w-8 h-8 text-[#EB6D48]" />}
                    />
                </div>
            </div>
        </section>
    );
}
