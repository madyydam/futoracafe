-- Seed Data for Futoracafe

-- Ensure categories exist (using ON CONFLICT if ID was specified, but here we rely on names)
-- First clean up to avoid duplicates if re-run (optional, be careful in prod)
-- TRUNCATE menu_items, menu_categories RESTART IDENTITY CASCADE;

-- Insert Categories if they don't exist (This is a bit tricky in pure SQL without functions, 
-- so let's just insert assuming fresh DB or ignore errors)

INSERT INTO menu_categories (name, display_order, description) VALUES 
('Coffee', 1, 'Artisan brews to kickstart your day'),
('Tea & Beverages', 2, 'Refreshing coolers and calming teas'),
('Breakfast', 3, 'Wholesome start to the morning'),
('Sandwiches', 4, 'Grilled perfection between breads'),
('Desserts', 5, 'Sweet endings')
ON CONFLICT DO NOTHING;

-- We need to get IDs to insert items. Since we can't easily capture IDs in a simple script cross-platform,
-- we will use a DO block or subqueries. Simple subqueries work best.

INSERT INTO menu_items (category_id, name, description, price, is_vegetarian, is_spicy, image_url, ingredients) VALUES
-- Coffee
((SELECT id FROM menu_categories WHERE name = 'Coffee' LIMIT 1), 'Signature Cold Brew', 'Slow-steeped for 18 hours, served over clear ice.', 250.00, true, false, 'https://images.unsplash.com/photo-1517701604599-bb29b5c7fa53?w=800&q=80', ARRAY['Arabica Beans', 'Water', 'Ice']),
((SELECT id FROM menu_categories WHERE name = 'Coffee' LIMIT 1), 'Hazelnut Praline Mocha', 'Rich chocolate meets roasted hazelnut goodness.', 280.00, true, false, 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=800&q=80', ARRAY['Espresso', 'Chocolate', 'Hazelnut Syrup', 'Milk']),
((SELECT id FROM menu_categories WHERE name = 'Coffee' LIMIT 1), 'Nitro Cold Brew', 'Infused with nitrogen for a silky, stout-like head.', 300.00, true, false, 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?w=800&q=80', ARRAY['Coffee', 'Nitrogen']),
((SELECT id FROM menu_categories WHERE name = 'Coffee' LIMIT 1), 'Golden Turmeric Latte', 'Creamy coconut milk with fresh turmeric and honey.', 220.00, true, false, 'https://images.unsplash.com/photo-1515442261605-65987783cb6a?w=800&q=80', ARRAY['Turmeric', 'Coconut Milk', 'Honey', 'Black Pepper']),

-- Breakfast
((SELECT id FROM menu_categories WHERE name = 'Breakfast' LIMIT 1), 'Avocado Toast Deluxe', 'Smashed avocado on sourdough with seeds and microgreens.', 350.00, true, true, 'https://images.unsplash.com/photo-1588137372308-15f75323a51d?w=800&q=80', ARRAY['Sourdough', 'Avocado', 'Chilli Flakes', 'Pumpkin Seeds']),
((SELECT id FROM menu_categories WHERE name = 'Breakfast' LIMIT 1), 'Classic Croissant', 'Buttery, flaky, and baked fresh daily.', 180.00, true, false, 'https://images.unsplash.com/photo-1555507036-ab1f40388085?w=800&q=80', ARRAY['Flour', 'Butter', 'Yeast']),
((SELECT id FROM menu_categories WHERE name = 'Breakfast' LIMIT 1), 'Greek Yogurt Parfait', 'Layered Greek yogurt with granola, fresh berries, and honey.', 240.00, true, false, 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=800&q=80', ARRAY['Greek Yogurt', 'Granola', 'Berries', 'Honey']),

-- Sandwiches
((SELECT id FROM menu_categories WHERE name = 'Sandwiches' LIMIT 1), 'Caprese Sandwich', 'Fresh mozzarella, tomatoes, and basil pesto on ciabatta.', 290.00, true, false, 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=800&q=80', ARRAY['Ciabatta', 'Mozzarella', 'Tomato', 'Basil']),
((SELECT id FROM menu_categories WHERE name = 'Sandwiches' LIMIT 1), 'Spicy Paneer Wrap', 'Grilled paneer with spicy mayo and crunchy veggies.', 260.00, true, true, 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=800&q=80', ARRAY['Tortilla', 'Paneer', 'Spicy Mayo', 'Lettuce']),

-- Beverages
((SELECT id FROM menu_categories WHERE name = 'Tea & Beverages' LIMIT 1), 'Classic Lemonade', 'Freshly squeezed lemons with mint and a hint of sweetness.', 150.00, true, false, 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=800&q=80', ARRAY['Lemon', 'Mint', 'Sugar', 'Soda']),
((SELECT id FROM menu_categories WHERE name = 'Tea & Beverages' LIMIT 1), 'Berry Blast Smoothie', 'Mixed berries blended with yogurt.', 280.00, true, false, 'https://images.unsplash.com/photo-1623594040989-1361c4709cc8?w=800&q=80', ARRAY['Strawberry', 'Blueberry', 'Yogurt']),

-- Desserts
((SELECT id FROM menu_categories WHERE name = 'Desserts' LIMIT 1), 'New York Cheesecake', 'Creamy, velvety cheesecake with berry compote.', 320.00, true, false, 'https://images.unsplash.com/photo-1524351199678-941a58a3df50?w=800&q=80', ARRAY['Cream Cheese', 'Graham Cracker', 'Berries']),
((SELECT id FROM menu_categories WHERE name = 'Desserts' LIMIT 1), 'Belgian Chocolate Brownie', 'Fudgy brownie with walnuts.', 200.00, true, false, 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=800&q=80', ARRAY['Chocolate', 'Walnuts', 'Flour', 'Butter']);
