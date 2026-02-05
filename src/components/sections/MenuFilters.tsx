"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Search, X } from 'lucide-react';
import { useMenu } from '@/contexts/MenuContext';
import { Category, DietaryTag } from '@/data/menu';

const categoryLabels: Record<Category, string> = {
    'cold-brew': 'Cold Brew',
    'espresso': 'Espresso',
    'cafe-bites': 'Cafe Bites',
    'signature-brews': 'Signature Brews',
    'smoothies': 'Smoothies',
    'specialty': 'Specialty',
    'dosa': 'Dosa',
    'rice': 'Rice',
    'pizza': 'Pizza',
    'chowpatty': 'Chowpatty'
};

const dietaryLabels: Record<DietaryTag, string> = {
    'veg': '🌱 Veg',
    'vegan': '🥬 Vegan',
    'jain': '🙏 Jain',
    'gluten-free': '🌾 Gluten-Free'
};

export default function MenuFilters() {
    const {
        selectedCategories,
        selectedDietary,
        searchQuery,
        toggleCategory,
        toggleDietary,
        setSearchQuery,
        clearFilters,
        availableCategories,
        filteredItems
    } = useMenu();

    const hasActiveFilters = selectedCategories.length > 0 || selectedDietary.length > 0 || searchQuery.trim().length > 0;

    return (
        <div className="bg-[#F7F3E3] py-8 sticky top-[80px] z-40 shadow-sm">
            <div className="container mx-auto px-6">
                {/* Search Bar */}
                <div className="mb-6">
                    <div className="relative max-w-2xl mx-auto">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8F221B]/60 w-5 h-5" />
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Search for dishes, ingredients..."
                            className="w-full pl-12 pr-12 py-3 rounded-full border-2 border-[#D4CDB3] focus:border-[#8F221B] focus:outline-none bg-white text-[#3E2723] placeholder:text-[#3E2723]/50 font-sans"
                        />
                        {searchQuery && (
                            <button
                                onClick={() => setSearchQuery('')}
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-[#8F221B]/60 hover:text-[#8F221B] transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        )}
                    </div>
                </div>

                {/* Category Filters */}
                <div className="mb-4">
                    <h3 className="text-sm font-nav font-semibold text-[#3E2723] mb-3 text-center">Categories</h3>
                    <div className="flex flex-wrap justify-center gap-2">
                        {availableCategories.map(category => (
                            <motion.button
                                key={category}
                                onClick={() => toggleCategory(category)}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className={`px-4 py-2 rounded-full font-nav text-sm font-medium transition-colors ${selectedCategories.includes(category)
                                        ? 'bg-[#8F221B] text-white'
                                        : 'bg-white text-[#3E2723] border border-[#D4CDB3] hover:border-[#8F221B]'
                                    }`}
                            >
                                {categoryLabels[category]}
                            </motion.button>
                        ))}
                    </div>
                </div>

                {/* Dietary Filters */}
                <div className="mb-4">
                    <h3 className="text-sm font-nav font-semibold text-[#3E2723] mb-3 text-center">Dietary Preferences</h3>
                    <div className="flex flex-wrap justify-center gap-2">
                        {(Object.keys(dietaryLabels) as DietaryTag[]).map(dietary => (
                            <motion.button
                                key={dietary}
                                onClick={() => toggleDietary(dietary)}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className={`px-4 py-2 rounded-full font-nav text-sm font-medium transition-colors ${selectedDietary.includes(dietary)
                                        ? 'bg-[#2C5F2D] text-white'
                                        : 'bg-white text-[#3E2723] border border-[#D4CDB3] hover:border-[#2C5F2D]'
                                    }`}
                            >
                                {dietaryLabels[dietary]}
                            </motion.button>
                        ))}
                    </div>
                </div>

                {/* Results & Clear */}
                <div className="flex items-center justify-between text-sm">
                    <p className="text-[#3E2723]/70 font-sans">
                        {filteredItems.length} {filteredItems.length === 1 ? 'item' : 'items'} found
                    </p>
                    {hasActiveFilters && (
                        <button
                            onClick={clearFilters}
                            className="text-[#8F221B] hover:text-[#8F221B]/80 font-nav font-medium flex items-center gap-1"
                        >
                            <X className="w-4 h-4" />
                            Clear Filters
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}
