"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useMenu } from '@/contexts/MenuContext';
import { useCart } from '@/contexts/CartContext';
import { Clock } from 'lucide-react';

export default function MustTryDishes() {
    const { filteredItems } = useMenu();
    const { addToCart } = useCart();

    // Filter to only show items in these categories
    const dishes = filteredItems.filter(item =>
        ['cold-brew', 'espresso', 'cafe-bites', 'signature-brews'].includes(item.category)
    );

    // If no items match filters, show a friendly message
    if (dishes.length === 0) {
        return (
            <section className="py-20 bg-[#F7F3E3]">
                <div className="container mx-auto px-6 text-center">
                    <p className="text-[#3E2723] font-sans text-lg">
                        No items match your filters. Try adjusting your search or preferences!
                    </p>
                </div>
            </section>
        );
    }

    return (
        <section id="must-try-delights" className="py-20 bg-[#F7F3E3]">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12"
                >
                    <h4 className="text-[#913429] font-bold tracking-widest uppercase text-sm mb-4">
                        Specials On Our Menu
                    </h4>
                    <h2 className="font-display text-5xl md:text-7xl text-[#3E2723] italic">
                        Must Try Delights
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {dishes.map((dish, idx) => (
                        <motion.div
                            key={dish.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: idx * 0.1 }}
                            className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
                        >
                            {/* Image */}
                            <div className="relative h-64 overflow-hidden">
                                <Image
                                    src={dish.image}
                                    alt={dish.name}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                                />

                                {/* Badges */}
                                {dish.badges && dish.badges.length > 0 && (
                                    <div className="absolute top-4 right-4 flex flex-col gap-2">
                                        {dish.badges.map(badge => (
                                            <span
                                                key={badge}
                                                className={`px-3 py-1 rounded-full text-xs font-bold text-white backdrop-blur-sm ${badge === 'bestseller' ? 'bg-[#8F221B]/90' :
                                                    badge === 'new' ? 'bg-[#2C5F2D]/90' :
                                                        'bg-[#EAB231]/90'
                                                    }`}
                                            >
                                                {badge === 'bestseller' && '⭐ Bestseller'}
                                                {badge === 'new' && '✨ New'}
                                                {badge === 'chef-special' && '👨‍🍳 Chef\'s Special'}
                                            </span>
                                        ))}
                                    </div>
                                )}

                                {/* Prep Time */}
                                {dish.prepTime && (
                                    <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1">
                                        <Clock className="w-3 h-3 text-[#3E2723]" />
                                        <span className="text-xs font-sans font-medium text-[#3E2723]">
                                            {dish.prepTime}
                                        </span>
                                    </div>
                                )}
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <h3 className="font-heading text-2xl text-[#3E2723] mb-2">
                                    {dish.name}
                                </h3>
                                <p className="text-[#5D4037] text-sm mb-4 font-light leading-relaxed">
                                    {dish.description}
                                </p>

                                {/* Dietary Tags */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {dish.dietary.map(tag => (
                                        <span
                                            key={tag}
                                            className="px-2 py-1 bg-[#F7F3E3] text-[#2C5F2D] text-xs font-medium rounded"
                                        >
                                            {tag === 'veg' && '🌱'}
                                            {tag === 'vegan' && '🥬'}
                                            {tag === 'jain' && '🙏'}
                                            {tag === 'gluten-free' && '🌾'}
                                            {' '}{tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex items-center justify-between">
                                    <span className="text-[#913429] font-bold text-2xl">
                                        {dish.price}
                                    </span>
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={() => addToCart(dish)}
                                        className="px-6 py-2 bg-[#8F221B] text-white rounded-full font-nav font-medium text-sm hover:bg-[#8F221B]/90 transition-colors"
                                    >
                                        Add to Cart
                                    </motion.button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
