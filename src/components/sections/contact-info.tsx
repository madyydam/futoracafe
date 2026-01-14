"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function ContactInfo() {
    const contactDetails = [
        {
            icon: MapPin,
            title: "Visit Us",
            content: "123 Cafe Street, Coffee District, City 12345",
            color: "#8F221B"
        },
        {
            icon: Phone,
            title: "Call Us",
            content: "+1 (555) 123-4567",
            color: "#2C5F2D"
        },
        {
            icon: Mail,
            title: "Email Us",
            content: "hello@thefutoracafe.com",
            color: "#EAB231"
        },
        {
            icon: Clock,
            title: "Opening Hours",
            content: "Mon-Fri: 7AM-8PM | Sat-Sun: 8AM-9PM",
            color: "#EB6D48"
        }
    ];

    return (
        <section className="bg-[#F7F1E1] py-20">
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
