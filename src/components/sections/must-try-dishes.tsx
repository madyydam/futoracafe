import React from 'react';
import Image from 'next/image';

/**
 * MustTryDishes Component
 * 
 * Features a zigzag layout of circular dish images with colored circular borders
 * and stylized text labels for featured items.
 */

const dishItems = [
  {
    name: "Pav Bhaji",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/181cb15d-0961-460f-888f-83bfd54e1847-sadosacafe-com/assets/images/Menu_Card_Final-removebg-e1743474049285-3.png",
    alignment: "left",
    ringColor: "#8F221B", // Primary Red
    secondaryRing: "#2C5F2D", // Accent Green
  },
  {
    name: "Cheese Burst Paneer Tandoori Pizza Dosa",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/181cb15d-0961-460f-888f-83bfd54e1847-sadosacafe-com/assets/images/Menu_Card_Updated_05_10_24_page-0004-removebg-prev-4.png",
    alignment: "right",
    ringColor: "#EAB231", // Secondary Yellow
    secondaryRing: "#EB6D48", // Accent Orange
  },
  {
    name: "Creamy Cheesy Schezwan Dosa",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/181cb15d-0961-460f-888f-83bfd54e1847-sadosacafe-com/assets/images/Menu__Updated_05_10_24_page-0004-removebg-preview--5.png",
    alignment: "left",
    ringColor: "#8F221B", 
    secondaryRing: "#EAB231",
  },
  {
    name: "Sambar Rice",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/181cb15d-0961-460f-888f-83bfd54e1847-sadosacafe-com/assets/images/Menu-Card-Updated-05_10_24_page-0005-e174357967292-6.png",
    alignment: "right",
    ringColor: "#2C5F2D",
    secondaryRing: "#EAB231",
  },
  {
    name: "Mysore Masala Dosa",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/181cb15d-0961-460f-888f-83bfd54e1847-sadosacafe-com/assets/images/Menu-Card-Updated-05_10_24_page-0005-1-e1743579723-7.png",
    alignment: "left",
    ringColor: "#2C5F2D",
    secondaryRing: "#8F221B",
  },
  {
    name: "Dry Fruit Mango Shake",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/181cb15d-0961-460f-888f-83bfd54e1847-sadosacafe-com/assets/images/Menu-Card-Updated-05_10_24_page-0005-1-e1743579723-7.png", // Fallback to relevant asset
    alignment: "right",
    ringColor: "#EB6D48",
    secondaryRing: "#EAB231",
  },
  {
    name: "Ernakulam Podi Idli",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/181cb15d-0961-460f-888f-83bfd54e1847-sadosacafe-com/assets/images/Menu_Card_Final-removebg-e1743474049285-3.png", // Fallback
    alignment: "left",
    ringColor: "#2C5F2D",
    secondaryRing: "#EAB231",
  },
  {
    name: "Ghee Roast Podi Utappam",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/181cb15d-0961-460f-888f-83bfd54e1847-sadosacafe-com/assets/images/Menu-Card-Updated-05_10_24_page-0005-e174357967292-6.png", // Fallback
    alignment: "right",
    ringColor: "#8F221B",
    secondaryRing: "#2C5F2D",
  }
];

export default function MustTryDishes() {
  return (
    <section className="py-20 bg-[#F6F1DC] overflow-hidden" id="must-try-dishes">
      <div className="container mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center mb-16 relative">
          <h2 className="font-heading text-[32px] md:text-[64px] font-bold text-[#8F221B] leading-tight mb-2">
            Must Try Dishes
          </h2>
          <div className="w-[120px] h-[4px] bg-[#8F221B] mx-auto"></div>
        </div>

        {/* Zigzag Layout of Dishes */}
        <div className="max-w-4xl mx-auto space-y-[-20px] md:space-y-[-40px]">
          {dishItems.map((item, index) => (
            <div 
              key={index}
              className={`flex flex-col md:flex-row items-center gap-8 md:gap-12 relative z-[${10 - index}] ${
                item.alignment === 'right' ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Dish Image Container with Multi-Border Rings */}
              <div 
                className="relative flex-shrink-0 animate-in fade-in duration-700"
                style={{
                  transitionDelay: `${index * 150}ms`
                }}
              >
                {/* Secondary Outer Ring */}
                <div 
                  className="rounded-full p-2 border-2"
                  style={{ borderColor: item.secondaryRing }}
                >
                  {/* Primary Inner Ring */}
                  <div 
                    className="rounded-full p-2 border-2"
                    style={{ borderColor: item.ringColor }}
                  >
                    <div className="relative w-[200px] h-[200px] md:w-[280px] md:h-[280px] rounded-full overflow-hidden bg-white/5 shadow-xl">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 200px, 280px"
                      />
                    </div>
                  </div>
                </div>

                {/* Decorative Dotted Connector Line (Subtle Visual Aid) */}
                <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 h-[2px] w-24 bg-dotted-pattern pointer-events-none opacity-20 ${
                  item.alignment === 'left' ? 'left-full ml-4' : 'right-full mr-4'
                }`}></div>
              </div>

              {/* Text Label */}
              <div 
                className={`max-w-[300px] text-center md:text-left ${
                  item.alignment === 'right' ? 'md:text-right' : ''
                }`}
              >
                <h3 className="font-heading text-[24px] md:text-[36px] font-bold text-[#8F221B] leading-[1.1]">
                  {item.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Embedded Wavy Divider Support (From CSS Guidelines) */}
      <style jsx global>{`
        .bg-dotted-pattern {
          background-image: radial-gradient(#8F221B 1px, transparent 1px);
          background-size: 8px 8px;
        }
      `}</style>
    </section>
  );
}

/**
 * Styling Notes based on Computed Styles & Design Specs:
 * - Font: Amita (Heading), Poppins (Item names - though here we use Amita to match the "stylized text" requirement)
 * - Colors: #8F221B (Red), #EAB231 (Yellow), #2C5F2D (Green), #EB6D48 (Orange)
 * - Background: #F6F1DC (Warm Ivory)
 * - Layout: Zigzag effect achieved via flex-row-reverse and negative margins for overlapping feel
 * - Visual Effects: Double bordered rings around images
 */