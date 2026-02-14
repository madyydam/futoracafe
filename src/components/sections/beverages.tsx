import React from 'react';
import Image from 'next/image';

const Beverages = () => {
  return (
    <section className="relative w-full py-[80px] bg-[#FDF5E1] overflow-hidden">
      <div className="container mx-auto max-w-[1140px] px-[15px]">
        {/* Section Heading */}
        <div className="text-center mb-10">
          <h2 className="font-heading text-[55px] text-[#BF2026] relative inline-block after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 after:-translate-x-1/2 after:w-[120px] after:height-[3px] after:bg-[#BF2026]">
            Beverages
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Left Column: List and Large Images */}
          <div className="relative">
            {/* Top Beverage List */}
            <div className="flex flex-col items-center md:items-end text-center md:text-right space-y-4 mb-12 mr-0 md:mr-10">
              <h3 className="font-sans text-[22px] font-semibold text-black">Tea</h3>
              <h3 className="font-sans text-[22px] font-semibold text-black">Hot Coffee</h3>
              <h3 className="font-sans text-[22px] font-semibold text-black">Filter Coffee</h3>
              <h3 className="font-sans text-[22px] font-semibold text-black">Cold Coffee</h3>
              <h3 className="font-sans text-[22px] font-semibold text-black">Thick Cold Coffee</h3>
              
              <div className="max-w-[320px]">
                <h3 className="font-sans text-[22px] font-semibold text-black mb-1">Thick Cold Coffee With Crush</h3>
                <p className="font-body text-[15px] text-[#666666] leading-relaxed">
                  Cold, refreshing, and thick, topped with chocolate chunks. So thick you might need a spoon to finish.
                </p>
              </div>
            </div>

            {/* Featured Shake Image (Dry Fruit Mango Shake) */}
            <div className="relative mt-8 md:mt-20 flex justify-center md:justify-start">
              <div className="relative w-[300px] h-[400px]">
                {/* Mango Slice illustration */}
                <div className="absolute top-[-40px] left-[-60px] z-10 w-[220px] h-[220px]">
                  <Image 
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/181cb15d-0961-460f-888f-83bfd54e1847-sadosacafe-com/assets/images/fresh-mango-slice-green-leaves-juice-splashes-real-20.png"
                    alt="Fresh Mango"
                    width={220}
                    height={220}
                    className="object-contain"
                  />
                </div>
                {/* Main Shake Cutout */}
                <Image 
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/181cb15d-0961-460f-888f-83bfd54e1847-sadosacafe-com/assets/images/Menu-Card-Updated-05_10_24_page-0006-e174358187310-21.png"
                  alt="Thick Mango Shake"
                  width={300}
                  height={400}
                  className="object-contain relative z-20"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Descriptions and Circular Items */}
          <div className="relative flex flex-col items-center md:items-start space-y-12">
            
            {/* Dry Fruit Mango Shake Description */}
            <div className="max-w-[400px] text-center md:text-left">
              <h3 className="font-sans text-[22px] font-semibold text-black mb-2">Dry Fruit Mango Shake</h3>
              <p className="font-body text-[15px] text-[#666666] leading-relaxed">
                This thick shake, topped with roasted almonds, offers a perfect crunchy texture in a velvety smooth blend. Cold, refreshing, and thick, topped with chocolate chunks.
              </p>
            </div>

            {/* Thick Chocolate Shake With Crush Section */}
            <div className="flex flex-col items-center md:items-start gap-6">
              <div className="flex flex-col md:flex-row items-center gap-6">
                 <h3 className="font-sans text-[22px] font-semibold text-black">Thick Chocolate Shake With Crush</h3>
                 <div className="w-[120px] h-[120px] rounded-full border-2 border-[#F39200] overflow-hidden p-1 bg-white">
                    <div className="w-full h-full rounded-full overflow-hidden relative border-2 border-[#BF2026]">
                      <Image 
                        src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/181cb15d-0961-460f-888f-83bfd54e1847-sadosacafe-com/assets/images/re-e1743845545465-22.png"
                        alt="Chocolate Shake"
                        fill
                        className="object-cover"
                      />
                    </div>
                 </div>
              </div>
            </div>

            {/* Vertical List for more items */}
            <div className="flex flex-col items-center md:items-start space-y-4">
              <h3 className="font-sans text-[22px] font-semibold text-black">Masala Pineapple</h3>
              <h3 className="font-sans text-[22px] font-semibold text-black">Spicy Guava</h3>
              <h3 className="font-sans text-[22px] font-semibold text-black">Strawberry Shake</h3>
            </div>

            {/* Virgin Mojito with Circular Image */}
            <div className="flex flex-col items-center md:items-start gap-4">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="flex flex-col text-center md:text-left max-w-[300px]">
                  <h3 className="font-sans text-[22px] font-semibold text-black">Virgin Mojito W/o Soda</h3>
                  <p className="font-body text-[15px] text-[#666666]">
                    Sweet, citrusy, minty taste with chilled water.
                  </p>
                </div>
                <div className="w-[100px] h-[100px] rounded-full border-2 border-[#006837] overflow-hidden p-1 bg-white">
                  <div className="w-full h-full rounded-full overflow-hidden relative border-2 border-[#F39200]">
                    {/* Fallback pattern for mojito if asset is specific to current selection */}
                    <Image 
                      src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/181cb15d-0961-460f-888f-83bfd54e1847-sadosacafe-com/assets/images/re-e1743845545465-22.png" 
                      alt="Virgin Mojito"
                      fill
                      className="object-cover grayscale sepia hue-rotate-[90deg]" // Visual adjustment to match mojito green vibe if using same shake placeholder
                    />
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

export default Beverages;