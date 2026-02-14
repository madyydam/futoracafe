import React from 'react';
import Image from 'next/image';

/**
 * Grandma's Recipes Section
 * Cloned from SaDosaCafe Franchise page
 * High-precision implementation based on design instructions, computed styles, and high-level design.
 */
const GrandmasRecipes = () => {
  return (
    <section className="relative overflow-hidden bg-[#F5F1E1] py-[80px] md:py-[100px]">
      <div className="container mx-auto px-6 max-w-[1200px]">
        <div className="flex flex-col items-center justify-center text-center">
          
          {/* Grandma Avatar Icon */}
          <div className="mb-6 md:mb-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <div className="relative w-[120px] h-[120px] md:w-[150px] md:h-[150px] food-mask border-4 border-[#FF6B35] bg-white flex items-center justify-center p-2.5 shadow-soft">
              <div className="relative w-full h-full overflow-hidden rounded-full">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/181cb15d-0961-460f-888f-83bfd54e1847-sadosacafe-com/assets/icons/grandma-avatar_2x-r3nrvr1m23a0p5ks1u9877dmmwtxv1kf-4.png"
                  alt="Grandma's Recipes Icon"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Heading Content */}
          <div className="max-w-[800px] space-y-4">
            <h2 className="font-traditional text-[40px] md:text-[50px] lg:text-[60px] leading-[1.1] text-[#3C2415] mb-2">
              Grandma’s Recipes
            </h2>
            
            <p className="font-body text-[18px] md:text-[22px] font-medium text-[#3C2415] opacity-90 leading-relaxed uppercase tracking-wide">
              Relive the golden days with nostalgic recipes straight from her kitchen.
            </p>
            
            <div className="mt-8 md:mt-10 mx-auto w-24 h-1 bg-[#FF6B35] rounded-full"></div>
            
            <div className="pt-6">
              <p className="font-body text-[16px] md:text-[18px] text-[#3C2415] max-w-[700px] mx-auto opacity-80 italic">
                &ldquo;Every plate we serve carries the secret pinches of spice and the heaps of love passed down through generations. Authentic flavors, preserved with care.&rdquo;
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Background Decorative Illustration Elements (Generic fallback since specific side sketches weren't in assets for this block) */}
      <div className="absolute left-[-5%] top-[20%] opacity-10 pointer-events-none hidden lg:block select-none">
         <svg width="300" height="300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-[#3C2415]">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
         </svg>
      </div>
      <div className="absolute right-[-5%] bottom-[10%] opacity-5 pointer-events-none hidden lg:block select-none">
         <svg width="400" height="400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-[#006633]">
            <path d="M12 3L4 9v12h16V9l-8-6z" />
         </svg>
      </div>
    </section>
  );
};

export default GrandmasRecipes;