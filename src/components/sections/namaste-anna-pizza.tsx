"use client";

import React from 'react';
import Image from 'next/image';

const NamasteAnnaPizzaSection = () => {
  const assets = [
    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/181cb15d-0961-460f-888f-83bfd54e1847-sadosacafe-com/assets/images/Menu-Card-Upda0013-e1734334606683-16.png",
    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/181cb15d-0961-460f-888f-83bfd54e1847-sadosacafe-com/assets/images/Menu-Card-05_10_24_page-0014-e1742622061410-17.png"
  ];

  return (
    <section className="bg-[#F7F1E1] py-20 overflow-hidden">
      {/* Namaste Anna Section */}
      <div className="container mx-auto max-w-[1200px] px-5">
        <h2 className="font-heading text-[48px] font-bold text-[#912222] text-center relative pb-3 mb-16 mx-auto w-fit after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-[140px] after:height-[3px] after:bg-[#912222]">
          Namaste Anna&trade;
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20">
          {/* Left Column Items */}
          <div className="flex flex-col items-center md:items-end text-center md:text-right gap-6 flex-1 order-2 md:order-1">
            <div className="space-y-1">
              <h4 className="font-sans text-2xl font-semibold text-black">Idli Chutney Sambar</h4>
            </div>
            <div className="space-y-1">
              <h4 className="font-sans text-2xl font-semibold text-black">Medu Vada</h4>
            </div>
            <div className="space-y-1">
              <h4 className="font-sans text-2xl font-semibold text-black">Idli Medu Vada Mix</h4>
            </div>
            <div className="space-y-1">
              <h4 className="font-sans text-2xl font-semibold text-black">Sada Dosa</h4>
            </div>
            <div className="space-y-1">
              <h4 className="font-sans text-2xl font-semibold text-black">Masala Dosa</h4>
            </div>
            <div className="space-y-1">
              <h4 className="font-sans text-2xl font-semibold text-black">Cut Dosa</h4>
            </div>
            <div className="space-y-1">
              <h4 className="font-sans text-2xl font-semibold text-black">Onion Uttappam</h4>
            </div>
          </div>

          {/* Central Circular Imagery */}
          <div className="relative flex flex-col justify-center items-center gap-8 order-1 md:order-2">
            <div className="relative w-[280px] h-[280px]">
              <div className="orbital-ring w-[320px] h-[320px] -top-[20px] -left-[20px] border-[#EBA324] border-[1px] rounded-full absolute">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#EBA324] rounded-full"></div>
              </div>
              <div className="food-circle w-full h-full border-4 border-[#EBA324] rounded-full overflow-hidden shadow-xl">
                <Image
                  src={assets[0]}
                  alt="Traditional South Indian Food"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-4 right-0 w-2 h-2 bg-[#912222] rounded-full"></div>
            </div>

            <div className="relative w-[260px] h-[260px]">
              <div className="orbital-ring w-[300px] h-[300px] -top-[20px] -left-[20px] border-[#228B22] border-[1px] rounded-full absolute">
                <div className="absolute bottom-0 right-1/4 w-2 h-2 bg-[#228B22] rounded-full"></div>
              </div>
              <div className="food-circle w-full h-full border-4 border-[#228B22] rounded-full overflow-hidden shadow-xl">
                <Image
                  src={assets[1]}
                  alt="Dosa Varieties"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute top-1/4 -left-4 w-2 h-2 bg-[#EBA324] rounded-full"></div>
            </div>
          </div>

          {/* Right Column Items */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-6 flex-1 order-3">
            <div className="space-y-1">
              <h4 className="font-sans text-2xl font-semibold text-black">Onion Tomato Uttappam</h4>
            </div>
            <div className="space-y-1">
              <h4 className="font-sans text-2xl font-semibold text-black">Mysore Masala Dosa</h4>
            </div>
            <div className="space-y-1">
              <h4 className="font-sans text-2xl font-semibold text-black">Butter Garlic Mysore Masala Dosa</h4>
            </div>
            <div className="space-y-1">
              <h4 className="font-sans text-2xl font-semibold text-black">Onion Rava Dosa</h4>
            </div>
            <div className="space-y-1">
              <h4 className="font-sans text-2xl font-semibold text-black">Onion Rava Masala Dosa</h4>
            </div>
            <div className="space-y-1">
              <h4 className="font-sans text-2xl font-semibold text-black">Ghee Roast Podi Utappam</h4>
            </div>
          </div>
        </div>
      </div>

      {/* Pizza Dosa Section Header */}
      <div className="container mx-auto max-w-[1200px] px-5 mt-32">
        <div className="text-center mb-16">
          <h2 className="font-heading text-[48px] font-bold text-[#912222] relative pb-3 mb-6 mx-auto w-fit after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-[140px] after:height-[3px] after:bg-[#912222]">
            Pizza Dosa Menu
          </h2>
          <p className="font-body text-[16px] text-[#7A7A7A] max-w-2xl mx-auto italic">
            A pizza made on Uttapam as a crust. Topped with pizza sauce, paneer, vegetables, mozzarella and explosion of cheese in the middle.
          </p>
        </div>

        {/* Pizza Items List */}
        <div className="max-w-3xl mx-auto text-center space-y-10">
          <div className="group transition-all duration-300">
            <h3 className="font-sans text-[28px] md:text-[32px] font-semibold text-black mb-1">Cheese Burst Pizza Dosa</h3>
            <div className="h-[1px] w-20 bg-[#EBA324]/30 mx-auto mt-4"></div>
          </div>

          <div className="group transition-all duration-300">
            <h3 className="font-sans text-[28px] md:text-[32px] font-semibold text-black mb-1">Cheese Burst Paneer Pizza Dosa</h3>
            <div className="h-[1px] w-20 bg-[#EBA324]/30 mx-auto mt-4"></div>
          </div>

          <div className="group transition-all duration-300">
            <h3 className="font-sans text-[28px] md:text-[32px] font-semibold text-black mb-1">Cheese Burst Tandoori Pizza Dosa</h3>
            <div className="h-[1px] w-20 bg-[#EBA324]/30 mx-auto mt-4"></div>
          </div>

          <div className="group transition-all duration-300 relative">
            <h3 className="font-sans text-[28px] md:text-[32px] font-semibold text-black mb-2">Cheese Burst Paneer Tandoori Pizza Dosa</h3>
            <p className="font-body text-sm text-[#7A7A7A] mb-4">Dosa gets a fiery makeover introducing Paneer Tandoori Pizza Dosa</p>
            <div className="h-[1px] w-20 bg-[#912222]/30 mx-auto mt-4"></div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .orbital-ring {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
        }
        .food-circle {
          border-radius: 50%;
          aspect-ratio: 1 / 1;
          overflow: hidden;
          position: relative;
        }
      `}</style>
    </section>
  );
};

export default NamasteAnnaPizzaSection;