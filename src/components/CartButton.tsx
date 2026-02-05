"use client";

import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { motion } from 'framer-motion';
import { useCart } from '@/contexts/CartContext';

export default function CartButton() {
    const { totalItems, openCart } = useCart();

    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={openCart}
            className="relative p-2 hover:bg-[#F7F3E3] rounded-full transition-colors"
        >
            <ShoppingCart className="w-6 h-6 text-[#3E2723]" />

            {totalItems > 0 && (
                <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-1 -right-1 bg-[#8F221B] text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center"
                >
                    {totalItems}
                </motion.span>
            )}
        </motion.button>
    );
}
