export interface MenuCategory {
    id: string;
    name: string;
    description: string | null;
    display_order: number;
    created_at: string;
}

export interface MenuItem {
    id: string;
    category_id: string;
    name: string;
    description: string | null;
    price: number;
    image_url: string | null;
    is_available: boolean;
    is_vegetarian: boolean;
    is_spicy: boolean;
    ingredients: string[] | null;
    created_at: string;
    menu_categories?: MenuCategory | null; // For joined queries
}
