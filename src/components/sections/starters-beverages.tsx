"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const StartersAndBeverages = () => {
  const starters = [
    {
      name: "Classic Bruschetta",
      description: "Toasted artisan bread topped with fresh tomatoes, basil, and balsamic glaze.",
    },
    { name: "Spinach & Feta Puffs", description: "" },
    { name: "Garlic Herb Breadsticks", description: "" },
    { name: "Mini Caprese Skewers", description: "" },
    { name: "Crispy Mozzarella Bites", description: "" },
    { name: "Sweet Potato Fries", description: "" },
    { name: "Mediterranean Hummus Platter", description: "" },
  ];

  const beverages = [
    { name: "Masala Chai" },
    { name: "English Breakfast Tea" },
    { name: "Americano" },
    { name: "Iced Coffee" },
    { name: "Vanilla Iced Latte" },
    {
      name: "Oreo Frappe",
      description: "Creamy blended coffee with crushed Oreos and whipped cream on top.",
    },
  ];

  const moreBeverages = [
    {
      name: "Fresh Mango Smoothie",
      description: "Thick, refreshing mango smoothie with a touch of honey and mint.",
    },
    { name: "Berry Blast Smoothie" },
    { name: "Pineapple Ginger Cooler" },
    { name: "Watermelon Mint Refresher" },
    { name: "Strawberry Milkshake" },
    {
      name: "Classic Lemonade",
      description: "Freshly squeezed lemons with mint and a hint of sweetness.",
    },
  ];

  return (
    <div className="bg-[#F6F1DC] overflow-hidden">
      {/* Starters Section */}
      <section id="starters" className="py-[80px] lg:py-[100px] scroll-mt-20">
        <div className="container mx-auto px-6">
          <div className="mb-20">
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-center mb-12"
            >
              <h2 className="section-category text-[#8F221B] font-heading text-[32px] md:text-[48px] lg:text-[64px] font-bold leading-tight relative inline-block text-center w-full mb-8">
                Cafe Bites
              </h2>
            </motion.div>

            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
              {/* Left Image */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                animate={{
                  rotate: [0, 2, -2, 0],
                  y: [0, -5, 5, 0]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="relative w-[300px] h-[300px] shrink-0"
              >
                <div className="dish-ring w-full h-full p-[10px] border-2 border-[#8F221B] rounded-full relative">
                  <div className="absolute inset-[-8px] border-2 border-[#2C5F2D] rounded-full"></div>
                  <div className="w-full h-full rounded-full overflow-hidden relative shadow-2xl">
                    <Image
                      src="https://images.unsplash.com/photo-1546793665-c74683f339c1?q=80&w=1000&auto=format&fit=crop"
                      alt="Cafe Bites"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-3 h-3 bg-[#EAB231] rounded-full"></div>
                    <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-3 h-3 bg-[#EB6D48] rounded-full"></div>
                  </div>
                </div>
              </motion.div>

              {/* Starter Menu List */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="flex-1 text-center"
              >
                {starters.map((item, index) => (
                  <motion.div
                    key={index}
                    className="mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.03, x: 3 }}
                  >
                    <h3 className="item-name text-[#000000] font-sans text-[18px] md:text-[24px] lg:text-[28px] font-semibold mb-2">
                      {item.name}
                    </h3>
                    {item.description && (
                      <p className="item-description text-[#666666] font-sans text-[14px] md:text-[16px] leading-relaxed max-w-2xl mx-auto">
                        {item.description}
                      </p>
                    )}
                  </motion.div>
                ))}
              </motion.div>

              {/* Right Image */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                animate={{
                  rotate: [0, -2, 2, 0],
                  y: [0, 5, -5, 0]
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="relative w-[300px] h-[300px] shrink-0"
              >
                <div className="dish-ring w-full h-full p-[10px] border-2 border-[#EAB231] rounded-full relative">
                  <div className="absolute inset-[-8px] border-2 border-[#EB6D48] rounded-full"></div>
                  <div className="w-full h-full rounded-full overflow-hidden shadow-2xl">
                    <Image
                      src="https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=1000&auto=format&fit=crop"
                      alt="Cafe Snacks"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#2C5F2D] rounded-full"></div>
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#8F221B] rounded-full"></div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Beverages Section */}
      <section id="beverages" className="pt-20 pb-32 scroll-mt-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center mb-12"
          >
            <h2 className="section-category text-[#8F221B] font-heading text-[32px] md:text-[48px] lg:text-[64px] font-bold leading-tight relative inline-block text-center w-full mb-8">
              Refreshments
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
            {/* Left Content Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="md:col-span-5 relative flex flex-col items-center"
            >
              <div className="relative w-full max-w-[400px] h-[500px]">
                <Image
                  src="https://images.unsplash.com/photo-1497534547324-0ebb3f052e88?q=80&w=1000&auto=format&fit=crop"
                  alt="Refreshing Beverages"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </motion.div>

            {/* Right Content - Beverage List */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="md:col-span-7 space-y-8"
            >
              {/* Beverage Group 1 */}
              <div className="space-y-4">
                {beverages.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                    whileHover={{ scale: 1.02, x: 5 }}
                  >
                    <h3 className="item-name text-[#000000] font-sans text-[20px] md:text-[28px] font-semibold">
                      {item.name}
                    </h3>
                    {item.description && (
                      <p className="item-description text-[#666666] font-sans text-[14px] md:text-[16px] max-w-lg mt-1">
                        {item.description}
                      </p>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Specialty Items */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  {moreBeverages.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.08 }}
                      whileHover={{ scale: 1.02, x: 5 }}
                    >
                      <h3 className="item-name text-[#000000] font-sans text-[20px] md:text-[28px] font-semibold">
                        {item.name}
                      </h3>
                      {item.description && (
                        <p className="item-description text-[#666666] font-sans text-[14px] md:text-[16px] max-w-sm mt-1">
                          {item.description}
                        </p>
                      )}
                    </motion.div>
                  ))}
                </div>

                {/* Small Inset Images */}
                <div className="flex flex-col gap-12 items-center lg:items-end pr-8">
                  {/* Smoothie Inset */}
                  <motion.div
                    className="relative w-[150px] h-[150px]"
                    animate={{
                      y: [0, -5, 5, 0],
                      rotate: [0, 2, -2, 0]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <div className="dish-ring w-full h-full p-[6px] border-2 border-[#EAB231] rounded-full relative">
                      <div className="absolute inset-[-6px] border border-[#8F221B] rounded-full"></div>
                      <div className="w-full h-full rounded-full overflow-hidden relative shadow-lg">
                        <Image
                          src="https://images.unsplash.com/photo-1505252585461-04db1eb84625?q=80&w=1000&auto=format&fit=crop"
                          alt="Smoothie"
                          fill
                          className="object-cover"
                        />
                        <div className="absolute top-0 right-0 w-2 h-2 bg-[#EB6D48] rounded-full"></div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Lemonade Inset */}
                  <motion.div
                    className="relative w-[150px] h-[150px]"
                    animate={{
                      y: [0, 5, -5, 0],
                      rotate: [0, -2, 2, 0]
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <div className="dish-ring w-full h-full p-[6px] border-2 border-[#EAB231] rounded-full relative shadow-lg">
                      <div className="absolute inset-[-6px] border border-[#2C5F2D] rounded-full"></div>
                      <div className="w-full h-full rounded-full overflow-hidden bg-white relative shadow-lg">
                        <Image
                          src="https://images.unsplash.com/photo-1523677011781-c91d1bbe2f9e?q=80&w=1000&auto=format&fit=crop"
                          alt="Fresh Lemonade"
                          fill
                          className="object-cover"
                        />
                        <div className="absolute bottom-0 right-4 w-2 h-2 bg-[#EAB231] rounded-full"></div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StartersAndBeverages;