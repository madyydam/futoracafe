import React from 'react';
import Image from 'next/image';

/**
 * NamasteAnnaSection Component
 * 
 * Clones the "Namaste Anna™" section from SaDosaCafe.
 * Features:
 * - Traditional South Indian items listed in two columns.
 * - Circular dish images placed vertically in the center with decorative rings.
 * - Connective vertical line between images.
 * - Precise typography and spacing as per design guidelines.
 */
const NamasteAnnaSection: React.FC = () => {
  // Assets provided for this section
  const assets = {
    dish1: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/181cb15d-0961-460f-888f-83bfd54e1847-sadosacafe-com/assets/images/Menu-Card-Updated-05_10_24_page-0005-e174357967292-6.png", // Uttappam/Mixed dish
    dish2: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/181cb15d-0961-460f-888f-83bfd54e1847-sadosacafe-com/assets/images/Menu-Card-Updated-05_10_24_page-0006-e174358187310-21.png" // Dosa dish
  };

  const leftColumnItems = [
    "Idli Chutney Sambar",
    "Medu Vada",
    "Idli Medu Vada Mix",
    "Sada Dosa",
    "Masala Dosa",
    "Cut Dosa",
    "Onion Uttappam"
  ];

  const rightColumnItems = [
    "Onion Tomato Uttappam",
    "Mysore Masala Dosa",
    "Butter Garlic Mysore Masala Dosa",
    "Onion Rava Dosa",
    "Onion Rava Masala Dosa",
    "Ghee Roast Podi Utappam"
  ];

  return (
    <section className="py-20 bg-[#F6F1DC] overflow-hidden">
      <div className="container mx-auto px-4 max-w-[1200px]">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="section-category text-[#8F221B] font-heading font-bold relative inline-block">
            Namaste Anna™
          </h2>
        </div>

        {/* Menu Layout */}
        <div className="relative grid grid-cols-1 md:grid-cols-11 items-start gap-8 lg:gap-0">
          
          {/* Left Column Items */}
          <div className="md:col-span-4 flex flex-col items-center md:items-end space-y-8 md:space-y-12">
            {leftColumnItems.map((item, index) => (
              <div key={index} className="text-center md:text-right">
                <h3 className="text-[24px] md:text-[32px] font-semibold font-sans text-black leading-tight max-w-[280px]">
                  {item}
                </h3>
              </div>
            ))}
          </div>

          {/* Central Visual Column */}
          <div className="md:col-span-3 flex flex-col items-center justify-start relative pt-10 min-h-[600px]">
            {/* Connecting Line */}
            <div className="absolute top-[160px] bottom-[100px] w-1 bg-[#2C5F2D] left-1/2 -translate-x-1/2 z-0 opacity-40 hidden md:block" />

            {/* Top Dish Image */}
            <div className="relative z-10 mb-20">
              <div className="dish-ring w-[180px] h-[180px] md:w-[220px] md:h-[220px] bg-white overflow-hidden shadow-lg border-[#8F221B] border-2 relative">
                {/* Secondary inner ring effect via before/after in globals.css dish-ring class */}
                <div className="relative w-full h-full rounded-full overflow-hidden">
                  <Image 
                    src={assets.dish1} 
                    alt="Traditional South Indian Dish"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-full"
                  />
                </div>
              </div>
              {/* Green connection dots */}
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#2C5F2D] rounded-full z-20" />
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#2C5F2D] rounded-full z-20" />
            </div>

            {/* Bottom Dish Image */}
            <div className="relative z-10">
              <div className="dish-ring w-[180px] h-[180px] md:w-[220px] md:h-[220px] bg-white overflow-hidden shadow-lg border-[#2C5F2D] border-2 relative ring-offset-4 ring-[#EB6D48]">
                <div className="relative w-full h-full rounded-full overflow-hidden">
                  <Image 
                    src={assets.dish2} 
                    alt="Crispy Masala Dosa"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-full"
                  />
                </div>
              </div>
              {/* Green connection dots */}
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#2C5F2D] rounded-full z-20" />
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#2C5F2D] rounded-full z-20" />
            </div>
          </div>

          {/* Right Column Items */}
          <div className="md:col-span-4 flex flex-col items-center md:items-start space-y-8 md:space-y-12">
            {rightColumnItems.map((item, index) => (
              <div key={index} className="text-center md:text-left">
                <h3 className="text-[24px] md:text-[32px] font-semibold font-sans text-black leading-tight max-w-[280px]">
                  {item}
                </h3>
              </div>
            ))}
          </div>

        </div>
      </div>

      <style jsx global>{`
        /* Section Title Underline Override if needed specifically for this layout */
        .section-category::after {
          content: '';
          display: block;
          width: 150px;
          height: 4px;
          background-color: #8F221B;
          margin: 12px auto 0;
        }

        /* Specific Dish Ring Styling for Namaste Anna Section */
        .dish-ring {
            border-radius: 9999px;
            padding: 8px;
            position: relative;
            background-color: transparent;
        }

        /* The double border effect described in visual treatments */
        .dish-ring::before {
            content: '';
            position: absolute;
            inset: -6px;
            border: 2px solid #2C5F2D;
            border-radius: 9999px;
            z-index: -1;
        }
      `}</style>
    </section>
  );
};

export default NamasteAnnaSection;