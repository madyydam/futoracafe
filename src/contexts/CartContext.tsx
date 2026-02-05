"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { MenuItem } from '@/data/menu';

export interface CartItem extends MenuItem {
    quantity: number;
    specialInstructions?: string;
    size?: 'regular' | 'large';
    addons?: string[];
}

interface CartContextValue {
    items: CartItem[];
    addToCart: (item: MenuItem, quantity?: number) => void;
    removeFromCart: (itemId: string) => void;
    updateQuantity: (itemId: string, quantity: number) => void;
    updateSpecialInstructions: (itemId: string, instructions: string) => void;
    clearCart: () => void;
    totalItems: number;
    subtotal: number;
    isCartOpen: boolean;
    openCart: () => void;
    closeCart: () => void;
}

const CartContext = createContext<CartContextValue | undefined>(undefined);

const CART_STORAGE_KEY = 'futora_cafe_cart';

export function CartProvider({ children }: { children: React.ReactNode }) {
    const [items, setItems] = useState<CartItem[]>([]);
    const [isCartOpen, setIsCartOpen] = useState(false);

    // Load cart from localStorage on mount
    useEffect(() => {
        const savedCart = localStorage.getItem(CART_STORAGE_KEY);
        if (savedCart) {
            try {
                setItems(JSON.parse(savedCart));
            } catch (error) {
                console.error('Failed to load cart:', error);
            }
        }
    }, []);

    // Save cart to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
    }, [items]);

    const addToCart = React.useCallback((item: MenuItem, quantity = 1) => {
        setItems(prev => {
            const existingItem = prev.find(i => i.id === item.id);

            if (existingItem) {
                return prev.map(i =>
                    i.id === item.id
                        ? { ...i, quantity: i.quantity + quantity }
                        : i
                );
            }

            return [...prev, { ...item, quantity }];
        });

        setIsCartOpen(true); // Auto-open cart when item is added
    }, []);

    const removeFromCart = React.useCallback((itemId: string) => {
        setItems(prev => prev.filter(item => item.id !== itemId));
    }, []);

    const updateQuantity = React.useCallback((itemId: string, quantity: number) => {
        if (quantity <= 0) {
            removeFromCart(itemId);
            return;
        }

        setItems(prev =>
            prev.map(item =>
                item.id === itemId ? { ...item, quantity } : item
            )
        );
    }, [removeFromCart]);

    const updateSpecialInstructions = React.useCallback((itemId: string, instructions: string) => {
        setItems(prev =>
            prev.map(item =>
                item.id === itemId ? { ...item, specialInstructions: instructions } : item
            )
        );
    }, []);

    const clearCart = React.useCallback(() => {
        setItems([]);
        localStorage.removeItem(CART_STORAGE_KEY);
    }, []);

    const totalItems = React.useMemo(() =>
        items.reduce((sum, item) => sum + item.quantity, 0),
        [items]);

    const subtotal = React.useMemo(() =>
        items.reduce((sum, item) => {
            const price = parseFloat(item.price.replace('₹', ''));
            return sum + (price * item.quantity);
        }, 0),
        [items]);

    const openCart = React.useCallback(() => setIsCartOpen(true), []);
    const closeCart = React.useCallback(() => setIsCartOpen(false), []);

    const value: CartContextValue = React.useMemo(() => ({
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        updateSpecialInstructions,
        clearCart,
        totalItems,
        subtotal,
        isCartOpen,
        openCart,
        closeCart,
    }), [
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        updateSpecialInstructions,
        clearCart,
        totalItems,
        subtotal,
        isCartOpen,
        openCart,
        closeCart,
    ]);

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
}
