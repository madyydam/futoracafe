"use client";

import { MenuCategory } from "@/types/menu";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

interface MenuFiltersProps {
    categories: MenuCategory[];
    activeCategory: string;
    onCategoryChange: (id: string) => void;
    searchQuery: string;
    onSearchChange: (query: string) => void;
    activeFilters: string[]; // e.g., 'veg', 'spicy'
    onFilterToggle: (filter: string) => void;
}

export default function MenuFilters({
    categories,
    activeCategory,
    onCategoryChange,
    searchQuery,
    onSearchChange,
    activeFilters,
    onFilterToggle,
}: MenuFiltersProps) {
    return (
        <div className="sticky top-20 z-30 w-full space-y-4 py-4 bg-background/80 backdrop-blur-xl border-b border-border/50 mb-8">
            <div className="container mx-auto px-4">

                {/* Top Row: Search and Mobile Filter Toggle */}
                <div className="flex gap-4 items-center">
                    <div className="relative flex-1">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                            placeholder="Search dishes, ingredients..."
                            className="pl-9 bg-secondary/50 border-transparent focus:border-primary/50 focus:bg-background transition-all rounded-full"
                            value={searchQuery}
                            onChange={(e) => onSearchChange(e.target.value)}
                        />
                        {searchQuery && (
                            <button
                                onClick={() => onSearchChange("")}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                            >
                                <X className="h-4 w-4" />
                            </button>
                        )}
                    </div>
                    <Button variant="outline" size="icon" className="rounded-full shrink-0 lg:hidden">
                        <SlidersHorizontal className="h-4 w-4" />
                    </Button>
                </div>

                {/* Categories Scrollable Row */}
                <div className="flex gap-2 overflow-x-auto pb-2 pt-2 scrollbar-hide mask-fade-sides">
                    <Button
                        variant={activeCategory === 'all' ? "default" : "secondary"}
                        onClick={() => onCategoryChange('all')}
                        className={`rounded-full whitespace-nowrap px-6 transition-all ${activeCategory === 'all' ? 'shadow-md scale-105' : 'bg-secondary/50 text-muted-foreground hover:bg-secondary'}`}
                    >
                        All Items
                    </Button>
                    {categories.map((category) => (
                        <Button
                            key={category.id}
                            variant={activeCategory === category.id ? "default" : "secondary"}
                            onClick={() => onCategoryChange(category.id)}
                            className={`rounded-full whitespace-nowrap px-6 transition-all ${activeCategory === category.id ? 'shadow-md scale-105' : 'bg-secondary/50 text-muted-foreground hover:bg-secondary'}`}
                        >
                            {category.name}
                        </Button>
                    ))}
                </div>

                {/* Quick Filters */}
                <div className="flex gap-3 text-sm">
                    <div
                        onClick={() => onFilterToggle('veg')}
                        className={`cursor-pointer px-3 py-1 rounded-full border transition-all select-none flex items-center gap-2 ${activeFilters.includes('veg')
                                ? 'bg-green-100 border-green-200 text-green-700 font-medium'
                                : 'border-transparent text-muted-foreground hover:bg-secondary'
                            }`}
                    >
                        <span className="w-2 h-2 rounded-full bg-green-500" />
                        Veg Only
                    </div>
                    <div
                        onClick={() => onFilterToggle('spicy')}
                        className={`cursor-pointer px-3 py-1 rounded-full border transition-all select-none flex items-center gap-2 ${activeFilters.includes('spicy')
                                ? 'bg-red-100 border-red-200 text-red-700 font-medium'
                                : 'border-transparent text-muted-foreground hover:bg-secondary'
                            }`}
                    >
                        <span className="text-xs">🌶️</span>
                        Spicy
                    </div>
                </div>

            </div>
        </div>
    );
}
