import React from 'react';

const IntroText = () => {
  return (
    <section className="bg-background py-[80px] md:py-[100px]">
      <div className="container px-6 mx-auto max-w-[1140px]">
        <div className="flex flex-col items-center text-center space-y-4">
          {/* Main Headline */}
          <div className="relative overflow-hidden w-full">
            {/* Desktop Version */}
            <h2 className="hidden md:block font-heading text-[28px] md:text-[36px] text-brand-rust font-bold animate-in fade-in slide-in-from-bottom-8 duration-700 ease-out fill-mode-both">
              Bringing Great Food Near You
            </h2>
            
            {/* Mobile Version with Line Break - matched from HTML structure */}
            <h2 className="md:hidden font-heading text-[28px] text-brand-rust font-bold animate-in fade-in slide-in-from-bottom-8 duration-700 ease-out fill-mode-both leading-[1.2]">
              Bringing Great<br />Food Near You
            </h2>
          </div>

          {/* Description */}
          <div className="max-w-[800px] mx-auto pt-2">
            <h4 className="font-sans text-[16px] md:text-[18px] font-semibold text-foreground/90 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-300 ease-out fill-mode-both normal-case tracking-normal leading-[1.4]">
              our restaurants, each offering a unique dining experience with signature flavors
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroText;