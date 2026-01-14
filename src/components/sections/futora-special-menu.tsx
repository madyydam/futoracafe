import React from 'react';
import Image from 'next/image';

/**
 * FutoraSpecialMenu Component
 * Clones the "Sa Dosa Special" section with signature items and orbital ring treatments.
 * Features the large 6-foot Family Paper Dosa.
 */
export default function FutoraSpecialMenu() {
  const specials = [
    {
      name: "Creamy Cheesy Schezwan Dosa (CCSD)",
      description: "Spice up dosa craving with creamy cheesy schezwan dosa.",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/181cb15d-0961-460f-888f-83bfd54e1847-sadosacafe-com/assets/images/Element06-2-e1743596011462-12.png"
    },
    {
      name: "Paneer Nepolian Dosa (PND)",
      description: "Buttery dosa with stuffing of paneer, vegetables, cheese and sauces. Our take on veg grilled sandwich"
    },
    {
      name: "Peri Peri Cheese Corn Dosa (PPCCD)",
      description: "Calling all spices & cheese Lovers to Try Peri Peri Cheese Corn Dosa"
    },
    {
      name: "Pav Bhaji Dosa",
      description: ""
    }
  ];

  const bottomItems = [
    "Cheese Pav Bhaji Dosa",
    "Veg Cheese Masala Dosa",
    "Mix Veg Paneer Uttapam",
    "Nepolian Dosa",
    "Chocolate Dosa"
  ];

  return (
    <section className="bg-[#F7F1E1] py-20 overflow-hidden relative">
      <div className="container mx-auto px-5">
        
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-[48px] font-bold text-[#912222] font-heading relative inline-block pb-3 mb-8">
            Sa Dosa Special
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[140px] h-[3px] bg-[#912222]"></span>
          </h2>
        </div>

        {/* Top Specials Grid with Image */}
        <div className="flex flex-col md:flex-row items-center gap-10 mb-16 max-w-5xl mx-auto">
          
          {/* Circular Image Container with Orbital Rings */}
          <div className="relative flex-shrink-0 w-[280px] h-[280px]">
            {/* Orbital Decorative Rings */}
            <div className="absolute inset-[-10px] border border-[#EBA324]/40 rounded-full"></div>
            <div className="absolute inset-[-20px] border border-[#EBA324]/20 rounded-full"></div>
            {/* Dot Nodes on Rings */}
            <div className="absolute top-1/2 -left-[11px] w-2 h-2 bg-[#EBA324] rounded-full -translate-y-1/2"></div>
            <div className="absolute top-0 right-1/4 w-2 h-2 bg-[#EBA324] rounded-full"></div>
            
            <div className="food-circle w-full h-full relative z-10">
              <Image 
                src={specials[0].image || ""} 
                alt="Creamy Cheesy Schezwan Dosa"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Special Items List */}
          <div className="flex-grow space-y-8 text-center md:text-left">
            {specials.map((item, index) => (
              <div key={index} className="space-y-1">
                <h3 className="text-[24px] md:text-[28px] font-semibold text-[#000000] font-sans text-center md:text-left mb-0">
                  {item.name}
                </h3>
                {item.description && (
                  <p className="text-[14px] text-[#7A7A7A] font-body">
                    {item.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* The Massive 6-Foot Dosa Display */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h3 className="text-[24px] md:text-[32px] font-semibold text-[#000000] font-sans mb-2">
            Pune Metro Family Paper Dosa (Approx 6 Feet)
            <br />
            (Biggest Dosa in Pune)
          </h3>
          <p className="text-[14px] text-[#7A7A7A] font-body italic mb-8">
            Introducing Pune’s Biggest Dosa. Can you conquer?
          </p>
          
          <div className="relative w-full aspect-[4/1] md:aspect-[5/1] mt-4 mb-4">
             <Image 
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/181cb15d-0961-460f-888f-83bfd54e1847-sadosacafe-com/assets/images/Menu-Card-Updated-05_10_24_page-0012-e174359747275-13.png" 
                alt="Biggest Family Paper Dosa in Pune"
                fill
                className="object-contain"
                priority
              />
          </div>
        </div>

        {/* Bottom Menu Items */}
        <div className="text-center space-y-6 max-w-2xl mx-auto">
          {bottomItems.map((item, index) => (
            <div key={index}>
              <h3 className="text-[24px] font-semibold text-[#000000] font-sans mb-0">
                {item}
              </h3>
            </div>
          ))}
        </div>

      </div>

      {/* Background Decorative Element (Optional based on design system) */}
      <div className="absolute top-1/4 -right-20 opacity-10 pointer-events-none">
        <svg width="200" height="200" viewBox="0 0 200 200">
           <circle cx="100" cy="100" r="90" fill="none" stroke="#EBA324" strokeWidth="1" strokeDasharray="10 5" />
        </svg>
      </div>
    </section>
  );
}