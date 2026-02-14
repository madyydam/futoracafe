import { supabase } from '@/lib/supabaseClient';

export interface ReservationData {
    customer_name: string;
    customer_email: string;
    customer_phone: string;
    reservation_date: string;
    reservation_time: string;
    number_of_guests: number;
    occasion?: string;
    special_requests?: string;
    status?: string;
}

export async function createReservation(reservationData: ReservationData) {
    const { data, error } = await supabase
        .from('reservations')
        .insert([reservationData])
        .select()
        .single();

    if (error) {
        console.error('Error creating reservation:', error);
        throw error;
    }

    return data;
}

export async function getReservations() {
    const { data, error } = await supabase
        .from('reservations')
        .select('*')
        .order('reservation_date', { ascending: false });

    if (error) {
        console.error('Error fetching reservations:', error);
        return [];
    }

    return data;
}

export async function getReservationById(id: string) {
    const { data, error } = await supabase
        .from('reservations')
        .select('*')
        .eq('id', id)
        .single();

    if (error) {
        console.error('Error fetching reservation:', error);
        return null;
    }

    return data;
}
