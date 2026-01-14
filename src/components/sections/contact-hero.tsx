"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function ContactHero() {
  return (
    <section
      className="relative w-full bg-[#F9B233] flex flex-col items-center pt-32 pb-16 overflow-hidden"
      style={{ minHeight: '50vh' }}
    >
      {/* Animated Coffee Beans */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full shadow-lg"
          style={{
            width: 15 + Math.random() * 15,
            height: 20 + Math.random() * 20,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: 'linear-gradient(135deg, #5D4037 0%, #3E2723 100%)',
          }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: 4 + Math.random() * 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.2,
          }}
        />
      ))}

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="font-display text-[60px] md:text-[90px] text-[#913429] mb-6 italic"
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