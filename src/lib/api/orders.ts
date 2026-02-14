import { supabase } from '@/lib/supabaseClient';

export interface OrderData {
    customer_name: string;
    customer_email: string;
    customer_phone: string;
    order_type: 'delivery' | 'pickup';
    delivery_address?: string;
    time_slot: string;
    special_instructions?: string;
    items: any[]; // JSON array
    subtotal: number;
    delivery_fee: number;
    tax: number;
    total: number;
    status?: string;
}

export async function createOrder(orderData: OrderData) {
    const { data, error } = await supabase
        .from('orders')
        .insert([orderData])
        .select()
        .single();

    if (error) {
        console.error('Error creating order:', error);
        throw error;
    }

    return data;
}

export async function getOrders() {
    const { data, error } = await supabase
        .from('orders')
        .select('*')
        .order('created_at', { ascending: false });

    if (error) {
        console.error('Error fetching orders:', error);
        return [];
    }

    return data;
}

export async function getOrderById(id: string) {
    const { data, error } = await supabase
        .from('orders')
        .select('*')
        .eq('id', id)
        .single();

    if (error) {
        console.error('Error fetching order:', error);
        return null;
    }

    return data;
}
