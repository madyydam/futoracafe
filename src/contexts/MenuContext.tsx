"use client";

import React, { createContext, useContext, useState, useMemo } from 'react';
import { MenuItem, DietaryTag, Category, menuData, searchMenu as searchMenuData } from '@/data/menu';

interface MenuContextValue {
    // State
    selectedCategories: Category[];
    selectedDietary: DietaryTag[];
    searchQuery: string;

    // Actions
    toggleCategory: (category: Category) => void;
    toggleDietary: (dietary: DietaryTag) => void;
    setSearchQuery: (query: string) => void;
    clearFilters: () => void;

    // Computed
    filteredItems: MenuItem[];
    availableCategories: Category[];
}

const MenuContext = createContext<MenuContextValue | undefined>(undefined);

export function MenuProvider({ children }: { children: React.ReactNode }) {
    const [selectedCategories, setSelectedCategories] = useState<Category[]>([]);
    const [selectedDietary, setSelectedDietary] = useState<DietaryTag[]>([]);
    const [searchQuery, setSearchQuery] = useState('');

    const toggleCategory = (category: Category) => {
        setSelectedCategories(prev =>
            prev.includes(category)
                ? prev.filter(c => c !== category)
                : [...prev, category]
        );
    };

    const toggleDietary = (dietary: DietaryTag) => {
        setSelectedDietary(prev =>
            prev.includes(dietary)
                ? prev.filter(d => d !== dietary)
                : [...prev, dietary]
        );
    };

    const clearFilters = () => {
        setSelectedCategories([]);
        setSelectedDietary([]);
        setSearchQuery('');
    };

    // Compute filtered menu items
    const filteredItems = useMemo(() => {
        let items = menuData;

        // Apply search
        if (searchQuery.trim()) {
            items = searchMenuData(searchQuery);
        }

        // Apply category filter
        if (selectedCategories.length > 0) {
            items = items.filter(item => selectedCategories.includes(item.category));
        }

        // Apply dietary filter
        if (selectedDietary.length > 0) {
            items = items.filter(item =>
                selectedDietary.every(dietary => item.dietary.includes(dietary))
            );
        }

        return items;
    }, [searchQuery, selectedCategories, selectedDietary]);

    // Get available categories
    const availableCategories: Category[] = useMemo(() => {
        const categories = new Set(menuData.map(item => item.category));
        return Array.from(categories);
    }, []);

    const value: MenuContextValue = {
        selectedCategories,
        selectedDietary,
        searchQuery,
        toggleCategory,
        toggleDietary,
        setSearchQuery,
        clearFilters,
        filteredItems,
        availableCategories,
    };

    return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>;
}

export function useMenu() {
    const context = useContext(MenuContext);
    if (context === undefined) {
        throw new Error('useMenu must be used within a MenuProvider');
    }
    return context;
}
