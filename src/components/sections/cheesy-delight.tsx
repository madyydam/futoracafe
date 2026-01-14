import React from 'react';
import Image from 'next/image';

/**
 * CheesyDelight Section
 * Clones the "Cheesy Delight" featured product section with stylized melting cheese graphic.
 * Primary asset: 181cb15d-0961-460f-888f-83bfd54e1847-sadosacafe-com/assets/images/20240427_110209216_iOS-removebg-preview-18.png
 */
export default function CheesyDelight() {
  return (
    <section className="relative w-full overflow-hidden bg-[#f7f1e1] py-20">
      <div className="container mx-auto px-4 lg:px-0 max-w-[1140px]">
        {/* Section Title with Decorative Lines */}
        <div className="flex items-center justify-center gap-4 mb-16">
          <div className="hidden md:block h-[1px] flex-1 bg-[#633200]/20 relative">
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-[#633200]/40 rounded-full"></div>
          </div>
          <h2 className="font-montez text-[50px] md:text-[60px] text-brand-brown whitespace-nowrap px-4 drop-shadow-sm">
            Cheesy Delight
          </h2>
          <div className="hidden md:block h-[1px] flex-1 bg-[#633200]/20 relative">
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-[#633200]/40 rounded-full"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-8">
          {/* Left Content Column */}
          <div className="relative z-10 flex flex-col items-center lg:items-start text-center lg:text-left">
            <h3 className="font-display text-[#e87747] text-[48px] md:text-[55px] leading-[1.1] mb-2 uppercase tracking-tight">
              Creamy Cheesy <br className="hidden md:block" /> Schezwan Dosa
            </h3>
            
            <p className="font-heading text-[#d4a373] text-[16px] md:text-[18px] font-semibold uppercase tracking-wider mb-2">
              SOUTH-INDIAN & ITALIAN FUSION FEASTS:<br />
              TRADITION MEETS INNOVATION
            </p>
            
            <p className="font-heading text-[#633200] text-[20px] md:text-[22px] font-medium italic mb-6">
              Delightful Twists on Classic Flavors
            </p>
            
            <p className="font-body text-[#4a4a4a] text-[16px] leading-[1.7] max-w-[550px] mb-10">
              Craving something new yet familiar? Our Fusion Feast section is here to amaze your taste buds! 
              From the cheesy goodness of Schezwan Dosa to other innovative creations, we blend traditional 
              dishes with global flavors to create something truly unforgettable. Explore bold, creamy, and 
              spicy combinations that will keep you coming back for more!
            </p>
            
            <a 
              href="/sadosa-menu" 
              className="inline-block bg-[#ffb331] text-white font-akshar font-bold text-[14px] px-8 py-3 rounded-[5px] uppercase transition-colors hover:bg-[#e69b1f] shadow-sm"
            >
              Explore Our Menu
            </a>
          </div>

          {/* Right Visual Column */}
          <div className="relative flex justify-center items-center h-[350px] md:h-[500px]">
            {/* Stylized Melting Cheese Background (SVG shape representation) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[500px] h-[300px] md:h-[400px]">
              <svg 
                viewBox="0 0 500 400" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg" 
                className="w-full h-full drop-shadow-xl opacity-90"
              >
                <path 
                  d="M50,150 C50,150 120,120 250,140 C380,160 450,130 450,130 L450,250 C450,250 420,280 380,270 C340,260 320,310 300,340 C280,370 250,380 230,350 C210,320 180,300 140,290 C100,280 50,310 50,310 Z" 
                  fill="#ffdf32"
                />
                <path 
                  d="M280,240 C280,240 285,280 300,340" 
                  stroke="#ffb331" 
                  strokeWidth="4" 
                  strokeLinecap="round" 
                  strokeDasharray="1 10" 
                  className="opacity-50"
                />
              </svg>
            </div>

            {/* Product Image */}
            <div className="relative z-20 w-full max-w-[480px] -mt-8">
              <Image 
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/181cb15d-0961-460f-888f-83bfd54e1847-sadosacafe-com/assets/images/20240427_110209216_iOS-removebg-preview-18.png"
                alt="Creamy Cheesy Schezwan Dosa"
                width={800}
                height={600}
                className="w-full h-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500 ease-in-out"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}