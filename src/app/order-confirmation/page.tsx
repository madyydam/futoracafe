import React, { Suspense } from 'react';
import Header from '@/components/sections/header';
import Footer from '@/components/sections/footer';
import OrderConfirmationContent from '@/components/OrderConfirmationContent';

export const metadata = {
    title: "Order Confirmed | The Futora Cafe",
    description: "Thank you for your order at The Futora Cafe.",
};

export default function OrderConfirmationPage() {
    return (
        <div className="min-h-screen flex flex-col bg-[#F7F1E1]">
            <Header />
            <main className="flex-grow pt-[120px] pb-20">
                <Suspense fallback={
                    <div className="min-h-[60vh] flex items-center justify-center font-sans text-[#3E2723]">
                        Loading your order details...
                    </div>
                }>
                    <OrderConfirmationContent />
                </Suspense>
            </main>
            <Footer />
        </div>
    );
}
