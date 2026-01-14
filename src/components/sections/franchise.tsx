import React from 'react';
import Image from 'next/image';

const Franchise = () => {
  return (
    <section className="relative py-[80px] bg-[#f7f1e1] overflow-hidden">
      <div className="container mx-auto px-4 max-w-[1140px]">
        {/* Section Header */}
        <div className="flex items-center justify-center mb-[40px] gap-8">
          <div className="flex-1 h-[1px] bg-[#633200]/20 hidden sm:block"></div>
          <div className="flex items-center gap-4">
             <div className="w-6 h-6 flex items-center justify-center">
                 <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-brand-brown/40">
                    <path d="M12 7V3L2 12l10 9v-4h10V7H12z" />
                 </svg>
             </div>
            <h3 className="text-[#633200] font-display text-[65px] leading-[1.1em] text-center whitespace-nowrap">
              Our Franchise
            </h3>
            <div className="w-6 h-6 flex items-center justify-center">
                 <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-brand-brown/40">
                    <path d="M12 7V3L22 12l-10 9v-4H2V7h10z" />
                 </svg>
             </div>
          </div>
          <div className="flex-1 h-[1px] bg-[#633200]/20 hidden sm:block"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side: Illustration */}
          <div className="relative flex justify-center items-center">
            {/* Background Circle Decorative Element */}
            <div className="absolute w-[80%] aspect-square bg-[#8dbde6] rounded-full opacity-20 -z-10 blur-3xl"></div>
            
            <div className="relative w-full max-w-[550px] aspect-square transition-transform duration-500 hover:scale-105">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/181cb15d-0961-460f-888f-83bfd54e1847-sadosacafe-com/assets/images/images_23.png"
                alt="Futora Cafe Restaurant Illustration"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Right Side: Content Box */}
          <div className="flex flex-col space-y-6">
            <h5 className="text-[#ffb331] font-heading text-[32px] font-semibold leading-[1.3em]">
              Futora Cafe&apos;s Outlets
            </h5>
            
            <h4 className="text-[#633200] font-heading text-[24px] font-semibold leading-[1.4em]">
              Authentic flavors, warm hospitality, and a café experience like no other.
            </h4>

            <p className="text-[#4a4a4a] font-body text-[16px] leading-[1.8] max-w-xl">
              We started with a vision to revolutionize the way people experience traditional dishes. 
              Our commitment to quality, innovation, and customer satisfaction has helped us grow 
              rapidly. Join our family and be part of our success story!
            </p>

            <div className="pt-4">
              <a 
                href="/#franchise"
                className="inline-block bg-[#ffb331] text-white font-heading font-bold py-3 px-8 rounded-[5px] text-[14px] uppercase tracking-wider transition-all duration-300 hover:bg-[#e09d2a] hover:shadow-lg active:scale-95"
              >
                Know More...
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Franchise;