"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useCart } from '@/contexts/CartContext';
import { useRouter } from 'next/navigation';
import Header from '@/components/sections/header';
import Footer from '@/components/sections/footer';
import { MapPin, Clock, User, Phone, Mail, MessageSquare } from 'lucide-react';
import Image from 'next/image';
import { createOrder } from '@/lib/api/orders';
import { toast } from 'sonner';

export default function CheckoutPage() {
    const { items, subtotal, clearCart } = useCart();
    const router = useRouter();

    // Redirect to menu if cart is empty
    useEffect(() => {
        if (items.length === 0) {
            router.push('/menu');
        }
    }, [items.length, router]);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        orderType: 'delivery' as 'delivery' | 'pickup',
        address: '',
        timeSlot: '',
        specialInstructions: ''
    });

    const [errors, setErrors] = useState<Record<string, string>>({});

    const deliveryFee = formData.orderType === 'delivery' ? 50 : 0;
    const tax = (subtotal + deliveryFee) * 0.05; // 5% tax
    const total = subtotal + deliveryFee + tax;

    const validate = () => {
        const newErrors: Record<string, string> = {};

        if (!formData.name.trim()) newErrors.name = 'Name is required';
        if (!formData.email.trim()) newErrors.email = 'Email is required';
        if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
        if (formData.orderType === 'delivery' && !formData.address.trim()) {
            newErrors.address = 'Delivery address is required';
        }
        if (!formData.timeSlot) newErrors.timeSlot = 'Please select a time slot';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validate()) return;

        try {
            const orderData = {
                customer_name: formData.name,
                customer_email: formData.email,
                customer_phone: formData.phone,
                order_type: formData.orderType,
                delivery_address: formData.address,
                time_slot: formData.timeSlot,
                special_instructions: formData.specialInstructions,
                items: items,
                subtotal,
                delivery_fee: deliveryFee,
                tax,
                total,
                status: 'pending'
            };

            const result = await createOrder(orderData);

            // Also save to localStorage
            localStorage.setItem('latest_order', JSON.stringify({ ...orderData, id: result.id }));

            clearCart();
            toast.success('Order placed successfully!');
            router.push(`/order-confirmation?id=${result.id}`);
        } catch (error) {
            console.error('Order error:', error);
            toast.error('Failed to place order. Please try again.');
        }
    };

    return (
        <div className="min-h-screen flex flex-col bg-[#F7F1E1] overflow-x-hidden w-full">
            <Header />

            <main className="flex-grow pt-[120px] pb-20">
                <div className="container mx-auto px-4 md:px-6 max-w-6xl">
                    <h1 className="font-display text-5xl md:text-6xl text-[#3E2723] italic text-center mb-12">
                        Checkout
                    </h1>

                    <div className="grid lg:grid-cols-2 gap-8">
                        {/* Left: Form */}
                        <div className="space-y-6">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Customer Info */}
                                <div className="bg-white p-6 rounded-lg shadow-lg">
                                    <h2 className="font-heading text-2xl text-[#3E2723] mb-4">Contact Information</h2>

                                    <div className="space-y-4">
                                        <div>
                                            <label className="block text-sm font-nav font-semibold text-[#3E2723] mb-2">
                                                <User className="inline w-4 h-4 mr-1" /> Full Name
                                            </label>
                                            <input
                                                type="text"
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                className={`w-full px-4 py-3 border-2 rounded-lg font-sans ${errors.name ? 'border-red-500' : 'border-[#D4CDB3]'} focus:border-[#8F221B] focus:outline-none`}
                                                placeholder="John Doe"
                                            />
                                            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                                        </div>

                                        <div>
                                            <label className="block text-sm font-nav font-semibold text-[#3E2723] mb-2">
                                                <Mail className="inline w-4 h-4 mr-1" /> Email
                                            </label>
                                            <input
                                                type="email"
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                className={`w-full px-4 py-3 border-2 rounded-lg font-sans ${errors.email ? 'border-red-500' : 'border-[#D4CDB3]'} focus:border-[#8F221B] focus:outline-none`}
                                                placeholder="john@example.com"
                                            />
                                            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                                        </div>

                                        <div>
                                            <label className="block text-sm font-nav font-semibold text-[#3E2723] mb-2">
                                                <Phone className="inline w-4 h-4 mr-1" /> Phone Number
                                            </label>
                                            <input
                                                type="tel"
                                                value={formData.phone}
                                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                                className={`w-full px-4 py-3 border-2 rounded-lg font-sans ${errors.phone ? 'border-red-500' : 'border-[#D4CDB3]'} focus:border-[#8F221B] focus:outline-none`}
                                                placeholder="+91 84466 53644"
                                            />
                                            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                                        </div>
                                    </div>
                                </div>

                                {/* Order Type */}
                                <div className="bg-white p-6 rounded-lg shadow-lg">
                                    <h2 className="font-heading text-2xl text-[#3E2723] mb-4">Order Type</h2>

                                    <div className="flex gap-4">
                                        <button
                                            type="button"
                                            onClick={() => setFormData({ ...formData, orderType: 'delivery' })}
                                            className={`flex-1 p-4 rounded-lg border-2 transition-colors ${formData.orderType === 'delivery' ? 'border-[#8F221B] bg-[#8F221B]/10' : 'border-[#D4CDB3]'}`}
                                        >
                                            <MapPin className="w-6 h-6 mx-auto mb-2" />
                                            <p className="font-nav font-semibold">Delivery</p>
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => setFormData({ ...formData, orderType: 'pickup' })}
                                            className={`flex-1 p-4 rounded-lg border-2 transition-colors ${formData.orderType === 'pickup' ? 'border-[#8F221B] bg-[#8F221B]/10' : 'border-[#D4CDB3]'}`}
                                        >
                                            <Clock className="w-6 h-6 mx-auto mb-2" />
                                            <p className="font-nav font-semibold">Pickup</p>
                                        </button>
                                    </div>

                                    {formData.orderType === 'delivery' && (
                                        <div className="mt-4">
                                            <label className="block text-sm font-nav font-semibold text-[#3E2723] mb-2">
                                                Delivery Address
                                            </label>
                                            <textarea
                                                value={formData.address}
                                                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                                                className={`w-full px-4 py-3 border-2 rounded-lg font-sans ${errors.address ? 'border-red-500' : 'border-[#D4CDB3]'} focus:border-[#8F221B] focus:outline-none`}
                                                rows={3}
                                                placeholder="Street address, apartment/unit, city, pincode"
                                            />
                                            {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
                                        </div>
                                    )}
                                </div>

                                {/* Time Slot */}
                                <div className="bg-white p-6 rounded-lg shadow-lg">
                                    <h2 className="font-heading text-2xl text-[#3E2723] mb-4">Preferred Time</h2>

                                    <select
                                        value={formData.timeSlot}
                                        onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                                        className={`w-full px-4 py-3 border-2 rounded-lg font-sans ${errors.timeSlot ? 'border-red-500' : 'border-[#D4CDB3]'} focus:border-[#8F221B] focus:outline-none`}
                                    >
                                        <option value="">Select a time slot</option>
                                        <option value="asap">ASAP (30-45 mins)</option>
                                        <option value="12:00-1:00">12:00 PM - 1:00 PM</option>
                                        <option value="1:00-2:00">1:00 PM - 2:00 PM</option>
                                        <option value="2:00-3:00">2:00 PM - 3:00 PM</option>
                                        <option value="6:00-7:00">6:00 PM - 7:00 PM</option>
                                        <option value="7:00-8:00">7:00 PM - 8:00 PM</option>
                                        <option value="8:00-9:00">8:00 PM - 9:00 PM</option>
                                    </select>
                                    {errors.timeSlot && <p className="text-red-500 text-sm mt-1">{errors.timeSlot}</p>}
                                </div>

                                {/* Special Instructions */}
                                <div className="bg-white p-6 rounded-lg shadow-lg">
                                    <h2 className="font-heading text-2xl text-[#3E2723] mb-4">
                                        <MessageSquare className="inline w-5 h-5 mr-2" />
                                        Special Instructions (Optional)
                                    </h2>

                                    <textarea
                                        value={formData.specialInstructions}
                                        onChange={(e) => setFormData({ ...formData, specialInstructions: e.target.value })}
                                        className="w-full px-4 py-3 border-2 border-[#D4CDB3] rounded-lg font-sans focus:border-[#8F221B] focus:outline-none"
                                        rows={3}
                                        placeholder="Any special requests or dietary restrictions?"
                                    />
                                </div>

                                {/* Submit Button */}
                                <motion.button
                                    type="submit"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full py-4 bg-[#8F221B] text-white font-nav font-semibold text-lg rounded-lg hover:bg-[#8F221B]/90 transition-colors"
                                >
                                    Place Order - ₹{total.toFixed(2)}
                                </motion.button>
                            </form>
                        </div>

                        {/* Right: Order Summary */}
                        <div className="lg:sticky lg:top-32 h-fit">
                            <div className="bg-white p-6 rounded-lg shadow-lg">
                                <h2 className="font-heading text-2xl text-[#3E2723] mb-6">Order Summary</h2>

                                <div className="space-y-4 mb-6">
                                    {items.map(item => (
                                        <div key={item.id} className="flex gap-4">
                                            <div className="relative w-16 h-16 rounded overflow-hidden flex-shrink-0">
                                                <Image src={item.image} alt={item.name} fill className="object-cover" />
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="font-heading text-[#3E2723]">{item.name}</h3>
                                                <p className="text-sm text-[#5D4037]">Qty: {item.quantity}</p>
                                            </div>
                                            <span className="font-semibold text-[#8F221B]">
                                                ₹{(parseFloat(item.price.replace('₹', '')) * item.quantity).toFixed(2)}
                                            </span>
                                        </div>
                                    ))}
                                </div>

                                <div className="border-t border-gray-200 pt-4 space-y-2">
                                    <div className="flex justify-between text-sm">
                                        <span>Subtotal:</span>
                                        <span>₹{subtotal.toFixed(2)}</span>
                                    </div>
                                    {deliveryFee > 0 && (
                                        <div className="flex justify-between text-sm">
                                            <span>Delivery Fee:</span>
                                            <span>₹{deliveryFee.toFixed(2)}</span>
                                        </div>
                                    )}
                                    <div className="flex justify-between text-sm">
                                        <span>Tax (5%):</span>
                                        <span>₹{tax.toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between font-heading text-xl text-[#8F221B] pt-2 border-t border-gray-200">
                                        <span>Total:</span>
                                        <span>₹{total.toFixed(2)}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
