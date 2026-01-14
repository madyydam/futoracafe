"use client";

import React, { useMemo } from 'react';
import Image from 'next/image';
import { ChevronDown, Coffee, Sun, Star, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

/**
 * Hero Section - ULTRA ANIMATED "BHA BHAR KE" VERSION
 * Zoomed out to 80% as requested.
 */
const HeroSection = React.memo(() => {
    // Decorative elements data
    const coffeeBeans = useMemo(() => [...Array(25)].map((_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        delay: Math.random() * 5,
        duration: 15 + Math.random() * 25,
        size: 10 + Math.random() * 30,
        rotate: Math.random() * 300,
    })), []);

    const sparkles = useMemo(() => [...Array(20)].map((_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        delay: Math.random() * 4,
        duration: 1.5 + Math.random() * 3,
    })), []);

    return (
        <section className="relative overflow-hidden w-full h-[90vh] bg-[#1a1a1a]">
            {/* --- BACKGROUND LAYER --- */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <motion.div
                    initial={{ scale: 1.1, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 2, ease: "easeOut" }}
                    className="relative w-full h-full"
                >
                    <Image
                        src="/images/hero-coffee-new.png"
                        alt="The Futora Cafe Experience"
                        fill
                        className="object-cover"
                        priority
                        quality={100}
                    />
                </motion.div>
                {/* Animated Overlays */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 z-10" />
                <motion.div
                    animate={{ opacity: [0.1, 0.2, 0.1] }}
                    transition={{ duration: 5, repeat: Infinity }}
                    className="absolute inset-0 bg-[#913429]/10 z-10 mix-blend-overlay"
                />
            </div>

            {/* --- DECORATIVE ANIMATIONS (BHA BHAR KE) --- */}

            {/* Floating Coffee Beans */}
            {coffeeBeans.map((bean) => (
                <motion.div
                    key={`bean-${bean.id}`}
                    className="absolute z-20 pointer-events-none opacity-40"
                    style={{ left: bean.left, top: bean.top }}
                    animate={{
                        y: [0, -150, 0, 150, 0],
                        x: [0, 80, 0, -80, 0],
                        rotate: [bean.rotate, bean.rotate + 360],
                        scale: [1, 1.2, 0.8, 1]
                    }}
                    transition={{
                        duration: bean.duration,
                        repeat: Infinity,
                        delay: bean.delay,
                        ease: "easeInOut"
                    }}
                >
                    <div
                        className="bg-[#2D1B18] rounded-full blur-[0.5px] border border-white/5"
                        style={{ width: bean.size, height: bean.size * 0.7 }}
                    />
                </motion.div>
            ))}

            {/* Twinkling Magical Sparkles */}
            {sparkles.map((sparkle) => (
                <motion.div
                    key={`sparkle-${sparkle.id}`}
                    className="absolute z-30 pointer-events-none"
                    style={{ left: sparkle.left, top: sparkle.top }}
                    animate={{
                        opacity: [0, 1, 0],
                        scale: [0, 1.2, 0],
                        rotate: [0, 180],
                    }}
                    transition={{
                        duration: sparkle.duration,
                        repeat: Infinity,
                        delay: sparkle.delay,
                    }}
                >
                    <Star size={8} fill="#FFD700" className="text-yellow-400 drop-shadow-[0_0_8px_rgba(255,215,0,0.8)]" />
                </motion.div>
            ))}

            {/* Floating Icons */}
            <motion.div
                className="absolute top-[20%] left-[15%] z-20 text-white/20 hidden lg:block"
                animate={{
                    y: [0, -40, 0],
                    rotate: [-15, 15, -15],
                    scale: [0.9, 1, 0.9],
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            >
                <Coffee size={100} strokeWidth={0.5} />
            </motion.div>

            {/* Heavy Steam Clouds Animation */}
            <div className="absolute bottom-[10%] left-1/2 -translate-x-1/2 w-full h-[500px] pointer-events-none z-20">
                {[...Array(5)].map((_, i) => (
                    <motion.div
                        key={`steam-heavy-${i}`}
                        className="absolute bottom-0 w-[15%] h-56 bg-white/10 blur-[50px] rounded-full"
                        style={{ left: `${20 + i * 15}%` }}
                        animate={{
                            y: [0, -600],
                            opacity: [0, 0.3, 0],
                            scale: [1, 2.5, 1.2],
                        }}
                        transition={{
                            duration: 6 + i,
                            repeat: Infinity,
                            delay: i * 1.5,
                            ease: "easeOut"
                        }}
                    />
                ))}
            </div>

            {/* --- CONTENT LAYER --- */}
            <div className="relative z-40 flex flex-col items-center justify-center h-full max-w-[1200px] mx-auto text-center px-4">

                {/* Title with 80% Zoom (Reduced font size) */}
                <motion.div className="mb-10">
                    {"The Futora Cafe".split("").map((char, i) => (char === " " ? (
                        <span key={i} className="inline-block px-3">&nbsp;</span>
                    ) : (
                        <motion.span
                            key={i}
                            initial={{ opacity: 0, y: 50, rotate: i % 2 === 0 ? 30 : -30 }}
                            animate={{ opacity: 1, y: 0, rotate: 0 }}
                            transition={{
                                duration: 0.8,
                                delay: 0.5 + (i * 0.05),
                                type: "spring",
                                stiffness: 150
                            }}
                            className="inline-block font-heading text-[48px] md:text-[80px] lg:text-[104px] text-white font-black leading-none"
                            style={{
                                fontFamily: 'var(--font-heading)',
                                textShadow: '0 0 15px rgba(0,0,0,0.5), 0 0 30px rgba(145,52,41,0.3)',
                                padding: "0 1.5px"
                            }}
                        >
                            {char}
                        </motion.span>
                    )))}
                </motion.div>

                {/* Dynamic Tagline (80% Zoom) - Brown Color */}
                <motion.div
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: "auto", opacity: 1 }}
                    transition={{ duration: 1.5, delay: 1.5 }}
                    className="overflow-hidden whitespace-nowrap mb-10 py-3"
                >
                    <h2 className="font-sans text-lg md:text-2xl text-[#3E2723] font-bold tracking-[0.25em] uppercase italic" style={{ textShadow: '0 0 10px rgba(255,255,255,0.5)' }}>
                        City&apos;s Most Iconic Coffee Experience
                    </h2>
                </motion.div>

                {/* CTA Button (80% Zoom - smaller padding and text) */}
                <motion.a
                    href="#explore"
                    whileHover={{
                        scale: 1.05,
                        backgroundColor: "#fff",
                        color: "#1a1a1a",
                        boxShadow: "0 0 30px rgba(255,255,255,0.5)"
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative inline-flex items-center gap-3 bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-black text-base overflow-hidden transition-all"
                >
                    <motion.div
                        className="absolute inset-0 bg-white translate-y-[101%] group-hover:translate-y-0 transition-transform duration-300"
                    />
                    <span className="relative z-10 uppercase">Explore Our Brews</span>
                    <ChevronDown className="relative z-10 w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />

                    {/* Inner Glow animation */}
                    <motion.div
                        animate={{ x: ['-100%', '200%'] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent skew-x-12 z-20 pointer-events-none"
                    />
                </motion.a>
            </div>
        </section>
    );
});

HeroSection.displayName = "HeroSection";

export default HeroSection;
