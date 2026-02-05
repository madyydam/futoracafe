"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Menu, X, ShoppingCart, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import CartButton from "../CartButton";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Menu", href: "/menu" },
];

const mobileNavLinks = [...navLinks, { name: "Book a Table", href: "/reservations" }];

const Header = React.memo(() => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const ticking = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          const scrolled = window.scrollY > 20;
          setIsSticky(scrolled);
          ticking.current = false;
        });
        ticking.current = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] px-4 py-2 md:px-6 md:py-3 pointer-events-none">
      <nav
        className={`mx-auto max-w-7xl w-full pointer-events-auto transition-all duration-500 ease-out rounded-full border border-white/10 backdrop-blur-xl shadow-2xl flex items-center justify-between px-6 md:px-10 ${isSticky
          ? "bg-[#8F221B]/90 h-[50px] md:h-[60px]"
          : "bg-[#8F221B]/70 h-[60px] md:h-[75px]"
          }`}
      >
        {/* Logo Section */}
        <div className="flex-1 flex justify-start">
          <Link href="/" className="group flex items-center gap-2">
            <span className="text-white font-display text-[26px] md:text-[34px] italic leading-tight transition-transform group-hover:scale-105 duration-300">
              The Futora Cafe
            </span>
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center justify-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="relative font-nav text-[13px] font-bold tracking-[0.15em] transition-all text-white/90 hover:text-white uppercase group py-2"
            >
              {link.name}
              <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-secondary transition-all duration-300 group-hover:w-full group-hover:left-0" />
            </Link>
          ))}

          <Link
            href="/reservations"
            className="px-8 py-2.5 bg-secondary text-black font-nav text-[12px] font-bold uppercase tracking-widest rounded-full transition-all duration-300 hover:bg-white hover:scale-105 hover:shadow-lg hover:shadow-black/20"
          >
            Book a Table
          </Link>
        </div>

        {/* Right Actions: Cart & Mobile Toggle */}
        <div className="flex-1 flex items-center justify-end gap-3 md:gap-5">
          <Link
            href="/contact"
            className="p-2 text-white/90 hover:text-white transition-colors"
            aria-label="Contact Us"
          >
            <Phone size={22} />
          </Link>
          <CartButton />

          <button
            onClick={() => setIsMenuOpen(true)}
            className="lg:hidden p-2 text-white/90 hover:text-white transition-colors"
            aria-label="Open Menu"
          >
            <Menu size={26} />
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[110] pointer-events-auto"
            />

            {/* Side Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 w-[300px] bg-[#8F221B] z-[120] pointer-events-auto flex flex-col p-8 shadow-2xl border-l border-white/10"
            >
              <div className="flex justify-between items-center mb-12">
                <span className="text-white font-display text-[24px] italic">The Futora Cafe</span>
                <button onClick={() => setIsMenuOpen(false)} className="text-white/80 hover:text-white">
                  <X size={28} />
                </button>
              </div>

              <nav className="flex flex-col gap-8">
                {mobileNavLinks.map((link, idx) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * idx }}
                  >
                    <Link
                      href={link.href}
                      className={`font-nav text-[22px] font-bold uppercase tracking-widest ${link.name === "Book a Table" ? "text-secondary" : "text-white"
                        }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <div className="mt-auto pt-8 border-t border-white/10 flex flex-col gap-4">
                <p className="font-nav text-xs text-secondary/80 uppercase tracking-widest">Contact Information</p>
                <p className="text-white text-sm">+91 84466 53644</p>
                <p className="text-white/70 text-xs">futoragroup@gmail.com</p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
});

Header.displayName = "Header";

export default Header;