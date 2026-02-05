"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

/**
 * MenuHero component for The Futora Cafe
 */
const MenuHero: React.FC = () => {
  return (
    <section
      className="relative w-full bg-[#F6F1DC] flex flex-col items-center pt-24 pb-0 overflow-hidden"
      style={{ minHeight: '80vh' }}
    >
      {/* Container for the Main Typography Content */}
      <div className="container relative z-10 flex flex-col items-center">

        {/* "Menu" text - properly centered */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, type: "spring" }}
          className="relative w-full flex justify-center mb-8"
        >
          <h1 className="hero-title animate-in slide-in-from-bottom duration-1000 select-none text-center">
            Menu
          </h1>
        </motion.div>

        {/* Interaction Bar: a-waits, Order Button, Scooter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex items-center gap-6 md:gap-12 mb-8"
        >
          <span className="font-heading text-[20px] md:text-[28px] text-[#332D26] italic lowercase opacity-80">
            awaits you
          </span>

          <motion.div
            className="flex items-center gap-4"
            whileHover={{ scale: 1.05 }}
          >
            <a
              href="#menu-items"
              className="btn-order shadow-lg hover:shadow-xl active:scale-95 transition-all bg-[#8F221B] text-white px-6 py-3 rounded-full font-bold flex items-center gap-2"
            >
              Explore Menu
              <svg
                className="w-4 h-4 fill-current"
                viewBox="0 0 24 24"
              >
                <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
              </svg>
            </a>

            {/* Delivery Scooter Illustration */}
            <motion.div
              className="relative w-[60px] h-[50px] md:w-[80px] md:h-[65px]"
              animate={{
                x: [0, 10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/181cb15d-0961-460f-888f-83bfd54e1847-sadosacafe-com/assets/icons/vecteezy_delivery-illustration-free-vector-element-1.png"
                alt="Delivery scooter"
                fill
                className="object-contain"
                priority
              />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="font-heading text-[18px] md:text-[24px] text-[#666666] tracking-wide mt-4 text-center"
        >
          Discover Our Delicious Creations
        </motion.p>

        {/* Category Quick Links - New Enhancement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-wrap justify-center gap-4 mt-12 mb-4"
        >
          {[
            { name: "Must Try", icon: "✨", id: "#must-try" },
            { name: "Specials", icon: "🍛", id: "#specials" },
            { name: "Starters", icon: "🥟", id: "#starters" },
            { name: "Beverages", icon: "☕", id: "#beverages" },
            { name: "Pizza/Dosa", icon: "🍕", id: "#pizza-dosa" },
            { name: "Jain", icon: "🌿", id: "#jain" },
          ].map((cat) => (
            <motion.a
              key={cat.id}
              href={cat.id}
              whileHover={{
                scale: 1.1,
                backgroundColor: "#8F221B",
                color: "#ffffff"
              }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 rounded-full border-2 border-[#8F221B] text-[#8F221B] font-bold text-sm bg-white transition-all flex items-center gap-2 shadow-sm"
            >
              <span>{cat.icon}</span>
              {cat.name}
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Large Bottom Illustration */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="relative w-full mt-8 md:mt-0 z-0 overflow-visible"
      >
        <div className="relative w-full aspect-[21/9] min-h-[300px] md:min-h-[400px]">
          <Image
            src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1600&auto=format&fit=crop"
            alt="Cafe atmosphere"
            fill
            className="object-cover object-center opacity-30"
            priority
          />
        </div>
      </motion.div>

      {/* Wave Brush Divider */}
      <div className="absolute bottom-0 left-0 w-full h-[60px] pointer-events-none">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-full fill-white"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" />
        </svg>
      </div>

      <style jsx global>{`
        h1.hero-title {
          font-family: var(--font-display);
          font-size: clamp(100px, 18vw, 200px);
          color: var(--color-secondary, #EAB231);
          line-height: 1;
          font-weight: 400;
          margin: 0;
        }
        
        @media (max-width: 768px) {
          h1.hero-title {
            font-size: 80px;
          }
        }

        .btn-order {
          transition: all 0.3s ease;
        }
        .btn-order:hover {
          transform: translateY(-2px);
        }
      `}</style>
    </section>
  );
};

export default MenuHero;