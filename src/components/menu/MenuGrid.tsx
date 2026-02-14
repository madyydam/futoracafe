"use client";

import { useState, useMemo } from "react";
import { MenuCategory, MenuItem } from "@/types/menu";
import MenuItemCard from "./MenuItemCard";
import MenuFilters from "./MenuFilters";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface MenuGridProps {
    categories: MenuCategory[];
    items: MenuItem[];
}

export default function MenuGrid({ categories, items }: MenuGridProps) {
    const [activeCategory, setActiveCategory] = useState("all");
    const [searchQuery, setSearchQuery] = useState("");
    const [activeFilters, setActiveFilters] = useState<string[]>([]);

    const handleFilterToggle = (filter: string) => {
        setActiveFilters(prev =>
            prev.includes(filter)
                ? prev.filter(f => f !== filter)
                : [...prev, filter]
        );
    };

    const filteredItems = useMemo(() => {
        return items.filter((item) => {
            // Category Filter
            if (activeCategory !== "all" && item.category_id !== activeCategory) {
                return false;
            }

            // Search Filter
            if (searchQuery) {
                const query = searchQuery.toLowerCase();
                const matchesName = item.name.toLowerCase().includes(query);
                const matchesDesc = item.description?.toLowerCase().includes(query);
                if (!matchesName && !matchesDesc) return false;
            }

            // Attribute Filters
            if (activeFilters.includes('veg') && !item.is_vegetarian) return false;
            if (activeFilters.includes('spicy') && !item.is_spicy) return false;

            return true;
        });
    }, [items, activeCategory, searchQuery, activeFilters]);

    // Group items by category if "All" is selected, otherwise just show the list
    // But for this design, a masonry or grid is fine. Let's just use a grid.

    return (
        <div className="min-h-screen bg-background">
            <MenuFilters
                categories={categories}
                activeCategory={activeCategory}
                onCategoryChange={setActiveCategory}
                searchQuery={searchQuery}
                onSearchChange={setSearchQuery}
                activeFilters={activeFilters}
                onFilterToggle={handleFilterToggle}
            />

            <div className="container mx-auto px-4 pb-20">
                <div className="mb-4 text-sm text-muted-foreground">
                    Showing {filteredItems.length} results
                </div>

                {filteredItems.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-20 text-center">
                        <div className="text-6xl mb-4">🍽️</div>
                        <h3 className="text-xl font-semibold">No items found</h3>
                        <p className="text-muted-foreground">Try adjusting your filters or search query.</p>
                        <Button
                            variant="link"
                            onClick={() => {
                                setActiveCategory('all');
                                setSearchQuery('');
                                setActiveFilters([]);
                            }}
                            className="mt-4"
                        >
                            Clear all filters
                        </Button>
                    </div>
                ) : (
                    <motion.div
                        layout
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                    >
                        <AnimatePresence>
                            {filteredItems.map((item, index) => (
                                <MenuItemCard key={item.id} item={item} index={index} />
                            ))}
                        </AnimatePresence>
                    </motion.div>
                )}
            </div>
        </div>
    );
}
