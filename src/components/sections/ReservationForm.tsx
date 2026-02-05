"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Users, Star, CheckCircle } from 'lucide-react';

export default function ReservationForm() {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        date: '',
        time: '',
        guests: '2',
        occasion: 'Regular',
        name: '',
        email: '',
        phone: '',
        requests: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isConfirmed, setIsConfirmed] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Mock API call
        await new Promise(resolve => setTimeout(resolve, 1500));

        const reservationId = `RES-${Math.floor(1000 + Math.random() * 9000)}`;
        localStorage.setItem('latest_reservation', JSON.stringify({ ...formData, id: reservationId }));

        setIsSubmitting(false);
        setIsConfirmed(true);
    };

    if (isConfirmed) {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white p-8 md:p-12 rounded-2xl shadow-2xl text-center max-w-2xl mx-auto border border-[#E8DCC4]"
            >
                <CheckCircle className="w-20 h-20 text-[#2C5F2D] mx-auto mb-6" />
                <h2 className="font-display text-4xl md:text-5xl text-[#3E2723] italic mb-4">
                    Table Reserved!
                </h2>
                <p className="text-[#5D4037] mb-8 font-sans text-lg">
                    We've saved a spot for you, <strong>{formData.name}</strong>.
                    <br />
                    A confirmation has been sent to your email.
                </p>

                <div className="bg-[#F7F3E3] p-6 rounded-xl text-left space-y-3 mb-8">
                    <div className="flex justify-between border-b border-[#D4CDB3] pb-2">
                        <span className="text-[#5D4037]">Date</span>
                        <span className="font-semibold text-[#3E2723]">{formData.date}</span>
                    </div>
                    <div className="flex justify-between border-b border-[#D4CDB3] pb-2">
                        <span className="text-[#5D4037]">Time</span>
                        <span className="font-semibold text-[#3E2723]">{formData.time}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-[#5D4037]">Guests</span>
                        <span className="font-semibold text-[#3E2723]">{formData.guests} People</span>
                    </div>
                </div>

                <button
                    onClick={() => window.location.reload()}
                    className="px-8 py-3 bg-[#8F221B] text-white rounded-full font-nav font-semibold hover:bg-[#7A1D17] transition-colors"
                >
                    Make Another Reservation
                </button>
            </motion.div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="bg-white p-8 md:p-12 rounded-2xl shadow-2xl max-w-3xl mx-auto border border-[#E8DCC4]">
            <div className="space-y-8">
                {/* Step Indicators */}
                <div className="flex justify-center items-center gap-4 mb-8">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${step >= 1 ? 'bg-[#8F221B] text-white' : 'bg-gray-200'}`}>1</div>
                    <div className="h-1 w-12 bg-gray-200 rounded-full overflow-hidden">
                        <div className={`h-full bg-[#8F221B] transition-all duration-500 ${step >= 2 ? 'w-full' : 'w-0'}`} />
                    </div>
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${step >= 2 ? 'bg-[#8F221B] text-white' : 'bg-gray-200'}`}>2</div>
                </div>

                {step === 1 ? (
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="space-y-6"
                    >
                        <h3 className="font-heading text-3xl text-[#3E2723] text-center mb-6">Reservation Details</h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-semibold text-[#3E2723] mb-2 font-nav uppercase tracking-wider">
                                    <Calendar className="inline w-4 h-4 mr-2 text-[#8F221B]" /> Select Date
                                </label>
                                <input
                                    type="date"
                                    required
                                    min={new Date().toISOString().split('T')[0]}
                                    value={formData.date}
                                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                                    className="w-full px-4 py-3 rounded-lg border-2 border-[#D4CDB3] focus:border-[#8F221B] focus:outline-none transition-colors"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-[#3E2723] mb-2 font-nav uppercase tracking-wider">
                                    <Clock className="inline w-4 h-4 mr-2 text-[#8F221B]" /> Select Time
                                </label>
                                <select
                                    required
                                    value={formData.time}
                                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                                    className="w-full px-4 py-3 rounded-lg border-2 border-[#D4CDB3] focus:border-[#8F221B] focus:outline-none transition-colors"
                                >
                                    <option value="">Choose Time</option>
                                    <optgroup label="Breakfast">
                                        <option value="09:00">09:00 AM</option>
                                        <option value="10:00">10:00 AM</option>
                                    </optgroup>
                                    <optgroup label="Lunch">
                                        <option value="12:00">12:00 PM</option>
                                        <option value="13:00">01:00 PM</option>
                                        <option value="14:00">02:00 PM</option>
                                    </optgroup>
                                    <optgroup label="Dinner">
                                        <option value="19:00">07:00 PM</option>
                                        <option value="20:00">08:00 PM</option>
                                        <option value="21:00">09:00 PM</option>
                                    </optgroup>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-[#3E2723] mb-2 font-nav uppercase tracking-wider">
                                    <Users className="inline w-4 h-4 mr-2 text-[#8F221B]" /> Number of Guests
                                </label>
                                <select
                                    value={formData.guests}
                                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                                    className="w-full px-4 py-3 rounded-lg border-2 border-[#D4CDB3] focus:border-[#8F221B] focus:outline-none transition-colors"
                                >
                                    {[1, 2, 3, 4, 5, 6, 7, 8].map(n => (
                                        <option key={n} value={n}>{n} {n === 1 ? 'Guest' : 'Guests'}</option>
                                    ))}
                                    <option value="large">9+ (Call Cafe)</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-[#3E2723] mb-2 font-nav uppercase tracking-wider">
                                    <Star className="inline w-4 h-4 mr-2 text-[#8F221B]" /> Occasion
                                </label>
                                <select
                                    value={formData.occasion}
                                    onChange={(e) => setFormData({ ...formData, occasion: e.target.value })}
                                    className="w-full px-4 py-3 rounded-lg border-2 border-[#D4CDB3] focus:border-[#8F221B] focus:outline-none transition-colors"
                                >
                                    <option value="Regular">Regular Dining</option>
                                    <option value="Birthday">Birthday</option>
                                    <option value="Anniversary">Anniversary</option>
                                    <option value="Business">Business Meeting</option>
                                    <option value="Other">Special Occasion</option>
                                </select>
                            </div>
                        </div>

                        <button
                            type="button"
                            onClick={() => setStep(2)}
                            disabled={!formData.date || !formData.time}
                            className="w-full py-4 bg-[#8F221B] text-white rounded-lg font-nav font-bold uppercase tracking-widest hover:bg-[#7A1D17] disabled:bg-gray-300 transition-all"
                        >
                            Next Step
                        </button>
                    </motion.div>
                ) : (
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="space-y-6"
                    >
                        <h3 className="font-heading text-3xl text-[#3E2723] text-center mb-6">Contact Information</h3>

                        <div className="space-y-4">
                            <input
                                type="text"
                                required
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                className="w-full px-4 py-3 rounded-lg border-2 border-[#D4CDB3] focus:border-[#8F221B] focus:outline-none"
                            />
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <input
                                    type="email"
                                    required
                                    placeholder="Email Address"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full px-4 py-3 rounded-lg border-2 border-[#D4CDB3] focus:border-[#8F221B] focus:outline-none"
                                />
                                <input
                                    type="tel"
                                    required
                                    placeholder="Phone Number"
                                    value={formData.phone}
                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    className="w-full px-4 py-3 rounded-lg border-2 border-[#D4CDB3] focus:border-[#8F221B] focus:outline-none"
                                />
                            </div>
                            <textarea
                                placeholder="Any special requests? (Optional)"
                                value={formData.requests}
                                onChange={(e) => setFormData({ ...formData, requests: e.target.value })}
                                className="w-full px-4 py-3 rounded-lg border-2 border-[#D4CDB3] focus:border-[#8F221B] focus:outline-none h-32"
                            />
                        </div>

                        <div className="flex gap-4">
                            <button
                                type="button"
                                onClick={() => setStep(1)}
                                className="flex-1 py-4 border-2 border-[#8F221B] text-[#8F221B] rounded-lg font-nav font-bold uppercase tracking-widest hover:bg-[#8F221B]/5 transition-all"
                            >
                                Back
                            </button>
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="flex-[2] py-4 bg-[#8F221B] text-white rounded-lg font-nav font-bold uppercase tracking-widest hover:bg-[#7A1D17] disabled:bg-gray-400 flex items-center justify-center transition-all"
                            >
                                {isSubmitting ? (
                                    <div className="w-6 h-6 border-3 border-white border-t-transparent rounded-full animate-spin" />
                                ) : (
                                    'Confirm Reservation'
                                )}
                            </button>
                        </div>
                    </motion.div>
                )}
            </div>
        </form>
    );
}
