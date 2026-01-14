import React from 'react';
import Image from 'next/image';

const JainJuhuChowpatty = () => {
  return (
    <div className="bg-[#F7F1E1] overflow-hidden">
      {/* Jain Menu Section */}
      <section className="relative pt-20 pb-16 px-4 md:px-0">
        <div className="container mx-auto max-w-[1200px]">
          <h2 className="text-[48px] font-bold text-[#912222] text-center font-heading relative pb-3 mb-12 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-[140px] after:height-[3px] after:bg-[#912222]">
            Jain Menu
          </h2>

          <div className="relative flex flex-col md:flex-row items-center justify-between">
            {/* Menu Items List */}
            <div className="w-full md:w-3/5 space-y-8 z-10 text-center md:text-left">
              <div className="group">
                <h3 className="text-[24px] font-semibold text-[#000000] font-sans mb-1">Ernakulam Podi Idli</h3>
              </div>

              <div className="group">
                <h3 className="text-[24px] font-semibold text-[#000000] font-sans mb-1">Rava Dosa (butter/ghee)</h3>
                <p className="text-[14px] text-[#7A7A7A] font-body">Crispy jain rava dosa, served with sambar and coconut chutney.</p>
              </div>

              <div className="group">
                <h3 className="text-[24px] font-semibold text-[#000000] font-sans mb-1">Ghee Roast Podi Utappam</h3>
              </div>

              <div className="group">
                <h3 className="text-[24px] font-semibold text-[#000000] font-sans mb-1">Paneer Nepolian Dosa (PND)</h3>
                <p className="text-[14px] text-[#7A7A7A] font-body max-w-lg mx-auto md:mx-0">Buttery dosa with stuffing of paneer, jain friendly vegetables, cheese and sauces. Our take on veg grilled sandwich.</p>
              </div>

              <div className="group">
                <h3 className="text-[24px] font-semibold text-[#000000] font-sans mb-1">Cheese Burst Pizza Dosa</h3>
              </div>

              <div className="group">
                <h3 className="text-[24px] font-semibold text-[#000000] font-sans mb-1">Cheese Burst Paneer Pizza Dosa</h3>
              </div>

              <div className="group">
                <h3 className="text-[24px] font-semibold text-[#000000] font-sans mb-1">Chocolate Dosa</h3>
              </div>
            </div>

            {/* Jain Splash Graphic */}
            <div className="absolute right-[-10%] top-0 w-[300px] h-[300px] md:w-[600px] md:h-[600px] pointer-events-none z-0">
               <Image 
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/181cb15d-0961-460f-888f-83bfd54e1847-sadosacafe-com/assets/images/Element-e1742618605176-15.png"
                alt="Orange Brush Stroke"
                fill
                className="object-contain opacity-90 scale-125"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Juhu Chowpatty Section */}
      <section className="relative pt-12 pb-24 px-4 md:px-0 overflow-hidden">
        <div className="container mx-auto max-w-[1200px] text-center">
          <h2 className="text-[48px] font-bold text-[#912222] font-heading relative pb-3 mb-6 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-[140px] after:height-[3px] after:bg-[#912222]">
            Juhu Chowpatty™
          </h2>
          
          <p className="text-[16px] text-[#EBA324] font-body italic mb-10 max-w-2xl mx-auto">
            Pav bhaji is a Mumbai treat with mashed veggies, pan-fried and served with with pav jodi toasted in butter.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-12 mb-16">
            {/* Dish Image with Orbital Rings */}
            <div className="relative w-[300px] h-[300px] flex-shrink-0">
              <div className="absolute inset-[-20px] border border-[#EBA324]/30 rounded-full" />
              <div className="absolute inset-[-10px] border border-[#EBA324]/50 rounded-full" />
              <div className="relative w-full h-full rounded-full border-[6px] border-[#EBA324] overflow-hidden shadow-xl">
                <Image 
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/181cb15d-0961-460f-888f-83bfd54e1847-sadosacafe-com/assets/images/20231110034151_IMG_7117-scaled-removebg-preview-re-23.png"
                  alt="Pav Bhaji"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Decorative nodes on rings */}
              <div className="absolute top-[-20px] left-1/2 w-3 h-3 bg-[#EBA324] rounded-full -translate-x-1/2" />
              <div className="absolute bottom-[10px] right-[-15px] w-3 h-3 bg-[#912222] rounded-full" />
            </div>

            {/* Menu Items */}
            <div className="space-y-6 text-center md:text-left">
              <h3 className="text-[28px] font-semibold text-[#000000] font-sans m-0">Pav Bhaji</h3>
              <h3 className="text-[28px] font-semibold text-[#000000] font-sans m-0">Cheese Pav Bhaji</h3>
              <h3 className="text-[28px] font-semibold text-[#000000] font-sans m-0">Paneer Pav Bhaji</h3>
              <h3 className="text-[28px] font-semibold text-[#000000] font-sans m-0">Paneer Cheese Pav Bhaji</h3>
            </div>
          </div>
        </div>

        {/* Mumbai Skyline Illustration Background */}
        <div className="absolute bottom-0 left-0 w-full h-[120px] md:h-[180px] opacity-40 z-[-1] pointer-events-none">
          <svg 
            viewBox="0 0 1440 320" 
            className="w-full h-full preserve-3d" 
            preserveAspectRatio="none"
            fill="#322B22"
          >
            <path d="M0,288L48,272C96,256,192,224,288,213.3C384,203,480,213,576,213.3C672,213,768,203,864,181.3C960,160,1056,128,1152,122.7C1248,117,1344,139,1392,149.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
          {/* Silhouettes of iconic Mumbai structures (Gateway, Sea Link, etc would typically be images/SVGs here) */}
          <div className="absolute inset-0 flex items-end justify-center px-4 overflow-hidden">
            <div className="flex gap-4 items-end grayscale opacity-30 select-none">
               {/* Simplified Skyline blocks to represent the look from screenshot */}
               <div className="w-16 h-32 bg-[#322B22]/60 rounded-t-sm" />
               <div className="w-24 h-48 bg-[#322B22]/80 rounded-t-md" />
               <div className="w-20 h-40 bg-[#322B22]/50 rounded-t-sm" />
               <div className="w-32 h-56 bg-[#322B22]/90 rounded-t-lg" />
               <div className="w-24 h-44 bg-[#322B22]/70 rounded-t-md" />
               <div className="w-16 h-36 bg-[#322B22]/60 rounded-t-sm" />
               <div className="w-28 h-52 bg-[#322B22]/85 rounded-t-md" />
               <div className="w-20 h-44 bg-[#322B22]/50 rounded-t-sm" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JainJuhuChowpatty;