import React from 'react';
import { Instagram } from 'lucide-react';

/**
 * SocialMedia Component
 * 
 * Clones the "Social media" section from Sa Dosa Cafe.
 * Features:
 * - Cream background (#f7f1e1)
 * - Section header with ornamental lines and Instagram icons
 * - 4-column grid layout for video/image placeholders
 * - Responsive adjustments for mobile/tablet
 */
const SocialMedia: React.FC = () => {
  // Creating an array for the 8 placeholders (2 rows of 4)
  const placeholders = Array.from({ length: 8 });

  return (
    <section className="bg-[#f7f1e1] py-[80px] w-full overflow-hidden">
      <div className="container mx-auto px-4 max-w-[1140px]">
        
        {/* Section Header */}
        <div className="flex items-center justify-center mb-[40px] gap-4 md:gap-8">
          {/* Left Decorative Line */}
          <div className="hidden sm:flex items-center flex-1">
            <div className="h-[1px] bg-[#633200]/20 flex-1"></div>
            <div className="ml-4 text-[#633200]/60">
              <Instagram size={18} />
            </div>
          </div>

          {/* Heading */}
          <h2 className="font-montez text-[60px] leading-[1.2em] text-[#633200] px-4 whitespace-nowrap">
            Social media
          </h2>

          {/* Right Decorative Line */}
          <div className="hidden sm:flex items-center flex-1">
            <div className="mr-4 text-[#633200]/60">
              <Instagram size={18} />
            </div>
            <div className="h-[1px] bg-[#633200]/20 flex-1"></div>
          </div>
        </div>

        {/* Social Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[25px]">
          {placeholders.map((_, index) => (
            <div 
              key={index}
              className="relative aspect-[9/16] w-full bg-black rounded-[12px] overflow-hidden transition-transform duration-300 hover:scale-[1.02] shadow-card group"
            >
              {/* This mimics the layout where Instagram Reels or short videos would be displayed */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20">
                <Instagram className="text-white w-12 h-12" />
              </div>
              
              {/* Decorative overlay to match the "dense" visual look in the screenshots */}
              <div className="absolute bottom-4 left-4 right-4">
                <div className="h-2 w-2/3 bg-white/10 rounded-full mb-2"></div>
                <div className="h-2 w-1/2 bg-white/10 rounded-full"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Decorative Lines (visible only when the desktop ones are hidden) */}
      <div className="sm:hidden flex items-center justify-center mt-8 px-4 opacity-30">
        <div className="h-[1px] bg-[#633200] flex-1"></div>
        <Instagram size={14} className="mx-2 text-[#633200]" />
        <div className="h-[1px] bg-[#633200] flex-1"></div>
      </div>
    </section>
  );
};

export default SocialMedia;