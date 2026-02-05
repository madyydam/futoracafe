"use client";

import React, { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { CheckCircle, Clock, MapPin, Phone, Mail, Download } from 'lucide-react';
import Image from 'next/image';

interface OrderData {
    id: string;
    items: any[];
    customer: any;
    subtotal: number;
    deliveryFee: number;
    tax: number;
    total: number;
    date: string;
}

export default function OrderConfirmationContent() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const orderId = searchParams.get('id');
    const [orderData, setOrderData] = useState<OrderData | null>(null);

    useEffect(() => {
        const storedOrder = localStorage.getItem('latest_order');
        if (storedOrder) {
            const data = JSON.parse(storedOrder);
            setOrderData(data);
        } else {
            router.push('/menu');
        }
    }, [router]);

    if (!orderData) {
        return <div className="min-h-[60vh] flex items-center justify-center">Loading your order details...</div>;
    }

    const estimatedTime = orderData.customer.orderType === 'delivery' ? '45-60 minutes' : '20-30 minutes';

    return (
        <div className="container mx-auto px-6 max-w-4xl">
            {/* Success Animation */}
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', duration: 0.6 }}
                className="text-center mb-8"
            >
                <CheckCircle className="w-24 h-24 text-green-600 mx-auto mb-4" />
                <h1 className="font-display text-5xl md:text-6xl text-[#3E2723] italic mb-2">
                    Order Confirmed!
                </h1>
                <p className="text-xl text-[#5D4037] font-sans">
                    Thank you for your order, {orderData.customer.name}
                </p>
            </motion.div>

            {/* Order Details Card */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-lg shadow-xl p-8 mb-6"
            >
                {/* Order ID & Time */}
                <div className="flex items-center justify-between mb-6 pb-6 border-b border-gray-200">
                    <div>
                        <p className="text-sm text-[#5D4037] mb-1">Order ID</p>
                        <p className="font-heading text-2xl text-[#3E2723]">{orderId || orderData.id}</p>
                    </div>
                    <div className="text-right">
                        <p className="text-sm text-[#5D4037] mb-1">Estimated Time</p>
                        <p className="font-nav font-semibold text-[#8F221B] flex items-center gap-2">
                            <Clock className="w-5 h-5" />
                            {estimatedTime}
                        </p>
                    </div>
                </div>

                {/* Customer Info */}
                <div className="mb-6 pb-6 border-b border-gray-200">
                    <h2 className="font-heading text-2xl text-[#3E2723] mb-4">Delivery Details</h2>

                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="flex items-start gap-3">
                            <Phone className="w-5 h-5 text-[#8F221B] mt-1" />
                            <div>
                                <p className="text-sm text-[#5D4037]">Phone</p>
                                <p className="font-nav font-semibold text-[#3E2723]">{orderData.customer.phone}</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-3">
                            <Mail className="w-5 h-5 text-[#8F221B] mt-1" />
                            <div>
                                <p className="text-sm text-[#5D4037]">Email</p>
                                <p className="font-nav font-semibold text-[#3E2723]">{orderData.customer.email}</p>
                            </div>
                        </div>
                    </div>

                    {orderData.customer.orderType === 'delivery' && orderData.customer.address && (
                        <div className="flex items-start gap-3 mt-4">
                            <MapPin className="w-5 h-5 text-[#8F221B] mt-1" />
                            <div>
                                <p className="text-sm text-[#5D4037]">Delivery Address</p>
                                <p className="font-nav font-semibold text-[#3E2723]">{orderData.customer.address}</p>
                            </div>
                        </div>
                    )}
                </div>

                {/* Order Items */}
                <div className="mb-6 pb-6 border-b border-gray-200">
                    <h2 className="font-heading text-2xl text-[#3E2723] mb-4">Your Items</h2>
                    <div className="space-y-4">
                        {orderData.items.map((item: any) => (
                            <div key={item.id} className="flex items-center gap-4">
                                <div className="relative w-16 h-16 rounded overflow-hidden">
                                    <Image src={item.image} alt={item.name} fill className="object-cover" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-heading text-[#3E2723]">{item.name}</h3>
                                    <p className="text-sm text-[#5D4037]">Quantity: {item.quantity}</p>
                                </div>
                                <p className="font-semibold text-[#8F221B]">{item.price}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Price Breakdown */}
                <div className="space-y-2">
                    <div className="flex justify-between text-[#5D4037]">
                        <span>Subtotal</span>
                        <span>₹{orderData.subtotal.toFixed(2)}</span>
                    </div>
                    {orderData.deliveryFee > 0 && (
                        <div className="flex justify-between text-[#5D4037]">
                            <span>Delivery Fee</span>
                            <span>₹{orderData.deliveryFee.toFixed(2)}</span>
                        </div>
                    )}
                    <div className="flex justify-between text-[#5D4037]">
                        <span>Tax</span>
                        <span>₹{orderData.tax.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-2xl font-bold text-[#3E2723] pt-4">
                        <span>Total Paid</span>
                        <span>₹{orderData.total.toFixed(2)}</span>
                    </div>
                </div>
            </motion.div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <button
                    onClick={() => router.push('/menu')}
                    className="flex-1 py-4 bg-[#8F221B] text-white font-nav font-semibold rounded-lg hover:bg-[#8F221B]/90 transition-colors"
                >
                    Continue Shopping
                </button>
                <button
                    onClick={() => window.print()}
                    className="flex-1 py-4 border-2 border-[#8F221B] text-[#8F221B] font-nav font-semibold rounded-lg hover:bg-[#8F221B]/10 transition-colors flex items-center justify-center gap-2"
                >
                    <Download className="w-5 h-5" />
                    Download Receipt
                </button>
            </div>

            {/* Info Box */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="bg-blue-50 border border-blue-100 rounded-lg p-6 text-center"
            >
                <p className="text-[#3E2723] font-sans">
                    A confirmation email has been sent to <strong>{orderData.customer.email}</strong>.
                    <br />
                    For any queries, contact us at <strong>+91 84466 53644</strong>
                </p>
            </motion.div>
        </div>
    );
}
