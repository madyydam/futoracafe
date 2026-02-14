"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Coffee, Droplets, Zap } from "lucide-react";

const specialItems = [
  {
    id: 1,
    name: "Golden Turmeric Latte",
    description: "Creamy coconut milk with fresh turmeric and honey.",
    price: "₹219",
    icon: <Droplets className="w-6 h-6" />
  },
  {
    id: 2,
    name: "Nitro Cold Brew",
    description: "Infused with nitrogen for a silky, stout-like head.",
    price: "₹289",
    icon: <Zap className="w-6 h-6" />
  },
  {
    id: 3,
    name: "Hazelnut Praline Mocha",
    description: "Rich chocolate meet roasted hazelnut goodness.",
    price: "₹269",
    icon: <Coffee className="w-6 h-6" />
  }
];

const FutoraSpecialMenu = React.memo(() => {
  return (
    <section id="specials" className="py-24 bg-[#3E2723] text-white overflow-hidden relative scroll-mt-20">
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#913429]/20 rounded-full blur-3xl -mr-32 -mt-32" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/40 rounded-full blur-3xl -ml-32 -mb-32" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="font-heading text-4xl md:text-6xl italic mb-4"
          >
            Futora Signature Brews
          </motion.h2>
          <div className="w-24 h-1 bg-[#913429] mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {specialItems.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="p-8 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-colors"
            >
              <div className="text-[#913429] mb-6">{item.icon}</div>
              <h3 className="font-heading text-2xl mb-3">{item.name}</h3>
              <p className="text-white/60 text-sm mb-6 leading-relaxed">{item.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-xl font-bold">{item.price}</span>
                <button className="text-sm uppercase tracking-widest border-b border-[#913429] pb-1 hover:text-[#913429] transition-colors">
                  Order Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
});

FutoraSpecialMenu.displayName = "FutoraSpecialMenu";

export default FutoraSpecialMenu;
