import React from 'react';
import Image from 'next/image';

/**
 * PizzaDosaJain Component
 * 
 * Clones the combined "Pizza Dosa Menu" and "Jain Menu" sections.
 * Features:
 * - White-to-vibe background transition (wave transition)
 * - Pizza Dosa Menu with specific items and description
 * - Jain Menu with a yellow brush stroke graphic
 * - Pixel-perfect typography and spacing based on computed styles
 */
export default function PizzaDosaJain() {
  return (
    <section className="relative w-full">
      {/* Wave Transition Top - mimicking the wave-brush shape divider */}
      <div className="absolute top-0 left-0 w-full h-[80px] overflow-hidden leading-[0] z-10 pointer-events-none">
        <svg
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          className="relative block w-[calc(118%+1.3px)] h-[80px]"
          fill="#FDF5E1"
        >
          <path d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,224,576,224C672,224,768,181,864,181.3C960,181,1056,224,1152,224C1248,224,1344,181,1392,160L1440,139L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
        </svg>
      </div>

      {/* Pizza Dosa Menu Section */}
      <div className="bg-white pt-28 pb-16">
        <div className="container mx-auto px-4 max-w-[1140px]">
          <div className="text-center mb-12">
            <h2 className="font-heading text-[55px] text-[#BF2026] mb-6 inline-block relative after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 after:-translate-x-1/2 after:w-[120px] after:h-[3px] after:bg-[#BF2026]">
              Pizza Dosa Menu
            </h2>
            <p className="font-body text-[15px] text-[#816B36] max-w-[700px] mx-auto mt-6 font-bold uppercase tracking-wider leading-relaxed">
              A pizza made on Uttapam as a crust. Topped with pizza sauce, paneer, vegetables, mozzarella and explosion of cheese in the middle.
            </p>
          </div>

          <div className="flex flex-col items-center gap-8 text-center">
            <div className="group">
              <h3 className="font-sans text-[22px] font-semibold text-black mb-1">
                Cheese Burst Pizza Dosa
              </h3>
            </div>

            <div className="group">
              <h3 className="font-sans text-[22px] font-semibold text-black mb-1">
                Cheese Burst Paneer Pizza Dosa
              </h3>
            </div>

            <div className="group">
              <h3 className="font-sans text-[22px] font-semibold text-black mb-1">
                Cheese Burst Tandoori Pizza Dosa
              </h3>
            </div>

            <div className="group">
              <h3 className="font-sans text-[22px] font-semibold text-black mb-1">
                Cheese Burst Paneer Tandoori Pizza Dosa
              </h3>
              <p className="font-body text-[14px] text-[#666666] mt-2 italic">
                Dosa gets a fiery makeover introducing Paneer Tandoori Pizza Dosa
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Transition to Jain Menu Background */}
      <div className="bg-[#FDF5E1] pt-20 pb-20 relative overflow-hidden">
        {/* Yellow Brush graphic as per design instructions */}
        <div className="absolute right-[15%] top-4 hidden lg:block opacity-60 pointer-events-none">
          <Image 
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/181cb15d-0961-460f-888f-83bfd54e1847-sadosacafe-com/assets/images/twitch-banner-template-black-history-month-celebra-24.png"
            width={300}
            height={80}
            alt="Yellow Brush Stroke"
            className="object-contain"
          />
        </div>

        <div className="container mx-auto px-4 max-w-[1140px]">
          <div className="text-center mb-16">
            <h2 className="font-heading text-[55px] text-[#BF2026] mb-4 inline-block relative after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 after:-translate-x-1/2 after:w-[120px] after:h-[3px] after:bg-[#BF2026]">
              Jain Menu
            </h2>
          </div>

          <div className="flex flex-col items-start lg:items-center gap-10 max-w-2xl mx-auto lg:mx-auto">
            {/* Jain Items */}
            <div className="w-full text-left lg:text-left transition-transform duration-300 hover:translate-x-2">
              <h3 className="font-sans text-[22px] font-semibold text-black">
                Ernakulam Podi Idli
              </h3>
            </div>

            <div className="w-full text-left lg:text-left transition-transform duration-300 hover:translate-x-2">
              <h3 className="font-sans text-[22px] font-semibold text-black">
                Rava Dosa (butter/ghee)
              </h3>
              <p className="font-body text-[15px] text-[#666666] mt-1">
                Crispy jain rava dosa, served with sambar and coconut chutney.
              </p>
            </div>

            <div className="w-full text-left lg:text-left transition-transform duration-300 hover:translate-x-2">
              <h3 className="font-sans text-[22px] font-semibold text-black">
                Ghee Roast Podi Utappam
              </h3>
            </div>

            <div className="w-full text-left lg:text-left transition-transform duration-300 hover:translate-x-2">
              <h3 className="font-sans text-[22px] font-semibold text-black uppercase tracking-tight">
                Paneer Nepolian Dosa (PND)
              </h3>
              <p className="font-body text-[15px] text-[#666666] mt-1">
                Buttery dosa with stuffing of paneer, jain friendly vegetables, cheese and sauces. Our take on veg grilled sandwich.
              </p>
            </div>

            <div className="w-full text-left lg:text-left transition-transform duration-300 hover:translate-x-2">
              <h3 className="font-sans text-[22px] font-semibold text-black">
                Cheese Burst Pizza Dosa
              </h3>
            </div>

            <div className="w-full text-left lg:text-left transition-transform duration-300 hover:translate-x-2">
              <h3 className="font-sans text-[22px] font-semibold text-black">
                Cheese Burst Paneer Pizza Dosa
              </h3>
            </div>

            <div className="w-full text-left lg:text-left transition-transform duration-300 hover:translate-x-2">
              <h3 className="font-sans text-[22px] font-semibold text-black">
                Chocolate Dosa
              </h3>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative Wave Bottom to separate from next section */}
      <div className="w-full h-[60px] bg-[#FDF5E1]">
         <div className="w-full h-full bg-white rounded-t-[50%] lg:rounded-t-[80%] shadow-inner"></div>
      </div>
    </section>
  );
}