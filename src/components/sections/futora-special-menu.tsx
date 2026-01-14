"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

/**
 * FutoraSpecialMenu Component - Cafe Edition
 * Showcases signature cafe items and specialty brews
 */
export default function FutoraSpecialMenu() {
  const specials = [
    {
      name: "Vanilla Bean Latte",
      description: "Smooth espresso with real vanilla bean and steamed milk",
    },
    {
      name: "Matcha Green Tea Latte",
      description: "Premium Japanese matcha whisked to perfection"
    },
    {
      name: "Hazelnut Mocha",
      description: "Rich chocolate and hazelnut combined with bold espresso"
    },
    {
      name: "French Press Coffee",
      description: "Full-bodied coffee brewed the traditional way"
    }
  ];

  const bottomItems = [
    "Iced Americano",
    "Cortado",
    "Flat White",
    "Affogato",
    "Chai Tea Latte"
  ];

  return (
    <section className="bg-[#F7F1E1] py-20 overflow-hidden relative">
      <div className="container mx-auto px-5">

        {/* Section Heading with Animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-[42px] md:text-[56px] font-bold text-[#912222] font-heading relative inline-block pb-3 mb-8">
            Signature Brews
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[140px] h-[3px] bg-[#912222]"></span>
          </h2>
        </motion.div>

        {/* Top Specials with Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row items-center gap-10 mb-16 max-w-5xl mx-auto"
        >

          {/* Circular Image Container with Orbital Rings */}
          <motion.div
            className="relative flex-shrink-0 w-[280px] h-[280px]"
            animate={{
              rotate: [0, 2, -2, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            {/* Orbital Decorative Rings */}
            <div className="absolute inset-[-10px] border border-[#EBA324]/40 rounded-full"></div>
            <div className="absolute inset-[-20px] border border-[#EBA324]/20 rounded-full"></div>
            {/* Dot Nodes on Rings */}
            <div className="absolute top-1/2 -left-[11px] w-2 h-2 bg-[#EBA324] rounded-full -translate-y-1/2"></div>
            <div className="absolute top-0 right-1/4 w-2 h-2 bg-[#EBA324] rounded-full"></div>

            <div className="food-circle w-full h-full relative z-10 rounded-full overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1000&auto=format&fit=crop"
                alt="Signature Coffee"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* Special Items List */}
          <div className="flex-grow space-y-6 text-center md:text-left">
            {specials.map((item, index) => (
              <motion.div
                key={index}
                className="space-y-1"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{
                  x: 5,
                  transition: { duration: 0.2 }
                }}
              >
                <h3 className="text-[22px] md:text-[26px] font-semibold text-[#000000] font-sans mb-1">
                  {item.name}
                </h3>
                {item.description && (
                  <p className="text-[14px] text-[#7A7A7A] font-body">
                    {item.description}
                  </p>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Feature Image Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 max-w-4xl mx-auto"
        >
          <h3 className="text-[24px] md:text-[32px] font-semibold text-[#000000] font-sans mb-2">
            The Futora Coffee Experience
          </h3>
          <p className="text-[14px] text-[#7A7A7A] font-body italic mb-8">
            Handcrafted with passion, served with a smile
          </p>

          <motion.div
            className="relative w-full aspect-[16/9] md:aspect-[21/9] mt-4 mb-4 rounded-2xl overflow-hidden shadow-2xl"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1600&auto=format&fit=crop"
              alt="The Futora Cafe Experience"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </motion.div>

        {/* Bottom Menu Items */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-4 max-w-2xl mx-auto"
        >
          {bottomItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
            >
              <h3 className="text-[22px] font-semibold text-[#000000] font-sans mb-0">
                {item}
              </h3>
            </motion.div>
          ))}
        </motion.div>

      </div>

      {/* Background Decorative Element */}
      <div className="absolute top-1/4 -right-20 opacity-10 pointer-events-none">
        <svg width="200" height="200" viewBox="0 0 200 200">
          <circle cx="100" cy="100" r="90" fill="none" stroke="#EBA324" strokeWidth="1" strokeDasharray="10 5" />
        </svg>
      </div>
    </section>
  );
}