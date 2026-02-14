"use client";

import { MenuItem } from "@/types/menu";
import Image from "next/image";
import { motion } from "framer-motion";
import { Plus, Heart, Info } from "lucide-react";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { toast } from "sonner";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";

interface MenuItemCardProps {
    item: MenuItem;
    index: number;
}

export default function MenuItemCard({ item, index }: MenuItemCardProps) {
    const [isHovered, setIsHovered] = useState(false);
    const cart = useCart();

    const handleAddToCart = () => {
        // Convert DB item to MenuItem structure from /data/menu
        const menuItem = {
            id: item.id,
            name: item.name,
            description: item.description || "",
            price: `₹${item.price}`,
            image: item.image_url || "/images/placeholder-food.jpg",
            category: item.menu_categories?.name || "General",
            isVegetarian: item.is_vegetarian,
            isSpicy: item.is_spicy
        };

        cart.addToCart(menuItem as any);
        toast.success(`Added ${item.name} to cart`);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="group relative bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-border/50"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Image Container */}
            <div className="relative h-48 w-full overflow-hidden bg-muted">
                {item.image_url ? (
                    <Image
                        src={item.image_url}
                        alt={item.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                ) : (
                    <div className="flex items-center justify-center h-full text-muted-foreground/50">
                        <span className="text-4xl">🥘</span>
                    </div>
                )}

                {/* Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Badges */}
                <div className="absolute top-3 left-3 flex gap-2">
                    {item.is_vegetarian && (
                        <Badge variant="secondary" className="bg-green-100 text-green-700 border-green-200 hover:bg-green-200">
                            Veg
                        </Badge>
                    )}
                    {item.is_spicy && (
                        <Badge variant="secondary" className="bg-red-100 text-red-700 border-red-200 hover:bg-red-200">
                            Spicy
                        </Badge>
                    )}
                </div>

                {/* Quick Actions */}
                <div className="absolute top-3 right-3 flex flex-col gap-2 translate-x-10 group-hover:translate-x-0 transition-transform duration-300">
                    <Button
                        size="icon"
                        variant="secondary"
                        className="h-8 w-8 rounded-full bg-white/90 backdrop-blur-sm hover:bg-white text-rose-500"
                    >
                        <Heart className="h-4 w-4" />
                    </Button>
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Button
                                    size="icon"
                                    variant="secondary"
                                    className="h-8 w-8 rounded-full bg-white/90 backdrop-blur-sm hover:bg-white text-blue-500"
                                >
                                    <Info className="h-4 w-4" />
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Contains: {item.ingredients?.join(', ') || 'Standard ingredients'}</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </div>
            </div>

            {/* Content */}
            <div className="p-4 space-y-3">
                <div className="flex justify-between items-start">
                    <div>
                        <h3 className="font-semibold text-lg leading-tight group-hover:text-primary transition-colors">
                            {item.name}
                        </h3>
                        <p className="text-sm text-muted-foreground line-clamp-2 mt-1">
                            {item.description}
                        </p>
                    </div>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-border/50">
                    <div className="flex flex-col">
                        <span className="text-xs text-muted-foreground">Price</span>
                        <span className="font-bold text-lg">₹{item.price}</span>
                    </div>

                    <Button
                        onClick={handleAddToCart}
                        disabled={!item.is_available}
                        size="sm"
                        className={`rounded-full shadow-lg ${!item.is_available ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105 active:scale-95'
                            } transition-all duration-300`}
                    >
                        {item.is_available ? (
                            <>
                                Add <Plus className="h-4 w-4 ml-1" />
                            </>
                        ) : (
                            'Sold Out'
                        )}
                    </Button>
                </div>
            </div>
        </motion.div>
    );
}
