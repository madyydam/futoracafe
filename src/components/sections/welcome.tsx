import React from "react";
import Image from "next/image";

/**
 * WelcomeSection Component
 * Clones the welcome section with the "Welcome To Sa Dosa Cafe" text, 
 * flanked by character illustrations, and a sub-headline about spreading cheer.
 */
export default function WelcomeSection() {
  return (
    <section 
      className="relative flex flex-col items-center justify-center pt-24 pb-20 px-4 bg-[#fdf8e1] overflow-hidden"
      style={{
        backgroundColor: "rgb(253, 248, 225)",
      }}
    >
      {/* Wave Brush Top Divider (Transitions from Hero section saffron/orange) */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] transform rotate-180 z-10">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-[calc(100%+1.3px)] h-[80px]"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5,73.84-4.36,147.54,16.88,218.2,35.26,69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113,1.42,1200,34.87V0Z"
            fill="#fbb03b"
          ></path>
        </svg>
      </div>

      <div className="container relative z-20 max-w-[1200px] flex flex-col items-center text-center">
        
        {/* Character Illustrations Wrapper */}
        <div className="absolute top-10 left-0 hidden lg:block animate-in fade-in slide-in-from-left-8 duration-1000">
          <Image 
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/181cb15d-0961-460f-888f-83bfd54e1847-sadosacafe-com/assets/images/Menu-Card-Final-1-e1743600227811-210x300-10.png"
            alt="Traditional Character Left"
            width={180}
            height={257}
            className="object-contain"
          />
        </div>

        <div className="absolute top-10 right-0 hidden lg:block scale-x-[-1] animate-in fade-in slide-in-from-right-8 duration-1000">
          <Image 
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/181cb15d-0961-460f-888f-83bfd54e1847-sadosacafe-com/assets/images/Menu-Card-Final-1-e1743600227811-210x300-10.png"
            alt="Traditional Character Right"
            width={180}
            height={257}
            className="object-contain"
          />
        </div>

        {/* Floating Decoration Assets (Visual depth) */}
        <div className="absolute -top-4 -left-10 lg:left-[-150px] opacity-40">
           {/* Decorative banana leaf elements usually go here */}
        </div>

        {/* Main Heading */}
        <div className="mb-4">
          <h1 className="font-display text-[80px] md:text-[100px] lg:text-[120px] font-bold text-[#6e1c0d] leading-[0.8em] drop-shadow-sm animate-in zoom-in duration-700">
            Welcome To <br className="block md:hidden" /> Sa Dosa Cafe
          </h1>
        </div>

        {/* Tagline */}
        <div className="mb-10 w-full max-w-2xl px-4">
          <h6 className="font-body text-[14px] md:text-[16px] font-medium text-[#4a4a4a] tracking-widest uppercase mb-8 animate-in slide-in-from-bottom-4 duration-800">
            serving smile with Every plate, flavors You'll Celebrate!
          </h6>
          
          <h2 className="font-heading text-[36px] md:text-[45px] lg:text-[50px] font-normal text-[#d18d2d] leading-[1.2em] animate-in slide-in-from-bottom-6 duration-1000">
            Spreading cheer with every bite,<br className="hidden md:block" /> Crispy dosas cooked just right!
          </h2>
        </div>

        {/* Decorative Divider */}
        <div className="flex items-center justify-center w-full max-w-[800px] gap-4 mb-4">
          <div className="h-[1px] bg-[#e5e5e5] flex-grow"></div>
          <div className="text-[#6e1c0d]">
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="currentColor" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
            </svg>
          </div>
          <div className="h-[1px] bg-[#e5e5e5] flex-grow"></div>
        </div>

        {/* Section Secondary Heading */}
        <div className="mt-2">
          <h2 className="font-heading text-[32px] md:text-[40px] text-[#fbb03b] drop-shadow-sm font-normal">
            Specials' On Our Menu
          </h2>
        </div>
      </div>

      {/* Background Decorative Patterns */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-5">
        <div className="absolute top-20 left-10 transform -rotate-12">
          {/* Subtle patterned elements like the banana leaf or swirls */}
        </div>
      </div>
    </section>
  );
}