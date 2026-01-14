import React from 'react';
import Image from 'next/image';

/**
 * MenuHero component for SaDosaCafe.
 * Pixel-perfect implementation based on provided HTML structure and design system.
 */
const MenuHero: React.FC = () => {
  return (
    <section 
      className="relative w-full bg-[#F6F1DC] flex flex-col items-center pt-24 pb-0 overflow-hidden"
      style={{ minHeight: '80vh' }}
    >
      {/* Container for the Main Typography Content */}
      <div className="container relative z-10 flex flex-col items-center">
        
        {/* "Men" portion of Menu */}
        <div className="relative w-full flex justify-center translate-x-[-120px] md:translate-x-[-180px]">
          <h1 className="hero-title animate-in slide-in-from-left duration-1000 select-none">
            Men
          </h1>
        </div>

        {/* Interaction Bar: a-waits, Order Button, Scooter */}
        <div className="flex items-center gap-8 mt-[-20px] mb-4 md:gap-16">
          <span className="font-heading text-[24px] md:text-[32px] text-[#332D26] italic lowercase opacity-80 animate-in fade-in duration-1000">
            a-waits
          </span>

          <div className="flex items-center gap-4">
            <a 
              href="https://www.swiggy.com/city/pune/sa-dosa-cafe-pimple-saudagar-rest782082" 
              className="btn-order shadow-lg hover:shadow-xl active:scale-95 transition-all"
            >
              Order Now
              <svg 
                className="w-5 h-5 fill-current text-[#EAB231]" 
                viewBox="0 0 1708 2500"
              >
                <path d="M1251.6 0C1004.9 0 836.2 147.1 836.2 388.2c0 200.7 114.9 336.8 333.3 499.7 186.1 135.5 289 238.4 289 397.7 0 171.2-126.3 268-305 268-202 0-353.4-118.8-353.4-323l-455.4 12c14.2 463.3 440.3 759.5 829.4 759.5 451 0 773.1-246.3 773.1-669 0-252.3-120.4-406.4-368.5-591.9-204.6-149-270.2-226.7-270.2-343 0-116.3 84.1-188.7 207.3-188.7 142.6 0 240.5 83.4 250.7 235.4l438.2-12.7C2186.9 148.4 1860.2 0 1251.6 0zM122.3 898.3l23.5 444.6 304.8-16.1L427.1 882.2zM27 1515.2l23.5 444.6 304.7-16 23.5-444.7zM0 2132.1l23.5 444.6 304.7-16 23.5-444.6z" />
              </svg>
            </a>

            {/* Delivery Scooter Illustration */}
            <div className="relative w-[60px] h-[50px] md:w-[80px] md:h-[65px] transition-transform duration-500 hover:translate-x-4">
              <Image 
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/181cb15d-0961-460f-888f-83bfd54e1847-sadosacafe-com/assets/icons/vecteezy_delivery-illustration-free-vector-element-1.png"
                alt="Delivery scooter"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>

        {/* "u" portion of Menu */}
        <div className="relative w-full flex justify-center translate-x-[-150px] md:translate-x-[-220px]">
          <h1 className="hero-title animate-in slide-in-from-right duration-1000 select-none">
            u
          </h1>
        </div>

        {/* Subtitle */}
        <p className="font-heading text-[20px] md:text-[28px] text-[#666666] tracking-wide mt-4 opacity-0 animate-in fade-in fill-mode-forwards duration-1000 delay-500">
          Discover Our Delicious Creations
        </p>
      </div>

      {/* Large Bottom Illustration: Elephant Procession */}
      <div className="relative w-full mt-[-80px] md:mt-[-150px] z-0 overflow-visible">
        <div className="relative w-full aspect-[21/9] min-h-[300px] md:min-h-[500px]">
          <Image 
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/181cb15d-0961-460f-888f-83bfd54e1847-sadosacafe-com/assets/images/twitch-banner-template-black-history-month-celebra-24.png"
            alt="Traditional Indian procession illustration"
            fill
            className="object-contain object-bottom"
            priority
          />
        </div>
      </div>

      {/* Wave Brush Divider (Negative space toward the next section) */}
      <div className="absolute bottom-0 left-0 w-full h-[60px] pointer-events-none">
        <svg 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="w-full h-full fill-white"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" />
        </svg>
      </div>

      <style jsx global>{`
        h1.hero-title {
          font-family: var(--font-display);
          font-size: clamp(140px, 20vw, 240px);
          color: var(--color-secondary);
          line-height: 0.6;
          font-weight: 400;
          margin: 0;
        }
        
        @media (max-width: 768px) {
          h1.hero-title {
            font-size: 100px;
          }
        }
      `}</style>
    </section>
  );
};

export default MenuHero;