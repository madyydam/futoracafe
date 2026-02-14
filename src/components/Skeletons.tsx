"use client";

import React from "react";

export const Skeleton = ({ className }: { className?: string }) => {
    return (
        <div className={`animate-pulse bg-gray-200 rounded-md ${className}`} />
    );
};

export const WelcomeMenuSkeleton = () => (
    <div className="py-20 bg-[#F7F3E3]">
        <div className="container mx-auto px-6">
            <div className="flex flex-col items-center mb-16">
                <Skeleton className="h-4 w-32 mb-4" />
                <Skeleton className="h-12 w-64 md:w-96" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {[1, 2, 3].map((i) => (
                    <div key={i} className="p-4 bg-white shadow-lg rounded-sm">
                        <Skeleton className="aspect-[4/5] w-full mb-6" />
                        <div className="flex flex-col items-center space-y-4">
                            <Skeleton className="h-6 w-3/4" />
                            <Skeleton className="h-4 w-full" />
                            <Skeleton className="h-4 w-1/4" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

export const StatsSkeleton = () => (
    <div className="py-24 bg-[#1a1a1a]">
        <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="p-8 bg-white/5 rounded-3xl border border-white/10">
                        <Skeleton className="w-16 h-16 rounded-2xl mb-4 bg-white/10" />
                        <Skeleton className="h-10 w-24 mb-2 bg-white/10" />
                        <Skeleton className="h-4 w-32 bg-white/10" />
                    </div>
                ))}
            </div>
        </div>
    </div>
);
