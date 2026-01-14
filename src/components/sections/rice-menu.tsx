import React from 'react';

/**
 * RiceMenu Component
 * 
 * A pixel-perfect clone of the "Rice Menu" section.
 * Features:
 * - Cream background (#FDF5E1)
 * - Lobster font for section heading
 * - Poppins for item titles, Questrial for descriptions
 * - Zigzag patterned divider at the bottom
 */

const riceMenuItems = [
  {
    title: "Ghee Podi Rice",
    description: "Made with flavourful rice sauté in Ghee tadka and Podi masala, topped with peanuts"
  },
  {
    title: "Curd Rice",
    description: "Made with flavourful rice, Curd, Ghee, herbs & tempering spices, topped with roasted chana."
  },
  {
    title: "Sambar Rice",
    description: "Made with flavourful rice and sambar cooked together in ghee tadka."
  },
  {
    title: "Lemon Rice",
    description: "Zesty lemon rice with mustard seeds, curry leaves, and roasted peanuts, bursting with flavor."
  }
];

const RiceMenu: React.FC = () => {
  return (
    <section className="bg-[#FDF5E1] pt-[80px] pb-0 relative overflow-hidden">
      <div className="container mx-auto px-[15px] max-w-[1140px]">
        {/* Section Heading */}
        <div className="text-center mb-[40px]">
          <h2 className="font-heading text-[55px] text-[#BF2026] relative inline-block mb-[40px] after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 after:-translate-x-1/2 after:w-[120px] after:height-[3px] after:bg-[#BF2026]">
            Rice Menu
          </h2>
        </div>

        {/* Menu Items List */}
        <div className="flex flex-col gap-[30px] max-w-[800px] mx-auto md:ml-[160px] lg:ml-[200px]">
          {riceMenuItems.map((item, index) => (
            <div key={index} className="flex flex-col items-start text-left">
              <h3 className="font-sans text-[22px] font-semibold text-black mb-[8px]">
                {item.title}
              </h3>
              <p className="font-body text-[15px] text-[#666666] leading-[1.6]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Spacing before divider */}
      <div className="h-[80px]"></div>

      {/* Zigzag Bottom Divider */}
      <div className="w-full h-[30px] relative overflow-hidden">
        <div 
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, #F39200 0px, #F39200 10px, transparent 10px, transparent 20px), 
                              repeating-linear-gradient(-45deg, #F39200 0px, #F39200 10px, transparent 10px, transparent 20px)`,
            backgroundSize: '40px 40px',
            backgroundPosition: '0 -20px'
          }}
        ></div>
        {/* Fallback to simple orange strip if complex pattern is not desired, 
            but the design instruction explicitly mentions the zigzag pattern found in the bottom screenshot. 
            The actual asset seems to be a complex repeating SVG pattern of half-circles/zigzags in orange/brown.
        */}
        <div className="absolute inset-x-0 bottom-0 h-[12px] bg-repeat-x" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 20' width='40' height='20'%3E%3Cpath d='M0,20 L10,10 L20,20 L30,10 L40,20' fill='none' stroke='%23F39200' stroke-width='4'/%3E%3C/svg%3E")`,
          backgroundSize: '40px 12px'
        }}></div>
      </div>
      
      {/* Decorative footer strip as seen in visuals */}
      <div className="w-full h-[15px] bg-[#F39200] opacity-90">
        <div className="w-full h-full" style={{
          backgroundImage: `repeating-linear-gradient(90deg, transparent, transparent 20px, rgba(191, 32, 38, 0.2) 20px, rgba(191, 32, 38, 0.2) 40px)`
        }}></div>
      </div>
    </section>
  );
};

export default RiceMenu;