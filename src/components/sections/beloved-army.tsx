import React from 'react';
import Image from 'next/image';

/**
 * BelovedArmy Section
 * 
 * A tribute section dedicated to the Indian Army featuring a soldier illustration,
 * a national flag, and a specific offer text.
 * 
 * Design: Light theme, cream background, patriotic theme.
 */

const BelovedArmy = () => {
  // Asset from the provided list
  const soldierIllustration = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/181cb15d-0961-460f-888f-83bfd54e1847-sadosacafe-com/assets/images/sl-removebg-preview-29.png";

  return (
    <section className="relative w-full bg-[#f7f1e1] overflow-hidden py-16 md:py-24">
      <div className="container mx-auto px-4 relative z-10">
        
        {/* Section Header with Decorative Lines */}
        <div className="flex items-center justify-center mb-12">
          <div className="hidden md:block flex-1 h-[1px] bg-[#633200]/20 max-w-[200px]"></div>
          <div className="mx-4 flex flex-col items-center">
             {/* Small Diamond Icon Placeholder */}
            <div className="mb-2">
              <svg 
                width="16" 
                height="16" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="#633200" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                className="opacity-60"
              >
                <path d="M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41l-7.59-7.59a2.41 2.41 0 0 0-3.41 0Z" />
              </svg>
            </div>
            <h3 className="font-display text-[45px] md:text-[65px] leading-[1.1em] text-[#633200] text-center">
              To Our Beloved Army
            </h3>
          </div>
          <div className="hidden md:block flex-1 h-[1px] bg-[#633200]/20 max-w-[200px]"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div className="flex flex-col space-y-8 max-w-xl text-center lg:text-left mx-auto lg:mx-0 order-2 lg:order-1">
            <div className="space-y-6">
              <h2 className="font-heading font-semibold text-[24px] md:text-[28px] leading-[1.3em] text-[#633200]">
                We Are Patriots. We Respect Our Soldiers Who Work Day And Night For Protecting Our Freedom.
              </h2>
              
              <p className="font-heading font-normal text-[18px] md:text-[20px] leading-[1.5em] text-[#633200]">
                In A Attempt To Show Our Gratitude And Respect To Our Most Beloved Army, We Are Doing Slightest Bit Of This In Our Way
              </p>
              
              <div className="pt-4">
                <p className="font-heading font-bold text-[20px] md:text-[24px] leading-[1.4em] text-[#a2231a]">
                  If You Are Currently Serving In The Army, Show Your ID Card And Freebiz From Us!
                </p>
              </div>
            </div>
          </div>

          {/* Soldier & Flag Illustration */}
          <div className="relative flex justify-center items-center order-1 lg:order-2 h-[400px] md:h-[600px] w-full">
            {/* Mountain Backdrop Placeholder/Effect */}
            <div className="absolute inset-0 z-0 flex items-end justify-center pointer-events-none opacity-20">
              <svg viewBox="0 0 1000 400" className="w-full h-full preserve-aspect-ratio text-[#633200] fill-current">
                <path d="M0,400 L200,150 L400,300 L650,50 L1000,400 Z" />
              </svg>
            </div>
            
            {/* Specific Scraped Asset: Soldier + Flag */}
            <div className="relative z-10 w-full h-full">
              <Image 
                src={soldierIllustration}
                alt="Indian Soldier holding national flag tribute"
                fill
                style={{ objectFit: 'contain', objectPosition: 'center bottom' }}
                priority
                className="drop-shadow-2xl"
              />
            </div>
            
            {/* Floating Clouds (Stylistic decoration from screenshots) */}
            <div className="absolute top-10 left-10 w-32 h-16 bg-white/40 blur-xl rounded-full animate-pulse hidden md:block"></div>
            <div className="absolute top-20 right-20 w-40 h-20 bg-white/40 blur-xl rounded-full animate-pulse delay-700 hidden md:block"></div>
          </div>

        </div>
      </div>

      {/* Decorative Wave Bottom to transition to next section */}
      <div className="absolute bottom-0 left-0 w-full h-12 overflow-hidden pointer-events-none">
        <div className="brush-divider absolute inset-0 bg-white transform translate-y-6"></div>
      </div>
      
    </section>
  );
};

export default BelovedArmy;