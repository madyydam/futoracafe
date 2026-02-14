"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Footer = React.memo(() => {
    return (
        <footer className="w-full">
            {/* Concluding Section: "Until We Meet" Block */}
            <section className="bg-[#F6F1DC] py-[120px] flex flex-col items-center text-center px-6 overflow-hidden">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="max-w-[1000px] mx-auto"
                >
                    <p className="font-display italic text-[#913429] text-[36px] md:text-[48px] mb-8">
                        Step In, Savor, and Stay Awhile!
                    </p>
                    <h2 className="font-sans text-[#000000] text-[28px] md:text-[42px] leading-[1.3] font-bold mb-10 italic">
                        Where Every Bite Tells A Story,<br className="hidden md:block" />
                        And Every Visit Feels Like Home.<br className="hidden md:block" />
                        Come For The Food, Stay For The Vibe!
                    </h2>
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <p className="font-display text-[#913429] text-[48px] xs:text-[56px] sm:text-[64px] md:text-[100px] italic">
                            Until We Meet
                        </p>
                    </motion.div>
                </motion.div>
            </section>

            {/* Main Black Footer Section */}
            <div className="bg-[#0A0A0A] text-white pt-[80px] pb-[40px]">
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 px-6 lg:px-12">

                    {/* Column 1: Logo */}
                    <div className="flex flex-col items-center md:items-start justify-center">
                        <Link href="/" className="inline-block group">
                            <div className="text-white font-display text-[48px] md:text-[60px] italic leading-tight transition-transform group-hover:scale-105">
                                The Futora Cafe
                            </div>
                        </Link>
                        <p className="mt-4 text-[#666666] font-sans max-w-sm text-center md:text-left">
                            Crafting moments of connection through artisanal brews and wholesome flavors since our very first cup.
                        </p>
                    </div>

                    {/* Column 2: Contact Us */}
                    <div className="flex flex-col items-center md:items-end text-center md:text-right">
                        <h4 className="font-sans text-[20px] font-bold text-white mb-8 uppercase tracking-[0.2em]">
                            Get In Touch
                        </h4>
                        <div className="space-y-6 text-[#999999] font-sans text-[16px] leading-relaxed">
                            <p>Address: <span className="text-white transition-colors cursor-default">FC Road, Pune</span></p>
                            <p>Phone: <a href="tel:+918446653644" className="text-white hover:text-[#913429] transition-colors">+91 84466 53644</a></p>
                            <div className="mt-8 pt-4 border-t border-white/10">
                                <p>Need help or have a question?</p>
                                <p>Reach out: <a href="mailto:futoragroup@gmail.com" className="text-white hover:underline font-bold">futoragroup@gmail.com</a></p>
                            </div>
                        </div>
                    </div>
                </div>


                {/* Footer Bottom Bar */}
                <div className="border-t border-white/5 mt-[80px] pt-8 px-6">
                    <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-[#666666] font-sans text-[13px]">
                            Copyright © {new Date().getFullYear()} The Futora Cafe. All Rights Reserved.
                        </p>
                        <p className="text-[#444444] font-sans text-[11px] uppercase tracking-widest">
                            Design by Aquilla Marketers
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
});

Footer.displayName = "Footer";

export default Footer;
