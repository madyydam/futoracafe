"use client";

import React from 'react';
import { motion } from 'framer-motion';

/**
 * Brand philosophy section of The Futora Cafe - Optimized with React.memo
 */
const OurStory: React.FC = React.memo(() => {
  return (
    <section
      id="our-story"
      className="relative bg-[#f7f1e1] py-[100px] px-4 md:px-0 scroll-mt-20 overflow-hidden"
    >
      <div className="container mx-auto max-w-[1140px]">
        <div className="flex items-center justify-center gap-4 mb-12">
          <div className="h-[1px] bg-[#633200]/20 flex-1 max-w-[150px]"></div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-[48px] md:text-[80px] font-display text-[#913429] leading-tight text-center whitespace-nowrap px-4 select-none italic"
          >
            Our Story
          </motion.h2>
          <div className="h-[1px] bg-[#633200]/20 flex-1 max-w-[150px]"></div>
        </div>

        <div className="max-w-[1000px] mx-auto text-center">
          <motion.h4
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="font-sans text-[22px] md:text-[32px] font-bold text-[#633200] mb-8 tracking-wide uppercase"
          >
            Where Every Sip Tells A Story
          </motion.h4>

          <div className="space-y-8">
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className="font-sans text-[18px] md:text-[20px] leading-[1.8] text-[#4a4a4a]"
            >
              The Futora Cafe was born out of a simple passion: to create a space where coffee, conversation, and comfort collide. We believe that a great cup of coffee is more than just a drink—it&apos;s a moment of connection, a catalyst for creativity, and a daily ritual that brings people together.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              viewport={{ once: true }}
              className="font-sans text-[18px] md:text-[20px] leading-[1.8] text-[#4a4a4a]"
            >
              From our artisanal brews sourced from the finest beans to our freshly baked pastries and wholesome bites, every item on our menu is crafted with care and intention. Whether you&apos;re here for a quick morning pick-me-up or a relaxed afternoon with friends, we invite you to make The Futora Cafe your second home.
            </motion.p>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-1 left-0 w-full overflow-hidden leading-[0] transform rotate-180">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-[calc(100%+1.3px)] h-[40px] fill-white"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C58.15,108.91,154.05,127.1,226.31,118.84c30.34-3.47,58.37-14.35,95.08-62.4Z"></path>
        </svg>
      </div>
    </section>
  );
});

OurStory.displayName = "OurStory";

export default OurStory;
