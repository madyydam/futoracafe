import React from 'react';
import Image from 'next/image';

const ArmyTribute = () => {
  return (
    <section className="relative overflow-hidden bg-white pb-[100px] pt-[50px]">
      {/* Wave Brush Top Divider (Transition from cream/yellow) */}
      <div className="absolute top-0 right-0 left-0 h-24 transform -translate-y-px z-10">
        <svg
          viewBox="0 0 1440 120"
          className="w-full h-full fill-[#fdf8e1]"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0,0 L1440,0 L1440,40 C1440,40 1260,110 1080,110 C900,110 720,40 540,40 C360,40 180,110 0,110 Z"></path>
        </svg>
      </div>

      <div className="container relative z-20 mx-auto px-4">
        {/* Section Title with Decorative Lines */}
        <div className="flex items-center justify-center gap-4 mb-12 mt-16 lg:mt-24">
          <div className="hidden sm:flex items-center flex-1">
            <div className="h-[1px] bg-neutral-300 flex-1"></div>
            <div className="ml-4 text-neutral-400">
              <span className="text-[12px] rotate-45 border border-neutral-400 p-0.5 inline-block">◆</span>
            </div>
          </div>
          
          <h2 className="font-heading text-[#fbb03b] text-[50px] leading-[1.2] text-center px-4">
            To Our Beloved Army
          </h2>

          <div className="hidden sm:flex items-center flex-1">
            <div className="mr-4 text-neutral-400">
              <span className="text-[12px] rotate-45 border border-neutral-400 p-0.5 inline-block">◆</span>
            </div>
            <div className="h-[1px] bg-neutral-300 flex-1"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-16">
          {/* Text Content */}
          <div className="order-2 lg:order-1 max-w-2xl">
            <div className="space-y-6">
              <h3 className="font-heading text-[#6e1c0d] text-[28px] lg:text-[32px] leading-[1.3] font-normal uppercase">
                We Are Patriots. We Respect Our Soldiers Who Work Day And Night For Protecting Our Freedom.
              </h3>
              
              <p className="font-body text-[#6e1c0d] text-[20px] lg:text-[22px] font-semibold leading-[1.5]">
                In A Attempt To Show Our Gratitude And Respect To Our Most Beloved Army, We Are Doing Slightest Bit Of This In Our Way
              </p>

              <p className="font-body text-[#6e1c0d] text-[22px] lg:text-[24px] font-bold leading-[1.4] text-[#8b5a2b]">
                If You Are Currently Serving In The Army, Show Your ID Card And Freebiz From Us!
              </p>
            </div>
          </div>

          {/* Illustration Content */}
          <div className="order-1 lg:order-2 relative h-[400px] lg:h-[600px] w-full flex items-end justify-center">
            {/* Background Mountain Backdrop (Placeholder for the light gray mountain shape in screenshot) */}
            <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
              <svg viewBox="0 0 500 300" className="w-full h-full">
                <path fill="#000" d="M0,300 L150,150 L250,220 L350,100 L500,300 Z" />
              </svg>
            </div>

            {/* Clouds Assets (Faded/Abstract) */}
            <div className="absolute top-1/4 left-0 w-32 h-16 bg-neutral-100/50 rounded-full blur-xl"></div>
            <div className="absolute top-1/3 right-10 w-40 h-20 bg-neutral-100/50 rounded-full blur-xl"></div>

            {/* Soldier Holding Indian Flag Image */}
            <div className="relative z-10 w-full h-full flex justify-center items-end">
              <Image 
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/181cb15d-0961-460f-888f-83bfd54e1847-sadosacafe-com/assets/images/sl-removebg-preview-29.png"
                alt="Soldier holding Indian Flag"
                width={600}
                height={600}
                className="object-contain max-h-full w-auto"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Floor Graphics (Subtle white gradient at bottom) */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
      
      {/* Bottom Wave Transition to next section (Cream) */}
      <div className="absolute bottom-0 right-0 left-0 h-24 transform translate-y-px z-30 overflow-hidden">
        <svg
          viewBox="0 0 1440 120"
          className="w-full h-full fill-[#fdf8e1]"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0,120 L1440,120 L1440,40 C1440,40 1260,110 1080,110 C900,110 720,40 540,40 C360,40 180,110 0,110 Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default ArmyTribute;