import React from 'react';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

/**
 * Hero Section Component
 * Clones the hero section with yellow gradient, cultural illustrations, 
 * and specific typography for The Common Cafe.
 */
export default function HeroSection() {
  return (
    <section className="relative overflow-hidden w-full">
      {/* 
         Main Hero Container 
         Gradient background from Saffron (#F9B233) to a lighter shade
      */}
      <div 
        className="relative min-h-[85vh] flex flex-col items-center justify-center pt-32 pb-48 text-center px-6"
        style={{
          background: "linear-gradient(180deg, #F9B233 0%, #FABD52 100%)",
        }}
      >
          {/* Cultural Illustration Container - Left side image */}
          <motion.div 
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 0.8, x: -20 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="absolute left-0 bottom-0 w-[300px] md:w-[450px] lg:w-[600px] pointer-events-none"
          >
            <Image
              src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1470&auto=format&fit=crop"
              alt="Cafe Interior Vibe"
              width={1495}
              height={1333}
              className="w-full h-auto object-contain rounded-tr-[100px]"
              priority
            />
          </motion.div>

          {/* Hero Content Wrapper */}
          <div className="max-w-[1140px] mx-auto z-10">
            {/* Main Title - Display Font */}
            <motion.h1 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
              viewport={{ once: true }}
              className="font-display text-[54px] md:text-[96px] text-brand-rust mb-6 drop-shadow-sm italic"
              style={{ 
                fontFamily: 'var(--font-display)',
                color: '#913429' 
              }}
            >
              The Common Cafe
            </motion.h1>

            {/* Subtitle area */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="max-w-2xl mx-auto space-y-2 mb-10"
            >
              <h4 
                className="font-sans text-xl md:text-[26px] font-semibold text-black leading-tight"
                style={{ fontFamily: 'var(--font-sans)', color: '#000000' }}
              >
                Coffee, Conversations & Comfort
              </h4>
              <p 
                className="font-sans text-lg md:text-[20px] font-medium text-black/70 leading-tight"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                Experience the perfect blend of artisanal brews and freshly baked delights.
              </p>
            </motion.div>


          {/* Explore Button */}
          <motion.a 
            href="#explore"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="group inline-flex items-center gap-2 bg-black text-white px-10 py-4 rounded-full font-semibold transition-all hover:bg-neutral-800 focus:ring-2 focus:ring-offset-2 focus:ring-black shadow-xl"
          >
            Explore Menu
            <ChevronDown className="w-5 h-5 transition-transform group-hover:translate-y-1" />
          </motion.a>
        </div>
      </div>

      {/* 
         Sub-Hero Content Separator
         "Bringing Great Food Near You"
      */}
      <div className="bg-[#F7F3E3] pt-24 pb-8 text-center px-6">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-[1140px] mx-auto"
        >
          <h2 
            className="font-heading text-[32px] md:text-[44px] font-bold text-brand-rust mb-4"
            style={{ 
              fontFamily: 'var(--font-heading)',
              color: '#913429'
            }}
          >
            Bringing Great Food Near You
          </h2>
          <h4 
            className="font-sans text-[18px] md:text-[20px] font-normal text-[#333333] italic"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            Our restaurants, each offering a unique dining experience with signature flavors
          </h4>
        </motion.div>
      </div>

      {/* Spacer or anchor point for the next section */}
      <div id="explore" className="h-1 bg-[#F7F3E3]" />
    </section>
  );
}
