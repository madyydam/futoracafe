"use client";

import React from 'react';
import { motion } from 'framer-motion';

const DessertsAndPastriesCallout = () => {
  const dessertItems = [
    {
      name: "Classic Tiramisu",
      description: "Layered espresso-soaked ladyfingers with rich mascarpone cream and cocoa dust"
    },
    {
      name: "New York Cheesecake",
      description: "Creamy, velvety cheesecake with graham cracker crust and berry compote"
    },
    {
      name: "Belgian Chocolate Lava Cake",
      description: "Warm chocolate cake with a molten center, served with vanilla ice cream"
    },
    {
      name: "French Macarons",
      description: "Delicate almond meringue cookies in assorted flavors with silky ganache filling"
    }
  ];

  return (
    <section className="bg-[#F7F1E1] pt-20">
      {/* Desserts & Pastries Section */}
      <div className="container px-4 mx-auto mb-20 max-w-[1200px]">
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center font-heading text-[32px] md:text-[56px] text-[#912222] font-bold relative pb-3 mb-12 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-[140px] after:height-[3px] after:bg-[#912222]"
        >
          Desserts & Pastries
        </motion.h2>

        <div className="max-w-3xl mx-auto space-y-10">
          {dessertItems.map((item, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{
                scale: 1.05,
                rotate: index % 2 === 0 ? -1 : 1,
                transition: { duration: 0.3 }
              }}
            >
              <h3 className="font-sans text-[24px] md:text-[32px] font-semibold text-black mb-2">
                {item.name}
              </h3>
              <p className="font-body text-[14px] md:text-[16px] text-[#7A7A7A] leading-[1.4] max-w-2xl">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative Banner Callout with Coffee Theme */}
      <div className="relative overflow-hidden bg-[#FBCFAE] py-16 md:py-24">
        {/* Animated Coffee Beans Pattern Top */}
        <motion.div
          className="absolute top-0 left-0 w-full overflow-hidden leading-[0]"
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="flex w-[200%] md:w-full">
            {Array.from({ length: 40 }).map((_, i) => (
              <motion.div
                key={i}
                className="flex flex-col items-center mx-auto"
                animate={{
                  y: [0, -5, 0],
                }}
                transition={{
                  duration: 2 + (i % 3),
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.05
                }}
              >
                <div className="w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-b-[20px] border-b-[#8F221B]"></div>
                <div className="w-2 h-2 rounded-full bg-[#8F221B] mt-1"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Decorative Coffee Cup */}
        <motion.div
          className="absolute top-10 right-10 opacity-30 hidden md:block"
          animate={{
            rotate: [0, 10, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="w-32 h-32 border-4 border-[#912222] rounded-full p-2">
            <div className="w-full h-full border-2 border-dashed border-[#912222] rounded-full"></div>
          </div>
        </motion.div>

        {/* Floating Coffee Beans - Left */}
        <motion.div
          className="absolute top-1/4 left-10 opacity-40 hidden md:block"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="w-16 h-20 bg-[#5D4037] rounded-full shadow-lg" />
        </motion.div>

        <div className="container relative z-10 px-4 mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-display text-[28px] md:text-[40px] text-[#322B22] italic mb-6"
            >
              Step In, Savor, and Stay Awhile!
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-heading text-[26px] md:text-[38px] leading-[1.3] text-[#000000] font-bold mb-8 tracking-tight after:hidden"
            >
              Where Every Sip Tells A Story,<br />
              And Every Visit Feels Like Home.<br />
              Come For The Coffee, Stay For The Vibe!
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="font-display text-[32px] md:text-[48px] text-[#322B22] italic"
            >
              Until We Meet
            </motion.p>
          </div>
        </div>

        {/* Animated Pattern Bottom */}
        <motion.div
          className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] rotate-180"
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="flex w-[200%] md:w-full">
            {Array.from({ length: 40 }).map((_, i) => (
              <motion.div
                key={i}
                className="flex flex-col items-center mx-auto"
                animate={{
                  y: [0, -5, 0],
                }}
                transition={{
                  duration: 2 + (i % 3),
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.05
                }}
              >
                <div className="w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-b-[20px] border-b-[#8F221B]"></div>
                <div className="w-2 h-2 rounded-full bg-[#8F221B] mt-1"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Floating Decorative Circles */}
        <motion.div
          className="absolute bottom-20 right-4 md:right-12 z-20"
          animate={{
            y: [0, -10, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="flex gap-2">
            <div className="w-12 h-12 rounded-full bg-[#912222] opacity-80"></div>
            <div className="w-12 h-12 rounded-full bg-[#EAB231] opacity-80 translate-y-2"></div>
            <div className="w-12 h-12 rounded-full bg-[#5D4037] opacity-80 translate-y-4"></div>
          </div>
        </motion.div>

        {/* Croissant SVG Decoration - Bottom Left */}
        <motion.div
          className="absolute bottom-10 left-10 opacity-30 hidden md:block"
          animate={{
            rotate: [0, -10, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <svg width="80" height="60" viewBox="0 0 150 100" fill="none">
            <path d="M10,50 Q30,20 60,30 Q90,40 110,25 Q130,35 140,50 Q130,65 110,75 Q90,60 60,70 Q30,80 10,50Z"
              fill="#EAB231" opacity="0.9" />
            <path d="M20,50 Q35,30 60,38 Q85,45 105,35" stroke="#D4A024" strokeWidth="2" opacity="0.6" />
          </svg>
        </motion.div>
      </div>

      {/* Wave Transition to Footer */}
      <div className="wave-divider bg-[#0B0B0B] -mt-1 h-[60px] md:h-[100px]"></div>
    </section>
  );
};

export default DessertsAndPastriesCallout;