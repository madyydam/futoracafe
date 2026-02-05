"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission
        alert('Thank you for your message! We will get back to you soon.');
        setFormData({ name: '', email: '', phone: '', message: '' });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <section className="bg-[#F6F1DC] py-20">
            <div className="container mx-auto px-6 max-w-4xl">
                <motion.h2
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center font-heading text-[40px] md:text-[56px] text-[#912222] font-bold mb-4"
                >
                    Send Us a Message
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-center font-sans text-lg text-gray-600 mb-12"
                >
                    Have a question or feedback? We'd love to hear from you!
                </motion.p>

                <motion.form
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    onSubmit={handleSubmit}
                    className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <motion.div
                            whileFocus={{ scale: 1.02 }}
                            className="flex flex-col"
                        >
                            <label htmlFor="name" className="font-sans text-sm font-semibold text-gray-700 mb-2">
                                Your Name *
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#8F221B] focus:outline-none transition-all"
                                placeholder="John Doe"
                            />
                        </motion.div>

                        <motion.div
                            whileFocus={{ scale: 1.02 }}
                            className="flex flex-col"
                        >
                            <label htmlFor="email" className="font-sans text-sm font-semibold text-gray-700 mb-2">
                                Email Address *
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#8F221B] focus:outline-none transition-all"
                                placeholder="john@example.com"
                            />
                        </motion.div>
                    </div>

                    <motion.div
                        whileFocus={{ scale: 1.02 }}
                        className="flex flex-col mb-6"
                    >
                        <label htmlFor="phone" className="font-sans text-sm font-semibold text-gray-700 mb-2">
                            Phone Number
                        </label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#8F221B] focus:outline-none transition-all"
                            placeholder="+1 (555) 123-4567"
                        />
                    </motion.div>

                    <motion.div
                        whileFocus={{ scale: 1.02 }}
                        className="flex flex-col mb-8"
                    >
                        <label htmlFor="message" className="font-sans text-sm font-semibold text-gray-700 mb-2">
                            Your Message *
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows={6}
                            className="px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#8F221B] focus:outline-none transition-all resize-none"
                            placeholder="Tell us what's on your mind..."
                        />
                    </motion.div>

                    <motion.button
                        type="submit"
                        whileHover={{
                            scale: 1.05,
                            boxShadow: "0 10px 30px rgba(143, 34, 27, 0.3)"
                        }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full bg-[#8F221B] text-white font-bold py-4 px-8 rounded-full flex items-center justify-center gap-3 hover:bg-[#a03020] transition-colors shadow-lg"
                    >
                        <Send className="w-5 h-5" />
                        Send Message
                    </motion.button>
                </motion.form>

                {/* Google Map Section - Enhancement */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="mt-20 w-full h-[400px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white"
                >
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.996767676767!2d73.76676767676767!3d18.599676767676767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b91c7a7a7a7a%3A0x7a7a7a7a7a7a7a7a!2sFutora+Cafe!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Futora Cafe Location"
                    ></iframe>
                </motion.div>
            </div>
        </section>
    );
}
