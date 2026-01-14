"use client";

import React from 'react';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

/**
 * Hero Section - With Full Background Image
 */
export default function HeroSection() {
  return (
    <section className="relative overflow-hidden w-full">
      <div className="relative min-h-[90vh] flex flex-col items-center justify-center pt-20 pb-12 text-center px-6">
        {/* Background Image - Full Coverage */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-coffee.jpg"
            alt="Coffee Experience"
            fill
            className="object-cover"
            priority
            quality={100}
          />
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/20" />
        </div>

        {/* Main Content */}
        <div className="max-w-[1140px] mx-auto z-10 relative">
          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-heading text-[40px] md:text-[72px] lg:text-[84px] text-[#3E2723] font-bold leading-tight mb-4"
            style={{
              fontFamily: 'var(--font-heading)',
              textShadow: '3px 3px 8px rgba(255,255,255,0.8), -1px -1px 4px rgba(255,255,255,0.6)',
            }}
          >
            The Futora Cafe
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-sans text-lg md:text-2xl text-[#5D4037] mb-8"
            style={{
              fontFamily: 'var(--font-sans)',
              textShadow: '2px 2px 6px rgba(255,255,255,0.9)',
            }}
          >
            City&apos;s Most Iconic Coffee Experience
          </motion.p>

          {/* Explore Button */}
          <motion.a
            href="#explore"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3, delay: 0.6 }}
            className="inline-flex items-center gap-2 bg-black text-white px-10 py-4 rounded-full font-semibold text-lg shadow-2xl hover:bg-neutral-800 transition-all"
          >
            Explore Menu
            <ChevronDown className="w-5 h-5" />
          </motion.a>
        </div>

        {/* Bottom Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 font-sans text-[16px] md:text-[20px] text-[#3E2723] font-medium z-10"
          style={{
            textShadow: '2px 2px 6px rgba(255,255,255,0.9)',
          }}
        >
          Coffee, Conversations &amp; Comfort — all in one place.
        </motion.p>
      </div>

      {/* Sub-Hero Content */}
      <div className="bg-[#F7F3E3] pt-16 pb-8 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-[1140px] mx-auto"
        >
          <motion.h2
            whileInView={{
              scale: [1, 1.02, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="font-heading text-[32px] md:text-[44px] font-bold text-[#913429] mb-4"
            style={{
              fontFamily: 'var(--font-heading)',
            }}
          >
            Bringing Great Food Near You
          </motion.h2>
          <h4
            className="font-sans text-[18px] md:text-[20px] font-normal text-[#333333] italic"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            Our cafe, offering a unique experience with signature flavors
          </h4>
        </motion.div>
      </div>

      <div id="explore" className="h-1 bg-[#F7F3E3]" />
    </section>
  );
}
