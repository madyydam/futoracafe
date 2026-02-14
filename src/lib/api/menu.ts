import { supabase } from '@/lib/supabaseClient';
import { MenuCategory, MenuItem } from '@/types/menu';

export async function getMenuCategories(): Promise<MenuCategory[]> {
    const { data, error } = await supabase
        .from('menu_categories')
        .select('*')
        .order('display_order', { ascending: true });

    if (error) {
        console.error('Error fetching categories:', error);
        return [];
    }

    return data as MenuCategory[];
}

export async function getMenuItems(): Promise<MenuItem[]> {
    const { data, error } = await supabase
        .from('menu_items')
        .select('*, menu_categories(name)')
        .order('name', { ascending: true });

    if (error) {
        console.error('Error fetching menu items:', error);
        return [];
    }

    // Transform data to match interface if necessary, though Supabase returns matches closely
    return data as any[];
}
