"use client";

import React from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface GourmetCardProps {
    name: string;
    description: string;
    image: string;
    price: string;
    idx: number;
}

export const GourmetCard = ({ name, description, image, price, idx }: GourmetCardProps) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

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
            transition={{ duration: 0.8, delay: idx * 0.1 }}
            viewport={{ once: true }}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            className="relative group p-4 bg-white shadow-2xl rounded-sm border border-black/5"
        >
            <div
                style={{ transform: "translateZ(50px)", transformStyle: "preserve-3d" }}
                className="relative aspect-square overflow-hidden mb-6"
            >
                <Image
                    src={image}
                    alt={name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
            </div>

            <div
                style={{ transform: "translateZ(30px)" }}
                className="text-center px-2"
            >
                <h3 className="font-heading text-xl text-[#3E2723] mb-1">{name}</h3>
                <p className="text-xs text-[#5D4037] mb-3 line-clamp-2 leading-relaxed">{description}</p>
                <span className="text-lg font-bold text-[#913429]">{price}</span>
            </div>

            <div
                style={{ transform: "translateZ(60px)" }}
                className="absolute -top-3 left-1/2 -translate-x-1/2 w-12 h-6 bg-[#3E2723]/10 backdrop-blur-sm border border-white/20 rotate-1 flex items-center justify-center"
            >
                <div className="w-1 h-1 bg-[#3E2723] rounded-full opacity-50" />
            </div>
        </motion.div>
    );
};
