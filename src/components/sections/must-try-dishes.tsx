"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

/**
 * MustTryDishes Component - Hanging Polaroid Cards Style
 */

const dishItems = [
  {
    name: "Signature Cold Brew",
    description: "Rich, smooth cold brew coffee steeped for 24 hours for maximum flavor.",
    image: "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?q=80&w=1000&auto=format&fit=crop",
    rotation: -3,
  },
  {
    name: "Artisan Espresso",
    description: "Bold espresso shot crafted from premium single-origin beans.",
    image: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?q=80&w=1000&auto=format&fit=crop",
    rotation: 2,
  },
  {
    name: "Caramel Macchiato",
    description: "Layered espresso with steamed milk and sweet caramel drizzle.",
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&w=1000&auto=format&fit=crop",
    rotation: -2,
  },
  {
    name: "Buttery Croissant",
    description: "Flaky, golden croissant baked fresh every morning.",
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=1000&auto=format&fit=crop",
    rotation: 3,
  },
  {
    name: "Avocado Toast Deluxe",
    description: "Smashed avocado on sourdough with cherry tomatoes and chili flakes.",
    image: "https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?q=80&w=1000&auto=format&fit=crop",
    rotation: -2,
  },
  {
    name: "Belgian Chocolate Latte",
    description: "Rich chocolate latte made with premium Belgian cocoa.",
    image: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?q=80&w=1000&auto=format&fit=crop",
    rotation: 2,
  },
];

export default function MustTryDishes() {
  return (
    <section className="py-20 bg-[#F6F1DC] overflow-hidden relative" id="must-try-dishes">
      <div className="container mx-auto px-6">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 relative"
        >
          <h2 className="font-heading text-[32px] md:text-[64px] font-bold text-[#8F221B] leading-tight mb-2">
            Must Try Delights
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-[120px] h-[4px] bg-[#8F221B] mx-auto"
          />
        </motion.div>

        {/* Hanging Polaroid Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {dishItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: -100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: index * 0.15,
                type: "spring",
                stiffness: 80
              }}
              className="relative"
              style={{ perspective: "1000px" }}
            >
              {/* Hanging String/Rope */}
              <motion.div
                className="absolute top-[-50px] left-1/2 -translate-x-1/2 w-[3px] bg-gradient-to-b from-[#8B7355] via-[#A0826D] to-transparent z-10"
                style={{
                  height: "50px",
                  boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
                }}
                animate={{
                  scaleY: [1, 1.02, 1],
                }}
                transition={{
                  duration: 3 + index * 0.3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />

              {/* Polaroid Card */}
              <motion.div
                className="bg-white p-4 pb-8 shadow-2xl relative"
                style={{
                  rotate: item.rotation,
                  transformOrigin: "top center"
                }}
                animate={{
                  rotate: [item.rotation, item.rotation - 1.5, item.rotation + 1.5, item.rotation],
                  y: [0, -3, 3, 0],
                }}
                transition={{
                  duration: 4 + index * 0.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  repeatType: "reverse"
                }}
                whileHover={{
                  scale: 1.05,
                  rotate: item.rotation + 2,
                  transition: { duration: 0.3 }
                }}
              >
                {/* Tape effect at top */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-6 bg-[#F5DEB3] opacity-60 rotate-0 shadow-sm"
                  style={{
                    background: "linear-gradient(180deg, rgba(255,255,255, 0.9) 0%, rgba(245,222,179,0.6) 100%)",
                    border: "1px solid rgba(0,0,0,0.05)"
                  }}
                />

                {/* Image Container */}
                <div className="relative w-full aspect-[4/3] bg-gray-100 mb-4 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>

                {/* Text Content */}
                <div className="text-center space-y-2">
                  <h3 className="font-heading text-[20px] md:text-[24px] font-bold text-[#FF6B35] leading-tight">
                    {item.name}
                  </h3>
                  <p className="font-sans text-[13px] md:text-[14px] text-gray-700 leading-relaxed px-2">
                    {item.description}
                  </p>
                </div>

                {/* Handwritten-style note effect */}
                <div className="absolute bottom-2 right-3 opacity-20">
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                      fill="#8F221B" stroke="#8F221B" strokeWidth="0.5" />
                  </svg>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background Decoration Circles */}
      <motion.div
        className="absolute top-10 right-10 w-20 h-20 opacity-5"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <div className="w-full h-full rounded-full bg-[#8F221B]" />
      </motion.div>

      <motion.div
        className="absolute bottom-10 left-10 w-24 h-24 opacity-5"
        animate={{
          scale: [1, 1.1, 1],
          rotate: [360, 180, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <div className="w-full h-full rounded-full bg-[#EAB231]" />
      </motion.div>
    </section>
  );
}
