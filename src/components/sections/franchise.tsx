import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Franchise = () => {
  return (
    <section className="relative py-[100px] bg-[#f7f1e1] overflow-hidden">
      <div className="container mx-auto px-4 max-w-[1140px]">
        {/* Section Header */}
        <div className="flex items-center justify-center mb-[60px] gap-8">
          <div className="flex-1 h-[1px] bg-[#633200]/20 hidden sm:block"></div>
          <motion.h3 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-[#913429] font-display text-[48px] md:text-[80px] leading-[1.1em] text-center whitespace-nowrap px-4 italic"
          >
            Our Franchise
          </motion.h3>
          <div className="flex-1 h-[1px] bg-[#633200]/20 hidden sm:block"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side: Illustration/Image */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative flex justify-center items-center"
          >
            {/* Background Circle Decorative Element */}
            <div className="absolute w-[90%] aspect-square bg-[#913429] rounded-full opacity-5 -z-10 blur-3xl"></div>
            
            <div className="relative w-full max-w-[550px] aspect-square rounded-[20px] overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1559925393-8be0ec41b5ec?q=80&w=1000&auto=format&fit=crop"
                alt="The Common Cafe Interior"
                fill
                className="object-cover transition-transform duration-700 hover:scale-110"
              />
            </div>
          </motion.div>

          {/* Right Side: Content Box */}
          <div className="flex flex-col space-y-8">
            <motion.h5 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-[#913429] font-sans text-[32px] md:text-[42px] font-bold leading-[1.2em]"
            >
              The Common Cafe&apos;s Outlets
            </motion.h5>
            
            <motion.h4 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-[#633200] font-sans text-[20px] md:text-[24px] font-semibold leading-[1.4em] italic"
            >
              Artisanal brews, cozy corners, and a community experience like no other.
            </motion.h4>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-[#4a4a4a] font-sans text-[18px] leading-[1.8] max-w-xl"
            >
              We started with a vision to redefine the local cafe scene. Our commitment to sourcing ethical beans, crafting fresh daily bakes, and fostering a welcoming atmosphere has fueled our growth. Join our journey and bring the comfort of The Common Cafe to your neighborhood!
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="pt-4"
            >
              <motion.a 
                href="/franchise"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block bg-[#913429] text-white font-sans font-bold py-4 px-10 rounded-full text-[16px] uppercase tracking-wider transition-all shadow-lg hover:bg-[#a63c30]"
              >
                Join the Family
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Franchise;
