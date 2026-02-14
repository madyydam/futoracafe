"use client";

import React, { useMemo } from 'react';
import { Clock } from 'lucide-react';

interface StoreHours {
    day: string;
    open: string;
    close: string;
    isClosed?: boolean;
}

const storeHours: StoreHours[] = [
    { day: 'Monday', open: '09:00', close: '22:00' },
    { day: 'Tuesday', open: '09:00', close: '22:00' },
    { day: 'Wednesday', open: '09:00', close: '22:00' },
    { day: 'Thursday', open: '09:00', close: '22:00' },
    { day: 'Friday', open: '09:00', close: '23:00' },
    { day: 'Saturday', open: '08:00', close: '23:00' },
    { day: 'Sunday', open: '08:00', close: '22:00' },
];

export default function StoreStatus() {
    const status = useMemo(() => {
        const now = new Date();
        const currentDay = now.toLocaleDateString('en-US', { weekday: 'long' });
        const currentTime = now.toTimeString().slice(0, 5); // HH:MM format

        const todayHours = storeHours.find(h => h.day === currentDay);

        if (!todayHours || todayHours.isClosed) {
            return {
                isOpen: false,
                message: 'Closed Today',
                color: 'text-red-600',
                nextOpening: getNextOpening(now)
            };
        }

        const isOpen = currentTime >= todayHours.open && currentTime < todayHours.close;

        if (isOpen) {
            return {
                isOpen: true,
                message: `Open Now • Closes at ${formatTime(todayHours.close)}`,
                color: 'text-green-600',
            };
        } else if (currentTime < todayHours.open) {
            return {
                isOpen: false,
                message: `Opens at ${formatTime(todayHours.open)}`,
                color: 'text-orange-600',
            };
        } else {
            return {
                isOpen: false,
                message: 'Closed',
                color: 'text-red-600',
                nextOpening: getNextOpening(now)
            };
        }
    }, []);

    return (
        <div className="flex items-center gap-2">
            <div className={`flex items-center gap-2 ${status.color} font-nav font-semibold`}>
                <Clock className="w-4 h-4" />
                <span>{status.message}</span>
            </div>
            {status.isOpen && (
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            )}
        </div>
    );
}

function formatTime(time: string): string {
    const [hours, minutes] = time.split(':').map(Number);
    const period = hours >= 12 ? 'PM' : 'AM';
    const displayHours = hours > 12 ? hours - 12 : hours === 0 ? 12 : hours;
    return `${displayHours}:${minutes.toString().padStart(2, '0')} ${period}`;
}

function getNextOpening(now: Date): string {
    const tomorrow = new Date(now);
    tomorrow.setDate(tomorrow.getDate() + 1);
    const tomorrowDay = tomorrow.toLocaleDateString('en-US', { weekday: 'long' });
    const tomorrowHours = storeHours.find(h => h.day === tomorrowDay);

    if (tomorrowHours && !tomorrowHours.isClosed) {
        return `Opens tomorrow at ${formatTime(tomorrowHours.open)}`;
    }

    return 'Check our hours';
}
