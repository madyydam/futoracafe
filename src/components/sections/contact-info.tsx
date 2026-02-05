"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function ContactInfo() {
    const contactDetails = [
        {
            icon: MapPin,
            title: "Visit Us",
            content: "Futora Cafe, Ground Floor, Icon Tower, Wakad, Pune",
            color: "#8F221B"
        },
        {
            icon: Phone,
            title: "Call Us",
            content: "+91 +91 84466 53644",
            color: "#2C5F2D"
        },
        {
            icon: Mail,
            title: "Email Us",
            content: "futoragroup@gmail.com",
            color: "#EAB231"
        },
        {
            icon: Clock,
            title: "Opening Hours",
            content: "Every Day: 8 AM - 11 PM",
            color: "#EB6D48"
        }
    ];

    return (
        <section className="bg-[#F7F1E1] py-20 relative">
            {/* WhatsApp Floating Button Quick Win */}
            <motion.a
                href="https://wa.me/918446544544?text=Hi! I'd like to know more about FutoraCafe"
                target="_blank"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                className="fixed bottom-8 right-8 z-[100] bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center hover:shadow-[#25D366]/50 transition-all border-4 border-white"
            >
                <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
                        <path d="M12.031 6.172c-2.31 0-4.527.902-6.16 2.535-1.633 1.637-2.536 3.856-2.536 6.16 0 1.25.26 2.457.773 3.56l-.82 3.012 3.09-.81c1.077.585 2.298.895 3.56.895 4.795 0 8.691-3.901 8.691-8.69 0-2.31-.902-4.523-2.535-6.16a8.618 8.618 0 00-6.073-2.502zm0 1.5c1.908 0 3.7.742 5.047 2.09 1.347 1.348 2.09 3.139 2.09 5.047 0 3.93-3.199 7.135-7.13 7.135-.119 0-.238-.003-.356-.008-.09-.004-.15-.05-.186-.128s-.012-.178.04-.263l.635-1.042-2.152.564c-.058.015-.118.015-.176 0l-.039-.01c-1.143-.306-2.164-.933-2.953-1.812l-1.008 3.69 3.682-.96c.717.388 1.52.593 2.346.593 3.93 0 7.136-3.199 7.136-7.135 0-1.908-.742-3.7-2.09-5.047a7.11 7.11 0 00-5.047-2.091zm-2.091 10.155c-.267 0-.528-.106-.717-.295l-1.545-1.546c-.39-.39-.39-1.023 0-1.414s1.024-.39 1.414 0l.848.848 3.535-3.535c.39-.39 1.024-.39 1.414 0s.39 1.023 0 1.414l-4.242 4.242c-.19.19-.45.295-.717.295z" />
                    </svg>
                </motion.div>
            </motion.a>
            <div className="container mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center font-heading text-[40px] md:text-[56px] text-[#912222] font-bold mb-16"
                >
                    Contact Information
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                    {contactDetails.map((detail, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.6,
                                delay: index * 0.1,
                                type: "spring",
                                stiffness: 100
                            }}
                            whileHover={{
                                scale: 1.05,
                                rotate: index % 2 === 0 ? -2 : 2,
                                transition: { duration: 0.3 }
                            }}
                            className="bg-white p-8 rounded-2xl shadow-xl text-center relative overflow-hidden"
                        >
                            {/* Background Decoration */}
                            <motion.div
                                className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-10"
                                style={{ background: detail.color }}
                                animate={{
                                    scale: [1, 1.2, 1],
                                    rotate: [0, 90, 0],
                                }}
                                transition={{
                                    duration: 8,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            />

                            <motion.div
                                className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 relative z-10"
                                style={{ backgroundColor: `${detail.color}20` }}
                                whileHover={{ rotate: 360 }}
                                transition={{ duration: 0.6 }}
                            >
                                <detail.icon className="w-8 h-8" style={{ color: detail.color }} />
                            </motion.div>

                            <h3 className="font-sans text-xl font-bold text-black mb-3">
                                {detail.title}
                            </h3>
                            <p className="font-sans text-sm text-gray-600 leading-relaxed">
                                {detail.content}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
