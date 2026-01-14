"use client";

import React from 'react';
import Image from 'next/image';

const StartersAndBeverages = () => {
  const starters = [
    {
      name: "Ernakulam Podi Idli",
      description: "Spice up dosa craving Button Idli tossed in ghee and our homemade podi masala. Served with coconut chutney and sambar.",
    },
    { name: "Cheese Nachos", description: "" },
    { name: "French Fries - Salted", description: "" },
    { name: "Batata Vada Shots - (6pcs)", description: "" },
    { name: "Hara Bhara Kabab (6pcs)", description: "" },
    { name: "Peri Peri French Fries - Cheese Dip", description: "" },
    { name: "Butter Garlic Nylon Dosa", description: "" },
  ];

  const beverages = [
    { name: "Tea" },
    { name: "Hot Coffee" },
    { name: "Filter Coffee" },
    { name: "Cold Coffee" },
    { name: "Thick Cold Coffee" },
    {
      name: "Thick Cold Coffee With Crush",
      description: "Cold, refreshing, and thick, topped with chocolate chunks. So thick you might need a spoon to finish.",
    },
  ];

  const moreBeverages = [
    {
      name: "Dry Fruit Mango Shake",
      description: "This thick shake, topped with roasted almonds, offers a perfect crunchy texture in a velvety smooth blend.",
    },
    { name: "Thick Chocolate Shake With Crush" },
    { name: "Masala Pineapple" },
    { name: "Spicy Guava" },
    { name: "Strawberry Shake" },
    {
      name: "Virgin Mojito W/o Soda",
      description: "Sweet, citrusy, minty taste with chilled water.",
    },
  ];

  return (
    <section className="bg-[#F6F1DC] py-[80px] lg:py-[100px] overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Starters Section */}
        <div className="mb-20">
          <div className="flex flex-col items-center mb-12">
            <h2 className="section-category text-[#8F221B] font-heading text-[32px] md:text-[48px] lg:text-[64px] font-bold leading-tight relative inline-block text-center w-full mb-8">
              Starters
            </h2>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Left Image - Podi Idli */}
            <div className="relative w-[300px] h-[300px] shrink-0">
              <div className="dish-ring w-full h-full p-[10px] border-2 border-[#8F221B] rounded-full relative">
                <div className="absolute inset-[-8px] border-2 border-[#2C5F2D] rounded-full"></div>
                <div className="w-full h-full rounded-full overflow-hidden relative">
                  <Image
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/181cb15d-0961-460f-888f-83bfd54e1847-sadosacafe-com/assets/images/Menu-Card-Updated-05_10_24_page-0012-e174359747275-13.png"
                    alt="Ernakulam Podi Idli"
                    fill
                    className="object-cover"
                  />
                  {/* Decorative dots to match the original layout UI */}
                  <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-3 h-3 bg-[#EAB231] rounded-full"></div>
                  <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-3 h-3 bg-[#EB6D48] rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Starter Menu List */}
            <div className="flex-1 text-center">
              {starters.map((item, index) => (
                <div key={index} className="mb-6">
                  <h3 className="item-name text-[#000000] font-sans text-[18px] md:text-[24px] lg:text-[32px] font-semibold mb-2">
                    {item.name}
                  </h3>
                  {item.description && (
                    <p className="item-description text-[#666666] font-sans text-[14px] md:text-[16px] leading-relaxed max-w-2xl mx-auto">
                      {item.description}
                    </p>
                  )}
                </div>
              ))}
            </div>

            {/* Right Image - Fries/Snacks */}
            <div className="relative w-[300px] h-[300px] shrink-0">
              <div className="dish-ring w-full h-full p-[10px] border-2 border-[#EAB231] rounded-full relative">
                <div className="absolute inset-[-8px] border-2 border-[#EB6D48] rounded-full"></div>
                <div className="w-full h-full rounded-full overflow-hidden">
                  <Image
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/181cb15d-0961-460f-888f-83bfd54e1847-sadosacafe-com/assets/images/20240427_110157649_iOS-scaled-removebg-preview-e17-8.png"
                    alt="Starters Sampler"
                    fill
                    className="object-cover"
                  />
                  {/* Decorative dots */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#2C5F2D] rounded-full"></div>
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#8F221B] rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Beverages Section */}
        <div className="pt-20">
          <div className="flex flex-col items-center mb-12">
            <h2 className="section-category text-[#8F221B] font-heading text-[32px] md:text-[48px] lg:text-[64px] font-bold leading-tight relative inline-block text-center w-full mb-8">
              Beverages
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
            {/* Left Content Image - Mango Shake with splashes */}
            <div className="md:col-span-5 relative flex flex-col items-center">
              <div className="relative w-full max-w-[400px] h-[500px]">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/181cb15d-0961-460f-888f-83bfd54e1847-sadosacafe-com/assets/images/fresh-mango-slice-green-leaves-juice-splashes-real-20.png"
                  alt="Dry Fruit Mango Shake"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>

            {/* Right Content - Beverage List */}
            <div className="md:col-span-7 space-y-8">
              {/* Beverage Group 1 */}
              <div className="space-y-4">
                {beverages.map((item, index) => (
                  <div key={index}>
                    <h3 className="item-name text-[#000000] font-sans text-[20px] md:text-[32px] font-semibold">
                      {item.name}
                    </h3>
                    {item.description && (
                      <p className="item-description text-[#666666] font-sans text-[14px] md:text-[16px] max-w-lg mt-1">
                        {item.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>

              {/* Speciality Items and Insets */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  {moreBeverages.map((item, index) => (
                    <div key={index}>
                      <h3 className="item-name text-[#000000] font-sans text-[20px] md:text-[32px] font-semibold">
                        {item.name}
                      </h3>
                      {item.description && (
                        <p className="item-description text-[#666666] font-sans text-[14px] md:text-[16px] max-w-sm mt-1">
                          {item.description}
                        </p>
                      )}
                    </div>
                  ))}
                </div>

                {/* Small Inset Images */}
                <div className="flex flex-col gap-12 items-center lg:items-end pr-8">
                  {/* Cold Coffee Inset */}
                  <div className="relative w-[150px] h-[150px]">
                    <div className="dish-ring w-full h-full p-[6px] border-2 border-[#EAB231] rounded-full relative">
                      <div className="absolute inset-[-6px] border border-[#8F221B] rounded-full"></div>
                      <div className="w-full h-full rounded-full overflow-hidden relative">
                        <Image
                          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/181cb15d-0961-460f-888f-83bfd54e1847-sadosacafe-com/assets/images/Menu-Card-Updated-05_10_24_page-0012-e174359747275-13.png"
                          alt="Cold Coffee"
                          fill
                          className="object-cover grayscale-[0.3]"
                        />
                        <div className="absolute top-0 right-0 w-2 h-2 bg-[#EB6D48] rounded-full"></div>
                      </div>
                    </div>
                  </div>

                  {/* Virgin Mojito Inset */}
                  <div className="relative w-[150px] h-[150px]">
                    <div className="dish-ring w-full h-full p-[6px] border-2 border-[#EAB231] rounded-full relative shadow-lg">
                      <div className="absolute inset-[-6px] border border-[#2C5F2D] rounded-full"></div>
                      <div className="w-full h-full rounded-full overflow-hidden bg-white/20 relative">
                        <div className="flex items-center justify-center w-full h-full bg-[#2C5F2D]/10">
                          <Image
                            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/181cb15d-0961-460f-888f-83bfd54e1847-sadosacafe-com/assets/images/fresh-mango-slice-green-leaves-juice-splashes-real-20.png"
                            alt="Virgin Mojito"
                            fill
                            className="object-contain p-2"
                          />
                        </div>
                        <div className="absolute bottom-0 right-4 w-2 h-2 bg-[#EAB231] rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StartersAndBeverages;