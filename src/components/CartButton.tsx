"use client";

import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { motion } from 'framer-motion';
import { useCart } from '@/contexts/CartContext';

export default function CartButton() {
    const { totalItems, openCart } = useCart();

    return (
        <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={openCart}
            className="relative p-2.5 hover:bg-white/10 rounded-full transition-all duration-300"
        >
            <ShoppingCart className="w-6 h-6 text-white" />

            {totalItems > 0 && (
                <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute top-0 right-0 bg-secondary text-black text-[10px] font-black rounded-full w-5 h-5 flex items-center justify-center border-2 border-[#8F221B]"
                >
                    {totalItems}
                </motion.span>
            )}
        </motion.button>
    );
}
