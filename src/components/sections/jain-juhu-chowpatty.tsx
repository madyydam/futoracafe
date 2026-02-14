"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const QuickBitesSection = () => {
  return (
    <div className="bg-[#F7F1E1] overflow-hidden">
      {/* Healthy Options Section */}
      <section id="jain" className="relative pt-24 pb-16 px-4 md:px-0 scroll-mt-20">
        <div className="container mx-auto max-w-[1200px]">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-[42px] md:text-[56px] font-bold text-[#912222] text-center font-heading relative pb-3 mb-12 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-[140px] after:height-[3px] after:bg-[#912222]"
          >
            Healthy Choices & Jain Special
          </motion.h2>

          <div className="relative flex flex-col md:flex-row items-center justify-between">
            {/* Menu Items List */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full md:w-3/5 space-y-6 z-10 text-center md:text-left"
            >
              {[
                { name: "Greek Yogurt Parfait", description: "Layered Greek yogurt with granola, fresh berries, and honey" },
                { name: "Quinoa Power Bowl", description: "Nutrient-packed bowl with quinoa, roasted vegetables, and tahini dressing" },
                { name: "Acai Energy Bowl", description: "" },
                { name: "Fresh Fruit Platter", description: "Seasonal fruit selection served with honey yogurt dip" },
                { name: "Green Detox Smoothie", description: "" },
                { name: "Protein Power Shake", description: "" },
                { name: "Gluten-Free Muffin", description: "" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  whileHover={{ scale: 1.03, x: 5 }}
                >
                  <h3 className="text-[22px] md:text-[26px] font-semibold text-[#000000] font-sans mb-1">{item.name}</h3>
                  {item.description && (
                    <p className="text-[14px] text-[#7A7A7A] font-body max-w-lg mx-auto md:mx-0">{item.description}</p>
                  )}
                </motion.div>
              ))}
            </motion.div>

            {/* Decorative Graphic */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="absolute right-[-10%] top-0 w-[300px] h-[300px] md:w-[600px] md:h-[600px] pointer-events-none z-0"
            >
              <Image
                src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=1000&auto=format&fit=crop"
                alt="Fresh Healthy Food"
                fill
                className="object-contain opacity-20 scale-125 rounded-full"
                priority
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Bites Section */}
      <section className="relative pt-12 pb-24 px-4 md:px-0 overflow-hidden">
        <div className="container mx-auto max-w-[1200px] text-center">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-[42px] md:text-[56px] font-bold text-[#912222] font-heading relative pb-3 mb-6 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-[140px] after:height-[3px] after:bg-[#912222]"
          >
            Quick Bites
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[16px] text-[#EBA324] font-body italic mb-10 max-w-2xl mx-auto"
          >
            Perfect grab-and-go options for when you're in a hurry but still want quality.
          </motion.p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-12 mb-16">
            {/* Dish Image with Orbital Rings */}
            <motion.div
              className="relative w-[300px] h-[300px] flex-shrink-0"
              animate={{
                rotate: [0, 2, -2, 0],
                y: [0, -5, 5, 0]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <div className="absolute inset-[-20px] border border-[#EBA324]/30 rounded-full" />
              <div className="absolute inset-[-10px] border border-[#EBA324]/50 rounded-full" />
              <div className="relative w-full h-full rounded-full border-[6px] border-[#EBA324] overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=1000&auto=format&fit=crop"
                  alt="Quick Bites"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Decorative nodes on rings */}
              <div className="absolute top-[-20px] left-1/2 w-3 h-3 bg-[#EBA324] rounded-full -translate-x-1/2" />
              <div className="absolute bottom-[10px] right-[-15px] w-3 h-3 bg-[#912222] rounded-full" />
            </motion.div>

            {/* Menu Items */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-5 text-center md:text-left"
            >
              {[
                "Turkey Club Wrap",
                "Chicken Caesar Wrap",
                "Veggie Hummus Wrap",
                "Mediterranean Flatbread"
              ].map((item, index) => (
                <motion.h3
                  key={index}
                  className="text-[24px] md:text-[28px] font-semibold text-[#000000] font-sans m-0"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, x: 5 }}
                >
                  {item}
                </motion.h3>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Decorative Background Illustration */}
        <div className="absolute bottom-0 left-0 w-full h-[120px] md:h-[180px] opacity-40 z-[-1] pointer-events-none">
          <svg
            viewBox="0 0 1440 320"
            className="w-full h-full preserve-3d"
            preserveAspectRatio="none"
            fill="#322B22"
          >
            <path d="M0,288L48,272C96,256,192,224,288,213.3C384,203,480,213,576,213.3C672,213,768,203,864,181.3C960,160,1056,128,1152,122.7C1248,117,1344,139,1392,149.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
          <div className="absolute inset-0 flex items-end justify-center px-4 overflow-hidden">
            <div className="flex gap-4 items-end grayscale opacity-30 select-none">
              <div className="w-16 h-32 bg-[#322B22]/60 rounded-t-sm" />
              <div className="w-24 h-48 bg-[#322B22]/80 rounded-t-md" />
              <div className="w-20 h-40 bg-[#322B22]/50 rounded-t-sm" />
              <div className="w-32 h-56 bg-[#322B22]/90 rounded-t-lg" />
              <div className="w-24 h-44 bg-[#322B22]/70 rounded-t-md" />
              <div className="w-16 h-36 bg-[#322B22]/60 rounded-t-sm" />
              <div className="w-28 h-52 bg-[#322B22]/85 rounded-t-md" />
              <div className="w-20 h-44 bg-[#322B22]/50 rounded-t-sm" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default QuickBitesSection;