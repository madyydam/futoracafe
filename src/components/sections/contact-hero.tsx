"use client";

import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';

export default function ContactHero() {
  // Generate random positions only on client side to prevent hydration mismatch
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Coffee beans data - only populated after client hydration
  const coffeeBeans = useMemo(() => {
    if (!isClient) return [];
    return [...Array(10)].map((_, i) => ({ // Reduced from 15 to 10 for performance
      id: i,
      width: 15 + Math.random() * 15,
      height: 20 + Math.random() * 20,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      duration: 4 + Math.random() * 4,
    }));
  }, [isClient]);

  return (
    <section
      className="relative w-full bg-[#F9B233] flex flex-col items-center pt-32 pb-16 overflow-hidden"
      style={{ minHeight: '50vh' }}
    >
      {/* Animated Coffee Beans */}
      {coffeeBeans.map((bean) => (
        <motion.div
          key={bean.id}
          className="absolute rounded-full shadow-lg"
          style={{
            width: bean.width,
            height: bean.height,
            left: bean.left,
            top: bean.top,
            background: 'linear-gradient(135deg, #5D4037 0%, #3E2723 100%)',
            willChange: 'transform', // GPU acceleration
            transform: 'translateZ(0)',
          }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: bean.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: bean.id * 0.2,
          }}
        />
      ))}

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="font-display text-[48px] md:text-[90px] text-[#913429] mb-6 italic"
        >
          Get In Touch
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-sans text-xl md:text-2xl text-black/80 max-w-2xl mx-auto"
        >
          We'd love to hear from you! Visit us or send us a message.
        </motion.p>
      </div>
    </section>
  );
}