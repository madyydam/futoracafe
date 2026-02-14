import { Suspense } from 'react';
import { getMenuCategories, getMenuItems } from '@/lib/api/menu';
import MenuGrid from '@/components/menu/MenuGrid';
import PageTransition from '@/components/PageTransition';

export const revalidate = 60; // Revalidate every minute

export default async function MenuPage() {
    const [categories, items] = await Promise.all([
        getMenuCategories(),
        getMenuItems()
    ]);

    return (
        <PageTransition>
            <div className="pt-24 pb-16 bg-background min-h-screen">
                {/* Helper text for empty state */}
                {items.length === 0 && (
                    <div className="container mx-auto px-4 mb-8">
                        <div className="bg-yellow-50 border border-yellow-200 text-yellow-800 rounded-lg p-4 text-sm">
                            <strong>Note:</strong> Your menu appears to be empty. Please run the provided <code>supabase_seed.sql</code> in your Supabase SQL Editor to load sample dishes.
                        </div>
                    </div>
                )}

                <div className="container mx-auto px-4 mb-12 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                        Our Menu
                    </h1>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Discover our handcrafted brews and delicious bites.
                        Made with love, served with passion.
                    </p>
                </div>

                <Suspense fallback={<div className="text-center py-20">Loading menu...</div>}>
                    <MenuGrid categories={categories} items={items} />
                </Suspense>
            </div>
        </PageTransition>
    );
}
