"use client";

import React, { useMemo, useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { ChevronDown, Coffee, Sun, Star, Zap } from 'lucide-react';
import { m, useScroll, useTransform, useInView } from 'framer-motion';

/**
 * Hero Section - ULTRA ANIMATED "BHA BHAR KE" VERSION
 * Zoomed out to 80% as requested.
 * Fixed: Client-side only random generation to prevent hydration errors
 */
const HeroSection = React.memo(() => {
    // Generate decorative elements only on client side to prevent hydration mismatch
    const [isClient, setIsClient] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);
    const isInView = useInView(sectionRef, { margin: "100px" });

    // Parallax setup
    const { scrollYProgress } = useScroll({
        target: sectionRef as any,
        offset: ["start start", "end start"]
    });

    const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
    const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const beansY = useTransform(scrollYProgress, [0, 1], ["0%", "80%"]);

    useEffect(() => {
        setIsClient(true);
    }, []);

    // Decorative elements data - only populated after client hydration
    const coffeeBeans = useMemo(() => {
        if (!isClient) return [];
        return [...Array(6)].map((_, i) => ({ // Further reduced for performance
            id: i,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            delay: Math.random() * 5,
            duration: 20 + Math.random() * 20,
            size: 15 + Math.random() * 25,
            rotate: Math.random() * 300,
        }));
    }, [isClient]);

    const sparkles = useMemo(() => {
        if (!isClient) return [];
        return [...Array(4)].map((_, i) => ({ // Further reduced for performance
            id: i,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            delay: Math.random() * 4,
            duration: 2 + Math.random() * 3,
        }));
    }, [isClient]);

    return (
        <section ref={sectionRef} className="relative overflow-hidden w-full h-screen bg-[#1a1a1a]">
            {/* --- BACKGROUND LAYER --- */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <m.div
                    initial={{ scale: 1.1, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    style={{ y: bgY }}
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
                </m.div>
                {/* Animated Overlays - Darkened for better text visibility */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80 z-10" />
                <m.div
                    animate={{ opacity: [0.2, 0.35, 0.2] }}
                    transition={{ duration: 6, repeat: Infinity }}
                    className="absolute inset-0 bg-black/30 z-10 mix-blend-multiply"
                />
            </div>

            {/* --- DECORATIVE ANIMATIONS (BHA BHAR KE) --- */}
            {isInView && (
                <>
                    {/* Floating Coffee Beans */}
                    {coffeeBeans.map((bean) => (
                        <m.div
                            key={`bean-${bean.id}`}
                            className="absolute z-20 pointer-events-none opacity-40"
                            style={{
                                left: bean.left,
                                top: bean.top,
                                y: beansY,
                                willChange: 'transform', // GPU acceleration hint
                                transform: 'translateZ(0)', // Force GPU layer
                            }}
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
                        </m.div>
                    ))}

                    {/* Twinkling Magical Sparkles */}
                    {sparkles.map((sparkle) => (
                        <m.div
                            key={`sparkle-${sparkle.id}`}
                            className="absolute z-30 pointer-events-none"
                            style={{
                                left: sparkle.left,
                                top: sparkle.top,
                                willChange: 'transform, opacity', // GPU acceleration
                                transform: 'translateZ(0)',
                            }}
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
                        </m.div>
                    ))}

                    {/* Floating Icons */}
                    <m.div
                        className="absolute top-[20%] left-[15%] z-20 text-white/20 hidden lg:block"
                        animate={{
                            y: [0, -40, 0],
                            rotate: [-15, 15, -15],
                            scale: [0.9, 1, 0.9],
                        }}
                        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <Coffee size={100} strokeWidth={0.5} />
                    </m.div>

                    {/* Optimized Steam Clouds Animation - Less blur, higher performance */}
                    <div className="absolute bottom-0 left-0 w-full h-[300px] pointer-events-none z-20 overflow-hidden">
                        {[...Array(3)].map((_, i) => (
                            <m.div
                                key={`steam-heavy-${i}`}
                                className="absolute bottom-0 w-[30%] h-40 bg-white/5 blur-[40px] rounded-full"
                                style={{ left: `${15 + i * 30}%` }}
                                animate={{
                                    y: [0, -400],
                                    opacity: [0, 0.2, 0],
                                }}
                                transition={{
                                    duration: 8 + i,
                                    repeat: Infinity,
                                    delay: i * 2,
                                    ease: "linear"
                                }}
                            />
                        ))}
                    </div>
                </>
            )}

            {/* --- CONTENT LAYER --- */}
            <m.div
                style={{ y: textY }}
                className="relative z-40 flex flex-col items-center justify-center h-full max-w-[1200px] mx-auto text-center px-4 pt-20"
            >

                {/* Title with 80% Zoom (Reduced font size) */}
                <m.div className="mb-10 md:whitespace-nowrap flex flex-wrap justify-center gap-x-2 sm:gap-x-4">
                    {"The Futora Cafe".split(" ").map((word, wordIndex) => (
                        <div key={wordIndex} className="inline-block whitespace-nowrap">
                            {word.split("").map((char, charIndex) => (
                                <m.span
                                    key={`${wordIndex}-${charIndex}`}
                                    initial={{ opacity: 0, y: 50, rotate: charIndex % 2 === 0 ? 30 : -30 }}
                                    animate={{ opacity: 1, y: 0, rotate: 0 }}
                                    transition={{
                                        duration: 0.8,
                                        delay: 0.5 + (wordIndex * 0.2) + (charIndex * 0.05),
                                        type: "spring",
                                        stiffness: 150
                                    }}
                                    className="inline-block font-display italic text-[54px] xs:text-[60px] sm:text-[80px] md:text-[80px] lg:text-[120px] text-white font-normal leading-tight md:leading-none"
                                    style={{
                                        fontFamily: 'var(--font-display)',
                                        textShadow: '0 0 20px rgba(0,0,0,0.3)',
                                        padding: "0 1px",
                                        letterSpacing: '0.01em'
                                    }}
                                >
                                    {char}
                                </m.span>
                            ))}
                        </div>
                    ))}
                </m.div>

                {/* Dynamic Tagline (80% Zoom) - Brown Color */}
                <m.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5, delay: 1.5 }}
                    className="mb-10 py-3 px-4 max-w-2xl mx-auto"
                >
                    <h2 className="font-sans text-base sm:text-lg md:text-2xl text-[#3E2723] font-bold tracking-[0.1em] sm:tracking-[0.25em] uppercase italic text-center" style={{ textShadow: '0 0 10px rgba(255,255,255,0.5)' }}>
                        The Futora Cafe – Best Cafe in Pune
                    </h2>
                </m.div>

                {/* CTA Button (80% Zoom - smaller padding and text) */}
                <m.a
                    href="/menu"
                    whileHover={{
                        scale: 1.05,
                        backgroundColor: "#fff",
                        color: "#1a1a1a",
                        boxShadow: "0 0 30px rgba(255,255,255,0.5)"
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative inline-flex items-center gap-3 bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-black text-base overflow-hidden transition-all"
                >
                    <m.div
                        className="absolute inset-0 bg-white translate-y-[101%] group-hover:translate-y-0 transition-transform duration-300"
                    />
                    <span className="relative z-10 uppercase">Explore Our Brews</span>
                    <ChevronDown className="relative z-10 w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />

                    {/* Inner Glow animation */}
                    <m.div
                        animate={{ x: ['-100%', '200%'] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent skew-x-12 z-20 pointer-events-none"
                    />
                </m.a>
            </m.div>
        </section>
    );
});

HeroSection.displayName = "HeroSection";

export default HeroSection;
