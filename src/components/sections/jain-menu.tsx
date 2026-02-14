import React from 'react';
import Image from 'next/image';

const JainMenu = () => {
  return (
    <section 
      className="relative bg-[#f7f1e1] py-[80px] overflow-hidden" 
      id="jain-menu"
    >
      {/* Background Zen Illustration (Buddha/Lotus) - Floating on the right */}
      <div className="absolute right-0 bottom-0 opacity-20 pointer-events-none translate-x-1/4 translate-y-1/4 lg:translate-x-0 lg:translate-y-0">
        <svg
          width="500"
          height="600"
          viewBox="0 0 512 512"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-[#633200]"
        >
          <path
            d="M256 48C194.1 48 144 98.1 144 160C144 233.1 202.9 292.4 256 320C309.1 292.4 368 233.1 368 160C368 98.1 317.9 48 256 48ZM256 128C273.7 128 288 142.3 288 160C288 177.7 273.7 192 256 192C238.3 192 224 177.7 224 160C224 142.3 238.3 128 256 128ZM448 416C448 398.3 433.7 384 416 384H352V352H288V384H224V352H160V384H96C78.3 384 64 398.3 64 416V464H448V416Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Buddha-like outlines - using a stylistic representation based on description */}
          <path d="M256 320V464" stroke="currentColor" strokeWidth="2" />
          <path d="M160 464C160 416 200 384 256 384C312 384 352 416 352 464" stroke="currentColor" strokeWidth="2" />
          <path d="M120 464C120 440 256 320 256 320" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
          <path d="M392 464C392 440 256 320 256 320" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
        </svg>
      </div>

      <div className="container relative z-10 mx-auto px-4 max-w-[1140px]">
        {/* Section Header with Decorative Lines */}
        <div className="flex items-center justify-center mb-4 gap-4">
          <div className="h-[1px] bg-[#633200]/20 flex-grow max-w-[150px]"></div>
          <div className="px-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L15 8L21 9L16.5 14L18 20L12 17L6 20L7.5 14L3 9L9 8L12 2Z" stroke="#633200" strokeWidth="1" fill="#633200" fillOpacity="0.1"/>
            </svg>
          </div>
          <h3 className="text-[#633200] font-aladin text-[45px] md:text-[65px] leading-[1.1em] text-center">
            Jain Menu
          </h3>
          <div className="px-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L15 8L21 9L16.5 14L18 20L12 17L6 20L7.5 14L3 9L9 8L12 2Z" stroke="#633200" strokeWidth="1" fill="#633200" fillOpacity="0.1"/>
            </svg>
          </div>
          <div className="h-[1px] bg-[#633200]/20 flex-grow max-w-[150px]"></div>
        </div>

        {/* Brand Catchphrase */}
        <h2 className="text-[#633200] font-montez text-[40px] md:text-[60px] leading-[1.2em] text-center mb-8">
          Where Taste Meets Tradition
        </h2>

        {/* Supporting Content Wrapper */}
        <div className="max-w-[800px] mx-auto text-center space-y-6">
          <h4 className="font-akshar text-[24px] md:text-[28px] font-semibold text-[#633200] leading-[1.3em]">
            Flavors Elevated, Values Intact! Because great taste doesn’t need a compromise—just the right touch of tradition with a modern spin!
          </h4>

          <div className="w-[80px] h-[2px] bg-[#ffb331] mx-auto my-6"></div>

          <p className="font-poppins text-[16px] text-[#4a4a4a] leading-[1.6em] max-w-[650px] mx-auto">
            <span className="font-semibold text-[#633200]">Taste Craving</span> bold flavors with a mindful twist? Our Jain Menu redefines indulgence—no onion, no garlic, just pure innovation! we blend authenticity with creativity for a feast that speaks your language.
          </p>

          <div className="pt-8">
            <a 
              href="/#menu" 
              className="inline-block bg-[#ffb331] text-white px-8 py-3 rounded-[5px] font-akshar font-bold text-[14px] uppercase tracking-wider hover:bg-[#e8a22a] transition-colors duration-300 shadow-sm"
            >
              Explore Our Menu
            </a>
          </div>
        </div>
      </div>

      {/* Subtle Brush Divider Bottom Transition */}
      <div 
        className="absolute bottom-0 left-0 w-full h-[150px] pointer-events-none brush-divider"
        style={{ 
          backgroundColor: '#fff', 
          transform: 'rotate(180deg)',
          zIndex: 1
        }}
      ></div>
      
      {/* Side Decorative Elements - Organic Shapes */}
      <div className="absolute left-[-5%] top-[20%] w-[200px] h-[200px] bg-[#ffb331]/5 rounded-full blur-[80px] pointer-events-none"></div>
    </section>
  );
};

export default JainMenu;