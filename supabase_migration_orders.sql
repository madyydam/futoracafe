-- Migration Script: Update existing orders table to new schema
-- Run this if you already have the orders table

-- Drop the old orders table if it exists (WARNING: This will delete all existing orders)
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
