"use client";

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Minus, ShoppingBag, Trash2 } from 'lucide-react';
import Image from 'next/image';
import { useCart } from '@/contexts/CartContext';
import { useRouter } from 'next/navigation';

export default function CartDrawer() {
    const { items, isCartOpen, closeCart, updateQuantity, removeFromCart, totalItems, subtotal } = useCart();
    const router = useRouter();

    const handleCheckout = () => {
        closeCart();
        router.push('/checkout');
    };

    return (
        <AnimatePresence>
            {isCartOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeCart}
                        className="fixed inset-0 bg-black/50 z-50"
                    />

                    {/* Drawer */}
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl z-50 flex flex-col"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between p-6 border-b border-gray-200">
                            <div className="flex items-center gap-2">
                                <ShoppingBag className="w-6 h-6 text-[#8F221B]" />
                                <h2 className="font-heading text-2xl text-[#3E2723]">
                                    Your Cart ({totalItems})
                                </h2>
                            </div>
                            <button
                                onClick={closeCart}
                                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                            >
                                <X className="w-6 h-6 text-[#3E2723]" />
                            </button>
                        </div>

                        {/* Cart Items */}
                        <div className="flex-1 overflow-y-auto p-6">
                            {items.length === 0 ? (
                                <div className="flex flex-col items-center justify-center h-full text-center">
                                    <ShoppingBag className="w-16 h-16 text-gray-300 mb-4" />
                                    <p className="text-gray-500 font-sans">Your cart is empty</p>
                                    <p className="text-sm text-gray-400 mt-2">Add some delicious items to get started!</p>
                                </div>
                            ) : (
                                <div className="space-y-4">
                                    {items.map((item) => (
                                        <motion.div
                                            key={item.id}
                                            layout
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, x: 100 }}
                                            className="flex gap-4 p-4 bg-[#F7F3E3] rounded-lg"
                                        >
                                            {/* Image */}
                                            <div className="relative w-20 h-20 rounded overflow-hidden flex-shrink-0">
                                                <Image
                                                    src={item.image}
                                                    alt={item.name}
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>

                                            {/* Details */}
                                            <div className="flex-1 min-w-0">
                                                <h3 className="font-heading text-lg text-[#3E2723] truncate">
                                                    {item.name}
                                                </h3>
                                                <p className="text-sm text-[#5D4037] font-sans">
                                                    {item.price}
                                                </p>

                                                {/* Quantity Controls */}
                                                <div className="flex items-center gap-3 mt-2">
                                                    <button
                                                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                        className="p-1 hover:bg-[#8F221B] hover:text-white rounded transition-colors"
                                                    >
                                                        <Minus className="w-4 h-4" />
                                                    </button>
                                                    <span className="font-nav font-semibold text-[#3E2723] min-w-[2ch] text-center">
                                                        {item.quantity}
                                                    </span>
                                                    <button
                                                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                        className="p-1 hover:bg-[#8F221B] hover:text-white rounded transition-colors"
                                                    >
                                                        <Plus className="w-4 h-4" />
                                                    </button>
                                                </div>
                                            </div>

                                            {/* Remove Button */}
                                            <button
                                                onClick={() => removeFromCart(item.id)}
                                                className="p-2 hover:bg-red-100 rounded transition-colors self-start"
                                            >
                                                <Trash2 className="w-5 h-5 text-red-600" />
                                            </button>
                                        </motion.div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Footer */}
                        {items.length > 0 && (
                            <div className="border-t border-gray-200 p-6 space-y-4">
                                {/* Subtotal */}
                                <div className="flex items-center justify-between">
                                    <span className="font-nav font-semibold text-[#3E2723]">Subtotal:</span>
                                    <span className="font-heading text-2xl text-[#8F221B]">
                                        ₹{subtotal.toFixed(2)}
                                    </span>
                                </div>

                                {/* Checkout Button */}
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={handleCheckout}
                                    className="w-full py-4 bg-[#8F221B] text-white font-nav font-semibold rounded-lg hover:bg-[#8F221B]/90 transition-colors"
                                >
                                    Proceed to Checkout
                                </motion.button>
                            </div>
                        )}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
