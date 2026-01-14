"use client";

import React from 'react';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';

const WelcomeMenu = () => {
  const specialDishes = [
    {
      id: 1,
      title: "Artisanal Cappuccino",
      description: "Rich espresso topped with a smooth layer of velvety foam, crafted by our expert baristas.",
      image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1000&auto=format&fit=crop",
      rotation: -3,
    },
    {
      id: 2,
      title: "Fresh Avocado Toast",
      description: "Creamy smashed avocado on sourdough, topped with chili flakes and a drizzle of extra virgin olive oil.",
      image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?q=80&w=1000&auto=format&fit=crop",
      rotation: 2,
    },
    {
      id: 3,
      title: "Signature Club Sandwich",
      description: "Layers of toasted bread, fresh greens, grilled chicken, and our secret sauce.",
      image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1000&auto=format&fit=crop",
      rotation: -2,
    },
    {
      id: 4,
      title: "Golden Croissant",
      description: "Flaky, buttery, and baked fresh every morning to perfection.",
      image: "https://images.unsplash.com/photo-1550617931-e17a7b70dce2?q=80&w=1000&auto=format&fit=crop",
      rotation: 3,
    },
    {
      id: 5,
      title: "Berry Bliss Bowl",
      description: "A refreshing blend of açai, seasonal berries, granola, and a touch of honey.",
      image: "https://images.unsplash.com/photo-1590301157890-4810ed352733?q=80&w=1000&auto=format&fit=crop",
      rotation: -2,
    },
    {
      id: 6,
      title: "Iced Caramel Macchiato",
      description: "Perfectly balanced sweetness with rich espresso and chilled milk over ice.",
      image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&w=1000&auto=format&fit=crop",
      rotation: 2,
    }
  ];

  return (
    <section className="relative w-full overflow-hidden">
      {/* Yellow Transition Section */}
      <div className="bg-[#FFB331] h-[150px] relative w-full">
        {/* Wave Brush Divider */}
        <div className="absolute bottom-0 left-0 w-full h-[80px] z-20">
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="w-full h-full fill-[#F7F1E1]">
            <path d="M0,32L60,42.7C120,53,240,75,360,80C480,85,600,75,720,58.7C840,43,960,21,1080,21.3C1200,21,1320,43,1380,53.3L1440,64L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z"></path>
          </svg>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="bg-[#F7F1E1] pt-12 pb-24 relative px-4 text-center">

        <div className="container mx-auto max-w-[1140px] relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="font-display text-[48px] md:text-[80px] lg:text-[100px] text-[#633200] leading-tight mb-4 italic"
          >
            Welcome To The Futora Cafe
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
            className="font-roboto uppercase tracking-widest text-[#4a4a4a] text-[12px] md:text-[14px] mb-12"
          >
            serving smiles with Every cup, flavors You&apos;ll Love!
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="font-montez text-[32px] md:text-[48px] lg:text-[60px] text-[#633200] leading-tight mb-16 px-4"
          >
            Spreading cheer with every bite,<br className="hidden md:block" /> Brewed fresh and served just right!
          </motion.h2>

          <div className="flex items-center justify-center gap-4 mb-16">
            <div className="flex-1 h-[1px] bg-[#633200]/20 hidden md:block"></div>
            <h3 className="font-aladin text-[40px] md:text-[65px] text-[#633200] underline decoration-[#FFB331] decoration-4 underline-offset-8">
              Specials&apos; On Our Menu
            </h3>
            <div className="flex-1 h-[1px] bg-[#633200]/20 hidden md:block"></div>
          </div>

          {/* Hanging Polaroid Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
            {specialDishes.map((dish, index) => (
              <motion.div
                key={dish.id}
                initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
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
                    rotate: dish.rotation,
                    transformOrigin: "top center"
                  }}
                  animate={{
                    rotate: [dish.rotation, dish.rotation - 1.5, dish.rotation + 1.5, dish.rotation],
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
                    rotate: dish.rotation + 2,
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
                      src={dish.image}
                      alt={dish.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>

                  {/* Text Content */}
                  <div className="text-center space-y-2">
                    <h5 className="font-sans text-[18px] md:text-[22px] font-bold text-[#913429] leading-tight">
                      {dish.title}
                    </h5>
                    <p className="font-sans text-[12px] md:text-[13px] text-gray-700 leading-relaxed px-2">
                      {dish.description}
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

          {/* Bottom Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-[800px] mx-auto mb-10 mt-16"
          >
            <p className="font-sans text-[18px] md:text-[22px] font-medium text-[#633200] mb-8 italic">
              These are some of the must-try delights at our café! Explore our menu and indulge in flavors you'll love.
            </p>
            <motion.a
              href="/menu"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-[#913429] text-white px-10 py-4 rounded-full font-bold text-[16px] uppercase tracking-wider shadow-lg hover:bg-[#a63c30] transition-colors duration-300"
            >
              Explore Our Menu
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeMenu;
