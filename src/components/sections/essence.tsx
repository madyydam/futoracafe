import React from 'react';
import Image from 'next/image';

const EssenceSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Wave Transition Top */}
      <div className="absolute top-[-1px] left-0 w-full h-[150px] z-10 pointer-events-none overflow-hidden rotate-180">
        <svg
          viewBox="0 0 1440 320"
          className="w-full h-full"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#F7F3E3"
            fillOpacity="1"
            d="M0,224L80,213.3C160,203,320,181,480,186.7C640,192,800,224,960,224C1120,224,1280,192,1360,176L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
      </div>

      {/* Main Content Area */}
      <div className="bg-[#1A1A1A] text-white pt-[160px] pb-[100px] relative">
        <div className="container mx-auto px-6 max-w-[1140px]">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="font-heading text-[36px] md:text-[42px] font-bold text-[#913429] mb-4">
              Experience the Essence of Sa Dosa Cafe
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side: Illustrations */}
            <div className="relative h-[450px] md:h-[550px] flex items-center justify-center">
              {/* Chef / Dining Illustration */}
              <div className="relative z-20 w-full h-full">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/181cb15d-0961-460f-888f-83bfd54e1847-sadosacafe-com/assets/images/10289146_4419157-scaled-16.jpg"
                  alt="Dining Experience Illustration"
                  fill
                  style={{ objectFit: 'contain' }}
                  priority
                />
              </div>

              {/* Chalkboard Styles Assets Overlay (Hand-drawn motifs) */}
              <div className="absolute top-0 right-0 w-[200px] h-[200px] opacity-40 mix-blend-screen pointer-events-none">
                {/* Visual texture fallback if specific SVG motifs aren't in assets */}
              </div>
            </div>

            {/* Right Side: Marketing Copy & Coffee Asset */}
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
              <h3 className="font-heading text-[24px] md:text-[28px] text-white font-semibold leading-tight mb-8">
                Authentic Flavors, Warm Hospitality,<br />
                And A Café Experience Like No Other.
              </h3>

              <div className="space-y-6 max-w-[500px]">
                <p className="font-sans text-[16px] leading-[1.6] opacity-90">
                  From The Aroma Of Freshly Brewed Chai To The Taste Of Traditional Delights, 
                  Our Cafés Bring You The Richness Of Indian Culture. Each Outlet Is Designed To 
                  Create A Cozy And Welcoming Atmosphere, Perfect For Gatherings, Work, Or A Moment Of Relaxation.
                </p>

                <p className="font-sans text-[18px] font-semibold text-[#F9B233]">
                  Find Your Nearest Café And Indulge In The Flavors Of India. Come Visit Us Today!
                </p>
              </div>

              {/* Coffee Cup & Chalk Asset */}
              <div className="mt-12 relative w-full h-[300px] lg:h-[400px]">
                {/* Chalk Text "Coffee" and "Delicious" integrated into the background asset */}
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/181cb15d-0961-460f-888f-83bfd54e1847-sadosacafe-com/assets/images/rb_24426-e1743668516629-17.png"
                  alt="Coffee and Chalk Art"
                  fill
                  className="object-contain object-right lg:object-left"
                />
                
                {/* Decorative Text Elements if they were separate (simulating based on design) */}
                <div className="absolute top-1/4 right-0 lg:left-3/4 font-display text-[48px] text-white opacity-40 rotate-[-15deg] pointer-events-none select-none">
                  Coffee
                </div>
                <div className="absolute bottom-1/4 left-1/4 font-display text-[64px] text-white opacity-20 rotate-[10deg] pointer-events-none select-none">
                  Delicious
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Texture Overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
        style={{ backgroundImage: `url("https://www.transparenttextures.com/patterns/dark-leather.png")` }}
      />
    </section>
  );
};

export default EssenceSection;