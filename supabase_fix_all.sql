-- Complete Migration: Fix Orders and Reservations Tables
-- This will drop and recreate both tables with correct schemas

-- ============================================
-- 1. FIX RESERVATIONS TABLE
-- ============================================

-- Drop existing reservations table
DROP TABLE IF EXISTS reservations CASCADE;

-- Recreate with correct schema
CREATE TABLE reservations (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    customer_name TEXT NOT NULL,
    customer_email TEXT,
    customer_phone TEXT NOT NULL,
    reservation_date DATE NOT NULL,
    reservation_time TIME NOT NULL,
    number_of_guests INTEGER NOT NULL,
    occasion TEXT,
    status TEXT DEFAULT 'confirmed' CHECK (status IN ('pending', 'confirmed', 'cancelled', 'completed')),
    special_requests TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable RLS
ALTER TABLE reservations ENABLE ROW LEVEL SECURITY;

-- Create policy
CREATE POLICY "Public Create Reservations" ON reservations FOR INSERT WITH CHECK (true);
CREATE POLICY "Public Read Reservations" ON reservations FOR SELECT USING (true);

-- ============================================
-- 2. FIX ORDERS TABLE  
-- ============================================

-- Drop existing orders table
DROP TABLE IF EXISTS orders CASCADE;

-- Recreate with correct schema
CREATE TABLE orders (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    customer_name TEXT NOT NULL,
    customer_email TEXT NOT NULL,
    customer_phone TEXT NOT NULL,
    order_type TEXT NOT NULL CHECK (order_type IN ('delivery', 'pickup')),
    delivery_address TEXT,
    time_slot TEXT NOT NULL,
    special_instructions TEXT,
    items JSONB NOT NULL,
    subtotal DECIMAL(10, 2) NOT NULL,
    delivery_fee DECIMAL(10, 2) DEFAULT 0,
    tax DECIMAL(10, 2) NOT NULL,
    total DECIMAL(10, 2) NOT NULL,
    status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'preparing', 'ready', 'delivered', 'cancelled')),
    payment_status TEXT DEFAULT 'unpaid' CHECK (payment_status IN ('unpaid', 'paid', 'refunded')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable RLS
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;

-- Create policy
CREATE POLICY "Public Create Orders" ON orders FOR INSERT WITH CHECK (true);
CREATE POLICY "Public Read Orders" ON orders FOR SELECT USING (true);

-- Done! Now try creating a reservation or order.
