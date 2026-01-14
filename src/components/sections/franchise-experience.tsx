import React from 'react';
import Image from 'next/image';

/**
 * ExperienceSection Component
 * Clones the "Experience the Essence of Sa Dosa Cafe" section with pixel-perfect accuracy.
 * Features: Dark theme, custom illustrations, overlapping text, and beverage imagery.
 */
export default function ExperienceSection() {
  const assets = {
    chefsIllustration: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/181cb15d-0961-460f-888f-83bfd54e1847-sadosacafe-com/assets/images/10289146_4419157-scaled-16.jpg",
    coffeeCup: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/181cb15d-0961-460f-888f-83bfd54e1847-sadosacafe-com/assets/images/rb_24426-e1743668516629-17.png"
  };

  return (
    <section className="relative w-full bg-[#111111] overflow-hidden py-[80px] lg:py-[100px]">
      {/* Decorative Text Overlays (Chalk style vibe) */}
      <div className="absolute inset-0 pointer-events-none select-none opacity-40 lg:opacity-100">
        <span 
          className="absolute right-[5%] top-[25%] text-white text-[80px] lg:text-[140px] font-display rotate-[-15deg] leading-none"
          style={{ fontFamily: 'var(--font-display)', filter: 'blur(0.5px)' }}
        >
          Coffee
        </span>
        <span 
          className="absolute right-[-2%] bottom-[15%] text-white text-[70px] lg:text-[120px] font-display rotate-[10deg] leading-none"
          style={{ fontFamily: 'var(--font-display)', filter: 'blur(0.5px)' }}
        >
          Delici
        </span>
        <span 
          className="absolute left-[2%] bottom-[10%] text-white text-[60px] lg:text-[100px] font-display rotate-[-5deg] leading-none"
          style={{ fontFamily: 'var(--font-display)', filter: 'blur(0.5px)' }}
        >
          Dosa
        </span>
      </div>

      <div className="container relative z-10">
        {/* Main Heading */}
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-white text-[32px] md:text-[45px] lg:text-[50px] font-display leading-[1.2] mb-4">
            Experience the Essence of Sa Dosa Cafe
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left Side: Chef Illustration */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative w-full max-w-[500px] aspect-[4/3] rounded-[20px] overflow-hidden shadow-2xl">
              <Image 
                src={assets.chefsIllustration}
                alt="Chefs in blue uniforms preparing food"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Right Side: Content and Coffee Cup Overlay */}
          <div className="w-full lg:w-1/2 relative">
            <div className="max-w-[500px] text-white space-y-6">
              <h3 className="text-white text-[24px] md:text-[28px] font-semibold font-body leading-[1.4]">
                Authentic flavors, warm hospitality, and a café experience like no other.
              </h3>
              
              <p className="text-[#E8E2D0] text-base md:text-lg font-body leading-[1.6]">
                From the aroma of freshly brewed chai to the taste of traditional delights, 
                our cafés bring you the richness of Indian culture. Each outlet is designed 
                to create a cozy and welcoming atmosphere, perfect for gatherings, work, 
                or a moment of relaxation.
              </p>

              <p className="text-[#E8E2D0] text-base md:text-lg font-body leading-[1.6] font-semibold">
                Find your nearest café and indulge in the flavors of India. Come visit us today!
              </p>
            </div>

            {/* Coffee Cup Image Overlay */}
            <div className="absolute -bottom-24 -right-12 md:-right-24 w-[250px] md:w-[450px] lg:w-[500px] pointer-events-none">
              <div className="relative aspect-square">
                <Image 
                  src={assets.coffeeCup}
                  alt="A cup of tea or coffee with artistic chalk-style line art around it"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Chalk-style line art accents (decorative placeholder for missing SVG assets) */}
      <div className="absolute right-[15%] top-[15%] w-24 h-24 border-2 border-dashed border-white/20 rounded-full rotate-45 pointer-events-none" />
      <div className="absolute left-[10%] bottom-[20%] w-16 h-16 border-t-2 border-white/20 rounded-full -rotate-12 pointer-events-none" />
      
      {/* Bottom curved transition (to mimic the original layout's wave/curve) */}
      <div 
        className="absolute bottom-0 left-0 w-full h-[60px] bg-[#111111]"
        style={{
          clipPath: 'ellipse(70% 100% at 50% 100%)'
        }}
      />
    </section>
  );
}