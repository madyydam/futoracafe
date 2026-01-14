"use client";

import React from 'react';
import Image from 'next/image';

const RiceMenuFooterCallout = () => {
  const riceMenuItems = [
    {
      name: "Ghee Podi Rice",
      description: "Made with flavourful rice sauté in Ghee tadka and Podi masala, topped with peanuts"
    },
    {
      name: "Curd Rice",
      description: "Made with flavourful rice, Curd, Ghee, herbs & tempering spices, topped with roasted chana."
    },
    {
      name: "Sambar Rice",
      description: "Made with flavourful rice and sambar cooked together in ghee tadka."
    },
    {
      name: "Lemon Rice",
      description: "Zesty lemon rice with mustard seeds, curry leaves, and roasted peanuts, bursting with flavor."
    }
  ];

  return (
    <section className="bg-[#F7F1E1] pt-20">
      {/* Rice Menu Section */}
      <div className="container px-4 mx-auto mb-20 max-w-[1200px]">
        <h2 className="text-center font-heading text-[32px] md:text-[48px] text-[#912222] font-bold relative pb-3 mb-12 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-[140px] after:height-[3px] after:bg-[#912222]">
          Rice Menu
        </h2>

        <div className="max-w-3xl mx-auto space-y-12">
          {riceMenuItems.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <h3 className="font-sans text-[24px] md:text-[32px] font-semibold text-black mb-2">
                {item.name}
              </h3>
              <p className="font-body text-[14px] md:text-[16px] text-[#7A7A7A] leading-[1.4] max-w-2xl">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative Banner Callout */}
      <div className="relative overflow-hidden bg-[#FBCFAE] py-16 md:py-24">
        {/* Top Tribal Border Pattern */}
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0]">
          <div className="flex w-[200%] md:w-full">
            {Array.from({ length: 40 }).map((_, i) => (
              <div key={i} className="flex flex-col items-center mx-auto">
                <div className="w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-b-[20px] border-b-[#EBA324]"></div>
                <div className="w-2 h-2 rounded-full bg-[#EBA324] mt-1"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Decorative Assets / Background blobs as seen in screenshot */}
        <div className="absolute top-10 right-10 opacity-20 hidden md:block">
          <div className="w-24 h-24 border-4 border-[#912222] rounded-full p-2">
            <div className="w-full h-full border-2 border-dashed border-[#912222] rounded-full"></div>
          </div>
        </div>

        <div className="container relative z-10 px-4 mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <p className="font-display text-[28px] md:text-[36px] text-[#322B22] italic mb-6">
              Step In, Savor, and Stay Awhile!
            </p>

            <h2 className="font-heading text-[28px] md:text-[42px] leading-[1.2] text-[#000000] font-bold mb-8 uppercase tracking-tight after:hidden">
              Where Every Bite Tells A Story,<br />
              And Every Visit Feels Like Home.<br />
              Come For The Food, Stay For The Vibe!
            </h2>

            <p className="font-display text-[28px] md:text-[36px] text-[#322B22] italic">
              Until We Meet
            </p>
          </div>
        </div>

        {/* Bottom Tribal Border Pattern */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] rotate-180">
          <div className="flex w-[200%] md:w-full">
            {Array.from({ length: 40 }).map((_, i) => (
              <div key={i} className="flex flex-col items-center mx-auto">
                <div className="w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-b-[20px] border-b-[#EBA324]"></div>
                <div className="w-2 h-2 rounded-full bg-[#EBA324] mt-1"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Floating Illustrative Elements */}
        <div className="absolute bottom-4 right-4 md:right-12 opacity-80 z-20">
          <div className="flex gap-2">
            <div className="w-12 h-2 rounded-full bg-[#912222] rotate-[-45deg] origin-right"></div>
            <div className="w-12 h-2 rounded-full bg-[#EBA324] rotate-[-45deg] origin-right translate-y-2"></div>
            <div className="w-12 h-2 rounded-full bg-[#322B22] rotate-[-45deg] origin-right translate-y-4"></div>
          </div>
        </div>
      </div>

      {/* Wave Transition to Footer */}
      <div className="wave-divider bg-[#0B0B0B] -mt-1 h-[60px] md:h-[100px]"></div>
    </section>
  );
};

export default RiceMenuFooterCallout;