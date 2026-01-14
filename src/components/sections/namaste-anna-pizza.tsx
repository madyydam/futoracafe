"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const GourmetSnacksSection = () => {
  return (
    <section className="bg-[#F7F1E1] py-20 overflow-hidden">
      {/* G ourmet Cafe Snacks Section */}
      <div className="container mx-auto max-w-[1200px] px-5">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-heading text-[42px] md:text-[56px] font-bold text-[#912222] text-center relative pb-3 mb-16 mx-auto w-fit after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-[140px] after:height-[3px] after:bg-[#912222]"
        >
          Gourmet Snacks
        </motion.h2>

        <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20">
          {/* Left Column Items */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center md:items-end text-center md:text-right gap-5 flex-1 order-2 md:order-1"
          >
            {[
              "Classic Bagel with Cream Cheese",
              "Smoked Salmon Bagel",
              "Turkey & Swiss Panini",
              "Caprese Sandwich",
              "Chicken Pesto Wrap",
              "Veggie Supreme Sandwich",
              "BLT Classic"
            ].map((item, index) => (
              <motion.div
                key={index}
                className="space-y-1"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ scale: 1.05, x: -5 }}
              >
                <h4 className="font-sans text-xl md:text-2xl font-semibold text-black">{item}</h4>
              </motion.div>
            ))}
          </motion.div>

          {/* Central Circular Imagery */}
          <div className="relative flex flex-col justify-center items-center gap-8 order-1 md:order-2">
            <motion.div
              className="relative w-[280px] h-[280px]"
              animate={{
                rotate: [0, 3, -3, 0],
                y: [0, -5, 5, 0]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <div className="orbital-ring w-[320px] h-[320px] -top-[20px] -left-[20px] border-[#EBA324] border-[1px] rounded-full absolute">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#EBA324] rounded-full"></div>
              </div>
              <div className="food-circle w-full h-full border-4 border-[#EBA324] rounded-full overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=1000&auto=format&fit=crop"
                  alt="Gourmet Sandwiches"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-4 right-0 w-2 h-2 bg-[#912222] rounded-full"></div>
            </motion.div>

            <motion.div
              className="relative w-[260px] h-[260px]"
              animate={{
                rotate: [0, -3, 3, 0],
                y: [0, 5, -5, 0]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <div className="orbital-ring w-[300px] h-[300px] -top-[20px] -left-[20px] border-[#228B22] border-[1px] rounded-full absolute">
                <div className="absolute bottom-0 right-1/4 w-2 h-2 bg-[#228B22] rounded-full"></div>
              </div>
              <div className="food-circle w-full h-full border-4 border-[#228B22] rounded-full overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1509722747041-616f39b57569?q=80&w=1000&auto=format&fit=crop"
                  alt="Artisan Panini"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute top-1/4 -left-4 w-2 h-2 bg-[#EBA324] rounded-full"></div>
            </motion.div>
          </div>

          {/* Right Column Items */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center md:items-start text-center md:text-left gap-5 flex-1 order-3"
          >
            {[
              "Grilled Chicken Sandwich",
              "Tuna Melt",
              "Egg Salad Sandwich",
              "Ham & Cheese Croissant",
              "Avocado Toast Deluxe",
              "Mediterranean Veggie Wrap"
            ].map((item, index) => (
              <motion.div
                key={index}
                className="space-y-1"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ scale: 1.05, x: 5 }}
              >
                <h4 className="font-sans text-xl md:text-2xl font-semibold text-black">{item}</h4>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Sweet Treats Section */}
      <div className="container mx-auto max-w-[1200px] px-5 mt-32">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-[42px] md:text-[56px] font-bold text-[#912222] relative pb-3 mb-6 mx-auto w-fit after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-[140px] after:height-[3px] after:bg-[#912222]">
            Sweet Treats
          </h2>
          <p className="font-body text-[16px] text-[#7A7A7A] max-w-2xl mx-auto italic">
            Indulge in our handcrafted desserts, baked fresh daily with premium ingredients.
          </p>
        </motion.div>

        {/* Dessert Items List */}
        <div className="max-w-3xl mx-auto text-center space-y-8">
          {[
            { name: "New York Cheesecake", description: "" },
            { name: "Belgian Chocolate Brownies", description: "" },
            { name: "Apple Cinnamon Pie", description: "" },
            { name: "Tiramisu", description: "Classic Italian dessert with layers of espresso-soaked ladyfingers and mascarpone cream" }
          ].map((item, index) => (
            <motion.div
              key={index}
              className="group transition-all duration-300 relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
            >
              <h3 className="font-sans text-[26px] md:text-[30px] font-semibold text-black mb-1">
                {item.name}
              </h3>
              {item.description && (
                <p className="font-body text-sm text-[#7A7A7A] mb-4">{item.description}</p>
              )}
              <div className="h-[1px] w-20 bg-[#912222]/30 mx-auto mt-4"></div>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        .orbital-ring {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
        }
        .food-circle {
          border-radius: 50%;
          aspect-ratio: 1 / 1;
          overflow: hidden;
          position: relative;
        }
      `}</style>
    </section>
  );
};

export default GourmetSnacksSection;