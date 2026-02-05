"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
    const phoneNumber = '+919876543210'; // Replace with your actual WhatsApp Business number
    const message = encodeURIComponent('Hi! I would like to know more about The Futora Cafe.');
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    return (
        <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ scale: 0, opacity: 0 }}
            animate={{
                scale: 1,
                opacity: 1,
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:shadow-[0_0_30px_rgba(37,211,102,0.6)] transition-shadow duration-300"
            style={{
                willChange: 'transform',
            }}
        >
            {/* Pulse animation ring */}
            <motion.div
                className="absolute inset-0 bg-[#25D366] rounded-full"
                animate={{
                    scale: [1, 1.4, 1],
                    opacity: [0.8, 0, 0.8],
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />

            <MessageCircle className="w-7 h-7 relative z-10" />

            {/* Tooltip */}
            <div className="absolute bottom-full right-0 mb-2 hidden group-hover:block">
                <div className="bg-[#3E2723] text-white px-4 py-2 rounded-lg text-sm font-sans whitespace-nowrap">
                    Chat with us on WhatsApp
                </div>
            </div>
        </motion.a>
    );
}
