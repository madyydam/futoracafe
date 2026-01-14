import React from 'react';

/**
 * Clones the brand philosophy section of Futora Cafe.
 */
const OurStory: React.FC = () => {
  return (
    <section 
      id="our-story"
      className="relative bg-[#f7f1e1] py-[80px] px-4 md:px-0 scroll-mt-20 overflow-hidden"
    >
      {/* Container to maintain alignment with other sections */}
      <div className="container mx-auto max-w-[1140px]">
        
        {/* Decorative Divider with Icons */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="h-[1px] bg-[#633200]/20 flex-1 max-w-[150px]"></div>
          <div className="text-[#633200] opacity-60">
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="1.5" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="lucide lucide-message-square"
            >
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
            </svg>
          </div>
          
          <h2 className="text-[65px] font-aladin text-[#ffb331] leading-tight text-center whitespace-nowrap px-4 select-none">
            Our Story
          </h2>

          <div className="text-[#633200] opacity-60">
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="1.5" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="lucide lucide-message-square"
            >
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
            </svg>
          </div>
          <div className="h-[1px] bg-[#633200]/20 flex-1 max-w-[150px]"></div>
        </div>

          {/* Content Block */}
          <div className="max-w-[1000px] mx-auto text-center">
            {/* Subheading */}
            <h4 className="font-heading text-[24px] font-bold text-[#633200] mb-6 tracking-wide uppercase">
              Where Every Sip Tells A Story
            </h4>

            {/* Descriptive Text */}
            <div className="space-y-6">
              <p className="font-body text-[16px] leading-[1.8] text-[#4a4a4a]">
                The Common Cafe was born out of a simple passion: to create a space where coffee, conversation, and comfort collide. We believe that a great cup of coffee is more than just a drink—it&apos;s a moment of connection, a catalyst for creativity, and a daily ritual that brings people together.
              </p>
              <p className="font-body text-[16px] leading-[1.8] text-[#4a4a4a]">
                From our artisanal brews sourced from the finest beans to our freshly baked pastries and wholesome bites, every item on our menu is crafted with care and intention. Whether you&apos;re here for a quick morning pick-me-up or a relaxed afternoon with friends, we invite you to make The Common Cafe your second home.
              </p>
            </div>
          </div>

      </div>

      {/* Brush Divider Bottom Transition */}
      <div 
        className="absolute bottom-0 left-0 w-full h-[60px] pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, transparent, rgba(255, 255, 255, 0.3))',
        }}
      />
      
      {/* Wave Brush Style from High Level Design */}
      <div className="absolute -bottom-1 left-0 w-full overflow-hidden leading-[0] transform rotate-180">
        <svg 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="relative block w-[calc(100%+1.3px)] h-[40px] fill-white"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C58.15,108.91,154.05,127.1,226.31,118.84c30.34-3.47,58.37-14.35,95.08-62.4Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default OurStory;