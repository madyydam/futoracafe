export type DietaryTag = 'veg' | 'vegan' | 'jain' | 'gluten-free';
export type MealType = 'breakfast' | 'lunch' | 'dinner' | 'snacks' | 'beverages';
export type SpiceLevel = 'mild' | 'medium' | 'hot' | 'extra-hot';
export type Category =
    | 'cold-brew'
    | 'espresso'
    | 'cafe-bites'
    | 'signature-brews'
    | 'smoothies'
    | 'specialty'
    | 'dosa'
    | 'rice'
    | 'pizza'
    | 'chowpatty';

export interface MenuItem {
    id: string;
    name: string;
    description: string;
    price: string;
    image: string;
    category: Category;
    dietary: DietaryTag[];
    mealType: MealType[];
    spiceLevel?: SpiceLevel;
    badges?: ('new' | 'bestseller' | 'chef-special')[];
    isAvailable?: boolean;
    prepTime?: string; // e.g., "15 mins"
}

export const menuData: MenuItem[] = [
    // Cold Brew & Espresso
    {
        id: 'cold-brew-signature',
        name: 'Signature Cold Brew',
        description: 'Our 18-hour slow-steeped signature brew.',
        price: '₹249',
        image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?q=80&w=600&auto=format&fit=crop',
        category: 'cold-brew',
        dietary: ['veg', 'vegan'],
        mealType: ['breakfast', 'snacks'],
        badges: ['bestseller'],
        prepTime: '2 mins'
    },
    {
        id: 'artisan-espresso',
        name: 'Artisan Espresso',
        description: 'Rich and velvety double shot espresso.',
        price: '₹189',
        image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=800&auto=format&fit=crop',
        category: 'espresso',
        dietary: ['veg', 'vegan'],
        mealType: ['breakfast', 'snacks'],
        badges: ['chef-special'],
        prepTime: '3 mins'
    },
    {
        id: 'classic-croissant',
        name: 'Classic Croissant',
        description: 'Buttery, flaky, and baked fresh daily.',
        price: '₹149',
        image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=600&auto=format&fit=crop',
        category: 'cafe-bites',
        dietary: ['veg'],
        mealType: ['breakfast', 'snacks'],
        prepTime: '5 mins'
    },
    {
        id: 'avocado-toast',
        name: 'Avocado Toast',
        description: 'Smashed avocado on sourdough with seeds.',
        price: '₹329',
        image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?q=80&w=600&auto=format&fit=crop',
        category: 'cafe-bites',
        dietary: ['veg', 'vegan'],
        mealType: ['breakfast', 'lunch'],
        badges: ['new'],
        prepTime: '8 mins'
    },

    // Signature Brews
    {
        id: 'golden-turmeric-latte',
        name: 'Golden Turmeric Latte',
        description: 'Creamy coconut milk with fresh turmeric and honey.',
        price: '₹219',
        image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=800&auto=format&fit=crop',
        category: 'signature-brews',
        dietary: ['veg'],
        mealType: ['breakfast', 'snacks'],
        prepTime: '5 mins'
    },
    {
        id: 'nitro-cold-brew',
        name: 'Nitro Cold Brew',
        description: 'Infused with nitrogen for a silky, stout-like head.',
        price: '₹289',
        image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&w=800&auto=format&fit=crop',
        category: 'signature-brews',
        dietary: ['veg', 'vegan'],
        mealType: ['snacks', 'beverages'],
        badges: ['bestseller'],
        prepTime: '3 mins'
    },
    {
        id: 'hazelnut-praline-mocha',
        name: 'Hazelnut Praline Mocha',
        description: 'Rich chocolate meet roasted hazelnut goodness.',
        price: '₹269',
        image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=800&auto=format&fit=crop',
        category: 'signature-brews',
        dietary: ['veg'],
        mealType: ['snacks', 'beverages'],
        prepTime: '5 mins'
    },

    // Cafe Bites (Starters)
    {
        id: 'classic-bruschetta',
        name: 'Classic Bruschetta',
        description: 'Toasted artisan bread topped with fresh tomatoes, basil, and balsamic glaze.',
        price: '₹179',
        image: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?q=80&w=1000&auto=format&fit=crop',
        category: 'cafe-bites',
        dietary: ['veg', 'vegan'],
        mealType: ['lunch', 'dinner', 'snacks'],
        prepTime: '7 mins'
    },
    {
        id: 'spinach-feta-puffs',
        name: 'Spinach & Feta Puffs',
        description: 'Flaky pastry filled with spinach and creamy feta.',
        price: '₹159',
        image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=1000&auto=format&fit=crop',
        category: 'cafe-bites',
        dietary: ['veg'],
        mealType: ['snacks'],
        prepTime: '10 mins'
    },

    // Smoothies & Beverages
    {
        id: 'fresh-mango-smoothie',
        name: 'Fresh Mango Smoothie',
        description: 'Thick, refreshing mango smoothie with a touch of honey and mint.',
        price: '₹189',
        image: 'https://images.unsplash.com/photo-1505252585461-04db1eb84625?q=80&w=1000&auto=format&fit=crop',
        category: 'smoothies',
        dietary: ['veg', 'vegan'],
        mealType: ['breakfast', 'snacks', 'beverages'],
        prepTime: '4 mins'
    },
    {
        id: 'oreo-frappe',
        name: 'Oreo Frappe',
        description: 'Creamy blended coffee with crushed Oreos and whipped cream on top.',
        price: '₹249',
        image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=800&auto=format&fit=crop',
        category: 'specialty',
        dietary: ['veg'],
        mealType: ['snacks', 'beverages'],
        badges: ['bestseller'],
        prepTime: '6 mins'
    },
    {
        id: 'classic-lemonade',
        name: 'Classic Lemonade',
        description: 'Freshly squeezed lemons with mint and a hint of sweetness.',
        price: '₹129',
        image: 'https://images.unsplash.com/photo-1523677011781-c91d1bbe2f9e?q=80&w=1000&auto=format&fit=crop',
        category: 'smoothies',
        dietary: ['veg', 'vegan'],
        mealType: ['beverages'],
        prepTime: '3 mins'
    },
];

// Helper functions
export const getMenuByCategory = (category: Category): MenuItem[] => {
    return menuData.filter(item => item.category === category);
};

export const getMenuByDietary = (dietary: DietaryTag): MenuItem[] => {
    return menuData.filter(item => item.dietary.includes(dietary));
};

export const searchMenu = (query: string): MenuItem[] => {
    const lowerQuery = query.toLowerCase();
    return menuData.filter(item =>
        item.name.toLowerCase().includes(lowerQuery) ||
        item.description.toLowerCase().includes(lowerQuery)
    );
};
