"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Menu, X, ShoppingCart } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import CartButton from "../CartButton";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Menu", href: "/menu" },
  { name: "Book a Table", href: "/reservations" },
  { name: "Contact", href: "/contact" },
];

const Header = React.memo(() => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const ticking = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          const scrolled = window.scrollY > 50;
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
    <header className="sticky top-0 z-[100] w-full">
      {/* Main Navigation Bar */}
      <div
        className={`w-full transition-all duration-300 ease-in-out bg-[#913429] ${isSticky ? "py-2 shadow-md" : "py-3"
          }`}
      >
        <div className="container mx-auto px-6 lg:px-12 flex items-center justify-between">

          {/* Logo - Left/Center */}
          <div className="flex-none flex justify-start lg:flex-1">
            <Link href="/" className="block">
              <div className="text-white font-display text-[24px] md:text-[32px] italic leading-tight">
                The Futora Cafe
              </div>
            </Link>
          </div>

          {/* Navigation Links - Right Side */}
          <nav className="hidden lg:flex items-center justify-end gap-10 flex-1">

            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`font-nav text-[14px] font-semibold tracking-wider transition-colors ${link.active ? "text-white underline underline-offset-4" : "text-white hover:text-white/80"
                  }`}
                style={{ fontFamily: 'var(--font-nav)' }}
              >
                {link.name.toUpperCase()}
              </Link>
            ))}

          </nav>

          {/* Cart & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <CartButton />
            <div className="lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white p-1"
                aria-label="Toggle Menu"
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[110] bg-[#913429] flex flex-col items-center justify-center lg:hidden"
          >
            <button
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-6 right-6 text-white"
            >
              <X size={32} />
            </button>

            <div className="mb-8">
              <div className="text-white font-display text-[32px] italic">
                The Futora Cafe
              </div>
            </div>

            <nav className="flex flex-col items-center gap-8">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * idx }}
                  className={`font-nav text-[20px] font-bold text-white uppercase tracking-widest ${link.active ? "border-b-2 border-white" : ""
                    }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </motion.a>
              ))}
            </nav>

            <div className="mt-12 text-white font-nav text-sm opacity-90">
              Contact: +91 84465 44544
            </div>
          </motion.div>
        )}
      </AnimatePresence>


    </header>
  );
});

Header.displayName = "Header";

export default Header;