"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import Image from 'next/image';

interface Review {
    id: string;
    name: string;
    avatar: string;
    rating: number;
    text: string;
    date: string;
}

const reviews: Review[] = [
    {
        id: '1',
        name: 'Priya Sharma',
        avatar: 'https://i.pravatar.cc/150?img=1',
        rating: 5,
        text: 'The Artisan Espresso here is absolutely divine! The ambiance is cozy and perfect for catching up with friends. Highly recommend the croissants too!',
        date: 'January 2026'
    },
    {
        id: '2',
        name: 'Arjun Patel',
        avatar: 'https://i.pravatar.cc/150?img=12',
        rating: 5,
        text: 'Best coffee spot in the city! The cold brew is my go-to and the service is always friendly. Love the premium vibe here.',
        date: 'January 2026'
    },
    {
        id: '3',
        name: 'Sneha Reddy',
        avatar: 'https://i.pravatar.cc/150?img=5',
        rating: 5,
        text: 'A hidden gem! The Golden Turmeric Latte is unique and delicious. Great place to work or relax with a book.',
        date: 'December 2025'
    },
    {
        id: '4',
        name: 'Rahul Kumar',
        avatar: 'https://i.pravatar.cc/150?img=13',
        rating: 5,
        text: 'Every visit is a treat. The quality is consistent and the menu has something for everyone. The Oreo Frappe is insane!',
        date: 'December 2025'
    },
];

export default function ReviewsSection() {
    return (
        <section className="py-20 bg-gradient-to-br from-[#F7F3E3] to-[#F7F1E1] overflow-hidden">
            <div className="container mx-auto px-6">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h4 className="text-[#913429] font-bold tracking-widest uppercase text-sm mb-4">
                        What Our Customers Say
                    </h4>
                    <h2 className="font-display text-5xl md:text-7xl text-[#3E2723] italic mb-4">
                        Love from Our Guests
                    </h2>
                    <div className="flex items-center justify-center gap-2 text-[#EAB231]">
                        {[1, 2, 3, 4, 5].map(star => (
                            <Star key={star} className="w-6 h-6 fill-current" />
                        ))}
                        <span className="ml-2 text-[#3E2723] font-nav font-semibold">
                            5.0 / 5.0 (500+ reviews)
                        </span>
                    </div>
                </motion.div>

                {/* Reviews Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {reviews.map((review, idx) => (
                        <motion.div
                            key={review.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: idx * 0.1 }}
                            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 relative"
                        >
                            {/* Quote Icon */}
                            <Quote className="absolute top-6 right-6 w-12 h-12 text-[#8F221B]/10" />

                            {/* Stars */}
                            <div className="flex gap-1 mb-4">
                                {[...Array(review.rating)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 fill-[#EAB231] text-[#EAB231]" />
                                ))}
                            </div>

                            {/* Review Text */}
                            <p className="text-[#3E2723] font-sans leading-relaxed mb-6 relative z-10">
                                "{review.text}"
                            </p>

                            {/* Author */}
                            <div className="flex items-center gap-3">
                                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                                    <Image
                                        src={review.avatar}
                                        alt={review.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div>
                                    <p className="font-nav font-semibold text-[#3E2723]">
                                        {review.name}
                                    </p>
                                    <p className="text-sm text-[#3E2723]/60">
                                        {review.date}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-center mt-12"
                >
                    <a
                        href="https://www.google.com/search?q=futora+cafe"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-8 py-3 bg-[#8F221B] text-white font-nav font-semibold rounded-full hover:bg-[#8F221B]/90 transition-colors"
                    >
                        Read More Reviews on Google
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
