-- Enable Row Level Security (RLS) on all tables
-- Create tables for the Futoracafe application

-- 1. Table: menu_categories
CREATE TABLE IF NOT EXISTS menu_categories (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    description TEXT,
    display_order INTEGER,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 2. Table: menu_items
CREATE TABLE IF NOT EXISTS menu_items (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    category_id UUID REFERENCES menu_categories(id) ON DELETE SET NULL,
    name TEXT NOT NULL,
    description TEXT,
    price DECIMAL(10, 2) NOT NULL,
    image_url TEXT,
    is_available BOOLEAN DEFAULT true,
    is_vegetarian BOOLEAN DEFAULT true,
    is_spicy BOOLEAN DEFAULT false,
    ingredients TEXT[],
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 3. Table: reservations
CREATE TABLE IF NOT EXISTS reservations (
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

-- 4. Table: orders (UPDATED TO MATCH API)
CREATE TABLE IF NOT EXISTS orders (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    customer_name TEXT NOT NULL,
    customer_email TEXT NOT NULL,
    customer_phone TEXT NOT NULL,
    order_type TEXT NOT NULL CHECK (order_type IN ('delivery', 'pickup')),
    delivery_address TEXT,
    time_slot TEXT NOT NULL,
    special_instructions TEXT,
    items JSONB NOT NULL, -- Store cart items as JSON
    subtotal DECIMAL(10, 2) NOT NULL,
    delivery_fee DECIMAL(10, 2) DEFAULT 0,
    tax DECIMAL(10, 2) NOT NULL,
    total DECIMAL(10, 2) NOT NULL,
    status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'preparing', 'ready', 'delivered', 'cancelled')),
    payment_status TEXT DEFAULT 'unpaid' CHECK (payment_status IN ('unpaid', 'paid', 'refunded')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 5. Table: reviews
CREATE TABLE IF NOT EXISTS reviews (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    customer_name TEXT NOT NULL,
    rating INTEGER CHECK (rating >= 1 AND rating <= 5),
    comment TEXT,
    is_approved BOOLEAN DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable Row Level Security (RLS)
ALTER TABLE menu_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE menu_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE reservations ENABLE ROW LEVEL SECURITY;
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE reviews ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Public Read Categories" ON menu_categories;
DROP POLICY IF EXISTS "Public Read Menu Items" ON menu_items;
DROP POLICY IF EXISTS "Public Create Reservations" ON reservations;
DROP POLICY IF EXISTS "Public Create Orders" ON orders;
DROP POLICY IF EXISTS "Public Read Reviews" ON reviews;
DROP POLICY IF EXISTS "Public Create Reviews" ON reviews;

-- Policies (Public Read Access / Admin Write Access)
-- Menu Categories: Public Read
CREATE POLICY "Public Read Categories" ON menu_categories FOR SELECT USING (true);

-- Menu Items: Public Read
CREATE POLICY "Public Read Menu Items" ON menu_items FOR SELECT USING (true);

-- Reservations: Public Insert
CREATE POLICY "Public Create Reservations" ON reservations FOR INSERT WITH CHECK (true);

-- Orders: Public Insert
CREATE POLICY "Public Create Orders" ON orders FOR INSERT WITH CHECK (true);

-- Reviews: Public Read, Public Insert
CREATE POLICY "Public Read Reviews" ON reviews FOR SELECT USING (is_approved = true);
CREATE POLICY "Public Create Reviews" ON reviews FOR INSERT WITH CHECK (true);
